///--- Constantes y Estado Global

export const BASE_URL = "https://pokeapi.co/api/v2";

export const TOTAL_POKEMON = 1025;
export const POOL_SIZE = 15;

///--- Sufijos y Prefijos para Formas Regionales
export const REGIONAL_SUFFIX_LIST = ["-alola", "-galar", "-hisui", "-paldea"];
export const REGIONAL_PREFIX_MAP = {
  "-alola": "Alolan",
  "-galar": "Galarian",
  "-hisui": "Hisuian",
  "-paldea": "Paldean",
};

///--- Convierte "*Pokemon*-*Region*" → "Alolan Raichu"
export function getRegionalDisplayName(name) {
  const suffix = REGIONAL_SUFFIX_LIST.find((s) => name.endsWith(s));
  if (!suffix) return name.charAt(0).toUpperCase() + name.slice(1);
  const baseName = name.replace(suffix, "");
  return `${REGIONAL_PREFIX_MAP[suffix]} ${baseName.charAt(0).toUpperCase() + baseName.slice(1)}`;
}

export function getRandomPokemonId() {
  return Math.floor(Math.random() * TOTAL_POKEMON) + 1;
}

///--- Estado compartido entre módulos
export let allLoadedPokemon = [];
export let allPokemonNames = [];
export let speciesCache = {};
export let evoChainCache = {};

export function setAllLoadedPokemon(val) { allLoadedPokemon = val; }
export function pushAllLoadedPokemon(...items) { allLoadedPokemon.push(...items); }
export function setAllPokemonNames(val) { allPokemonNames = val; }