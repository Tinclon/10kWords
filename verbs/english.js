var englishData = {
  "language": "English",
  "title": "English Verbs",
  "theme": {
    "primary": "#1b5e20",
    "secondary": "#134016",
    "tableHeader": "#2e7d32",
    "stripedRow": "#e8f5e9",
    "border": "#81c784"
  },
  "moods": [
    {
      "label": "Indicative",
      "icon": "bi-chat-left-text",
      "key": "indicative",
      "description": "Describes reality — facts, events, and questions about what is, was, or will be."
    },
    {
      "label": "Subjunctive",
      "icon": "bi-chat-left-dots",
      "key": "subjunctive",
      "description": "Expresses doubt, wishes, emotions, possibilities, or hypothetical situations. Often triggered by specific conjunctions or verbs."
    },
    {
      "label": "Conditional",
      "icon": "bi-question-circle",
      "key": "conditional",
      "description": "Describes what would happen under certain conditions, or polite requests."
    },
    {
      "label": "Imperative",
      "icon": "bi-exclamation-circle",
      "key": "imperative",
      "description": "Gives commands, instructions, or requests directly."
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
          "past_continuous",
          "past_perfect",
          "past_perfect_continuous"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "present_simple",
          "present_continuous"
        ]
      },
      {
        "label": "Future",
        "icon": "bi-arrow-right",
        "tenses": [
          "future_simple",
          "future_continuous",
          "future_perfect",
          "future_perfect_continuous"
        ]
      }
    ],
    "subjunctive": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "subj_past"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "subj_present"
        ]
      }
    ],
    "conditional": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "cond_perfect"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "cond_simple"
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
      "label": "Present Simple",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "walk",
                "walk"
              ],
              [
                "walkest",
                "walk"
              ],
              [
                "walks / walketh",
                "walk"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular -s",
              "description": "standard 3rd person",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, start, call, move, live",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "walk",
                  "walk"
                ],
                [
                  "walkest",
                  "walk"
                ],
                [
                  "walks / walketh",
                  "walk"
                ]
              ]
            },
            {
              "name": "regular -es",
              "description": "sibilant ending (s, sh, ch, x, z)",
              "dimmed": false,
              "verbs": "watch, wash, push, fix, miss, touch, catch, pass, buzz, mix",
              "example": "watch (to watch)",
              "conjugations": [
                [
                  "watch",
                  "watch"
                ],
                [
                  "watchest",
                  "watch"
                ],
                [
                  "watches / watcheth",
                  "watch"
                ]
              ]
            },
            {
              "name": "regular -ies",
              "description": "consonant + y (y → ies)",
              "dimmed": false,
              "verbs": "carry, try, study, hurry, worry, copy, cry, fly, dry, marry",
              "example": "carry (to carry)",
              "conjugations": [
                [
                  "carry",
                  "carry"
                ],
                [
                  "carriest",
                  "carry"
                ],
                [
                  "carries / carrieth",
                  "carry"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vowel change",
              "description": "irregular in past only",
              "dimmed": true,
              "verbs": "sing, drink, swim, ring, begin, run, come, give, take, break",
              "example": "sing (to sing)",
              "conjugations": [
                [
                  "sing",
                  "sing"
                ],
                [
                  "singest",
                  "sing"
                ],
                [
                  "sings / singeth",
                  "sing"
                ]
              ]
            },
            {
              "name": "consonant change",
              "description": "irregular in past only",
              "dimmed": true,
              "verbs": "build, send, spend, lend, bend, feel, keep, sleep, leave, mean",
              "example": "build (to build)",
              "conjugations": [
                [
                  "build",
                  "build"
                ],
                [
                  "buildest",
                  "build"
                ],
                [
                  "builds / buildeth",
                  "build"
                ]
              ]
            },
            {
              "name": "no change",
              "description": "irregular in past only",
              "dimmed": true,
              "verbs": "cut, put, set, let, shut, hit, split, quit, cost, hurt",
              "example": "cut (to cut)",
              "conjugations": [
                [
                  "cut",
                  "cut"
                ],
                [
                  "cuttest",
                  "cut"
                ],
                [
                  "cuts / cutteth",
                  "cut"
                ]
              ]
            },
            {
              "name": "suppletive",
              "description": "irregular in past only",
              "dimmed": true,
              "verbs": "go, think, buy, bring, seek, teach, catch",
              "example": "go (to go)",
              "conjugations": [
                [
                  "go",
                  "go"
                ],
                [
                  "goest",
                  "go"
                ],
                [
                  "goes / goeth",
                  "go"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "am",
                  "are"
                ],
                [
                  "art",
                  "are"
                ],
                [
                  "is",
                  "are"
                ]
              ]
            },
            {
              "name": "have",
              "description": "irregular 3rd person (has)",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                [
                  "have",
                  "have"
                ],
                [
                  "hast",
                  "have"
                ],
                [
                  "has / hath",
                  "have"
                ]
              ]
            },
            {
              "name": "do",
              "description": "irregular 3rd person (does)",
              "dimmed": false,
              "verbs": "do",
              "example": "do (to do)",
              "conjugations": [
                [
                  "do",
                  "do"
                ],
                [
                  "dost / doest",
                  "do"
                ],
                [
                  "does / doth",
                  "do"
                ]
              ]
            },
            {
              "name": "will",
              "description": "modal (no -s, no thou form)",
              "dimmed": false,
              "verbs": "will, shall, can, may, must, might, could, would, should",
              "example": "will (auxiliary)",
              "conjugations": [
                [
                  "will",
                  "will"
                ],
                [
                  "wilt",
                  "will"
                ],
                [
                  "will",
                  "will"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes habitual actions, general truths, and current states. 'I walk to work every day.'",
      "extra": "<strong>Stative verbs</strong> — these verbs describe states rather than actions and typically cannot use the continuous form:<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Category</th><th>Verbs</th></tr></thead><tbody><tr><td>Mental</td><td>know, believe, think, understand, remember, forget, suppose, realize</td></tr><tr><td>Emotional</td><td>love, hate, want, need, prefer, like, wish, fear</td></tr><tr><td>Possession</td><td>have, own, possess, belong, contain, consist</td></tr><tr><td>Perception</td><td>see, hear, smell, taste, feel (involuntary)</td></tr><tr><td>Other</td><td>be, seem, appear, mean, cost, weigh, owe</td></tr></tbody></table>"
    },
    "present_continuous": {
      "label": "Present Continuous",
      "icon": "bi-arrow-repeat",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "am walking",
                "are walking"
              ],
              [
                "art walking",
                "are walking"
              ],
              [
                "is walking",
                "are walking"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular -ing",
              "description": "standard",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, start, call, move, think",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "am walking",
                  "are walking"
                ],
                [
                  "art walking",
                  "are walking"
                ],
                [
                  "is walking",
                  "are walking"
                ]
              ]
            },
            {
              "name": "drop -e + -ing",
              "description": "silent e dropped",
              "dimmed": false,
              "verbs": "make, come, give, take, live, write, drive, ride, hope, dance",
              "example": "make (to make)",
              "conjugations": [
                [
                  "am making",
                  "are making"
                ],
                [
                  "art making",
                  "are making"
                ],
                [
                  "is making",
                  "are making"
                ]
              ]
            },
            {
              "name": "double consonant + -ing",
              "description": "short vowel + single consonant",
              "dimmed": false,
              "verbs": "run, sit, get, put, cut, hit, swim, stop, begin, plan",
              "example": "run (to run)",
              "conjugations": [
                [
                  "am running",
                  "are running"
                ],
                [
                  "art running",
                  "are running"
                ],
                [
                  "is running",
                  "are running"
                ]
              ]
            },
            {
              "name": "-ie → -ying",
              "description": "ie changes to y",
              "dimmed": false,
              "verbs": "die, lie, tie",
              "example": "die (to die)",
              "conjugations": [
                [
                  "am dying",
                  "are dying"
                ],
                [
                  "art dying",
                  "are dying"
                ],
                [
                  "is dying",
                  "are dying"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "irregular verbs",
              "description": "regular -ing formation",
              "dimmed": true,
              "verbs": "sing, drink, build, go, think, buy, break, speak, choose, write",
              "example": "sing (to sing)",
              "conjugations": [
                [
                  "am singing",
                  "are singing"
                ],
                [
                  "art singing",
                  "are singing"
                ],
                [
                  "is singing",
                  "are singing"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "being",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "am being",
                  "are being"
                ],
                [
                  "art being",
                  "are being"
                ],
                [
                  "is being",
                  "are being"
                ]
              ]
            },
            {
              "name": "have",
              "description": "having",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                [
                  "am having",
                  "are having"
                ],
                [
                  "art having",
                  "are having"
                ],
                [
                  "is having",
                  "are having"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes actions happening right now or temporary situations. 'I am walking to the store.'"
    },
    "present_perfect": {
      "label": "Present Perfect",
      "icon": "bi-check2",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "have walked",
                "have walked"
              ],
              [
                "hast walked",
                "have walked"
              ],
              [
                "has / hath walked",
                "have walked"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular -ed",
              "description": "have/has + -ed",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, start, call, move, live",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "have walked",
                  "have walked"
                ],
                [
                  "hast walked",
                  "have walked"
                ],
                [
                  "has / hath walked",
                  "have walked"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vowel change",
              "description": "irregular past participle",
              "dimmed": false,
              "verbs": "sing → sung, drink → drunk, swim → swum, ring → rung, begin → begun, run → run, come → come, give → given",
              "example": "sing (to sing)",
              "conjugations": [
                [
                  "have sung",
                  "have sung"
                ],
                [
                  "hast sung",
                  "have sung"
                ],
                [
                  "has / hath sung",
                  "have sung"
                ]
              ]
            },
            {
              "name": "consonant change",
              "description": "irregular past participle",
              "dimmed": false,
              "verbs": "build → built, send → sent, feel → felt, keep → kept, sleep → slept, leave → left, mean → meant",
              "example": "build (to build)",
              "conjugations": [
                [
                  "have built",
                  "have built"
                ],
                [
                  "hast built",
                  "have built"
                ],
                [
                  "has / hath built",
                  "have built"
                ]
              ]
            },
            {
              "name": "-en participle",
              "description": "added -en/-n",
              "dimmed": false,
              "verbs": "break → broken, speak → spoken, choose → chosen, take → taken, give → given, write → written, drive → driven, ride → ridden",
              "example": "break (to break)",
              "conjugations": [
                [
                  "have broken",
                  "have broken"
                ],
                [
                  "hast broken",
                  "have broken"
                ],
                [
                  "has / hath broken",
                  "have broken"
                ]
              ]
            },
            {
              "name": "suppletive",
              "description": "completely different participle",
              "dimmed": false,
              "verbs": "go → gone, think → thought, buy → bought, bring → brought, seek → sought, teach → taught",
              "example": "go (to go)",
              "conjugations": [
                [
                  "have gone",
                  "have gone"
                ],
                [
                  "hast gone",
                  "have gone"
                ],
                [
                  "has / hath gone",
                  "have gone"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "have/has been",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "have been",
                  "have been"
                ],
                [
                  "hast been",
                  "have been"
                ],
                [
                  "has / hath been",
                  "have been"
                ]
              ]
            },
            {
              "name": "have",
              "description": "have/has had",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                [
                  "have had",
                  "have had"
                ],
                [
                  "hast had",
                  "have had"
                ],
                [
                  "has / hath had",
                  "have had"
                ]
              ]
            },
            {
              "name": "do",
              "description": "have/has done",
              "dimmed": false,
              "verbs": "do",
              "example": "do (to do)",
              "conjugations": [
                [
                  "have done",
                  "have done"
                ],
                [
                  "hast done",
                  "have done"
                ],
                [
                  "has / hath done",
                  "have done"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Connects past actions to the present — experiences, changes, or unfinished time periods. 'I have walked here before.'",
      "extra": "<strong>Present Perfect vs. Past Simple</strong><br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Use Present Perfect when...</th><th>Use Past Simple when...</th></tr></thead><tbody><tr><td>No specific time mentioned<br><em>I have visited Paris</em></td><td>Specific time stated<br><em>I visited Paris in 2019</em></td></tr><tr><td>Time period is unfinished<br><em>I have eaten today</em></td><td>Time period is finished<br><em>I ate yesterday</em></td></tr><tr><td>Result matters now<br><em>I have lost my keys</em> (still lost)</td><td>Event is over<br><em>I lost my keys</em> (found them)</td></tr><tr><td>With ever/never/yet/already<br><em>Have you ever been?</em></td><td>With ago/last/when<br><em>When did you go?</em></td></tr></tbody></table>"
    },
    "past_simple": {
      "label": "Past Simple",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "walked",
                "walked"
              ],
              [
                "walkedst",
                "walked"
              ],
              [
                "walked",
                "walked"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular -ed",
              "description": "standard",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, start, call, move, live",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "walked",
                  "walked"
                ],
                [
                  "walkedst",
                  "walked"
                ],
                [
                  "walked",
                  "walked"
                ]
              ]
            },
            {
              "name": "regular -d",
              "description": "ends in -e",
              "dimmed": true,
              "verbs": "hope, dance, love, like, use, close, change, name, save, care",
              "example": "hope (to hope)",
              "conjugations": [
                [
                  "hoped",
                  "hoped"
                ],
                [
                  "hopedst",
                  "hoped"
                ],
                [
                  "hoped",
                  "hoped"
                ]
              ]
            },
            {
              "name": "regular -ied",
              "description": "consonant + y (y → ied)",
              "dimmed": false,
              "verbs": "carry, try, study, hurry, worry, copy, cry, dry, marry, reply",
              "example": "carry (to carry)",
              "conjugations": [
                [
                  "carried",
                  "carried"
                ],
                [
                  "carriedst",
                  "carried"
                ],
                [
                  "carried",
                  "carried"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vowel change",
              "description": "stem vowel changes",
              "dimmed": false,
              "verbs": "sing → sang, drink → drank, swim → swam, ring → rang, begin → began, run → ran, come → came, give → gave",
              "example": "sing (to sing)",
              "conjugations": [
                [
                  "sang",
                  "sang"
                ],
                [
                  "sangst",
                  "sang"
                ],
                [
                  "sang",
                  "sang"
                ]
              ]
            },
            {
              "name": "consonant change",
              "description": "final consonant changes",
              "dimmed": false,
              "verbs": "build → built, send → sent, spend → spent, lend → lent, feel → felt, keep → kept, sleep → slept, leave → left",
              "example": "build (to build)",
              "conjugations": [
                [
                  "built",
                  "built"
                ],
                [
                  "builtst",
                  "built"
                ],
                [
                  "built",
                  "built"
                ]
              ]
            },
            {
              "name": "no change",
              "description": "same form as present",
              "dimmed": false,
              "verbs": "cut, put, set, let, shut, hit, split, quit, cost, hurt",
              "example": "cut (to cut)",
              "conjugations": [
                [
                  "cut",
                  "cut"
                ],
                [
                  "cuttest",
                  "cut"
                ],
                [
                  "cut",
                  "cut"
                ]
              ]
            },
            {
              "name": "suppletive",
              "description": "completely different stem",
              "dimmed": false,
              "verbs": "go → went, think → thought, buy → bought, bring → brought, seek → sought, teach → taught, catch → caught",
              "example": "go (to go)",
              "conjugations": [
                [
                  "went",
                  "went"
                ],
                [
                  "wentst",
                  "went"
                ],
                [
                  "went",
                  "went"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "was / were",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "was",
                  "were"
                ],
                [
                  "wast / wert",
                  "were"
                ],
                [
                  "was",
                  "were"
                ]
              ]
            },
            {
              "name": "have",
              "description": "had",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                [
                  "had",
                  "had"
                ],
                [
                  "hadst",
                  "had"
                ],
                [
                  "had",
                  "had"
                ]
              ]
            },
            {
              "name": "do",
              "description": "did",
              "dimmed": false,
              "verbs": "do",
              "example": "do (to do)",
              "conjugations": [
                [
                  "did",
                  "did"
                ],
                [
                  "didst",
                  "did"
                ],
                [
                  "did",
                  "did"
                ]
              ]
            },
            {
              "name": "modals",
              "description": "past forms",
              "dimmed": false,
              "verbs": "will → would, shall → should, can → could, may → might",
              "example": "will → would",
              "conjugations": [
                [
                  "would",
                  "would"
                ],
                [
                  "wouldst",
                  "would"
                ],
                [
                  "would",
                  "would"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes completed actions at a specific point in the past. 'I walked yesterday.'"
    },
    "past_continuous": {
      "label": "Past Continuous",
      "icon": "bi-arrow-repeat",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "was walking",
                "were walking"
              ],
              [
                "wast walking",
                "were walking"
              ],
              [
                "was walking",
                "were walking"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "was/were + -ing",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, start, call, move, live",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "was walking",
                  "were walking"
                ],
                [
                  "wast walking",
                  "were walking"
                ],
                [
                  "was walking",
                  "were walking"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "irregular",
              "description": "regular -ing (irregular only in past simple)",
              "dimmed": true,
              "verbs": "sing, drink, build, go, think, buy, break, speak",
              "example": "sing (to sing)",
              "conjugations": [
                [
                  "was singing",
                  "were singing"
                ],
                [
                  "wast singing",
                  "were singing"
                ],
                [
                  "was singing",
                  "were singing"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "was/were being",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "was being",
                  "were being"
                ],
                [
                  "wast being",
                  "were being"
                ],
                [
                  "was being",
                  "were being"
                ]
              ]
            },
            {
              "name": "have",
              "description": "was/were having",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                [
                  "was having",
                  "were having"
                ],
                [
                  "wast having",
                  "were having"
                ],
                [
                  "was having",
                  "were having"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes actions in progress at a specific moment in the past. 'I was walking when it started to rain.'"
    },
    "past_perfect": {
      "label": "Past Perfect",
      "icon": "bi-check2-all",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "had walked",
                "had walked"
              ],
              [
                "hadst walked",
                "had walked"
              ],
              [
                "had walked",
                "had walked"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "had + -ed (all regular)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, start, call, move, live",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "had walked",
                  "had walked"
                ],
                [
                  "hadst walked",
                  "had walked"
                ],
                [
                  "had walked",
                  "had walked"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "irregular participle",
              "description": "had + irregular participle",
              "dimmed": false,
              "verbs": "sing → sung, break → broken, go → gone, take → taken, write → written, speak → spoken",
              "example": "go (to go)",
              "conjugations": [
                [
                  "had gone",
                  "had gone"
                ],
                [
                  "hadst gone",
                  "had gone"
                ],
                [
                  "had gone",
                  "had gone"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "had been",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "had been",
                  "had been"
                ],
                [
                  "hadst been",
                  "had been"
                ],
                [
                  "had been",
                  "had been"
                ]
              ]
            },
            {
              "name": "have",
              "description": "had had",
              "dimmed": false,
              "verbs": "have",
              "example": "have (to have)",
              "conjugations": [
                [
                  "had had",
                  "had had"
                ],
                [
                  "hadst had",
                  "had had"
                ],
                [
                  "had had",
                  "had had"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes an action completed before another past action. 'I had walked there before she arrived.'"
    },
    "past_perfect_continuous": {
      "label": "Past Perfect Continuous",
      "icon": "bi-arrow-repeat",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "had been walking",
                "had been walking"
              ],
              [
                "hadst been walking",
                "had been walking"
              ],
              [
                "had been walking",
                "had been walking"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "had been + -ing (all regular)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, start, call, move, live",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "had been walking",
                  "had been walking"
                ],
                [
                  "hadst been walking",
                  "had been walking"
                ],
                [
                  "had been walking",
                  "had been walking"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "irregular",
              "description": "regular formation (had been + -ing)",
              "dimmed": true,
              "verbs": "sing, drink, build, go, think, break",
              "example": "sing (to sing)",
              "conjugations": [
                [
                  "had been singing",
                  "had been singing"
                ],
                [
                  "hadst been singing",
                  "had been singing"
                ],
                [
                  "had been singing",
                  "had been singing"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": []
        }
      ],
      "description": "Describes an ongoing action that was happening before another past event. 'I had been walking for an hour when it rained.'"
    },
    "future_simple": {
      "label": "Future Simple",
      "icon": "bi-arrow-right",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "will walk",
                "will walk"
              ],
              [
                "wilt walk",
                "will walk"
              ],
              [
                "will walk",
                "will walk"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "will + base (all regular)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, start, call, move, live",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "will walk",
                  "will walk"
                ],
                [
                  "wilt walk",
                  "will walk"
                ],
                [
                  "will walk",
                  "will walk"
                ]
              ]
            },
            {
              "name": "shall",
              "description": "archaic 1st person",
              "dimmed": false,
              "verbs": "shall (1st person alternative)",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "shall walk",
                  "shall walk"
                ],
                [
                  "shalt walk",
                  "shall walk"
                ],
                [
                  "shall walk",
                  "shall walk"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "irregular",
              "description": "will + base (all regular in future)",
              "dimmed": true,
              "verbs": "sing, drink, build, go, think, buy, break",
              "example": "go (to go)",
              "conjugations": [
                [
                  "will go",
                  "will go"
                ],
                [
                  "wilt go",
                  "will go"
                ],
                [
                  "will go",
                  "will go"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "will be",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "will be",
                  "will be"
                ],
                [
                  "wilt be",
                  "will be"
                ],
                [
                  "will be",
                  "will be"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes future actions, predictions, spontaneous decisions, and promises. 'I will walk there tomorrow.'"
    },
    "future_continuous": {
      "label": "Future Continuous",
      "icon": "bi-arrow-repeat",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "will be walking",
                "will be walking"
              ],
              [
                "wilt be walking",
                "will be walking"
              ],
              [
                "will be walking",
                "will be walking"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "will be + -ing (all regular)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, sing, go, break",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "will be walking",
                  "will be walking"
                ],
                [
                  "wilt be walking",
                  "will be walking"
                ],
                [
                  "will be walking",
                  "will be walking"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": []
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": []
        }
      ],
      "description": "Describes actions that will be in progress at a future time. 'I will be walking at noon.'"
    },
    "future_perfect": {
      "label": "Future Perfect",
      "icon": "bi-arrow-right-circle",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "will have walked",
                "will have walked"
              ],
              [
                "wilt have walked",
                "will have walked"
              ],
              [
                "will have walked",
                "will have walked"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "will have + -ed (all regular)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "will have walked",
                  "will have walked"
                ],
                [
                  "wilt have walked",
                  "will have walked"
                ],
                [
                  "will have walked",
                  "will have walked"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "irregular participle",
              "description": "will have + irregular participle",
              "dimmed": false,
              "verbs": "go → gone, break → broken, sing → sung, take → taken, write → written",
              "example": "go (to go)",
              "conjugations": [
                [
                  "will have gone",
                  "will have gone"
                ],
                [
                  "wilt have gone",
                  "will have gone"
                ],
                [
                  "will have gone",
                  "will have gone"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "will have been",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "will have been",
                  "will have been"
                ],
                [
                  "wilt have been",
                  "will have been"
                ],
                [
                  "will have been",
                  "will have been"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes actions that will be completed before a specific future point. 'I will have walked 10 miles by then.'"
    },
    "future_perfect_continuous": {
      "label": "Future Perfect Continuous",
      "icon": "bi-arrow-repeat",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "will have been walking",
                "will have been walking"
              ],
              [
                "wilt have been walking",
                "will have been walking"
              ],
              [
                "will have been walking",
                "will have been walking"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "will have been + -ing (all regular)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, sing, go",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "will have been walking",
                  "will have been walking"
                ],
                [
                  "wilt have been walking",
                  "will have been walking"
                ],
                [
                  "will have been walking",
                  "will have been walking"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": []
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": []
        }
      ],
      "description": "Describes the duration of an action up to a future point. 'I will have been walking for two hours by then.'"
    },
    "cond_simple": {
      "label": "Conditional",
      "icon": "bi-question-circle",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "would walk",
                "would walk"
              ],
              [
                "wouldst walk",
                "would walk"
              ],
              [
                "would walk",
                "would walk"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "would + base (all regular)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, sing, go, break",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "would walk",
                  "would walk"
                ],
                [
                  "wouldst walk",
                  "would walk"
                ],
                [
                  "would walk",
                  "would walk"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": []
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "would be",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "would be",
                  "would be"
                ],
                [
                  "wouldst be",
                  "would be"
                ],
                [
                  "would be",
                  "would be"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes what would happen under a hypothetical condition. Used for polite requests and imagined scenarios.",
      "extra": "<table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Modal</th><th>Nuance</th><th>Example</th></tr></thead><tbody><tr><td>would</td><td>neutral/hypothetical</td><td>I would walk</td></tr><tr><td>could</td><td>ability/possibility</td><td>I could walk</td></tr><tr><td>should</td><td>obligation/expectation</td><td>I should walk</td></tr><tr><td>might</td><td>uncertain possibility</td><td>I might walk</td></tr><tr><td>may</td><td>permission/possibility (formal)</td><td>I may walk</td></tr><tr><td>ought to</td><td>moral obligation</td><td>I ought to walk</td></tr></tbody></table>"
    },
    "cond_perfect": {
      "label": "Conditional Perfect",
      "icon": "bi-question-circle-fill",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "would have walked",
                "would have walked"
              ],
              [
                "wouldst have walked",
                "would have walked"
              ],
              [
                "would have walked",
                "would have walked"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "would have + -ed (all regular)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "would have walked",
                  "would have walked"
                ],
                [
                  "wouldst have walked",
                  "would have walked"
                ],
                [
                  "would have walked",
                  "would have walked"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "irregular participle",
              "description": "would have + irregular participle",
              "dimmed": false,
              "verbs": "go → gone, break → broken, sing → sung, take → taken",
              "example": "go (to go)",
              "conjugations": [
                [
                  "would have gone",
                  "would have gone"
                ],
                [
                  "wouldst have gone",
                  "would have gone"
                ],
                [
                  "would have gone",
                  "would have gone"
                ]
              ]
            }
          ]
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "would have been",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "would have been",
                  "would have been"
                ],
                [
                  "wouldst have been",
                  "would have been"
                ],
                [
                  "would have been",
                  "would have been"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Describes what would have happened if conditions had been different. Expresses regret or unrealized possibilities.",
      "extra": "<table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Modal</th><th>Nuance</th><th>Example</th></tr></thead><tbody><tr><td>would</td><td>neutral/hypothetical</td><td>I would have walked</td></tr><tr><td>could</td><td>ability/possibility</td><td>I could have walked</td></tr><tr><td>should</td><td>obligation/expectation</td><td>I should have walked</td></tr><tr><td>might</td><td>uncertain possibility</td><td>I might have walked</td></tr><tr><td>may</td><td>permission/possibility (formal)</td><td>I may have walked</td></tr><tr><td>ought to</td><td>moral obligation</td><td>I ought to have walked</td></tr></tbody></table>"
    },
    "subj_present": {
      "label": "Present Subjunctive",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "walk",
                "walk"
              ],
              [
                "walk",
                "walk"
              ],
              [
                "walk",
                "walk"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "bare infinitive for all persons (no -s)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, go, sing, take",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "walk",
                  "walk"
                ],
                [
                  "walk",
                  "walk"
                ],
                [
                  "walk",
                  "walk"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": []
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "be (not am/is/are)",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "be",
                  "be"
                ],
                [
                  "be",
                  "be"
                ],
                [
                  "be",
                  "be"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Expresses wishes, demands, suggestions, or doubts about present or future situations. Often follows 'que' (that)."
    },
    "subj_past": {
      "label": "Past Subjunctive",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "walked",
                "walked"
              ],
              [
                "walked",
                "walked"
              ],
              [
                "walked",
                "walked"
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "same as past simple (no distinction)",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "walked",
                  "walked"
                ],
                [
                  "walked",
                  "walked"
                ],
                [
                  "walked",
                  "walked"
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": []
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "were for all persons (not was)",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "were",
                  "were"
                ],
                [
                  "wert",
                  "were"
                ],
                [
                  "were",
                  "were"
                ]
              ]
            }
          ]
        }
      ],
      "description": "Expresses doubt or emotion about completed actions, or hypothetical past situations.",
      "extra": "<strong>The \"were\" question</strong><br><br>Prescriptive grammar requires <em>were</em> for all persons in the past subjunctive:<br>• \"If I <em>were</em> rich...\" (not \"was\")<br>• \"I wish he <em>were</em> here\" (not \"was\")<br><br>In practice, \"if I was\" is extremely common in informal speech and increasingly accepted. However, \"if I were\" remains standard in formal writing and is the only correct form in fixed expressions like \"as it were\" and \"if I were you.\""
    },
    "imperative": {
      "label": "Imperative",
      "icon": "bi-exclamation-circle",
      "columns": [
        {
          "label": "Regular",
          "regular": {
            "name": "regular",
            "example": "walk (to walk)",
            "conjugations": [
              [
                "walk",
                "walk"
              ],
              [
                "let me walk",
                "let us walk"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": [
            {
              "name": "regular",
              "description": "bare infinitive",
              "dimmed": true,
              "verbs": "walk, talk, play, work, help, look, go, sing, take",
              "example": "walk (to walk)",
              "conjugations": [
                [
                  "walk",
                  "walk"
                ],
                [
                  "let me walk",
                  "let us walk"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": []
        },
        {
          "label": "Auxiliary / Modal",
          "regular": null,
          "patterns": [
            {
              "name": "be",
              "description": "be",
              "dimmed": false,
              "verbs": "be",
              "example": "be (to be)",
              "conjugations": [
                [
                  "be",
                  "be"
                ],
                [
                  "let me be",
                  "let us be"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ]
        }
      ],
      "description": "Gives direct commands, instructions, or requests."
    }
  },
  "chart": {
    "columns": ["Past", "Present", "Future", "Conditional"],
    "rows": ["Simple", "Perfect", "Continuous", "Perfect Continuous"],
    "groups": ["Regular: walk", "Irregular: go", "Modal: can"],
    "cells": [
      [
        { "form": "Past Simple", "rule": "verb-ed / irregular",
          "er": [["I walked", "we walked"], ["you walked", "you walked"], ["he walked", "they walked"]],
          "ir": [["I went", "we went"], ["you went", "you went"], ["he went", "they went"]],
          "re": [["I could", "we could"], ["you could", "you could"], ["he could", "they could"]] },
        { "form": "Present Simple", "rule": "verb / verb-s",
          "er": [["I walk", "we walk"], ["you walk", "you walk"], ["he walks", "they walk"]],
          "ir": [["I go", "we go"], ["you go", "you go"], ["he goes", "they go"]],
          "re": [["I can", "we can"], ["you can", "you can"], ["he can", "they can"]] },
        { "form": "Future Simple", "rule": "will + verb",
          "er": [["I will walk", "we will walk"], ["you will walk", "you will walk"], ["he will walk", "they will walk"]],
          "ir": [["I will go", "we will go"], ["you will go", "you will go"], ["he will go", "they will go"]],
          "re": [["I will be able", "we will be able"], ["you will be able", "you will be able"], ["he will be able", "they will be able"]] },
        { "form": "Conditional", "rule": "would + verb",
          "er": [["I would walk", "we would walk"], ["you would walk", "you would walk"], ["he would walk", "they would walk"]],
          "ir": [["I would go", "we would go"], ["you would go", "you would go"], ["he would go", "they would go"]],
          "re": [["I could", "we could"], ["you could", "you could"], ["he could", "they could"]] }
      ],
      [
        { "form": "Past Perfect", "rule": "had + past participle",
          "er": [["I had walked", "we had walked"], ["you had walked", "you had walked"], ["he had walked", "they had walked"]],
          "ir": [["I had gone", "we had gone"], ["you had gone", "you had gone"], ["he had gone", "they had gone"]],
          "re": [["I had been able", "we had been able"], ["you had been able", "you had been able"], ["he had been able", "they had been able"]] },
        { "form": "Present Perfect", "rule": "have/has + past participle",
          "er": [["I have walked", "we have walked"], ["you have walked", "you have walked"], ["he has walked", "they have walked"]],
          "ir": [["I have gone", "we have gone"], ["you have gone", "you have gone"], ["he has gone", "they have gone"]],
          "re": [["I have been able", "we have been able"], ["you have been able", "you have been able"], ["he has been able", "they have been able"]] },
        { "form": "Future Perfect", "rule": "will have + past participle",
          "er": [["I will have walked", "we will have walked"], ["you will have walked", "you will have walked"], ["he will have walked", "they will have walked"]],
          "ir": [["I will have gone", "we will have gone"], ["you will have gone", "you will have gone"], ["he will have gone", "they will have gone"]],
          "re": [["I will have been able", "we will have been able"], ["you will have been able", "you will have been able"], ["he will have been able", "they will have been able"]] },
        { "form": "Cond. Perfect", "rule": "would have + past participle",
          "er": [["I would have walked", "we would have walked"], ["you would have walked", "you would have walked"], ["he would have walked", "they would have walked"]],
          "ir": [["I would have gone", "we would have gone"], ["you would have gone", "you would have gone"], ["he would have gone", "they would have gone"]],
          "re": [["I would have been able", "we would have been able"], ["you would have been able", "you would have been able"], ["he would have been able", "they would have been able"]] }
      ],
      [
        { "form": "Past Continuous", "rule": "was/were + verb-ing",
          "er": [["I was walking", "we were walking"], ["you were walking", "you were walking"], ["he was walking", "they were walking"]],
          "ir": [["I was going", "we were going"], ["you were going", "you were going"], ["he was going", "they were going"]],
          "re": null },
        { "form": "Present Continuous", "rule": "am/is/are + verb-ing",
          "er": [["I am walking", "we are walking"], ["you are walking", "you are walking"], ["he is walking", "they are walking"]],
          "ir": [["I am going", "we are going"], ["you are going", "you are going"], ["he is going", "they are going"]],
          "re": null },
        { "form": "Future Continuous", "rule": "will be + verb-ing",
          "er": [["I will be walking", "we will be walking"], ["you will be walking", "you will be walking"], ["he will be walking", "they will be walking"]],
          "ir": [["I will be going", "we will be going"], ["you will be going", "you will be going"], ["he will be going", "they will be going"]],
          "re": null },
        { "form": "Cond. Continuous", "rule": "would be + verb-ing",
          "er": [["I would be walking", "we would be walking"], ["you would be walking", "you would be walking"], ["he would be walking", "they would be walking"]],
          "ir": [["I would be going", "we would be going"], ["you would be going", "you would be going"], ["he would be going", "they would be going"]],
          "re": null }
      ],
      [
        { "form": "Past Perf. Cont.", "rule": "had been + verb-ing",
          "er": [["I had been walking", "we had been walking"], ["you had been walking", "you had been walking"], ["he had been walking", "they had been walking"]],
          "ir": [["I had been going", "we had been going"], ["you had been going", "you had been going"], ["he had been going", "they had been going"]],
          "re": null },
        { "form": "Pres. Perf. Cont.", "rule": "have/has been + verb-ing",
          "er": [["I have been walking", "we have been walking"], ["you have been walking", "you have been walking"], ["he has been walking", "they have been walking"]],
          "ir": [["I have been going", "we have been going"], ["you have been going", "you have been going"], ["he has been going", "they have been going"]],
          "re": null },
        { "form": "Fut. Perf. Cont.", "rule": "will have been + verb-ing",
          "er": [["I will have been walking", "we will have been walking"], ["you will have been walking", "you will have been walking"], ["he will have been walking", "they will have been walking"]],
          "ir": [["I will have been going", "we will have been going"], ["you will have been going", "you will have been going"], ["he will have been going", "they will have been going"]],
          "re": null },
        { "form": "Cond. Perf. Cont.", "rule": "would have been + verb-ing",
          "er": [["I would have been walking", "we would have been walking"], ["you would have been walking", "you would have been walking"], ["he would have been walking", "they would have been walking"]],
          "ir": [["I would have been going", "we would have been going"], ["you would have been going", "you would have been going"], ["he would have been going", "they would have been going"]],
          "re": null }
      ]
    ]
  }
};
