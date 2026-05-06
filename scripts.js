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
// Carousel y Buscadode de Index
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
  const card = document.createElement("div");
  card.className = `carousel-card${isCenter ? " center" : ""}`;
  const staticSprite = pokemon.sprites.front_default;
  const animatedSprite =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default || staticSprite;
  card.innerHTML = `
    <img 
      src="${isCenter ? animatedSprite : staticSprite}" 
      data-static="${staticSprite}"
      data-animated="${animatedSprite}"
      alt="${pokemon.name}" 
    />
    <span>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
  `;
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    window.location.href = `details.html?id=${pokemon.id}`;
  });
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

// Index buscador asi es
const idxGrid = document.getElementById("dex-grid");
if (idxGrid && !document.getElementById("load-more-btn")) {
  initFilters();
  loadAllPokemonNames();

  // Load (5 rows x 3 cols)
  (async () => {
    const ids = Array.from({ length: 15 }, (_, i) => i + 1);
    const pokemons = (await Promise.all(ids.map(fetchPokemonById))).filter(
      Boolean,
    );
    allLoadedPokemon.push(...pokemons);
    pokemons.forEach((p) => idxGrid.appendChild(buildDexCard(p)));
  })();

  // Toggle sidebar dropdowns PORQ CHINGADOS
  document.querySelectorAll(".index-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dropdown = btn.nextElementSibling;
      dropdown.classList.toggle("open");
    });
  });

  // Search
  let idxSearchTimeout;
  document.getElementById("pokemon-search")?.addEventListener("input", (e) => {
    clearTimeout(idxSearchTimeout);
    idxSearchTimeout = setTimeout(
      () => searchPokemon(e.target.value.trim()),
      400,
    );
  });
}
///////////////////////////////////////
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
      const img = card.querySelector("img");
      if (img) {
        img.src =
          i === CENTER_INDEX ? img.dataset.animated : img.dataset.static;
      }
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
  const staticSprite = pokemon.sprites.front_default;
  const animatedSprite = pokemon.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default || staticSprite;
  
  const card = document.createElement("div");
  card.className = "dex-card";
  card.dataset.id = pokemon.id;
  card.innerHTML = `
    <span class="dex-card-dexnum">#${card.dataset.id}</span>
    <img src="${staticSprite}" data-static="${staticSprite}" data-animated="${animatedSprite}" alt="${pokemon.name}" />
    <span class="dex-card-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
    <hr>
    <div class="dex-card-types">
      ${types.map((t) => `<span class="type-badge type-${t}">${t}</span>`).join("")}
    </div>
  `;

  const img = card.querySelector('img');
  card.addEventListener('mouseenter', () => { img.src = img.dataset.animated; });
  card.addEventListener('mouseleave', () => { img.src = img.dataset.static; });
  card.addEventListener("click", () => {
    window.location.href = `details.html?id=${pokemon.id}`;
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

// function initFilters() {
//   const types = ['normal','fire','water','grass','electric','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'];
//   const regions = ['kanto','johto','hoenn','sinnoh','unova','kalos','alola','galar','paldea'];
//   const gens = [1,2,3,4,5,6,7,8,9];
//   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   const evos = [{ val: 1, label: 'No evolutions' }, { val: 2, label: '2 in chain' }, { val: 3, label: '3 in chain' }];

//   function populate(containerId, items, className, labelFn, valueFn) {
//     const container = document.getElementById(containerId);
//     if (!container) return;
//     items.forEach(item => {
//       const label = document.createElement('label');
//       label.className = 'flex items-center gap-1 cursor-pointer text-sm select-none';
//       label.innerHTML = `<input type="checkbox" value="${valueFn(item)}" class="${className}" /> ${labelFn(item)}`;
//       container.appendChild(label);
//     });
//   }

//   populate('filter-types', types, 'filter-type-check',
//     t => `<span class="type-badge type-${t}">${t}</span>`, t => t);
//   populate('filter-regions', regions, 'filter-region-check',
//     r => r.charAt(0).toUpperCase() + r.slice(1), r => r);
//   populate('filter-gens', gens, 'filter-gen-check',
//     g => `Gen ${g}`, g => g);
//   populate('filter-letters', letters, 'filter-letter-check',
//     l => l, l => l);
//   populate('filter-evos', evos, 'filter-evo-check',
//     e => e.label, e => e.val);

//   const clearBtn = document.getElementById('clear-filters-btn');
//   if (clearBtn) {
//     clearBtn.addEventListener('click', () => {
//       document.querySelectorAll('.filter-type-check, .filter-region-check, .filter-gen-check, .filter-letter-check, .filter-evo-check')
//         .forEach(cb => cb.checked = false);
//       const grid = document.getElementById('dex-grid');
//       grid.innerHTML = '';
//       allLoadedPokemon.forEach(p => grid.appendChild(buildDexCard(p)));
//     });
//   }
// }

// initFilters();

// const loadMoreBtn = document.getElementById("load-more-btn");
// if (loadMoreBtn) {
//   loadMoreBtn.addEventListener("click", loadDexRows);
//   loadDexRows();
// }

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
      label.className =
        "flex items-center gap-1 cursor-pointer text-sm select-none";
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

  const clearBtn = document.getElementById("clear-filters-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      document
        .querySelectorAll(
          ".filter-type-check, .filter-region-check, .filter-gen-check, .filter-letter-check, .filter-evo-check",
        )
        .forEach((cb) => (cb.checked = false));
      const grid = document.getElementById("dex-grid");
      grid.innerHTML = "";
      allLoadedPokemon.forEach((p) => grid.appendChild(buildDexCard(p)));
    });
  }
}

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

