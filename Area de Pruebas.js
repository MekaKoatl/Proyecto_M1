///////////////////////////////////////////////////////////////////////////
// API - POKEMON
const BASE_URL = "https://pokeapi.co/api/v2";

// API - POKEMON - ID (Pokedex?) - ERROR
async function getPokemon(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!res.ok) throw new Error("Pokemon not found");
  return res.json();
}

// API - POKEMON - SSPECIES - ERROR
async function getPokemonSpecies(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon-species/${nameOrId}`);
  if (!res.ok) throw new Error("Species not found");
  return res.json();
}

// API - POKEMON - INTENTO DE CADENA DE EVOLUCION - ERROR
async function getEvolutionChain(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Evolution chain not found");
  return res.json();
}

// API - POKEMON - FULL POKEMON INFO (Por si el resto no funciona)
async function getFullPokemonData(nameOrId) {
  const pokemon = await getPokemon(nameOrId);
  const species = await getPokemonSpecies(nameOrId);
  const evolutionChain = await getEvolutionChain(species.evolution_chain.url);

  return { pokemon, species, evolutionChain };
}

//  // API - POKEMON - Flavour Text (Try1)
function getEnglishFlavorText(species) {
  const entry = species.flavor_text_entries.find(
    (e) => e.language.name === "en",
  );
  return entry
    ? entry.flavor_text.replace(/\f|\n/g, " ")
    : "No description available.";
}

// API - POKEMON - SSPECIES - GENUS - TRY1
function getEnglishGenus(species) {
  const genus = species.genera.find((g) => g.language.name === "en");
  return genus ? genus.genus : "Unknown";
}

// API - POKEMON - SSPECIES - REGION - TRY1

function getRegion(species) {
  return (
    species.generation?.name?.replace("generation-", "").toUpperCase() ??
    "Unknown"
  );
}

// API - POKEMON - SSPECIES - HABITAT - TRY1
function getHabitat(species) {
  return species.habitat?.name ?? "Unknown";
}

// API - POKEMON - TIPO - TR1
function getTypes(pokemon) {
  return pokemon.types.map((t) => t.type.name);
}

// API - POKEMON - SPRITES - TRY1
function getSprites(pokemon) {
  return {
    front: pokemon.sprites.front_default,
    back: pokemon.sprites.back_default,
    frontShiny: pokemon.sprites.front_shiny,
    backShiny: pokemon.sprites.back_shiny,
  };
}

// API - POKEMON - SSPECIES - EVOLUTION CHAIN (IM NOT SURE)

function parseEvolutionChain(chain) {
  const evolutions = [];

  function traverse(node) {
    const current = {
      name: node.species.name,
      evolvesTo: node.evolves_to.map((e) => ({
        name: e.species.name,
        details: e.evolution_details[0] ?? {},
      })),
    };
    evolutions.push(current);
    node.evolves_to.forEach(traverse);
  }

  traverse(chain.chain);
  return evolutions;
}
///////////////////////////////////////////////////////////////////////////

//////VOY A USAR ESTO EN EL FUTURO
const TOTAL_POKEMON = 1025;
const POOL_SIZE = 15;
function getRandomPokemonId() {
  return Math.floor(Math.random() * TOTAL_POKEMON) + 1;
}
let allLoadedPokemon = [];
let speciesCache = {};

///////////////////////////////////////////////////////////////////////////
// Carousel
const VISIBLE_COUNT = 5;
const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);
let carouselPool = [];
let poolIndex = 0;
let isSliding = false;

async function fetchPokemonById(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) return null;
  return res.json();
}

/////// RENDERIZADOR DE CARDS
function buildCard(pokemon, isCenter = false) {
  // card.dataset.id = pokemon.id;
  const card = document.createElement("div");
  card.className = `carousel-card${isCenter ? " center" : ""}`;
  card.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <span>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
  `;
  return card;
}

function getCardWidth() {
  const track = document.getElementById("carousel-track");
  const card = track.querySelector(".carousel-card");
  const gap = window.innerWidth >= 640 ? 16 : 12;
  return card ? card.offsetWidth + gap : 0;
}

