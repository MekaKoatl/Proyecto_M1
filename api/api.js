///--- Endpoints PokéAPI
import { BASE_URL, allPokemonNames, setAllPokemonNames, REGIONAL_SUFFIX_LIST } from "./state.js";

///--- Fetch datos base de un Pokémon por nombre o ID
export async function getPokemon(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!res.ok) throw new Error("Pokemon not found");
  return res.json();
}

///--- Fetch datos de especie (flavor text, genus, habitat, generación, cadena evolutiva)
export async function getPokemonSpecies(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon-species/${nameOrId}`);
  if (!res.ok) throw new Error("Species not found");
  return res.json();
}

///--- Fetch cadena evolutiva completa por URL
export async function getEvolutionChain(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Evolution chain not found");
  return res.json();
}

///--- Fetch por ID o nombre, retorna null si no existe
export async function fetchPokemonById(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) return null;
  return res.json();
}

///--- Fetch en lotes para no saturar el API
export async function fetchInBatches(items, fetchFn, batchSize = 20) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fetchFn));
    results.push(...batchResults);
  }
  return results;
}

///--- Helpers de Especie
export function getEnglishFlavorText(species) {
  const entry = species.flavor_text_entries.find((e) => e.language.name === "en");
  return entry ? entry.flavor_text.replace(/\f|\n/g, " ") : "No description available.";
}

export function getEnglishGenus(species) {
  const genus = species.genera.find((g) => g.language.name === "en");
  return genus ? genus.genus : "Unknown";
}

export function getHabitat(species) {
  return species.habitat?.name ?? "Unknown";
}

///--- Carga todos los nombres (base + regionales) para el buscador
export async function loadAllPokemonNames() {
  if (allPokemonNames.length > 0) return;
  const res = await fetch(`${BASE_URL}/pokemon?limit=1025`);
  const data = await res.json();
  const baseNames = data.results.map((p) => p.name);
  const regionalNames =
    typeof POKEMON_DATA !== "undefined"
      ? POKEMON_DATA.filter((e) => e.isRegional).map((e) => e.name)
      : [];
  setAllPokemonNames([...baseNames, ...regionalNames]);
}