var germanData = {
  "language": "German",
  "title": "German Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" }
  ],
  "theme": {
    "primary": "#546e7a",
    "secondary": "#37474f",
    "tableHeader": "#607d8b",
    "stripedRow": "#eceff1",
    "border": "#b0bec5"
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
      "icon": "bi-question-circle",
      "key": "subjunctive",
      "description": "Konjunktiv I for indirect speech, Konjunktiv II for hypothetical/unreal conditions and polite requests."
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
          "perfekt",
          "praeteritum",
          "plusquamperfekt"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "praesens"
        ]
      },
      {
        "label": "Future",
        "icon": "bi-arrow-right",
        "tenses": [
          "futur_i",
          "futur_ii"
        ]
      }
    ],
    "subjunctive": [
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "konjunktiv_i"
        ]
      },
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "konjunktiv_ii",
          "konjunktiv_ii_wuerde"
        ]
      }
    ],
    "imperative": [
      {
        "label": "Imperative",
        "icon": "bi-exclamation-circle",
        "tenses": [
          "imperativ"
        ]
      }
    ]
  },
  "tenses": {
    "praesens": {
      "label": "Präsens (Present)",
      "icon": "bi-record-circle",
      "description": "Describes current states, habitual actions, general truths, and scheduled future events.",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak verb",
            "example": "machen (to make)",
            "conjugations": [
              ["ich mache", "wir machen"],
              ["du machst", "ihr macht"],
              ["er/sie macht", "sie/Sie machen"]
            ]
          },
          "patterns": [
            {
              "name": "weak -en",
              "description": "standard weak conjugation",
              "dimmed": true,
              "verbs": "machen, spielen, lernen, wohnen, kaufen, fragen, sagen, zeigen, hören, brauchen",
              "example": "spielen (to play)",
              "conjugations": [
                ["ich spiele", "wir spielen"],
                ["du spielst", "ihr spielt"],
                ["er/sie spielt", "sie/Sie spielen"]
              ]
            },
            {
              "name": "weak -eten/-aten",
              "description": "stem ends in -t/-d: extra -e- before endings",
              "dimmed": false,
              "verbs": "arbeiten, warten, reden, finden, bilden, öffnen, rechnen, atmen",
              "example": "arbeiten (to work)",
              "conjugations": [
                ["ich arbeite", "wir arbeiten"],
                ["du arbeitest", "ihr arbeitet"],
                ["er/sie arbeitet", "sie/Sie arbeiten"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "e → i",
              "description": "stem vowel e changes to i in 2s/3s",
              "dimmed": false,
              "verbs": "geben, sprechen, helfen, nehmen, treffen, werfen, brechen, stechen",
              "example": "geben (to give)",
              "conjugations": [
                ["ich gebe", "wir geben"],
                ["du gibst", "ihr gebt"],
                ["er/sie gibt", "sie/Sie geben"]
              ]
            },
            {
              "name": "e → ie",
              "description": "stem vowel e changes to ie in 2s/3s",
              "dimmed": false,
              "verbs": "lesen, sehen, empfehlen, stehlen, befehlen, geschehen",
              "example": "lesen (to read)",
              "conjugations": [
                ["ich lese", "wir lesen"],
                ["du liest", "ihr lest"],
                ["er/sie liest", "sie/Sie lesen"]
              ]
            },
            {
              "name": "a → ä",
              "description": "stem vowel a changes to ä in 2s/3s",
              "dimmed": false,
              "verbs": "fahren, tragen, schlafen, laufen, fallen, halten, waschen, wachsen, laden, graben",
              "example": "fahren (to drive)",
              "conjugations": [
                ["ich fahre", "wir fahren"],
                ["du fährst", "ihr fahrt"],
                ["er/sie fährt", "sie/Sie fahren"]
              ]
            },
            {
              "name": "no vowel change",
              "description": "strong verbs regular in present",
              "dimmed": true,
              "verbs": "schreiben, finden, trinken, singen, schwimmen, fliegen, ziehen, rufen, schließen",
              "example": "schreiben (to write)",
              "conjugations": [
                ["ich schreibe", "wir schreiben"],
                ["du schreibst", "ihr schreibt"],
                ["er/sie schreibt", "sie/Sie schreiben"]
              ]
            }
          ]
        },
        {
          "label": "Irregular / Mixed",
          "regular": null,
          "patterns": [
            {
              "name": "sein",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "sein",
              "example": "sein (to be)",
              "conjugations": [
                ["ich bin", "wir sind"],
                ["du bist", "ihr seid"],
                ["er/sie ist", "sie/Sie sind"]
              ]
            },
            {
              "name": "haben",
              "description": "irregular contraction",
              "dimmed": false,
              "verbs": "haben",
              "example": "haben (to have)",
              "conjugations": [
                ["ich habe", "wir haben"],
                ["du hast", "ihr habt"],
                ["er/sie hat", "sie/Sie haben"]
              ]
            },
            {
              "name": "werden",
              "description": "irregular stem change",
              "dimmed": false,
              "verbs": "werden",
              "example": "werden (to become)",
              "conjugations": [
                ["ich werde", "wir werden"],
                ["du wirst", "ihr werdet"],
                ["er/sie wird", "sie/Sie werden"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "vowel change in singular, no ending in 1s/3s",
              "dimmed": false,
              "verbs": "können, müssen, dürfen, sollen, wollen, mögen",
              "example": "können (to be able)",
              "conjugations": [
                ["ich kann", "wir können"],
                ["du kannst", "ihr könnt"],
                ["er/sie kann", "sie/Sie können"]
              ]
            },
            {
              "name": "wissen",
              "description": "mixed verb — modal-like present",
              "dimmed": false,
              "verbs": "wissen",
              "example": "wissen (to know)",
              "conjugations": [
                ["ich weiß", "wir wissen"],
                ["du weißt", "ihr wisst"],
                ["er/sie weiß", "sie/Sie wissen"]
              ]
            },
            {
              "name": "gehen / stehen / tun",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gehen, stehen, tun, bringen, denken",
              "example": "gehen (to go)",
              "conjugations": [
                ["ich gehe", "wir gehen"],
                ["du gehst", "ihr geht"],
                ["er/sie geht", "sie/Sie gehen"]
              ]
            }
          ]
        }
      ]
    },
    "praeteritum": {
      "label": "Präteritum (Simple Past)",
      "icon": "bi-chevron-left",
      "description": "Describes completed actions in the past. Used mainly in written/formal German. Weak verbs add -te, strong verbs change the stem vowel.",
      "extra": "<strong>Weak vs. Strong past:</strong><br><br>Weak verbs: stem + <strong>-te, -test, -te, -ten, -tet, -ten</strong><br>Strong verbs: vowel change + <strong>-∅, -st, -∅, -en, -t, -en</strong><br><br>Mixed verbs (bringen, denken, wissen): vowel change AND -te endings.",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak -te",
            "example": "machen (to make)",
            "conjugations": [
              ["ich machte", "wir machten"],
              ["du machtest", "ihr machtet"],
              ["er/sie machte", "sie/Sie machten"]
            ]
          },
          "patterns": [
            {
              "name": "weak -te",
              "description": "standard weak past",
              "dimmed": true,
              "verbs": "machen, spielen, lernen, wohnen, kaufen, fragen, sagen, hören, brauchen",
              "example": "spielen (to play)",
              "conjugations": [
                ["ich spielte", "wir spielten"],
                ["du spieltest", "ihr spieltet"],
                ["er/sie spielte", "sie/Sie spielten"]
              ]
            },
            {
              "name": "weak -ete",
              "description": "stem ends in -t/-d: extra -e-",
              "dimmed": false,
              "verbs": "arbeiten, warten, reden, öffnen, rechnen, atmen",
              "example": "arbeiten (to work)",
              "conjugations": [
                ["ich arbeitete", "wir arbeiteten"],
                ["du arbeitetest", "ihr arbeitetet"],
                ["er/sie arbeitete", "sie/Sie arbeiteten"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "e → a",
              "description": "vowel change e → a",
              "dimmed": false,
              "verbs": "geben, sprechen, helfen, nehmen, treffen, lesen, sehen",
              "example": "geben (to give)",
              "conjugations": [
                ["ich gab", "wir gaben"],
                ["du gabst", "ihr gabt"],
                ["er/sie gab", "sie/Sie gaben"]
              ]
            },
            {
              "name": "a → u",
              "description": "vowel change a → u",
              "dimmed": false,
              "verbs": "fahren, tragen, schlafen, waschen, wachsen, graben, laden",
              "example": "fahren (to drive)",
              "conjugations": [
                ["ich fuhr", "wir fuhren"],
                ["du fuhrst", "ihr fuhrt"],
                ["er/sie fuhr", "sie/Sie fuhren"]
              ]
            },
            {
              "name": "ei → ie",
              "description": "vowel change ei → ie",
              "dimmed": false,
              "verbs": "schreiben, bleiben, steigen, schweigen, treiben, scheinen",
              "example": "schreiben (to write)",
              "conjugations": [
                ["ich schrieb", "wir schrieben"],
                ["du schriebst", "ihr schriebt"],
                ["er/sie schrieb", "sie/Sie schrieben"]
              ]
            },
            {
              "name": "i → a",
              "description": "vowel change i → a",
              "dimmed": false,
              "verbs": "finden, trinken, singen, schwimmen, beginnen, gewinnen",
              "example": "finden (to find)",
              "conjugations": [
                ["ich fand", "wir fanden"],
                ["du fandest", "ihr fandet"],
                ["er/sie fand", "sie/Sie fanden"]
              ]
            }
          ]
        },
        {
          "label": "Irregular / Mixed",
          "regular": null,
          "patterns": [
            {
              "name": "sein",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "sein",
              "example": "sein (to be)",
              "conjugations": [
                ["ich war", "wir waren"],
                ["du warst", "ihr wart"],
                ["er/sie war", "sie/Sie waren"]
              ]
            },
            {
              "name": "haben",
              "description": "irregular",
              "dimmed": false,
              "verbs": "haben",
              "example": "haben (to have)",
              "conjugations": [
                ["ich hatte", "wir hatten"],
                ["du hattest", "ihr hattet"],
                ["er/sie hatte", "sie/Sie hatten"]
              ]
            },
            {
              "name": "werden",
              "description": "irregular",
              "dimmed": false,
              "verbs": "werden",
              "example": "werden (to become)",
              "conjugations": [
                ["ich wurde", "wir wurden"],
                ["du wurdest", "ihr wurdet"],
                ["er/sie wurde", "sie/Sie wurden"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "lose umlaut, take weak endings",
              "dimmed": false,
              "verbs": "können, müssen, dürfen, sollen, wollen, mögen",
              "example": "können (to be able)",
              "conjugations": [
                ["ich konnte", "wir konnten"],
                ["du konntest", "ihr konntet"],
                ["er/sie konnte", "sie/Sie konnten"]
              ]
            },
            {
              "name": "mixed verbs",
              "description": "vowel change + weak -te endings",
              "dimmed": false,
              "verbs": "bringen, denken, wissen, kennen, nennen, rennen",
              "example": "bringen (to bring)",
              "conjugations": [
                ["ich brachte", "wir brachten"],
                ["du brachtest", "ihr brachtet"],
                ["er/sie brachte", "sie/Sie brachten"]
              ]
            },
            {
              "name": "gehen / stehen / tun",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gehen, stehen, tun",
              "example": "gehen (to go)",
              "conjugations": [
                ["ich ging", "wir gingen"],
                ["du gingst", "ihr gingt"],
                ["er/sie ging", "sie/Sie gingen"]
              ]
            }
          ]
        }
      ]
    },
    "perfekt": {
      "label": "Perfekt (Present Perfect)",
      "icon": "bi-clock-history",
      "description": "Describes completed actions with present relevance. Formed with haben/sein + past participle. The most common past tense in spoken German.",
      "extra": "<strong>Haben or sein?</strong><br><br>Most verbs use <em>haben</em>. Use <em>sein</em> with:<br>- Intransitive verbs of motion/change of state: <em>gehen, fahren, fliegen, kommen, werden, sterben, wachsen</em><br>- <em>sein, bleiben, geschehen, passieren, gelingen</em><br><br><strong>Past participle:</strong> ge- + stem + -t (weak) or ge- + vowel change + -en (strong). Verbs with inseparable prefixes (be-, ver-, er-, ent-, emp-, zer-, ge-, miss-) drop the ge-.",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak with haben",
            "example": "machen (to make)",
            "conjugations": [
              ["ich habe gemacht", "wir haben gemacht"],
              ["du hast gemacht", "ihr habt gemacht"],
              ["er/sie hat gemacht", "sie/Sie haben gemacht"]
            ]
          },
          "patterns": [
            {
              "name": "weak ge-...-t",
              "description": "standard weak participle",
              "dimmed": true,
              "verbs": "machen, spielen, lernen, wohnen, kaufen, fragen, sagen, hören",
              "example": "spielen (to play)",
              "conjugations": [
                ["ich habe gespielt", "wir haben gespielt"],
                ["du hast gespielt", "ihr habt gespielt"],
                ["er/sie hat gespielt", "sie/Sie haben gespielt"]
              ]
            },
            {
              "name": "weak ge-...-et",
              "description": "stem ends in -t/-d",
              "dimmed": false,
              "verbs": "arbeiten, warten, reden, öffnen, rechnen",
              "example": "arbeiten (to work)",
              "conjugations": [
                ["ich habe gearbeitet", "wir haben gearbeitet"],
                ["du hast gearbeitet", "ihr habt gearbeitet"],
                ["er/sie hat gearbeitet", "sie/Sie haben gearbeitet"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "strong with haben",
              "description": "ge- + vowel change + -en",
              "dimmed": false,
              "verbs": "geben, sprechen, helfen, nehmen, lesen, finden, trinken, schreiben",
              "example": "geben (to give)",
              "conjugations": [
                ["ich habe gegeben", "wir haben gegeben"],
                ["du hast gegeben", "ihr habt gegeben"],
                ["er/sie hat gegeben", "sie/Sie haben gegeben"]
              ]
            },
            {
              "name": "strong with sein",
              "description": "motion/change-of-state verbs",
              "dimmed": false,
              "verbs": "fahren, fliegen, laufen, fallen, schwimmen, kommen, sterben, wachsen",
              "example": "fahren (to drive)",
              "conjugations": [
                ["ich bin gefahren", "wir sind gefahren"],
                ["du bist gefahren", "ihr seid gefahren"],
                ["er/sie ist gefahren", "sie/Sie sind gefahren"]
              ]
            }
          ]
        },
        {
          "label": "Irregular / Mixed",
          "regular": null,
          "patterns": [
            {
              "name": "sein",
              "description": "uses sein as auxiliary",
              "dimmed": false,
              "verbs": "sein",
              "example": "sein (to be)",
              "conjugations": [
                ["ich bin gewesen", "wir sind gewesen"],
                ["du bist gewesen", "ihr seid gewesen"],
                ["er/sie ist gewesen", "sie/Sie sind gewesen"]
              ]
            },
            {
              "name": "haben",
              "description": "uses haben as auxiliary",
              "dimmed": false,
              "verbs": "haben",
              "example": "haben (to have)",
              "conjugations": [
                ["ich habe gehabt", "wir haben gehabt"],
                ["du hast gehabt", "ihr habt gehabt"],
                ["er/sie hat gehabt", "sie/Sie haben gehabt"]
              ]
            },
            {
              "name": "werden",
              "description": "uses sein as auxiliary",
              "dimmed": false,
              "verbs": "werden",
              "example": "werden (to become)",
              "conjugations": [
                ["ich bin geworden", "wir sind geworden"],
                ["du bist geworden", "ihr seid geworden"],
                ["er/sie ist geworden", "sie/Sie sind geworden"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "double infinitive with haben in subordinate clauses",
              "dimmed": false,
              "verbs": "können, müssen, dürfen, sollen, wollen, mögen",
              "example": "können (to be able)",
              "conjugations": [
                ["ich habe gekonnt", "wir haben gekonnt"],
                ["du hast gekonnt", "ihr habt gekonnt"],
                ["er/sie hat gekonnt", "sie/Sie haben gekonnt"]
              ]
            },
            {
              "name": "mixed verbs",
              "description": "ge- + vowel change + -t",
              "dimmed": false,
              "verbs": "bringen, denken, wissen, kennen, nennen, rennen",
              "example": "bringen (to bring)",
              "conjugations": [
                ["ich habe gebracht", "wir haben gebracht"],
                ["du hast gebracht", "ihr habt gebracht"],
                ["er/sie hat gebracht", "sie/Sie haben gebracht"]
              ]
            },
            {
              "name": "gehen / stehen / tun",
              "description": "common irregulars with sein/haben",
              "dimmed": false,
              "verbs": "gehen, stehen, tun",
              "example": "gehen (to go)",
              "conjugations": [
                ["ich bin gegangen", "wir sind gegangen"],
                ["du bist gegangen", "ihr seid gegangen"],
                ["er/sie ist gegangen", "sie/Sie sind gegangen"]
              ]
            }
          ]
        }
      ]
    },
    "plusquamperfekt": {
      "label": "Plusquamperfekt (Past Perfect)",
      "icon": "bi-skip-backward",
      "description": "Describes actions completed before another past action. Formed with hatte/war + past participle.",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak with hatte",
            "example": "machen (to make)",
            "conjugations": [
              ["ich hatte gemacht", "wir hatten gemacht"],
              ["du hattest gemacht", "ihr hattet gemacht"],
              ["er/sie hatte gemacht", "sie/Sie hatten gemacht"]
            ]
          },
          "patterns": [
            {
              "name": "weak past perfect",
              "description": "hatte + ge-...-t",
              "dimmed": true,
              "verbs": "machen, spielen, lernen, wohnen, kaufen, arbeiten",
              "example": "spielen (to play)",
              "conjugations": [
                ["ich hatte gespielt", "wir hatten gespielt"],
                ["du hattest gespielt", "ihr hattet gespielt"],
                ["er/sie hatte gespielt", "sie/Sie hatten gespielt"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "strong with hatte",
              "description": "hatte + ge-...-en",
              "dimmed": false,
              "verbs": "geben, sprechen, helfen, nehmen, lesen, schreiben, finden",
              "example": "geben (to give)",
              "conjugations": [
                ["ich hatte gegeben", "wir hatten gegeben"],
                ["du hattest gegeben", "ihr hattet gegeben"],
                ["er/sie hatte gegeben", "sie/Sie hatten gegeben"]
              ]
            },
            {
              "name": "strong with war",
              "description": "motion/change-of-state verbs",
              "dimmed": false,
              "verbs": "fahren, fliegen, laufen, fallen, schwimmen, kommen",
              "example": "fahren (to drive)",
              "conjugations": [
                ["ich war gefahren", "wir waren gefahren"],
                ["du warst gefahren", "ihr wart gefahren"],
                ["er/sie war gefahren", "sie/Sie waren gefahren"]
              ]
            }
          ]
        },
        {
          "label": "Irregular / Mixed",
          "regular": null,
          "patterns": [
            {
              "name": "sein",
              "description": "war/waren + gewesen",
              "dimmed": false,
              "verbs": "sein",
              "example": "sein (to be)",
              "conjugations": [
                ["ich war gewesen", "wir waren gewesen"],
                ["du warst gewesen", "ihr wart gewesen"],
                ["er/sie war gewesen", "sie/Sie waren gewesen"]
              ]
            },
            {
              "name": "haben",
              "description": "hatte/hatten + gehabt",
              "dimmed": false,
              "verbs": "haben",
              "example": "haben (to have)",
              "conjugations": [
                ["ich hatte gehabt", "wir hatten gehabt"],
                ["du hattest gehabt", "ihr hattet gehabt"],
                ["er/sie hatte gehabt", "sie/Sie hatten gehabt"]
              ]
            },
            {
              "name": "werden",
              "description": "war/waren + geworden",
              "dimmed": false,
              "verbs": "werden",
              "example": "werden (to become)",
              "conjugations": [
                ["ich war geworden", "wir waren geworden"],
                ["du warst geworden", "ihr wart geworden"],
                ["er/sie war geworden", "sie/Sie waren geworden"]
              ]
            }
          ]
        }
      ]
    },
    "futur_i": {
      "label": "Futur I (Future)",
      "icon": "bi-arrow-right",
      "description": "Describes future actions or present assumptions. Formed with werden + infinitive.",
      "columns": [
        {
          "label": "All verbs",
          "regular": {
            "name": "werden + infinitive",
            "example": "machen (to make)",
            "conjugations": [
              ["ich werde machen", "wir werden machen"],
              ["du wirst machen", "ihr werdet machen"],
              ["er/sie wird machen", "sie/Sie werden machen"]
            ]
          },
          "patterns": [
            {
              "name": "strong verbs",
              "description": "same pattern — werden + infinitive",
              "dimmed": true,
              "verbs": "geben, fahren, schreiben, lesen, finden, helfen, sprechen",
              "example": "geben (to give)",
              "conjugations": [
                ["ich werde geben", "wir werden geben"],
                ["du wirst geben", "ihr werdet geben"],
                ["er/sie wird geben", "sie/Sie werden geben"]
              ]
            },
            {
              "name": "sein / haben",
              "description": "werden + sein/haben",
              "dimmed": false,
              "verbs": "sein, haben",
              "example": "sein (to be)",
              "conjugations": [
                ["ich werde sein", "wir werden sein"],
                ["du wirst sein", "ihr werdet sein"],
                ["er/sie wird sein", "sie/Sie werden sein"]
              ]
            }
          ]
        }
      ]
    },
    "futur_ii": {
      "label": "Futur II (Future Perfect)",
      "icon": "bi-skip-forward",
      "description": "Describes actions that will be completed by a certain future time, or assumptions about the past. Formed with werden + past participle + haben/sein.",
      "columns": [
        {
          "label": "With haben",
          "regular": {
            "name": "werden + p.p. + haben",
            "example": "machen (to make)",
            "conjugations": [
              ["ich werde gemacht haben", "wir werden gemacht haben"],
              ["du wirst gemacht haben", "ihr werdet gemacht haben"],
              ["er/sie wird gemacht haben", "sie/Sie werden gemacht haben"]
            ]
          },
          "patterns": [
            {
              "name": "strong with haben",
              "description": "werden + ge-...-en + haben",
              "dimmed": false,
              "verbs": "geben, sprechen, lesen, schreiben, finden, nehmen, helfen",
              "example": "geben (to give)",
              "conjugations": [
                ["ich werde gegeben haben", "wir werden gegeben haben"],
                ["du wirst gegeben haben", "ihr werdet gegeben haben"],
                ["er/sie wird gegeben haben", "sie/Sie werden gegeben haben"]
              ]
            }
          ]
        },
        {
          "label": "With sein",
          "regular": {
            "name": "werden + p.p. + sein",
            "example": "fahren (to drive)",
            "conjugations": [
              ["ich werde gefahren sein", "wir werden gefahren sein"],
              ["du wirst gefahren sein", "ihr werdet gefahren sein"],
              ["er/sie wird gefahren sein", "sie/Sie werden gefahren sein"]
            ]
          },
          "patterns": [
            {
              "name": "sein / werden / bleiben",
              "description": "werden + p.p. + sein",
              "dimmed": false,
              "verbs": "sein, werden, bleiben, gehen, kommen",
              "example": "sein (to be)",
              "conjugations": [
                ["ich werde gewesen sein", "wir werden gewesen sein"],
                ["du wirst gewesen sein", "ihr werdet gewesen sein"],
                ["er/sie wird gewesen sein", "sie/Sie werden gewesen sein"]
              ]
            }
          ]
        }
      ]
    },
    "konjunktiv_i": {
      "label": "Konjunktiv I Präsens (Indirect Speech)",
      "icon": "bi-chat-quote",
      "description": "Used for indirect speech (reported statements). Formed from infinitive stem + subjunctive endings (-e, -est, -e, -en, -et, -en). Often replaced by Konjunktiv II when forms are identical to indicative.",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak Konjunktiv I",
            "example": "machen (to make)",
            "conjugations": [
              ["ich mache", "wir machen"],
              ["du machest", "ihr machet"],
              ["er/sie mache", "sie/Sie machen"]
            ]
          },
          "patterns": [
            {
              "name": "weak Konj. I",
              "description": "identical to indicative in 1s, 1p, 3p — use Konj. II instead",
              "dimmed": true,
              "verbs": "machen, spielen, lernen, arbeiten, kaufen",
              "example": "spielen (to play)",
              "conjugations": [
                ["ich spiele", "wir spielen"],
                ["du spielest", "ihr spielet"],
                ["er/sie spiele", "sie/Sie spielen"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "strong Konj. I",
              "description": "no stem vowel change — uses infinitive stem",
              "dimmed": false,
              "verbs": "geben, fahren, schreiben, lesen, finden, sprechen, nehmen, helfen",
              "example": "geben (to give)",
              "conjugations": [
                ["ich gebe", "wir geben"],
                ["du gebest", "ihr gebet"],
                ["er/sie gebe", "sie/Sie geben"]
              ]
            }
          ]
        },
        {
          "label": "Irregular / Mixed",
          "regular": null,
          "patterns": [
            {
              "name": "sein",
              "description": "unique Konjunktiv I forms — most distinctly recognizable",
              "dimmed": false,
              "verbs": "sein",
              "example": "sein (to be)",
              "conjugations": [
                ["ich sei", "wir seien"],
                ["du seist/seiest", "ihr seiet"],
                ["er/sie sei", "sie/Sie seien"]
              ]
            },
            {
              "name": "haben",
              "description": "Konjunktiv I",
              "dimmed": false,
              "verbs": "haben",
              "example": "haben (to have)",
              "conjugations": [
                ["ich habe", "wir haben"],
                ["du habest", "ihr habet"],
                ["er/sie habe", "sie/Sie haben"]
              ]
            },
            {
              "name": "werden",
              "description": "Konjunktiv I",
              "dimmed": false,
              "verbs": "werden",
              "example": "werden (to become)",
              "conjugations": [
                ["ich werde", "wir werden"],
                ["du werdest", "ihr werdet"],
                ["er/sie werde", "sie/Sie werden"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "Konjunktiv I from infinitive stem",
              "dimmed": false,
              "verbs": "können, müssen, dürfen, sollen, wollen, mögen",
              "example": "können (to be able)",
              "conjugations": [
                ["ich könne", "wir können"],
                ["du könnest", "ihr könnet"],
                ["er/sie könne", "sie/Sie können"]
              ]
            }
          ]
        }
      ]
    },
    "konjunktiv_ii": {
      "label": "Konjunktiv II Präteritum (Hypothetical)",
      "icon": "bi-shuffle",
      "description": "Expresses unreal/hypothetical situations, wishes, and polite requests. Strong verbs: Präteritum stem + umlaut (if possible) + subjunctive endings. Weak verbs: identical to Präteritum (use würde-form instead).",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "weak Konj. II (= Präteritum)",
            "example": "machen (to make)",
            "conjugations": [
              ["ich machte", "wir machten"],
              ["du machtest", "ihr machtet"],
              ["er/sie machte", "sie/Sie machten"]
            ]
          },
          "patterns": [
            {
              "name": "weak Konj. II",
              "description": "identical to indicative Präteritum — use würde + infinitive instead",
              "dimmed": true,
              "verbs": "machen, spielen, lernen, arbeiten, kaufen, fragen",
              "example": "spielen (to play)",
              "conjugations": [
                ["ich spielte", "wir spielten"],
                ["du spieltest", "ihr spieltet"],
                ["er/sie spielte", "sie/Sie spielten"]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "a/u → ä/ü + umlaut",
              "description": "Präteritum stem + umlaut",
              "dimmed": false,
              "verbs": "fahren, tragen, schlafen, fallen, laufen, finden, trinken",
              "example": "fahren (to drive)",
              "conjugations": [
                ["ich führe", "wir führen"],
                ["du führest", "ihr führet"],
                ["er/sie führe", "sie/Sie führen"]
              ]
            },
            {
              "name": "ä from a",
              "description": "geben-class: gab → gäbe",
              "dimmed": false,
              "verbs": "geben, sprechen, helfen, nehmen, lesen, sehen",
              "example": "geben (to give)",
              "conjugations": [
                ["ich gäbe", "wir gäben"],
                ["du gäbest", "ihr gäbet"],
                ["er/sie gäbe", "sie/Sie gäben"]
              ]
            },
            {
              "name": "ie stays ie",
              "description": "schreiben-class: schrieb → schriebe",
              "dimmed": false,
              "verbs": "schreiben, bleiben, steigen, scheinen",
              "example": "schreiben (to write)",
              "conjugations": [
                ["ich schriebe", "wir schrieben"],
                ["du schriebest", "ihr schriebet"],
                ["er/sie schriebe", "sie/Sie schrieben"]
              ]
            }
          ]
        },
        {
          "label": "Irregular / Mixed",
          "regular": null,
          "patterns": [
            {
              "name": "sein",
              "description": "wäre — the most common Konj. II form",
              "dimmed": false,
              "verbs": "sein",
              "example": "sein (to be)",
              "conjugations": [
                ["ich wäre", "wir wären"],
                ["du wärest", "ihr wäret"],
                ["er/sie wäre", "sie/Sie wären"]
              ]
            },
            {
              "name": "haben",
              "description": "hätte — very common",
              "dimmed": false,
              "verbs": "haben",
              "example": "haben (to have)",
              "conjugations": [
                ["ich hätte", "wir hätten"],
                ["du hättest", "ihr hättet"],
                ["er/sie hätte", "sie/Sie hätten"]
              ]
            },
            {
              "name": "werden",
              "description": "würde — forms the würde-construction",
              "dimmed": false,
              "verbs": "werden",
              "example": "werden (to become)",
              "conjugations": [
                ["ich würde", "wir würden"],
                ["du würdest", "ihr würdet"],
                ["er/sie würde", "sie/Sie würden"]
              ]
            },
            {
              "name": "modal verbs",
              "description": "Konj. II with umlaut (except sollen/wollen)",
              "dimmed": false,
              "verbs": "können, müssen, dürfen, sollen, wollen, mögen",
              "example": "können (to be able)",
              "conjugations": [
                ["ich könnte", "wir könnten"],
                ["du könntest", "ihr könntet"],
                ["er/sie könnte", "sie/Sie könnten"]
              ]
            },
            {
              "name": "mixed verbs",
              "description": "Konj. II with umlaut + -te",
              "dimmed": false,
              "verbs": "bringen, denken, wissen",
              "example": "bringen (to bring)",
              "conjugations": [
                ["ich brächte", "wir brächten"],
                ["du brächtest", "ihr brächtet"],
                ["er/sie brächte", "sie/Sie brächten"]
              ]
            },
            {
              "name": "gehen / stehen / tun",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gehen, stehen, tun",
              "example": "gehen (to go)",
              "conjugations": [
                ["ich ginge", "wir gingen"],
                ["du gingest", "ihr ginget"],
                ["er/sie ginge", "sie/Sie gingen"]
              ]
            }
          ]
        }
      ]
    },
    "konjunktiv_ii_wuerde": {
      "label": "Konjunktiv II mit würde (Would-Form)",
      "icon": "bi-arrow-repeat",
      "description": "The common spoken alternative to Konjunktiv II for most verbs. Formed with würde + infinitive. Preferred for weak verbs and many strong verbs in everyday speech. Not typically used with sein, haben, werden, modals, or wissen.",
      "columns": [
        {
          "label": "All verbs",
          "regular": {
            "name": "würde + infinitive",
            "example": "machen (to make)",
            "conjugations": [
              ["ich würde machen", "wir würden machen"],
              ["du würdest machen", "ihr würdet machen"],
              ["er/sie würde machen", "sie/Sie würden machen"]
            ]
          },
          "patterns": [
            {
              "name": "strong verbs",
              "description": "würde + infinitive — replaces archaic Konj. II forms",
              "dimmed": false,
              "verbs": "geben, fahren, schreiben, lesen, finden, helfen, sprechen, nehmen",
              "example": "geben (to give)",
              "conjugations": [
                ["ich würde geben", "wir würden geben"],
                ["du würdest geben", "ihr würdet geben"],
                ["er/sie würde geben", "sie/Sie würden geben"]
              ]
            },
            {
              "name": "avoid with these",
              "description": "use true Konj. II forms instead: wäre, hätte, würde, könnte, müsste, etc.",
              "dimmed": true,
              "verbs": "sein, haben, werden, können, müssen, dürfen, sollen, wollen, wissen",
              "example": "sein (to be) — use wäre, not würde sein",
              "conjugations": [
                ["ich wäre", "wir wären"],
                ["du wärest", "ihr wäret"],
                ["er/sie wäre", "sie/Sie wären"]
              ]
            }
          ]
        }
      ]
    },
    "imperativ": {
      "label": "Imperativ (Imperative)",
      "icon": "bi-exclamation-circle",
      "description": "Gives commands or requests. Four forms: du (informal singular), ihr (informal plural), Sie (formal), wir (let's). Strong verbs with e→i/ie change keep the change in du-form.",
      "columns": [
        {
          "label": "Weak (regular)",
          "regular": {
            "name": "verb stem",
            "example": "machen (to make)",
            "conjugations": [
              ["mach(e)!", "macht!"],
              ["machen Sie!", "machen wir!"],
              ["", ""]
            ]
          },
          "patterns": [
            {
              "name": "regular imperative",
              "description": "stem + optional -e (du), -t (ihr), -en Sie (formal)",
              "dimmed": true,
              "verbs": "machen, spielen, lernen, kaufen, fragen, hören, arbeiten",
              "example": "spielen (to play)",
              "conjugations": [
                ["spiel(e)!", "spielt!"],
                ["spielen Sie!", "spielen wir!"],
                ["", ""]
              ]
            }
          ]
        },
        {
          "label": "Strong (irregular)",
          "regular": null,
          "patterns": [
            {
              "name": "e → i/ie in du-form",
              "description": "no -e ending in du-form",
              "dimmed": false,
              "verbs": "geben, sprechen, helfen, nehmen, lesen, sehen, essen",
              "example": "geben (to give)",
              "conjugations": [
                ["gib!", "gebt!"],
                ["geben Sie!", "geben wir!"],
                ["", ""]
              ]
            },
            {
              "name": "a → ä: NO change in imperative",
              "description": "du-form uses plain stem (no umlaut)",
              "dimmed": false,
              "verbs": "fahren, tragen, schlafen, laufen, fallen, halten",
              "example": "fahren (to drive)",
              "conjugations": [
                ["fahr(e)!", "fahrt!"],
                ["fahren Sie!", "fahren wir!"],
                ["", ""]
              ]
            }
          ]
        },
        {
          "label": "Irregular / Mixed",
          "regular": null,
          "patterns": [
            {
              "name": "sein",
              "description": "unique imperative forms",
              "dimmed": false,
              "verbs": "sein",
              "example": "sein (to be)",
              "conjugations": [
                ["sei!", "seid!"],
                ["seien Sie!", "seien wir!"],
                ["", ""]
              ]
            },
            {
              "name": "haben",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "haben",
              "example": "haben (to have)",
              "conjugations": [
                ["hab(e)!", "habt!"],
                ["haben Sie!", "haben wir!"],
                ["", ""]
              ]
            },
            {
              "name": "werden",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "werden",
              "example": "werden (to become)",
              "conjugations": [
                ["werde!", "werdet!"],
                ["werden Sie!", "werden wir!"],
                ["", ""]
              ]
            }
          ]
        }
      ]
    }
  },
  "pluralization": [
    { "rule": "Add -e (often with umlaut)", "singular": "Tag", "plural": "Tage", "examples": "Hund→Hunde, Stuhl→Stühle, Hand→Hände, Stadt→Städte, Nacht→Nächte" },
    { "rule": "Add -er (often with umlaut)", "singular": "Kind", "plural": "Kinder", "examples": "Buch→Bücher, Haus→Häuser, Mann→Männer, Wald→Wälder, Rad→Räder" },
    { "rule": "Add -en/-n", "singular": "Frau", "plural": "Frauen", "examples": "Blume→Blumen, Schule→Schulen, Tür→Türen, Uhr→Uhren, Straße→Straßen" },
    { "rule": "Add -s (foreign/borrowed words)", "singular": "Auto", "plural": "Autos", "examples": "Hotel→Hotels, Kino→Kinos, Sofa→Sofas, Team→Teams, Taxi→Taxis" },
    { "rule": "No change (masc./neut. -er/-el/-en)", "singular": "Lehrer", "plural": "Lehrer", "examples": "Fenster→Fenster, Mädchen→Mädchen, Brötchen→Brötchen, Koffer→Koffer" },
    { "rule": "Umlaut only (no suffix)", "singular": "Vater", "plural": "Väter", "examples": "Mutter→Mütter, Bruder→Brüder, Tochter→Töchter, Apfel→Äpfel, Vogel→Vögel" },
    { "rule": "Irregular", "singular": "Herz", "plural": "Herzen", "examples": "Museum→Museen, Thema→Themen, Firma→Firmen, Datum→Daten, Lexikon→Lexika" }
  ],
  "chart": {
    "columns": ["Past (Vergangenheit)", "Present (Gegenwart)", "Future (Zukunft)", "Subjunctive (Konjunktiv)"],
    "rows": ["Simple (Einfach)", "Perfect (Perfekt)", "Pluperfect (Plusquamperfekt)"],
    "groups": ["Weak: machen", "Strong: geben", "Irreg: sein"],
    "cells": [
      [
        { "form": "Präteritum", "rule": "Weak: stem+-te; Strong: vowel change",
          "er": [["ich machte", "wir machten"], ["du machtest", "ihr machtet"], ["er machte", "sie machten"]],
          "ir": [["ich gab", "wir gaben"], ["du gabst", "ihr gabt"], ["er gab", "sie gaben"]],
          "re": [["ich war", "wir waren"], ["du warst", "ihr wart"], ["er war", "sie waren"]] },
        { "form": "Präsens", "rule": "Stem + personal endings",
          "er": [["ich mache", "wir machen"], ["du machst", "ihr macht"], ["er macht", "sie machen"]],
          "ir": [["ich gebe", "wir geben"], ["du gibst", "ihr gebt"], ["er gibt", "sie geben"]],
          "re": [["ich bin", "wir sind"], ["du bist", "ihr seid"], ["er ist", "sie sind"]] },
        { "form": "Futur I", "rule": "werden + infinitive",
          "er": [["ich werde machen", "wir werden machen"], ["du wirst machen", "ihr werdet machen"], ["er wird machen", "sie werden machen"]],
          "ir": [["ich werde geben", "wir werden geben"], ["du wirst geben", "ihr werdet geben"], ["er wird geben", "sie werden geben"]],
          "re": [["ich werde sein", "wir werden sein"], ["du wirst sein", "ihr werdet sein"], ["er wird sein", "sie werden sein"]] },
        { "form": "Konjunktiv II", "rule": "Prät. stem + umlaut + endings / würde + inf.",
          "er": [["ich würde machen", "wir würden machen"], ["du würdest machen", "ihr würdet machen"], ["er würde machen", "sie würden machen"]],
          "ir": [["ich gäbe", "wir gäben"], ["du gäbest", "ihr gäbet"], ["er gäbe", "sie gäben"]],
          "re": [["ich wäre", "wir wären"], ["du wärest", "ihr wäret"], ["er wäre", "sie wären"]] }
      ],
      [
        { "form": "Plusquamperfekt", "rule": "hatte/war + past participle",
          "er": [["ich hatte gemacht", "wir hatten gemacht"], ["du hattest gemacht", "ihr hattet gemacht"], ["er hatte gemacht", "sie hatten gemacht"]],
          "ir": [["ich hatte gegeben", "wir hatten gegeben"], ["du hattest gegeben", "ihr hattet gegeben"], ["er hatte gegeben", "sie hatten gegeben"]],
          "re": [["ich war gewesen", "wir waren gewesen"], ["du warst gewesen", "ihr wart gewesen"], ["er war gewesen", "sie waren gewesen"]] },
        { "form": "Perfekt", "rule": "habe/bin + past participle",
          "er": [["ich habe gemacht", "wir haben gemacht"], ["du hast gemacht", "ihr habt gemacht"], ["er hat gemacht", "sie haben gemacht"]],
          "ir": [["ich habe gegeben", "wir haben gegeben"], ["du hast gegeben", "ihr habt gegeben"], ["er hat gegeben", "sie haben gegeben"]],
          "re": [["ich bin gewesen", "wir sind gewesen"], ["du bist gewesen", "ihr seid gewesen"], ["er ist gewesen", "sie sind gewesen"]] },
        { "form": "Futur II", "rule": "werden + p.p. + haben/sein",
          "er": [["ich werde gemacht haben", "wir werden gemacht haben"], ["du wirst gemacht haben", "ihr werdet gemacht haben"], ["er wird gemacht haben", "sie werden gemacht haben"]],
          "ir": [["ich werde gegeben haben", "wir werden gegeben haben"], ["du wirst gegeben haben", "ihr werdet gegeben haben"], ["er wird gegeben haben", "sie werden gegeben haben"]],
          "re": [["ich werde gewesen sein", "wir werden gewesen sein"], ["du wirst gewesen sein", "ihr werdet gewesen sein"], ["er wird gewesen sein", "sie werden gewesen sein"]] },
        { "form": "Konj. II Perfekt", "rule": "hätte/wäre + past participle",
          "er": [["ich hätte gemacht", "wir hätten gemacht"], ["du hättest gemacht", "ihr hättet gemacht"], ["er hätte gemacht", "sie hätten gemacht"]],
          "ir": [["ich hätte gegeben", "wir hätten gegeben"], ["du hättest gegeben", "ihr hättet gegeben"], ["er hätte gegeben", "sie hätten gegeben"]],
          "re": [["ich wäre gewesen", "wir wären gewesen"], ["du wärest gewesen", "ihr wäret gewesen"], ["er wäre gewesen", "sie wären gewesen"]] }
      ],
      [
        null,
        null,
        null,
        null
      ]
    ]
  }
};
