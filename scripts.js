///--- URL Endpoints PokéAPI
const BASE_URL = "https://pokeapi.co/api/v2";

// Fetch datos Pokémon por nombre o ID
async function getPokemon(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!res.ok) throw new Error("Pokemon not found");
  return res.json();
}

// Fetch datos de especie se necesita usar 'nombredepokemon-region' para formas regionales
async function getPokemonSpecies(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon-species/${nameOrId}`);
  if (!res.ok) throw new Error("Species not found");
  return res.json();
}

// Fetch cadena evolutiva de Pokemon
async function getEvolutionChain(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Evolution chain not found");
  return res.json();
}

///--- Fetch flavour text
function getEnglishFlavorText(species) {
  const entry = species.flavor_text_entries.find((e) => e.language.name === "en");
  return entry ? entry.flavor_text.replace(/\f|\n/g, " ") : "No description available.";
}

// Fetch genus ('Pokemon Rata')
function getEnglishGenus(species) {
  const genus = species.genera.find((g) => g.language.name === "en");
  return genus ? genus.genus : "Unknown";
}

// Fetch habitat
function getHabitat(species) {
  return species.habitat?.name ?? "Unknown";
}

///--- Generador de ID para random
const TOTAL_POKEMON = 1025;
const POOL_SIZE = 15;

// Sufijo de regiones
const REGIONAL_SUFFIX_LIST = ["-alola", "-galar", "-hisui", "-paldea"];
const REGIONAL_PREFIX_MAP = {
  "-alola": "Alolan",
  "-galar": "Galarian",
  "-hisui": "Hisuian",
  "-paldea": "Paldean",
};

// El pedote para que funcione el sistema de nombres
function getRegionalDisplayName(name) {
  const suffix = REGIONAL_SUFFIX_LIST.find((s) => name.endsWith(s));
  if (!suffix) return name.charAt(0).toUpperCase() + name.slice(1);
  const baseName = name.replace(suffix, "");
  return `${REGIONAL_PREFIX_MAP[suffix]} ${baseName.charAt(0).toUpperCase() + baseName.slice(1)}`;
}

///// Genera IDS
function getRandomPokemonId() {
  return Math.floor(Math.random() * TOTAL_POKEMON) + 1;
}

let allLoadedPokemon = [];  
let speciesCache = {};      
let evoChainCache = {};     
let allPokemonNames = [];   // Lista completa de nombres (base + regionales)

// Fetch por ID o nombre
async function fetchPokemonById(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) return null;
  return res.json();
}

//Intento de usar esto para disminuir tiempo de cargar
async function fetchInBatches(items, fetchFn, batchSize = 20) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fetchFn));
    results.push(...batchResults);
  }
  return results;
}

///--- Carga de Nombres para Buscador
// Carga los 1025 nombres base + los nombres regionales de POKEMON_DATA
async function loadAllPokemonNames() {
  const res = await fetch(`${BASE_URL}/pokemon?limit=1025`);
  const data = await res.json();
  const baseNames = data.results.map((p) => p.name);
  const regionalNames =
    typeof POKEMON_DATA !== "undefined"
      ? POKEMON_DATA.filter((e) => e.isRegional).map((e) => e.name)
      : [];
  allPokemonNames = [...baseNames, ...regionalNames];
}

///--- Carousel!!!!!!!!!!!!!!!!!!!!
const VISIBLE_COUNT = 5;
const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);
let carouselPool = [];
let poolIndex = 0;
let isSliding = false;

///--- Generador de Carta del Carousel
function buildCard(pokemon, isCenter = false) {
  const card = document.createElement("div");
  card.className = `carousel-card${isCenter ? " center" : ""}`;
  const staticSprite = pokemon.sprites.front_default;
  const animatedSprite =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default || staticSprite;
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
      if (img) img.src = i === CENTER_INDEX ? img.dataset.animated : img.dataset.static;
    });
    isSliding = false;
  }, 500);
}

///--- Sistema de Favoritos (localStorage!!!!!!!)
function getFavorites() {
  try { return JSON.parse(localStorage.getItem("craf-favorites") || "[]"); }
  catch { return []; }
}

function saveFavorites(favs) {
  localStorage.setItem("craf-favorites", JSON.stringify(favs));
}

function isFavorite(id) {
  return getFavorites().includes(Number(id));
}

function toggleFavorite(id) {
  id = Number(id);
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) favs.push(id);
  else favs.splice(idx, 1);
  saveFavorites(favs);
  return idx === -1;
}

///--- Generador de Carta del Buscado
function buildDexCard(pokemon) {
  const types = pokemon.types.map((t) => t.type.name);
  const staticSprite = pokemon.sprites.front_default;
  const animatedSprite =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default || staticSprite;
  const card = document.createElement("div");
  card.className = "dex-card";
  const dataEntry =
    typeof POKEMON_DATA !== "undefined" ? POKEMON_DATA.find((e) => e.id === pokemon.id) : null;
  const forms = dataEntry?.forms ?? [];
  card.dataset.id = pokemon.id;
  const displayName = getRegionalDisplayName(pokemon.name);
  const fav = isFavorite(pokemon.id);
  card.innerHTML = `
    ${forms.length ? `<div class="form-badges">
      ${forms.map((f) => `<span class="form-badge form-badge-${f}">${f}</span>`).join("")}
    </div>` : ""}
    <span class="dex-card-dexnum">#${pokemon.id}</span>
    <img src="${staticSprite}" data-static="${staticSprite}" data-animated="${animatedSprite}" alt="${pokemon.name}" />
    <span class="dex-card-name">${displayName}</span>
    <hr>
    <div class="dex-card-types">
      ${types.map((t) => `<span class="type-badge type-${t}">${t}</span>`).join("")}
    </div>
    <button class="fav-btn${fav ? " fav-active" : ""}" data-id="${pokemon.id}" title="Favorite">♥</button>
  `;
  const img = card.querySelector("img");
  card.addEventListener("mouseenter", () => { img.src = img.dataset.animated; });
  card.addEventListener("mouseleave", () => { img.src = img.dataset.static; });
  card.addEventListener("click", () => { window.location.href = `details.html?id=${pokemon.id}`; });
  const favBtn = card.querySelector(".fav-btn");
  favBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const added = toggleFavorite(pokemon.id);
    favBtn.classList.toggle("fav-active", added);
  });
  return card;
}

///--- Galería DXG — LOAD MORE
const ROWS_PER_LOAD = 30;
const COLS = 5;
let dexOffset = 1;

async function loadDexRows() {
  const grid = document.getElementById("dex-grid");
  if (!grid) return;
  const ids = Array.from({ length: ROWS_PER_LOAD * COLS }, (_, i) => dexOffset + i);
  dexOffset += ROWS_PER_LOAD * COLS;
  const pokemons = await Promise.all(ids.map(fetchPokemonById));
  const valid = pokemons.filter(Boolean);
  const regionalData =
    typeof POKEMON_DATA !== "undefined" ? POKEMON_DATA.filter((e) => e.isRegional) : [];
  const expanded = [];
  for (const p of valid) {
    expanded.push(p);
    const regionals = regionalData.filter((e) => {
      const suffix = REGIONAL_SUFFIX_LIST.find((s) => e.name.endsWith(s));
      const baseName = suffix ? e.name.replace(suffix, "") : null;
      return baseName === p.name;
    });
    for (const r of regionals) {
      const rp = await fetchPokemonById(r.id);
      if (rp) expanded.push(rp);
    }
  }
  allLoadedPokemon.push(...expanded);
  expanded.forEach((p) => grid.appendChild(buildDexCard(p)));
}

///--- Filtros
function initFilters() {
  const types = ["normal","fire","water","grass","electric","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];
  const regions = ["Kanto","Johto","Hoenn","Sinnoh","Unova","Kalos","Alola","Galar","Paldea"];
  const gens = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const evos = [
    { val: 1, label: "No evolutions" },
    { val: 2, label: "2 in chain" },
    { val: 3, label: "3 in chain" },
  ];
  const formTypes = [
    { val: "M", label: "Mega" },
    { val: "G", label: "Gigantamax" },
    { val: "R", label: "Regional" },
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
      "filter-forms": "btn-filter-forms",
    };
    const btn = document.getElementById(panelMap[containerId]);
    if (!btn) return;
    const hasActive = document.querySelectorAll(`#${containerId} .filter-pill.active`).length > 0;
    btn.classList.toggle("filter-btn-active", hasActive);
  }

  makePills("filter-types", types, (t) => t, (t) => t, true);
  makePills("filter-regions", regions, (r) => r, (r) => r.toLowerCase(), false);
  makePills("filter-gens", gens, (g) => `Gen ${g}`, (g) => g, false);
  makePills("filter-evos", evos, (e) => e.label, (e) => e.val, false);
  makePills("filter-forms", formTypes, (f) => f.label, (f) => f.val, false);

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

  document.addEventListener("click", (e) => {
    if (e.target.closest("#hamburger-btn") || e.target.closest("#mobile-menu")) return;
    document.querySelectorAll(".filter-dropdown-panel").forEach((p) => p.classList.remove("open"));
  });

  document.querySelectorAll(".filter-dropdown-panel").forEach((p) => {
    p.addEventListener("click", (e) => e.stopPropagation());
  });

  document.querySelectorAll(".panel-clear-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      document.querySelectorAll(`#${targetId} .filter-pill.active`).forEach((p) => p.classList.remove("active"));
      updateTriggerState(targetId);
    });
  });

  document.getElementById("clear-filters-btn")?.addEventListener("click", () => {
    document.querySelectorAll(".filter-pill.active").forEach((p) => p.classList.remove("active"));
    document.querySelectorAll(".filter-dropdown-btn").forEach((b) => b.classList.remove("filter-btn-active"));
    const grid = document.getElementById("dex-grid");
    if (grid) {
      grid.innerHTML = "";
      allLoadedPokemon.forEach((p) => grid.appendChild(buildDexCard(p)));
    }
  });
}

