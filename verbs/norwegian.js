var norwegianData = {
  "language": "Norwegian",
  "title": "Norwegian Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "practice", "icon": "bi-pencil", "label": "Practice" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" },
    { "key": "pronouns", "icon": "bi-person", "label": "Pronouns" }
  ],
  "theme": {
    "primary": "#1a237e",
    "secondary": "#0d1642",
    "tableHeader": "#283593",
    "stripedRow": "#e8eaf6",
    "border": "#9fa8da",
    "infoBoxTop": "-2.5rem"
  },
  "moods": [
    {
      "label": "Indicative",
      "icon": "bi-chat-left-text",
      "key": "indicative",
      "description": "Describes reality — facts, events, and questions about what is, was, or will be. Norwegian verbs do not conjugate for person or number; all persons share the same form."
    },
    {
      "label": "Imperative",
      "icon": "bi-exclamation-circle",
      "key": "imperative",
      "description": "Gives commands, instructions, or requests directly. Uses the bare verb stem."
    }
  ],
  "groups": {
    "indicative": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "present_perfect",
          "past_simple",
          "past_perfect"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "present_simple"
        ]
      },
      {
        "label": "Future",
        "icon": "bi-arrow-right",
        "tenses": [
          "future_simple"
        ]
      }
    ],
    "imperative": [
      {
        "label": "Imperative",
        "icon": "bi-exclamation-circle",
        "tenses": [
          "imperative"
        ]
      }
    ]
  },
  "tenses": {
    "present_simple": {
      "label": "Presens (Present)",
      "icon": "bi-record-circle",
      "description": "Describes current states, habitual actions, and general truths. Formed by adding -r (or -er) to the stem. All persons use the same form.",
      "extra": "<strong>Group 1 vs Group 2</strong><br><br>Norwegian regular verbs are divided into groups based on their past tense ending:<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th></th><th>Group 1 (-et)</th><th>Group 2 (-te)</th></tr></thead><tbody><tr><td><strong>Past tense</strong></td><td>stem + <strong>-et</strong></td><td>stem + <strong>-te</strong></td></tr><tr><td><strong>Past participle</strong></td><td>stem + <strong>-et</strong></td><td>stem + <strong>-t</strong></td></tr><tr><td><strong>Typical verbs</strong></td><td>kaste, snakke, leke, jobbe, elske</td><td>kjøpe, spise, lese, skrive, drikke</td></tr><tr><td><strong>Rule of thumb</strong></td><td>Verbs with stems ending in two+ consonants or unstressed syllables</td><td>Verbs with stems ending in a single consonant after a long/stressed vowel</td></tr></tbody></table>",
      "columns": [
        {
          "label": "Group 1 (-et past)",
          "regular": {
            "name": "Group 1 regular",
            "example": "kaste (to throw)",
            "conjugations": [
              ["jeg kaster", "vi kaster"],
              ["du kaster", "dere kaster"],
              ["han kaster", "de kaster"]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 -er",
              "description": "stem + -er",
              "dimmed": true,
              "verbs": "kaste, snakke, leke, jobbe, elske, lage, reise",
              "example": "kaste (to throw)",
              "conjugations": [
                ["jeg kaster", "vi kaster"],
                ["du kaster", "dere kaster"],
                ["han kaster", "de kaster"]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "Group 2 regular",
            "example": "kjøpe (to buy)",
            "conjugations": [
              ["jeg kjøper", "vi kjøper"],
              ["du kjøper", "dere kjøper"],
              ["han kjøper", "de kjøper"]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 -er",
              "description": "stem + -er",
              "dimmed": true,
              "verbs": "kjøpe, spise, lese, skrive, drikke, tenke, selge",
              "example": "kjøpe (to buy)",
              "conjugations": [
                ["jeg kjøper", "vi kjøper"],
                ["du kjøper", "dere kjøper"],
                ["han kjøper", "de kjøper"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "være / ha",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "være, ha",
              "example": "være (to be)",
              "conjugations": [
                ["jeg er", "vi er"],
                ["du er", "dere er"],
                ["han er", "de er"]
              ]
            },
            {
              "name": "ha",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ha",
              "example": "ha (to have)",
              "conjugations": [
                ["jeg har", "vi har"],
                ["du har", "dere har"],
                ["han har", "de har"]
              ]
            },
            {
              "name": "gå / se / si / gjøre / komme",
              "description": "common irregular present forms",
              "dimmed": false,
              "verbs": "gå, se, si, gjøre, komme, ta, gi, få, vite, bli, finne, ligge, sitte, stå",
              "example": "gå (to go)",
              "conjugations": [
                ["jeg går", "vi går"],
                ["du går", "dere går"],
                ["han går", "de går"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "irregular present forms",
              "dimmed": false,
              "verbs": "kunne, ville, skulle, måtte",
              "example": "kunne (can)",
              "conjugations": [
                ["jeg kan", "vi kan"],
                ["du kan", "dere kan"],
                ["han kan", "de kan"]
              ]
            }
          ]
        }
      ]
    },
    "past_simple": {
      "label": "Preteritum (Simple Past)",
      "icon": "bi-chevron-left",
      "description": "Describes completed actions or states in the past. Group 1 adds -et, Group 2 adds -te, irregular verbs change the vowel.",
      "extra": "<strong>Past tense formation:</strong><br><br><strong>Group 1</strong> (stem + -et): kaste → kast<strong>et</strong><br><strong>Group 2</strong> (stem + -te): kjøpe → kjøp<strong>te</strong><br><strong>Irregular</strong>: vowel changes, e.g. skrive → <strong>skrev</strong>",
      "columns": [
        {
          "label": "Group 1 (-et past)",
          "regular": {
            "name": "Group 1 -et",
            "example": "kaste (to throw)",
            "conjugations": [
              ["jeg kastet", "vi kastet"],
              ["du kastet", "dere kastet"],
              ["han kastet", "de kastet"]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 -et",
              "description": "stem + -et",
              "dimmed": true,
              "verbs": "kaste, snakke, leke, jobbe, elske, lage, reise",
              "example": "kaste (to throw)",
              "conjugations": [
                ["jeg kastet", "vi kastet"],
                ["du kastet", "dere kastet"],
                ["han kastet", "de kastet"]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "Group 2 -te",
            "example": "kjøpe (to buy)",
            "conjugations": [
              ["jeg kjøpte", "vi kjøpte"],
              ["du kjøpte", "dere kjøpte"],
              ["han kjøpte", "de kjøpte"]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 -te",
              "description": "stem + -te",
              "dimmed": true,
              "verbs": "kjøpe, spise, lese, tenke, selge",
              "example": "kjøpe (to buy)",
              "conjugations": [
                ["jeg kjøpte", "vi kjøpte"],
                ["du kjøpte", "dere kjøpte"],
                ["han kjøpte", "de kjøpte"]
              ]
            },
            {
              "name": "Group 2 with vowel change",
              "description": "stem + -te with vowel change",
              "dimmed": false,
              "verbs": "skrive, drikke",
              "example": "skrive (to write)",
              "conjugations": [
                ["jeg skrev", "vi skrev"],
                ["du skrev", "dere skrev"],
                ["han skrev", "de skrev"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "være",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "være",
              "example": "være (to be)",
              "conjugations": [
                ["jeg var", "vi var"],
                ["du var", "dere var"],
                ["han var", "de var"]
              ]
            },
            {
              "name": "ha",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ha",
              "example": "ha (to have)",
              "conjugations": [
                ["jeg hadde", "vi hadde"],
                ["du hadde", "dere hadde"],
                ["han hadde", "de hadde"]
              ]
            },
            {
              "name": "gå / se / si / gjøre",
              "description": "vowel-changing irregulars",
              "dimmed": false,
              "verbs": "gå, se, si, gjøre, komme, ta, gi, få, vite, bli, finne, ligge, sitte, stå",
              "example": "gå (to go)",
              "conjugations": [
                ["jeg gikk", "vi gikk"],
                ["du gikk", "dere gikk"],
                ["han gikk", "de gikk"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "irregular past forms",
              "dimmed": false,
              "verbs": "kunne, ville, skulle, måtte",
              "example": "kunne (can)",
              "conjugations": [
                ["jeg kunne", "vi kunne"],
                ["du kunne", "dere kunne"],
                ["han kunne", "de kunne"]
              ]
            }
          ]
        }
      ]
    },
    "present_perfect": {
      "label": "Presens perfektum (Present Perfect)",
      "icon": "bi-clock-history",
      "description": "Describes completed actions with present relevance. Formed with har/er + past participle. Use er with intransitive verbs of motion or change of state.",
      "extra": "<strong>Har or er?</strong><br><br>Most verbs use <em>har</em>. Use <em>er</em> with intransitive verbs of motion or change of state:<br>- <em>gå, komme, reise, bli</em><br><br><strong>Past participle:</strong> Group 1: -et (kastet); Group 2: -t (kjøpt); Irregular: vowel changes",
      "columns": [
        {
          "label": "Group 1 (-et past)",
          "regular": {
            "name": "Group 1 har + -et",
            "example": "kaste (to throw)",
            "conjugations": [
              ["jeg har kastet", "vi har kastet"],
              ["du har kastet", "dere har kastet"],
              ["han har kastet", "de har kastet"]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 with har",
              "description": "har + stem + -et",
              "dimmed": true,
              "verbs": "kaste, snakke, leke, jobbe, elske, lage",
              "example": "kaste (to throw)",
              "conjugations": [
                ["jeg har kastet", "vi har kastet"],
                ["du har kastet", "dere har kastet"],
                ["han har kastet", "de har kastet"]
              ]
            },
            {
              "name": "Group 1 with er",
              "description": "motion/change verbs: er + past participle",
              "dimmed": false,
              "verbs": "reise",
              "example": "reise (to travel)",
              "conjugations": [
                ["jeg har reist", "vi har reist"],
                ["du har reist", "dere har reist"],
                ["han har reist", "de har reist"]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "Group 2 har + -t",
            "example": "kjøpe (to buy)",
            "conjugations": [
              ["jeg har kjøpt", "vi har kjøpt"],
              ["du har kjøpt", "dere har kjøpt"],
              ["han har kjøpt", "de har kjøpt"]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 with har",
              "description": "har + stem + -t",
              "dimmed": true,
              "verbs": "kjøpe, spise, lese, tenke, selge",
              "example": "kjøpe (to buy)",
              "conjugations": [
                ["jeg har kjøpt", "vi har kjøpt"],
                ["du har kjøpt", "dere har kjøpt"],
                ["han har kjøpt", "de har kjøpt"]
              ]
            },
            {
              "name": "Group 2 with vowel change",
              "description": "har + irregular past participle",
              "dimmed": false,
              "verbs": "skrive, drikke",
              "example": "skrive (to write)",
              "conjugations": [
                ["jeg har skrevet", "vi har skrevet"],
                ["du har skrevet", "dere har skrevet"],
                ["han har skrevet", "de har skrevet"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "være",
              "description": "har + vært",
              "dimmed": false,
              "verbs": "være",
              "example": "være (to be)",
              "conjugations": [
                ["jeg har vært", "vi har vært"],
                ["du har vært", "dere har vært"],
                ["han har vært", "de har vært"]
              ]
            },
            {
              "name": "ha",
              "description": "har + hatt",
              "dimmed": false,
              "verbs": "ha",
              "example": "ha (to have)",
              "conjugations": [
                ["jeg har hatt", "vi har hatt"],
                ["du har hatt", "dere har hatt"],
                ["han har hatt", "de har hatt"]
              ]
            },
            {
              "name": "gå / komme / bli",
              "description": "er + irregular past participle (motion/change)",
              "dimmed": false,
              "verbs": "gå, komme, bli",
              "example": "gå (to go)",
              "conjugations": [
                ["jeg har gått", "vi har gått"],
                ["du har gått", "dere har gått"],
                ["han har gått", "de har gått"]
              ]
            },
            {
              "name": "se / si / gjøre / ta / gi / få / vite",
              "description": "har + irregular past participle",
              "dimmed": false,
              "verbs": "se, si, gjøre, ta, gi, få, vite, finne, ligge, sitte, stå",
              "example": "se (to see)",
              "conjugations": [
                ["jeg har sett", "vi har sett"],
                ["du har sett", "dere har sett"],
                ["han har sett", "de har sett"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "har + kunnet/villet/skullet/måttet",
              "dimmed": false,
              "verbs": "kunne, ville, skulle, måtte",
              "example": "kunne (can)",
              "conjugations": [
                ["jeg har kunnet", "vi har kunnet"],
                ["du har kunnet", "dere har kunnet"],
                ["han har kunnet", "de har kunnet"]
              ]
            }
          ]
        }
      ]
    },
    "past_perfect": {
      "label": "Pluskvamperfektum (Past Perfect)",
      "icon": "bi-skip-backward",
      "description": "Describes actions completed before another past action. Formed with hadde/var + past participle.",
      "columns": [
        {
          "label": "Group 1 (-et past)",
          "regular": {
            "name": "Group 1 hadde + -et",
            "example": "kaste (to throw)",
            "conjugations": [
              ["jeg hadde kastet", "vi hadde kastet"],
              ["du hadde kastet", "dere hadde kastet"],
              ["han hadde kastet", "de hadde kastet"]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 with hadde",
              "description": "hadde + stem + -et",
              "dimmed": true,
              "verbs": "kaste, snakke, leke, jobbe, elske, lage",
              "example": "kaste (to throw)",
              "conjugations": [
                ["jeg hadde kastet", "vi hadde kastet"],
                ["du hadde kastet", "dere hadde kastet"],
                ["han hadde kastet", "de hadde kastet"]
              ]
            },
            {
              "name": "Group 1 with var",
              "description": "motion/change verbs: var + past participle",
              "dimmed": false,
              "verbs": "reise",
              "example": "reise (to travel)",
              "conjugations": [
                ["jeg hadde reist", "vi hadde reist"],
                ["du hadde reist", "dere hadde reist"],
                ["han hadde reist", "de hadde reist"]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "Group 2 hadde + -t",
            "example": "kjøpe (to buy)",
            "conjugations": [
              ["jeg hadde kjøpt", "vi hadde kjøpt"],
              ["du hadde kjøpt", "dere hadde kjøpt"],
              ["han hadde kjøpt", "de hadde kjøpt"]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 with hadde",
              "description": "hadde + stem + -t",
              "dimmed": true,
              "verbs": "kjøpe, spise, lese, tenke, selge",
              "example": "kjøpe (to buy)",
              "conjugations": [
                ["jeg hadde kjøpt", "vi hadde kjøpt"],
                ["du hadde kjøpt", "dere hadde kjøpt"],
                ["han hadde kjøpt", "de hadde kjøpt"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "være",
              "description": "hadde + vært",
              "dimmed": false,
              "verbs": "være",
              "example": "være (to be)",
              "conjugations": [
                ["jeg hadde vært", "vi hadde vært"],
                ["du hadde vært", "dere hadde vært"],
                ["han hadde vært", "de hadde vært"]
              ]
            },
            {
              "name": "ha",
              "description": "hadde + hatt",
              "dimmed": false,
              "verbs": "ha",
              "example": "ha (to have)",
              "conjugations": [
                ["jeg hadde hatt", "vi hadde hatt"],
                ["du hadde hatt", "dere hadde hatt"],
                ["han hadde hatt", "de hadde hatt"]
              ]
            },
            {
              "name": "gå / komme / bli",
              "description": "var + irregular past participle (motion/change)",
              "dimmed": false,
              "verbs": "gå, komme, bli",
              "example": "gå (to go)",
              "conjugations": [
                ["jeg hadde gått", "vi hadde gått"],
                ["du hadde gått", "dere hadde gått"],
                ["han hadde gått", "de hadde gått"]
              ]
            },
            {
              "name": "se / si / gjøre / ta",
              "description": "hadde + irregular past participle",
              "dimmed": false,
              "verbs": "se, si, gjøre, ta, gi, få, vite, finne, ligge, sitte, stå",
              "example": "se (to see)",
              "conjugations": [
                ["jeg hadde sett", "vi hadde sett"],
                ["du hadde sett", "dere hadde sett"],
                ["han hadde sett", "de hadde sett"]
              ]
            }
          ]
        }
      ]
    },
    "future_simple": {
      "label": "Futurum (Future)",
      "icon": "bi-arrow-right",
      "description": "Describes future actions. Formed with vil + infinitive (intention/prediction) or skal + infinitive (plan/obligation). Norwegian often uses present tense + time adverb instead.",
      "columns": [
        {
          "label": "vil + infinitive",
          "regular": {
            "name": "vil + infinitive",
            "example": "kaste (to throw)",
            "conjugations": [
              ["jeg vil kaste", "vi vil kaste"],
              ["du vil kaste", "dere vil kaste"],
              ["han vil kaste", "de vil kaste"]
            ]
          },
          "patterns": [
            {
              "name": "vil + Group 1",
              "description": "vil + infinitive (intention/prediction)",
              "dimmed": true,
              "verbs": "kaste, snakke, leke, jobbe, elske, lage, reise",
              "example": "kaste (to throw)",
              "conjugations": [
                ["jeg vil kaste", "vi vil kaste"],
                ["du vil kaste", "dere vil kaste"],
                ["han vil kaste", "de vil kaste"]
              ]
            },
            {
              "name": "vil + Group 2",
              "description": "vil + infinitive",
              "dimmed": true,
              "verbs": "kjøpe, spise, skrive, lese, drikke, tenke, selge",
              "example": "kjøpe (to buy)",
              "conjugations": [
                ["jeg vil kjøpe", "vi vil kjøpe"],
                ["du vil kjøpe", "dere vil kjøpe"],
                ["han vil kjøpe", "de vil kjøpe"]
              ]
            },
            {
              "name": "vil + irregular",
              "description": "vil + infinitive",
              "dimmed": false,
              "verbs": "være, ha, gå, komme, se, si, gjøre, ta, gi, få, vite, bli",
              "example": "være (to be)",
              "conjugations": [
                ["jeg vil være", "vi vil være"],
                ["du vil være", "dere vil være"],
                ["han vil være", "de vil være"]
              ]
            }
          ]
        },
        {
          "label": "skal + infinitive",
          "regular": {
            "name": "skal + infinitive",
            "example": "kaste (to throw)",
            "conjugations": [
              ["jeg skal kaste", "vi skal kaste"],
              ["du skal kaste", "dere skal kaste"],
              ["han skal kaste", "de skal kaste"]
            ]
          },
          "patterns": [
            {
              "name": "skal + infinitive",
              "description": "plan/obligation/arrangement",
              "dimmed": false,
              "verbs": "kaste, kjøpe, spise, reise, være, ha, gå, komme",
              "example": "reise (to travel)",
              "conjugations": [
                ["jeg skal reise", "vi skal reise"],
                ["du skal reise", "dere skal reise"],
                ["han skal reise", "de skal reise"]
              ]
            }
          ]
        }
      ]
    },
    "imperative": {
      "label": "Imperativ (Imperative)",
      "icon": "bi-exclamation-circle",
      "description": "Gives commands or requests. Uses the bare verb stem. Norwegian has only one imperative form — no distinction for singular/plural or formal/informal.",
      "columns": [
        {
          "label": "Group 1 (-et past)",
          "regular": {
            "name": "verb stem",
            "example": "kaste (to throw)",
            "conjugations": [
              ["kast!", "kast!"],
              ["", ""],
              ["", ""]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 imperative",
              "description": "bare stem",
              "dimmed": true,
              "verbs": "kaste, snakke, leke, jobbe, elske, lage, reise",
              "example": "kaste (to throw)",
              "conjugations": [
                ["kast!", "kast!"],
                ["", ""],
                ["", ""]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "verb stem",
            "example": "kjøpe (to buy)",
            "conjugations": [
              ["kjøp!", "kjøp!"],
              ["", ""],
              ["", ""]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 imperative",
              "description": "bare stem",
              "dimmed": true,
              "verbs": "kjøpe, spise, skrive, lese, drikke, tenke, selge",
              "example": "kjøpe (to buy)",
              "conjugations": [
                ["kjøp!", "kjøp!"],
                ["", ""],
                ["", ""]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "være",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "være",
              "example": "være (to be)",
              "conjugations": [
                ["vær!", "vær!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "ha",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "ha",
              "example": "ha (to have)",
              "conjugations": [
                ["ha!", "ha!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "common irregulars",
              "description": "stem form",
              "dimmed": false,
              "verbs": "gå, se, si, gjøre, komme, ta, gi, bli",
              "example": "gå (to go)",
              "conjugations": [
                ["gå!", "gå!"],
                ["", ""],
                ["", ""]
              ]
            }
          ]
        }
      ]
    }
  },
  "pluralization": [
    { "rule": "Add -er (most common, masculine)", "singular": "bil", "plural": "biler", "examples": "dag→dager, stol→stoler, gutt→gutter, hund→hunder" },
    { "rule": "Add -e (some masculine, many feminine)", "singular": "bok", "plural": "bøker", "examples": "natt→netter, tann→tenner, fot→føtter, hånd→hender" },
    { "rule": "Add -r (words ending in -e)", "singular": "jente", "plural": "jenter", "examples": "skole→skoler, lampe→lamper, gate→gater, klasse→klasser" },
    { "rule": "No change (neuter monosyllabic)", "singular": "hus", "plural": "hus", "examples": "barn→barn, år→år, dyr→dyr, sted→steder" },
    { "rule": "Umlaut / vowel change", "singular": "mann", "plural": "menn", "examples": "gås→gjess, tå→tær, and→ender, bonde→bønder" },
    { "rule": "Irregular", "singular": "øye", "plural": "øyne", "examples": "øre→ører, ku→kuer/kyr, tre→trær, kne→knær" }
  ],
  "pronouns": {
    "categories": [
      {
        "name": "Subject Pronouns (Subjektsform)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "jeg", "vi"],
          ["2nd person", "du", "dere"],
          ["3rd person (m)", "han", "de"],
          ["3rd person (f)", "hun", "de"],
          ["3rd person (n)", "den / det", "de"]
        ]
      },
      {
        "name": "Object Pronouns (Objektsform)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "meg", "oss"],
          ["2nd person", "deg", "dere"],
          ["3rd person (m)", "ham / han", "dem"],
          ["3rd person (f)", "henne", "dem"],
          ["3rd person (n)", "den / det", "dem"]
        ]
      },
      {
        "name": "Possessive Pronouns (Eiendomsord)",
        "headers": ["Person", "Masc.", "Fem.", "Neut.", "Plural"],
        "rows": [
          ["1st sing.", "min", "mi", "mitt", "mine"],
          ["2nd sing.", "din", "di", "ditt", "dine"],
          ["3rd sing. (m)", "hans", "hans", "hans", "hans"],
          ["3rd sing. (f)", "hennes", "hennes", "hennes", "hennes"],
          ["3rd sing. (own)", "sin", "si", "sitt", "sine"],
          ["1st pl.", "vår", "vår", "vårt", "våre"],
          ["2nd pl.", "deres", "deres", "deres", "deres"],
          ["3rd pl.", "deres", "deres", "deres", "deres"]
        ]
      },
      {
        "name": "Reflexive Pronouns (Refleksive)",
        "headers": ["Person", "Form"],
        "rows": [
          ["1st sing.", "meg (selv)"],
          ["2nd sing.", "deg (selv)"],
          ["3rd sing.", "seg (selv)"],
          ["1st pl.", "oss (selv)"],
          ["2nd pl.", "dere (selv)"],
          ["3rd pl.", "seg (selv)"]
        ]
      }
    ]
  },
  "chart": {
    "info": "<strong>Group 1 (-et)</strong> vs <strong>Group 2 (-te)</strong>: Group 1 verbs form past tense with <em>-et</em> and past participle with <em>-et</em> (kaste → kastet / kastet). Group 2 verbs use <em>-te</em> and <em>-t</em> (kjøpe → kjøpte / kjøpt). Rule of thumb: stems ending in two+ consonants or unstressed syllables → Group 1; single consonant after long/stressed vowel → Group 2.",
    "columns": ["Past (Fortid)", "Present (Nåtid)", "Future (Fremtid)"],
    "rows": ["Simple (Enkel)", "Perfect (Perfektum)", "Pluperfect (Pluskvamperfektum)"],
    "groups": ["Grp 1: kaste", "Grp 2: kjøpe", "Irreg: være"],
    "cells": [
      [
        { "form": "Preteritum", "rule": "Grp 1: -et; Grp 2: -te; Irreg: vowel change",
          "er": [["jeg kastet", "vi kastet"], ["du kastet", "dere kastet"], ["han kastet", "de kastet"]],
          "ir": [["jeg kjøpte", "vi kjøpte"], ["du kjøpte", "dere kjøpte"], ["han kjøpte", "de kjøpte"]],
          "re": [["jeg var", "vi var"], ["du var", "dere var"], ["han var", "de var"]] },
        { "form": "Presens", "rule": "Stem + -r / -er",
          "er": [["jeg kaster", "vi kaster"], ["du kaster", "dere kaster"], ["han kaster", "de kaster"]],
          "ir": [["jeg kjøper", "vi kjøper"], ["du kjøper", "dere kjøper"], ["han kjøper", "de kjøper"]],
          "re": [["jeg er", "vi er"], ["du er", "dere er"], ["han er", "de er"]] },
        { "form": "Futurum", "rule": "vil + infinitive",
          "er": [["jeg vil kaste", "vi vil kaste"], ["du vil kaste", "dere vil kaste"], ["han vil kaste", "de vil kaste"]],
          "ir": [["jeg vil kjøpe", "vi vil kjøpe"], ["du vil kjøpe", "dere vil kjøpe"], ["han vil kjøpe", "de vil kjøpe"]],
          "re": [["jeg vil være", "vi vil være"], ["du vil være", "dere vil være"], ["han vil være", "de vil være"]] }
      ],
      [
        { "form": "Pluskvamperfektum", "rule": "hadde/var + past participle",
          "er": [["jeg hadde kastet", "vi hadde kastet"], ["du hadde kastet", "dere hadde kastet"], ["han hadde kastet", "de hadde kastet"]],
          "ir": [["jeg hadde kjøpt", "vi hadde kjøpt"], ["du hadde kjøpt", "dere hadde kjøpt"], ["han hadde kjøpt", "de hadde kjøpt"]],
          "re": [["jeg hadde vært", "vi hadde vært"], ["du hadde vært", "dere hadde vært"], ["han hadde vært", "de hadde vært"]] },
        { "form": "Presens perfektum", "rule": "har/er + past participle",
          "er": [["jeg har kastet", "vi har kastet"], ["du har kastet", "dere har kastet"], ["han har kastet", "de har kastet"]],
          "ir": [["jeg har kjøpt", "vi har kjøpt"], ["du har kjøpt", "dere har kjøpt"], ["han har kjøpt", "de har kjøpt"]],
          "re": [["jeg har vært", "vi har vært"], ["du har vært", "dere har vært"], ["han har vært", "de har vært"]] },
        null
      ],
      [
        null,
        null,
        null
      ]
    ]
  }
};
