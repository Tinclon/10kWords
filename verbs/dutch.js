var dutchData = {
  "language": "Dutch",
  "title": "Dutch Verbs",
  "theme": {
    "primary": "#e65100",
    "secondary": "#bf360c",
    "tableHeader": "#ef6c00",
    "stripedRow": "#fff3e0",
    "border": "#ffb74d"
  },
  "moods": [
    {
      "label": "Indicative",
      "icon": "bi-chat-left-text",
      "key": "indicative",
      "description": "Describes reality — facts, events, and questions about what is, was, or will be."
    },
    {
      "label": "Conditional",
      "icon": "bi-question-circle",
      "key": "conditional",
      "description": "Describes what would happen under certain conditions, or polite requests. Formed with zou/zouden + infinitive."
    },
    {
      "label": "Imperative",
      "icon": "bi-exclamation-circle",
      "key": "imperative",
      "description": "Gives commands, instructions, or requests directly. Uses the verb stem."
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
          "future_simple",
          "future_perfect"
        ]
      }
    ],
    "conditional": [
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "cond_simple"
        ]
      },
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "cond_perfect"
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
      "label": "Present Simple (Onvoltooid tegenwoordige tijd)",
      "icon": "bi-record-circle",
      "description": "Describes current states, habitual actions, and general truths. Also used for scheduled future events.",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak verb",
            "example": "werken (to work)",
            "conjugations": [
              ["ik werk", "wij werken"],
              ["jij werkt", "jullie werken"],
              ["hij/zij werkt", "zij werken"]
            ]
          },
          "patterns": [
            {
              "name": "weak -t",
              "description": "standard weak verb",
              "dimmed": true,
              "verbs": "werken, maken, leren, leven, spelen, wonen, hopen, praten, pakken, koken",
              "example": "werken (to work)",
              "conjugations": [
                ["ik werk", "wij werken"],
                ["jij werkt", "jullie werken"],
                ["hij/zij werkt", "zij werken"]
              ]
            },
            {
              "name": "weak -d stem",
              "description": "stem ends in -d",
              "dimmed": false,
              "verbs": "antwoorden, vinden, houden, rijden, snijden, worden, bidden",
              "example": "antwoorden (to answer)",
              "conjugations": [
                ["ik antwoord", "wij antwoorden"],
                ["jij antwoordt", "jullie antwoorden"],
                ["hij/zij antwoordt", "zij antwoorden"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "strong a-class",
              "description": "no vowel change in present",
              "dimmed": false,
              "verbs": "lopen, slapen, vallen, laten, hangen, vangen, wassen, graven, dragen, varen",
              "example": "lopen (to walk)",
              "conjugations": [
                ["ik loop", "wij lopen"],
                ["jij loopt", "jullie lopen"],
                ["hij/zij loopt", "zij lopen"]
              ]
            },
            {
              "name": "strong e-class",
              "description": "no vowel change in present",
              "dimmed": false,
              "verbs": "geven, lezen, eten, vergeten, breken, spreken, stelen, nemen, zien, zitten",
              "example": "geven (to give)",
              "conjugations": [
                ["ik geef", "wij geven"],
                ["jij geeft", "jullie geven"],
                ["hij/zij geeft", "zij geven"]
              ]
            },
            {
              "name": "strong ij-class",
              "description": "no vowel change in present",
              "dimmed": false,
              "verbs": "schrijven, rijden, blijven, kijken, snijden, krijgen, stijgen, wijzen, bijten, glijden",
              "example": "schrijven (to write)",
              "conjugations": [
                ["ik schrijf", "wij schrijven"],
                ["jij schrijft", "jullie schrijven"],
                ["hij/zij schrijft", "zij schrijven"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "zijn",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "zijn",
              "example": "zijn (to be)",
              "conjugations": [
                ["ik ben", "wij zijn"],
                ["jij bent", "jullie zijn"],
                ["hij/zij is", "zij zijn"]
              ]
            },
            {
              "name": "hebben",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "hebben",
              "example": "hebben (to have)",
              "conjugations": [
                ["ik heb", "wij hebben"],
                ["jij hebt", "jullie hebben"],
                ["hij/zij heeft", "zij hebben"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "irregular present forms",
              "dimmed": false,
              "verbs": "kunnen, willen, moeten, mogen, zullen",
              "example": "kunnen (to be able)",
              "conjugations": [
                ["ik kan", "wij kunnen"],
                ["jij kunt/kan", "jullie kunnen"],
                ["hij/zij kan", "zij kunnen"]
              ]
            },
            {
              "name": "gaan / staan / doen / zien",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gaan, staan, doen, zien, slaan",
              "example": "gaan (to go)",
              "conjugations": [
                ["ik ga", "wij gaan"],
                ["jij gaat", "jullie gaan"],
                ["hij/zij gaat", "zij gaan"]
              ]
            }
          ]
        }
      ]
    },
    "past_simple": {
      "label": "Past Simple (Onvoltooid verleden tijd)",
      "icon": "bi-chevron-left",
      "description": "Describes completed actions or states in the past. Weak verbs add -te/-de, strong verbs change the stem vowel.",
      "extra": "<strong>Weak past tense: -te or -de?</strong><br><br>Use the mnemonic <em>'t kofschip</em>. If the stem ends in t, k, f, s, ch, or p → add <strong>-te/-ten</strong>. Otherwise → add <strong>-de/-den</strong>.<br><br><table class=\"table table-bordered table-sm mb-0\"><tr><td>werk → werk<strong>te</strong></td><td>leev → leef<strong>de</strong></td></tr><tr><td>fiets → fietste</td><td>antwoord → antwoord<strong>de</strong></td></tr></table>",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak -te verb",
            "example": "werken (to work)",
            "conjugations": [
              ["ik werkte", "wij werkten"],
              ["jij werkte", "jullie werkten"],
              ["hij/zij werkte", "zij werkten"]
            ]
          },
          "patterns": [
            {
              "name": "weak -te",
              "description": "'t kofschip stems",
              "dimmed": true,
              "verbs": "werken, fietsen, maken, koken, praten, hopen, stoppen, pakken",
              "example": "werken (to work)",
              "conjugations": [
                ["ik werkte", "wij werkten"],
                ["jij werkte", "jullie werkten"],
                ["hij/zij werkte", "zij werkten"]
              ]
            },
            {
              "name": "weak -de",
              "description": "non-'t kofschip stems",
              "dimmed": false,
              "verbs": "leven, leren, spelen, wonen, antwoorden, reizen, bouwen, geloven",
              "example": "leven (to live)",
              "conjugations": [
                ["ik leefde", "wij leefden"],
                ["jij leefde", "jullie leefden"],
                ["hij/zij leefde", "zij leefden"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "strong a-class",
              "description": "vowel change: o/a → ie/o",
              "dimmed": false,
              "verbs": "lopen, slapen, vallen, laten, dragen",
              "example": "lopen (to walk)",
              "conjugations": [
                ["ik liep", "wij liepen"],
                ["jij liep", "jullie liepen"],
                ["hij/zij liep", "zij liepen"]
              ]
            },
            {
              "name": "strong e-class",
              "description": "vowel change: e → a",
              "dimmed": false,
              "verbs": "geven, lezen, eten, vergeten, spreken, nemen",
              "example": "geven (to give)",
              "conjugations": [
                ["ik gaf", "wij gaven"],
                ["jij gaf", "jullie gaven"],
                ["hij/zij gaf", "zij gaven"]
              ]
            },
            {
              "name": "strong ij-class",
              "description": "vowel change: ij → ee",
              "dimmed": false,
              "verbs": "schrijven, rijden, blijven, kijken, krijgen, snijden",
              "example": "schrijven (to write)",
              "conjugations": [
                ["ik schreef", "wij schreven"],
                ["jij schreef", "jullie schreven"],
                ["hij/zij schreef", "zij schreven"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "zijn",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "zijn",
              "example": "zijn (to be)",
              "conjugations": [
                ["ik was", "wij waren"],
                ["jij was", "jullie waren"],
                ["hij/zij was", "zij waren"]
              ]
            },
            {
              "name": "hebben",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "hebben",
              "example": "hebben (to have)",
              "conjugations": [
                ["ik had", "wij hadden"],
                ["jij had", "jullie hadden"],
                ["hij/zij had", "zij hadden"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "irregular past",
              "dimmed": false,
              "verbs": "kunnen, willen, moeten, mogen, zullen",
              "example": "kunnen (to be able)",
              "conjugations": [
                ["ik kon", "wij konden"],
                ["jij kon", "jullie konden"],
                ["hij/zij kon", "zij konden"]
              ]
            },
            {
              "name": "gaan / staan / doen / zien",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gaan, staan, doen, zien",
              "example": "gaan (to go)",
              "conjugations": [
                ["ik ging", "wij gingen"],
                ["jij ging", "jullie gingen"],
                ["hij/zij ging", "zij gingen"]
              ]
            }
          ]
        }
      ]
    },
    "present_perfect": {
      "label": "Present Perfect (Voltooid tegenwoordige tijd)",
      "icon": "bi-clock-history",
      "description": "Describes completed actions with present relevance. Formed with hebben/zijn + past participle. Most common past tense in spoken Dutch.",
      "extra": "<strong>Hebben or zijn?</strong><br><br>Most verbs use <em>hebben</em>. Use <em>zijn</em> with:<br>- Intransitive verbs of motion/change: <em>gaan, komen, vertrekken, worden, groeien</em><br>- <em>zijn, blijven, gebeuren</em><br><br><strong>Past participle:</strong> ge- + stem + -t/-d (weak) or ge- + stem vowel change + -en (strong)",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak with hebben",
            "example": "werken (to work)",
            "conjugations": [
              ["ik heb gewerkt", "wij hebben gewerkt"],
              ["jij hebt gewerkt", "jullie hebben gewerkt"],
              ["hij/zij heeft gewerkt", "zij hebben gewerkt"]
            ]
          },
          "patterns": [
            {
              "name": "weak ge-...-t",
              "description": "'t kofschip → -t",
              "dimmed": true,
              "verbs": "werken, fietsen, maken, koken, praten, pakken",
              "example": "werken (to work)",
              "conjugations": [
                ["ik heb gewerkt", "wij hebben gewerkt"],
                ["jij hebt gewerkt", "jullie hebben gewerkt"],
                ["hij/zij heeft gewerkt", "zij hebben gewerkt"]
              ]
            },
            {
              "name": "weak ge-...-d",
              "description": "non-'t kofschip → -d",
              "dimmed": false,
              "verbs": "leven, leren, spelen, wonen, antwoorden, bouwen",
              "example": "leven (to live)",
              "conjugations": [
                ["ik heb geleefd", "wij hebben geleefd"],
                ["jij hebt geleefd", "jullie hebben geleefd"],
                ["hij/zij heeft geleefd", "zij hebben geleefd"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "strong with hebben",
              "description": "ge- + vowel change + -en",
              "dimmed": false,
              "verbs": "geven, lezen, eten, schrijven, spreken, nemen",
              "example": "geven (to give)",
              "conjugations": [
                ["ik heb gegeven", "wij hebben gegeven"],
                ["jij hebt gegeven", "jullie hebben gegeven"],
                ["hij/zij heeft gegeven", "zij hebben gegeven"]
              ]
            },
            {
              "name": "strong with zijn",
              "description": "motion/change verbs",
              "dimmed": false,
              "verbs": "lopen, rijden, vallen, blijven, komen, gaan, worden",
              "example": "lopen (to walk)",
              "conjugations": [
                ["ik ben gelopen", "wij zijn gelopen"],
                ["jij bent gelopen", "jullie zijn gelopen"],
                ["hij/zij is gelopen", "zij zijn gelopen"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "zijn",
              "description": "uses zijn as auxiliary",
              "dimmed": false,
              "verbs": "zijn",
              "example": "zijn (to be)",
              "conjugations": [
                ["ik ben geweest", "wij zijn geweest"],
                ["jij bent geweest", "jullie zijn geweest"],
                ["hij/zij is geweest", "zij zijn geweest"]
              ]
            },
            {
              "name": "hebben",
              "description": "uses hebben as auxiliary",
              "dimmed": false,
              "verbs": "hebben",
              "example": "hebben (to have)",
              "conjugations": [
                ["ik heb gehad", "wij hebben gehad"],
                ["jij hebt gehad", "jullie hebben gehad"],
                ["hij/zij heeft gehad", "zij hebben gehad"]
              ]
            },
            {
              "name": "gaan / doen / zien",
              "description": "common irregulars with zijn/hebben",
              "dimmed": false,
              "verbs": "gaan, doen, zien, staan, slaan",
              "example": "gaan (to go)",
              "conjugations": [
                ["ik ben gegaan", "wij zijn gegaan"],
                ["jij bent gegaan", "jullie zijn gegaan"],
                ["hij/zij is gegaan", "zij zijn gegaan"]
              ]
            }
          ]
        }
      ]
    },
    "past_perfect": {
      "label": "Past Perfect (Voltooid verleden tijd)",
      "icon": "bi-skip-backward",
      "description": "Describes actions completed before another past action. Formed with had/waren + past participle.",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak with had",
            "example": "werken (to work)",
            "conjugations": [
              ["ik had gewerkt", "wij hadden gewerkt"],
              ["jij had gewerkt", "jullie hadden gewerkt"],
              ["hij/zij had gewerkt", "zij hadden gewerkt"]
            ]
          },
          "patterns": [
            {
              "name": "weak past perfect",
              "description": "had + ge-...-t/-d",
              "dimmed": true,
              "verbs": "werken, maken, leren, leven, spelen, wonen",
              "example": "werken (to work)",
              "conjugations": [
                ["ik had gewerkt", "wij hadden gewerkt"],
                ["jij had gewerkt", "jullie hadden gewerkt"],
                ["hij/zij had gewerkt", "zij hadden gewerkt"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "strong with had",
              "description": "had + ge-...-en",
              "dimmed": false,
              "verbs": "geven, lezen, eten, schrijven, spreken",
              "example": "geven (to give)",
              "conjugations": [
                ["ik had gegeven", "wij hadden gegeven"],
                ["jij had gegeven", "jullie hadden gegeven"],
                ["hij/zij had gegeven", "zij hadden gegeven"]
              ]
            },
            {
              "name": "strong with waren",
              "description": "motion/change verbs",
              "dimmed": false,
              "verbs": "lopen, rijden, vallen, blijven, komen, gaan",
              "example": "lopen (to walk)",
              "conjugations": [
                ["ik was gelopen", "wij waren gelopen"],
                ["jij was gelopen", "jullie waren gelopen"],
                ["hij/zij was gelopen", "zij waren gelopen"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "zijn",
              "description": "was/waren + geweest",
              "dimmed": false,
              "verbs": "zijn",
              "example": "zijn (to be)",
              "conjugations": [
                ["ik was geweest", "wij waren geweest"],
                ["jij was geweest", "jullie waren geweest"],
                ["hij/zij was geweest", "zij waren geweest"]
              ]
            },
            {
              "name": "hebben",
              "description": "had/hadden + gehad",
              "dimmed": false,
              "verbs": "hebben",
              "example": "hebben (to have)",
              "conjugations": [
                ["ik had gehad", "wij hadden gehad"],
                ["jij had gehad", "jullie hadden gehad"],
                ["hij/zij had gehad", "zij hadden gehad"]
              ]
            }
          ]
        }
      ]
    },
    "future_simple": {
      "label": "Future Simple (Onvoltooid toekomende tijd)",
      "icon": "bi-arrow-right",
      "description": "Describes future actions. Formed with zullen + infinitive. In spoken Dutch, often replaced by present tense + time expression or gaan + infinitive.",
      "columns": [
        {
          "label": "All verbs",
          "regular": {
            "name": "zullen + infinitive",
            "example": "werken (to work)",
            "conjugations": [
              ["ik zal werken", "wij zullen werken"],
              ["jij zult/zal werken", "jullie zullen werken"],
              ["hij/zij zal werken", "zij zullen werken"]
            ]
          },
          "patterns": [
            {
              "name": "gaan + infinitive",
              "description": "informal future (very common)",
              "dimmed": false,
              "verbs": "werken, lopen, eten, schrijven, geven",
              "example": "werken (to work)",
              "conjugations": [
                ["ik ga werken", "wij gaan werken"],
                ["jij gaat werken", "jullie gaan werken"],
                ["hij/zij gaat werken", "zij gaan werken"]
              ]
            }
          ]
        }
      ]
    },
    "future_perfect": {
      "label": "Future Perfect (Voltooid toekomende tijd)",
      "icon": "bi-skip-forward",
      "description": "Describes actions that will be completed by a certain future time. Formed with zullen + past participle + hebben/zijn.",
      "columns": [
        {
          "label": "With hebben",
          "regular": {
            "name": "zullen + p.p. + hebben",
            "example": "werken (to work)",
            "conjugations": [
              ["ik zal gewerkt hebben", "wij zullen gewerkt hebben"],
              ["jij zult gewerkt hebben", "jullie zullen gewerkt hebben"],
              ["hij/zij zal gewerkt hebben", "zij zullen gewerkt hebben"]
            ]
          },
          "patterns": []
        },
        {
          "label": "With zijn",
          "regular": {
            "name": "zullen + p.p. + zijn",
            "example": "lopen (to walk)",
            "conjugations": [
              ["ik zal gelopen zijn", "wij zullen gelopen zijn"],
              ["jij zult gelopen zijn", "jullie zullen gelopen zijn"],
              ["hij/zij zal gelopen zijn", "zij zullen gelopen zijn"]
            ]
          },
          "patterns": []
        }
      ]
    },
    "cond_simple": {
      "label": "Conditional (Onvoltooid verleden toekomende tijd)",
      "icon": "bi-question-circle",
      "description": "Describes hypothetical situations or polite requests. Formed with zou/zouden + infinitive.",
      "columns": [
        {
          "label": "All verbs",
          "regular": {
            "name": "zou/zouden + infinitive",
            "example": "werken (to work)",
            "conjugations": [
              ["ik zou werken", "wij zouden werken"],
              ["jij zou werken", "jullie zouden werken"],
              ["hij/zij zou werken", "zij zouden werken"]
            ]
          },
          "patterns": [
            {
              "name": "zou + willen/kunnen",
              "description": "polite requests",
              "dimmed": false,
              "verbs": "willen, kunnen, mogen",
              "example": "willen (to want)",
              "conjugations": [
                ["ik zou willen", "wij zouden willen"],
                ["jij zou willen", "jullie zouden willen"],
                ["hij/zij zou willen", "zij zouden willen"]
              ]
            }
          ]
        }
      ]
    },
    "cond_perfect": {
      "label": "Conditional Perfect (Voltooid verleden toekomende tijd)",
      "icon": "bi-skip-backward",
      "description": "Describes hypothetical past situations (what would have happened). Formed with zou/zouden + past participle + hebben/zijn.",
      "columns": [
        {
          "label": "With hebben",
          "regular": {
            "name": "zou + p.p. + hebben",
            "example": "werken (to work)",
            "conjugations": [
              ["ik zou gewerkt hebben", "wij zouden gewerkt hebben"],
              ["jij zou gewerkt hebben", "jullie zouden gewerkt hebben"],
              ["hij/zij zou gewerkt hebben", "zij zouden gewerkt hebben"]
            ]
          },
          "patterns": []
        },
        {
          "label": "With zijn",
          "regular": {
            "name": "zou + p.p. + zijn",
            "example": "lopen (to walk)",
            "conjugations": [
              ["ik zou gelopen zijn", "wij zouden gelopen zijn"],
              ["jij zou gelopen zijn", "jullie zouden gelopen zijn"],
              ["hij/zij zou gelopen zijn", "zij zouden gelopen zijn"]
            ]
          },
          "patterns": []
        }
      ]
    },
    "imperative": {
      "label": "Imperative (Gebiedende wijs)",
      "icon": "bi-exclamation-circle",
      "description": "Gives commands or requests. Uses the verb stem for singular, stem + -t or infinitive for formal.",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "verb stem",
            "example": "werken (to work)",
            "conjugations": [
              ["werk!", "werkt u!"],
              ["", ""],
              ["", ""]
            ]
          },
          "patterns": [
            {
              "name": "regular imperative",
              "description": "stem form",
              "dimmed": true,
              "verbs": "werken, maken, leren, spelen, wonen, lopen, schrijven",
              "example": "lopen (to walk)",
              "conjugations": [
                ["loop!", "loopt u!"],
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
              "name": "zijn",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "zijn",
              "example": "zijn (to be)",
              "conjugations": [
                ["wees!", "weest u!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "hebben",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "hebben",
              "example": "hebben (to have)",
              "conjugations": [
                ["heb!", "hebt u!"],
                ["", ""],
                ["", ""]
              ]
            }
          ]
        }
      ]
    }
  }
};