///--- Buscador
async function searchPokemon(query) {
  const grid = document.getElementById("dex-grid");
  if (!query) {
    grid.innerHTML = "";
    allLoadedPokemon.forEach((p) => grid.appendChild(buildDexCard(p)));
    return;
  }
  const q = query.toLowerCase();
  const matches = allPokemonNames.filter((name) => {
    if (name.includes(q)) return true;
    const suffix = REGIONAL_SUFFIX_LIST.find((s) => name.endsWith(s));
    if (suffix) {
      const baseName = name.replace(suffix, "");
      const prefix = REGIONAL_PREFIX_MAP[suffix].toLowerCase();
      if (`${prefix} ${baseName}`.includes(q)) return true;
    }
    return false;
  });
  grid.innerHTML = `
    <div class="loading-spinner">
      <div class="pokeball-spinner"><div class="pokeball-line"></div></div>
      <p class="loading-text">Searching...</p>
    </div>`;
  const pokemons = (await Promise.all(matches.map((name) => fetchPokemonById(name)))).filter(Boolean);
  pokemons.sort((a, b) => a.id - b.id);
  grid.innerHTML = "";
  if (pokemons.length === 0) {
    grid.innerHTML = '<p class="text-gray-400 col-span-5 text-center py-8">No Pokémon found.</p>';
    return;
  }
  pokemons.forEach((p) => grid.appendChild(buildDexCard(p)));
}

