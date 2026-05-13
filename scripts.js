///////////////////////////////////////////////////////////////////////////
// API - POKEMON
const BASE_URL = "https://pokeapi.co/api/v2";

async function getPokemon(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!res.ok) throw new Error("Pokemon not found");
  return res.json();
}

async function getPokemonSpecies(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon-species/${nameOrId}`);
  if (!res.ok) throw new Error("Species not found");
  return res.json();
}

async function getEvolutionChain(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Evolution chain not found");
  return res.json();
}

function getEnglishFlavorText(species) {
  const entry = species.flavor_text_entries.find(
    (e) => e.language.name === "en",
  );
  return entry
    ? entry.flavor_text.replace(/\f|\n/g, " ")
    : "No description available.";
}

function getEnglishGenus(species) {
  const genus = species.genera.find((g) => g.language.name === "en");
  return genus ? genus.genus : "Unknown";
}

function getHabitat(species) {
  return species.habitat?.name ?? "Unknown";
}

function parseEvolutionChain(chain) {
  const evolutions = [];
  function traverse(node) {
    evolutions.push({
      name: node.species.name,
      evolvesTo: node.evolves_to.map((e) => ({
        name: e.species.name,
        details: e.evolution_details[0] ?? {},
      })),
    });
    node.evolves_to.forEach(traverse);
  }
  traverse(chain.chain);
  return evolutions;
}

///////////////////////////////////////////////////////////////////////////
// Shared state
const TOTAL_POKEMON = 1025;
const POOL_SIZE = 15;
function getRandomPokemonId() {
  return Math.floor(Math.random() * TOTAL_POKEMON) + 1;
}
let allLoadedPokemon = [];
let speciesCache = {};
let evoChainCache = {};
let allPokemonNames = [];

async function fetchPokemonById(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) return null;
  return res.json();
}

async function fetchInBatches(items, fetchFn, batchSize = 20) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fetchFn));
    results.push(...batchResults);
  }
  return results;
}

async function loadAllPokemonNames() {
  const res = await fetch(`${BASE_URL}/pokemon?limit=1025`);
  const data = await res.json();
  allPokemonNames = data.results.map((p) => p.name);
}

///////////////////////////////////////////////////////////////////////////
// Carousel
const VISIBLE_COUNT = 5;
const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);
let carouselPool = [];
let poolIndex = 0;
let isSliding = false;

function buildCard(pokemon, isCenter = false) {
  const card = document.createElement("div");
  card.className = `carousel-card${isCenter ? " center" : ""}`;
  const staticSprite = pokemon.sprites.front_default;
  const animatedSprite =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default || staticSprite;
  card.innerHTML = `
    <img src="${isCenter ? animatedSprite : staticSprite}"
      data-static="${staticSprite}" data-animated="${animatedSprite}"
      alt="${pokemon.name}" />
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
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    track.appendChild(buildCard(carouselPool[i], i === CENTER_INDEX));
  }
  poolIndex = VISIBLE_COUNT;
}

