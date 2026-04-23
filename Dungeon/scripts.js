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

let carouselPool = [];
let isSliding = false;

function getRandomPokemonId() {
  return Math.floor(Math.random() * TOTAL_POKEMON) + 1;
}

async function fetchCarouselPokemon(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) return null;
  return res.json();
}

function buildCard(pokemon, isCenter) {
  const sprite = pokemon.sprites.front_default;
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const card = document.createElement("div");
  card.className = `carousel-card${isCenter ? " center" : ""}`;
  card.innerHTML = `
    <img src="${sprite}" alt="${name}" class="object-contain w-20 h-20 sm:w-28 sm:h-28" />
    <span class="text-gray-700 text-xs sm:text-sm font-semibold mt-2">${name}</span>
  `;
  return card;
}

function refreshCenterStyling() {
  const track = document.getElementById("carousel-track");
  Array.from(track.children).forEach((card, i) => {
    card.classList.toggle("center", i === CENTER_INDEX);
  });
}

async function initCarousel() {
  const allIds = Array.from({ length: 15 }, getRandomPokemonId);
  const allPokemons = await Promise.all(allIds.map(fetchCarouselPokemon));

  carouselPool = allPokemons.filter(Boolean);

  const track = document.getElementById("carousel-track");
  track.innerHTML = "";
  carouselPool.slice(0, VISIBLE_COUNT).forEach((pokemon, i) => {
    track.appendChild(buildCard(pokemon, i === CENTER_INDEX));
  });
}

async function slideNext() {
  if (isSliding) return;
  isSliding = true;

  const track = document.getElementById('carousel-track');
  const firstCard = track.children[0];
  const cardWidth = firstCard.offsetWidth;
  const gap = window.innerWidth >= 640 ? 24 : 16;
  const slideDistance = cardWidth + gap;

  carouselPool.currentIndex = ((carouselPool.currentIndex ?? VISIBLE_COUNT) + 1) % carouselPool.length;
  const nextPokemon = carouselPool[carouselPool.currentIndex];
  if (!nextPokemon) { isSliding = false; return; }

  const newCard = buildCard(nextPokemon, false);
  newCard.style.opacity = '0';
  newCard.style.position = 'absolute';
  track.appendChild(newCard);
  newCard.style.position = '';
  newCard.style.opacity = '1';

  track.style.transition = 'none';
  track.style.transform = `translateX(0)`;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = `translateX(-${slideDistance}px)`;
    });
  });

  setTimeout(() => {
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    track.children[0].remove();
    refreshCenterStyling();
    isSliding = false;
  }, 510);
}

// Auto-play
setInterval(slideNext, 5000);

// Init
initCarousel();
///////////////////////////////////////////////////////////////////////////