// async function applyFilters() {
//   const types = [...document.querySelectorAll('.filter-type-check:checked')].map(c => c.value);
//   const regions = [...document.querySelectorAll('.filter-region-check:checked')].map(c => c.value);
//   const gens = [...document.querySelectorAll('.filter-gen-check:checked')].map(c => Number(c.value));
//   const letters = [...document.querySelectorAll('.filter-letter-check:checked')].map(c => c.value.toLowerCase());
//   const evos = [...document.querySelectorAll('.filter-evo-check:checked')].map(c => Number(c.value));

//   const noFilters = !types.length && !regions.length && !gens.length && !letters.length && !evos.length;

//   const grid = document.getElementById('dex-grid');
//   grid.innerHTML = '<p class="text-gray-400 col-span-5 text-center py-8">Loading...</p>';

//   if (noFilters) {
//     grid.innerHTML = '';
//     allLoadedPokemon.forEach(p => grid.appendChild(buildDexCard(p)));
//     return;
//   }

//   // Fetch IDs from API endpoints
//   let idSets = [];

//   if (types.length) {
//     const results = await Promise.all(types.map(async t => {
//       const res = await fetch(`${BASE_URL}/type/${t}`);
//       const data = await res.json();
//       return data.pokemon.map(p => p.pokemon.name);
//     }));
//     idSets.push(new Set(results.flat()));
//   }

//   if (gens.length) {
//     const genNames = { 1:'generation-i', 2:'generation-ii', 3:'generation-iii', 4:'generation-iv', 5:'generation-v', 6:'generation-vi', 7:'generation-vii', 8:'generation-viii', 9:'generation-ix' };
//     const results = await Promise.all(gens.map(async g => {
//       const res = await fetch(`${BASE_URL}/generation/${genNames[g]}`);
//       const data = await res.json();
//       return data.pokemon_species.map(p => p.name);
//     }));
//     idSets.push(new Set(results.flat()));
//   }

//   if (regions.length) {
//     const regionToGen = { kanto:'generation-i', johto:'generation-ii', hoenn:'generation-iii', sinnoh:'generation-iv', unova:'generation-v', kalos:'generation-vi', alola:'generation-vii', galar:'generation-viii', paldea:'generation-ix' };
//     const results = await Promise.all(regions.map(async r => {
//       const res = await fetch(`${BASE_URL}/generation/${regionToGen[r]}`);
//       const data = await res.json();
//       return data.pokemon_species.map(p => p.name);
//     }));
//     idSets.push(new Set(results.flat()));
//   }

