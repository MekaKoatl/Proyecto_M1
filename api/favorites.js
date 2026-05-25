///--- Sistema de Favoritos (localStorage)
import { fetchPokemonById } from "./api.js";
import { getRegionalDisplayName } from "./state.js";

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("craf-favorites") || "[]");
  } catch {
    return [];
  }
}

export function saveFavorites(favs) {
  localStorage.setItem("craf-favorites", JSON.stringify(favs));
}

export function isFavorite(id) {
  return getFavorites().includes(Number(id));
}

export function toggleFavorite(id) {
  id = Number(id);
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) favs.push(id);
  else favs.splice(idx, 1);
  saveFavorites(favs);
  return idx === -1;
}

///--- Página de Favoritos (favorites.html)
export function initFavoritesPage() {
  import("./cards.js").then(async ({ buildDexCard }) => {
    const { initFilters } = await import("./filters.js");

    // Hamburger antes de initFilters para evitar conflicto con su document click listener
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
    const clearAllBtn = document.getElementById("clear-all-favs-btn");
    const searchInput = document.getElementById("fav-search");
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
      const pokemons = (
        await Promise.all(favIds.map((id) => fetchPokemonById(id)))
      ).filter(Boolean);
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
        card
          .querySelector(".fav-btn")
          .addEventListener("click", () => setTimeout(loadFavorites, 100));
        grid.appendChild(card);
      });
    }

    function applyFavFilters() {
      const types = [
        ...document.querySelectorAll("#filter-types .filter-pill.active"),
      ].map((p) => p.dataset.value);
      const regions = [
        ...document.querySelectorAll("#filter-regions .filter-pill.active"),
      ].map((p) => p.dataset.value);
      const gens = [
        ...document.querySelectorAll("#filter-gens .filter-pill.active"),
      ].map((p) => Number(p.dataset.value));
      const q = searchInput?.value.trim().toLowerCase() ?? "";
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
      const filtered = favPokemons.filter((p) => {
        const entry =
          typeof POKEMON_DATA !== "undefined"
            ? POKEMON_DATA.find((e) => e.id === p.id)
            : null;
        if (q) {
          const displayName = getRegionalDisplayName(p.name).toLowerCase();
          if (!displayName.includes(q) && !p.name.includes(q)) return false;
        }
        if (
          types.length &&
          entry &&
          !types.some((t) => entry.types.includes(t))
        )
          return false;
        if (
          regions.length &&
          entry &&
          !regions.some((r) => entry.regions.includes(r))
        )
          return false;
        if (
          gens.length &&
          entry &&
          !gens.some((g) => genToRegion[g] === entry.region)
        )
          return false;
        return true;
      });
      renderGrid(filtered);
    }

    searchInput?.addEventListener("input", applyFavFilters);
    document
      .getElementById("apply-filters-btn")
      ?.addEventListener("click", applyFavFilters);
    document
      .getElementById("apply-filters-btn-region")
      ?.addEventListener("click", applyFavFilters);
    document
      .getElementById("apply-filters-btn-gen")
      ?.addEventListener("click", applyFavFilters);

    document
      .getElementById("clear-filters-btn")
      ?.addEventListener("click", () => {
        document
          .querySelectorAll(".filter-pill.active")
          .forEach((p) => p.classList.remove("active"));
        document
          .querySelectorAll(".filter-dropdown-btn")
          .forEach((b) => b.classList.remove("filter-btn-active"));
        if (searchInput) searchInput.value = "";
        renderGrid(favPokemons);
      });

    clearAllBtn?.addEventListener("click", () => {
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