async function initCarousel() {
  const ids = Array.from({ length: POOL_SIZE }, getRandomPokemonId);
  const results = await Promise.all(ids.map(fetchPokemonById));
  carouselPool = results.filter(Boolean);

  const track = document.getElementById("carousel-track");
  track.innerHTML = "";

  //
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    track.appendChild(buildCard(carouselPool[i], i === CENTER_INDEX));
  }

  poolIndex = VISIBLE_COUNT;
}
///////////////////////// ENTIENDO QUE BUILDCARD GENERA LA CARTA, GETCARDWIDTH GENERA SUS DIMENSIONES Y ES PARTE DE MI PROBLEMA CON EL CAROUSEL Y INICAROUSEL LO AGREGA/CONFIRMA

////// PARTE DEL ANIMADOR
async function slideNext() {
  if (isSliding) return;
  isSliding = true;

  //// CONECTA CON LAS CLASES ANTERIORES
  const track = document.getElementById("carousel-track");
  const centerCard = track.children[CENTER_INDEX];

  //
  centerCard.classList.remove("center");
  //TENGO QUE PREGUNTAR ESTO
  await new Promise((r) => setTimeout(r, 500));

  // CONECTOR DE CARTAS
  const nextPokemon = carouselPool[poolIndex % carouselPool.length];
  poolIndex++;

  const newCard = buildCard(nextPokemon, false);
  track.appendChild(newCard);

  // TRANSFORMADOR, CREO QUE ES NECESARIO CHECAR ESTO CON EL CSS
  const slideDistance = getCardWidth();
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${slideDistance}px)`;

  setTimeout(() => {
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    track.children[0].remove();

    Array.from(track.children).forEach((card, i) => {
      card.classList.toggle("center", i === CENTER_INDEX);
    });

    isSliding = false;
  }, 500);
}

// Auto-play
// setInterval(slideNext, 6000);

// Init
// initCarousel();
///////////////////////////////////////////////////////////////////////////

// DXG - Crep que voy a usar la galeria para hacer el buscador de la primera pagina
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DXG - General Gallery
const ROWS_PER_LOAD = 30;
const COLS = 5;
let dexOffset = 1;
const details_id = 0;

function buildDexCard(pokemon) {
  const types = pokemon.types.map((t) => t.type.name);
  const card = document.createElement("div");
  card.className = "dex-card";
  card.dataset.id = pokemon.id;
  card.innerHTML = `
    <span class="dex-card-dexnum">#${card.dataset.id}</span>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <span class="dex-card-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
    <hr>
    <div class="dex-card-types">
      ${types.map((t) => `<span class="type-badge type-${t}">${t}</span>`).join("")}
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `details.html?id=${pokemon.id}`;
    // card.addEventListener("click", () => {
    //   open("details.html");
    //   details_id = card.dataset.id
    // });
  });

  return card;
}

async function loadDexRows() {
  const grid = document.getElementById("dex-grid");
  if (!grid) return;

  const ids = Array.from(
    { length: ROWS_PER_LOAD * COLS },
    (_, i) => dexOffset + i,
  );
  dexOffset += ROWS_PER_LOAD * COLS;

  const pokemons = await Promise.all(ids.map(fetchPokemonById));
  const valid = pokemons.filter(Boolean);
  allLoadedPokemon.push(...valid);
  valid.forEach((p) => grid.appendChild(buildDexCard(p)));
}

function initFilters() {
  const types = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];
  const regions = [
    "kanto",
    "johto",
    "hoenn",
    "sinnoh",
    "unova",
    "kalos",
    "alola",
    "galar",
    "paldea",
  ];
  const gens = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const evos = [
    { val: 1, label: "No evolutions" },
    { val: 2, label: "2 in chain" },
    { val: 3, label: "3 in chain" },
  ];

  function populate(containerId, items, className, labelFn, valueFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    items.forEach((item) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" value="${valueFn(item)}" class="${className}" /> ${labelFn(item)}`;
      container.appendChild(label);
    });
  }

  populate(
    "filter-types",
    types,
    "filter-type-check",
    (t) => `<span class="type-badge type-${t}">${t}</span>`,
    (t) => t,
  );
  populate(
    "filter-regions",
    regions,
    "filter-region-check",
    (r) => r.charAt(0).toUpperCase() + r.slice(1),
    (r) => r,
  );
  populate(
    "filter-gens",
    gens,
    "filter-gen-check",
    (g) => `Gen ${g}`,
    (g) => g,
  );
  populate(
    "filter-letters",
    letters,
    "filter-letter-check",
    (l) => l,
    (l) => l,
  );
  populate(
    "filter-evos",
    evos,
    "filter-evo-check",
    (e) => e.label,
    (e) => e.val,
  );

  // Toggle dropdowns
  document.querySelectorAll(".filter-group-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;
      const isOpen = dropdown.classList.contains("open");
      document
        .querySelectorAll(".filter-dropdown")
        .forEach((d) => d.classList.remove("open"));
      if (!isOpen) dropdown.classList.add("open");
    });
  });

  // Close on outside click
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-dropdown")
      .forEach((d) => d.classList.remove("open"));
  });
}

