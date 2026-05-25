///--- Carousel (index.html)
import { POOL_SIZE, getRandomPokemonId, getRegionalDisplayName } from "./state.js";
import { fetchPokemonById } from "./api.js";

export const VISIBLE_COUNT = 5;
export const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);

let carouselPool = [];
let poolIndex = 0;
let isSliding = false;
let cachedCardWidth = 0;

///--- Generador de Carta del Carousel
export function buildCard(pokemon, isCenter = false) {
  const card = document.createElement("a");
  card.href = `details.html?id=${pokemon.id}`;
  card.className = `carousel-card${isCenter ? " center" : ""}`;
  card.style.display = "flex";
  const staticSprite = pokemon.sprites.front_default;
  const animatedSprite =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default || staticSprite;
  card.innerHTML = `
    <img src="${isCenter ? animatedSprite : staticSprite}"
      data-static="${staticSprite}" data-animated="${animatedSprite}"
      alt="${pokemon.name}" />
    <span>${getRegionalDisplayName(pokemon.name)}</span>
  `;
  return card;
}

export function getCardWidth() {
  if (cachedCardWidth) return cachedCardWidth;
  const track = document.getElementById("carousel-track");
  const card = track.querySelector(".carousel-card");
  const gap = window.innerWidth >= 640 ? 16 : 12;
  cachedCardWidth = card ? card.offsetWidth + gap : 0;
  return cachedCardWidth;
}

window.addEventListener("resize", () => { cachedCardWidth = 0; });

export async function initCarousel() {
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

export function applyCardStates(track) {
  Array.from(track.children).forEach((card, i) => {
    const isCenter = i === CENTER_INDEX;
    card.classList.toggle("center", isCenter);
    const dist = Math.abs(i - CENTER_INDEX);
    card.style.opacity = dist === 0 ? "1" : dist === 1 ? "0.5" : "0.2";
    const img = card.querySelector("img");
    if (img) img.src = isCenter ? img.dataset.animated : img.dataset.static;
  });
}

export function slideNext() {
  if (isSliding) return;
  isSliding = true;
  const track = document.getElementById("carousel-track");
  const nextPokemon = carouselPool[poolIndex % carouselPool.length];
  poolIndex++;
  const newCard = buildCard(nextPokemon, false);
  track.appendChild(newCard);
  const slideDistance = getCardWidth();
  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(-${slideDistance}px)`;
  setTimeout(() => {
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    track.children[0].remove();
    applyCardStates(track);
    isSliding = false;
  }, 400);
}

export function slidePrev() {
  if (isSliding) return;
  isSliding = true;
  const track = document.getElementById("carousel-track");
  poolIndex = (poolIndex - VISIBLE_COUNT - 1 + carouselPool.length) % carouselPool.length;
  const prevPokemon = carouselPool[poolIndex % carouselPool.length];
  const newCard = buildCard(prevPokemon, false);
  track.insertBefore(newCard, track.firstChild);
  const slideDistance = getCardWidth();
  track.style.transition = "none";
  track.style.transform = `translateX(-${slideDistance}px)`;
  track.offsetHeight;
  track.style.transition = "transform 0.4s ease";
  track.style.transform = "translateX(0)";
  setTimeout(() => {
    track.lastChild.remove();
    poolIndex = (poolIndex + VISIBLE_COUNT) % carouselPool.length;
    applyCardStates(track);
    isSliding = false;
  }, 400);
}