///--- Aplicación de Filtros DXG
// Filtra usando POKEMON_DATA local (sin fetch adicional)
async function applyFilters() {
  const types = [...document.querySelectorAll("#filter-types .filter-pill.active")].map((p) => p.dataset.value);
  const regions = [...document.querySelectorAll("#filter-regions .filter-pill.active")].map((p) => p.dataset.value);
  const gens = [...document.querySelectorAll("#filter-gens .filter-pill.active")].map((p) => Number(p.dataset.value));
  const evos = [...document.querySelectorAll("#filter-evos .filter-pill.active")].map((p) => Number(p.dataset.value));
  const forms = [...document.querySelectorAll("#filter-forms .filter-pill.active")].map((p) => p.dataset.value);

  const noFilters = !types.length && !regions.length && !gens.length && !evos.length && !forms.length;
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

  const genToRegion = { 1:"kanto",2:"johto",3:"hoenn",4:"sinnoh",5:"unova",6:"kalos",7:"alola",8:"galar",9:"paldea" };

  const filtered = POKEMON_DATA.filter((entry) => {
    if (types.length && !types.some((t) => entry.types.includes(t))) return false;
    if (regions.length && !regions.some((r) => entry.regions.includes(r))) return false;
    if (gens.length && !gens.some((g) => genToRegion[g] === entry.region)) return false;
    if (evos.length && !evos.includes(entry.evoChainLength)) return false;
    if (forms.length && !forms.some((f) =>
      f === "R" ? (entry.forms.includes("R") || entry.isRegional) : entry.forms.includes(f)
    )) return false;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="text-gray-400 col-span-5 text-center py-8">No Pokémon found.</p>';
    return;
  }

  const pokemons = (await fetchInBatches(filtered, (entry) => fetchPokemonById(entry.id), 20)).filter(Boolean);
  pokemons.sort((a, b) => a.id - b.id);
  grid.innerHTML = "";
  pokemons.forEach((p) => grid.appendChild(buildDexCard(p)));
}

///--- Conexión con detalles
if (window.location.pathname.includes("details")) {
  const params = new URLSearchParams(window.location.search);
  const pokemonId = params.get("id");
  if (pokemonId) {
    (async () => {
      ///--- Fetch Principal
      const pokemon = await getPokemon(pokemonId);

      // Detectar si es forma regional (funciona)
      const isRegional = REGIONAL_SUFFIX_LIST.some((s) => pokemon.name.endsWith(s));
      const regionalSuffix = REGIONAL_SUFFIX_LIST.find((s) => pokemon.name.endsWith(s));
      const speciesName = isRegional ? pokemon.name.replace(regionalSuffix, "") : pokemon.name;
      const species = await getPokemonSpecies(speciesName);
      const evoChain = await getEvolutionChain(species.evolution_chain.url);

      const displayName = isRegional
        ? `${REGIONAL_PREFIX_MAP[regionalSuffix]} ${speciesName.charAt(0).toUpperCase() + speciesName.slice(1)}`
        : pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

      ///--- Cabecera y Favorito
      document.getElementById("detail-name").textContent = `#${String(pokemon.id).padStart(3, "0")} ${displayName}`;
      document.getElementById("detail-genus").textContent = getEnglishGenus(species);

      const detailFavBtn = document.getElementById("detail-fav-btn");
      if (detailFavBtn) {
        detailFavBtn.classList.toggle("fav-active", isFavorite(pokemon.id));
        detailFavBtn.addEventListener("click", () => {
          const added = toggleFavorite(pokemon.id);
          detailFavBtn.classList.toggle("fav-active", added);
        });
      }

      ///--- Sprite Principal y Galería
      const mainSprite =
        pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default;
      document.getElementById("sprite-main").src = mainSprite;

      const sprites = [
        { src: pokemon.sprites.front_default, label: "Front" },
        { src: pokemon.sprites.back_default, label: "Back" },
        { src: pokemon.sprites.front_shiny, label: "Shiny" },
        { src: pokemon.sprites.back_shiny, label: "Back Shiny" },
        { src: pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default, label: "Animated" },
        { src: pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.back_default, label: "Animated Back" },
        { src: pokemon.sprites.other?.["home"]?.front_default, label: "Home" },
        { src: pokemon.sprites.other?.["home"]?.front_shiny, label: "Home Shiny" },
        { src: pokemon.sprites.other?.["official-artwork"]?.front_default, label: "Artwork" },
        { src: pokemon.sprites.other?.["official-artwork"]?.front_shiny, label: "Artwork Shiny" },
      ].filter((s) => s.src);

      const gallery = document.getElementById("sprite-gallery");
      sprites.forEach((s) => {
        const img = document.createElement("img");
        img.src = s.src;
        img.alt = s.label;
        img.className = "w-24 h-24 object-contain bg-gray-100 rounded-lg cursor-pointer hover:ring-2 hover:ring-red-400 transition";
        img.addEventListener("click", () => { document.getElementById("sprite-main").src = s.src; });
        gallery.appendChild(img);
      });

      ///--- Tipos, Generación y Habitat
      const typesEl = document.getElementById("detail-types");
      pokemon.types.forEach((t) => {
        const badge = document.createElement("span");
        badge.className = `type-badge type-${t.type.name}`;
        badge.textContent = t.type.name;
        typesEl.appendChild(badge);
      });

      const genRaw = species.generation?.name ?? "";
      const genMap = { "generation-i":"I","generation-ii":"II","generation-iii":"III","generation-iv":"IV","generation-v":"V","generation-vi":"VI","generation-vii":"VII","generation-viii":"VIII","generation-ix":"IX" };
      const regionMap = { "generation-i":"Kanto","generation-ii":"Johto","generation-iii":"Hoenn","generation-iv":"Sinnoh","generation-v":"Unova","generation-vi":"Kalos","generation-vii":"Alola","generation-viii":"Galar","generation-ix":"Paldea" };
      document.getElementById("detail-generation").innerHTML =
        `<span class="font-bold">Gen ${genMap[genRaw]}</span> <span class="text-gray-400">— ${regionMap[genRaw]}</span>`;

      document.getElementById("detail-habitat").textContent = getHabitat(species);
      document.getElementById("detail-flavor").textContent = getEnglishFlavorText(species);
      document.getElementById("detail-height").textContent = `${(pokemon.height / 10).toFixed(1)} m`;
      document.getElementById("detail-weight").textContent = `${(pokemon.weight / 10).toFixed(1)} kg`;

      ///--- Habilidades
      const abilitiesEl = document.getElementById("detail-abilities");
      pokemon.abilities.forEach((a) => {
        const span = document.createElement("span");
        span.className = "text-gray-700 text-sm capitalize";
        span.textContent = a.ability.name.replace(/-/g, " ") + (a.is_hidden ? " (hidden)" : "");
        abilitiesEl.appendChild(span);
      });

      ///--- Stats Base con Barras de Color
      const statColors = { hp:"#ef4444",attack:"#f97316",defense:"#eab308","special-attack":"#3b82f6","special-defense":"#22c55e",speed:"#a855f7" };
      const statLabels = { hp:"HP",attack:"ATK",defense:"DEF","special-attack":"SP.ATK","special-defense":"SP.DEF",speed:"SPD" };
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

      ///--- Cadena Evolutiva
      function getEvoCondition(detail) {
        if (!detail) return "";
        if (detail.min_level) return `Lvl ${detail.min_level}`;
        if (detail.item) return detail.item.name.replace(/-/g, " ");
        if (detail.held_item) return detail.held_item.name.replace(/-/g, " ");
        if (detail.known_move) return `Know: ${detail.known_move.name.replace(/-/g, " ")}`;
        if (detail.min_happiness) return `Happiness ${detail.min_happiness}`;
        if (detail.time_of_day) return detail.time_of_day;
        if (detail.trigger?.name) return detail.trigger.name.replace(/-/g, " ");
        return "";
      }

      function makeEvoNode(p, isCurrent) {
        const node = document.createElement("div");
        node.className = "evo-node" + (isCurrent ? " evo-node-current" : "");
        node.innerHTML = `
          <img src="${p.sprites.front_default}" alt="${p.name}" class="evo-node-img" />
          <span class="evo-node-name">${getRegionalDisplayName(p.name)}</span>
        `;
        if (!isCurrent) {
          node.style.cursor = "pointer";
          node.addEventListener("click", () => { window.location.href = `details.html?id=${p.id}`; });
        }
        return node;
      }

      function makeArrow(condition) {
        const arrow = document.createElement("div");
        arrow.className = "evo-arrow";
        arrow.innerHTML = `
          <div class="evo-arrow-tip"></div>
          ${condition ? `<span class="evo-arrow-label">${condition}</span>` : ""}
        `;
        return arrow;
      }

      // Encuentra el camino desde la raíz hasta el Pokémon actual
      function buildLinearPath(chain, currentName) {
        function findPath(node, target, path) {
          path.push({ name: node.species.name, nextDetail: null });
          if (node.species.name === target) return true;
          for (const child of node.evolves_to) {
            path[path.length - 1].nextDetail = child.evolution_details[0] ?? {};
            if (findPath(child, target, path)) return true;
          }
          path.pop();
          return false;
        }
        const path = [];
        findPath(chain.chain, currentName, path);
        return path;
      }

      function getChildren(chain, name) {
        function find(node) {
          if (node.species.name === name) return node.evolves_to;
          for (const child of node.evolves_to) {
            const result = find(child);
            if (result) return result;
          }
          return null;
        }
        return find(chain.chain) ?? [];
      }

      async function getPokemonForEvo(basePokemonName) {
        if (isRegional) {
          try { return await getPokemon(`${basePokemonName}${regionalSuffix}`); } catch (e) {}
        }
        return await getPokemon(basePokemonName);
      }

      const evoLookupName = isRegional ? speciesName : pokemon.name;
      const chainEl = document.getElementById("evo-chain");
      const linearPath = buildLinearPath(evoChain, evoLookupName);
      const children = getChildren(evoChain, evoLookupName);

      if (linearPath.length === 1 && children.length === 0) {
        chainEl.innerHTML = `<p class="evo-no-evo">This Pokémon does not evolve.</p>`;
      } else {
        for (let i = 0; i < linearPath.length; i++) {
          const step = linearPath[i];
          const isCurrent = step.name === evoLookupName;
          const p = isCurrent ? pokemon : await getPokemonForEvo(step.name);
          if (i > 0) chainEl.appendChild(makeArrow(getEvoCondition(linearPath[i - 1].nextDetail)));
          chainEl.appendChild(makeEvoNode(p, isCurrent));
        }
        if (children.length === 1) {
          const child = children[0];
          const nextP = await getPokemonForEvo(child.species.name);
          chainEl.appendChild(makeArrow(getEvoCondition(child.evolution_details[0] ?? {})));
          chainEl.appendChild(makeEvoNode(nextP, false));
          const grandchildren = getChildren(evoChain, child.species.name);
          if (grandchildren.length === 1) {
            const grand = grandchildren[0];
            const grandP = await getPokemonForEvo(grand.species.name);
            chainEl.appendChild(makeArrow(getEvoCondition(grand.evolution_details[0] ?? {})));
            chainEl.appendChild(makeEvoNode(grandP, false));
          }
        } else if (children.length > 1) {
          chainEl.appendChild(makeArrow(""));
          const branchGrid = document.createElement("div");
          branchGrid.className = "evo-branch-grid";
          for (const child of children) {
            const nextP = await getPokemonForEvo(child.species.name);
            const node = makeEvoNode(nextP, false);
            const cond = getEvoCondition(child.evolution_details[0] ?? {});
            if (cond) {
              const condEl = document.createElement("span");
              condEl.className = "evo-node-cond";
              condEl.textContent = cond;
              node.appendChild(condEl);
            }
            branchGrid.appendChild(node);
          }
          chainEl.appendChild(branchGrid);
        }
      }

      ///--- Formas Alternativas
      const baseName = isRegional ? speciesName : pokemon.name;
      const altFormResults = await Promise.all(
        ["-mega", "-mega-x", "-mega-y", "-gmax"].map(async (suffix) => {
          const name = `${baseName}${suffix}`;
          const res = await fetch(`${BASE_URL}/pokemon/${name}`);
          if (!res.ok) return null;
          return { name, data: await res.json() };
        }),
      );
      const altForms = altFormResults.filter(Boolean);

      if (altForms.length > 0) {
        document.getElementById("forms-section").style.display = "block";
        const formsGrid = document.getElementById("forms-grid");
        const formStatColors = { hp:"#ef4444",attack:"#f97316",defense:"#eab308","special-attack":"#3b82f6","special-defense":"#22c55e",speed:"#a855f7" };
        const formStatLabels = { hp:"HP",attack:"ATK",defense:"DEF","special-attack":"SP.ATK","special-defense":"SP.DEF",speed:"SPD" };

        for (const formRef of altForms) {
          const formPokemon = formRef.data;
          const formRes = await fetch(`${BASE_URL}/pokemon-form/${formRef.name}`);
          const formData = formRes.ok ? await formRes.json() : null;
          const isMega = formRef.name.includes("-mega");
          const tagLabel = isMega ? "Mega" : "Gigantamax";
          const tagClass = isMega ? "form-alt-tag-mega" : "form-alt-tag-gmax";
          const formDisplayName = formRef.name
            .replace(/-mega-x$/, " Mega X").replace(/-mega-y$/, " Mega Y")
            .replace(/-mega$/, " Mega").replace(/-gmax$/, " Gigantamax")
            .split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
          const sprite =
            formPokemon.sprites.other?.["official-artwork"]?.front_default ||
            formPokemon.sprites.front_default || formData?.sprites?.front_default || "";
          let itemDisplay = "";
          if (isMega) {
            itemDisplay = formRef.name
              .replace(/-mega-x$/, "ite X").replace(/-mega-y$/, "ite Y").replace(/-mega$/, "ite")
              .split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
          }
          const types = formPokemon.types.map((t) => t.type.name);
          const card = document.createElement("div");
          card.className = "form-alt-card";
          const header = document.createElement("div");
          header.className = "form-alt-header";
          header.innerHTML = `
            <div style="display:flex;gap:6px;align-items:center;justify-content:center;">
              <span class="form-alt-tag ${tagClass}">${tagLabel}</span>
            </div>
            ${isMega ? `<div class="form-alt-item">&#9670; ${itemDisplay}</div>` : `<div style="height:22px;"></div>`}
            <img src="${sprite}" alt="${formDisplayName}" class="form-alt-sprite" />
            <span class="form-alt-name">${formDisplayName}</span>
            <div class="form-alt-types">
              ${types.map((t) => `<span class="type-badge type-${t}">${t}</span>`).join("")}
            </div>
          `;
          card.appendChild(header);
          const toggle = document.createElement("div");
          toggle.className = "form-alt-toggle";
          toggle.innerHTML = `<span>Stats & abilities</span><span class="form-alt-chevron">▾</span>`;
          card.appendChild(toggle);
          const accordion = document.createElement("div");
          accordion.className = "form-alt-accordion";
          accordion.style.display = "none";
          const abilities = formPokemon.abilities
            .map((a) => `<span class="form-alt-ability">${a.ability.name.replace(/-/g, " ")}${a.is_hidden ? " (hidden)" : ""}</span>`)
            .join("");
          accordion.innerHTML = `
            <p class="form-alt-acc-label">Ability</p>
            <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px;">${abilities}</div>
            <p class="form-alt-acc-label">Base stats</p>
            <div class="form-alt-stats">
              ${formPokemon.stats.map((s) => {
                const n = s.stat.name;
                const v = s.base_stat;
                const pct = Math.min((v / 255) * 100, 100).toFixed(1);
                return `<div class="form-alt-stat-row">
                  <span class="form-alt-stat-name">${formStatLabels[n] ?? n}</span>
                  <span class="form-alt-stat-val">${v}</span>
                  <div class="form-alt-stat-bg"><div style="width:${pct}%;background:${formStatColors[n] ?? "#9ca3af"};" class="form-alt-stat-bar"></div></div>
                </div>`;
              }).join("")}
            </div>
          `;
          card.appendChild(accordion);
          let open = false;
          toggle.addEventListener("click", () => {
            open = !open;
            accordion.style.display = open ? "block" : "none";
            toggle.querySelector(".form-alt-chevron").textContent = open ? "▴" : "▾";
            card.classList.toggle("form-alt-card-open", open);
          });
          formsGrid.appendChild(card);
        }
      }

      if (isRegional) {
        const baseP = await getPokemon(speciesName);
        if (baseP) {
          document.getElementById("regional-section").style.display = "block";
          document.getElementById("regional-grid").appendChild(buildDexCard(baseP));
        }
      } else {
        const regionalForms = (await Promise.all(
          REGIONAL_SUFFIX_LIST.map(async (suffix) => {
            const res = await fetch(`${BASE_URL}/pokemon/${pokemon.name}${suffix}`);
            if (!res.ok) return null;
            return res.json();
          }),
        )).filter(Boolean);
        if (regionalForms.length > 0) {
          document.getElementById("regional-section").style.display = "block";
          const grid = document.getElementById("regional-grid");
          regionalForms.forEach((p) => grid.appendChild(buildDexCard(p)));
        }
      }

    })();
  }
}

///--- Inicialización por Página
document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.getElementById("carousel-track");
  if (carouselTrack) {
    initCarousel();
    setInterval(slideNext, 6000);
  }

  // DX
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    initFilters();
    loadMoreBtn.addEventListener("click", loadDexRows);
    loadDexRows();
  }

  // Index — grid inicial con primeros 15 Pokémon
  const idxGrid = document.getElementById("dex-grid");
  if (idxGrid && !document.getElementById("load-more-btn")) {
    initFilters();
    loadAllPokemonNames();
    (async () => {
      const ids = Array.from({ length: 15 }, (_, i) => i + 1);
      const pokemons = (await Promise.all(ids.map(fetchPokemonById))).filter(Boolean);
      allLoadedPokemon.push(...pokemons);
      pokemons.forEach((p) => idxGrid.appendChild(buildDexCard(p)));
    })();
  }

  // Buscador
  const searchInput = document.getElementById("pokemon-search");
  if (searchInput) {
    loadAllPokemonNames();
    let searchTimeout;
    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => searchPokemon(searchInput.value.trim()), 400);
    });
    document.getElementById("clear-search-btn")?.addEventListener("click", () => {
      searchInput.value = "";
      searchPokemon("");
    });
  }

  // Botones Apply de filtros
  document.getElementById("apply-filters-btn")?.addEventListener("click", applyFilters);
  document.getElementById("apply-filters-btn-region")?.addEventListener("click", applyFilters);
  document.getElementById("apply-filters-btn-gen")?.addEventListener("click", applyFilters);
  document.getElementById("apply-filters-btn-evo")?.addEventListener("click", applyFilters);
  document.getElementById("apply-filters-btn-forms")?.addEventListener("click", applyFilters);

  // Back to top
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.classList.toggle("hidden", window.scrollY < 400);
      backToTopBtn.classList.toggle("flex", window.scrollY >= 400);
    });
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Hamburger — index, DXG, details
   if (!window.location.pathname.includes("favorites")) {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    if (hamburgerBtn) {
      hamburgerBtn.addEventListener("click", () => {
        document.getElementById("mobile-menu").classList.toggle("open");
      });
    }
  }
});

///--- Página de Favoritos (favorites.html)
if (window.location.pathname.includes("favorites")) {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("hamburger-btn");
    const menu = document.getElementById("mobile-menu");
    if (btn && menu) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("open");
      });
      menu.addEventListener("click", (e) => e.stopPropagation());
    }

    initFilters();

    const grid = document.getElementById("fav-grid");
    const emptyState = document.getElementById("fav-empty");
    const searchInput = document.getElementById("fav-search");
    const clearAllBtn = document.getElementById("clear-all-favs-btn");
    let favPokemons = [];

    async function loadFavorites() {
      const favIds = getFavorites();
      grid.innerHTML = "";
      if (favIds.length === 0) {
        emptyState.classList.remove("hidden");
        emptyState.classList.add("flex");
        return;
      }
      emptyState.classList.add("hidden");
      emptyState.classList.remove("flex");
      grid.innerHTML = `
        <div class="loading-spinner col-span-2 sm:col-span-3 lg:col-span-5">
          <div class="pokeball-spinner"><div class="pokeball-line"></div></div>
          <p class="loading-text">Loading favorites...</p>
        </div>`;
      const pokemons = (await Promise.all(favIds.map((id) => fetchPokemonById(id)))).filter(Boolean);
      pokemons.sort((a, b) => a.id - b.id);
      favPokemons = pokemons;
      renderGrid(favPokemons);
    }

    function renderGrid(pokemons) {
      grid.innerHTML = "";
      if (pokemons.length === 0) {
        grid.innerHTML = `<p class="text-gray-400 col-span-5 text-center py-8">No Pokémon found.</p>`;
        return;
      }
      pokemons.forEach((p) => {
        const card = buildDexCard(p);
        card.querySelector(".fav-btn").addEventListener("click", () => setTimeout(loadFavorites, 100));
        grid.appendChild(card);
      });
    }

    function applyFavFilters() {
      const types = [...document.querySelectorAll("#filter-types .filter-pill.active")].map((p) => p.dataset.value);
      const regions = [...document.querySelectorAll("#filter-regions .filter-pill.active")].map((p) => p.dataset.value);
      const gens = [...document.querySelectorAll("#filter-gens .filter-pill.active")].map((p) => Number(p.dataset.value));
      const q = searchInput.value.trim().toLowerCase();
      const genToRegion = { 1:"kanto",2:"johto",3:"hoenn",4:"sinnoh",5:"unova",6:"kalos",7:"alola",8:"galar",9:"paldea" };
      const filtered = favPokemons.filter((p) => {
        const entry = typeof POKEMON_DATA !== "undefined" ? POKEMON_DATA.find((e) => e.id === p.id) : null;
        if (q) {
          const displayName = getRegionalDisplayName(p.name).toLowerCase();
          if (!displayName.includes(q) && !p.name.includes(q)) return false;
        }
        if (types.length && entry && !types.some((t) => entry.types.includes(t))) return false;
        if (regions.length && entry && !regions.some((r) => entry.regions.includes(r))) return false;
        if (gens.length && entry && !gens.some((g) => genToRegion[g] === entry.region)) return false;
        return true;
      });
      renderGrid(filtered);
    }

    searchInput.addEventListener("input", applyFavFilters);
    document.getElementById("apply-filters-btn")?.addEventListener("click", applyFavFilters);
    document.getElementById("apply-filters-btn-region")?.addEventListener("click", applyFavFilters);
    document.getElementById("apply-filters-btn-gen")?.addEventListener("click", applyFavFilters);

    document.getElementById("clear-filters-btn")?.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill.active").forEach((p) => p.classList.remove("active"));
      document.querySelectorAll(".filter-dropdown-btn").forEach((b) => b.classList.remove("filter-btn-active"));
      searchInput.value = "";
      renderGrid(favPokemons);
    });

    clearAllBtn.addEventListener("click", () => {
      if (!confirm("Remove all favorites?")) return;
      localStorage.removeItem("craf-favorites");
      favPokemons = [];
      emptyState.classList.remove("hidden");
      emptyState.classList.add("flex");
      grid.innerHTML = "";
    });

    loadFavorites();
  });
}