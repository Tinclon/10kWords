var danishData = {
  "language": "Danish",
  "title": "Danish Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" },
    { "key": "pronouns", "icon": "bi-person", "label": "Pronouns" }
  ],
  "theme": {
    "primary": "#4fc3f7",
    "secondary": "#29b6f6",
    "tableHeader": "#4fc3f7",
    "stripedRow": "#e1f5fe",
    "border": "#81d4fa",
    "infoBoxTop": "-2.5rem"
  },
  "moods": [
    {
      "label": "Indicative",
      "icon": "bi-chat-left-text",
      "key": "indicative",
      "description": "Describes reality — facts, events, and questions about what is, was, or will be. Danish verbs do not conjugate for person or number; all persons share the same form."
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
      "label": "Præsens (Present)",
      "icon": "bi-record-circle",
      "description": "Describes current states, habitual actions, and general truths. Formed by adding -r (or -er) to the stem. All persons use the same form.",
      "extra": "<strong>Group 1 vs Group 2</strong><br><br>Danish regular verbs are divided into two groups based on their past tense ending:<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th></th><th>Group 1 (-ede)</th><th>Group 2 (-te)</th></tr></thead><tbody><tr><td><strong>Past tense</strong></td><td>stem + <strong>-ede</strong></td><td>stem + <strong>-te</strong></td></tr><tr><td><strong>Past participle</strong></td><td>stem + <strong>-et</strong></td><td>stem + <strong>-t</strong></td></tr><tr><td><strong>Typical verbs</strong></td><td>arbejde, lege, rejse, elske, snakke</td><td>købe, spise, læse, drikke, tænke</td></tr><tr><td><strong>Rule of thumb</strong></td><td>Verbs with stems ending in two+ consonants or unstressed syllables</td><td>Verbs with stems ending in a single consonant after a stressed vowel</td></tr></tbody></table>",
      "columns": [
        {
          "label": "Group 1 (-ede past)",
          "regular": {
            "name": "Group 1 regular",
            "example": "arbejde (to work)",
            "conjugations": [
              ["jeg arbejder", "vi arbejder"],
              ["du arbejder", "I arbejder"],
              ["han arbejder", "de arbejder"]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 -er",
              "description": "stem + -er",
              "dimmed": true,
              "verbs": "arbejde, cykle, lege, rejse, elske, snakke, lave",
              "example": "arbejde (to work)",
              "conjugations": [
                ["jeg arbejder", "vi arbejder"],
                ["du arbejder", "I arbejder"],
                ["han arbejder", "de arbejder"]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "Group 2 regular",
            "example": "købe (to buy)",
            "conjugations": [
              ["jeg køber", "vi køber"],
              ["du køber", "I køber"],
              ["han køber", "de køber"]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 -er",
              "description": "stem + -er",
              "dimmed": true,
              "verbs": "købe, spise, skrive, læse, drikke, tænke, sælge",
              "example": "købe (to buy)",
              "conjugations": [
                ["jeg køber", "vi køber"],
                ["du køber", "I køber"],
                ["han køber", "de køber"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "være / have",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "være, have",
              "example": "være (to be)",
              "conjugations": [
                ["jeg er", "vi er"],
                ["du er", "I er"],
                ["han er", "de er"]
              ]
            },
            {
              "name": "have",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                ["jeg har", "vi har"],
                ["du har", "I har"],
                ["han har", "de har"]
              ]
            },
            {
              "name": "gå / se / sige / gøre / komme",
              "description": "common irregular present forms",
              "dimmed": false,
              "verbs": "gå, se, sige, gøre, komme, tage, give, få, vide",
              "example": "gå (to go)",
              "conjugations": [
                ["jeg går", "vi går"],
                ["du går", "I går"],
                ["han går", "de går"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "irregular present forms",
              "dimmed": false,
              "verbs": "kunne, ville, skulle, måtte, turde",
              "example": "kunne (can)",
              "conjugations": [
                ["jeg kan", "vi kan"],
                ["du kan", "I kan"],
                ["han kan", "de kan"]
              ]
            }
          ]
        }
      ]
    },
    "past_simple": {
      "label": "Præteritum (Simple Past)",
      "icon": "bi-chevron-left",
      "description": "Describes completed actions or states in the past. Group 1 adds -ede, Group 2 adds -te, irregular verbs change the vowel.",
      "extra": "<strong>Past tense formation:</strong><br><br><strong>Group 1</strong> (stem + -ede): arbejde → arbejd<strong>ede</strong><br><strong>Group 2</strong> (stem + -te): købe → køb<strong>te</strong><br><strong>Irregular</strong>: vowel changes, e.g. skrive → <strong>skrev</strong>",
      "columns": [
        {
          "label": "Group 1 (-ede past)",
          "regular": {
            "name": "Group 1 -ede",
            "example": "arbejde (to work)",
            "conjugations": [
              ["jeg arbejdede", "vi arbejdede"],
              ["du arbejdede", "I arbejdede"],
              ["han arbejdede", "de arbejdede"]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 -ede",
              "description": "stem + -ede",
              "dimmed": true,
              "verbs": "arbejde, cykle, lege, rejse, elske, snakke, lave",
              "example": "arbejde (to work)",
              "conjugations": [
                ["jeg arbejdede", "vi arbejdede"],
                ["du arbejdede", "I arbejdede"],
                ["han arbejdede", "de arbejdede"]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "Group 2 -te",
            "example": "købe (to buy)",
            "conjugations": [
              ["jeg købte", "vi købte"],
              ["du købte", "I købte"],
              ["han købte", "de købte"]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 -te",
              "description": "stem + -te",
              "dimmed": true,
              "verbs": "købe, spise, læse, tænke, sælge",
              "example": "købe (to buy)",
              "conjugations": [
                ["jeg købte", "vi købte"],
                ["du købte", "I købte"],
                ["han købte", "de købte"]
              ]
            },
            {
              "name": "Group 2 with vowel change",
              "description": "stem + -te with vowel change",
              "dimmed": false,
              "verbs": "skrive, drikke, sælge",
              "example": "skrive (to write)",
              "conjugations": [
                ["jeg skrev", "vi skrev"],
                ["du skrev", "I skrev"],
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
                ["du var", "I var"],
                ["han var", "de var"]
              ]
            },
            {
              "name": "have",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                ["jeg havde", "vi havde"],
                ["du havde", "I havde"],
                ["han havde", "de havde"]
              ]
            },
            {
              "name": "gå / se / sige / gøre",
              "description": "vowel-changing irregulars",
              "dimmed": false,
              "verbs": "gå, se, sige, gøre, komme, tage, give, få, vide",
              "example": "gå (to go)",
              "conjugations": [
                ["jeg gik", "vi gik"],
                ["du gik", "I gik"],
                ["han gik", "de gik"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "irregular past forms",
              "dimmed": false,
              "verbs": "kunne, ville, skulle, måtte, turde",
              "example": "kunne (can)",
              "conjugations": [
                ["jeg kunne", "vi kunne"],
                ["du kunne", "I kunne"],
                ["han kunne", "de kunne"]
              ]
            }
          ]
        }
      ]
    },
    "present_perfect": {
      "label": "Perfektum (Present Perfect)",
      "icon": "bi-clock-history",
      "description": "Describes completed actions with present relevance. Formed with har/er + past participle. Most common past tense in spoken Danish.",
      "extra": "<strong>Har or er?</strong><br><br>Most verbs use <em>har</em>. Use <em>er</em> with intransitive verbs of motion or change of state:<br>- <em>gå, komme, rejse, køre, flytte, dø, blive</em><br><br><strong>Past participle:</strong> Group 1: -et (arbejdet); Group 2: -t (købt); Irregular: vowel changes",
      "columns": [
        {
          "label": "Group 1 (-ede past)",
          "regular": {
            "name": "Group 1 har + -et",
            "example": "arbejde (to work)",
            "conjugations": [
              ["jeg har arbejdet", "vi har arbejdet"],
              ["du har arbejdet", "I har arbejdet"],
              ["han har arbejdet", "de har arbejdet"]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 with har",
              "description": "har + stem + -et",
              "dimmed": true,
              "verbs": "arbejde, lege, elske, snakke, lave",
              "example": "arbejde (to work)",
              "conjugations": [
                ["jeg har arbejdet", "vi har arbejdet"],
                ["du har arbejdet", "I har arbejdet"],
                ["han har arbejdet", "de har arbejdet"]
              ]
            },
            {
              "name": "Group 1 with er",
              "description": "motion/change verbs: er + stem + -et",
              "dimmed": false,
              "verbs": "rejse, cykle",
              "example": "rejse (to travel)",
              "conjugations": [
                ["jeg er rejst", "vi er rejst"],
                ["du er rejst", "I er rejst"],
                ["han er rejst", "de er rejst"]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "Group 2 har + -t",
            "example": "købe (to buy)",
            "conjugations": [
              ["jeg har købt", "vi har købt"],
              ["du har købt", "I har købt"],
              ["han har købt", "de har købt"]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 with har",
              "description": "har + stem + -t",
              "dimmed": true,
              "verbs": "købe, spise, læse, tænke, sælge",
              "example": "købe (to buy)",
              "conjugations": [
                ["jeg har købt", "vi har købt"],
                ["du har købt", "I har købt"],
                ["han har købt", "de har købt"]
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
                ["du har skrevet", "I har skrevet"],
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
              "description": "er + været",
              "dimmed": false,
              "verbs": "være",
              "example": "være (to be)",
              "conjugations": [
                ["jeg har været", "vi har været"],
                ["du har været", "I har været"],
                ["han har været", "de har været"]
              ]
            },
            {
              "name": "have",
              "description": "har + haft",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                ["jeg har haft", "vi har haft"],
                ["du har haft", "I har haft"],
                ["han har haft", "de har haft"]
              ]
            },
            {
              "name": "gå / komme / tage / give / få",
              "description": "irregular past participles",
              "dimmed": false,
              "verbs": "gå, komme, tage, give, få, se, sige, gøre, vide",
              "example": "gå (to go)",
              "conjugations": [
                ["jeg er gået", "vi er gået"],
                ["du er gået", "I er gået"],
                ["han er gået", "de er gået"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "har + kunnet/villet/skullet/måttet/turdet",
              "dimmed": false,
              "verbs": "kunne, ville, skulle, måtte, turde",
              "example": "kunne (can)",
              "conjugations": [
                ["jeg har kunnet", "vi har kunnet"],
                ["du har kunnet", "I har kunnet"],
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
      "description": "Describes actions completed before another past action. Formed with havde/var + past participle.",
      "columns": [
        {
          "label": "Group 1 (-ede past)",
          "regular": {
            "name": "Group 1 havde + -et",
            "example": "arbejde (to work)",
            "conjugations": [
              ["jeg havde arbejdet", "vi havde arbejdet"],
              ["du havde arbejdet", "I havde arbejdet"],
              ["han havde arbejdet", "de havde arbejdet"]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 with havde",
              "description": "havde + stem + -et",
              "dimmed": true,
              "verbs": "arbejde, lege, elske, snakke, lave",
              "example": "arbejde (to work)",
              "conjugations": [
                ["jeg havde arbejdet", "vi havde arbejdet"],
                ["du havde arbejdet", "I havde arbejdet"],
                ["han havde arbejdet", "de havde arbejdet"]
              ]
            },
            {
              "name": "Group 1 with var",
              "description": "motion/change verbs: var + stem + -et",
              "dimmed": false,
              "verbs": "rejse, cykle",
              "example": "rejse (to travel)",
              "conjugations": [
                ["jeg var rejst", "vi var rejst"],
                ["du var rejst", "I var rejst"],
                ["han var rejst", "de var rejst"]
              ]
            }
          ]
        },
        {
          "label": "Group 2 (-te past)",
          "regular": {
            "name": "Group 2 havde + -t",
            "example": "købe (to buy)",
            "conjugations": [
              ["jeg havde købt", "vi havde købt"],
              ["du havde købt", "I havde købt"],
              ["han havde købt", "de havde købt"]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 with havde",
              "description": "havde + stem + -t",
              "dimmed": true,
              "verbs": "købe, spise, læse, tænke, sælge",
              "example": "købe (to buy)",
              "conjugations": [
                ["jeg havde købt", "vi havde købt"],
                ["du havde købt", "I havde købt"],
                ["han havde købt", "de havde købt"]
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
              "description": "havde + været",
              "dimmed": false,
              "verbs": "være",
              "example": "være (to be)",
              "conjugations": [
                ["jeg havde været", "vi havde været"],
                ["du havde været", "I havde været"],
                ["han havde været", "de havde været"]
              ]
            },
            {
              "name": "have",
              "description": "havde + haft",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                ["jeg havde haft", "vi havde haft"],
                ["du havde haft", "I havde haft"],
                ["han havde haft", "de havde haft"]
              ]
            },
            {
              "name": "gå / komme / tage",
              "description": "var + irregular past participle",
              "dimmed": false,
              "verbs": "gå, komme, tage, give, få, se, sige, gøre",
              "example": "gå (to go)",
              "conjugations": [
                ["jeg var gået", "vi var gået"],
                ["du var gået", "I var gået"],
                ["han var gået", "de var gået"]
              ]
            }
          ]
        }
      ]
    },
    "future_simple": {
      "label": "Futurum (Future)",
      "icon": "bi-arrow-right",
      "description": "Describes future actions. Formed with vil + infinitive (intention/prediction) or skal + infinitive (plan/obligation). Danish often uses present tense + time adverb instead.",
      "columns": [
        {
          "label": "vil + infinitive",
          "regular": {
            "name": "vil + infinitive",
            "example": "arbejde (to work)",
            "conjugations": [
              ["jeg vil arbejde", "vi vil arbejde"],
              ["du vil arbejde", "I vil arbejde"],
              ["han vil arbejde", "de vil arbejde"]
            ]
          },
          "patterns": [
            {
              "name": "vil + Group 1",
              "description": "vil + infinitive (intention/prediction)",
              "dimmed": true,
              "verbs": "arbejde, cykle, lege, rejse, elske, snakke, lave",
              "example": "arbejde (to work)",
              "conjugations": [
                ["jeg vil arbejde", "vi vil arbejde"],
                ["du vil arbejde", "I vil arbejde"],
                ["han vil arbejde", "de vil arbejde"]
              ]
            },
            {
              "name": "vil + Group 2",
              "description": "vil + infinitive",
              "dimmed": true,
              "verbs": "købe, spise, skrive, læse, drikke, tænke, sælge",
              "example": "købe (to buy)",
              "conjugations": [
                ["jeg vil købe", "vi vil købe"],
                ["du vil købe", "I vil købe"],
                ["han vil købe", "de vil købe"]
              ]
            },
            {
              "name": "vil + irregular",
              "description": "vil + infinitive",
              "dimmed": false,
              "verbs": "være, have, gå, komme, se, sige, gøre, tage, give, få, vide",
              "example": "være (to be)",
              "conjugations": [
                ["jeg vil være", "vi vil være"],
                ["du vil være", "I vil være"],
                ["han vil være", "de vil være"]
              ]
            }
          ]
        },
        {
          "label": "skal + infinitive",
          "regular": {
            "name": "skal + infinitive",
            "example": "arbejde (to work)",
            "conjugations": [
              ["jeg skal arbejde", "vi skal arbejde"],
              ["du skal arbejde", "I skal arbejde"],
              ["han skal arbejde", "de skal arbejde"]
            ]
          },
          "patterns": [
            {
              "name": "skal + infinitive",
              "description": "plan/obligation/arrangement",
              "dimmed": false,
              "verbs": "arbejde, købe, spise, rejse, være, have, gå, komme",
              "example": "rejse (to travel)",
              "conjugations": [
                ["jeg skal rejse", "vi skal rejse"],
                ["du skal rejse", "I skal rejse"],
                ["han skal rejse", "de skal rejse"]
              ]
            }
          ]
        }
      ]
    },
    "imperative": {
      "label": "Imperativ (Imperative)",
      "icon": "bi-exclamation-circle",
      "description": "Gives commands or requests. Uses the bare verb stem. Danish has only one imperative form — no distinction for singular/plural or formal/informal.",
      "columns": [
        {
          "label": "Group 1 (-ede past)",
          "regular": {
            "name": "verb stem",
            "example": "arbejde (to work)",
            "conjugations": [
              ["arbejd!", "arbejd!"],
              ["", ""],
              ["", ""]
            ]
          },
          "patterns": [
            {
              "name": "Group 1 imperative",
              "description": "bare stem",
              "dimmed": true,
              "verbs": "arbejde, cykle, lege, rejse, elske, snakke, lave",
              "example": "arbejde (to work)",
              "conjugations": [
                ["arbejd!", "arbejd!"],
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
            "example": "købe (to buy)",
            "conjugations": [
              ["køb!", "køb!"],
              ["", ""],
              ["", ""]
            ]
          },
          "patterns": [
            {
              "name": "Group 2 imperative",
              "description": "bare stem",
              "dimmed": true,
              "verbs": "købe, spise, skrive, læse, drikke, tænke, sælge",
              "example": "købe (to buy)",
              "conjugations": [
                ["køb!", "køb!"],
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
              "name": "have",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                ["hav!", "hav!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "common irregulars",
              "description": "stem form",
              "dimmed": false,
              "verbs": "gå, se, sige, gøre, komme, tage, give",
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
    { "rule": "Add -e (most common)", "singular": "dag", "plural": "dage", "examples": "ven→venne, stol→stole, hund→hunde, bog→bøger" },
    { "rule": "Add -er", "singular": "barn", "plural": "børn", "examples": "mand→mænd, egg→eggs, fjeld→fjelde, billede→billeder" },
    { "rule": "Add -r (words ending in -e)", "singular": "skole", "plural": "skoler", "examples": "pige→piger, lampe→lamper, drenge→drenge, flaske→flasker" },
    { "rule": "Add -s (foreign/borrowed words)", "singular": "hotel", "plural": "hoteller", "examples": "taxi→taxier, sofa→sofaer, baby→babyer, café→caféer" },
    { "rule": "No change (many neuter -et words)", "singular": "hus", "plural": "hus", "examples": "dyr→dyr, barn→børn, år→år, sted→steder" },
    { "rule": "Umlaut / vowel change", "singular": "mand", "plural": "mænd", "examples": "gås→gæs, tand→tænder, fod→fødder, mus→mus" },
    { "rule": "Irregular", "singular": "øje", "plural": "øjne", "examples": "øre→ører, ko→køer, bonde→bønder" }
  ],
  "pronouns": {
    "categories": [
      {
        "name": "Subject Pronouns (Subjektform)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "jeg", "vi"],
          ["2nd person", "du", "I"],
          ["3rd person (m)", "han", "de"],
          ["3rd person (f)", "hun", "de"],
          ["3rd person (n)", "den / det", "de"]
        ]
      },
      {
        "name": "Object Pronouns (Objektform)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "mig", "os"],
          ["2nd person", "dig", "jer"],
          ["3rd person (m)", "ham", "dem"],
          ["3rd person (f)", "hende", "dem"],
          ["3rd person (n)", "den / det", "dem"]
        ]
      },
      {
        "name": "Possessive Pronouns (Ejestedord)",
        "headers": ["Person", "Common gender", "Neuter", "Plural"],
        "rows": [
          ["1st sing.", "min", "mit", "mine"],
          ["2nd sing.", "din", "dit", "dine"],
          ["3rd sing. (m)", "hans", "hans", "hans"],
          ["3rd sing. (f)", "hendes", "hendes", "hendes"],
          ["3rd sing. (own)", "sin", "sit", "sine"],
          ["1st pl.", "vores", "vores", "vores"],
          ["2nd pl.", "jeres", "jeres", "jeres"],
          ["3rd pl.", "deres", "deres", "deres"]
        ]
      },
      {
        "name": "Reflexive Pronouns (Refleksive)",
        "headers": ["Person", "Form"],
        "rows": [
          ["1st sing.", "mig (selv)"],
          ["2nd sing.", "dig (selv)"],
          ["3rd sing.", "sig (selv)"],
          ["1st pl.", "os (selv)"],
          ["2nd pl.", "jer (selv)"],
          ["3rd pl.", "sig (selv)"]
        ]
      }
    ]
  },
  "chart": {
    "info": "<strong>Group 1 (-ede)</strong> vs <strong>Group 2 (-te)</strong>: Group 1 verbs form past tense with <em>-ede</em> and past participle with <em>-et</em> (arbejde → arbejdede / arbejdet). Group 2 verbs use <em>-te</em> and <em>-t</em> (købe → købte / købt). Rule of thumb: stems ending in two+ consonants or unstressed syllables → Group 1; single consonant after stressed vowel → Group 2.",
    "columns": ["Past (Fortid)", "Present (Nutid)", "Future (Fremtid)"],
    "rows": ["Simple (Simpel)", "Perfect (Perfektum)", "Pluperfect (Pluskvamperfektum)"],
    "groups": ["Grp 1: arbejde", "Grp 2: købe", "Irreg: være"],
    "cells": [
      [
        { "form": "Præteritum", "rule": "Grp 1: -ede; Grp 2: -te; Irreg: vowel change",
          "er": [["jeg arbejdede", "vi arbejdede"], ["du arbejdede", "I arbejdede"], ["han arbejdede", "de arbejdede"]],
          "ir": [["jeg købte", "vi købte"], ["du købte", "I købte"], ["han købte", "de købte"]],
          "re": [["jeg var", "vi var"], ["du var", "I var"], ["han var", "de var"]] },
        { "form": "Præsens", "rule": "Stem + -r / -er",
          "er": [["jeg arbejder", "vi arbejder"], ["du arbejder", "I arbejder"], ["han arbejder", "de arbejder"]],
          "ir": [["jeg køber", "vi køber"], ["du køber", "I køber"], ["han køber", "de køber"]],
          "re": [["jeg er", "vi er"], ["du er", "I er"], ["han er", "de er"]] },
        { "form": "Futurum", "rule": "vil + infinitive",
          "er": [["jeg vil arbejde", "vi vil arbejde"], ["du vil arbejde", "I vil arbejde"], ["han vil arbejde", "de vil arbejde"]],
          "ir": [["jeg vil købe", "vi vil købe"], ["du vil købe", "I vil købe"], ["han vil købe", "de vil købe"]],
          "re": [["jeg vil være", "vi vil være"], ["du vil være", "I vil være"], ["han vil være", "de vil være"]] }
      ],
      [
        { "form": "Pluskvamperfektum", "rule": "havde/var + past participle",
          "er": [["jeg havde arbejdet", "vi havde arbejdet"], ["du havde arbejdet", "I havde arbejdet"], ["han havde arbejdet", "de havde arbejdet"]],
          "ir": [["jeg havde købt", "vi havde købt"], ["du havde købt", "I havde købt"], ["han havde købt", "de havde købt"]],
          "re": [["jeg havde været", "vi havde været"], ["du havde været", "I havde været"], ["han havde været", "de havde været"]] },
        { "form": "Perfektum", "rule": "har/er + past participle",
          "er": [["jeg har arbejdet", "vi har arbejdet"], ["du har arbejdet", "I har arbejdet"], ["han har arbejdet", "de har arbejdet"]],
          "ir": [["jeg har købt", "vi har købt"], ["du har købt", "I har købt"], ["han har købt", "de har købt"]],
          "re": [["jeg har været", "vi har været"], ["du har været", "I har været"], ["han har været", "de har været"]] },
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
