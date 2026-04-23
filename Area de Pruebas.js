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

///////////////////////////////////////////////////////////////////////////
// Carousel
const TOTAL_POKEMON = 1025;
const VISIBLE_COUNT = 5;
const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);
const POOL_SIZE = 15;

let carouselPool = [];
let poolIndex = 0;
let isSliding = false;

//////VOY A USAR ESTO EN EL FUTURO
function getRandomPokemonId() {
  return Math.floor(Math.random() * TOTAL_POKEMON) + 1;
}

async function fetchPokemonById(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) return null;
  return res.json();
}

/////// RENDERIZADOR DE CARDS
function buildCard(pokemon, isCenter = false) {
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
setInterval(slideNext, 6000);

// Init
initCarousel();
///////////////////////////////////////////////////////////////////////////
