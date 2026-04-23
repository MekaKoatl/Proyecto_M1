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
// Generar Carousel
// Carousel
const TOTAL_POKEMON = 1025;
const VISIBLE_COUNT = 4;
const CENTER_INDEX = 2;

let carouselIds = [];
let isSliding = false;

// Generar un ID RANDOM DE POKEMON, ESTO PUEDE FUNCIONAR FUERA DE CAROUSEK
function getRandomPokemonId() {
  return Math.floor(Math.random() * TOTAL_POKEMON) + 1;
}

//GUARDO EL ID GENERADO PARA NO CONFUNDIRME
function generateCarouselIds(count) {
  return Array.from({ length: count }, getRandomPokemonId);
}

//LLAMO A LA API PARA INFO DEL CAROUSEL
async function fetchCarouselPokemon(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) return null;
  return res.json();
}

// Customizador de Cartas de Carousel
function buildCard(pokemon, isCenter) {
  //Este es el sprite
  const sprite = pokemon.sprites.front_default;
  //Este es el nombre
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  //Esto define tamaño
  const sizeClass = isCenter
    ? "w-36 h-36 sm:w-48 sm:h-48 bg-gray-200 shadow-xl scale-110"
    : "w-28 h-28 sm:w-36 sm:h-36 bg-gray-100 opacity-60";

  //Esta siguiente parte genera el card y lo "renderiza"
  const card = document.createElement("div");
  card.className = `flex-shrink-0 flex flex-col items-center justify-center rounded-xl transition-all duration-500 ${sizeClass}`;
  card.innerHTML = `
    <img src="${sprite}" alt="${name}" class="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
    <span class="text-gray-700 text-xs sm:text-sm font-semibold mt-1">${name}</span>
  `;
  return card;
}

/////////////
// Funcion para animar (trying, ejemplpo de linea)
async function populateTrack(ids) {
  const pokemons = await Promise.all(ids.map(fetchCarouselPokemon));
  const track = document.getElementById("carousel-track");
  track.innerHTML = "";
  pokemons.forEach((pokemon, i) => {
    if (!pokemon) return;
    track.appendChild(buildCard(pokemon, i === CENTER_INDEX));
  });
}

async function initCarousel() {
  carouselIds = generateCarouselIds(VISIBLE_COUNT + 1);
  await populateTrack(carouselIds);
}

async function slideNext() {
  if (isSliding) return;
  isSliding = true;

  const newId = getRandomPokemonId();
  const newPokemon = await fetchCarouselPokemon(newId);
  if (!newPokemon) {
    isSliding = false;
    return;
  }

  const track = document.getElementById("carousel-track");

  // Crear card para nuevos Pokemon, creo que esto es infinito y tengo que modificarlo
  const newCard = buildCard(newPokemon, false);
  newCard.classList.add("opacity-0");
  track.appendChild(newCard);

  // Ingresa la carta en el carousel
  const cardWidth = track.children[0].offsetWidth;
  const gap = 24;
  const slideDistance = cardWidth + gap;

  // IZQ
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${slideDistance}px)`;

  setTimeout(() => {
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    track.children[0].remove();
    newCard.classList.remove("opacity-0");

    // Animación de pokemon central
    Array.from(track.children).forEach((card, i) => {
      const isCenter = i === CENTER_INDEX;
      card.className = card.className
        .replace(
          /w-36|w-28|h-36|h-28|sm:w-48|sm:h-48|sm:w-36|sm:h-36|bg-gray-200|bg-gray-100|shadow-xl|scale-110|opacity-60/g,
          "",
        )
        .trim();
      card.classList.add(
        ...(isCenter
          ? [
              "w-36",
              "h-36",
              "sm:w-48",
              "sm:h-48",
              "bg-gray-200",
              "shadow-xl",
              "scale-110",
            ]
          : [
              "w-28",
              "h-28",
              "sm:w-36",
              "sm:h-36",
              "bg-gray-100",
              "opacity-60",
            ]),
      );
    });

    isSliding = false;
  }, 500);

  carouselIds.shift();
  carouselIds.push(newId);
}

// Touch
// let dragStartX = 0;
// const track = document.getElementById('carousel-track');

// track.addEventListener('mousedown', e => { dragStartX = e.clientX; });
// track.addEventListener('mouseup', e => {
//   const diff = dragStartX - e.clientX;
//   if (Math.abs(diff) > 40) shiftCarousel(diff > 0 ? 'next' : 'prev');
// });
// track.addEventListener('touchstart', e => { dragStartX = e.touches[0].clientX; });
// track.addEventListener('touchend', e => {
//   const diff = dragStartX - e.changedTouches[0].clientX;
//   if (Math.abs(diff) > 40) shiftCarousel(diff > 0 ? 'next' : 'prev');
// });

// Auto-play
setInterval(slideNext, 5000);

// Init
initCarousel();
///////////////////////////////////////////////////////////////////////////
