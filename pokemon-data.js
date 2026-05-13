const POKEMON_DATA = [
  {
    "id": 1,
    "name": "bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 2,
    "name": "ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 3,
    "name": "venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": [
      "M",
      "G"
    ]
  },
  {
    "id": 4,
    "name": "charmander",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 5,
    "name": "charmeleon",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 6,
    "name": "charizard",
    "types": [
      "fire",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "M",
      "G"
    ]
  },
  {
    "id": 7,
    "name": "squirtle",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 8,
    "name": "wartortle",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 9,
    "name": "blastoise",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": [
      "M",
      "G"
    ]
  },
  {
    "id": 10,
    "name": "caterpie",
    "types": [
      "bug"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 11,
    "name": "metapod",
    "types": [
      "bug"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 12,
    "name": "butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 13,
    "name": "weedle",
    "types": [
      "bug",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 14,
    "name": "kakuna",
    "types": [
      "bug",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 15,
    "name": "beedrill",
    "types": [
      "bug",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 16,
    "name": "pidgey",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 18,
    "name": "pidgeot",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 19,
    "name": "rattata",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 20,
    "name": "raticate",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 21,
    "name": "spearow",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 22,
    "name": "fearow",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 23,
    "name": "ekans",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 24,
    "name": "arbok",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 25,
    "name": "pikachu",
    "types": [
      "electric"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 26,
    "name": "raichu",
    "types": [
      "electric"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 27,
    "name": "sandshrew",
    "types": [
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 28,
    "name": "sandslash",
    "types": [
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 30,
    "name": "nidorina",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "types": [
      "poison",
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 33,
    "name": "nidorino",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 34,
    "name": "nidoking",
    "types": [
      "poison",
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 35,
    "name": "clefairy",
    "types": [
      "fairy"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 36,
    "name": "clefable",
    "types": [
      "fairy"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 37,
    "name": "vulpix",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 38,
    "name": "ninetales",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "types": [
      "normal",
      "fairy"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "types": [
      "normal",
      "fairy"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 41,
    "name": "zubat",
    "types": [
      "poison",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 42,
    "name": "golbat",
    "types": [
      "poison",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 43,
    "name": "oddish",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 44,
    "name": "gloom",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 45,
    "name": "vileplume",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 46,
    "name": "paras",
    "types": [
      "bug",
      "grass"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 47,
    "name": "parasect",
    "types": [
      "bug",
      "grass"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 48,
    "name": "venonat",
    "types": [
      "bug",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 49,
    "name": "venomoth",
    "types": [
      "bug",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 50,
    "name": "diglett",
    "types": [
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 51,
    "name": "dugtrio",
    "types": [
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 52,
    "name": "meowth",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R",
      "G"
    ]
  },
  {
    "id": 53,
    "name": "persian",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 54,
    "name": "psyduck",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 55,
    "name": "golduck",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 56,
    "name": "mankey",
    "types": [
      "fighting"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 57,
    "name": "primeape",
    "types": [
      "fighting"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 58,
    "name": "growlithe",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 59,
    "name": "arcanine",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 60,
    "name": "poliwag",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 62,
    "name": "poliwrath",
    "types": [
      "water",
      "fighting"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 63,
    "name": "abra",
    "types": [
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 64,
    "name": "kadabra",
    "types": [
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 65,
    "name": "alakazam",
    "types": [
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 66,
    "name": "machop",
    "types": [
      "fighting"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 67,
    "name": "machoke",
    "types": [
      "fighting"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 68,
    "name": "machamp",
    "types": [
      "fighting"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 69,
    "name": "bellsprout",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 70,
    "name": "weepinbell",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 71,
    "name": "victreebel",
    "types": [
      "grass",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 72,
    "name": "tentacool",
    "types": [
      "water",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 73,
    "name": "tentacruel",
    "types": [
      "water",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 74,
    "name": "geodude",
    "types": [
      "rock",
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 75,
    "name": "graveler",
    "types": [
      "rock",
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 76,
    "name": "golem",
    "types": [
      "rock",
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 77,
    "name": "ponyta",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 78,
    "name": "rapidash",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 79,
    "name": "slowpoke",
    "types": [
      "water",
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 80,
    "name": "slowbro",
    "types": [
      "water",
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M",
      "R"
    ]
  },
  {
    "id": 81,
    "name": "magnemite",
    "types": [
      "electric",
      "steel"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 82,
    "name": "magneton",
    "types": [
      "electric",
      "steel"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 83,
    "name": "farfetchd",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 84,
    "name": "doduo",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 85,
    "name": "dodrio",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 86,
    "name": "seel",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 87,
    "name": "dewgong",
    "types": [
      "water",
      "ice"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 88,
    "name": "grimer",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 89,
    "name": "muk",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 90,
    "name": "shellder",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 91,
    "name": "cloyster",
    "types": [
      "water",
      "ice"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 92,
    "name": "gastly",
    "types": [
      "ghost",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 93,
    "name": "haunter",
    "types": [
      "ghost",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 94,
    "name": "gengar",
    "types": [
      "ghost",
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "M",
      "G"
    ]
  },
  {
    "id": 95,
    "name": "onix",
    "types": [
      "rock",
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 96,
    "name": "drowzee",
    "types": [
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 97,
    "name": "hypno",
    "types": [
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 98,
    "name": "krabby",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 99,
    "name": "kingler",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 100,
    "name": "voltorb",
    "types": [
      "electric"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 101,
    "name": "electrode",
    "types": [
      "electric"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 102,
    "name": "exeggcute",
    "types": [
      "grass",
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 103,
    "name": "exeggutor",
    "types": [
      "grass",
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 104,
    "name": "cubone",
    "types": [
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 105,
    "name": "marowak",
    "types": [
      "ground"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "types": [
      "fighting"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "types": [
      "fighting"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 108,
    "name": "lickitung",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 109,
    "name": "koffing",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 110,
    "name": "weezing",
    "types": [
      "poison"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "types": [
      "ground",
      "rock"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 112,
    "name": "rhydon",
    "types": [
      "ground",
      "rock"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 113,
    "name": "chansey",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 114,
    "name": "tangela",
    "types": [
      "grass"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 116,
    "name": "horsea",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 117,
    "name": "seadra",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 118,
    "name": "goldeen",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 119,
    "name": "seaking",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 120,
    "name": "staryu",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 121,
    "name": "starmie",
    "types": [
      "water",
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 122,
    "name": "mr-mime",
    "types": [
      "psychic",
      "fairy"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 123,
    "name": "scyther",
    "types": [
      "bug",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 124,
    "name": "jynx",
    "types": [
      "ice",
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 125,
    "name": "electabuzz",
    "types": [
      "electric"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 126,
    "name": "magmar",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 127,
    "name": "pinsir",
    "types": [
      "bug"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 128,
    "name": "tauros",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 129,
    "name": "magikarp",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 130,
    "name": "gyarados",
    "types": [
      "water",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 131,
    "name": "lapras",
    "types": [
      "water",
      "ice"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": [
      "G"
    ]
  },
  {
    "id": 132,
    "name": "ditto",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 133,
    "name": "eevee",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 134,
    "name": "vaporeon",
    "types": [
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 135,
    "name": "jolteon",
    "types": [
      "electric"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 136,
    "name": "flareon",
    "types": [
      "fire"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 137,
    "name": "porygon",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 138,
    "name": "omanyte",
    "types": [
      "rock",
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 139,
    "name": "omastar",
    "types": [
      "rock",
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 140,
    "name": "kabuto",
    "types": [
      "rock",
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 141,
    "name": "kabutops",
    "types": [
      "rock",
      "water"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "types": [
      "rock",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 143,
    "name": "snorlax",
    "types": [
      "normal"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "sinnoh",
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 144,
    "name": "articuno",
    "types": [
      "ice",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 1,
    "forms": [
      "R"
    ]
  },
  {
    "id": 145,
    "name": "zapdos",
    "types": [
      "electric",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 1,
    "forms": [
      "R"
    ]
  },
  {
    "id": 146,
    "name": "moltres",
    "types": [
      "fire",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 1,
    "forms": [
      "R"
    ]
  },
  {
    "id": 147,
    "name": "dratini",
    "types": [
      "dragon"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 148,
    "name": "dragonair",
    "types": [
      "dragon"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 149,
    "name": "dragonite",
    "types": [
      "dragon",
      "flying"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 150,
    "name": "mewtwo",
    "types": [
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 151,
    "name": "mew",
    "types": [
      "psychic"
    ],
    "region": "kanto",
    "regions": [
      "kanto",
      "johto"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 152,
    "name": "chikorita",
    "types": [
      "grass"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 153,
    "name": "bayleef",
    "types": [
      "grass"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 154,
    "name": "meganium",
    "types": [
      "grass"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 155,
    "name": "cyndaquil",
    "types": [
      "fire"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 156,
    "name": "quilava",
    "types": [
      "fire"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 157,
    "name": "typhlosion",
    "types": [
      "fire"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 158,
    "name": "totodile",
    "types": [
      "water"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 159,
    "name": "croconaw",
    "types": [
      "water"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 160,
    "name": "feraligatr",
    "types": [
      "water"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 161,
    "name": "sentret",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 162,
    "name": "furret",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 163,
    "name": "hoothoot",
    "types": [
      "normal",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 164,
    "name": "noctowl",
    "types": [
      "normal",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 165,
    "name": "ledyba",
    "types": [
      "bug",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 166,
    "name": "ledian",
    "types": [
      "bug",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 167,
    "name": "spinarak",
    "types": [
      "bug",
      "poison"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 168,
    "name": "ariados",
    "types": [
      "bug",
      "poison"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 169,
    "name": "crobat",
    "types": [
      "poison",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 170,
    "name": "chinchou",
    "types": [
      "water",
      "electric"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 171,
    "name": "lanturn",
    "types": [
      "water",
      "electric"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 172,
    "name": "pichu",
    "types": [
      "electric"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 173,
    "name": "cleffa",
    "types": [
      "fairy"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 174,
    "name": "igglybuff",
    "types": [
      "normal",
      "fairy"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 175,
    "name": "togepi",
    "types": [
      "fairy"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 176,
    "name": "togetic",
    "types": [
      "fairy",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 177,
    "name": "natu",
    "types": [
      "psychic",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 178,
    "name": "xatu",
    "types": [
      "psychic",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 179,
    "name": "mareep",
    "types": [
      "electric"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 180,
    "name": "flaaffy",
    "types": [
      "electric"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 181,
    "name": "ampharos",
    "types": [
      "electric"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 182,
    "name": "bellossom",
    "types": [
      "grass"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 183,
    "name": "marill",
    "types": [
      "water",
      "fairy"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 184,
    "name": "azumarill",
    "types": [
      "water",
      "fairy"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "sinnoh",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 185,
    "name": "sudowoodo",
    "types": [
      "rock"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 186,
    "name": "politoed",
    "types": [
      "water"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 187,
    "name": "hoppip",
    "types": [
      "grass",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 188,
    "name": "skiploom",
    "types": [
      "grass",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 189,
    "name": "jumpluff",
    "types": [
      "grass",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 190,
    "name": "aipom",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 191,
    "name": "sunkern",
    "types": [
      "grass"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 192,
    "name": "sunflora",
    "types": [
      "grass"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 193,
    "name": "yanma",
    "types": [
      "bug",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 194,
    "name": "wooper",
    "types": [
      "water",
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 195,
    "name": "quagsire",
    "types": [
      "water",
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 196,
    "name": "espeon",
    "types": [
      "psychic"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 197,
    "name": "umbreon",
    "types": [
      "dark"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 198,
    "name": "murkrow",
    "types": [
      "dark",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 199,
    "name": "slowking",
    "types": [
      "water",
      "psychic"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 200,
    "name": "misdreavus",
    "types": [
      "ghost"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 201,
    "name": "unown",
    "types": [
      "psychic"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 202,
    "name": "wobbuffet",
    "types": [
      "psychic"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 203,
    "name": "girafarig",
    "types": [
      "normal",
      "psychic"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 204,
    "name": "pineco",
    "types": [
      "bug"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 205,
    "name": "forretress",
    "types": [
      "bug",
      "steel"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 206,
    "name": "dunsparce",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 207,
    "name": "gligar",
    "types": [
      "ground",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 208,
    "name": "steelix",
    "types": [
      "steel",
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 209,
    "name": "snubbull",
    "types": [
      "fairy"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 210,
    "name": "granbull",
    "types": [
      "fairy"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 211,
    "name": "qwilfish",
    "types": [
      "water",
      "poison"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 212,
    "name": "scizor",
    "types": [
      "bug",
      "steel"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 213,
    "name": "shuckle",
    "types": [
      "bug",
      "rock"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 214,
    "name": "heracross",
    "types": [
      "bug",
      "fighting"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 215,
    "name": "sneasel",
    "types": [
      "dark",
      "ice"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 216,
    "name": "teddiursa",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 217,
    "name": "ursaring",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 218,
    "name": "slugma",
    "types": [
      "fire"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 219,
    "name": "magcargo",
    "types": [
      "fire",
      "rock"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 220,
    "name": "swinub",
    "types": [
      "ice",
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 221,
    "name": "piloswine",
    "types": [
      "ice",
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 222,
    "name": "corsola",
    "types": [
      "water",
      "rock"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 223,
    "name": "remoraid",
    "types": [
      "water"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 224,
    "name": "octillery",
    "types": [
      "water"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 225,
    "name": "delibird",
    "types": [
      "ice",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 226,
    "name": "mantine",
    "types": [
      "water",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 227,
    "name": "skarmory",
    "types": [
      "steel",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 228,
    "name": "houndour",
    "types": [
      "dark",
      "fire"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 229,
    "name": "houndoom",
    "types": [
      "dark",
      "fire"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 230,
    "name": "kingdra",
    "types": [
      "water",
      "dragon"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 231,
    "name": "phanpy",
    "types": [
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 232,
    "name": "donphan",
    "types": [
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 233,
    "name": "porygon2",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 234,
    "name": "stantler",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 235,
    "name": "smeargle",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "kalos",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 236,
    "name": "tyrogue",
    "types": [
      "fighting"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 237,
    "name": "hitmontop",
    "types": [
      "fighting"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 238,
    "name": "smoochum",
    "types": [
      "ice",
      "psychic"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 239,
    "name": "elekid",
    "types": [
      "electric"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 240,
    "name": "magby",
    "types": [
      "fire"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 241,
    "name": "miltank",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 242,
    "name": "blissey",
    "types": [
      "normal"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 243,
    "name": "raikou",
    "types": [
      "electric"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 244,
    "name": "entei",
    "types": [
      "fire"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 245,
    "name": "suicune",
    "types": [
      "water"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 246,
    "name": "larvitar",
    "types": [
      "rock",
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 247,
    "name": "pupitar",
    "types": [
      "rock",
      "ground"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 248,
    "name": "tyranitar",
    "types": [
      "rock",
      "dark"
    ],
    "region": "johto",
    "regions": [
      "johto",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 249,
    "name": "lugia",
    "types": [
      "psychic",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 250,
    "name": "ho-oh",
    "types": [
      "fire",
      "flying"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 251,
    "name": "celebi",
    "types": [
      "psychic",
      "grass"
    ],
    "region": "johto",
    "regions": [
      "johto"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 252,
    "name": "treecko",
    "types": [
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 253,
    "name": "grovyle",
    "types": [
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 254,
    "name": "sceptile",
    "types": [
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 255,
    "name": "torchic",
    "types": [
      "fire"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 256,
    "name": "combusken",
    "types": [
      "fire",
      "fighting"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 257,
    "name": "blaziken",
    "types": [
      "fire",
      "fighting"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 258,
    "name": "mudkip",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 259,
    "name": "marshtomp",
    "types": [
      "water",
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 260,
    "name": "swampert",
    "types": [
      "water",
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 261,
    "name": "poochyena",
    "types": [
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 262,
    "name": "mightyena",
    "types": [
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 263,
    "name": "zigzagoon",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 264,
    "name": "linoone",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 265,
    "name": "wurmple",
    "types": [
      "bug"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 266,
    "name": "silcoon",
    "types": [
      "bug"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 267,
    "name": "beautifly",
    "types": [
      "bug",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 268,
    "name": "cascoon",
    "types": [
      "bug"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 269,
    "name": "dustox",
    "types": [
      "bug",
      "poison"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 270,
    "name": "lotad",
    "types": [
      "water",
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 271,
    "name": "lombre",
    "types": [
      "water",
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 272,
    "name": "ludicolo",
    "types": [
      "water",
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 273,
    "name": "seedot",
    "types": [
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 274,
    "name": "nuzleaf",
    "types": [
      "grass",
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 275,
    "name": "shiftry",
    "types": [
      "grass",
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 276,
    "name": "taillow",
    "types": [
      "normal",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 277,
    "name": "swellow",
    "types": [
      "normal",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 278,
    "name": "wingull",
    "types": [
      "water",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 279,
    "name": "pelipper",
    "types": [
      "water",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 280,
    "name": "ralts",
    "types": [
      "psychic",
      "fairy"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 281,
    "name": "kirlia",
    "types": [
      "psychic",
      "fairy"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 282,
    "name": "gardevoir",
    "types": [
      "psychic",
      "fairy"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 283,
    "name": "surskit",
    "types": [
      "bug",
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 284,
    "name": "masquerain",
    "types": [
      "bug",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 285,
    "name": "shroomish",
    "types": [
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 286,
    "name": "breloom",
    "types": [
      "grass",
      "fighting"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 287,
    "name": "slakoth",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 288,
    "name": "vigoroth",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 289,
    "name": "slaking",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 290,
    "name": "nincada",
    "types": [
      "bug",
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 291,
    "name": "ninjask",
    "types": [
      "bug",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 292,
    "name": "shedinja",
    "types": [
      "bug",
      "ghost"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 293,
    "name": "whismur",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 294,
    "name": "loudred",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 295,
    "name": "exploud",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 296,
    "name": "makuhita",
    "types": [
      "fighting"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 297,
    "name": "hariyama",
    "types": [
      "fighting"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 298,
    "name": "azurill",
    "types": [
      "normal",
      "fairy"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 299,
    "name": "nosepass",
    "types": [
      "rock"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 300,
    "name": "skitty",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 301,
    "name": "delcatty",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 302,
    "name": "sableye",
    "types": [
      "dark",
      "ghost"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 303,
    "name": "mawile",
    "types": [
      "steel",
      "fairy"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 304,
    "name": "aron",
    "types": [
      "steel",
      "rock"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 305,
    "name": "lairon",
    "types": [
      "steel",
      "rock"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 306,
    "name": "aggron",
    "types": [
      "steel",
      "rock"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 307,
    "name": "meditite",
    "types": [
      "fighting",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 308,
    "name": "medicham",
    "types": [
      "fighting",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 309,
    "name": "electrike",
    "types": [
      "electric"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 310,
    "name": "manectric",
    "types": [
      "electric"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 311,
    "name": "plusle",
    "types": [
      "electric"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 312,
    "name": "minun",
    "types": [
      "electric"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 313,
    "name": "volbeat",
    "types": [
      "bug"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 314,
    "name": "illumise",
    "types": [
      "bug"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 315,
    "name": "roselia",
    "types": [
      "grass",
      "poison"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 316,
    "name": "gulpin",
    "types": [
      "poison"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 317,
    "name": "swalot",
    "types": [
      "poison"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 318,
    "name": "carvanha",
    "types": [
      "water",
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 319,
    "name": "sharpedo",
    "types": [
      "water",
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 320,
    "name": "wailmer",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 321,
    "name": "wailord",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 322,
    "name": "numel",
    "types": [
      "fire",
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 323,
    "name": "camerupt",
    "types": [
      "fire",
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 324,
    "name": "torkoal",
    "types": [
      "fire"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 325,
    "name": "spoink",
    "types": [
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 326,
    "name": "grumpig",
    "types": [
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 327,
    "name": "spinda",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 328,
    "name": "trapinch",
    "types": [
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 329,
    "name": "vibrava",
    "types": [
      "ground",
      "dragon"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 330,
    "name": "flygon",
    "types": [
      "ground",
      "dragon"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 331,
    "name": "cacnea",
    "types": [
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 332,
    "name": "cacturne",
    "types": [
      "grass",
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 333,
    "name": "swablu",
    "types": [
      "normal",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 334,
    "name": "altaria",
    "types": [
      "dragon",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 335,
    "name": "zangoose",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 336,
    "name": "seviper",
    "types": [
      "poison"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 337,
    "name": "lunatone",
    "types": [
      "rock",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 338,
    "name": "solrock",
    "types": [
      "rock",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 339,
    "name": "barboach",
    "types": [
      "water",
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 340,
    "name": "whiscash",
    "types": [
      "water",
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 341,
    "name": "corphish",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 342,
    "name": "crawdaunt",
    "types": [
      "water",
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 343,
    "name": "baltoy",
    "types": [
      "ground",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 344,
    "name": "claydol",
    "types": [
      "ground",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 345,
    "name": "lileep",
    "types": [
      "rock",
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 346,
    "name": "cradily",
    "types": [
      "rock",
      "grass"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 347,
    "name": "anorith",
    "types": [
      "rock",
      "bug"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 348,
    "name": "armaldo",
    "types": [
      "rock",
      "bug"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 349,
    "name": "feebas",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 350,
    "name": "milotic",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 351,
    "name": "castform",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 352,
    "name": "kecleon",
    "types": [
      "normal"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 353,
    "name": "shuppet",
    "types": [
      "ghost"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 354,
    "name": "banette",
    "types": [
      "ghost"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 355,
    "name": "duskull",
    "types": [
      "ghost"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 356,
    "name": "dusclops",
    "types": [
      "ghost"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 357,
    "name": "tropius",
    "types": [
      "grass",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 358,
    "name": "chimecho",
    "types": [
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 359,
    "name": "absol",
    "types": [
      "dark"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 360,
    "name": "wynaut",
    "types": [
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 361,
    "name": "snorunt",
    "types": [
      "ice"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 362,
    "name": "glalie",
    "types": [
      "ice"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 363,
    "name": "spheal",
    "types": [
      "ice",
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 364,
    "name": "sealeo",
    "types": [
      "ice",
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 365,
    "name": "walrein",
    "types": [
      "ice",
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 366,
    "name": "clamperl",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 367,
    "name": "huntail",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 368,
    "name": "gorebyss",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 369,
    "name": "relicanth",
    "types": [
      "water",
      "rock"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 370,
    "name": "luvdisc",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 371,
    "name": "bagon",
    "types": [
      "dragon"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 372,
    "name": "shelgon",
    "types": [
      "dragon"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 373,
    "name": "salamence",
    "types": [
      "dragon",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 374,
    "name": "beldum",
    "types": [
      "steel",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 375,
    "name": "metang",
    "types": [
      "steel",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 376,
    "name": "metagross",
    "types": [
      "steel",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 377,
    "name": "regirock",
    "types": [
      "rock"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 378,
    "name": "regice",
    "types": [
      "ice"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 379,
    "name": "registeel",
    "types": [
      "steel"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 380,
    "name": "latias",
    "types": [
      "dragon",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 381,
    "name": "latios",
    "types": [
      "dragon",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 382,
    "name": "kyogre",
    "types": [
      "water"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 383,
    "name": "groudon",
    "types": [
      "ground"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 384,
    "name": "rayquaza",
    "types": [
      "dragon",
      "flying"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 385,
    "name": "jirachi",
    "types": [
      "steel",
      "psychic"
    ],
    "region": "hoenn",
    "regions": [
      "hoenn"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 387,
    "name": "turtwig",
    "types": [
      "grass"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 388,
    "name": "grotle",
    "types": [
      "grass"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 389,
    "name": "torterra",
    "types": [
      "grass",
      "ground"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 390,
    "name": "chimchar",
    "types": [
      "fire"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 391,
    "name": "monferno",
    "types": [
      "fire",
      "fighting"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 392,
    "name": "infernape",
    "types": [
      "fire",
      "fighting"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 393,
    "name": "piplup",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 394,
    "name": "prinplup",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 395,
    "name": "empoleon",
    "types": [
      "water",
      "steel"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 396,
    "name": "starly",
    "types": [
      "normal",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 397,
    "name": "staravia",
    "types": [
      "normal",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 398,
    "name": "staraptor",
    "types": [
      "normal",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 399,
    "name": "bidoof",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 400,
    "name": "bibarel",
    "types": [
      "normal",
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 401,
    "name": "kricketot",
    "types": [
      "bug"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 402,
    "name": "kricketune",
    "types": [
      "bug"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 403,
    "name": "shinx",
    "types": [
      "electric"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 404,
    "name": "luxio",
    "types": [
      "electric"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 405,
    "name": "luxray",
    "types": [
      "electric"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 406,
    "name": "budew",
    "types": [
      "grass",
      "poison"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 407,
    "name": "roserade",
    "types": [
      "grass",
      "poison"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 408,
    "name": "cranidos",
    "types": [
      "rock"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 409,
    "name": "rampardos",
    "types": [
      "rock"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 410,
    "name": "shieldon",
    "types": [
      "rock",
      "steel"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 411,
    "name": "bastiodon",
    "types": [
      "rock",
      "steel"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 412,
    "name": "burmy",
    "types": [
      "bug"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 414,
    "name": "mothim",
    "types": [
      "bug",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 415,
    "name": "combee",
    "types": [
      "bug",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 416,
    "name": "vespiquen",
    "types": [
      "bug",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 417,
    "name": "pachirisu",
    "types": [
      "electric"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 418,
    "name": "buizel",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 419,
    "name": "floatzel",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 420,
    "name": "cherubi",
    "types": [
      "grass"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 421,
    "name": "cherrim",
    "types": [
      "grass"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 422,
    "name": "shellos",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 423,
    "name": "gastrodon",
    "types": [
      "water",
      "ground"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 424,
    "name": "ambipom",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 425,
    "name": "drifloon",
    "types": [
      "ghost",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 426,
    "name": "drifblim",
    "types": [
      "ghost",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 427,
    "name": "buneary",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 428,
    "name": "lopunny",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 429,
    "name": "mismagius",
    "types": [
      "ghost"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 430,
    "name": "honchkrow",
    "types": [
      "dark",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 431,
    "name": "glameow",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 432,
    "name": "purugly",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 433,
    "name": "chingling",
    "types": [
      "psychic"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 434,
    "name": "stunky",
    "types": [
      "poison",
      "dark"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 435,
    "name": "skuntank",
    "types": [
      "poison",
      "dark"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 436,
    "name": "bronzor",
    "types": [
      "steel",
      "psychic"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 437,
    "name": "bronzong",
    "types": [
      "steel",
      "psychic"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 438,
    "name": "bonsly",
    "types": [
      "rock"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 439,
    "name": "mime-jr",
    "types": [
      "psychic",
      "fairy"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 440,
    "name": "happiny",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 441,
    "name": "chatot",
    "types": [
      "normal",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 442,
    "name": "spiritomb",
    "types": [
      "ghost",
      "dark"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 443,
    "name": "gible",
    "types": [
      "dragon",
      "ground"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 444,
    "name": "gabite",
    "types": [
      "dragon",
      "ground"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 445,
    "name": "garchomp",
    "types": [
      "dragon",
      "ground"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 446,
    "name": "munchlax",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 447,
    "name": "riolu",
    "types": [
      "fighting"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 448,
    "name": "lucario",
    "types": [
      "fighting",
      "steel"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 449,
    "name": "hippopotas",
    "types": [
      "ground"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 450,
    "name": "hippowdon",
    "types": [
      "ground"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 451,
    "name": "skorupi",
    "types": [
      "poison",
      "bug"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 452,
    "name": "drapion",
    "types": [
      "poison",
      "dark"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 453,
    "name": "croagunk",
    "types": [
      "poison",
      "fighting"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 454,
    "name": "toxicroak",
    "types": [
      "poison",
      "fighting"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 455,
    "name": "carnivine",
    "types": [
      "grass"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 456,
    "name": "finneon",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 457,
    "name": "lumineon",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 458,
    "name": "mantyke",
    "types": [
      "water",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 459,
    "name": "snover",
    "types": [
      "grass",
      "ice"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 460,
    "name": "abomasnow",
    "types": [
      "grass",
      "ice"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "M"
    ]
  },
  {
    "id": 461,
    "name": "weavile",
    "types": [
      "dark",
      "ice"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 462,
    "name": "magnezone",
    "types": [
      "electric",
      "steel"
    ],
    "region": "sinnoh",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 463,
    "name": "lickilicky",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 464,
    "name": "rhyperior",
    "types": [
      "ground",
      "rock"
    ],
    "region": "sinnoh",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 465,
    "name": "tangrowth",
    "types": [
      "grass"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 466,
    "name": "electivire",
    "types": [
      "electric"
    ],
    "region": "sinnoh",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 467,
    "name": "magmortar",
    "types": [
      "fire"
    ],
    "region": "sinnoh",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 468,
    "name": "togekiss",
    "types": [
      "fairy",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 469,
    "name": "yanmega",
    "types": [
      "bug",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 470,
    "name": "leafeon",
    "types": [
      "grass"
    ],
    "region": "sinnoh",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 471,
    "name": "glaceon",
    "types": [
      "ice"
    ],
    "region": "sinnoh",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 472,
    "name": "gliscor",
    "types": [
      "ground",
      "flying"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 473,
    "name": "mamoswine",
    "types": [
      "ice",
      "ground"
    ],
    "region": "sinnoh",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 474,
    "name": "porygon-z",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 475,
    "name": "gallade",
    "types": [
      "psychic",
      "fighting"
    ],
    "region": "sinnoh",
    "regions": [
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "M"
    ]
  },
  {
    "id": 476,
    "name": "probopass",
    "types": [
      "rock",
      "steel"
    ],
    "region": "sinnoh",
    "regions": [
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 477,
    "name": "dusknoir",
    "types": [
      "ghost"
    ],
    "region": "sinnoh",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 478,
    "name": "froslass",
    "types": [
      "ice",
      "ghost"
    ],
    "region": "sinnoh",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 479,
    "name": "rotom",
    "types": [
      "electric",
      "ghost"
    ],
    "region": "sinnoh",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 480,
    "name": "uxie",
    "types": [
      "psychic"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 481,
    "name": "mesprit",
    "types": [
      "psychic"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 482,
    "name": "azelf",
    "types": [
      "psychic"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 483,
    "name": "dialga",
    "types": [
      "steel",
      "dragon"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 484,
    "name": "palkia",
    "types": [
      "water",
      "dragon"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 485,
    "name": "heatran",
    "types": [
      "fire",
      "steel"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 486,
    "name": "regigigas",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 488,
    "name": "cresselia",
    "types": [
      "psychic"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 489,
    "name": "phione",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 490,
    "name": "manaphy",
    "types": [
      "water"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 491,
    "name": "darkrai",
    "types": [
      "dark"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 493,
    "name": "arceus",
    "types": [
      "normal"
    ],
    "region": "sinnoh",
    "regions": [
      "sinnoh"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 494,
    "name": "victini",
    "types": [
      "psychic",
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 495,
    "name": "snivy",
    "types": [
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 496,
    "name": "servine",
    "types": [
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 497,
    "name": "serperior",
    "types": [
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 498,
    "name": "tepig",
    "types": [
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 499,
    "name": "pignite",
    "types": [
      "fire",
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 500,
    "name": "emboar",
    "types": [
      "fire",
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 501,
    "name": "oshawott",
    "types": [
      "water"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 502,
    "name": "dewott",
    "types": [
      "water"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 503,
    "name": "samurott",
    "types": [
      "water"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 504,
    "name": "patrat",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 505,
    "name": "watchog",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 506,
    "name": "lillipup",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 507,
    "name": "herdier",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 508,
    "name": "stoutland",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 509,
    "name": "purrloin",
    "types": [
      "dark"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 510,
    "name": "liepard",
    "types": [
      "dark"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 511,
    "name": "pansage",
    "types": [
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 512,
    "name": "simisage",
    "types": [
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 513,
    "name": "pansear",
    "types": [
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 514,
    "name": "simisear",
    "types": [
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 515,
    "name": "panpour",
    "types": [
      "water"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 516,
    "name": "simipour",
    "types": [
      "water"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 517,
    "name": "munna",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 518,
    "name": "musharna",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 519,
    "name": "pidove",
    "types": [
      "normal",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 520,
    "name": "tranquill",
    "types": [
      "normal",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 521,
    "name": "unfezant",
    "types": [
      "normal",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 522,
    "name": "blitzle",
    "types": [
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 523,
    "name": "zebstrika",
    "types": [
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 524,
    "name": "roggenrola",
    "types": [
      "rock"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 525,
    "name": "boldore",
    "types": [
      "rock"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 526,
    "name": "gigalith",
    "types": [
      "rock"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 527,
    "name": "woobat",
    "types": [
      "psychic",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 528,
    "name": "swoobat",
    "types": [
      "psychic",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 529,
    "name": "drilbur",
    "types": [
      "ground"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 530,
    "name": "excadrill",
    "types": [
      "ground",
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 531,
    "name": "audino",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 532,
    "name": "timburr",
    "types": [
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 533,
    "name": "gurdurr",
    "types": [
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 534,
    "name": "conkeldurr",
    "types": [
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 535,
    "name": "tympole",
    "types": [
      "water"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 536,
    "name": "palpitoad",
    "types": [
      "water",
      "ground"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 537,
    "name": "seismitoad",
    "types": [
      "water",
      "ground"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 538,
    "name": "throh",
    "types": [
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 539,
    "name": "sawk",
    "types": [
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 540,
    "name": "sewaddle",
    "types": [
      "bug",
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 541,
    "name": "swadloon",
    "types": [
      "bug",
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 542,
    "name": "leavanny",
    "types": [
      "bug",
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 543,
    "name": "venipede",
    "types": [
      "bug",
      "poison"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 544,
    "name": "whirlipede",
    "types": [
      "bug",
      "poison"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 545,
    "name": "scolipede",
    "types": [
      "bug",
      "poison"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 546,
    "name": "cottonee",
    "types": [
      "grass",
      "fairy"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 547,
    "name": "whimsicott",
    "types": [
      "grass",
      "fairy"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 548,
    "name": "petilil",
    "types": [
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 549,
    "name": "lilligant",
    "types": [
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 551,
    "name": "sandile",
    "types": [
      "ground",
      "dark"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 552,
    "name": "krokorok",
    "types": [
      "ground",
      "dark"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 553,
    "name": "krookodile",
    "types": [
      "ground",
      "dark"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 554,
    "name": "darumaka",
    "types": [
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 556,
    "name": "maractus",
    "types": [
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 557,
    "name": "dwebble",
    "types": [
      "bug",
      "rock"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 558,
    "name": "crustle",
    "types": [
      "bug",
      "rock"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 559,
    "name": "scraggy",
    "types": [
      "dark",
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 560,
    "name": "scrafty",
    "types": [
      "dark",
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 561,
    "name": "sigilyph",
    "types": [
      "psychic",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 562,
    "name": "yamask",
    "types": [
      "ghost"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 563,
    "name": "cofagrigus",
    "types": [
      "ghost"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 564,
    "name": "tirtouga",
    "types": [
      "water",
      "rock"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 565,
    "name": "carracosta",
    "types": [
      "water",
      "rock"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 566,
    "name": "archen",
    "types": [
      "rock",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 567,
    "name": "archeops",
    "types": [
      "rock",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 568,
    "name": "trubbish",
    "types": [
      "poison"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 569,
    "name": "garbodor",
    "types": [
      "poison"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 570,
    "name": "zorua",
    "types": [
      "dark"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 571,
    "name": "zoroark",
    "types": [
      "dark"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 572,
    "name": "minccino",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 573,
    "name": "cinccino",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 574,
    "name": "gothita",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 575,
    "name": "gothorita",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 576,
    "name": "gothitelle",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 577,
    "name": "solosis",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 578,
    "name": "duosion",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 579,
    "name": "reuniclus",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 580,
    "name": "ducklett",
    "types": [
      "water",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 581,
    "name": "swanna",
    "types": [
      "water",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 582,
    "name": "vanillite",
    "types": [
      "ice"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 583,
    "name": "vanillish",
    "types": [
      "ice"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 584,
    "name": "vanilluxe",
    "types": [
      "ice"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 585,
    "name": "deerling",
    "types": [
      "normal",
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 586,
    "name": "sawsbuck",
    "types": [
      "normal",
      "grass"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 587,
    "name": "emolga",
    "types": [
      "electric",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 588,
    "name": "karrablast",
    "types": [
      "bug"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 589,
    "name": "escavalier",
    "types": [
      "bug",
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 590,
    "name": "foongus",
    "types": [
      "grass",
      "poison"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 591,
    "name": "amoonguss",
    "types": [
      "grass",
      "poison"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 594,
    "name": "alomomola",
    "types": [
      "water"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 595,
    "name": "joltik",
    "types": [
      "bug",
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 596,
    "name": "galvantula",
    "types": [
      "bug",
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 597,
    "name": "ferroseed",
    "types": [
      "grass",
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 598,
    "name": "ferrothorn",
    "types": [
      "grass",
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 599,
    "name": "klink",
    "types": [
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 600,
    "name": "klang",
    "types": [
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 601,
    "name": "klinklang",
    "types": [
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 602,
    "name": "tynamo",
    "types": [
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 603,
    "name": "eelektrik",
    "types": [
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 604,
    "name": "eelektross",
    "types": [
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 605,
    "name": "elgyem",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 606,
    "name": "beheeyem",
    "types": [
      "psychic"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 607,
    "name": "litwick",
    "types": [
      "ghost",
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 608,
    "name": "lampent",
    "types": [
      "ghost",
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 609,
    "name": "chandelure",
    "types": [
      "ghost",
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 610,
    "name": "axew",
    "types": [
      "dragon"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 611,
    "name": "fraxure",
    "types": [
      "dragon"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 612,
    "name": "haxorus",
    "types": [
      "dragon"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "kalos",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 613,
    "name": "cubchoo",
    "types": [
      "ice"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 614,
    "name": "beartic",
    "types": [
      "ice"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 615,
    "name": "cryogonal",
    "types": [
      "ice"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 616,
    "name": "shelmet",
    "types": [
      "bug"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 617,
    "name": "accelgor",
    "types": [
      "bug"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 618,
    "name": "stunfisk",
    "types": [
      "ground",
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": [
      "R"
    ]
  },
  {
    "id": 619,
    "name": "mienfoo",
    "types": [
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 620,
    "name": "mienshao",
    "types": [
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 621,
    "name": "druddigon",
    "types": [
      "dragon"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 622,
    "name": "golett",
    "types": [
      "ground",
      "ghost"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 623,
    "name": "golurk",
    "types": [
      "ground",
      "ghost"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 624,
    "name": "pawniard",
    "types": [
      "dark",
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 625,
    "name": "bisharp",
    "types": [
      "dark",
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 626,
    "name": "bouffalant",
    "types": [
      "normal"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 627,
    "name": "rufflet",
    "types": [
      "normal",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 628,
    "name": "braviary",
    "types": [
      "normal",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 629,
    "name": "vullaby",
    "types": [
      "dark",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 630,
    "name": "mandibuzz",
    "types": [
      "dark",
      "flying"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 631,
    "name": "heatmor",
    "types": [
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 632,
    "name": "durant",
    "types": [
      "bug",
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 633,
    "name": "deino",
    "types": [
      "dark",
      "dragon"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 634,
    "name": "zweilous",
    "types": [
      "dark",
      "dragon"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 635,
    "name": "hydreigon",
    "types": [
      "dark",
      "dragon"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 636,
    "name": "larvesta",
    "types": [
      "bug",
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 637,
    "name": "volcarona",
    "types": [
      "bug",
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 638,
    "name": "cobalion",
    "types": [
      "steel",
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 639,
    "name": "terrakion",
    "types": [
      "rock",
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 640,
    "name": "virizion",
    "types": [
      "grass",
      "fighting"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 643,
    "name": "reshiram",
    "types": [
      "dragon",
      "fire"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 644,
    "name": "zekrom",
    "types": [
      "dragon",
      "electric"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 646,
    "name": "kyurem",
    "types": [
      "dragon",
      "ice"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 649,
    "name": "genesect",
    "types": [
      "bug",
      "steel"
    ],
    "region": "unova",
    "regions": [
      "unova"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 650,
    "name": "chespin",
    "types": [
      "grass"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 651,
    "name": "quilladin",
    "types": [
      "grass"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 652,
    "name": "chesnaught",
    "types": [
      "grass",
      "fighting"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 653,
    "name": "fennekin",
    "types": [
      "fire"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 654,
    "name": "braixen",
    "types": [
      "fire"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 655,
    "name": "delphox",
    "types": [
      "fire",
      "psychic"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 656,
    "name": "froakie",
    "types": [
      "water"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 657,
    "name": "frogadier",
    "types": [
      "water"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 658,
    "name": "greninja",
    "types": [
      "water",
      "dark"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 659,
    "name": "bunnelby",
    "types": [
      "normal"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 660,
    "name": "diggersby",
    "types": [
      "normal",
      "ground"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 661,
    "name": "fletchling",
    "types": [
      "normal",
      "flying"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 662,
    "name": "fletchinder",
    "types": [
      "fire",
      "flying"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 663,
    "name": "talonflame",
    "types": [
      "fire",
      "flying"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "alola",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 664,
    "name": "scatterbug",
    "types": [
      "bug"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 665,
    "name": "spewpa",
    "types": [
      "bug"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 666,
    "name": "vivillon",
    "types": [
      "bug",
      "flying"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 667,
    "name": "litleo",
    "types": [
      "fire",
      "normal"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 669,
    "name": "flabebe",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 670,
    "name": "floette",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 671,
    "name": "florges",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 672,
    "name": "skiddo",
    "types": [
      "grass"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 673,
    "name": "gogoat",
    "types": [
      "grass"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 674,
    "name": "pancham",
    "types": [
      "fighting"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 675,
    "name": "pangoro",
    "types": [
      "fighting",
      "dark"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 676,
    "name": "furfrou",
    "types": [
      "normal"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 677,
    "name": "espurr",
    "types": [
      "psychic"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 679,
    "name": "honedge",
    "types": [
      "steel",
      "ghost"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 680,
    "name": "doublade",
    "types": [
      "steel",
      "ghost"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 682,
    "name": "spritzee",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 683,
    "name": "aromatisse",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 684,
    "name": "swirlix",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 685,
    "name": "slurpuff",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 686,
    "name": "inkay",
    "types": [
      "dark",
      "psychic"
    ],
    "region": "kalos",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 687,
    "name": "malamar",
    "types": [
      "dark",
      "psychic"
    ],
    "region": "kalos",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 688,
    "name": "binacle",
    "types": [
      "rock",
      "water"
    ],
    "region": "kalos",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 689,
    "name": "barbaracle",
    "types": [
      "rock",
      "water"
    ],
    "region": "kalos",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 690,
    "name": "skrelp",
    "types": [
      "poison",
      "water"
    ],
    "region": "kalos",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 691,
    "name": "dragalge",
    "types": [
      "poison",
      "dragon"
    ],
    "region": "kalos",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 692,
    "name": "clauncher",
    "types": [
      "water"
    ],
    "region": "kalos",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 693,
    "name": "clawitzer",
    "types": [
      "water"
    ],
    "region": "kalos",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 694,
    "name": "helioptile",
    "types": [
      "electric",
      "normal"
    ],
    "region": "kalos",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 695,
    "name": "heliolisk",
    "types": [
      "electric",
      "normal"
    ],
    "region": "kalos",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 696,
    "name": "tyrunt",
    "types": [
      "rock",
      "dragon"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 697,
    "name": "tyrantrum",
    "types": [
      "rock",
      "dragon"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 698,
    "name": "amaura",
    "types": [
      "rock",
      "ice"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 699,
    "name": "aurorus",
    "types": [
      "rock",
      "ice"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 700,
    "name": "sylveon",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 701,
    "name": "hawlucha",
    "types": [
      "fighting",
      "flying"
    ],
    "region": "kalos",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 702,
    "name": "dedenne",
    "types": [
      "electric",
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 703,
    "name": "carbink",
    "types": [
      "rock",
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 704,
    "name": "goomy",
    "types": [
      "dragon"
    ],
    "region": "kalos",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 705,
    "name": "sliggoo",
    "types": [
      "dragon"
    ],
    "region": "kalos",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 706,
    "name": "goodra",
    "types": [
      "dragon"
    ],
    "region": "kalos",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 707,
    "name": "klefki",
    "types": [
      "steel",
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 708,
    "name": "phantump",
    "types": [
      "ghost",
      "grass"
    ],
    "region": "kalos",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 709,
    "name": "trevenant",
    "types": [
      "ghost",
      "grass"
    ],
    "region": "kalos",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 712,
    "name": "bergmite",
    "types": [
      "ice"
    ],
    "region": "kalos",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 713,
    "name": "avalugg",
    "types": [
      "ice"
    ],
    "region": "kalos",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 714,
    "name": "noibat",
    "types": [
      "flying",
      "dragon"
    ],
    "region": "kalos",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 715,
    "name": "noivern",
    "types": [
      "flying",
      "dragon"
    ],
    "region": "kalos",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 716,
    "name": "xerneas",
    "types": [
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 717,
    "name": "yveltal",
    "types": [
      "dark",
      "flying"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 719,
    "name": "diancie",
    "types": [
      "rock",
      "fairy"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": [
      "M"
    ]
  },
  {
    "id": 720,
    "name": "hoopa",
    "types": [
      "psychic",
      "ghost"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 721,
    "name": "volcanion",
    "types": [
      "fire",
      "water"
    ],
    "region": "kalos",
    "regions": [
      "kalos"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 722,
    "name": "rowlet",
    "types": [
      "grass",
      "flying"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 723,
    "name": "dartrix",
    "types": [
      "grass",
      "flying"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 724,
    "name": "decidueye",
    "types": [
      "grass",
      "ghost"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 725,
    "name": "litten",
    "types": [
      "fire"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 726,
    "name": "torracat",
    "types": [
      "fire"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 727,
    "name": "incineroar",
    "types": [
      "fire",
      "dark"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 728,
    "name": "popplio",
    "types": [
      "water"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 729,
    "name": "brionne",
    "types": [
      "water"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 730,
    "name": "primarina",
    "types": [
      "water",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 731,
    "name": "pikipek",
    "types": [
      "normal",
      "flying"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 732,
    "name": "trumbeak",
    "types": [
      "normal",
      "flying"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 733,
    "name": "toucannon",
    "types": [
      "normal",
      "flying"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 734,
    "name": "yungoos",
    "types": [
      "normal"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 735,
    "name": "gumshoos",
    "types": [
      "normal"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 736,
    "name": "grubbin",
    "types": [
      "bug"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 737,
    "name": "charjabug",
    "types": [
      "bug",
      "electric"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 738,
    "name": "vikavolt",
    "types": [
      "bug",
      "electric"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 739,
    "name": "crabrawler",
    "types": [
      "fighting"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 740,
    "name": "crabominable",
    "types": [
      "fighting",
      "ice"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 742,
    "name": "cutiefly",
    "types": [
      "bug",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 743,
    "name": "ribombee",
    "types": [
      "bug",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 744,
    "name": "rockruff",
    "types": [
      "rock"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 747,
    "name": "mareanie",
    "types": [
      "poison",
      "water"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 748,
    "name": "toxapex",
    "types": [
      "poison",
      "water"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 749,
    "name": "mudbray",
    "types": [
      "ground"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 750,
    "name": "mudsdale",
    "types": [
      "ground"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 751,
    "name": "dewpider",
    "types": [
      "water",
      "bug"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 752,
    "name": "araquanid",
    "types": [
      "water",
      "bug"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 753,
    "name": "fomantis",
    "types": [
      "grass"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 754,
    "name": "lurantis",
    "types": [
      "grass"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 755,
    "name": "morelull",
    "types": [
      "grass",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 756,
    "name": "shiinotic",
    "types": [
      "grass",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 757,
    "name": "salandit",
    "types": [
      "poison",
      "fire"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 758,
    "name": "salazzle",
    "types": [
      "poison",
      "fire"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 759,
    "name": "stufful",
    "types": [
      "normal",
      "fighting"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 760,
    "name": "bewear",
    "types": [
      "normal",
      "fighting"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 761,
    "name": "bounsweet",
    "types": [
      "grass"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 762,
    "name": "steenee",
    "types": [
      "grass"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 763,
    "name": "tsareena",
    "types": [
      "grass"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 764,
    "name": "comfey",
    "types": [
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 765,
    "name": "oranguru",
    "types": [
      "normal",
      "psychic"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 766,
    "name": "passimian",
    "types": [
      "fighting"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 767,
    "name": "wimpod",
    "types": [
      "bug",
      "water"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 768,
    "name": "golisopod",
    "types": [
      "bug",
      "water"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 769,
    "name": "sandygast",
    "types": [
      "ghost",
      "ground"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 770,
    "name": "palossand",
    "types": [
      "ghost",
      "ground"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 771,
    "name": "pyukumuku",
    "types": [
      "water"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 772,
    "name": "type-null",
    "types": [
      "normal"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 773,
    "name": "silvally",
    "types": [
      "normal"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 775,
    "name": "komala",
    "types": [
      "normal"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 776,
    "name": "turtonator",
    "types": [
      "fire",
      "dragon"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 777,
    "name": "togedemaru",
    "types": [
      "electric",
      "steel"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 779,
    "name": "bruxish",
    "types": [
      "water",
      "psychic"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 780,
    "name": "drampa",
    "types": [
      "normal",
      "dragon"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 781,
    "name": "dhelmise",
    "types": [
      "ghost",
      "grass"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 782,
    "name": "jangmo-o",
    "types": [
      "dragon"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 783,
    "name": "hakamo-o",
    "types": [
      "dragon",
      "fighting"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 784,
    "name": "kommo-o",
    "types": [
      "dragon",
      "fighting"
    ],
    "region": "alola",
    "regions": [
      "alola",
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 785,
    "name": "tapu-koko",
    "types": [
      "electric",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 786,
    "name": "tapu-lele",
    "types": [
      "psychic",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 787,
    "name": "tapu-bulu",
    "types": [
      "grass",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 788,
    "name": "tapu-fini",
    "types": [
      "water",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 789,
    "name": "cosmog",
    "types": [
      "psychic"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 790,
    "name": "cosmoem",
    "types": [
      "psychic"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 791,
    "name": "solgaleo",
    "types": [
      "psychic",
      "steel"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 792,
    "name": "lunala",
    "types": [
      "psychic",
      "ghost"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 793,
    "name": "nihilego",
    "types": [
      "rock",
      "poison"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 794,
    "name": "buzzwole",
    "types": [
      "bug",
      "fighting"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 795,
    "name": "pheromosa",
    "types": [
      "bug",
      "fighting"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 796,
    "name": "xurkitree",
    "types": [
      "electric"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 797,
    "name": "celesteela",
    "types": [
      "steel",
      "flying"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 798,
    "name": "kartana",
    "types": [
      "grass",
      "steel"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 799,
    "name": "guzzlord",
    "types": [
      "dark",
      "dragon"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 800,
    "name": "necrozma",
    "types": [
      "psychic"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 801,
    "name": "magearna",
    "types": [
      "steel",
      "fairy"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 802,
    "name": "marshadow",
    "types": [
      "fighting",
      "ghost"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 803,
    "name": "poipole",
    "types": [
      "poison"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 804,
    "name": "naganadel",
    "types": [
      "poison",
      "dragon"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 805,
    "name": "stakataka",
    "types": [
      "rock",
      "steel"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 806,
    "name": "blacephalon",
    "types": [
      "fire",
      "ghost"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 807,
    "name": "zeraora",
    "types": [
      "electric"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 808,
    "name": "meltan",
    "types": [
      "steel"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 809,
    "name": "melmetal",
    "types": [
      "steel"
    ],
    "region": "alola",
    "regions": [
      "alola"
    ],
    "evoChainLength": 1,
    "forms": [
      "G"
    ]
  },
  {
    "id": 810,
    "name": "grookey",
    "types": [
      "grass"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 811,
    "name": "thwackey",
    "types": [
      "grass"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 812,
    "name": "rillaboom",
    "types": [
      "grass"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 813,
    "name": "scorbunny",
    "types": [
      "fire"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 814,
    "name": "raboot",
    "types": [
      "fire"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 815,
    "name": "cinderace",
    "types": [
      "fire"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 816,
    "name": "sobble",
    "types": [
      "water"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 817,
    "name": "drizzile",
    "types": [
      "water"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 818,
    "name": "inteleon",
    "types": [
      "water"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 819,
    "name": "skwovet",
    "types": [
      "normal"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 820,
    "name": "greedent",
    "types": [
      "normal"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 821,
    "name": "rookidee",
    "types": [
      "flying"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 822,
    "name": "corvisquire",
    "types": [
      "flying"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 823,
    "name": "corviknight",
    "types": [
      "flying",
      "steel"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 824,
    "name": "blipbug",
    "types": [
      "bug"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 825,
    "name": "dottler",
    "types": [
      "bug",
      "psychic"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 826,
    "name": "orbeetle",
    "types": [
      "bug",
      "psychic"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 827,
    "name": "nickit",
    "types": [
      "dark"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 828,
    "name": "thievul",
    "types": [
      "dark"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 829,
    "name": "gossifleur",
    "types": [
      "grass"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 830,
    "name": "eldegoss",
    "types": [
      "grass"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 831,
    "name": "wooloo",
    "types": [
      "normal"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 832,
    "name": "dubwool",
    "types": [
      "normal"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 833,
    "name": "chewtle",
    "types": [
      "water"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 834,
    "name": "drednaw",
    "types": [
      "water",
      "rock"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 835,
    "name": "yamper",
    "types": [
      "electric"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 836,
    "name": "boltund",
    "types": [
      "electric"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 837,
    "name": "rolycoly",
    "types": [
      "rock"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 838,
    "name": "carkol",
    "types": [
      "rock",
      "fire"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 839,
    "name": "coalossal",
    "types": [
      "rock",
      "fire"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 840,
    "name": "applin",
    "types": [
      "grass",
      "dragon"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 841,
    "name": "flapple",
    "types": [
      "grass",
      "dragon"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 842,
    "name": "appletun",
    "types": [
      "grass",
      "dragon"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 843,
    "name": "silicobra",
    "types": [
      "ground"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 844,
    "name": "sandaconda",
    "types": [
      "ground"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 845,
    "name": "cramorant",
    "types": [
      "flying",
      "water"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 846,
    "name": "arrokuda",
    "types": [
      "water"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 847,
    "name": "barraskewda",
    "types": [
      "water"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 848,
    "name": "toxel",
    "types": [
      "electric",
      "poison"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 850,
    "name": "sizzlipede",
    "types": [
      "fire",
      "bug"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 851,
    "name": "centiskorch",
    "types": [
      "fire",
      "bug"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 852,
    "name": "clobbopus",
    "types": [
      "fighting"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 853,
    "name": "grapploct",
    "types": [
      "fighting"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 854,
    "name": "sinistea",
    "types": [
      "ghost"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 855,
    "name": "polteageist",
    "types": [
      "ghost"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 856,
    "name": "hatenna",
    "types": [
      "psychic"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 857,
    "name": "hattrem",
    "types": [
      "psychic"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 858,
    "name": "hatterene",
    "types": [
      "psychic",
      "fairy"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 859,
    "name": "impidimp",
    "types": [
      "dark",
      "fairy"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 860,
    "name": "morgrem",
    "types": [
      "dark",
      "fairy"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 861,
    "name": "grimmsnarl",
    "types": [
      "dark",
      "fairy"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": [
      "G"
    ]
  },
  {
    "id": 862,
    "name": "obstagoon",
    "types": [
      "dark",
      "normal"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 863,
    "name": "perrserker",
    "types": [
      "steel"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 864,
    "name": "cursola",
    "types": [
      "ghost"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 865,
    "name": "sirfetchd",
    "types": [
      "fighting"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 866,
    "name": "mr-rime",
    "types": [
      "ice",
      "psychic"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 867,
    "name": "runerigus",
    "types": [
      "ground",
      "ghost"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 868,
    "name": "milcery",
    "types": [
      "fairy"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 869,
    "name": "alcremie",
    "types": [
      "fairy"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 870,
    "name": "falinks",
    "types": [
      "fighting"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 871,
    "name": "pincurchin",
    "types": [
      "electric"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 872,
    "name": "snom",
    "types": [
      "ice",
      "bug"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 873,
    "name": "frosmoth",
    "types": [
      "ice",
      "bug"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 874,
    "name": "stonjourner",
    "types": [
      "rock"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 878,
    "name": "cufant",
    "types": [
      "steel"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 879,
    "name": "copperajah",
    "types": [
      "steel"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 880,
    "name": "dracozolt",
    "types": [
      "electric",
      "dragon"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 881,
    "name": "arctozolt",
    "types": [
      "electric",
      "ice"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 882,
    "name": "dracovish",
    "types": [
      "water",
      "dragon"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 883,
    "name": "arctovish",
    "types": [
      "water",
      "ice"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 884,
    "name": "duraludon",
    "types": [
      "steel",
      "dragon"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "G"
    ]
  },
  {
    "id": 885,
    "name": "dreepy",
    "types": [
      "dragon",
      "ghost"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 886,
    "name": "drakloak",
    "types": [
      "dragon",
      "ghost"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 887,
    "name": "dragapult",
    "types": [
      "dragon",
      "ghost"
    ],
    "region": "galar",
    "regions": [
      "galar",
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 888,
    "name": "zacian",
    "types": [
      "fairy"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 889,
    "name": "zamazenta",
    "types": [
      "fighting"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 890,
    "name": "eternatus",
    "types": [
      "poison",
      "dragon"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 891,
    "name": "kubfu",
    "types": [
      "fighting"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 893,
    "name": "zarude",
    "types": [
      "dark",
      "grass"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 894,
    "name": "regieleki",
    "types": [
      "electric"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 895,
    "name": "regidrago",
    "types": [
      "dragon"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 896,
    "name": "glastrier",
    "types": [
      "ice"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 897,
    "name": "spectrier",
    "types": [
      "ghost"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 898,
    "name": "calyrex",
    "types": [
      "psychic",
      "grass"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 1,
    "forms": [
      "B"
    ]
  },
  {
    "id": 899,
    "name": "wyrdeer",
    "types": [
      "normal",
      "psychic"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 900,
    "name": "kleavor",
    "types": [
      "bug",
      "rock"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 901,
    "name": "ursaluna",
    "types": [
      "ground",
      "normal"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 3,
    "forms": [
      "R"
    ]
  },
  {
    "id": 903,
    "name": "sneasler",
    "types": [
      "fighting",
      "poison"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 904,
    "name": "overqwil",
    "types": [
      "dark",
      "poison"
    ],
    "region": "galar",
    "regions": [
      "galar"
    ],
    "evoChainLength": 2,
    "forms": [
      "R"
    ]
  },
  {
    "id": 906,
    "name": "sprigatito",
    "types": [
      "grass"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 907,
    "name": "floragato",
    "types": [
      "grass"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 908,
    "name": "meowscarada",
    "types": [
      "grass",
      "dark"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 909,
    "name": "fuecoco",
    "types": [
      "fire"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 910,
    "name": "crocalor",
    "types": [
      "fire"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 911,
    "name": "skeledirge",
    "types": [
      "fire",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 912,
    "name": "quaxly",
    "types": [
      "water"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 913,
    "name": "quaxwell",
    "types": [
      "water"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 914,
    "name": "quaquaval",
    "types": [
      "water",
      "fighting"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 915,
    "name": "lechonk",
    "types": [
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 917,
    "name": "tarountula",
    "types": [
      "bug"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 918,
    "name": "spidops",
    "types": [
      "bug"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 919,
    "name": "nymble",
    "types": [
      "bug"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 920,
    "name": "lokix",
    "types": [
      "bug",
      "dark"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 921,
    "name": "pawmi",
    "types": [
      "electric"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 922,
    "name": "pawmo",
    "types": [
      "electric",
      "fighting"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 923,
    "name": "pawmot",
    "types": [
      "electric",
      "fighting"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 924,
    "name": "tandemaus",
    "types": [
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 926,
    "name": "fidough",
    "types": [
      "fairy"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 927,
    "name": "dachsbun",
    "types": [
      "fairy"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 928,
    "name": "smoliv",
    "types": [
      "grass",
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 929,
    "name": "dolliv",
    "types": [
      "grass",
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 930,
    "name": "arboliva",
    "types": [
      "grass",
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 932,
    "name": "nacli",
    "types": [
      "rock"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 933,
    "name": "naclstack",
    "types": [
      "rock"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 934,
    "name": "garganacl",
    "types": [
      "rock"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 935,
    "name": "charcadet",
    "types": [
      "fire"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 936,
    "name": "armarouge",
    "types": [
      "fire",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 937,
    "name": "ceruledge",
    "types": [
      "fire",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 938,
    "name": "tadbulb",
    "types": [
      "electric"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 939,
    "name": "bellibolt",
    "types": [
      "electric"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 940,
    "name": "wattrel",
    "types": [
      "electric",
      "flying"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 941,
    "name": "kilowattrel",
    "types": [
      "electric",
      "flying"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 942,
    "name": "maschiff",
    "types": [
      "dark"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 943,
    "name": "mabosstiff",
    "types": [
      "dark"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 944,
    "name": "shroodle",
    "types": [
      "poison",
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 945,
    "name": "grafaiai",
    "types": [
      "poison",
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 946,
    "name": "bramblin",
    "types": [
      "grass",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 947,
    "name": "brambleghast",
    "types": [
      "grass",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 948,
    "name": "toedscool",
    "types": [
      "ground",
      "grass"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 949,
    "name": "toedscruel",
    "types": [
      "ground",
      "grass"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 950,
    "name": "klawf",
    "types": [
      "rock"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 951,
    "name": "capsakid",
    "types": [
      "grass"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 952,
    "name": "scovillain",
    "types": [
      "grass",
      "fire"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 953,
    "name": "rellor",
    "types": [
      "bug"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 954,
    "name": "rabsca",
    "types": [
      "bug",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 955,
    "name": "flittle",
    "types": [
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 956,
    "name": "espathra",
    "types": [
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 957,
    "name": "tinkatink",
    "types": [
      "fairy",
      "steel"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 958,
    "name": "tinkatuff",
    "types": [
      "fairy",
      "steel"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 959,
    "name": "tinkaton",
    "types": [
      "fairy",
      "steel"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 960,
    "name": "wiglett",
    "types": [
      "water"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 961,
    "name": "wugtrio",
    "types": [
      "water"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 962,
    "name": "bombirdier",
    "types": [
      "flying",
      "dark"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 963,
    "name": "finizen",
    "types": [
      "water"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 965,
    "name": "varoom",
    "types": [
      "steel",
      "poison"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 966,
    "name": "revavroom",
    "types": [
      "steel",
      "poison"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 967,
    "name": "cyclizar",
    "types": [
      "dragon",
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 968,
    "name": "orthworm",
    "types": [
      "steel"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 969,
    "name": "glimmet",
    "types": [
      "rock",
      "poison"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 970,
    "name": "glimmora",
    "types": [
      "rock",
      "poison"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 971,
    "name": "greavard",
    "types": [
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 972,
    "name": "houndstone",
    "types": [
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 973,
    "name": "flamigo",
    "types": [
      "flying",
      "fighting"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 974,
    "name": "cetoddle",
    "types": [
      "ice"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 975,
    "name": "cetitan",
    "types": [
      "ice"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 976,
    "name": "veluza",
    "types": [
      "water",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 977,
    "name": "dondozo",
    "types": [
      "water"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 979,
    "name": "annihilape",
    "types": [
      "fighting",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 980,
    "name": "clodsire",
    "types": [
      "poison",
      "ground"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 981,
    "name": "farigiraf",
    "types": [
      "normal",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 983,
    "name": "kingambit",
    "types": [
      "dark",
      "steel"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 984,
    "name": "great-tusk",
    "types": [
      "ground",
      "fighting"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 985,
    "name": "scream-tail",
    "types": [
      "fairy",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 986,
    "name": "brute-bonnet",
    "types": [
      "grass",
      "dark"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 987,
    "name": "flutter-mane",
    "types": [
      "ghost",
      "fairy"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 988,
    "name": "slither-wing",
    "types": [
      "bug",
      "fighting"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 989,
    "name": "sandy-shocks",
    "types": [
      "electric",
      "ground"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 990,
    "name": "iron-treads",
    "types": [
      "ground",
      "steel"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 991,
    "name": "iron-bundle",
    "types": [
      "ice",
      "water"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 992,
    "name": "iron-hands",
    "types": [
      "fighting",
      "electric"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 993,
    "name": "iron-jugulis",
    "types": [
      "dark",
      "flying"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 994,
    "name": "iron-moth",
    "types": [
      "fire",
      "poison"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 995,
    "name": "iron-thorns",
    "types": [
      "rock",
      "electric"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 996,
    "name": "frigibax",
    "types": [
      "dragon",
      "ice"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 997,
    "name": "arctibax",
    "types": [
      "dragon",
      "ice"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 998,
    "name": "baxcalibur",
    "types": [
      "dragon",
      "ice"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 3,
    "forms": []
  },
  {
    "id": 999,
    "name": "gimmighoul",
    "types": [
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 1000,
    "name": "gholdengo",
    "types": [
      "steel",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 1001,
    "name": "wo-chien",
    "types": [
      "dark",
      "grass"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1002,
    "name": "chien-pao",
    "types": [
      "dark",
      "ice"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1003,
    "name": "ting-lu",
    "types": [
      "dark",
      "ground"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1004,
    "name": "chi-yu",
    "types": [
      "dark",
      "fire"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1005,
    "name": "roaring-moon",
    "types": [
      "dragon",
      "dark"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1006,
    "name": "iron-valiant",
    "types": [
      "fairy",
      "fighting"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1007,
    "name": "koraidon",
    "types": [
      "fighting",
      "dragon"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1008,
    "name": "miraidon",
    "types": [
      "electric",
      "dragon"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1009,
    "name": "walking-wake",
    "types": [
      "water",
      "dragon"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1010,
    "name": "iron-leaves",
    "types": [
      "grass",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1011,
    "name": "dipplin",
    "types": [
      "grass",
      "dragon"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 1012,
    "name": "poltchageist",
    "types": [
      "grass",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 1013,
    "name": "sinistcha",
    "types": [
      "grass",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 1014,
    "name": "okidogi",
    "types": [
      "poison",
      "fighting"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1015,
    "name": "munkidori",
    "types": [
      "poison",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1016,
    "name": "fezandipiti",
    "types": [
      "poison",
      "fairy"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1017,
    "name": "ogerpon",
    "types": [
      "grass"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1018,
    "name": "archaludon",
    "types": [
      "steel",
      "dragon"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 1019,
    "name": "hydrapple",
    "types": [
      "grass",
      "dragon"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 2,
    "forms": []
  },
  {
    "id": 1020,
    "name": "gouging-fire",
    "types": [
      "fire",
      "dragon"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1021,
    "name": "raging-bolt",
    "types": [
      "electric",
      "dragon"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1022,
    "name": "iron-boulder",
    "types": [
      "rock",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1023,
    "name": "iron-crown",
    "types": [
      "steel",
      "psychic"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1024,
    "name": "terapagos",
    "types": [
      "normal"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  },
  {
    "id": 1025,
    "name": "pecharunt",
    "types": [
      "poison",
      "ghost"
    ],
    "region": "paldea",
    "regions": [
      "paldea"
    ],
    "evoChainLength": 1,
    "forms": []
  }
];