//   // Intersect all sets
//   let finalNames;
//   if (idSets.length === 0) {
//     finalNames = null;
//   } else {
//     finalNames = idSets.reduce((a, b) => new Set([...a].filter(x => b.has(x))));
//   }

//   // Fetch full pokemon data
//   let pokemons = await Promise.all([...finalNames].map(name => fetchPokemonById(name)));
//   pokemons = pokemons.filter(Boolean);

//   // Letter filter
//   if (letters.length) {
//     pokemons = pokemons.filter(p => letters.includes(p.name[0]));
//   }

//   // Evo filter (requires species fetch)
//   if (evos.length) {
//     const filtered = [];
//     for (const p of pokemons) {
//       const species = await getSpeciesData(p);
//       if (!species) continue;
//       const chainLen = await getEvoChainLength(species);
//       if (evos.includes(chainLen)) filtered.push(p);
//     }
//     pokemons = filtered;
//   }

//   // Sort by ID
//   pokemons.sort((a, b) => a.id - b.id);

//   grid.innerHTML = '';
//   if (pokemons.length === 0) {
//     grid.innerHTML = '<p class="text-gray-400 col-span-5 text-center py-8">No Pokémon found.</p>';
//     return;
//   }

//   pokemons.forEach(p => grid.appendChild(buildDexCard(p)));
// }

// Buscador de Pokemon
let allPokemonNames = [];

async function loadAllPokemonNames() {
  const res = await fetch(`${BASE_URL}/pokemon?limit=1025`);
  const data = await res.json();
  allPokemonNames = data.results.map((p) => p.name);
}

async function searchPokemon(query) {
  const grid = document.getElementById("dex-grid");
  if (!query) {
    grid.innerHTML = "";
    allLoadedPokemon.forEach((p) => grid.appendChild(buildDexCard(p)));
    return;
  }

  const matches = allPokemonNames.filter((name) =>
    name.includes(query.toLowerCase()),
  );
  grid.innerHTML =
    '<p class="text-gray-400 col-span-5 text-center py-8">Loading...</p>';

  const pokemons = (
    await Promise.all(matches.map((name) => fetchPokemonById(name)))
  ).filter(Boolean);
  pokemons.sort((a, b) => a.id - b.id);

  grid.innerHTML = "";
  if (pokemons.length === 0) {
    grid.innerHTML =
      '<p class="text-gray-400 col-span-5 text-center py-8">No Pokémon found.</p>';
    return;
  }

  pokemons.forEach((p) => grid.appendChild(buildDexCard(p)));
}

