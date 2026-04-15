var finnishData = {
  "language": "Finnish",
  "title": "Finnish Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" }
  ],
  "theme": {
    "primary": "#0d47a1",
    "secondary": "#1565c0",
    "tableHeader": "#1976d2",
    "stripedRow": "#e3f2fd",
    "border": "#90caf9"
  },
  "tenses": {
    "present": {
      "label": "Preesens (Present)",
      "icon": "bi-record-circle",
      "description": "Describes current states, habitual actions, and general truths. Also used for future events when context makes the time clear.",
      "extra": "<strong>Finnish Verb Types</strong><br><br>Finnish verbs are classified into six types based on their infinitive ending and stem formation. The verb type determines how the stem is formed for conjugation.<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Type</th><th>Infinitive ending</th><th>Stem rule</th><th>Example</th></tr></thead><tbody><tr><td><strong>Type 1</strong></td><td>-Vа/-Vä (two vowels)</td><td>Drop final -a/-ä</td><td>puhu<strong>a</strong> → puhu-</td></tr><tr><td><strong>Type 2</strong></td><td>-da/-dä</td><td>Drop -da/-dä</td><td>syö<strong>dä</strong> → syö-</td></tr><tr><td><strong>Type 3</strong></td><td>-la/-na/-ra/-sta etc.</td><td>Drop -la etc., add -e-</td><td>tul<strong>la</strong> → tule-</td></tr><tr><td><strong>Type 4</strong></td><td>-Vta/-Vtä</td><td>Drop -ta/-tä, add -a-/-ä-</td><td>halu<strong>ta</strong> → halua-</td></tr><tr><td><strong>Type 5</strong></td><td>-ita/-itä</td><td>Drop -ta/-tä, add -tse-</td><td>tarv<strong>ita</strong> → tarvitse-</td></tr><tr><td><strong>Type 6</strong></td><td>-eta/-etä</td><td>Drop -ta/-tä, add -ne-</td><td>vanh<strong>eta</strong> → vanhene-</td></tr></tbody></table><br><strong>Consonant gradation:</strong> Many Type 1 verbs undergo consonant gradation (strong/weak stem alternation) — e.g. pp→p, tt→t, kk→k, p→v, t→d, k→∅. The weak grade appears in 1s, 2s, 3s; the strong grade in 1p, 2p, 3p and infinitive.",
      "columns": [
        {
          "label": "Type 1-2 (vowel stem)",
          "patterns": [
            {
              "name": "Type 1",
              "description": "puhua type (-Va/-Vä, no gradation)",
              "dimmed": false,
              "verbs": "puhua, sanoa, asua, oppia",
              "example": "puhua (to speak)",
              "conjugations": [
                ["puhun", "puhumme"],
                ["puhut", "puhutte"],
                ["puhuu", "puhuvat"]
              ]
            },
            {
              "name": "Type 1",
              "description": "lukea type (consonant gradation: k→∅)",
              "dimmed": false,
              "verbs": "lukea, nukkua, lähteä",
              "example": "lukea (to read)",
              "conjugations": [
                ["luen", "luemme"],
                ["luet", "luette"],
                ["lukee", "lukevat"]
              ]
            },
            {
              "name": "Type 1",
              "description": "antaa type (consonant gradation: nt→nn)",
              "dimmed": false,
              "verbs": "antaa, ymmärtää, ottaa, kertoa",
              "example": "antaa (to give)",
              "conjugations": [
                ["annan", "annamme"],
                ["annat", "annatte"],
                ["antaa", "antavat"]
              ]
            },
            {
              "name": "Type 2",
              "description": "syödä type (-da/-dä verbs)",
              "dimmed": false,
              "verbs": "syödä, juoda, tehdä, nähdä, voida",
              "example": "syödä (to eat)",
              "conjugations": [
                ["syön", "syömme"],
                ["syöt", "syötte"],
                ["syö", "syövät"]
              ]
            },
            {
              "name": "Type 2",
              "description": "tehdä/nähdä (irregular stem change)",
              "dimmed": false,
              "verbs": "tehdä, nähdä",
              "example": "tehdä (to do/make)",
              "conjugations": [
                ["teen", "teemme"],
                ["teet", "teette"],
                ["tekee", "tekevät"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 1",
            "example": "puhua (to speak)",
            "conjugations": [
              ["puhun", "puhumme"],
              ["puhut", "puhutte"],
              ["puhuu", "puhuvat"]
            ]
          }
        },
        {
          "label": "Type 3 (consonant stem)",
          "patterns": [
            {
              "name": "Type 3",
              "description": "tulla type (-lla verbs)",
              "dimmed": false,
              "verbs": "tulla, kuulla, ajatella",
              "example": "tulla (to come)",
              "conjugations": [
                ["tulen", "tulemme"],
                ["tulet", "tulette"],
                ["tulee", "tulevat"]
              ]
            },
            {
              "name": "Type 3",
              "description": "mennä type (-nnä verbs)",
              "dimmed": false,
              "verbs": "mennä, panna, ommella",
              "example": "mennä (to go)",
              "conjugations": [
                ["menen", "menemme"],
                ["menet", "menette"],
                ["menee", "menevät"]
              ]
            },
            {
              "name": "Type 3",
              "description": "nousta type (-sta verbs)",
              "dimmed": false,
              "verbs": "nousta, pestä, juosta",
              "example": "nousta (to rise)",
              "conjugations": [
                ["nousen", "nousemme"],
                ["nouset", "nousette"],
                ["nousee", "nousevat"]
              ]
            },
            {
              "name": "Type 3",
              "description": "purra type (-rra verbs)",
              "dimmed": false,
              "verbs": "purra, surra",
              "example": "purra (to bite)",
              "conjugations": [
                ["puren", "puremme"],
                ["puret", "purette"],
                ["puree", "purevat"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 3",
            "example": "tulla (to come)",
            "conjugations": [
              ["tulen", "tulemme"],
              ["tulet", "tulette"],
              ["tulee", "tulevat"]
            ]
          }
        },
        {
          "label": "Type 4-6 / olla",
          "patterns": [
            {
              "name": "olla",
              "description": "fully irregular (to be)",
              "dimmed": false,
              "verbs": "olla",
              "example": "olla (to be)",
              "conjugations": [
                ["olen", "olemme"],
                ["olet", "olette"],
                ["on", "ovat"]
              ]
            },
            {
              "name": "Type 4",
              "description": "haluta type (-Vta/-Vtä verbs)",
              "dimmed": false,
              "verbs": "haluta, tavata, herätä, vastata, pelätä",
              "example": "haluta (to want)",
              "conjugations": [
                ["haluan", "haluamme"],
                ["haluat", "haluatte"],
                ["haluaa", "haluavat"]
              ]
            },
            {
              "name": "Type 4",
              "description": "tavata type (consonant gradation: t→∅)",
              "dimmed": false,
              "verbs": "tavata, herätä, osata",
              "example": "tavata (to meet)",
              "conjugations": [
                ["tapaan", "tapaamme"],
                ["tapaat", "tapaatte"],
                ["tapaa", "tapaavat"]
              ]
            },
            {
              "name": "Type 5",
              "description": "tarvita type (-ita/-itä verbs)",
              "dimmed": false,
              "verbs": "tarvita, valita, häiritä, merkitä",
              "example": "tarvita (to need)",
              "conjugations": [
                ["tarvitsen", "tarvitsemme"],
                ["tarvitset", "tarvitsette"],
                ["tarvitsee", "tarvitsevat"]
              ]
            },
            {
              "name": "Type 6",
              "description": "vanheta type (-eta/-etä verbs)",
              "dimmed": false,
              "verbs": "vanheta, paeta, lämmetä, kylmetä",
              "example": "vanheta (to age)",
              "conjugations": [
                ["vanhenen", "vanhenemme"],
                ["vanhenet", "vanhenette"],
                ["vanhenee", "vanhenevat"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 4",
            "example": "haluta (to want)",
            "conjugations": [
              ["haluan", "haluamme"],
              ["haluat", "haluatte"],
              ["haluaa", "haluavat"]
            ]
          }
        }
      ]
    },
    "imperfect": {
      "label": "Imperfekti (Simple Past)",
      "icon": "bi-chevron-left",
      "description": "Describes completed actions in the past. Formed by adding -i- to the verb stem, plus personal endings. Consonant gradation follows the same pattern as the present tense.",
      "columns": [
        {
          "label": "Type 1-2 (vowel stem)",
          "patterns": [
            {
              "name": "Type 1",
              "description": "puhua type (stem vowel dropped before -i-)",
              "dimmed": false,
              "verbs": "puhua, sanoa, asua",
              "example": "puhua (to speak)",
              "conjugations": [
                ["puhuin", "puhuimme"],
                ["puhuit", "puhuitte"],
                ["puhui", "puhuivat"]
              ]
            },
            {
              "name": "Type 1",
              "description": "lukea type (gradation + vowel changes)",
              "dimmed": false,
              "verbs": "lukea, nukkua",
              "example": "lukea (to read)",
              "conjugations": [
                ["luin", "luimme"],
                ["luit", "luitte"],
                ["luki", "lukivat"]
              ]
            },
            {
              "name": "Type 1",
              "description": "antaa type (long vowel shortens before -i-)",
              "dimmed": false,
              "verbs": "antaa, ottaa, kertoa",
              "example": "antaa (to give)",
              "conjugations": [
                ["annoin", "annoimme"],
                ["annoit", "annoitte"],
                ["antoi", "antoivat"]
              ]
            },
            {
              "name": "Type 2",
              "description": "syödä type",
              "dimmed": false,
              "verbs": "syödä, juoda, voida",
              "example": "syödä (to eat)",
              "conjugations": [
                ["söin", "söimme"],
                ["söit", "söitte"],
                ["söi", "söivät"]
              ]
            },
            {
              "name": "Type 2",
              "description": "tehdä/nähdä (irregular past stem)",
              "dimmed": false,
              "verbs": "tehdä, nähdä",
              "example": "tehdä (to do/make)",
              "conjugations": [
                ["tein", "teimme"],
                ["teit", "teitte"],
                ["teki", "tekivät"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 1",
            "example": "puhua (to speak)",
            "conjugations": [
              ["puhuin", "puhuimme"],
              ["puhuit", "puhuitte"],
              ["puhui", "puhuivat"]
            ]
          }
        },
        {
          "label": "Type 3 (consonant stem)",
          "patterns": [
            {
              "name": "Type 3",
              "description": "tulla type",
              "dimmed": false,
              "verbs": "tulla, kuulla, ajatella",
              "example": "tulla (to come)",
              "conjugations": [
                ["tulin", "tulimme"],
                ["tulit", "tulitte"],
                ["tuli", "tulivat"]
              ]
            },
            {
              "name": "Type 3",
              "description": "mennä type",
              "dimmed": false,
              "verbs": "mennä, panna",
              "example": "mennä (to go)",
              "conjugations": [
                ["menin", "menimme"],
                ["menit", "menitte"],
                ["meni", "menivät"]
              ]
            },
            {
              "name": "Type 3",
              "description": "nousta type",
              "dimmed": false,
              "verbs": "nousta, pestä, juosta",
              "example": "nousta (to rise)",
              "conjugations": [
                ["nousin", "nousimme"],
                ["nousit", "nousitte"],
                ["nousi", "nousivat"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 3",
            "example": "tulla (to come)",
            "conjugations": [
              ["tulin", "tulimme"],
              ["tulit", "tulitte"],
              ["tuli", "tulivat"]
            ]
          }
        },
        {
          "label": "Type 4-6 / olla",
          "patterns": [
            {
              "name": "olla",
              "description": "irregular past",
              "dimmed": false,
              "verbs": "olla",
              "example": "olla (to be)",
              "conjugations": [
                ["olin", "olimme"],
                ["olit", "olitte"],
                ["oli", "olivat"]
              ]
            },
            {
              "name": "Type 4",
              "description": "haluta type (stem vowel + -si-)",
              "dimmed": false,
              "verbs": "haluta, vastata, pelätä",
              "example": "haluta (to want)",
              "conjugations": [
                ["halusin", "halusimme"],
                ["halusit", "halusitte"],
                ["halusi", "halusivat"]
              ]
            },
            {
              "name": "Type 4",
              "description": "tavata type (gradation + -si-)",
              "dimmed": false,
              "verbs": "tavata, herätä, osata",
              "example": "tavata (to meet)",
              "conjugations": [
                ["tapasin", "tapasimme"],
                ["tapasit", "tapasitte"],
                ["tapasi", "tapasivat"]
              ]
            },
            {
              "name": "Type 5",
              "description": "tarvita type",
              "dimmed": false,
              "verbs": "tarvita, valita, häiritä",
              "example": "tarvita (to need)",
              "conjugations": [
                ["tarvitsin", "tarvitsimme"],
                ["tarvitsit", "tarvitsitte"],
                ["tarvitsi", "tarvitsivat"]
              ]
            },
            {
              "name": "Type 6",
              "description": "vanheta type (-eni-)",
              "dimmed": false,
              "verbs": "vanheta, paeta, lämmetä",
              "example": "vanheta (to age)",
              "conjugations": [
                ["vanhenin", "vanhenimme"],
                ["vanhenit", "vanhenitte"],
                ["vanheni", "vanhenivat"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 4",
            "example": "haluta (to want)",
            "conjugations": [
              ["halusin", "halusimme"],
              ["halusit", "halusitte"],
              ["halusi", "halusivat"]
            ]
          }
        }
      ]
    },
    "perfect": {
      "label": "Perfekti (Present Perfect)",
      "icon": "bi-check-circle",
      "description": "Describes past actions with present relevance, or actions whose exact time is unspecified. Formed with the present tense of olla (to be) + past participle (-nut/-nyt, -neet).",
      "columns": [
        {
          "label": "Type 1-2 (vowel stem)",
          "patterns": [
            {
              "name": "Type 1",
              "description": "puhua type",
              "dimmed": true,
              "verbs": "puhua, sanoa, asua",
              "example": "puhua (to speak)",
              "conjugations": [
                ["olen puhunut", "olemme puhuneet"],
                ["olet puhunut", "olette puhuneet"],
                ["on puhunut", "ovat puhuneet"]
              ]
            },
            {
              "name": "Type 1",
              "description": "lukea type",
              "dimmed": true,
              "verbs": "lukea, antaa, ottaa",
              "example": "lukea (to read)",
              "conjugations": [
                ["olen lukenut", "olemme lukeneet"],
                ["olet lukenut", "olette lukeneet"],
                ["on lukenut", "ovat lukeneet"]
              ]
            },
            {
              "name": "Type 2",
              "description": "syödä type",
              "dimmed": true,
              "verbs": "syödä, juoda, voida",
              "example": "syödä (to eat)",
              "conjugations": [
                ["olen syönyt", "olemme syöneet"],
                ["olet syönyt", "olette syöneet"],
                ["on syönyt", "ovat syöneet"]
              ]
            },
            {
              "name": "Type 2",
              "description": "tehdä/nähdä (irregular participle)",
              "dimmed": false,
              "verbs": "tehdä, nähdä",
              "example": "tehdä (to do/make)",
              "conjugations": [
                ["olen tehnyt", "olemme tehneet"],
                ["olet tehnyt", "olette tehneet"],
                ["on tehnyt", "ovat tehneet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 1",
            "example": "puhua (to speak)",
            "conjugations": [
              ["olen puhunut", "olemme puhuneet"],
              ["olet puhunut", "olette puhuneet"],
              ["on puhunut", "ovat puhuneet"]
            ]
          }
        },
        {
          "label": "Type 3 (consonant stem)",
          "patterns": [
            {
              "name": "Type 3",
              "description": "tulla type (participle: tullut)",
              "dimmed": false,
              "verbs": "tulla, kuulla, ajatella",
              "example": "tulla (to come)",
              "conjugations": [
                ["olen tullut", "olemme tulleet"],
                ["olet tullut", "olette tulleet"],
                ["on tullut", "ovat tulleet"]
              ]
            },
            {
              "name": "Type 3",
              "description": "mennä type (participle: mennyt)",
              "dimmed": false,
              "verbs": "mennä, panna",
              "example": "mennä (to go)",
              "conjugations": [
                ["olen mennyt", "olemme menneet"],
                ["olet mennyt", "olette menneet"],
                ["on mennyt", "ovat menneet"]
              ]
            },
            {
              "name": "Type 3",
              "description": "nousta type (participle: noussut)",
              "dimmed": false,
              "verbs": "nousta, pestä, juosta",
              "example": "nousta (to rise)",
              "conjugations": [
                ["olen noussut", "olemme nousseet"],
                ["olet noussut", "olette nousseet"],
                ["on noussut", "ovat nousseet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 3",
            "example": "tulla (to come)",
            "conjugations": [
              ["olen tullut", "olemme tulleet"],
              ["olet tullut", "olette tulleet"],
              ["on tullut", "ovat tulleet"]
            ]
          }
        },
        {
          "label": "Type 4-6 / olla",
          "patterns": [
            {
              "name": "olla",
              "description": "olla + ollut (to have been)",
              "dimmed": false,
              "verbs": "olla",
              "example": "olla (to be)",
              "conjugations": [
                ["olen ollut", "olemme olleet"],
                ["olet ollut", "olette olleet"],
                ["on ollut", "ovat olleet"]
              ]
            },
            {
              "name": "Type 4",
              "description": "haluta type (participle: halunnut)",
              "dimmed": true,
              "verbs": "haluta, vastata, pelätä",
              "example": "haluta (to want)",
              "conjugations": [
                ["olen halunnut", "olemme halunneet"],
                ["olet halunnut", "olette halunneet"],
                ["on halunnut", "ovat halunneet"]
              ]
            },
            {
              "name": "Type 4",
              "description": "tavata type (participle: tavannut)",
              "dimmed": true,
              "verbs": "tavata, herätä, osata",
              "example": "tavata (to meet)",
              "conjugations": [
                ["olen tavannut", "olemme tavanneet"],
                ["olet tavannut", "olette tavanneet"],
                ["on tavannut", "ovat tavanneet"]
              ]
            },
            {
              "name": "Type 5",
              "description": "tarvita type (participle: tarvinnut)",
              "dimmed": true,
              "verbs": "tarvita, valita",
              "example": "tarvita (to need)",
              "conjugations": [
                ["olen tarvinnut", "olemme tarvinneet"],
                ["olet tarvinnut", "olette tarvinneet"],
                ["on tarvinnut", "ovat tarvinneet"]
              ]
            },
            {
              "name": "Type 6",
              "description": "vanheta type (participle: vanhennut)",
              "dimmed": true,
              "verbs": "vanheta, paeta, lämmetä",
              "example": "vanheta (to age)",
              "conjugations": [
                ["olen vanhennut", "olemme vanhenneet"],
                ["olet vanhennut", "olette vanhenneet"],
                ["on vanhennut", "ovat vanhenneet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 4",
            "example": "haluta (to want)",
            "conjugations": [
              ["olen halunnut", "olemme halunneet"],
              ["olet halunnut", "olette halunneet"],
              ["on halunnut", "ovat halunneet"]
            ]
          }
        }
      ]
    },
    "pluperfect": {
      "label": "Pluskvamperfekti (Past Perfect)",
      "icon": "bi-chevron-double-left",
      "description": "Describes actions completed before another past event. Formed with the past tense of olla (oli) + past participle.",
      "columns": [
        {
          "label": "Type 1-2 (vowel stem)",
          "patterns": [
            {
              "name": "Type 1",
              "description": "puhua type",
              "dimmed": true,
              "verbs": "puhua, sanoa, asua",
              "example": "puhua (to speak)",
              "conjugations": [
                ["olin puhunut", "olimme puhuneet"],
                ["olit puhunut", "olitte puhuneet"],
                ["oli puhunut", "olivat puhuneet"]
              ]
            },
            {
              "name": "Type 2",
              "description": "tehdä type (irregular participle)",
              "dimmed": false,
              "verbs": "tehdä, nähdä",
              "example": "tehdä (to do/make)",
              "conjugations": [
                ["olin tehnyt", "olimme tehneet"],
                ["olit tehnyt", "olitte tehneet"],
                ["oli tehnyt", "olivat tehneet"]
              ]
            },
            {
              "name": "Type 2",
              "description": "syödä type",
              "dimmed": true,
              "verbs": "syödä, juoda",
              "example": "syödä (to eat)",
              "conjugations": [
                ["olin syönyt", "olimme syöneet"],
                ["olit syönyt", "olitte syöneet"],
                ["oli syönyt", "olivat syöneet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 1",
            "example": "puhua (to speak)",
            "conjugations": [
              ["olin puhunut", "olimme puhuneet"],
              ["olit puhunut", "olitte puhuneet"],
              ["oli puhunut", "olivat puhuneet"]
            ]
          }
        },
        {
          "label": "Type 3 (consonant stem)",
          "patterns": [
            {
              "name": "Type 3",
              "description": "tulla type",
              "dimmed": true,
              "verbs": "tulla, kuulla, ajatella",
              "example": "tulla (to come)",
              "conjugations": [
                ["olin tullut", "olimme tulleet"],
                ["olit tullut", "olitte tulleet"],
                ["oli tullut", "olivat tulleet"]
              ]
            },
            {
              "name": "Type 3",
              "description": "mennä type",
              "dimmed": true,
              "verbs": "mennä, panna",
              "example": "mennä (to go)",
              "conjugations": [
                ["olin mennyt", "olimme menneet"],
                ["olit mennyt", "olitte menneet"],
                ["oli mennyt", "olivat menneet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 3",
            "example": "tulla (to come)",
            "conjugations": [
              ["olin tullut", "olimme tulleet"],
              ["olit tullut", "olitte tulleet"],
              ["oli tullut", "olivat tulleet"]
            ]
          }
        },
        {
          "label": "Type 4-6 / olla",
          "patterns": [
            {
              "name": "olla",
              "description": "oli + ollut",
              "dimmed": false,
              "verbs": "olla",
              "example": "olla (to be)",
              "conjugations": [
                ["olin ollut", "olimme olleet"],
                ["olit ollut", "olitte olleet"],
                ["oli ollut", "olivat olleet"]
              ]
            },
            {
              "name": "Type 4",
              "description": "haluta type",
              "dimmed": true,
              "verbs": "haluta, tavata",
              "example": "haluta (to want)",
              "conjugations": [
                ["olin halunnut", "olimme halunneet"],
                ["olit halunnut", "olitte halunneet"],
                ["oli halunnut", "olivat halunneet"]
              ]
            },
            {
              "name": "Type 5",
              "description": "tarvita type",
              "dimmed": true,
              "verbs": "tarvita, valita",
              "example": "tarvita (to need)",
              "conjugations": [
                ["olin tarvinnut", "olimme tarvinneet"],
                ["olit tarvinnut", "olitte tarvinneet"],
                ["oli tarvinnut", "olivat tarvinneet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 4",
            "example": "haluta (to want)",
            "conjugations": [
              ["olin halunnut", "olimme halunneet"],
              ["olit halunnut", "olitte halunneet"],
              ["oli halunnut", "olivat halunneet"]
            ]
          }
        }
      ]
    },
    "conditional": {
      "label": "Konditionaali preesens (Conditional Present)",
      "icon": "bi-question-circle",
      "description": "Expresses hypothetical situations, wishes, polite requests, and conditions. Formed by adding -isi- to the verb stem, followed by personal endings.",
      "columns": [
        {
          "label": "Type 1-2 (vowel stem)",
          "patterns": [
            {
              "name": "Type 1",
              "description": "puhua type (stem + -isi-)",
              "dimmed": false,
              "verbs": "puhua, sanoa, asua",
              "example": "puhua (to speak)",
              "conjugations": [
                ["puhuisin", "puhuisimme"],
                ["puhuisit", "puhuisitte"],
                ["puhuisi", "puhuisivat"]
              ]
            },
            {
              "name": "Type 1",
              "description": "antaa type (weak stem + -isi-)",
              "dimmed": false,
              "verbs": "antaa, ottaa, lukea",
              "example": "antaa (to give)",
              "conjugations": [
                ["antaisin", "antaisimme"],
                ["antaisit", "antaisitte"],
                ["antaisi", "antaisivat"]
              ]
            },
            {
              "name": "Type 2",
              "description": "syödä type",
              "dimmed": false,
              "verbs": "syödä, juoda, voida",
              "example": "syödä (to eat)",
              "conjugations": [
                ["söisin", "söisimme"],
                ["söisit", "söisitte"],
                ["söisi", "söisivät"]
              ]
            },
            {
              "name": "Type 2",
              "description": "tehdä/nähdä",
              "dimmed": false,
              "verbs": "tehdä, nähdä",
              "example": "tehdä (to do/make)",
              "conjugations": [
                ["tekisin", "tekisimme"],
                ["tekisit", "tekisitte"],
                ["tekisi", "tekisivät"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 1",
            "example": "puhua (to speak)",
            "conjugations": [
              ["puhuisin", "puhuisimme"],
              ["puhuisit", "puhuisitte"],
              ["puhuisi", "puhuisivat"]
            ]
          }
        },
        {
          "label": "Type 3 (consonant stem)",
          "patterns": [
            {
              "name": "Type 3",
              "description": "tulla type",
              "dimmed": false,
              "verbs": "tulla, kuulla, ajatella",
              "example": "tulla (to come)",
              "conjugations": [
                ["tulisin", "tulisimme"],
                ["tulisit", "tulisitte"],
                ["tulisi", "tulisivat"]
              ]
            },
            {
              "name": "Type 3",
              "description": "mennä type",
              "dimmed": false,
              "verbs": "mennä, panna",
              "example": "mennä (to go)",
              "conjugations": [
                ["menisin", "menisimme"],
                ["menisit", "menisitte"],
                ["menisi", "menisivät"]
              ]
            },
            {
              "name": "Type 3",
              "description": "nousta type",
              "dimmed": false,
              "verbs": "nousta, pestä, juosta",
              "example": "nousta (to rise)",
              "conjugations": [
                ["nousisin", "nousisimme"],
                ["nousisit", "nousisitte"],
                ["nousisi", "nousisivat"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 3",
            "example": "tulla (to come)",
            "conjugations": [
              ["tulisin", "tulisimme"],
              ["tulisit", "tulisitte"],
              ["tulisi", "tulisivat"]
            ]
          }
        },
        {
          "label": "Type 4-6 / olla",
          "patterns": [
            {
              "name": "olla",
              "description": "irregular conditional",
              "dimmed": false,
              "verbs": "olla",
              "example": "olla (to be)",
              "conjugations": [
                ["olisin", "olisimme"],
                ["olisit", "olisitte"],
                ["olisi", "olisivat"]
              ]
            },
            {
              "name": "Type 4",
              "description": "haluta type",
              "dimmed": false,
              "verbs": "haluta, vastata, pelätä",
              "example": "haluta (to want)",
              "conjugations": [
                ["haluaisin", "haluaisimme"],
                ["haluaisit", "haluaisitte"],
                ["haluaisi", "haluaisivat"]
              ]
            },
            {
              "name": "Type 5",
              "description": "tarvita type",
              "dimmed": false,
              "verbs": "tarvita, valita",
              "example": "tarvita (to need)",
              "conjugations": [
                ["tarvitsisin", "tarvitsisimme"],
                ["tarvitsisit", "tarvitsisitte"],
                ["tarvitsisi", "tarvitsisivat"]
              ]
            },
            {
              "name": "Type 6",
              "description": "vanheta type",
              "dimmed": false,
              "verbs": "vanheta, paeta",
              "example": "vanheta (to age)",
              "conjugations": [
                ["vanhenisin", "vanhenisimme"],
                ["vanhenisit", "vanhenisitte"],
                ["vanhenisi", "vanhenisivat"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 4",
            "example": "haluta (to want)",
            "conjugations": [
              ["haluaisin", "haluaisimme"],
              ["haluaisit", "haluaisitte"],
              ["haluaisi", "haluaisivat"]
            ]
          }
        }
      ]
    },
    "conditional_perfect": {
      "label": "Konditionaali perfekti (Conditional Perfect)",
      "icon": "bi-question-circle",
      "description": "Expresses hypothetical past situations — what would have happened. Formed with olisi + past participle.",
      "columns": [
        {
          "label": "Type 1-2 (vowel stem)",
          "patterns": [
            {
              "name": "Type 1",
              "description": "puhua type",
              "dimmed": true,
              "verbs": "puhua, sanoa, antaa",
              "example": "puhua (to speak)",
              "conjugations": [
                ["olisin puhunut", "olisimme puhuneet"],
                ["olisit puhunut", "olisitte puhuneet"],
                ["olisi puhunut", "olisivat puhuneet"]
              ]
            },
            {
              "name": "Type 2",
              "description": "tehdä type",
              "dimmed": true,
              "verbs": "tehdä, nähdä, syödä",
              "example": "tehdä (to do/make)",
              "conjugations": [
                ["olisin tehnyt", "olisimme tehneet"],
                ["olisit tehnyt", "olisitte tehneet"],
                ["olisi tehnyt", "olisivat tehneet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 1",
            "example": "puhua (to speak)",
            "conjugations": [
              ["olisin puhunut", "olisimme puhuneet"],
              ["olisit puhunut", "olisitte puhuneet"],
              ["olisi puhunut", "olisivat puhuneet"]
            ]
          }
        },
        {
          "label": "Type 3 (consonant stem)",
          "patterns": [
            {
              "name": "Type 3",
              "description": "tulla type",
              "dimmed": true,
              "verbs": "tulla, mennä, nousta",
              "example": "tulla (to come)",
              "conjugations": [
                ["olisin tullut", "olisimme tulleet"],
                ["olisit tullut", "olisitte tulleet"],
                ["olisi tullut", "olisivat tulleet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 3",
            "example": "tulla (to come)",
            "conjugations": [
              ["olisin tullut", "olisimme tulleet"],
              ["olisit tullut", "olisitte tulleet"],
              ["olisi tullut", "olisivat tulleet"]
            ]
          }
        },
        {
          "label": "Type 4-6 / olla",
          "patterns": [
            {
              "name": "olla",
              "description": "olisi + ollut",
              "dimmed": true,
              "verbs": "olla",
              "example": "olla (to be)",
              "conjugations": [
                ["olisin ollut", "olisimme olleet"],
                ["olisit ollut", "olisitte olleet"],
                ["olisi ollut", "olisivat olleet"]
              ]
            },
            {
              "name": "Type 4",
              "description": "haluta type",
              "dimmed": true,
              "verbs": "haluta, tavata",
              "example": "haluta (to want)",
              "conjugations": [
                ["olisin halunnut", "olisimme halunneet"],
                ["olisit halunnut", "olisitte halunneet"],
                ["olisi halunnut", "olisivat halunneet"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 4",
            "example": "haluta (to want)",
            "conjugations": [
              ["olisin halunnut", "olisimme halunneet"],
              ["olisit halunnut", "olisitte halunneet"],
              ["olisi halunnut", "olisivat halunneet"]
            ]
          }
        }
      ]
    },
    "imperative": {
      "label": "Imperatiivi (Imperative)",
      "icon": "bi-exclamation-circle",
      "description": "Gives commands, instructions, or requests. The 2nd person singular is the most common form (just the verb stem). The negative imperative uses älä/älkää + stem. 3rd person and 1st person plural forms use -koon/-kööt and -kaamme/-käämme.",
      "columns": [
        {
          "label": "Type 1-2 (vowel stem)",
          "patterns": [
            {
              "name": "Type 1",
              "description": "puhua type",
              "dimmed": false,
              "verbs": "puhua, sanoa, asua",
              "example": "puhua (to speak)",
              "conjugations": [
                ["puhu", "puhukaamme"],
                ["puhu", "puhukaa"],
                ["puhukoon", "puhukoot"]
              ]
            },
            {
              "name": "Type 1",
              "description": "lukea type (gradation in 2s)",
              "dimmed": false,
              "verbs": "lukea, antaa, ottaa",
              "example": "lukea (to read)",
              "conjugations": [
                ["lue", "lukekaamme"],
                ["lue", "lukekaa"],
                ["lukekoon", "lukekoot"]
              ]
            },
            {
              "name": "Type 2",
              "description": "syödä type",
              "dimmed": false,
              "verbs": "syödä, juoda, voida",
              "example": "syödä (to eat)",
              "conjugations": [
                ["syö", "syökäämme"],
                ["syö", "syökää"],
                ["syököön", "syökööt"]
              ]
            },
            {
              "name": "Type 2",
              "description": "tehdä/nähdä",
              "dimmed": false,
              "verbs": "tehdä, nähdä",
              "example": "tehdä (to do/make)",
              "conjugations": [
                ["tee", "tehkäämme"],
                ["tee", "tehkää"],
                ["tehköön", "tehkööt"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 1",
            "example": "puhua (to speak)",
            "conjugations": [
              ["puhu", "puhukaamme"],
              ["puhu", "puhukaa"],
              ["puhukoon", "puhukoot"]
            ]
          }
        },
        {
          "label": "Type 3 (consonant stem)",
          "patterns": [
            {
              "name": "Type 3",
              "description": "tulla type",
              "dimmed": false,
              "verbs": "tulla, kuulla, ajatella",
              "example": "tulla (to come)",
              "conjugations": [
                ["tule", "tulkaamme"],
                ["tule", "tulkaa"],
                ["tulkoon", "tulkoot"]
              ]
            },
            {
              "name": "Type 3",
              "description": "mennä type",
              "dimmed": false,
              "verbs": "mennä, panna",
              "example": "mennä (to go)",
              "conjugations": [
                ["mene", "menkäämme"],
                ["mene", "menkää"],
                ["menköön", "menkööt"]
              ]
            },
            {
              "name": "Type 3",
              "description": "nousta type",
              "dimmed": false,
              "verbs": "nousta, pestä, juosta",
              "example": "nousta (to rise)",
              "conjugations": [
                ["nouse", "nouskaamme"],
                ["nouse", "nouskaa"],
                ["nouskoon", "nouskoot"]
              ]
            }
          ],
          "regular": {
            "name": "regular Type 3",
            "example": "tulla (to come)",
            "conjugations": [
              ["tule", "tulkaamme"],
              ["tule", "tulkaa"],
              ["tulkoon", "tulkoot"]
            ]
          }
        },
        {
          "label": "Type 4-6 / olla",
          "patterns": [
            {
              "name": "olla",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "olla",
              "example": "olla (to be)",
              "conjugations": [
                ["ole", "olkaamme"],
                ["ole", "olkaa"],
                ["olkoon", "olkoot"]
              ]
            },
            {
              "name": "Type 4",
              "description": "haluta type",
              "dimmed": false,
              "verbs": "haluta, tavata, herätä",
              "example": "haluta (to want)",
              "conjugations": [
                ["halua", "halutkaamme"],
                ["halua", "halutkaa"],
                ["halutkoon", "halutkoot"]
              ]
            },
            {
              "name": "Type 5",
              "description": "tarvita type",
              "dimmed": false,
              "verbs": "tarvita, valita",
              "example": "tarvita (to need)",
              "conjugations": [
                ["tarvitse", "tarvitkaamme"],
                ["tarvitse", "tarvitkaa"],
                ["tarvitkoon", "tarvitkoot"]
              ]
            }
          ],
          "regular": {
            "name": "regular olla",
            "example": "olla (to be)",
            "conjugations": [
              ["ole", "olkaamme"],
              ["ole", "olkaa"],
              ["olkoon", "olkoot"]
            ]
          }
        }
      ]
    }
  },
  "groups": {
    "indicative": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": ["imperfect", "pluperfect"]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": ["present", "perfect"]
      }
    ],
    "conditional": [
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": ["conditional", "conditional_perfect"]
      }
    ],
    "imperative": [
      {
        "label": "Imperative",
        "icon": "bi-exclamation-circle",
        "tenses": ["imperative"]
      }
    ]
  },
  "moods": [
    {
      "label": "Indicative",
      "icon": "bi-chat-left-text",
      "key": "indicative",
      "description": "Describes reality — facts, events, and questions about what is, was, or will be. Finnish has no synthetic future tense; the present tense serves for future meaning when context is clear."
    },
    {
      "label": "Conditional",
      "icon": "bi-question-circle",
      "key": "conditional",
      "description": "Expresses hypothetical situations, wishes, polite requests, and conditional statements. Formed with the -isi- marker."
    },
    {
      "label": "Imperative",
      "icon": "bi-exclamation-circle",
      "key": "imperative",
      "description": "Gives commands, instructions, or requests directly. The 2nd person singular uses the bare stem; other persons use special suffixes."
    }
  ],
  "pluralization": [
    { "rule": "Nominative plural: add -t", "singular": "talo", "plural": "talot", "examples": "koira→koirat, auto→autot, kirja→kirjat, pöytä→pöydät" },
    { "rule": "Partitive plural: stem + -a/-ä (short vowel)", "singular": "talo", "plural": "taloja", "examples": "koira→koiria, auto→autoja, kirja→kirjoja" },
    { "rule": "Partitive plural: stem + -ia/-iä (consonant)", "singular": "mies", "plural": "miehiä", "examples": "vuosi→vuosia, käsi→käsiä, vesi→vesiä" },
    { "rule": "Consonant gradation in plural", "singular": "kukka", "plural": "kukat", "examples": "pankki→pankit, kauppa→kaupat, hattu→hatut, tyttö→tytöt" },
    { "rule": "Vowel stem changes (i-plural)", "singular": "sana", "plural": "sanat / sanoja", "examples": "kala→kalat/kaloja, pää→päät/päitä, maa→maat/maita" },
    { "rule": "-nen → -set (nominative), -sia (partitive)", "singular": "nainen", "plural": "naiset", "examples": "ihminen→ihmiset, suomalainen→suomalaiset, punainen→punaiset" },
    { "rule": "-s → -kset (nominative), -ksia (partitive)", "singular": "kysymys", "plural": "kysymykset", "examples": "vastaus→vastaukset, opiskelu→opiskelut" },
    { "rule": "Irregular", "singular": "lapsi", "plural": "lapset", "examples": "mies→miehet, käsi→kädet, vesi→vedet, uusi→uudet" }
  ],
  "chart": {
    "info": "<strong>Finnish Verb Types:</strong> <strong>Type 1</strong> (-Vа/-Vä: puhua, antaa, lukea) — largest group, many with consonant gradation; <strong>Type 2</strong> (-da/-dä: syödä, tehdä) — short vowel stems; <strong>Type 3</strong> (-la/-na/-ra/-sta: tulla, mennä, nousta) — consonant stems with -e- in present; <strong>Type 4</strong> (-Vta/-Vtä: haluta, tavata) — add -a-/-ä- to stem; <strong>Type 5</strong> (-ita: tarvita) — add -tse- to stem; <strong>Type 6</strong> (-eta: vanheta) — add -ne- to stem. Finnish is a Uralic language — not Indo-European. The negative verb (en, et, ei, emme, ette, eivät) conjugates for person instead of the main verb.",
    "columns": ["Past (Menneisyys)", "Present (Nykyisyys)", "Conditional (Konditionaali)"],
    "rows": ["Simple (Yksinkertainen)", "Perfect (Perfekti)"],
    "groups": ["Type 1-2: puhua", "Type 3: tulla", "Irreg: olla"],
    "cells": [
      [
        { "form": "Imperfekti", "rule": "Stem + -i- + personal endings",
          "er": [["puhuin", "puhuimme"], ["puhuit", "puhuitte"], ["puhui", "puhuivat"]],
          "ir": [["tulin", "tulimme"], ["tulit", "tulitte"], ["tuli", "tulivat"]],
          "re": [["olin", "olimme"], ["olit", "olitte"], ["oli", "olivat"]] },
        { "form": "Preesens", "rule": "Stem + personal endings",
          "er": [["puhun", "puhumme"], ["puhut", "puhutte"], ["puhuu", "puhuvat"]],
          "ir": [["tulen", "tulemme"], ["tulet", "tulette"], ["tulee", "tulevat"]],
          "re": [["olen", "olemme"], ["olet", "olette"], ["on", "ovat"]] },
        { "form": "Konditionaali", "rule": "Stem + -isi- + personal endings",
          "er": [["puhuisin", "puhuisimme"], ["puhuisit", "puhuisitte"], ["puhuisi", "puhuisivat"]],
          "ir": [["tulisin", "tulisimme"], ["tulisit", "tulisitte"], ["tulisi", "tulisivat"]],
          "re": [["olisin", "olisimme"], ["olisit", "olisitte"], ["olisi", "olisivat"]] }
      ],
      [
        { "form": "Pluskvamperfekti", "rule": "oli + past participle",
          "er": [["olin puhunut", "olimme puhuneet"], ["olit puhunut", "olitte puhuneet"], ["oli puhunut", "olivat puhuneet"]],
          "ir": [["olin tullut", "olimme tulleet"], ["olit tullut", "olitte tulleet"], ["oli tullut", "olivat tulleet"]],
          "re": [["olin ollut", "olimme olleet"], ["olit ollut", "olitte olleet"], ["oli ollut", "olivat olleet"]] },
        { "form": "Perfekti", "rule": "olla (present) + past participle",
          "er": [["olen puhunut", "olemme puhuneet"], ["olet puhunut", "olette puhuneet"], ["on puhunut", "ovat puhuneet"]],
          "ir": [["olen tullut", "olemme tulleet"], ["olet tullut", "olette tulleet"], ["on tullut", "ovat tulleet"]],
          "re": [["olen ollut", "olemme olleet"], ["olet ollut", "olette olleet"], ["on ollut", "ovat olleet"]] },
        { "form": "Kond. perfekti", "rule": "olisi + past participle",
          "er": [["olisin puhunut", "olisimme puhuneet"], ["olisit puhunut", "olisitte puhuneet"], ["olisi puhunut", "olisivat puhuneet"]],
          "ir": [["olisin tullut", "olisimme tulleet"], ["olisit tullut", "olisitte tulleet"], ["olisi tullut", "olisivat tulleet"]],
          "re": [["olisin ollut", "olisimme olleet"], ["olisit ollut", "olisitte olleet"], ["olisi ollut", "olisivat olleet"]] }
      ]
    ]
  }
};
