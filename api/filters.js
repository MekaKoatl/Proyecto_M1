///--- Filtros, Buscador y Galería DXG
import { allLoadedPokemon, allPokemonNames, pushAllLoadedPokemon, REGIONAL_SUFFIX_LIST, REGIONAL_PREFIX_MAP } from "./state.js";
import { fetchPokemonById, fetchInBatches } from "./api.js";
import { buildDexCard } from "./cards.js";

///--- Galería DXG — Carga por lotes con formas regionales intercaladas
const ROWS_PER_LOAD = 30;
const COLS = 5;
let dexOffset = 1;

export async function loadDexRows() {
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
  pushAllLoadedPokemon(...expanded);
  expanded.forEach((p) => grid.appendChild(buildDexCard(p)));
}

///--- Sistema de Filtros
// Puebla los dropdowns con pills y maneja su estado visual
export function initFilters() {
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
  { val: "Legend", label: "Legendary" },
  { val: "Mythic", label: "Mythical" },
  { val: "Baby", label: "Baby" },
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

  // Cierra dropdowns al click fuera, respeta hamburger y mobile-menu
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

///--- Buscador por nombre (Index y DXG)
export async function searchPokemon(query) {
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

///--- Aplicación de Filtros (DXG)
export async function applyFilters() {
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