const searchInput = document.getElementById("pokemon-search");
if (searchInput) {
  loadAllPokemonNames();

  let searchTimeout;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(
      () => searchPokemon(searchInput.value.trim()),
      400,
    );
  });

  const clearSearchBtn = document.getElementById("clear-search-btn");
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchPokemon("");
    });
  }
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
  grid.innerHTML =
    '<p class="text-gray-400 col-span-5 text-center py-8">Loading...</p>';

  if (noFilters) {
    grid.innerHTML = "";
    allLoadedPokemon.forEach((p) => grid.appendChild(buildDexCard(p)));
    return;
  }

  const genNames = {
    1: "generation-i",
    2: "generation-ii",
    3: "generation-iii",
    4: "generation-iv",
    5: "generation-v",
    6: "generation-vi",
    7: "generation-vii",
    8: "generation-viii",
    9: "generation-ix",
  };
  const regionToGen = {
    kanto: "generation-i",
    johto: "generation-ii",
    hoenn: "generation-iii",
    sinnoh: "generation-iv",
    unova: "generation-v",
    kalos: "generation-vi",
    alola: "generation-vii",
    galar: "generation-viii",
    paldea: "generation-ix",
  };

  let idSets = [];

  // Type filter — returns pokemon names directly
  if (types.length) {
    const results = await Promise.all(
      types.map(async (t) => {
        const res = await fetch(`${BASE_URL}/type/${t}`);
        const data = await res.json();
        return data.pokemon.map((p) => p.pokemon.name);
      }),
    );
    idSets.push(new Set(results.flat()));
  }

  // Generation filter — returns species names, need to fetch each species url to get pokemon name
  if (gens.length) {
    const results = await Promise.all(
      gens.map(async (g) => {
        const res = await fetch(`${BASE_URL}/generation/${genNames[g]}`);
        const data = await res.json();
        const speciesNames = data.pokemon_species.map((p) => p.name);
        return speciesNames;
      }),
    );
    idSets.push(new Set(results.flat()));
  }

  // Region filter — same as generation
  if (regions.length) {
    const results = await Promise.all(
      regions.map(async (r) => {
        const res = await fetch(`${BASE_URL}/generation/${regionToGen[r]}`);
        const data = await res.json();
        return data.pokemon_species.map((p) => p.name);
      }),
    );
    idSets.push(new Set(results.flat()));
  }

  // Intersect all sets
  let finalNames = idSets.reduce(
    (a, b) => new Set([...a].filter((x) => b.has(x))),
  );

  // Fetch full pokemon data for all matched names
  const pokemons = (
    await Promise.all(
      [...finalNames].map(async (name) => {
        const res = await fetch(`${BASE_URL}/pokemon/${name}`);
        if (!res.ok) return null;
        return res.json();
      }),
    )
  ).filter(Boolean);

  // Letter filter
  let filtered = letters.length
    ? pokemons.filter((p) => letters.includes(p.name[0]))
    : pokemons;

  // Evo filter
  if (evos.length) {
    const evoFiltered = [];
    for (const p of filtered) {
      const species = await getSpeciesData(p);
      if (!species) continue;
      const chainLen = await getEvoChainLength(species);
      if (evos.includes(chainLen)) evoFiltered.push(p);
    }
    filtered = evoFiltered;
  }

  // Sort by ID
  filtered.sort((a, b) => a.id - b.id);

  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML =
      '<p class="text-gray-400 col-span-5 text-center py-8">No Pokémon found.</p>';
    return;
  }

  filtered.forEach((p) => grid.appendChild(buildDexCard(p)));
}

