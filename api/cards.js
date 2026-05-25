///--- Generador de Carta del Buscador (DXG, Index, Favoritos, Details)
import { getRegionalDisplayName } from "./state.js";
import { isFavorite, toggleFavorite } from "./favorites.js";

export function buildDexCard(pokemon) {
  const types = pokemon.types.map((t) => t.type.name);
  const staticSprite = pokemon.sprites.front_default;
  const animatedSprite =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default || staticSprite;

  const card = document.createElement("a");
  card.href = `details.html?id=${pokemon.id}`;
  card.className = "dex-card";
  card.dataset.id = pokemon.id;

  const dataEntry =
    typeof POKEMON_DATA !== "undefined" ? POKEMON_DATA.find((e) => e.id === pokemon.id) : null;
  const forms = dataEntry?.forms ?? [];
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

  const favBtn = card.querySelector(".fav-btn");
  favBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleFavorite(pokemon.id);
    favBtn.classList.toggle("fav-active", added);
  });

  return card;
}