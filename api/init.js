///--- Inicialización por Página
import { initCarousel, slideNext, slidePrev } from "./carousel.js";
import { loadDexRows, initFilters, searchPokemon, applyFilters } from "./filters.js";
import { loadAllPokemonNames } from "./api.js";
import { buildDexCard } from "./cards.js";
import { fetchPokemonById } from "./api.js";
import { pushAllLoadedPokemon } from "./state.js";
import { initDetailsPage } from "./details.js";
import { initFavoritesPage } from "./favorites.js";

const path = window.location.pathname;

document.addEventListener("DOMContentLoaded", () => {

  ///--- Carousel — solo en index.html
  const carouselTrack = document.getElementById("carousel-track");
  if (carouselTrack) {
    initCarousel().then(() => {
      let autoSlide = setInterval(slideNext, 6000);

      function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(slideNext, 6000);
      }

      document.getElementById("carousel-next")?.addEventListener("click", () => {
        slideNext();
        resetAutoSlide();
      });
      document.getElementById("carousel-prev")?.addEventListener("click", () => {
        slidePrev();
        resetAutoSlide();
      });
    });
  }

  ///--- DXG — galería completa con Load More
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    initFilters();
    loadMoreBtn.addEventListener("click", loadDexRows);
    loadDexRows();
  }

  ///--- Index — grid inicial con primeros 15 Pokémon
  const idxGrid = document.getElementById("dex-grid");
  if (idxGrid && !document.getElementById("load-more-btn")) {
    initFilters();
    loadAllPokemonNames();
    (async () => {
      const ids = Array.from({ length: 15 }, (_, i) => i + 1);
      const pokemons = (await Promise.all(ids.map(fetchPokemonById))).filter(Boolean);
      pushAllLoadedPokemon(...pokemons);
      pokemons.forEach((p) => idxGrid.appendChild(buildDexCard(p)));
    })();
  }

  ///--- Buscador
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

  ///--- Botones Apply de filtros
  document.getElementById("apply-filters-btn")?.addEventListener("click", applyFilters);
  document.getElementById("apply-filters-btn-region")?.addEventListener("click", applyFilters);
  document.getElementById("apply-filters-btn-gen")?.addEventListener("click", applyFilters);
  document.getElementById("apply-filters-btn-evo")?.addEventListener("click", applyFilters);
  document.getElementById("apply-filters-btn-forms")?.addEventListener("click", applyFilters);

  ///--- Back to top
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.classList.toggle("hidden", window.scrollY < 400);
      backToTopBtn.classList.toggle("flex", window.scrollY >= 400);
    });
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  ///--- Hamburger — index, DXG, details
  if (!path.includes("favorites")) {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    if (hamburgerBtn) {
      hamburgerBtn.addEventListener("click", () => {
        document.getElementById("mobile-menu").classList.toggle("open");
      });
    }
  }

  ///--- Details page
  if (path.includes("details")) {
    initDetailsPage();
  }

  ///--- Favorites page
  if (path.includes("favorites")) {
    initFavoritesPage();
  }

});