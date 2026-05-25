///--- Página de Detalles (details.html)
import { REGIONAL_SUFFIX_LIST, REGIONAL_PREFIX_MAP, getRegionalDisplayName } from "./state.js";
import { getPokemon, getPokemonSpecies, getEvolutionChain, getEnglishFlavorText, getEnglishGenus, getHabitat, fetchPokemonById } from "./api.js";
import { isFavorite, toggleFavorite } from "./favorites.js";
import { buildDexCard } from "./cards.js";
import { BASE_URL } from "./state.js";

export async function initDetailsPage() {
  const params = new URLSearchParams(window.location.search);
  const pokemonId = params.get("id");
  if (!pokemonId) return;

  ///--- Fetch Principal del Pokémon y Especie
  const pokemon = await getPokemon(pokemonId);

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
    const node = document.createElement(isCurrent ? "div" : "a");
    if (!isCurrent) node.href = `details.html?id=${p.id}`;
    node.className = "evo-node" + (isCurrent ? " evo-node-current" : "");
    node.innerHTML = `
      <img src="${p.sprites.front_default}" alt="${p.name}" class="evo-node-img" />
      <span class="evo-node-name">${getRegionalDisplayName(p.name)}</span>
    `;
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

  ///--- Formas Alternativas (Mega / Gigantamax)
  const baseName = isRegional ? speciesName : pokemon.name;
  const altFormResults = await Promise.all(
    ["-mega", "-mega-x", "-mega-y", "-gmax"].map(async (suffix) => {
      const res = await fetch(`${BASE_URL}/pokemon/${baseName}${suffix}`);
      if (!res.ok) return null;
      return { name: `${baseName}${suffix}`, data: await res.json() };
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

  ///--- Formas Regionales
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
}