async function slideNext() {
  if (isSliding) return;
  isSliding = true;
  const track = document.getElementById("carousel-track");
  const centerCard = track.children[CENTER_INDEX];
  centerCard.classList.remove("center");
  await new Promise((r) => setTimeout(r, 500));
  const nextPokemon = carouselPool[poolIndex % carouselPool.length];
  poolIndex++;
  const newCard = buildCard(nextPokemon, false);
  track.appendChild(newCard);
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

///////////////////////////////////////////////////////////////////////////
// Dex Cards
function buildDexCard(pokemon) {
  const types = pokemon.types.map((t) => t.type.name);
  const staticSprite = pokemon.sprites.front_default;
  const animatedSprite =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default || staticSprite;
  const card = document.createElement("div");
  card.className = "dex-card";
  const dataEntry =
    typeof POKEMON_DATA !== "undefined"
      ? POKEMON_DATA.find((e) => e.id === pokemon.id)
      : null;
  const forms = dataEntry?.forms ?? [];
  card.dataset.id = pokemon.id;
  card.innerHTML = `
  ${
    forms.length
      ? `
  <div class="form-badges">
    ${forms.map((f) => `<span class="form-badge form-badge-${f}">${f}</span>`).join("")}
  </div>`
      : ""
  }  
  <span class="dex-card-dexnum">#${pokemon.id}</span>
    <img src="${staticSprite}" data-static="${staticSprite}" data-animated="${animatedSprite}" alt="${pokemon.name}" />
    <span class="dex-card-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
    <hr>
    <div class="dex-card-types">
      ${types.map((t) => `<span class="type-badge type-${t}">${t}</span>`).join("")}
    </div>
  `;
  const img = card.querySelector("img");
  card.addEventListener("mouseenter", () => {
    img.src = img.dataset.animated;
  });
  card.addEventListener("mouseleave", () => {
    img.src = img.dataset.static;
  });
  card.addEventListener("click", () => {
    window.location.href = `details.html?id=${pokemon.id}`;
  });
  return card;
}

///////////////////////////////////////////////////////////////////////////
// DXG Gallery
const ROWS_PER_LOAD = 30;
const COLS = 5;
let dexOffset = 1;

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

///////////////////////////////////////////////////////////////////////////
// Filters
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
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar",
    "Paldea",
  ];
  const gens = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const evos = [
    { val: 1, label: "No evolutions" },
    { val: 2, label: "2 in chain" },
    { val: 3, label: "3 in chain" },
  ];

  function makePills(containerId, items, labelFn, valueFn, isType) {
    const container = document.getElementById(containerId);
    if (!container) return;
    items.forEach((item) => {
      const pill = document.createElement("span");
      pill.className = `filter-pill ${isType ? "pill-type-" + valueFn(item) : "pill-generic"}`;
      pill.dataset.value = valueFn(item);
      pill.textContent = labelFn(item);
      pill.addEventListener("click", () => {
        pill.classList.toggle("active");
        updateTriggerState(containerId);
      });
      container.appendChild(pill);
    });
  }

  function updateTriggerState(containerId) {
    const panelMap = {
      "filter-types": "btn-filter-type",
      "filter-regions": "btn-filter-region",
      "filter-gens": "btn-filter-gen",
      "filter-evos": "btn-filter-evo",
    };
    const btn = document.getElementById(panelMap[containerId]);
    if (!btn) return;
    const hasActive =
      document.querySelectorAll(`#${containerId} .filter-pill.active`).length >
      0;
    btn.classList.toggle("filter-btn-active", hasActive);
  }

  makePills(
    "filter-types",
    types,
    (t) => t,
    (t) => t,
    true,
  );
  makePills(
    "filter-regions",
    regions,
    (r) => r,
    (r) => r.toLowerCase(),
    false,
  );
  makePills(
    "filter-gens",
    gens,
    (g) => `Gen ${g}`,
    (g) => g,
    false,
  );
  makePills(
    "filter-evos",
    evos,
    (e) => e.label,
    (e) => e.val,
    false,
  );

  // Dropdown toggle
  document.querySelectorAll(".filter-dropdown-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.target;
      if (!targetId) return;
      document.querySelectorAll(".filter-dropdown-panel").forEach((p) => {
        if (p.id !== targetId) p.classList.remove("open");
      });
      document.getElementById(targetId)?.classList.toggle("open");
    });
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-dropdown-panel")
      .forEach((p) => p.classList.remove("open"));
  });
  document.querySelectorAll(".filter-dropdown-panel").forEach((p) => {
    p.addEventListener("click", (e) => e.stopPropagation());
  });

  document.querySelectorAll(".panel-clear-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      document
        .querySelectorAll(`#${targetId} .filter-pill.active`)
        .forEach((p) => p.classList.remove("active"));
      updateTriggerState(targetId);
    });
  });

  document
    .getElementById("clear-filters-btn")
    ?.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-pill.active")
        .forEach((p) => p.classList.remove("active"));
      document
        .querySelectorAll(".filter-dropdown-btn")
        .forEach((b) => b.classList.remove("filter-btn-active"));
      const grid = document.getElementById("dex-grid");
      grid.innerHTML = "";
      allLoadedPokemon.forEach((p) => grid.appendChild(buildDexCard(p)));
    });
}

///////////////////////////////////////////////////////////////////////////
// Search
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
  grid.innerHTML = `
    <div class="loading-spinner">
      <div class="pokeball-spinner"><div class="pokeball-line"></div></div>
      <p class="loading-text">Searching...</p>
    </div>`;
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