const applyBtn = document.getElementById("apply-filters-btn");
if (applyBtn) applyBtn.addEventListener("click", applyFilters);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// Details Page
// Details Page
if (window.location.pathname.includes("details")) {
  const params = new URLSearchParams(window.location.search);
  const pokemonId = params.get("id");

  if (pokemonId) {
    (async () => {
      const pokemon = await getPokemon(pokemonId);
      const species = await getPokemonSpecies(pokemonId);
      const evoChain = await getEvolutionChain(species.evolution_chain.url);

      // Name + DEX ID
      document.getElementById("detail-name").textContent =
        `#${String(pokemon.id).padStart(3, "0")} ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;

      // Genus
      document.getElementById("detail-genus").textContent =
        getEnglishGenus(species);

      // Main sprite
      const mainSprite = pokemon.sprites.front_default;
      document.getElementById("sprite-main").src = mainSprite;
      document.getElementById("sprite-evo").src = mainSprite;
      document.getElementById("detail-evo-name").textContent =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

      // Sprite gallery
      const sprites = [
        { src: pokemon.sprites.front_default, label: "Front" },
        { src: pokemon.sprites.back_default, label: "Back" },
        { src: pokemon.sprites.front_shiny, label: "Shiny" },
        { src: pokemon.sprites.back_shiny, label: "Back Shiny" },
        {
          src: pokemon.sprites.versions?.["generation-v"]?.["black-white"]
            ?.animated?.front_default,
          label: "Animated",
        },
        {
          src: pokemon.sprites.versions?.["generation-v"]?.["black-white"]
            ?.animated?.back_default,
          label: "Animated Back",
        },
      ].filter((s) => s.src);

      const gallery = document.getElementById("sprite-gallery");
      sprites.forEach((s) => {
        const img = document.createElement("img");
        img.src = s.src;
        img.alt = s.label;
        img.className =
          "w-24 h-24 object-contain bg-gray-100 rounded-lg cursor-pointer hover:ring-2 hover:ring-red-400 transition";
        img.addEventListener("click", () => {
          document.getElementById("sprite-main").src = s.src;
        });
        gallery.appendChild(img);
      });

      // Types
      const typesEl = document.getElementById("detail-types");
      pokemon.types.forEach((t) => {
        const badge = document.createElement("span");
        badge.className = `type-badge type-${t.type.name}`;
        badge.textContent = t.type.name;
        typesEl.appendChild(badge);
      });

      // Generation
      const genRaw = species.generation?.name ?? "";
      const genMap = {
        "generation-i": "I",
        "generation-ii": "II",
        "generation-iii": "III",
        "generation-iv": "IV",
        "generation-v": "V",
        "generation-vi": "VI",
        "generation-vii": "VII",
        "generation-viii": "VIII",
        "generation-ix": "IX",
      };
      const regionMap = {
        "generation-i": "Kanto",
        "generation-ii": "Johto",
        "generation-iii": "Hoenn",
        "generation-iv": "Sinnoh",
        "generation-v": "Unova",
        "generation-vi": "Kalos",
        "generation-vii": "Alola",
        "generation-viii": "Galar",
        "generation-ix": "Paldea",
      };
      document.getElementById("detail-generation").innerHTML =
        `<span class="font-bold">Gen ${genMap[genRaw]}</span> <span class="text-gray-400">— ${regionMap[genRaw]}</span>`;

      // Habitat
      document.getElementById("detail-habitat").textContent =
        getHabitat(species);

      // Flavor text
      document.getElementById("detail-flavor").textContent =
        getEnglishFlavorText(species);

      // Evolution chain
      const evolutions = parseEvolutionChain(evoChain);
      const currentEvo = evolutions.find((e) => e.name === pokemon.name);
      const prevEvo = evolutions.find((e) =>
        e.evolvesTo.some((ev) => ev.name === pokemon.name),
      );

      if (prevEvo) {
        const prevPokemon = await getPokemon(prevEvo.name);
        document.getElementById("detail-evolves-from").innerHTML = `
  <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Evolves From</h3>
  <img src="${prevPokemon.sprites.front_default}" class="w-16 h-16 object-contain mx-auto" />
  <p class="text-sm font-semibold text-gray-700 mt-1 capitalize">${prevEvo.name}</p>
`;
        document.getElementById("detail-evolves-from").style.cursor = "pointer";
        document
          .getElementById("detail-evolves-from")
          .addEventListener("click", () => {
            window.location.href = `details.html?id=${prevPokemon.id}`;
          });
      }

      if (currentEvo?.evolvesTo?.length) {
        const nextName = currentEvo.evolvesTo[0].name;
        const nextPokemon = await getPokemon(nextName);
        document.getElementById("detail-evolves-to").innerHTML = `
  <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Evolves To</h3>
  <img src="${nextPokemon.sprites.front_default}" class="w-16 h-16 object-contain mx-auto" />
  <p class="text-sm font-semibold text-gray-700 mt-1 capitalize">${nextName}</p>
`;
        document.getElementById("detail-evolves-to").style.cursor = "pointer";
        document
          .getElementById("detail-evolves-to")
          .addEventListener("click", () => {
            window.location.href = `details.html?id=${nextPokemon.id}`;
          });
      }
    })();
  }
}
///////////////////////////////////////////////////////////////////////////
///Trying to fix
// Page-specific init
const carouselTrack = document.getElementById("carousel-track");
if (carouselTrack) {
  setInterval(slideNext, 6000);
  initCarousel();
}

const loadMoreBtn = document.getElementById("load-more-btn");
if (loadMoreBtn) {
  initFilters();
  loadMoreBtn.addEventListener("click", loadDexRows);
  loadDexRows();
}

// Back to topppps
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("hidden", window.scrollY < 400);
    backToTopBtn.classList.toggle("flex", window.scrollY >= 400);
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Hamburger menu
const hamburgerBtn = document.getElementById("hamburger-btn");
if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("open");
  });
}