// initFilters();

// const loadMoreBtn = document.getElementById("load-more-btn");
// if (loadMoreBtn) {
//   loadMoreBtn.addEventListener("click", loadDexRows);
//   loadDexRows();
// }

// DXG - Filters /////////////////////////////////////////////////7

async function getSpeciesData(pokemon) {
  if (speciesCache[pokemon.id]) return speciesCache[pokemon.id];
  const res = await fetch(pokemon.species.url);
  if (!res.ok) return null;
  const species = await res.json();
  speciesCache[pokemon.id] = species;
  return species;
}

async function getEvoChainLength(species) {
  const res = await fetch(species.evolution_chain.url);
  if (!res.ok) return 1;
  const data = await res.json();
  let count = 0;
  let node = data.chain;
  while (node) {
    count++;
    node = node.evolves_to?.[0] ?? null;
  }
  return count;
}

async function applyFilters() {
  const types = [
    ...document.querySelectorAll(".filter-type-check:checked"),
  ].map((c) => c.value);
  const regions = [
    ...document.querySelectorAll(".filter-region-check:checked"),
  ].map((c) => c.value);
  const gens = [...document.querySelectorAll(".filter-gen-check:checked")].map(
    (c) => Number(c.value),
  );
  const letters = [
    ...document.querySelectorAll(".filter-letter-check:checked"),
  ].map((c) => c.value.toLowerCase());
  const evos = [...document.querySelectorAll(".filter-evo-check:checked")].map(
    (c) => Number(c.value),
  );

  const noFilters =
    !types.length &&
    !regions.length &&
    !gens.length &&
    !letters.length &&
    !evos.length;

  const grid = document.getElementById("dex-grid");
  grid.innerHTML = "";

  for (const pokemon of allLoadedPokemon) {
    if (noFilters) {
      grid.appendChild(buildDexCard(pokemon));
      continue;
    }

    // Tipo Filtro
    if (types.length) {
      const pTypes = pokemon.types.map((t) => t.type.name);
      if (!types.some((t) => pTypes.includes(t))) continue;
    }

    // Letra Filtro
    if (letters.length && !letters.includes(pokemon.name[0])) continue;

    // Especie filtro
    const species = await getSpeciesData(pokemon);
    if (!species) continue;

    // Region filteo
    if (regions.length) {
      const region = species.generation?.name?.replace("generation-", "");
      const regionMap = {
        i: "kanto",
        ii: "johto",
        iii: "hoenn",
        iv: "sinnoh",
        v: "unova",
        vi: "kalos",
        vii: "alola",
        viii: "galar",
        ix: "paldea",
      };
      const mapped = regionMap[region];
      if (!regions.includes(mapped)) continue;
    }

    // Generation filtro
    if (gens.length) {
      const genNum = {
        i: 1,
        ii: 2,
        iii: 3,
        iv: 4,
        v: 5,
        vi: 6,
        vii: 7,
        viii: 8,
        ix: 9,
      };
      const g = genNum[species.generation?.name?.replace("generation-", "")];
      if (!gens.includes(g)) continue;
    }

    // Evolution chain filtro
    if (evos.length) {
      const chainLen = await getEvoChainLength(species);
      if (!evos.includes(chainLen)) continue;
    }

    grid.appendChild(buildDexCard(pokemon));
  }
}

const applyBtn = document.getElementById("apply-filters-btn");
if (applyBtn) applyBtn.addEventListener("click", applyFilters);


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// Details Page
if (
  document.querySelector("body") &&
  window.location.pathname.includes("details")
) {
  const params = new URLSearchParams(window.location.search);
  const pokemonId = params.get("id");
  if (pokemonId) {
    console.log("Pokemon ID:", pokemonId);
  }
}
///////////////////////////////////////////////////////////////////////////
///Trying to fix
// Page-specific init
const carouselTrack = document.getElementById('carousel-track');
if (carouselTrack) {
  setInterval(slideNext, 6000);
  initCarousel();
}

const loadMoreBtn = document.getElementById('load-more-btn');
if (loadMoreBtn) {
  initFilters();
  loadMoreBtn.addEventListener('click', loadDexRows);
  loadDexRows();
}