///////////////////////////////////////////////////////////////////////////
// Apply Filters
async function getSpeciesData(pokemon) {
  if (speciesCache[pokemon.id]) return speciesCache[pokemon.id];
  const res = await fetch(pokemon.species.url);
  if (!res.ok) return null;
  const species = await res.json();
  speciesCache[pokemon.id] = species;
  return species;
}

// Cache de chain lengths para no repetir fetches
async function getEvoChainLength(species) {
  const url = species.evolution_chain.url;
  if (evoChainCache[url] !== undefined) return evoChainCache[url];
  const res = await fetch(url);
  if (!res.ok) {
    evoChainCache[url] = 1;
    return 1;
  }
  const data = await res.json();
  let count = 0;
  let node = data.chain;
  while (node) {
    count++;
    node = node.evolves_to?.[0] ?? null;
  }
  evoChainCache[url] = count;
  return count;
}

async function applyFilters() {
  const types = [
    ...document.querySelectorAll("#filter-types .filter-pill.active"),
  ].map((p) => p.dataset.value);
  const regions = [
    ...document.querySelectorAll("#filter-regions .filter-pill.active"),
  ].map((p) => p.dataset.value);
  const gens = [
    ...document.querySelectorAll("#filter-gens .filter-pill.active"),
  ].map((p) => Number(p.dataset.value));
  const letters = [
    ...document.querySelectorAll("#filter-letters .filter-pill.active"),
  ].map((p) => p.dataset.value.toLowerCase());
  const evos = [
    ...document.querySelectorAll("#filter-evos .filter-pill.active"),
  ].map((p) => Number(p.dataset.value));

  const noFilters =
    !types.length &&
    !regions.length &&
    !gens.length &&
    !letters.length &&
    !evos.length;
  const grid = document.getElementById("dex-grid");
  grid.innerHTML = `
    <div class="loading-spinner">
      <div class="pokeball-spinner"><div class="pokeball-line"></div></div>
      <p class="loading-text">Searching...</p>
    </div>`;

  if (noFilters) {
    grid.innerHTML = "";
    allLoadedPokemon.forEach((p) => grid.appendChild(buildDexCard(p)));
    return;
  }

  const genToRegion = {
    1: "kanto",
    2: "johto",
    3: "hoenn",
    4: "sinnoh",
    5: "unova",
    6: "kalos",
    7: "alola",
    8: "galar",
    9: "paldea",
  };

  // Filtrar instantáneamente con POKEMON_DATA local
  const filtered = POKEMON_DATA.filter((entry) => {
    if (types.length && !types.some((t) => entry.types.includes(t)))
      return false;
    if (regions.length && !regions.some((r) => entry.regions.includes(r)))
      return false;
    if (gens.length && !gens.some((g) => genToRegion[g] === entry.region))
      return false;
    if (evos.length && !evos.includes(entry.evoChainLength)) return false;
    if (letters.length && !letters.includes(entry.name[0])) return false;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<p class="text-gray-400 col-span-5 text-center py-8">No Pokémon found.</p>';
    return;
  }

  // Solo fetchear los que pasaron el filtro
  const pokemons = (
    await fetchInBatches(filtered, (entry) => fetchPokemonById(entry.id), 20)
  ).filter(Boolean);
  pokemons.sort((a, b) => a.id - b.id);
  grid.innerHTML = "";
  pokemons.forEach((p) => grid.appendChild(buildDexCard(p)));
}

///////////////////////////////////////////////////////////////////////////
// Details Page
if (window.location.pathname.includes("details")) {
  const params = new URLSearchParams(window.location.search);
  const pokemonId = params.get("id");
  if (pokemonId) {
    (async () => {
      const pokemon = await getPokemon(pokemonId);
      const species = await getPokemonSpecies(pokemonId);
      const evoChain = await getEvolutionChain(species.evolution_chain.url);

      document.getElementById("detail-name").textContent =
        `#${String(pokemon.id).padStart(3, "0")} ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;
      document.getElementById("detail-genus").textContent =
        getEnglishGenus(species);

      const mainSprite =
        pokemon.sprites.other?.["official-artwork"]?.front_default ||
        pokemon.sprites.front_default;
      document.getElementById("sprite-main").src = mainSprite;
      document.getElementById("sprite-evo").src = pokemon.sprites.front_default;
      document.getElementById("detail-evo-name").textContent =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

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
        { src: pokemon.sprites.other?.["home"]?.front_default, label: "Home" },
        {
          src: pokemon.sprites.other?.["home"]?.front_shiny,
          label: "Home Shiny",
        },
        {
          src: pokemon.sprites.other?.["official-artwork"]?.front_default,
          label: "Artwork",
        },
        {
          src: pokemon.sprites.other?.["official-artwork"]?.front_shiny,
          label: "Artwork Shiny",
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

      const typesEl = document.getElementById("detail-types");
      pokemon.types.forEach((t) => {
        const badge = document.createElement("span");
        badge.className = `type-badge type-${t.type.name}`;
        badge.textContent = t.type.name;
        typesEl.appendChild(badge);
      });

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

      document.getElementById("detail-habitat").textContent =
        getHabitat(species);
      document.getElementById("detail-flavor").textContent =
        getEnglishFlavorText(species);

      document.getElementById("detail-height").textContent =
        `${(pokemon.height / 10).toFixed(1)} m`;
      document.getElementById("detail-weight").textContent =
        `${(pokemon.weight / 10).toFixed(1)} kg`;

      const abilitiesEl = document.getElementById("detail-abilities");
      pokemon.abilities.forEach((a) => {
        const span = document.createElement("span");
        span.className = "text-gray-700 text-sm capitalize";
        span.textContent =
          a.ability.name.replace(/-/g, " ") + (a.is_hidden ? " (hidden)" : "");
        abilitiesEl.appendChild(span);
      });

      const statColors = {
        hp: "#ef4444",
        attack: "#f97316",
        defense: "#eab308",
        "special-attack": "#3b82f6",
        "special-defense": "#22c55e",
        speed: "#a855f7",
      };
      const statLabels = {
        hp: "HP",
        attack: "ATK",
        defense: "DEF",
        "special-attack": "SP.ATK",
        "special-defense": "SP.DEF",
        speed: "SPD",
      };
      const statsEl = document.getElementById("detail-stats");
      pokemon.stats.forEach((s) => {
        const name = s.stat.name;
        const value = s.base_stat;
        const color = statColors[name] ?? "#9ca3af";
        const label = statLabels[name] ?? name;
        const pct = Math.min((value / 255) * 100, 100).toFixed(1);
        const row = document.createElement("div");
        row.className = "flex items-center gap-3";
        row.innerHTML = `
          <span class="text-xs font-bold text-gray-400 w-16 flex-shrink-0">${label}</span>
          <span class="text-xs font-semibold text-gray-700 w-8 flex-shrink-0 text-right">${value}</span>
          <div class="flex-1 bg-gray-200 rounded-full h-2">
            <div style="width:${pct}%; background:${color};" class="h-2 rounded-full transition-all duration-500"></div>
          </div>`;
        statsEl.appendChild(row);
      });

      const evolutions = parseEvolutionChain(evoChain);
      const currentEvo = evolutions.find((e) => e.name === pokemon.name);
      const prevEvo = evolutions.find((e) =>
        e.evolvesTo.some((ev) => ev.name === pokemon.name),
      );

      if (prevEvo) {
        const prevPokemon = await getPokemon(prevEvo.name);
        const evoDetail =
          prevEvo.evolvesTo.find((e) => e.name === pokemon.name)?.details ?? {};
        let evoCondition = "";
        if (evoDetail.min_level) evoCondition = `Lvl ${evoDetail.min_level}`;
        else if (evoDetail.item)
          evoCondition = evoDetail.item.name.replace(/-/g, " ");
        else if (evoDetail.held_item)
          evoCondition = evoDetail.held_item.name.replace(/-/g, " ");
        else if (evoDetail.known_move)
          evoCondition = `Know: ${evoDetail.known_move.name.replace(/-/g, " ")}`;
        else if (evoDetail.min_happiness)
          evoCondition = `Happiness ${evoDetail.min_happiness}`;
        else if (evoDetail.time_of_day) evoCondition = evoDetail.time_of_day;
        else if (evoDetail.trigger?.name)
          evoCondition = evoDetail.trigger.name.replace(/-/g, " ");
        document.getElementById("detail-evolves-from").innerHTML = `
          <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Evolves From</h3>
          <img src="${prevPokemon.sprites.front_default}" class="w-16 h-16 object-contain mx-auto" />
          <p class="text-sm font-semibold text-gray-700 mt-1 capitalize">${prevEvo.name}</p>
          ${evoCondition ? `<p class="text-xs text-gray-400 mt-1">(${evoCondition})</p>` : ""}`;
        document.getElementById("detail-evolves-from").style.cursor = "pointer";
        document
          .getElementById("detail-evolves-from")
          .addEventListener("click", () => {
            window.location.href = `details.html?id=${prevPokemon.id}`;
          });
      }

      if (currentEvo?.evolvesTo?.length) {
        document.getElementById("evolves-to-empty").style.display = "none";
        const grid = document.getElementById("evolves-to-grid");

        for (const evo of currentEvo.evolvesTo) {
          const nextPokemon = await getPokemon(evo.name);
          const evoDetail = evo.details ?? {};

          let evoCondition = "";
          if (evoDetail.min_level) evoCondition = `Lvl ${evoDetail.min_level}`;
          else if (evoDetail.item)
            evoCondition = evoDetail.item.name.replace(/-/g, " ");
          else if (evoDetail.held_item)
            evoCondition = evoDetail.held_item.name.replace(/-/g, " ");
          else if (evoDetail.known_move)
            evoCondition = `Know: ${evoDetail.known_move.name.replace(/-/g, " ")}`;
          else if (evoDetail.min_happiness)
            evoCondition = `Happiness ${evoDetail.min_happiness}`;
          else if (evoDetail.time_of_day) evoCondition = evoDetail.time_of_day;
          else if (evoDetail.trigger?.name)
            evoCondition = evoDetail.trigger.name.replace(/-/g, " ");

          const item = document.createElement("div");
          item.className =
            "flex flex-col items-center cursor-pointer hover:opacity-75 transition";
          item.innerHTML = `
      <img src="${nextPokemon.sprites.front_default}" class="w-14 h-14 object-contain" />
      <p class="text-xs font-semibold text-gray-700 capitalize">${evo.name}</p>
      ${evoCondition ? `<p class="text-xs text-gray-400">(${evoCondition})</p>` : ""}
    `;
          item.addEventListener("click", () => {
            window.location.href = `details.html?id=${nextPokemon.id}`;
          });
          grid.appendChild(item);
        }
      }
    })();
  }
}

///////////////////////////////////////////////////////////////////////////
// Init
document.addEventListener("DOMContentLoaded", () => {
  // Carousel
  const carouselTrack = document.getElementById("carousel-track");
  if (carouselTrack) {
    initCarousel();
    setInterval(slideNext, 6000);
  }

  // DXG
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    initFilters();
    loadMoreBtn.addEventListener("click", loadDexRows);
    loadDexRows();
  }

  // Index
  const idxGrid = document.getElementById("dex-grid");
  if (idxGrid && !document.getElementById("load-more-btn")) {
    initFilters();
    loadAllPokemonNames();
    (async () => {
      const ids = Array.from({ length: 15 }, (_, i) => i + 1);
      const pokemons = (await Promise.all(ids.map(fetchPokemonById))).filter(
        Boolean,
      );
      allLoadedPokemon.push(...pokemons);
      pokemons.forEach((p) => idxGrid.appendChild(buildDexCard(p)));
    })();
  }

  // Search
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
    document
      .getElementById("clear-search-btn")
      ?.addEventListener("click", () => {
        searchInput.value = "";
        searchPokemon("");
      });
  }

  // Apply filters
  document
    .getElementById("apply-filters-btn")
    ?.addEventListener("click", applyFilters);
  document
    .getElementById("apply-filters-btn-region")
    ?.addEventListener("click", applyFilters);
  document
    .getElementById("apply-filters-btn-gen")
    ?.addEventListener("click", applyFilters);
  document
    .getElementById("apply-filters-btn-evo")
    ?.addEventListener("click", applyFilters);

  // Back to top
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.classList.toggle("hidden", window.scrollY < 400);
      backToTopBtn.classList.toggle("flex", window.scrollY >= 400);
    });
    backToTopBtn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }

  // Hamburger
  const hamburgerBtn = document.getElementById("hamburger-btn");
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      document.getElementById("mobile-menu").classList.toggle("open");
    });
  }
});
