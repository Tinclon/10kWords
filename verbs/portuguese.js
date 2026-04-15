var portugueseData = {
  "language": "Portuguese",
  "title": "Portuguese Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" },
    { "key": "pronouns", "icon": "bi-person", "label": "Pronouns" }
  ],
  "theme": {
    "primary": "#388e5e",
    "secondary": "#2c6e49",
    "tableHeader": "#4caf6e",
    "stripedRow": "#e8f5ed",
    "border": "#9cd4af"
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
      "description": "Expresses doubt, wishes, emotions, possibilities, or hypothetical situations."
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
    },
    {
      "label": "Infinitive",
      "icon": "bi-infinity",
      "key": "infinitive",
      "description": "The personal (conjugated) infinitive is unique to Portuguese. It allows the infinitive to carry person/number information, used after prepositions and in subordinate clauses."
    }
  ],
  "groups": {
    "indicative": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "compound_past",
          "imperfect",
          "pluperfect",
          "pluperfect_simple",
          "anterior",
          "past"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "present"
        ]
      },
      {
        "label": "Future",
        "icon": "bi-arrow-right",
        "tenses": [
          "future",
          "future_perfect"
        ]
      }
    ],
    "subjunctive": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "subj_past",
          "subj_imperfect",
          "subj_pluperfect"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "subj_present"
        ]
      },
      {
        "label": "Future",
        "icon": "bi-arrow-right",
        "tenses": [
          "subj_future",
          "subj_future_perfect"
        ]
      }
    ],
    "conditional": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "conditional_perfect"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "conditional"
        ]
      }
    ],
    "imperative": [
      {
        "label": "Positive",
        "icon": "bi-check-circle",
        "tenses": [
          "imp_affirmative"
        ]
      },
      {
        "label": "Negative",
        "icon": "bi-x-circle",
        "tenses": [
          "imp_negative"
        ]
      }
    ],
    "infinitive": [
      {
        "label": "Personal Infinitive",
        "icon": "bi-infinity",
        "tenses": [
          "personal_infinitive"
        ]
      }
    ]
  },
  "tenses": {
    "present": {
      "label": "Present (Presente do indicativo)",
      "icon": "bi-record-circle",
      "description": "Describes current states, habitual actions, and general truths.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falo",
                "falamos"
              ],
              [
                "falas",
                "falais"
              ],
              [
                "fala",
                "falam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "estar",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estou",
                  "estamos"
                ],
                [
                  "estás",
                  "estais"
                ],
                [
                  "está",
                  "estão"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "stem change (e → ei)",
              "dimmed": false,
              "verbs": "passear, recear, estrear, frear, bloquear",
              "example": "passear (to stroll)",
              "conjugations": [
                [
                  "passeio",
                  "passeamos"
                ],
                [
                  "passeias",
                  "passeais"
                ],
                [
                  "passeia",
                  "passeiam"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "dou",
                  "damos"
                ],
                [
                  "dás",
                  "dais"
                ],
                [
                  "dá",
                  "dão"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "como",
                "comemos"
              ],
              [
                "comes",
                "comeis"
              ],
              [
                "come",
                "comem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "sou",
                  "somos"
                ],
                [
                  "és",
                  "sois"
                ],
                [
                  "é",
                  "são"
                ]
              ]
            },
            {
              "name": "ter",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ter, manter, obter, conter, reter, deter, entreter",
              "example": "ter (to have)",
              "conjugations": [
                [
                  "tenho",
                  "temos"
                ],
                [
                  "tens",
                  "tendes"
                ],
                [
                  "tem",
                  "têm"
                ]
              ]
            },
            {
              "name": "haver",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "haver",
              "example": "haver (to have/exist)",
              "conjugations": [
                [
                  "hei",
                  "havemos"
                ],
                [
                  "hás",
                  "haveis"
                ],
                [
                  "há",
                  "hão"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular yo (sei)",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "sei",
                  "sabemos"
                ],
                [
                  "sabes",
                  "sabeis"
                ],
                [
                  "sabe",
                  "sabem"
                ]
              ]
            },
            {
              "name": "poder",
              "description": "stem change (o → u in some)",
              "dimmed": false,
              "verbs": "poder",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "posso",
                  "podemos"
                ],
                [
                  "podes",
                  "podeis"
                ],
                [
                  "pode",
                  "podem"
                ]
              ]
            },
            {
              "name": "fazer",
              "description": "irregular yo (faço)",
              "dimmed": false,
              "verbs": "fazer, desfazer, refazer, satisfazer",
              "example": "fazer (to do/make)",
              "conjugations": [
                [
                  "faço",
                  "fazemos"
                ],
                [
                  "fazes",
                  "fazeis"
                ],
                [
                  "faz",
                  "fazem"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ver, prever, rever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "vejo",
                  "vemos"
                ],
                [
                  "vês",
                  "vedes"
                ],
                [
                  "vê",
                  "veem"
                ]
              ]
            },
            {
              "name": "-ecer",
              "description": "yo irregular (-ço)",
              "dimmed": false,
              "verbs": "conhecer, parecer, oferecer, pertencer, aparecer, merecer, crescer, estabelecer, obedecer, agradecer",
              "example": "conhecer (to know)",
              "conjugations": [
                [
                  "conheço",
                  "conhecemos"
                ],
                [
                  "conheces",
                  "conheceis"
                ],
                [
                  "conhece",
                  "conhecem"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "parto",
                "partimos"
              ],
              [
                "partes",
                "partis"
              ],
              [
                "parte",
                "partem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ir",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "vou",
                  "vamos"
                ],
                [
                  "vais",
                  "ides"
                ],
                [
                  "vai",
                  "vão"
                ]
              ]
            },
            {
              "name": "vir",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "vir, convir, intervir, provir",
              "example": "vir (to come)",
              "conjugations": [
                [
                  "venho",
                  "vimos"
                ],
                [
                  "vens",
                  "vindes"
                ],
                [
                  "vem",
                  "vêm"
                ]
              ]
            },
            {
              "name": "dizer",
              "description": "irregular yo (digo)",
              "dimmed": false,
              "verbs": "dizer, contradizer, predizer, bendizer, maldizer",
              "example": "dizer (to say)",
              "conjugations": [
                [
                  "digo",
                  "dizemos"
                ],
                [
                  "dizes",
                  "dizeis"
                ],
                [
                  "diz",
                  "dizem"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "stem change (e → i)",
              "dimmed": false,
              "verbs": "sentir, preferir, mentir, vestir, servir, repetir, seguir, competir, despedir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "sinto",
                  "sentimos"
                ],
                [
                  "sentes",
                  "sentis"
                ],
                [
                  "sente",
                  "sentem"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "stem change (o → u)",
              "dimmed": false,
              "verbs": "dormir, cobrir, descobrir, engolir, tossir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "durmo",
                  "dormimos"
                ],
                [
                  "dormes",
                  "dormis"
                ],
                [
                  "dorme",
                  "dormem"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "y insertion (u → ui)",
              "dimmed": false,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, substituir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "construo",
                  "construímos"
                ],
                [
                  "constróis",
                  "construís"
                ],
                [
                  "constrói",
                  "constroem"
                ]
              ]
            },
            {
              "name": "pedir",
              "description": "irregular (e → i in yo)",
              "dimmed": false,
              "verbs": "pedir, medir, impedir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "peço",
                  "pedimos"
                ],
                [
                  "pedes",
                  "pedis"
                ],
                [
                  "pede",
                  "pedem"
                ]
              ]
            }
          ]
        }
      ],
      "extra": "<strong>Ser vs. Estar</strong><br><br>Like Spanish, Portuguese distinguishes two verbs for \"to be\":<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Ser</th><th>Estar</th></tr></thead><tbody><tr><td>Identity / essence<br><em>Sou professor</em></td><td>Location<br><em>Estou em casa</em></td></tr><tr><td>Permanent traits<br><em>É alto</em></td><td>Temporary states<br><em>Está cansado</em></td></tr><tr><td>Origin<br><em>É de Portugal</em></td><td>Condition/mood<br><em>Está doente</em></td></tr><tr><td>Time/date<br><em>São três horas</em></td><td>Result of action<br><em>Está partido</em></td></tr></tbody></table>"
    },
    "compound_past": {
      "label": "Compound Past (Pretérito perfeito composto)",
      "icon": "bi-check2",
      "description": "Describes repeated or ongoing actions from the past continuing to the present. Unlike Spanish/French, NOT used for single completed events.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "tenho falado",
                "temos falado"
              ],
              [
                "tens falado",
                "tendes falado"
              ],
              [
                "tem falado",
                "têm falado"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ar",
              "description": "regular participle (-ado)",
              "dimmed": true,
              "verbs": "falar, estar, dar, passear",
              "example": "falar (to speak)",
              "conjugations": [
                [
                  "tenho falado",
                  "temos falado"
                ],
                [
                  "tens falado",
                  "tendes falado"
                ],
                [
                  "tem falado",
                  "têm falado"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "tenho comido",
                "temos comido"
              ],
              [
                "tens comido",
                "tendes comido"
              ],
              [
                "tem comido",
                "têm comido"
              ]
            ]
          },
          "patterns": [
            {
              "name": "fazer",
              "description": "irregular participle (feito)",
              "dimmed": false,
              "verbs": "fazer, desfazer, refazer, satisfazer",
              "example": "fazer (to do)",
              "conjugations": [
                [
                  "tenho feito",
                  "temos feito"
                ],
                [
                  "tens feito",
                  "tendes feito"
                ],
                [
                  "tem feito",
                  "têm feito"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular participle (visto)",
              "dimmed": false,
              "verbs": "ver, prever, rever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "tenho visto",
                  "temos visto"
                ],
                [
                  "tens visto",
                  "tendes visto"
                ],
                [
                  "tem visto",
                  "têm visto"
                ]
              ]
            },
            {
              "name": "escrever",
              "description": "irregular participle (escrito)",
              "dimmed": false,
              "verbs": "escrever, descrever, inscrever",
              "example": "escrever (to write)",
              "conjugations": [
                [
                  "tenho escrito",
                  "temos escrito"
                ],
                [
                  "tens escrito",
                  "tendes escrito"
                ],
                [
                  "tem escrito",
                  "têm escrito"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "tenho partido",
                "temos partido"
              ],
              [
                "tens partido",
                "tendes partido"
              ],
              [
                "tem partido",
                "têm partido"
              ]
            ]
          },
          "patterns": [
            {
              "name": "dizer",
              "description": "irregular participle (dito)",
              "dimmed": false,
              "verbs": "dizer, contradizer, predizer",
              "example": "dizer (to say)",
              "conjugations": [
                [
                  "tenho dito",
                  "temos dito"
                ],
                [
                  "tens dito",
                  "tendes dito"
                ],
                [
                  "tem dito",
                  "têm dito"
                ]
              ]
            },
            {
              "name": "vir",
              "description": "irregular participle (vindo)",
              "dimmed": false,
              "verbs": "vir, convir, intervir",
              "example": "vir (to come)",
              "conjugations": [
                [
                  "tenho vindo",
                  "temos vindo"
                ],
                [
                  "tens vindo",
                  "tendes vindo"
                ],
                [
                  "tem vindo",
                  "têm vindo"
                ]
              ]
            },
            {
              "name": "abrir",
              "description": "irregular participle (aberto)",
              "dimmed": false,
              "verbs": "abrir, cobrir, descobrir",
              "example": "abrir (to open)",
              "conjugations": [
                [
                  "tenho aberto",
                  "temos aberto"
                ],
                [
                  "tens aberto",
                  "tendes aberto"
                ],
                [
                  "tem aberto",
                  "têm aberto"
                ]
              ]
            }
          ]
        }
      ],
      "extra": "<strong>Portuguese vs. Spanish/French compound past</strong><br><br>In Portuguese, the pretérito perfeito composto expresses <em>repeated or continuous</em> actions from the past up to the present — NOT single completed events.<br><br>• <em>Tenho estudado muito</em> = I have been studying a lot (repeatedly)<br>• For a single completed event, use the pretérito perfeito simples: <em>Estudei ontem</em> = I studied yesterday<br><br>This is a major difference from Spanish and French, where the compound past is the standard past tense in speech."
    },
    "imperfect": {
      "label": "Imperfect (Pretérito imperfeito)",
      "icon": "bi-three-dots",
      "description": "Describes ongoing, habitual, or background actions in the past.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falava",
                "falávamos"
              ],
              [
                "falavas",
                "faláveis"
              ],
              [
                "falava",
                "falavam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ar",
              "description": "all regular",
              "dimmed": true,
              "verbs": "falar, estar, dar, passear, contar, pensar",
              "example": "falar (to speak)",
              "conjugations": [
                [
                  "falava",
                  "falávamos"
                ],
                [
                  "falavas",
                  "faláveis"
                ],
                [
                  "falava",
                  "falavam"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comia",
                "comíamos"
              ],
              [
                "comias",
                "comíeis"
              ],
              [
                "comia",
                "comiam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "era",
                  "éramos"
                ],
                [
                  "eras",
                  "éreis"
                ],
                [
                  "era",
                  "eram"
                ]
              ]
            },
            {
              "name": "ter",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ter, manter, obter, conter",
              "example": "ter (to have)",
              "conjugations": [
                [
                  "tinha",
                  "tínhamos"
                ],
                [
                  "tinhas",
                  "tínheis"
                ],
                [
                  "tinha",
                  "tinham"
                ]
              ]
            },
            {
              "name": "vir",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "vir, convir, intervir",
              "example": "vir (to come)",
              "conjugations": [
                [
                  "vinha",
                  "vínhamos"
                ],
                [
                  "vinhas",
                  "vínheis"
                ],
                [
                  "vinha",
                  "vinham"
                ]
              ]
            },
            {
              "name": "pôr",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "pôr, compor, dispor, propor, supor",
              "example": "pôr (to put)",
              "conjugations": [
                [
                  "punha",
                  "púnhamos"
                ],
                [
                  "punhas",
                  "púnheis"
                ],
                [
                  "punha",
                  "punham"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "partia",
                "partíamos"
              ],
              [
                "partias",
                "partíeis"
              ],
              [
                "partia",
                "partiam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ir",
              "description": "all regular",
              "dimmed": true,
              "verbs": "partir, sentir, dormir, ir, vir, dizer",
              "example": "partir (to leave)",
              "conjugations": [
                [
                  "partia",
                  "partíamos"
                ],
                [
                  "partias",
                  "partíeis"
                ],
                [
                  "partia",
                  "partiam"
                ]
              ]
            }
          ]
        }
      ]
    },
    "pluperfect": {
      "label": "Pluperfect Compound (Mais-que-perfeito composto)",
      "icon": "bi-check2-all",
      "description": "Describes an action completed before another past action. The standard form in modern Portuguese.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "tinha falado",
                "tínhamos falado"
              ],
              [
                "tinhas falado",
                "tínheis falado"
              ],
              [
                "tinha falado",
                "tinham falado"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "falar, estar, dar",
              "example": "falar (to speak)",
              "conjugations": [
                [
                  "tinha falado",
                  "tínhamos falado"
                ],
                [
                  "tinhas falado",
                  "tínheis falado"
                ],
                [
                  "tinha falado",
                  "tinham falado"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "tinha comido",
                "tínhamos comido"
              ],
              [
                "tinhas comido",
                "tínheis comido"
              ],
              [
                "tinha comido",
                "tinham comido"
              ]
            ]
          },
          "patterns": [
            {
              "name": "fazer",
              "description": "irregular participle (feito)",
              "dimmed": false,
              "verbs": "fazer",
              "example": "fazer (to do)",
              "conjugations": [
                [
                  "tinha feito",
                  "tínhamos feito"
                ],
                [
                  "tinhas feito",
                  "tínheis feito"
                ],
                [
                  "tinha feito",
                  "tinham feito"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "tinha partido",
                "tínhamos partido"
              ],
              [
                "tinhas partido",
                "tínheis partido"
              ],
              [
                "tinha partido",
                "tinham partido"
              ]
            ]
          },
          "patterns": [
            {
              "name": "dizer",
              "description": "irregular participle (dito)",
              "dimmed": false,
              "verbs": "dizer",
              "example": "dizer (to say)",
              "conjugations": [
                [
                  "tinha dito",
                  "tínhamos dito"
                ],
                [
                  "tinhas dito",
                  "tínheis dito"
                ],
                [
                  "tinha dito",
                  "tinham dito"
                ]
              ]
            }
          ]
        }
      ]
    },
    "pluperfect_simple": {
      "label": "Pluperfect Simple (Mais-que-perfeito simples)",
      "icon": "bi-chevron-double-left",
      "description": "Literary/formal pluperfect. Rare in speech but found in writing. Also used as a subjunctive alternative.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falara",
                "faláramos"
              ],
              [
                "falaras",
                "faláreis"
              ],
              [
                "falara",
                "falaram"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "falar, estar, dar",
              "example": "falar (to speak)",
              "conjugations": [
                [
                  "falara",
                  "faláramos"
                ],
                [
                  "falaras",
                  "faláreis"
                ],
                [
                  "falara",
                  "falaram"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comera",
                "comêramos"
              ],
              [
                "comeras",
                "comêreis"
              ],
              [
                "comera",
                "comeram"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser/ir",
              "description": "irregular (fo-)",
              "dimmed": false,
              "verbs": "ser, ir",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "fora",
                  "fôramos"
                ],
                [
                  "foras",
                  "fôreis"
                ],
                [
                  "fora",
                  "foram"
                ]
              ]
            },
            {
              "name": "ter",
              "description": "irregular (tive-)",
              "dimmed": false,
              "verbs": "ter",
              "example": "ter (to have)",
              "conjugations": [
                [
                  "tivera",
                  "tivéramos"
                ],
                [
                  "tiveras",
                  "tivéreis"
                ],
                [
                  "tivera",
                  "tiveram"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "partira",
                "partíramos"
              ],
              [
                "partiras",
                "partíreis"
              ],
              [
                "partira",
                "partiram"
              ]
            ]
          },
          "patterns": [
            {
              "name": "vir",
              "description": "irregular (vie-)",
              "dimmed": false,
              "verbs": "vir",
              "example": "vir (to come)",
              "conjugations": [
                [
                  "viera",
                  "viéramos"
                ],
                [
                  "vieras",
                  "viéreis"
                ],
                [
                  "viera",
                  "vieram"
                ]
              ]
            }
          ]
        }
      ]
    },
    "anterior": {
      "label": "Past Anterior (Pretérito anterior)",
      "icon": "bi-chevron-double-left",
      "description": "Literary tense for actions immediately before another past action. Extremely rare.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "tive falado",
                "tivemos falado"
              ],
              [
                "tiveste falado",
                "tivestes falado"
              ],
              [
                "teve falado",
                "tiveram falado"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "tive comido",
                "tivemos comido"
              ],
              [
                "tiveste comido",
                "tivestes comido"
              ],
              [
                "teve comido",
                "tiveram comido"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "tive partido",
                "tivemos partido"
              ],
              [
                "tiveste partido",
                "tivestes partido"
              ],
              [
                "teve partido",
                "tiveram partido"
              ]
            ]
          },
          "patterns": []
        }
      ]
    },
    "past": {
      "label": "Simple Past (Pretérito perfeito simples)",
      "icon": "bi-chevron-left",
      "description": "Describes completed actions in the past. The main past tense in spoken Portuguese.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falei",
                "falamos/falámos"
              ],
              [
                "falaste",
                "falastes"
              ],
              [
                "falou",
                "falaram"
              ]
            ]
          },
          "patterns": [
            {
              "name": "estar",
              "description": "irregular stem (estiv-)",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estive",
                  "estivemos"
                ],
                [
                  "estiveste",
                  "estivestes"
                ],
                [
                  "esteve",
                  "estiveram"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "irregular",
              "dimmed": false,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "dei",
                  "demos"
                ],
                [
                  "deste",
                  "destes"
                ],
                [
                  "deu",
                  "deram"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comi",
                "comemos"
              ],
              [
                "comeste",
                "comestes"
              ],
              [
                "comeu",
                "comeram"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser/ir",
              "description": "fully irregular (fu-)",
              "dimmed": false,
              "verbs": "ser, ir",
              "example": "ser (to be) / ir (to go)",
              "conjugations": [
                [
                  "fui",
                  "fomos"
                ],
                [
                  "foste",
                  "fostes"
                ],
                [
                  "foi",
                  "foram"
                ]
              ]
            },
            {
              "name": "ter",
              "description": "irregular stem (tiv-)",
              "dimmed": false,
              "verbs": "ter, manter, obter, conter",
              "example": "ter (to have)",
              "conjugations": [
                [
                  "tive",
                  "tivemos"
                ],
                [
                  "tiveste",
                  "tivestes"
                ],
                [
                  "teve",
                  "tiveram"
                ]
              ]
            },
            {
              "name": "haver",
              "description": "irregular stem (houv-)",
              "dimmed": false,
              "verbs": "haver",
              "example": "haver (to have/exist)",
              "conjugations": [
                [
                  "houve",
                  "houvemos"
                ],
                [
                  "houveste",
                  "houvestes"
                ],
                [
                  "houve",
                  "houveram"
                ]
              ]
            },
            {
              "name": "fazer",
              "description": "irregular stem (fiz-)",
              "dimmed": false,
              "verbs": "fazer, desfazer, refazer",
              "example": "fazer (to do)",
              "conjugations": [
                [
                  "fiz",
                  "fizemos"
                ],
                [
                  "fizeste",
                  "fizestes"
                ],
                [
                  "fez",
                  "fizeram"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular stem (soub-)",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "soube",
                  "soubemos"
                ],
                [
                  "soubeste",
                  "soubestes"
                ],
                [
                  "soube",
                  "souberam"
                ]
              ]
            },
            {
              "name": "poder",
              "description": "irregular stem (pud-)",
              "dimmed": false,
              "verbs": "poder",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "pude",
                  "pudemos"
                ],
                [
                  "pudeste",
                  "pudestes"
                ],
                [
                  "pôde",
                  "puderam"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular",
              "dimmed": false,
              "verbs": "ver, prever, rever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "vi",
                  "vimos"
                ],
                [
                  "viste",
                  "vistes"
                ],
                [
                  "viu",
                  "viram"
                ]
              ]
            },
            {
              "name": "pôr",
              "description": "irregular stem (pus-)",
              "dimmed": false,
              "verbs": "pôr, compor, dispor, propor",
              "example": "pôr (to put)",
              "conjugations": [
                [
                  "pus",
                  "pusemos"
                ],
                [
                  "puseste",
                  "pusestes"
                ],
                [
                  "pôs",
                  "puseram"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "parti",
                "partimos"
              ],
              [
                "partiste",
                "partistes"
              ],
              [
                "partiu",
                "partiram"
              ]
            ]
          },
          "patterns": [
            {
              "name": "vir",
              "description": "irregular stem (vi-)",
              "dimmed": false,
              "verbs": "vir, convir, intervir",
              "example": "vir (to come)",
              "conjugations": [
                [
                  "vim",
                  "viemos"
                ],
                [
                  "vieste",
                  "viestes"
                ],
                [
                  "veio",
                  "vieram"
                ]
              ]
            },
            {
              "name": "dizer",
              "description": "irregular stem (diss-)",
              "dimmed": false,
              "verbs": "dizer, contradizer, predizer",
              "example": "dizer (to say)",
              "conjugations": [
                [
                  "disse",
                  "dissemos"
                ],
                [
                  "disseste",
                  "dissestes"
                ],
                [
                  "disse",
                  "disseram"
                ]
              ]
            }
          ]
        }
      ]
    },
    "future": {
      "label": "Future (Futuro do presente)",
      "icon": "bi-arrow-right",
      "description": "Describes future actions, predictions, and formal promises. In speech, often replaced by 'ir + infinitive'.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falarei",
                "falaremos"
              ],
              [
                "falarás",
                "falareis"
              ],
              [
                "falará",
                "falarão"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ar",
              "description": "all regular",
              "dimmed": true,
              "verbs": "falar, estar, dar",
              "example": "falar (to speak)",
              "conjugations": [
                [
                  "falarei",
                  "falaremos"
                ],
                [
                  "falarás",
                  "falareis"
                ],
                [
                  "falará",
                  "falarão"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comerei",
                "comeremos"
              ],
              [
                "comerás",
                "comereis"
              ],
              [
                "comerá",
                "comerão"
              ]
            ]
          },
          "patterns": [
            {
              "name": "fazer",
              "description": "irregular stem (far-)",
              "dimmed": false,
              "verbs": "fazer, desfazer, refazer",
              "example": "fazer (to do)",
              "conjugations": [
                [
                  "farei",
                  "faremos"
                ],
                [
                  "farás",
                  "fareis"
                ],
                [
                  "fará",
                  "farão"
                ]
              ]
            },
            {
              "name": "dizer",
              "description": "irregular stem (dir-)",
              "dimmed": false,
              "verbs": "dizer, contradizer",
              "example": "dizer (to say)",
              "conjugations": [
                [
                  "direi",
                  "diremos"
                ],
                [
                  "dirás",
                  "direis"
                ],
                [
                  "dirá",
                  "dirão"
                ]
              ]
            },
            {
              "name": "trazer",
              "description": "irregular stem (trar-)",
              "dimmed": false,
              "verbs": "trazer",
              "example": "trazer (to bring)",
              "conjugations": [
                [
                  "trarei",
                  "traremos"
                ],
                [
                  "trarás",
                  "trareis"
                ],
                [
                  "trará",
                  "trarão"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "partirei",
                "partiremos"
              ],
              [
                "partirás",
                "partireis"
              ],
              [
                "partirá",
                "partirão"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ir",
              "description": "all regular",
              "dimmed": true,
              "verbs": "partir, sentir, dormir, ir, vir",
              "example": "partir (to leave)",
              "conjugations": [
                [
                  "partirei",
                  "partiremos"
                ],
                [
                  "partirás",
                  "partireis"
                ],
                [
                  "partirá",
                  "partirão"
                ]
              ]
            }
          ]
        }
      ]
    },
    "future_perfect": {
      "label": "Future Perfect (Futuro do presente composto)",
      "icon": "bi-arrow-right-circle",
      "description": "Describes actions that will be completed before a future point.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "terei falado",
                "teremos falado"
              ],
              [
                "terás falado",
                "tereis falado"
              ],
              [
                "terá falado",
                "terão falado"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "terei comido",
                "teremos comido"
              ],
              [
                "terás comido",
                "tereis comido"
              ],
              [
                "terá comido",
                "terão comido"
              ]
            ]
          },
          "patterns": [
            {
              "name": "fazer",
              "description": "irregular participle (feito)",
              "dimmed": false,
              "verbs": "fazer",
              "example": "fazer (to do)",
              "conjugations": [
                [
                  "terei feito",
                  "teremos feito"
                ],
                [
                  "terás feito",
                  "tereis feito"
                ],
                [
                  "terá feito",
                  "terão feito"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "terei partido",
                "teremos partido"
              ],
              [
                "terás partido",
                "tereis partido"
              ],
              [
                "terá partido",
                "terão partido"
              ]
            ]
          },
          "patterns": []
        }
      ]
    },
    "conditional": {
      "label": "Conditional (Futuro do pretérito)",
      "icon": "bi-question-circle",
      "description": "Describes what would happen under a hypothetical condition. Also used for polite requests.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falaria",
                "falaríamos"
              ],
              [
                "falarias",
                "falaríeis"
              ],
              [
                "falaria",
                "falariam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ar",
              "description": "all regular",
              "dimmed": true,
              "verbs": "falar, estar, dar",
              "example": "falar (to speak)",
              "conjugations": [
                [
                  "falaria",
                  "falaríamos"
                ],
                [
                  "falarias",
                  "falaríeis"
                ],
                [
                  "falaria",
                  "falariam"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comeria",
                "comeríamos"
              ],
              [
                "comerias",
                "comeríeis"
              ],
              [
                "comeria",
                "comeriam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "fazer",
              "description": "irregular stem (far-)",
              "dimmed": false,
              "verbs": "fazer",
              "example": "fazer (to do)",
              "conjugations": [
                [
                  "faria",
                  "faríamos"
                ],
                [
                  "farias",
                  "faríeis"
                ],
                [
                  "faria",
                  "fariam"
                ]
              ]
            },
            {
              "name": "dizer",
              "description": "irregular stem (dir-)",
              "dimmed": false,
              "verbs": "dizer",
              "example": "dizer (to say)",
              "conjugations": [
                [
                  "diria",
                  "diríamos"
                ],
                [
                  "dirias",
                  "diríeis"
                ],
                [
                  "diria",
                  "diriam"
                ]
              ]
            },
            {
              "name": "trazer",
              "description": "irregular stem (trar-)",
              "dimmed": false,
              "verbs": "trazer",
              "example": "trazer (to bring)",
              "conjugations": [
                [
                  "traria",
                  "traríamos"
                ],
                [
                  "trarias",
                  "traríeis"
                ],
                [
                  "traria",
                  "trariam"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "partiria",
                "partiríamos"
              ],
              [
                "partirias",
                "partiríeis"
              ],
              [
                "partiria",
                "partiriam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-ir",
              "description": "all regular",
              "dimmed": true,
              "verbs": "partir, sentir, ir, vir",
              "example": "partir (to leave)",
              "conjugations": [
                [
                  "partiria",
                  "partiríamos"
                ],
                [
                  "partirias",
                  "partiríeis"
                ],
                [
                  "partiria",
                  "partiriam"
                ]
              ]
            }
          ]
        }
      ]
    },
    "conditional_perfect": {
      "label": "Conditional Perfect (Futuro do pretérito composto)",
      "icon": "bi-question-circle-fill",
      "description": "Describes what would have happened if conditions had been different.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "teria falado",
                "teríamos falado"
              ],
              [
                "terias falado",
                "teríeis falado"
              ],
              [
                "teria falado",
                "teriam falado"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "teria comido",
                "teríamos comido"
              ],
              [
                "terias comido",
                "teríeis comido"
              ],
              [
                "teria comido",
                "teriam comido"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "teria partido",
                "teríamos partido"
              ],
              [
                "terias partido",
                "teríeis partido"
              ],
              [
                "teria partido",
                "teriam partido"
              ]
            ]
          },
          "patterns": []
        }
      ]
    },
    "subj_present": {
      "label": "Present (Presente do subjuntivo)",
      "icon": "bi-record-circle",
      "description": "Expresses wishes, demands, doubts about present or future situations. Triggered by 'que'.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "fale",
                "falemos"
              ],
              [
                "fales",
                "faleis"
              ],
              [
                "fale",
                "falem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "estar",
              "description": "irregular (estej-)",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "esteja",
                  "estejamos"
                ],
                [
                  "estejas",
                  "estejais"
                ],
                [
                  "esteja",
                  "estejam"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "irregular (dê-)",
              "dimmed": false,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "dê",
                  "demos"
                ],
                [
                  "dês",
                  "deis"
                ],
                [
                  "dê",
                  "deem"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "coma",
                "comamos"
              ],
              [
                "comas",
                "comais"
              ],
              [
                "coma",
                "comam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser",
              "description": "fully irregular (sej-)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "seja",
                  "sejamos"
                ],
                [
                  "sejas",
                  "sejais"
                ],
                [
                  "seja",
                  "sejam"
                ]
              ]
            },
            {
              "name": "ter",
              "description": "irregular (tenh-)",
              "dimmed": false,
              "verbs": "ter",
              "example": "ter (to have)",
              "conjugations": [
                [
                  "tenha",
                  "tenhamos"
                ],
                [
                  "tenhas",
                  "tenhais"
                ],
                [
                  "tenha",
                  "tenham"
                ]
              ]
            },
            {
              "name": "haver",
              "description": "irregular (haj-)",
              "dimmed": false,
              "verbs": "haver",
              "example": "haver (to have/exist)",
              "conjugations": [
                [
                  "haja",
                  "hajamos"
                ],
                [
                  "hajas",
                  "hajais"
                ],
                [
                  "haja",
                  "hajam"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular (saib-)",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "saiba",
                  "saibamos"
                ],
                [
                  "saibas",
                  "saibais"
                ],
                [
                  "saiba",
                  "saibam"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "parta",
                "partamos"
              ],
              [
                "partas",
                "partais"
              ],
              [
                "parta",
                "partam"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ir",
              "description": "fully irregular (vá-)",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "vá",
                  "vamos"
                ],
                [
                  "vás",
                  "vades"
                ],
                [
                  "vá",
                  "vão"
                ]
              ]
            },
            {
              "name": "vir",
              "description": "irregular (venh-)",
              "dimmed": false,
              "verbs": "vir",
              "example": "vir (to come)",
              "conjugations": [
                [
                  "venha",
                  "venhamos"
                ],
                [
                  "venhas",
                  "venhais"
                ],
                [
                  "venha",
                  "venham"
                ]
              ]
            }
          ]
        }
      ]
    },
    "subj_past": {
      "label": "Past (Pretérito perfeito do subjuntivo)",
      "icon": "bi-chevron-left",
      "description": "Expresses doubt or emotion about completed actions.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "tenha falado",
                "tenhamos falado"
              ],
              [
                "tenhas falado",
                "tenhais falado"
              ],
              [
                "tenha falado",
                "tenham falado"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "tenha comido",
                "tenhamos comido"
              ],
              [
                "tenhas comido",
                "tenhais comido"
              ],
              [
                "tenha comido",
                "tenham comido"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "tenha partido",
                "tenhamos partido"
              ],
              [
                "tenhas partido",
                "tenhais partido"
              ],
              [
                "tenha partido",
                "tenham partido"
              ]
            ]
          },
          "patterns": []
        }
      ]
    },
    "subj_imperfect": {
      "label": "Imperfect (Pretérito imperfeito do subjuntivo)",
      "icon": "bi-three-dots",
      "description": "Expresses hypothetical conditions, wishes, or unlikely scenarios. Used in 'if' clauses.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falasse",
                "falássemos"
              ],
              [
                "falasses",
                "falásseis"
              ],
              [
                "falasse",
                "falassem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "estar",
              "description": "irregular (estivesse-)",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estivesse",
                  "estivéssemos"
                ],
                [
                  "estivesses",
                  "estivésseis"
                ],
                [
                  "estivesse",
                  "estivessem"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comesse",
                "comêssemos"
              ],
              [
                "comesses",
                "comêsseis"
              ],
              [
                "comesse",
                "comessem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser/ir",
              "description": "irregular (fosse-)",
              "dimmed": false,
              "verbs": "ser, ir",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "fosse",
                  "fôssemos"
                ],
                [
                  "fosses",
                  "fôsseis"
                ],
                [
                  "fosse",
                  "fossem"
                ]
              ]
            },
            {
              "name": "ter",
              "description": "irregular (tivesse-)",
              "dimmed": false,
              "verbs": "ter",
              "example": "ter (to have)",
              "conjugations": [
                [
                  "tivesse",
                  "tivéssemos"
                ],
                [
                  "tivesses",
                  "tivésseis"
                ],
                [
                  "tivesse",
                  "tivessem"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "partisse",
                "partíssemos"
              ],
              [
                "partisses",
                "partísseis"
              ],
              [
                "partisse",
                "partissem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "vir",
              "description": "irregular (viesse-)",
              "dimmed": false,
              "verbs": "vir",
              "example": "vir (to come)",
              "conjugations": [
                [
                  "viesse",
                  "viéssemos"
                ],
                [
                  "viesses",
                  "viésseis"
                ],
                [
                  "viesse",
                  "viessem"
                ]
              ]
            }
          ]
        }
      ]
    },
    "subj_pluperfect": {
      "label": "Pluperfect (Mais-que-perfeito do subjuntivo)",
      "icon": "bi-check2-all",
      "description": "Expresses impossible past conditions — things that could have happened but didn't.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "tivesse falado",
                "tivéssemos falado"
              ],
              [
                "tivesses falado",
                "tivésseis falado"
              ],
              [
                "tivesse falado",
                "tivessem falado"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "tivesse comido",
                "tivéssemos comido"
              ],
              [
                "tivesses comido",
                "tivésseis comido"
              ],
              [
                "tivesse comido",
                "tivessem comido"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "tivesse partido",
                "tivéssemos partido"
              ],
              [
                "tivesses partido",
                "tivésseis partido"
              ],
              [
                "tivesse partido",
                "tivessem partido"
              ]
            ]
          },
          "patterns": []
        }
      ]
    },
    "subj_future": {
      "label": "Future (Futuro do subjuntivo)",
      "icon": "bi-arrow-right",
      "description": "Unique to Portuguese. Expresses uncertain future conditions. Used after 'quando', 'se', 'assim que', etc. Still actively used in everyday speech.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falar",
                "falarmos"
              ],
              [
                "falares",
                "falardes"
              ],
              [
                "falar",
                "falarem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "estar",
              "description": "irregular (estiver-)",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estiver",
                  "estivermos"
                ],
                [
                  "estiveres",
                  "estiverdes"
                ],
                [
                  "estiver",
                  "estiverem"
                ]
              ]
            }
          ]
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comer",
                "comermos"
              ],
              [
                "comeres",
                "comerdes"
              ],
              [
                "comer",
                "comerem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser/ir",
              "description": "irregular (for-)",
              "dimmed": false,
              "verbs": "ser, ir",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "for",
                  "formos"
                ],
                [
                  "fores",
                  "fordes"
                ],
                [
                  "for",
                  "forem"
                ]
              ]
            },
            {
              "name": "ter",
              "description": "irregular (tiver-)",
              "dimmed": false,
              "verbs": "ter",
              "example": "ter (to have)",
              "conjugations": [
                [
                  "tiver",
                  "tivermos"
                ],
                [
                  "tiveres",
                  "tiverdes"
                ],
                [
                  "tiver",
                  "tiverem"
                ]
              ]
            },
            {
              "name": "fazer",
              "description": "irregular (fizer-)",
              "dimmed": false,
              "verbs": "fazer",
              "example": "fazer (to do)",
              "conjugations": [
                [
                  "fizer",
                  "fizermos"
                ],
                [
                  "fizeres",
                  "fizerdes"
                ],
                [
                  "fizer",
                  "fizerem"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular (souber-)",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "souber",
                  "soubermos"
                ],
                [
                  "souberes",
                  "souberdes"
                ],
                [
                  "souber",
                  "souberem"
                ]
              ]
            },
            {
              "name": "poder",
              "description": "irregular (puder-)",
              "dimmed": false,
              "verbs": "poder",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "puder",
                  "pudermos"
                ],
                [
                  "puderes",
                  "puderdes"
                ],
                [
                  "puder",
                  "puderem"
                ]
              ]
            }
          ]
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "partir",
                "partirmos"
              ],
              [
                "partires",
                "partirdes"
              ],
              [
                "partir",
                "partirem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "vir",
              "description": "irregular (vier-)",
              "dimmed": false,
              "verbs": "vir",
              "example": "vir (to come)",
              "conjugations": [
                [
                  "vier",
                  "viermos"
                ],
                [
                  "vieres",
                  "vierdes"
                ],
                [
                  "vier",
                  "vierem"
                ]
              ]
            }
          ]
        }
      ],
      "extra": "<strong>Future Subjunctive — unique to Portuguese</strong><br><br>This tense is extinct in Spanish and French but alive in Portuguese. It's used after:<br><br>• <strong>quando</strong> (when): <em>Quando eu <strong>falar</strong> com ele...</em><br>• <strong>se</strong> (if): <em>Se tu <strong>quiseres</strong>...</em><br>• <strong>assim que</strong> (as soon as): <em>Assim que ele <strong>chegar</strong>...</em><br>• <strong>enquanto</strong> (while): <em>Enquanto eu <strong>viver</strong>...</em><br><br>Compare with Spanish, which uses the present subjunctive in these contexts: <em>Cuando yo <strong>hable</strong>...</em>"
    },
    "subj_future_perfect": {
      "label": "Future Perfect (Futuro do subjuntivo composto)",
      "icon": "bi-arrow-right-circle",
      "description": "Expresses an action that will have been completed before a future condition. Rare but used.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "tiver falado",
                "tivermos falado"
              ],
              [
                "tiveres falado",
                "tiverdes falado"
              ],
              [
                "tiver falado",
                "tiverem falado"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "tiver comido",
                "tivermos comido"
              ],
              [
                "tiveres comido",
                "tiverdes comido"
              ],
              [
                "tiver comido",
                "tiverem comido"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "tiver partido",
                "tivermos partido"
              ],
              [
                "tiveres partido",
                "tiverdes partido"
              ],
              [
                "tiver partido",
                "tiverem partido"
              ]
            ]
          },
          "patterns": []
        }
      ]
    },
    "imp_affirmative": {
      "label": "Affirmative (Imperativo afirmativo)",
      "icon": "bi-check-circle",
      "description": "Gives positive commands.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "fala (tu)",
                "falai (vós)"
              ],
              [
                "fale (você)",
                "falem (vocês)"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "come (tu)",
                "comei (vós)"
              ],
              [
                "coma (você)",
                "comam (vocês)"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser",
              "description": "irregular",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "sê (tu)",
                  "sede (vós)"
                ],
                [
                  "seja (você)",
                  "sejam (vocês)"
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
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "parte (tu)",
                "parti (vós)"
              ],
              [
                "parta (você)",
                "partam (vocês)"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": [
            {
              "name": "ir",
              "description": "irregular",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "vai (tu)",
                  "ide (vós)"
                ],
                [
                  "vá (você)",
                  "vão (vocês)"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ]
        }
      ]
    },
    "imp_negative": {
      "label": "Negative (Imperativo negativo)",
      "icon": "bi-x-circle",
      "description": "Gives negative commands. Uses subjunctive forms.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "não fales (tu)",
                "não faleis (vós)"
              ],
              [
                "não fale (você)",
                "não falem (vocês)"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "não comas (tu)",
                "não comais (vós)"
              ],
              [
                "não coma (você)",
                "não comam (vocês)"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "não partas (tu)",
                "não partais (vós)"
              ],
              [
                "não parta (você)",
                "não partam (vocês)"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": []
        }
      ]
    },
    "personal_infinitive": {
      "label": "Personal Infinitive (Infinitivo pessoal)",
      "icon": "bi-infinity",
      "description": "A conjugated infinitive unique to Portuguese (and Galician). Carries person/number information. Used after prepositions, in subordinate clauses, and to clarify the subject.",
      "columns": [
        {
          "label": "-ar",
          "regular": {
            "name": "regular -ar",
            "example": "falar (to speak)",
            "conjugations": [
              [
                "falar",
                "falarmos"
              ],
              [
                "falares",
                "falardes"
              ],
              [
                "falar",
                "falarem"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-er",
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comer",
                "comermos"
              ],
              [
                "comeres",
                "comerdes"
              ],
              [
                "comer",
                "comerem"
              ]
            ]
          },
          "patterns": []
        },
        {
          "label": "-ir",
          "regular": {
            "name": "regular -ir",
            "example": "partir (to leave)",
            "conjugations": [
              [
                "partir",
                "partirmos"
              ],
              [
                "partires",
                "partirdes"
              ],
              [
                "partir",
                "partirem"
              ]
            ]
          },
          "patterns": [
            {
              "name": "ser",
              "description": "irregular",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "ser",
                  "sermos"
                ],
                [
                  "seres",
                  "serdes"
                ],
                [
                  "ser",
                  "serem"
                ]
              ]
            }
          ]
        }
      ],
      "extra": "<strong>Personal Infinitive — unique to Portuguese</strong><br><br>No other major Romance language has a conjugated infinitive. It allows the infinitive to express who performs the action:<br><br>• <em>É importante <strong>falarmos</strong></em> = It's important <strong>for us to speak</strong><br>• <em>Antes de <strong>saíres</strong></em> = Before <strong>you leave</strong><br>• <em>Sem <strong>eles saberem</strong></em> = Without <strong>them knowing</strong><br><br>The forms are identical to the future subjunctive for regular verbs, but they differ for irregular verbs (ser: future subj. <em>for</em> vs. personal inf. <em>ser</em>)."
    }
  },
  "pluralization": [
    { "rule": "Ends in vowel: add -s", "singular": "casa", "plural": "casas", "examples": "livro→livros, gato→gatos, mesa→mesas, carro→carros" },
    { "rule": "Ends in -r, -s, -z: add -es", "singular": "flor", "plural": "flores", "examples": "mar→mares, país→países, luz→luzes, vez→vezes" },
    { "rule": "-ão → -ões (most common)", "singular": "coração", "plural": "corações", "examples": "opinião→opiniões, limão→limões, eleição→eleições, canção→canções" },
    { "rule": "-ão → -ães", "singular": "pão", "plural": "pães", "examples": "cão→cães, capitão→capitães, alemão→alemães" },
    { "rule": "-ão → -ãos", "singular": "mão", "plural": "mãos", "examples": "irmão→irmãos, cidadão→cidadãos, grão→grãos, cristão→cristãos" },
    { "rule": "-al → -ais", "singular": "animal", "plural": "animais", "examples": "jornal→jornais, hospital→hospitais, canal→canais, final→finais" },
    { "rule": "-el → -éis", "singular": "papel", "plural": "papéis", "examples": "anel→anéis, pastel→pastéis, hotel→hotéis" },
    { "rule": "-ol → -óis", "singular": "farol", "plural": "faróis", "examples": "anzol→anzóis, lençol→lençóis" },
    { "rule": "-ul → -uis", "singular": "azul", "plural": "azuis", "examples": "paul→pauis" },
    { "rule": "-m → -ns", "singular": "homem", "plural": "homens", "examples": "jardim→jardins, jovem→jovens, viagem→viagens, nuvem→nuvens" },
    { "rule": "Irregular", "singular": "carácter", "plural": "caracteres", "examples": "cônsul→cônsules" }
  ],
  "pronouns": {
    "categories": [
      {
        "name": "Subject Pronouns (Pronomes sujeito)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "eu", "nós"],
          ["2nd person", "tu", "vós"],
          ["3rd person (m)", "ele", "eles"],
          ["3rd person (f)", "ela", "elas"],
          ["Formal", "você", "vocês"]
        ]
      },
      {
        "name": "Direct Object Pronouns (Pronomes de OD)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "me", "nos"],
          ["2nd person", "te", "vos"],
          ["3rd person (m)", "o (lo, no)", "os (los, nos)"],
          ["3rd person (f)", "a (la, na)", "as (las, nas)"]
        ]
      },
      {
        "name": "Indirect Object Pronouns (Pronomes de OI)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "me", "nos"],
          ["2nd person", "te", "vos"],
          ["3rd person", "lhe", "lhes"]
        ]
      },
      {
        "name": "Prepositional Pronouns (Pronomes preposicionados)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "mim", "nós"],
          ["2nd person", "ti", "vós"],
          ["3rd person (m)", "ele", "eles"],
          ["3rd person (f)", "ela", "elas"],
          ["Reflexive", "si", "si"],
          ["With com", "comigo", "connosco / conosco"]
        ]
      },
      {
        "name": "Possessive Adjectives & Pronouns (Possessivos)",
        "headers": ["Person", "Masc. sing.", "Fem. sing.", "Masc. pl.", "Fem. pl."],
        "rows": [
          ["1st sing.", "meu", "minha", "meus", "minhas"],
          ["2nd sing.", "teu", "tua", "teus", "tuas"],
          ["3rd sing.", "seu", "sua", "seus", "suas"],
          ["1st pl.", "nosso", "nossa", "nossos", "nossas"],
          ["2nd pl.", "vosso", "vossa", "vossos", "vossas"],
          ["3rd pl.", "seu", "sua", "seus", "suas"]
        ]
      },
      {
        "name": "Reflexive Pronouns (Pronomes reflexivos)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "me", "nos"],
          ["2nd person", "te", "vos"],
          ["3rd person", "se", "se"]
        ]
      }
    ]
  },
  "chart": {
    "columns": ["Past (Passado)", "Present (Presente)", "Future (Futuro)", "Conditional (Condicional)"],
    "rows": ["Simple (Simples)", "Compound (Composto)", "Imperfect (Imperfeito)", "Pluperfect (Mais-que-perfeito)"],
    "groups": ["-ar: falar", "-er: comer", "-ir: partir"],
    "cells": [
      [
        { "form": "Pret. perfeito simples", "rule": "Stem + endings",
          "er": [["eu falei", "nós falámos"], ["tu falaste", "vós falastes"], ["ele falou", "eles falaram"]],
          "ir": [["eu comi", "nós comemos"], ["tu comeste", "vós comestes"], ["ele comeu", "eles comeram"]],
          "re": [["eu parti", "nós partimos"], ["tu partiste", "vós partistes"], ["ele partiu", "eles partiram"]] },
        { "form": "Presente", "rule": "Stem + endings",
          "er": [["eu falo", "nós falamos"], ["tu falas", "vós falais"], ["ele fala", "eles falam"]],
          "ir": [["eu como", "nós comemos"], ["tu comes", "vós comeis"], ["ele come", "eles comem"]],
          "re": [["eu parto", "nós partimos"], ["tu partes", "vós partis"], ["ele parte", "eles partem"]] },
        { "form": "Futuro do presente", "rule": "Inf. + endings",
          "er": [["eu falarei", "nós falaremos"], ["tu falarás", "vós falareis"], ["ele falará", "eles falarão"]],
          "ir": [["eu comerei", "nós comeremos"], ["tu comerás", "vós comereis"], ["ele comerá", "eles comerão"]],
          "re": [["eu partirei", "nós partiremos"], ["tu partirás", "vós partireis"], ["ele partirá", "eles partirão"]] },
        { "form": "Futuro do pretérito", "rule": "Inf. + endings",
          "er": [["eu falaria", "nós falaríamos"], ["tu falarias", "vós falaríeis"], ["ele falaria", "eles falariam"]],
          "ir": [["eu comeria", "nós comeríamos"], ["tu comerias", "vós comeríeis"], ["ele comeria", "eles comeriam"]],
          "re": [["eu partiria", "nós partiríamos"], ["tu partirias", "vós partiríeis"], ["ele partiria", "eles partiriam"]] }
      ],
      [
        { "form": "Pret. perf. composto", "rule": "Pres. ter + p.p.",
          "er": [["eu tenho falado", "nós temos falado"], ["tu tens falado", "vós tendes falado"], ["ele tem falado", "eles têm falado"]],
          "ir": [["eu tenho comido", "nós temos comido"], ["tu tens comido", "vós tendes comido"], ["ele tem comido", "eles têm comido"]],
          "re": [["eu tenho partido", "nós temos partido"], ["tu tens partido", "vós tendes partido"], ["ele tem partido", "eles têm partido"]] },
        null,
        { "form": "Futuro perf. composto", "rule": "Fut. ter + p.p.",
          "er": [["eu terei falado", "nós teremos falado"], ["tu terás falado", "vós tereis falado"], ["ele terá falado", "eles terão falado"]],
          "ir": [["eu terei comido", "nós teremos comido"], ["tu terás comido", "vós tereis comido"], ["ele terá comido", "eles terão comido"]],
          "re": [["eu terei partido", "nós teremos partido"], ["tu terás partido", "vós tereis partido"], ["ele terá partido", "eles terão partido"]] },
        { "form": "Fut. pret. composto", "rule": "Cond. ter + p.p.",
          "er": [["eu teria falado", "nós teríamos falado"], ["tu terias falado", "vós teríeis falado"], ["ele teria falado", "eles teriam falado"]],
          "ir": [["eu teria comido", "nós teríamos comido"], ["tu terias comido", "vós teríeis comido"], ["ele teria comido", "eles teriam comido"]],
          "re": [["eu teria partido", "nós teríamos partido"], ["tu terias partido", "vós teríeis partido"], ["ele teria partido", "eles teriam partido"]] }
      ],
      [
        { "form": "Pret. imperfeito", "rule": "Stem + endings",
          "er": [["eu falava", "nós falávamos"], ["tu falavas", "vós faláveis"], ["ele falava", "eles falavam"]],
          "ir": [["eu comia", "nós comíamos"], ["tu comias", "vós comíeis"], ["ele comia", "eles comiam"]],
          "re": [["eu partia", "nós partíamos"], ["tu partias", "vós partíeis"], ["ele partia", "eles partiam"]] },
        null, null, null
      ],
      [
        { "form": "Mais-que-perf. composto", "rule": "Imp. ter + p.p.",
          "er": [["eu tinha falado", "nós tínhamos falado"], ["tu tinhas falado", "vós tínheis falado"], ["ele tinha falado", "eles tinham falado"]],
          "ir": [["eu tinha comido", "nós tínhamos comido"], ["tu tinhas comido", "vós tínheis comido"], ["ele tinha comido", "eles tinham comido"]],
          "re": [["eu tinha partido", "nós tínhamos partido"], ["tu tinhas partido", "vós tínheis partido"], ["ele tinha partido", "eles tinham partido"]] },
        null, null, null
      ]
    ]
  }
};
