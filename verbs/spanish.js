var spanishData = {
  "language": "Spanish",
  "title": "Spanish Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" }
  ],
  "theme": {
    "primary": "#b03060",
    "secondary": "#993366",
    "tableHeader": "#c2185b",
    "stripedRow": "#fce4ec",
    "border": "#e8a0bf"
  },
  "tenses": {
    "present": {
      "label": "Present (Presente de indicativo)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estoy",
                  "estamos"
                ],
                [
                  "estás",
                  "estáis"
                ],
                [
                  "está",
                  "están"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "stem change (o → ue)",
              "dimmed": false,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "cuento",
                  "contamos"
                ],
                [
                  "cuentas",
                  "contáis"
                ],
                [
                  "cuenta",
                  "cuentan"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "stem change (e → ie)",
              "dimmed": false,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "pienso",
                  "pensamos"
                ],
                [
                  "piensas",
                  "pensáis"
                ],
                [
                  "piensa",
                  "piensan"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "stem change (u → ue)",
              "dimmed": false,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "juego",
                  "jugamos"
                ],
                [
                  "juegas",
                  "jugáis"
                ],
                [
                  "juega",
                  "juegan"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "yo irregular (-go)",
              "dimmed": false,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "doy",
                  "damos"
                ],
                [
                  "das",
                  "dais"
                ],
                [
                  "da",
                  "dan"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "empiezo",
                  "empezamos"
                ],
                [
                  "empiezas",
                  "empezáis"
                ],
                [
                  "empieza",
                  "empiezan"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "llego",
                  "llegamos"
                ],
                [
                  "llegas",
                  "llegáis"
                ],
                [
                  "llega",
                  "llegan"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "busco",
                  "buscamos"
                ],
                [
                  "buscas",
                  "buscáis"
                ],
                [
                  "busca",
                  "buscan"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "averiguo",
                  "averiguamos"
                ],
                [
                  "averiguas",
                  "averiguáis"
                ],
                [
                  "averigua",
                  "averiguan"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hablo",
                "hablamos"
              ],
              [
                "hablas",
                "habláis"
              ],
              [
                "habla",
                "hablan"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "soy",
                  "somos"
                ],
                [
                  "eres",
                  "sois"
                ],
                [
                  "es",
                  "son"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "he",
                  "hemos"
                ],
                [
                  "has",
                  "habéis"
                ],
                [
                  "ha",
                  "han"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular yo",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "veo",
                  "vemos"
                ],
                [
                  "ves",
                  "veis"
                ],
                [
                  "ve",
                  "ven"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular yo",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "sé",
                  "sabemos"
                ],
                [
                  "sabes",
                  "sabéis"
                ],
                [
                  "sabe",
                  "saben"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "stem change (o → ue)",
              "dimmed": false,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "puedo",
                  "podemos"
                ],
                [
                  "puedes",
                  "podéis"
                ],
                [
                  "puede",
                  "pueden"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "stem change (e → ie)",
              "dimmed": false,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "quiero",
                  "queremos"
                ],
                [
                  "quieres",
                  "queréis"
                ],
                [
                  "quiere",
                  "quieren"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "yo irregular (-go)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "tener (to have)",
              "conjugations": [
                [
                  "tengo",
                  "tenemos"
                ],
                [
                  "tienes",
                  "tenéis"
                ],
                [
                  "tiene",
                  "tienen"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "yo irregular (-zco)",
              "dimmed": false,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "conozco",
                  "conocemos"
                ],
                [
                  "conoces",
                  "conocéis"
                ],
                [
                  "conoce",
                  "conocen"
                ]
              ]
            }
          ],
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
                "coméis"
              ],
              [
                "come",
                "comen"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "voy",
                  "vamos"
                ],
                [
                  "vas",
                  "vais"
                ],
                [
                  "va",
                  "van"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "digo",
                  "decimos"
                ],
                [
                  "dices",
                  "decís"
                ],
                [
                  "dice",
                  "dicen"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "stem change (e → ie)",
              "dimmed": false,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "siento",
                  "sentimos"
                ],
                [
                  "sientes",
                  "sentís"
                ],
                [
                  "siente",
                  "sienten"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "stem change (e → i)",
              "dimmed": false,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "pido",
                  "pedimos"
                ],
                [
                  "pides",
                  "pedís"
                ],
                [
                  "pide",
                  "piden"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "stem change (o → ue)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "duermo",
                  "dormimos"
                ],
                [
                  "duermes",
                  "dormís"
                ],
                [
                  "duerme",
                  "duermen"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "yo irregular (-go)",
              "dimmed": false,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "vengo",
                  "venimos"
                ],
                [
                  "vienes",
                  "venís"
                ],
                [
                  "viene",
                  "vienen"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "yo irregular (-zco)",
              "dimmed": false,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "produzco",
                  "producimos"
                ],
                [
                  "produces",
                  "producís"
                ],
                [
                  "produce",
                  "producen"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "y insertion (u → uy)",
              "dimmed": false,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "construyo",
                  "construimos"
                ],
                [
                  "construyes",
                  "construís"
                ],
                [
                  "construye",
                  "construyen"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "vivo",
                "vivimos"
              ],
              [
                "vives",
                "vivís"
              ],
              [
                "vive",
                "viven"
              ]
            ]
          }
        }
      ],
      "description": "Describes current states, habitual actions, and general truths. Also used for scheduled future events.",
      "extra": "<strong>Ser vs. Estar</strong><br><br>Both mean \"to be\" but are used differently:<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Ser</th><th>Estar</th></tr></thead><tbody><tr><td>Identity<br><em>Soy profesor</em></td><td>Location<br><em>Estoy en casa</em></td></tr><tr><td>Permanent traits<br><em>Es alto</em></td><td>Temporary states<br><em>Está cansado</em></td></tr><tr><td>Origin<br><em>Es de España</em></td><td>Condition/mood<br><em>Está enfermo</em></td></tr><tr><td>Time/date<br><em>Son las tres</em></td><td>Result of action<br><em>Está roto</em></td></tr><tr><td>Material<br><em>Es de madera</em></td><td>Progressive<br><em>Está hablando</em></td></tr></tbody></table>"
    },
    "compound_past": {
      "label": "Compound Past (Pretérito perfecto compuesto)",
      "icon": "bi-check2",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "he estado",
                  "hemos estado"
                ],
                [
                  "has estado",
                  "habéis estado"
                ],
                [
                  "ha estado",
                  "han estado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "he contado",
                  "hemos contado"
                ],
                [
                  "has contado",
                  "habéis contado"
                ],
                [
                  "ha contado",
                  "han contado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "he pensado",
                  "hemos pensado"
                ],
                [
                  "has pensado",
                  "habéis pensado"
                ],
                [
                  "ha pensado",
                  "han pensado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "he jugado",
                  "hemos jugado"
                ],
                [
                  "has jugado",
                  "habéis jugado"
                ],
                [
                  "ha jugado",
                  "han jugado"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "he dado",
                  "hemos dado"
                ],
                [
                  "has dado",
                  "habéis dado"
                ],
                [
                  "ha dado",
                  "han dado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "he empezado",
                  "hemos empezado"
                ],
                [
                  "has empezado",
                  "habéis empezado"
                ],
                [
                  "ha empezado",
                  "han empezado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "he llegado",
                  "hemos llegado"
                ],
                [
                  "has llegado",
                  "habéis llegado"
                ],
                [
                  "ha llegado",
                  "han llegado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "he buscado",
                  "hemos buscado"
                ],
                [
                  "has buscado",
                  "habéis buscado"
                ],
                [
                  "ha buscado",
                  "han buscado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "he averiguado",
                  "hemos averiguado"
                ],
                [
                  "has averiguado",
                  "habéis averiguado"
                ],
                [
                  "ha averiguado",
                  "han averiguado"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "he hablado",
                "hemos hablado"
              ],
              [
                "has hablado",
                "habéis hablado"
              ],
              [
                "ha hablado",
                "han hablado"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular participle (sido)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "he sido",
                  "hemos sido"
                ],
                [
                  "has sido",
                  "habéis sido"
                ],
                [
                  "ha sido",
                  "han sido"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular participle (habido)",
              "dimmed": true,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "he habido",
                  "hemos habido"
                ],
                [
                  "has habido",
                  "habéis habido"
                ],
                [
                  "ha habido",
                  "han habido"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular participle (visto)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "he visto",
                  "hemos visto"
                ],
                [
                  "has visto",
                  "habéis visto"
                ],
                [
                  "ha visto",
                  "han visto"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular participle (sabido)",
              "dimmed": true,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "he sabido",
                  "hemos sabido"
                ],
                [
                  "has sabido",
                  "habéis sabido"
                ],
                [
                  "ha sabido",
                  "han sabido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (podido)",
              "dimmed": true,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "he podido",
                  "hemos podido"
                ],
                [
                  "has podido",
                  "habéis podido"
                ],
                [
                  "ha podido",
                  "han podido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (querido)",
              "dimmed": true,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "he querido",
                  "hemos querido"
                ],
                [
                  "has querido",
                  "habéis querido"
                ],
                [
                  "ha querido",
                  "han querido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (tenido / puesto / hecho)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "hacer (to do/make)",
              "conjugations": [
                [
                  "he hecho",
                  "hemos hecho"
                ],
                [
                  "has hecho",
                  "habéis hecho"
                ],
                [
                  "ha hecho",
                  "han hecho"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "he conocido",
                  "hemos conocido"
                ],
                [
                  "has conocido",
                  "habéis conocido"
                ],
                [
                  "ha conocido",
                  "han conocido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "he comido",
                "hemos comido"
              ],
              [
                "has comido",
                "habéis comido"
              ],
              [
                "ha comido",
                "han comido"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular participle (ido)",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "he ido",
                  "hemos ido"
                ],
                [
                  "has ido",
                  "habéis ido"
                ],
                [
                  "ha ido",
                  "han ido"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular participle (dicho)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "he dicho",
                  "hemos dicho"
                ],
                [
                  "has dicho",
                  "habéis dicho"
                ],
                [
                  "ha dicho",
                  "han dicho"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "he sentido",
                  "hemos sentido"
                ],
                [
                  "has sentido",
                  "habéis sentido"
                ],
                [
                  "ha sentido",
                  "han sentido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "he pedido",
                  "hemos pedido"
                ],
                [
                  "has pedido",
                  "habéis pedido"
                ],
                [
                  "ha pedido",
                  "han pedido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (muerto)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "morir (to die)",
              "conjugations": [
                [
                  "he muerto",
                  "hemos muerto"
                ],
                [
                  "has muerto",
                  "habéis muerto"
                ],
                [
                  "ha muerto",
                  "han muerto"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (venido)",
              "dimmed": true,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "he venido",
                  "hemos venido"
                ],
                [
                  "has venido",
                  "habéis venido"
                ],
                [
                  "ha venido",
                  "han venido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "he producido",
                  "hemos producido"
                ],
                [
                  "has producido",
                  "habéis producido"
                ],
                [
                  "ha producido",
                  "han producido"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "he construido",
                  "hemos construido"
                ],
                [
                  "has construido",
                  "habéis construido"
                ],
                [
                  "ha construido",
                  "han construido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "he vivido",
                "hemos vivido"
              ],
              [
                "has vivido",
                "habéis vivido"
              ],
              [
                "ha vivido",
                "han vivido"
              ]
            ]
          }
        }
      ],
      "description": "Describes completed actions with relevance to the present. The most common past tense in spoken language.",
      "extra": "<strong>Regional variation</strong><br><br>Usage of pretérito perfecto compuesto vs. pretérito indefinido varies significantly by region:<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Spain</th><th>Latin America</th></tr></thead><tbody><tr><td>Uses perfecto compuesto for recent/today events<br><em>Hoy he comido paella</em></td><td>Uses indefinido even for recent events<br><em>Hoy comí algo</em></td></tr><tr><td>Distinction: unfinished vs. finished time period</td><td>Indefinido is the default past tense</td></tr><tr><td>Similar to French/Italian usage</td><td>Similar to English past simple usage</td></tr></tbody></table>"
    },
    "imperfect": {
      "label": "Imperfect (Pretérito imperfecto)",
      "icon": "bi-three-dots",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estaba",
                  "estábamos"
                ],
                [
                  "estabas",
                  "estabais"
                ],
                [
                  "estaba",
                  "estaban"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "contaba",
                  "contábamos"
                ],
                [
                  "contabas",
                  "contabais"
                ],
                [
                  "contaba",
                  "contaban"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "pensaba",
                  "pensábamos"
                ],
                [
                  "pensabas",
                  "pensabais"
                ],
                [
                  "pensaba",
                  "pensaban"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "jugaba",
                  "jugábamos"
                ],
                [
                  "jugabas",
                  "jugabais"
                ],
                [
                  "jugaba",
                  "jugaban"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "daba",
                  "dábamos"
                ],
                [
                  "dabas",
                  "dabais"
                ],
                [
                  "daba",
                  "daban"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "empezaba",
                  "empezábamos"
                ],
                [
                  "empezabas",
                  "empezabais"
                ],
                [
                  "empezaba",
                  "empezaban"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "llegaba",
                  "llegábamos"
                ],
                [
                  "llegabas",
                  "llegabais"
                ],
                [
                  "llegaba",
                  "llegaban"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "buscaba",
                  "buscábamos"
                ],
                [
                  "buscabas",
                  "buscabais"
                ],
                [
                  "buscaba",
                  "buscaban"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-aba)",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "averiguaba",
                  "averiguábamos"
                ],
                [
                  "averiguabas",
                  "averiguabais"
                ],
                [
                  "averiguaba",
                  "averiguaban"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hablaba",
                "hablábamos"
              ],
              [
                "hablabas",
                "hablabais"
              ],
              [
                "hablaba",
                "hablaban"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "fully irregular (er-)",
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
                  "erais"
                ],
                [
                  "era",
                  "eran"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "había",
                  "habíamos"
                ],
                [
                  "habías",
                  "habíais"
                ],
                [
                  "había",
                  "habían"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular (ve-)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "veía",
                  "veíamos"
                ],
                [
                  "veías",
                  "veíais"
                ],
                [
                  "veía",
                  "veían"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "sabía",
                  "sabíamos"
                ],
                [
                  "sabías",
                  "sabíais"
                ],
                [
                  "sabía",
                  "sabían"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "podía",
                  "podíamos"
                ],
                [
                  "podías",
                  "podíais"
                ],
                [
                  "podía",
                  "podían"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "quería",
                  "queríamos"
                ],
                [
                  "querías",
                  "queríais"
                ],
                [
                  "quería",
                  "querían"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "tener (to have)",
              "conjugations": [
                [
                  "tenía",
                  "teníamos"
                ],
                [
                  "tenías",
                  "teníais"
                ],
                [
                  "tenía",
                  "tenían"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "conocía",
                  "conocíamos"
                ],
                [
                  "conocías",
                  "conocíais"
                ],
                [
                  "conocía",
                  "conocían"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comía",
                "comíamos"
              ],
              [
                "comías",
                "comíais"
              ],
              [
                "comía",
                "comían"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "fully irregular (ib-)",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "iba",
                  "íbamos"
                ],
                [
                  "ibas",
                  "ibais"
                ],
                [
                  "iba",
                  "iban"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "decía",
                  "decíamos"
                ],
                [
                  "decías",
                  "decíais"
                ],
                [
                  "decía",
                  "decían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "sentía",
                  "sentíamos"
                ],
                [
                  "sentías",
                  "sentíais"
                ],
                [
                  "sentía",
                  "sentían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "pedía",
                  "pedíamos"
                ],
                [
                  "pedías",
                  "pedíais"
                ],
                [
                  "pedía",
                  "pedían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "dormir, morir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormía",
                  "dormíamos"
                ],
                [
                  "dormías",
                  "dormíais"
                ],
                [
                  "dormía",
                  "dormían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "venía",
                  "veníamos"
                ],
                [
                  "venías",
                  "veníais"
                ],
                [
                  "venía",
                  "venían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "producía",
                  "producíamos"
                ],
                [
                  "producías",
                  "producíais"
                ],
                [
                  "producía",
                  "producían"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-ía)",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "construía",
                  "construíamos"
                ],
                [
                  "construías",
                  "construíais"
                ],
                [
                  "construía",
                  "construían"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "vivía",
                "vivíamos"
              ],
              [
                "vivías",
                "vivíais"
              ],
              [
                "vivía",
                "vivían"
              ]
            ]
          }
        }
      ],
      "description": "Describes ongoing, habitual, or background actions in the past. Sets the scene. 'I used to walk' or 'I was walking.'"
    },
    "pluperfect": {
      "label": "Pluperfect (Pretérito pluscuamperfecto)",
      "icon": "bi-check2-all",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "había estado",
                  "habíamos estado"
                ],
                [
                  "habías estado",
                  "habíais estado"
                ],
                [
                  "había estado",
                  "habían estado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "había contado",
                  "habíamos contado"
                ],
                [
                  "habías contado",
                  "habíais contado"
                ],
                [
                  "había contado",
                  "habían contado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "había pensado",
                  "habíamos pensado"
                ],
                [
                  "habías pensado",
                  "habíais pensado"
                ],
                [
                  "había pensado",
                  "habían pensado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "había jugado",
                  "habíamos jugado"
                ],
                [
                  "habías jugado",
                  "habíais jugado"
                ],
                [
                  "había jugado",
                  "habían jugado"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "había dado",
                  "habíamos dado"
                ],
                [
                  "habías dado",
                  "habíais dado"
                ],
                [
                  "había dado",
                  "habían dado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "había empezado",
                  "habíamos empezado"
                ],
                [
                  "habías empezado",
                  "habíais empezado"
                ],
                [
                  "había empezado",
                  "habían empezado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "había llegado",
                  "habíamos llegado"
                ],
                [
                  "habías llegado",
                  "habíais llegado"
                ],
                [
                  "había llegado",
                  "habían llegado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "había buscado",
                  "habíamos buscado"
                ],
                [
                  "habías buscado",
                  "habíais buscado"
                ],
                [
                  "había buscado",
                  "habían buscado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "había averiguado",
                  "habíamos averiguado"
                ],
                [
                  "habías averiguado",
                  "habíais averiguado"
                ],
                [
                  "había averiguado",
                  "habían averiguado"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "había hablado",
                "habíamos hablado"
              ],
              [
                "habías hablado",
                "habíais hablado"
              ],
              [
                "había hablado",
                "habían hablado"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular participle (sido)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "había sido",
                  "habíamos sido"
                ],
                [
                  "habías sido",
                  "habíais sido"
                ],
                [
                  "había sido",
                  "habían sido"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular participle (habido)",
              "dimmed": true,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "había habido",
                  "habíamos habido"
                ],
                [
                  "habías habido",
                  "habíais habido"
                ],
                [
                  "había habido",
                  "habían habido"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular participle (visto)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "había visto",
                  "habíamos visto"
                ],
                [
                  "habías visto",
                  "habíais visto"
                ],
                [
                  "había visto",
                  "habían visto"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular participle (sabido)",
              "dimmed": true,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "había sabido",
                  "habíamos sabido"
                ],
                [
                  "habías sabido",
                  "habíais sabido"
                ],
                [
                  "había sabido",
                  "habían sabido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (podido)",
              "dimmed": true,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "había podido",
                  "habíamos podido"
                ],
                [
                  "habías podido",
                  "habíais podido"
                ],
                [
                  "había podido",
                  "habían podido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (querido)",
              "dimmed": true,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "había querido",
                  "habíamos querido"
                ],
                [
                  "habías querido",
                  "habíais querido"
                ],
                [
                  "había querido",
                  "habían querido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (tenido / puesto / hecho)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "hacer (to do/make)",
              "conjugations": [
                [
                  "había hecho",
                  "habíamos hecho"
                ],
                [
                  "habías hecho",
                  "habíais hecho"
                ],
                [
                  "había hecho",
                  "habían hecho"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "había conocido",
                  "habíamos conocido"
                ],
                [
                  "habías conocido",
                  "habíais conocido"
                ],
                [
                  "había conocido",
                  "habían conocido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "había comido",
                "habíamos comido"
              ],
              [
                "habías comido",
                "habíais comido"
              ],
              [
                "había comido",
                "habían comido"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular participle (ido)",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "había ido",
                  "habíamos ido"
                ],
                [
                  "habías ido",
                  "habíais ido"
                ],
                [
                  "había ido",
                  "habían ido"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular participle (dicho)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "había dicho",
                  "habíamos dicho"
                ],
                [
                  "habías dicho",
                  "habíais dicho"
                ],
                [
                  "había dicho",
                  "habían dicho"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "había sentido",
                  "habíamos sentido"
                ],
                [
                  "habías sentido",
                  "habíais sentido"
                ],
                [
                  "había sentido",
                  "habían sentido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "había pedido",
                  "habíamos pedido"
                ],
                [
                  "habías pedido",
                  "habíais pedido"
                ],
                [
                  "había pedido",
                  "habían pedido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (muerto)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "morir (to die)",
              "conjugations": [
                [
                  "había muerto",
                  "habíamos muerto"
                ],
                [
                  "habías muerto",
                  "habíais muerto"
                ],
                [
                  "había muerto",
                  "habían muerto"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (venido)",
              "dimmed": true,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "había venido",
                  "habíamos venido"
                ],
                [
                  "habías venido",
                  "habíais venido"
                ],
                [
                  "había venido",
                  "habían venido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "había producido",
                  "habíamos producido"
                ],
                [
                  "habías producido",
                  "habíais producido"
                ],
                [
                  "había producido",
                  "habían producido"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "había construido",
                  "habíamos construido"
                ],
                [
                  "habías construido",
                  "habíais construido"
                ],
                [
                  "había construido",
                  "habían construido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "había vivido",
                "habíamos vivido"
              ],
              [
                "habías vivido",
                "habíais vivido"
              ],
              [
                "había vivido",
                "habían vivido"
              ]
            ]
          }
        }
      ],
      "description": "Describes an action completed before another past action. 'I had already walked there before.'"
    },
    "future": {
      "label": "Future (Futuro simple)",
      "icon": "bi-arrow-right",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estaré",
                  "estaremos"
                ],
                [
                  "estarás",
                  "estaréis"
                ],
                [
                  "estará",
                  "estarán"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "contaré",
                  "contaremos"
                ],
                [
                  "contarás",
                  "contaréis"
                ],
                [
                  "contará",
                  "contarán"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "pensaré",
                  "pensaremos"
                ],
                [
                  "pensarás",
                  "pensaréis"
                ],
                [
                  "pensará",
                  "pensarán"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "jugaré",
                  "jugaremos"
                ],
                [
                  "jugarás",
                  "jugaréis"
                ],
                [
                  "jugará",
                  "jugarán"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "daré",
                  "daremos"
                ],
                [
                  "darás",
                  "daréis"
                ],
                [
                  "dará",
                  "darán"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "empezaré",
                  "empezaremos"
                ],
                [
                  "empezarás",
                  "empezaréis"
                ],
                [
                  "empezará",
                  "empezarán"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "llegaré",
                  "llegaremos"
                ],
                [
                  "llegarás",
                  "llegaréis"
                ],
                [
                  "llegará",
                  "llegarán"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "buscaré",
                  "buscaremos"
                ],
                [
                  "buscarás",
                  "buscaréis"
                ],
                [
                  "buscará",
                  "buscarán"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "averiguaré",
                  "averiguaremos"
                ],
                [
                  "averiguarás",
                  "averiguaréis"
                ],
                [
                  "averiguará",
                  "averiguarán"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hablaré",
                "hablaremos"
              ],
              [
                "hablarás",
                "hablaréis"
              ],
              [
                "hablará",
                "hablarán"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "regular",
              "dimmed": true,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "seré",
                  "seremos"
                ],
                [
                  "serás",
                  "seréis"
                ],
                [
                  "será",
                  "serán"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular stem (habr-)",
              "dimmed": false,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "habré",
                  "habremos"
                ],
                [
                  "habrás",
                  "habréis"
                ],
                [
                  "habrá",
                  "habrán"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "regular",
              "dimmed": true,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "veré",
                  "veremos"
                ],
                [
                  "verás",
                  "veréis"
                ],
                [
                  "verá",
                  "verán"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular stem (sabr-)",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "sabré",
                  "sabremos"
                ],
                [
                  "sabrás",
                  "sabréis"
                ],
                [
                  "sabrá",
                  "sabrán"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (podr-)",
              "dimmed": false,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "podré",
                  "podremos"
                ],
                [
                  "podrás",
                  "podréis"
                ],
                [
                  "podrá",
                  "podrán"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (querr-)",
              "dimmed": false,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "querré",
                  "querremos"
                ],
                [
                  "querrás",
                  "querréis"
                ],
                [
                  "querrá",
                  "querrán"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (tendr-)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "tener (to have)",
              "conjugations": [
                [
                  "tendré",
                  "tendremos"
                ],
                [
                  "tendrás",
                  "tendréis"
                ],
                [
                  "tendrá",
                  "tendrán"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "conoceré",
                  "conoceremos"
                ],
                [
                  "conocerás",
                  "conoceréis"
                ],
                [
                  "conocerá",
                  "conocerán"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comeré",
                "comeremos"
              ],
              [
                "comerás",
                "comeréis"
              ],
              [
                "comerá",
                "comerán"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "iré",
                  "iremos"
                ],
                [
                  "irás",
                  "iréis"
                ],
                [
                  "irá",
                  "irán"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular stem (dir-)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "diré",
                  "diremos"
                ],
                [
                  "dirás",
                  "diréis"
                ],
                [
                  "dirá",
                  "dirán"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "sentiré",
                  "sentiremos"
                ],
                [
                  "sentirás",
                  "sentiréis"
                ],
                [
                  "sentirá",
                  "sentirán"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "pediré",
                  "pediremos"
                ],
                [
                  "pedirás",
                  "pediréis"
                ],
                [
                  "pedirá",
                  "pedirán"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "dormir, morir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormiré",
                  "dormiremos"
                ],
                [
                  "dormirás",
                  "dormiréis"
                ],
                [
                  "dormirá",
                  "dormirán"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (vendr-)",
              "dimmed": false,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "vendré",
                  "vendremos"
                ],
                [
                  "vendrás",
                  "vendréis"
                ],
                [
                  "vendrá",
                  "vendrán"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "produciré",
                  "produciremos"
                ],
                [
                  "producirás",
                  "produciréis"
                ],
                [
                  "producirá",
                  "producirán"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "construiré",
                  "construiremos"
                ],
                [
                  "construirás",
                  "construiréis"
                ],
                [
                  "construirá",
                  "construirán"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "viviré",
                "viviremos"
              ],
              [
                "vivirás",
                "viviréis"
              ],
              [
                "vivirá",
                "vivirán"
              ]
            ]
          }
        }
      ],
      "description": "Describes actions that will happen in the future. Also used for predictions and promises."
    },
    "future_perfect": {
      "label": "Future Perfect (Futuro perfecto)",
      "icon": "bi-arrow-right-circle",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "habré estado",
                  "habremos estado"
                ],
                [
                  "habrás estado",
                  "habréis estado"
                ],
                [
                  "habrá estado",
                  "habrán estado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "habré contado",
                  "habremos contado"
                ],
                [
                  "habrás contado",
                  "habréis contado"
                ],
                [
                  "habrá contado",
                  "habrán contado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "habré pensado",
                  "habremos pensado"
                ],
                [
                  "habrás pensado",
                  "habréis pensado"
                ],
                [
                  "habrá pensado",
                  "habrán pensado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "habré jugado",
                  "habremos jugado"
                ],
                [
                  "habrás jugado",
                  "habréis jugado"
                ],
                [
                  "habrá jugado",
                  "habrán jugado"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "habré dado",
                  "habremos dado"
                ],
                [
                  "habrás dado",
                  "habréis dado"
                ],
                [
                  "habrá dado",
                  "habrán dado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "habré empezado",
                  "habremos empezado"
                ],
                [
                  "habrás empezado",
                  "habréis empezado"
                ],
                [
                  "habrá empezado",
                  "habrán empezado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "habré llegado",
                  "habremos llegado"
                ],
                [
                  "habrás llegado",
                  "habréis llegado"
                ],
                [
                  "habrá llegado",
                  "habrán llegado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "habré buscado",
                  "habremos buscado"
                ],
                [
                  "habrás buscado",
                  "habréis buscado"
                ],
                [
                  "habrá buscado",
                  "habrán buscado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "habré averiguado",
                  "habremos averiguado"
                ],
                [
                  "habrás averiguado",
                  "habréis averiguado"
                ],
                [
                  "habrá averiguado",
                  "habrán averiguado"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "habré hablado",
                "habremos hablado"
              ],
              [
                "habrás hablado",
                "habréis hablado"
              ],
              [
                "habrá hablado",
                "habrán hablado"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular participle (sido)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "habré sido",
                  "habremos sido"
                ],
                [
                  "habrás sido",
                  "habréis sido"
                ],
                [
                  "habrá sido",
                  "habrán sido"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular participle (habido)",
              "dimmed": true,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "habré habido",
                  "habremos habido"
                ],
                [
                  "habrás habido",
                  "habréis habido"
                ],
                [
                  "habrá habido",
                  "habrán habido"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular participle (visto)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "habré visto",
                  "habremos visto"
                ],
                [
                  "habrás visto",
                  "habréis visto"
                ],
                [
                  "habrá visto",
                  "habrán visto"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular participle (sabido)",
              "dimmed": true,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "habré sabido",
                  "habremos sabido"
                ],
                [
                  "habrás sabido",
                  "habréis sabido"
                ],
                [
                  "habrá sabido",
                  "habrán sabido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (podido)",
              "dimmed": true,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "habré podido",
                  "habremos podido"
                ],
                [
                  "habrás podido",
                  "habréis podido"
                ],
                [
                  "habrá podido",
                  "habrán podido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (querido)",
              "dimmed": true,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "habré querido",
                  "habremos querido"
                ],
                [
                  "habrás querido",
                  "habréis querido"
                ],
                [
                  "habrá querido",
                  "habrán querido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (tenido / puesto / hecho)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "hacer (to do/make)",
              "conjugations": [
                [
                  "habré hecho",
                  "habremos hecho"
                ],
                [
                  "habrás hecho",
                  "habréis hecho"
                ],
                [
                  "habrá hecho",
                  "habrán hecho"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "habré conocido",
                  "habremos conocido"
                ],
                [
                  "habrás conocido",
                  "habréis conocido"
                ],
                [
                  "habrá conocido",
                  "habrán conocido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "habré comido",
                "habremos comido"
              ],
              [
                "habrás comido",
                "habréis comido"
              ],
              [
                "habrá comido",
                "habrán comido"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular participle (ido)",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "habré ido",
                  "habremos ido"
                ],
                [
                  "habrás ido",
                  "habréis ido"
                ],
                [
                  "habrá ido",
                  "habrán ido"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular participle (dicho)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "habré dicho",
                  "habremos dicho"
                ],
                [
                  "habrás dicho",
                  "habréis dicho"
                ],
                [
                  "habrá dicho",
                  "habrán dicho"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "habré sentido",
                  "habremos sentido"
                ],
                [
                  "habrás sentido",
                  "habréis sentido"
                ],
                [
                  "habrá sentido",
                  "habrán sentido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "habré pedido",
                  "habremos pedido"
                ],
                [
                  "habrás pedido",
                  "habréis pedido"
                ],
                [
                  "habrá pedido",
                  "habrán pedido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (muerto)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "morir (to die)",
              "conjugations": [
                [
                  "habré muerto",
                  "habremos muerto"
                ],
                [
                  "habrás muerto",
                  "habréis muerto"
                ],
                [
                  "habrá muerto",
                  "habrán muerto"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (venido)",
              "dimmed": true,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "habré venido",
                  "habremos venido"
                ],
                [
                  "habrás venido",
                  "habréis venido"
                ],
                [
                  "habrá venido",
                  "habrán venido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "habré producido",
                  "habremos producido"
                ],
                [
                  "habrás producido",
                  "habréis producido"
                ],
                [
                  "habrá producido",
                  "habrán producido"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "habré construido",
                  "habremos construido"
                ],
                [
                  "habrás construido",
                  "habréis construido"
                ],
                [
                  "habrá construido",
                  "habrán construido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "habré vivido",
                "habremos vivido"
              ],
              [
                "habrás vivido",
                "habréis vivido"
              ],
              [
                "habrá vivido",
                "habrán vivido"
              ]
            ]
          }
        }
      ],
      "description": "Describes actions that will be completed before a specific future point. 'I will have walked 10 miles by then.'"
    },
    "anterior": {
      "label": "Past Anterior (Pretérito anterior)",
      "icon": "bi-chevron-double-left",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "hube estado",
                  "hubimos estado"
                ],
                [
                  "hubiste estado",
                  "hubisteis estado"
                ],
                [
                  "hubo estado",
                  "hubieron estado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "hube contado",
                  "hubimos contado"
                ],
                [
                  "hubiste contado",
                  "hubisteis contado"
                ],
                [
                  "hubo contado",
                  "hubieron contado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "hube pensado",
                  "hubimos pensado"
                ],
                [
                  "hubiste pensado",
                  "hubisteis pensado"
                ],
                [
                  "hubo pensado",
                  "hubieron pensado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "hube jugado",
                  "hubimos jugado"
                ],
                [
                  "hubiste jugado",
                  "hubisteis jugado"
                ],
                [
                  "hubo jugado",
                  "hubieron jugado"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "hube dado",
                  "hubimos dado"
                ],
                [
                  "hubiste dado",
                  "hubisteis dado"
                ],
                [
                  "hubo dado",
                  "hubieron dado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "hube empezado",
                  "hubimos empezado"
                ],
                [
                  "hubiste empezado",
                  "hubisteis empezado"
                ],
                [
                  "hubo empezado",
                  "hubieron empezado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "hube llegado",
                  "hubimos llegado"
                ],
                [
                  "hubiste llegado",
                  "hubisteis llegado"
                ],
                [
                  "hubo llegado",
                  "hubieron llegado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "hube buscado",
                  "hubimos buscado"
                ],
                [
                  "hubiste buscado",
                  "hubisteis buscado"
                ],
                [
                  "hubo buscado",
                  "hubieron buscado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "hube averiguado",
                  "hubimos averiguado"
                ],
                [
                  "hubiste averiguado",
                  "hubisteis averiguado"
                ],
                [
                  "hubo averiguado",
                  "hubieron averiguado"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hube hablado",
                "hubimos hablado"
              ],
              [
                "hubiste hablado",
                "hubisteis hablado"
              ],
              [
                "hubo hablado",
                "hubieron hablado"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular participle (sido)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "hube sido",
                  "hubimos sido"
                ],
                [
                  "hubiste sido",
                  "hubisteis sido"
                ],
                [
                  "hubo sido",
                  "hubieron sido"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular participle (habido)",
              "dimmed": true,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "hube habido",
                  "hubimos habido"
                ],
                [
                  "hubiste habido",
                  "hubisteis habido"
                ],
                [
                  "hubo habido",
                  "hubieron habido"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular participle (visto)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "hube visto",
                  "hubimos visto"
                ],
                [
                  "hubiste visto",
                  "hubisteis visto"
                ],
                [
                  "hubo visto",
                  "hubieron visto"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular participle (sabido)",
              "dimmed": true,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "hube sabido",
                  "hubimos sabido"
                ],
                [
                  "hubiste sabido",
                  "hubisteis sabido"
                ],
                [
                  "hubo sabido",
                  "hubieron sabido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (podido)",
              "dimmed": true,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "hube podido",
                  "hubimos podido"
                ],
                [
                  "hubiste podido",
                  "hubisteis podido"
                ],
                [
                  "hubo podido",
                  "hubieron podido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (querido)",
              "dimmed": true,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "hube querido",
                  "hubimos querido"
                ],
                [
                  "hubiste querido",
                  "hubisteis querido"
                ],
                [
                  "hubo querido",
                  "hubieron querido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (tenido / puesto / hecho)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "hacer (to do/make)",
              "conjugations": [
                [
                  "hube hecho",
                  "hubimos hecho"
                ],
                [
                  "hubiste hecho",
                  "hubisteis hecho"
                ],
                [
                  "hubo hecho",
                  "hubieron hecho"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "hube conocido",
                  "hubimos conocido"
                ],
                [
                  "hubiste conocido",
                  "hubisteis conocido"
                ],
                [
                  "hubo conocido",
                  "hubieron conocido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "hube comido",
                "hubimos comido"
              ],
              [
                "hubiste comido",
                "hubisteis comido"
              ],
              [
                "hubo comido",
                "hubieron comido"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular participle (ido)",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "hube ido",
                  "hubimos ido"
                ],
                [
                  "hubiste ido",
                  "hubisteis ido"
                ],
                [
                  "hubo ido",
                  "hubieron ido"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular participle (dicho)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "hube dicho",
                  "hubimos dicho"
                ],
                [
                  "hubiste dicho",
                  "hubisteis dicho"
                ],
                [
                  "hubo dicho",
                  "hubieron dicho"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "hube sentido",
                  "hubimos sentido"
                ],
                [
                  "hubiste sentido",
                  "hubisteis sentido"
                ],
                [
                  "hubo sentido",
                  "hubieron sentido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "hube pedido",
                  "hubimos pedido"
                ],
                [
                  "hubiste pedido",
                  "hubisteis pedido"
                ],
                [
                  "hubo pedido",
                  "hubieron pedido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (muerto)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "morir (to die)",
              "conjugations": [
                [
                  "hube muerto",
                  "hubimos muerto"
                ],
                [
                  "hubiste muerto",
                  "hubisteis muerto"
                ],
                [
                  "hubo muerto",
                  "hubieron muerto"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (venido)",
              "dimmed": true,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "hube venido",
                  "hubimos venido"
                ],
                [
                  "hubiste venido",
                  "hubisteis venido"
                ],
                [
                  "hubo venido",
                  "hubieron venido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "hube producido",
                  "hubimos producido"
                ],
                [
                  "hubiste producido",
                  "hubisteis producido"
                ],
                [
                  "hubo producido",
                  "hubieron producido"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "hube construido",
                  "hubimos construido"
                ],
                [
                  "hubiste construido",
                  "hubisteis construido"
                ],
                [
                  "hubo construido",
                  "hubieron construido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "hube vivido",
                "hubimos vivido"
              ],
              [
                "hubiste vivido",
                "hubisteis vivido"
              ],
              [
                "hubo vivido",
                "hubieron vivido"
              ]
            ]
          }
        }
      ],
      "description": "Literary tense describing an action completed immediately before another past action. Rare in modern usage; found in formal writing after 'when', 'as soon as', etc."
    },
    "past": {
      "label": "Simple Past (Pretérito perfecto)",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "irregular stem (estuv-)",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estuve",
                  "estuvimos"
                ],
                [
                  "estuviste",
                  "estuvisteis"
                ],
                [
                  "estuvo",
                  "estuvieron"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "conté",
                  "contamos"
                ],
                [
                  "contaste",
                  "contasteis"
                ],
                [
                  "contó",
                  "contaron"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "pensé",
                  "pensamos"
                ],
                [
                  "pensaste",
                  "pensasteis"
                ],
                [
                  "pensó",
                  "pensaron"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "jugué",
                  "jugamos"
                ],
                [
                  "jugaste",
                  "jugasteis"
                ],
                [
                  "jugó",
                  "jugaron"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "irregular endings (-er/-ir pattern)",
              "dimmed": false,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "di",
                  "dimos"
                ],
                [
                  "diste",
                  "disteis"
                ],
                [
                  "dio",
                  "dieron"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "yo spelling change (z → c)",
              "dimmed": false,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "empecé",
                  "empezamos"
                ],
                [
                  "empezaste",
                  "empezasteis"
                ],
                [
                  "empezó",
                  "empezaron"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "yo spelling change (g → gu)",
              "dimmed": false,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "llegué",
                  "llegamos"
                ],
                [
                  "llegaste",
                  "llegasteis"
                ],
                [
                  "llegó",
                  "llegaron"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "yo spelling change (c → qu)",
              "dimmed": false,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "busqué",
                  "buscamos"
                ],
                [
                  "buscaste",
                  "buscasteis"
                ],
                [
                  "buscó",
                  "buscaron"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "yo spelling change (gu → gü)",
              "dimmed": false,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "averigüé",
                  "averiguamos"
                ],
                [
                  "averiguaste",
                  "averiguasteis"
                ],
                [
                  "averiguó",
                  "averiguaron"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hablé",
                "hablamos"
              ],
              [
                "hablaste",
                "hablasteis"
              ],
              [
                "habló",
                "hablaron"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular stem (fu-)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "fui",
                  "fuimos"
                ],
                [
                  "fuiste",
                  "fuisteis"
                ],
                [
                  "fue",
                  "fueron"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular stem (hub-)",
              "dimmed": false,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "hube",
                  "hubimos"
                ],
                [
                  "hubiste",
                  "hubisteis"
                ],
                [
                  "hubo",
                  "hubieron"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular short forms (vi, vio)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "vi",
                  "vimos"
                ],
                [
                  "viste",
                  "visteis"
                ],
                [
                  "vio",
                  "vieron"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular stem (sup-)",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "supe",
                  "supimos"
                ],
                [
                  "supiste",
                  "supisteis"
                ],
                [
                  "supo",
                  "supieron"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (pod- → pud-)",
              "dimmed": false,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "pude",
                  "pudimos"
                ],
                [
                  "pudiste",
                  "pudisteis"
                ],
                [
                  "pudo",
                  "pudieron"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (quer- → quis-)",
              "dimmed": false,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "quise",
                  "quisimos"
                ],
                [
                  "quisiste",
                  "quisisteis"
                ],
                [
                  "quiso",
                  "quisieron"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (ten- → tuv-)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "tener (to have)",
              "conjugations": [
                [
                  "tuve",
                  "tuvimos"
                ],
                [
                  "tuviste",
                  "tuvisteis"
                ],
                [
                  "tuvo",
                  "tuvieron"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "conocí",
                  "conocimos"
                ],
                [
                  "conociste",
                  "conocisteis"
                ],
                [
                  "conoció",
                  "conocieron"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comí",
                "comimos"
              ],
              [
                "comiste",
                "comisteis"
              ],
              [
                "comió",
                "comieron"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular stem (fu-)",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "fui",
                  "fuimos"
                ],
                [
                  "fuiste",
                  "fuisteis"
                ],
                [
                  "fue",
                  "fueron"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular stem (dij-)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "dije",
                  "dijimos"
                ],
                [
                  "dijiste",
                  "dijisteis"
                ],
                [
                  "dijo",
                  "dijeron"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "3rd person stem change (e → i)",
              "dimmed": false,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "sentí",
                  "sentimos"
                ],
                [
                  "sentiste",
                  "sentisteis"
                ],
                [
                  "sintió",
                  "sintieron"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "3rd person stem change (e → i)",
              "dimmed": false,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "pedí",
                  "pedimos"
                ],
                [
                  "pediste",
                  "pedisteis"
                ],
                [
                  "pidió",
                  "pidieron"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "3rd person stem change (o → u)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormí",
                  "dormimos"
                ],
                [
                  "dormiste",
                  "dormisteis"
                ],
                [
                  "durmió",
                  "durmieron"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (ven- → vin-)",
              "dimmed": false,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "vine",
                  "vinimos"
                ],
                [
                  "viniste",
                  "vinisteis"
                ],
                [
                  "vino",
                  "vinieron"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (produc- → produj-)",
              "dimmed": false,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "produje",
                  "produjimos"
                ],
                [
                  "produjiste",
                  "produjisteis"
                ],
                [
                  "produjo",
                  "produjeron"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "3rd person y insertion (u → uy)",
              "dimmed": false,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "construí",
                  "construimos"
                ],
                [
                  "construiste",
                  "construisteis"
                ],
                [
                  "construyó",
                  "construyeron"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "viví",
                "vivimos"
              ],
              [
                "viviste",
                "vivisteis"
              ],
              [
                "vivió",
                "vivieron"
              ]
            ]
          }
        }
      ],
      "description": "Describes completed actions in the past."
    },
    "conditional": {
      "label": "Conditional (Condicional simple)",
      "icon": "bi-question-circle",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estaría",
                  "estaríamos"
                ],
                [
                  "estarías",
                  "estaríais"
                ],
                [
                  "estaría",
                  "estarían"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "contaría",
                  "contaríamos"
                ],
                [
                  "contarías",
                  "contaríais"
                ],
                [
                  "contaría",
                  "contarían"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "pensaría",
                  "pensaríamos"
                ],
                [
                  "pensarías",
                  "pensaríais"
                ],
                [
                  "pensaría",
                  "pensarían"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "jugaría",
                  "jugaríamos"
                ],
                [
                  "jugarías",
                  "jugaríais"
                ],
                [
                  "jugaría",
                  "jugarían"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "daría",
                  "daríamos"
                ],
                [
                  "darías",
                  "daríais"
                ],
                [
                  "daría",
                  "darían"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "empezaría",
                  "empezaríamos"
                ],
                [
                  "empezarías",
                  "empezaríais"
                ],
                [
                  "empezaría",
                  "empezarían"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "llegaría",
                  "llegaríamos"
                ],
                [
                  "llegarías",
                  "llegaríais"
                ],
                [
                  "llegaría",
                  "llegarían"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "buscaría",
                  "buscaríamos"
                ],
                [
                  "buscarías",
                  "buscaríais"
                ],
                [
                  "buscaría",
                  "buscarían"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "averiguaría",
                  "averiguaríamos"
                ],
                [
                  "averiguarías",
                  "averiguaríais"
                ],
                [
                  "averiguaría",
                  "averiguarían"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hablaría",
                "hablaríamos"
              ],
              [
                "hablarías",
                "hablaríais"
              ],
              [
                "hablaría",
                "hablarían"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "regular",
              "dimmed": true,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "sería",
                  "seríamos"
                ],
                [
                  "serías",
                  "seríais"
                ],
                [
                  "sería",
                  "serían"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular stem (habr-)",
              "dimmed": false,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "habría",
                  "habríamos"
                ],
                [
                  "habrías",
                  "habríais"
                ],
                [
                  "habría",
                  "habrían"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "regular",
              "dimmed": true,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "vería",
                  "veríamos"
                ],
                [
                  "verías",
                  "veríais"
                ],
                [
                  "vería",
                  "verían"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular stem (sabr-)",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "sabría",
                  "sabríamos"
                ],
                [
                  "sabrías",
                  "sabríais"
                ],
                [
                  "sabría",
                  "sabrían"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (podr-)",
              "dimmed": false,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "podría",
                  "podríamos"
                ],
                [
                  "podrías",
                  "podríais"
                ],
                [
                  "podría",
                  "podrían"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (querr-)",
              "dimmed": false,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "querría",
                  "querríamos"
                ],
                [
                  "querrías",
                  "querríais"
                ],
                [
                  "querría",
                  "querrían"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular stem (tendr-)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "tener (to have)",
              "conjugations": [
                [
                  "tendría",
                  "tendríamos"
                ],
                [
                  "tendrías",
                  "tendríais"
                ],
                [
                  "tendría",
                  "tendrían"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "conocería",
                  "conoceríamos"
                ],
                [
                  "conocerías",
                  "conoceríais"
                ],
                [
                  "conocería",
                  "conocerían"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comería",
                "comeríamos"
              ],
              [
                "comerías",
                "comeríais"
              ],
              [
                "comería",
                "comerían"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "iría",
                  "iríamos"
                ],
                [
                  "irías",
                  "iríais"
                ],
                [
                  "iría",
                  "irían"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular stem (dir-)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "diría",
                  "diríamos"
                ],
                [
                  "dirías",
                  "diríais"
                ],
                [
                  "diría",
                  "dirían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "sentiría",
                  "sentiríamos"
                ],
                [
                  "sentirías",
                  "sentiríais"
                ],
                [
                  "sentiría",
                  "sentirían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "pediría",
                  "pediríamos"
                ],
                [
                  "pedirías",
                  "pediríais"
                ],
                [
                  "pediría",
                  "pedirían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "dormir, morir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormiría",
                  "dormiríamos"
                ],
                [
                  "dormirías",
                  "dormiríais"
                ],
                [
                  "dormiría",
                  "dormirían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (vendr-)",
              "dimmed": false,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "vendría",
                  "vendríamos"
                ],
                [
                  "vendrías",
                  "vendríais"
                ],
                [
                  "vendría",
                  "vendrían"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "produciría",
                  "produciríamos"
                ],
                [
                  "producirías",
                  "produciríais"
                ],
                [
                  "produciría",
                  "producirían"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "construiría",
                  "construiríamos"
                ],
                [
                  "construirías",
                  "construiríais"
                ],
                [
                  "construiría",
                  "construirían"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "viviría",
                "viviríamos"
              ],
              [
                "vivirías",
                "viviríais"
              ],
              [
                "viviría",
                "vivirían"
              ]
            ]
          }
        }
      ],
      "description": "Describes what would happen under a hypothetical condition. Used for polite requests and imagined scenarios."
    },
    "conditional_perfect": {
      "label": "Conditional Perfect (Condicional perfecto)",
      "icon": "bi-question-circle-fill",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "habría estado",
                  "habríamos estado"
                ],
                [
                  "habrías estado",
                  "habríais estado"
                ],
                [
                  "habría estado",
                  "habrían estado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "habría contado",
                  "habríamos contado"
                ],
                [
                  "habrías contado",
                  "habríais contado"
                ],
                [
                  "habría contado",
                  "habrían contado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "habría pensado",
                  "habríamos pensado"
                ],
                [
                  "habrías pensado",
                  "habríais pensado"
                ],
                [
                  "habría pensado",
                  "habrían pensado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "habría jugado",
                  "habríamos jugado"
                ],
                [
                  "habrías jugado",
                  "habríais jugado"
                ],
                [
                  "habría jugado",
                  "habrían jugado"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "habría dado",
                  "habríamos dado"
                ],
                [
                  "habrías dado",
                  "habríais dado"
                ],
                [
                  "habría dado",
                  "habrían dado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "habría empezado",
                  "habríamos empezado"
                ],
                [
                  "habrías empezado",
                  "habríais empezado"
                ],
                [
                  "habría empezado",
                  "habrían empezado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "habría llegado",
                  "habríamos llegado"
                ],
                [
                  "habrías llegado",
                  "habríais llegado"
                ],
                [
                  "habría llegado",
                  "habrían llegado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "habría buscado",
                  "habríamos buscado"
                ],
                [
                  "habrías buscado",
                  "habríais buscado"
                ],
                [
                  "habría buscado",
                  "habrían buscado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "habría averiguado",
                  "habríamos averiguado"
                ],
                [
                  "habrías averiguado",
                  "habríais averiguado"
                ],
                [
                  "habría averiguado",
                  "habrían averiguado"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "habría hablado",
                "habríamos hablado"
              ],
              [
                "habrías hablado",
                "habríais hablado"
              ],
              [
                "habría hablado",
                "habrían hablado"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular participle (sido)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "habría sido",
                  "habríamos sido"
                ],
                [
                  "habrías sido",
                  "habríais sido"
                ],
                [
                  "habría sido",
                  "habrían sido"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular participle (habido)",
              "dimmed": true,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "habría habido",
                  "habríamos habido"
                ],
                [
                  "habrías habido",
                  "habríais habido"
                ],
                [
                  "habría habido",
                  "habrían habido"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular participle (visto)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "habría visto",
                  "habríamos visto"
                ],
                [
                  "habrías visto",
                  "habríais visto"
                ],
                [
                  "habría visto",
                  "habrían visto"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular participle (sabido)",
              "dimmed": true,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "habría sabido",
                  "habríamos sabido"
                ],
                [
                  "habrías sabido",
                  "habríais sabido"
                ],
                [
                  "habría sabido",
                  "habrían sabido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (podido)",
              "dimmed": true,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "habría podido",
                  "habríamos podido"
                ],
                [
                  "habrías podido",
                  "habríais podido"
                ],
                [
                  "habría podido",
                  "habrían podido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (querido)",
              "dimmed": true,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "habría querido",
                  "habríamos querido"
                ],
                [
                  "habrías querido",
                  "habríais querido"
                ],
                [
                  "habría querido",
                  "habrían querido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (tenido / puesto / hecho)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "hacer (to do/make)",
              "conjugations": [
                [
                  "habría hecho",
                  "habríamos hecho"
                ],
                [
                  "habrías hecho",
                  "habríais hecho"
                ],
                [
                  "habría hecho",
                  "habrían hecho"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "habría conocido",
                  "habríamos conocido"
                ],
                [
                  "habrías conocido",
                  "habríais conocido"
                ],
                [
                  "habría conocido",
                  "habrían conocido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "habría comido",
                "habríamos comido"
              ],
              [
                "habrías comido",
                "habríais comido"
              ],
              [
                "habría comido",
                "habrían comido"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular participle (ido)",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "habría ido",
                  "habríamos ido"
                ],
                [
                  "habrías ido",
                  "habríais ido"
                ],
                [
                  "habría ido",
                  "habrían ido"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular participle (dicho)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "habría dicho",
                  "habríamos dicho"
                ],
                [
                  "habrías dicho",
                  "habríais dicho"
                ],
                [
                  "habría dicho",
                  "habrían dicho"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "habría sentido",
                  "habríamos sentido"
                ],
                [
                  "habrías sentido",
                  "habríais sentido"
                ],
                [
                  "habría sentido",
                  "habrían sentido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "habría pedido",
                  "habríamos pedido"
                ],
                [
                  "habrías pedido",
                  "habríais pedido"
                ],
                [
                  "habría pedido",
                  "habrían pedido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (muerto)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "morir (to die)",
              "conjugations": [
                [
                  "habría muerto",
                  "habríamos muerto"
                ],
                [
                  "habrías muerto",
                  "habríais muerto"
                ],
                [
                  "habría muerto",
                  "habrían muerto"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (venido)",
              "dimmed": true,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "habría venido",
                  "habríamos venido"
                ],
                [
                  "habrías venido",
                  "habríais venido"
                ],
                [
                  "habría venido",
                  "habrían venido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "habría producido",
                  "habríamos producido"
                ],
                [
                  "habrías producido",
                  "habríais producido"
                ],
                [
                  "habría producido",
                  "habrían producido"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "habría construido",
                  "habríamos construido"
                ],
                [
                  "habrías construido",
                  "habríais construido"
                ],
                [
                  "habría construido",
                  "habrían construido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "habría vivido",
                "habríamos vivido"
              ],
              [
                "habrías vivido",
                "habríais vivido"
              ],
              [
                "habría vivido",
                "habrían vivido"
              ]
            ]
          }
        }
      ],
      "description": "Describes what would have happened if conditions had been different. Expresses regret or unrealized possibilities."
    },
    "subj_present": {
      "label": "Present (Presente de subjuntivo)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "irregular stem (est-)",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "esté",
                  "estemos"
                ],
                [
                  "estés",
                  "estéis"
                ],
                [
                  "esté",
                  "estén"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular subjunctive (-e endings)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, pensar, cerrar, comenzar, despertar, jugar",
              "example": "hablar (to speak)",
              "conjugations": [
                [
                  "hable",
                  "hablemos"
                ],
                [
                  "hables",
                  "habléis"
                ],
                [
                  "hable",
                  "hablen"
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
                  "dé",
                  "demos"
                ],
                [
                  "des",
                  "deis"
                ],
                [
                  "dé",
                  "den"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hable",
                "hablemos"
              ],
              [
                "hables",
                "habléis"
              ],
              [
                "hable",
                "hablen"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "fully irregular (se-)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "sea",
                  "seamos"
                ],
                [
                  "seas",
                  "seáis"
                ],
                [
                  "sea",
                  "sean"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "fully irregular (hay-)",
              "dimmed": false,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "haya",
                  "hayamos"
                ],
                [
                  "hayas",
                  "hayáis"
                ],
                [
                  "haya",
                  "hayan"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular stem (sep-)",
              "dimmed": false,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "sepa",
                  "sepamos"
                ],
                [
                  "sepas",
                  "sepáis"
                ],
                [
                  "sepa",
                  "sepan"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular subjunctive (-a endings)",
              "dimmed": true,
              "verbs": "poder, querer, tener, poner, hacer, conocer",
              "example": "comer (to eat)",
              "conjugations": [
                [
                  "coma",
                  "comamos"
                ],
                [
                  "comas",
                  "comáis"
                ],
                [
                  "coma",
                  "coman"
                ]
              ]
            }
          ],
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
                "comáis"
              ],
              [
                "coma",
                "coman"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "fully irregular (vay-)",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "vaya",
                  "vayamos"
                ],
                [
                  "vayas",
                  "vayáis"
                ],
                [
                  "vaya",
                  "vayan"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular stem (dig-)",
              "dimmed": false,
              "verbs": "decir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "diga",
                  "digamos"
                ],
                [
                  "digas",
                  "digáis"
                ],
                [
                  "diga",
                  "digan"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular subjunctive (-a endings)",
              "dimmed": true,
              "verbs": "sentir, pedir, dormir, venir, producir, construir",
              "example": "vivir (to live)",
              "conjugations": [
                [
                  "viva",
                  "vivamos"
                ],
                [
                  "vivas",
                  "viváis"
                ],
                [
                  "viva",
                  "vivan"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "viva",
                "vivamos"
              ],
              [
                "vivas",
                "viváis"
              ],
              [
                "viva",
                "vivan"
              ]
            ]
          }
        }
      ],
      "description": "Expresses wishes, demands, suggestions, or doubts about present or future situations. Often follows 'que' (that)."
    },
    "subj_past": {
      "label": "Past (Pretérito perfecto de subjuntivo)",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "haya estado",
                  "hayamos estado"
                ],
                [
                  "hayas estado",
                  "hayáis estado"
                ],
                [
                  "haya estado",
                  "hayan estado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "haya contado",
                  "hayamos contado"
                ],
                [
                  "hayas contado",
                  "hayáis contado"
                ],
                [
                  "haya contado",
                  "hayan contado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "haya pensado",
                  "hayamos pensado"
                ],
                [
                  "hayas pensado",
                  "hayáis pensado"
                ],
                [
                  "haya pensado",
                  "hayan pensado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "haya jugado",
                  "hayamos jugado"
                ],
                [
                  "hayas jugado",
                  "hayáis jugado"
                ],
                [
                  "haya jugado",
                  "hayan jugado"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "haya dado",
                  "hayamos dado"
                ],
                [
                  "hayas dado",
                  "hayáis dado"
                ],
                [
                  "haya dado",
                  "hayan dado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "haya empezado",
                  "hayamos empezado"
                ],
                [
                  "hayas empezado",
                  "hayáis empezado"
                ],
                [
                  "haya empezado",
                  "hayan empezado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "haya llegado",
                  "hayamos llegado"
                ],
                [
                  "hayas llegado",
                  "hayáis llegado"
                ],
                [
                  "haya llegado",
                  "hayan llegado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "haya buscado",
                  "hayamos buscado"
                ],
                [
                  "hayas buscado",
                  "hayáis buscado"
                ],
                [
                  "haya buscado",
                  "hayan buscado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "haya averiguado",
                  "hayamos averiguado"
                ],
                [
                  "hayas averiguado",
                  "hayáis averiguado"
                ],
                [
                  "haya averiguado",
                  "hayan averiguado"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "haya hablado",
                "hayamos hablado"
              ],
              [
                "hayas hablado",
                "hayáis hablado"
              ],
              [
                "haya hablado",
                "hayan hablado"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular participle (sido)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "haya sido",
                  "hayamos sido"
                ],
                [
                  "hayas sido",
                  "hayáis sido"
                ],
                [
                  "haya sido",
                  "hayan sido"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular participle (habido)",
              "dimmed": true,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "haya habido",
                  "hayamos habido"
                ],
                [
                  "hayas habido",
                  "hayáis habido"
                ],
                [
                  "haya habido",
                  "hayan habido"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular participle (visto)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "haya visto",
                  "hayamos visto"
                ],
                [
                  "hayas visto",
                  "hayáis visto"
                ],
                [
                  "haya visto",
                  "hayan visto"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular participle (sabido)",
              "dimmed": true,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "haya sabido",
                  "hayamos sabido"
                ],
                [
                  "hayas sabido",
                  "hayáis sabido"
                ],
                [
                  "haya sabido",
                  "hayan sabido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (podido)",
              "dimmed": true,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "haya podido",
                  "hayamos podido"
                ],
                [
                  "hayas podido",
                  "hayáis podido"
                ],
                [
                  "haya podido",
                  "hayan podido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (querido)",
              "dimmed": true,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "haya querido",
                  "hayamos querido"
                ],
                [
                  "hayas querido",
                  "hayáis querido"
                ],
                [
                  "haya querido",
                  "hayan querido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (tenido / puesto / hecho)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "hacer (to do/make)",
              "conjugations": [
                [
                  "haya hecho",
                  "hayamos hecho"
                ],
                [
                  "hayas hecho",
                  "hayáis hecho"
                ],
                [
                  "haya hecho",
                  "hayan hecho"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "haya conocido",
                  "hayamos conocido"
                ],
                [
                  "hayas conocido",
                  "hayáis conocido"
                ],
                [
                  "haya conocido",
                  "hayan conocido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "haya comido",
                "hayamos comido"
              ],
              [
                "hayas comido",
                "hayáis comido"
              ],
              [
                "haya comido",
                "hayan comido"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular participle (ido)",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "haya ido",
                  "hayamos ido"
                ],
                [
                  "hayas ido",
                  "hayáis ido"
                ],
                [
                  "haya ido",
                  "hayan ido"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular participle (dicho)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "haya dicho",
                  "hayamos dicho"
                ],
                [
                  "hayas dicho",
                  "hayáis dicho"
                ],
                [
                  "haya dicho",
                  "hayan dicho"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "haya sentido",
                  "hayamos sentido"
                ],
                [
                  "hayas sentido",
                  "hayáis sentido"
                ],
                [
                  "haya sentido",
                  "hayan sentido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "haya pedido",
                  "hayamos pedido"
                ],
                [
                  "hayas pedido",
                  "hayáis pedido"
                ],
                [
                  "haya pedido",
                  "hayan pedido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (muerto)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "morir (to die)",
              "conjugations": [
                [
                  "haya muerto",
                  "hayamos muerto"
                ],
                [
                  "hayas muerto",
                  "hayáis muerto"
                ],
                [
                  "haya muerto",
                  "hayan muerto"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (venido)",
              "dimmed": true,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "haya venido",
                  "hayamos venido"
                ],
                [
                  "hayas venido",
                  "hayáis venido"
                ],
                [
                  "haya venido",
                  "hayan venido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "haya producido",
                  "hayamos producido"
                ],
                [
                  "hayas producido",
                  "hayáis producido"
                ],
                [
                  "haya producido",
                  "hayan producido"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "haya construido",
                  "hayamos construido"
                ],
                [
                  "hayas construido",
                  "hayáis construido"
                ],
                [
                  "haya construido",
                  "hayan construido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "haya vivido",
                "hayamos vivido"
              ],
              [
                "hayas vivido",
                "hayáis vivido"
              ],
              [
                "haya vivido",
                "hayan vivido"
              ]
            ]
          }
        }
      ],
      "description": "Expresses doubt or emotion about completed actions, or hypothetical past situations."
    },
    "subj_imperfect": {
      "label": "Imperfect (Pretérito imperfecto de subjuntivo)",
      "icon": "bi-three-dots",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "irregular stem (estuvier-)",
              "dimmed": false,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "estuviera / estuviese",
                  "estuviéramos / estuviésemos"
                ],
                [
                  "estuvieras / estuvieses",
                  "estuvierais / estuvieseis"
                ],
                [
                  "estuviera / estuviese",
                  "estuvieran / estuviesen"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ara/-ase)",
              "dimmed": true,
              "verbs": "hablar, contar, pensar, jugar, dar, empezar, llegar, buscar",
              "example": "hablar (to speak)",
              "conjugations": [
                [
                  "hablara / hablase",
                  "habláramos / hablásemos"
                ],
                [
                  "hablaras / hablases",
                  "hablarais / hablaseis"
                ],
                [
                  "hablara / hablase",
                  "hablaran / hablasen"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hablara / hablase",
                "habláramos / hablásemos"
              ],
              [
                "hablaras / hablases",
                "hablarais / hablaseis"
              ],
              [
                "hablara / hablase",
                "hablaran / hablasen"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular stem (fuer-)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "fuera / fuese",
                  "fuéramos / fuésemos"
                ],
                [
                  "fueras / fueses",
                  "fuerais / fueseis"
                ],
                [
                  "fuera / fuese",
                  "fueran / fuesen"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular stem (hubier-)",
              "dimmed": false,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "hubiera / hubiese",
                  "hubiéramos / hubiésemos"
                ],
                [
                  "hubieras / hubieses",
                  "hubierais / hubieseis"
                ],
                [
                  "hubiera / hubiese",
                  "hubieran / hubiesen"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-iera/-iese)",
              "dimmed": true,
              "verbs": "comer, poder, querer, tener, hacer, saber, conocer",
              "example": "comer (to eat)",
              "conjugations": [
                [
                  "comiera / comiese",
                  "comiéramos / comiésemos"
                ],
                [
                  "comieras / comieses",
                  "comierais / comieseis"
                ],
                [
                  "comiera / comiese",
                  "comieran / comiesen"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "comiera / comiese",
                "comiéramos / comiésemos"
              ],
              [
                "comieras / comieses",
                "comierais / comieseis"
              ],
              [
                "comiera / comiese",
                "comieran / comiesen"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular stem (fuer-)",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "fuera / fuese",
                  "fuéramos / fuésemos"
                ],
                [
                  "fueras / fueses",
                  "fuerais / fueseis"
                ],
                [
                  "fuera / fuese",
                  "fueran / fuesen"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular stem (dijer-)",
              "dimmed": false,
              "verbs": "decir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "dijera / dijese",
                  "dijéramos / dijésemos"
                ],
                [
                  "dijeras / dijeses",
                  "dijerais / dijeseis"
                ],
                [
                  "dijera / dijese",
                  "dijeran / dijesen"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-iera/-iese)",
              "dimmed": true,
              "verbs": "vivir, sentir, pedir, dormir, venir, producir",
              "example": "vivir (to live)",
              "conjugations": [
                [
                  "viviera / viviese",
                  "viviéramos / viviésemos"
                ],
                [
                  "vivieras / vivieses",
                  "vivierais / vivieseis"
                ],
                [
                  "viviera / viviese",
                  "vivieran / viviesen"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "viviera / viviese",
                "viviéramos / viviésemos"
              ],
              [
                "vivieras / vivieses",
                "vivierais / vivieseis"
              ],
              [
                "viviera / viviese",
                "vivieran / viviesen"
              ]
            ]
          }
        }
      ],
      "description": "Expresses hypothetical conditions, wishes about the past, or polite suggestions. Used in 'if' clauses for unlikely scenarios.",
      "extra": "<strong>-ra vs. -se forms</strong><br><br>Both forms are grammatically correct and interchangeable in most contexts:<br>• <em>hablara</em> = <em>hablase</em><br>• <em>comiera</em> = <em>comiese</em><br>• <em>viviera</em> = <em>viviese</em><br><br>The <strong>-ra</strong> form is significantly more common in everyday speech across all Spanish-speaking regions. The <strong>-se</strong> form is more literary and formal.<br><br>Note: Only the -ra form can substitute for the conditional in some contexts (\"yo quisiera\" = \"yo querría\")."
    },
    "subj_pluperfect": {
      "label": "Pluperfect (Pluscuamperfecto de subjuntivo)",
      "icon": "bi-check2-all",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "estar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "estar",
              "example": "estar (to be)",
              "conjugations": [
                [
                  "hubiera / hubiese estado",
                  "hubiéramos / hubiésemos estado"
                ],
                [
                  "hubieras / hubieses estado",
                  "hubierais / hubieseis estado"
                ],
                [
                  "hubiera / hubiese estado",
                  "hubieran / hubiesen estado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "contar, encontrar, recordar, mostrar, costar, sonar, volar, rogar, almorzar, apostar",
              "example": "contar (to count/tell)",
              "conjugations": [
                [
                  "hubiera / hubiese contado",
                  "hubiéramos / hubiésemos contado"
                ],
                [
                  "hubieras / hubieses contado",
                  "hubierais / hubieseis contado"
                ],
                [
                  "hubiera / hubiese contado",
                  "hubieran / hubiesen contado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "pensar, cerrar, comenzar, despertar, empezar, gobernar, negar, recomendar, sentar, tropezar",
              "example": "pensar (to think)",
              "conjugations": [
                [
                  "hubiera / hubiese pensado",
                  "hubiéramos / hubiésemos pensado"
                ],
                [
                  "hubieras / hubieses pensado",
                  "hubierais / hubieseis pensado"
                ],
                [
                  "hubiera / hubiese pensado",
                  "hubieran / hubiesen pensado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "jugar",
              "example": "jugar (to play)",
              "conjugations": [
                [
                  "hubiera / hubiese jugado",
                  "hubiéramos / hubiésemos jugado"
                ],
                [
                  "hubieras / hubieses jugado",
                  "hubierais / hubieseis jugado"
                ],
                [
                  "hubiera / hubiese jugado",
                  "hubieran / hubiesen jugado"
                ]
              ]
            },
            {
              "name": "dar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "dar",
              "example": "dar (to give)",
              "conjugations": [
                [
                  "hubiera / hubiese dado",
                  "hubiéramos / hubiésemos dado"
                ],
                [
                  "hubieras / hubieses dado",
                  "hubierais / hubieseis dado"
                ],
                [
                  "hubiera / hubiese dado",
                  "hubieran / hubiesen dado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "empezar, comenzar, almorzar, cruzar, alcanzar, abrazar, amenazar, cazar, gozar, rezar",
              "example": "empezar (to begin)",
              "conjugations": [
                [
                  "hubiera / hubiese empezado",
                  "hubiéramos / hubiésemos empezado"
                ],
                [
                  "hubieras / hubieses empezado",
                  "hubierais / hubieseis empezado"
                ],
                [
                  "hubiera / hubiese empezado",
                  "hubieran / hubiesen empezado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "llegar, pagar, jugar, apagar, colgar, entregar, madrugar, negar, obligar, tragar",
              "example": "llegar (to arrive)",
              "conjugations": [
                [
                  "hubiera / hubiese llegado",
                  "hubiéramos / hubiésemos llegado"
                ],
                [
                  "hubieras / hubieses llegado",
                  "hubierais / hubieseis llegado"
                ],
                [
                  "hubiera / hubiese llegado",
                  "hubieran / hubiesen llegado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "buscar, tocar, sacar, explicar, practicar, acercar, atacar, colocar, dedicar, indicar",
              "example": "buscar (to search)",
              "conjugations": [
                [
                  "hubiera / hubiese buscado",
                  "hubiéramos / hubiésemos buscado"
                ],
                [
                  "hubieras / hubieses buscado",
                  "hubierais / hubieseis buscado"
                ],
                [
                  "hubiera / hubiese buscado",
                  "hubieran / hubiesen buscado"
                ]
              ]
            },
            {
              "name": "-ar",
              "description": "regular (-ado participle)",
              "dimmed": true,
              "verbs": "averiguar, aguar, desaguar, atestiguar, apaciguar, amenguar, santiguar",
              "example": "averiguar (to find out)",
              "conjugations": [
                [
                  "hubiera / hubiese averiguado",
                  "hubiéramos / hubiésemos averiguado"
                ],
                [
                  "hubieras / hubieses averiguado",
                  "hubierais / hubieseis averiguado"
                ],
                [
                  "hubiera / hubiese averiguado",
                  "hubieran / hubiesen averiguado"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "hubiera / hubiese hablado",
                "hubiéramos / hubiésemos hablado"
              ],
              [
                "hubieras / hubieses hablado",
                "hubierais / hubieseis hablado"
              ],
              [
                "hubiera / hubiese hablado",
                "hubieran / hubiesen hablado"
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "ser",
              "description": "irregular participle (sido)",
              "dimmed": false,
              "verbs": "ser",
              "example": "ser (to be)",
              "conjugations": [
                [
                  "hubiera / hubiese sido",
                  "hubiéramos / hubiésemos sido"
                ],
                [
                  "hubieras / hubieses sido",
                  "hubierais / hubieseis sido"
                ],
                [
                  "hubiera / hubiese sido",
                  "hubieran / hubiesen sido"
                ]
              ]
            },
            {
              "name": "haber",
              "description": "irregular participle (habido)",
              "dimmed": true,
              "verbs": "haber",
              "example": "haber (to have/exist)",
              "conjugations": [
                [
                  "hubiera / hubiese habido",
                  "hubiéramos / hubiésemos habido"
                ],
                [
                  "hubieras / hubieses habido",
                  "hubierais / hubieseis habido"
                ],
                [
                  "hubiera / hubiese habido",
                  "hubieran / hubiesen habido"
                ]
              ]
            },
            {
              "name": "ver",
              "description": "irregular participle (visto)",
              "dimmed": false,
              "verbs": "ver, prever",
              "example": "ver (to see)",
              "conjugations": [
                [
                  "hubiera / hubiese visto",
                  "hubiéramos / hubiésemos visto"
                ],
                [
                  "hubieras / hubieses visto",
                  "hubierais / hubieseis visto"
                ],
                [
                  "hubiera / hubiese visto",
                  "hubieran / hubiesen visto"
                ]
              ]
            },
            {
              "name": "saber",
              "description": "irregular participle (sabido)",
              "dimmed": true,
              "verbs": "saber",
              "example": "saber (to know)",
              "conjugations": [
                [
                  "hubiera / hubiese sabido",
                  "hubiéramos / hubiésemos sabido"
                ],
                [
                  "hubieras / hubieses sabido",
                  "hubierais / hubieseis sabido"
                ],
                [
                  "hubiera / hubiese sabido",
                  "hubieran / hubiesen sabido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (podido)",
              "dimmed": true,
              "verbs": "poder, volver, mover, morder, llover, doler, envolver, resolver, soler, torcer",
              "example": "poder (to be able)",
              "conjugations": [
                [
                  "hubiera / hubiese podido",
                  "hubiéramos / hubiésemos podido"
                ],
                [
                  "hubieras / hubieses podido",
                  "hubierais / hubieseis podido"
                ],
                [
                  "hubiera / hubiese podido",
                  "hubieran / hubiesen podido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (querido)",
              "dimmed": true,
              "verbs": "querer, entender, perder, defender, encender, tender, atender, descender, verter",
              "example": "querer (to want)",
              "conjugations": [
                [
                  "hubiera / hubiese querido",
                  "hubiéramos / hubiésemos querido"
                ],
                [
                  "hubieras / hubieses querido",
                  "hubierais / hubieseis querido"
                ],
                [
                  "hubiera / hubiese querido",
                  "hubieran / hubiesen querido"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "irregular participle (tenido / puesto / hecho)",
              "dimmed": false,
              "verbs": "tener, poner, hacer, valer, caer, traer",
              "example": "hacer (to do/make)",
              "conjugations": [
                [
                  "hubiera / hubiese hecho",
                  "hubiéramos / hubiésemos hecho"
                ],
                [
                  "hubieras / hubieses hecho",
                  "hubierais / hubieseis hecho"
                ],
                [
                  "hubiera / hubiese hecho",
                  "hubieran / hubiesen hecho"
                ]
              ]
            },
            {
              "name": "-er",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "conocer, parecer, ofrecer, pertenecer, aparecer, merecer, crecer, establecer, obedecer, agradecer",
              "example": "conocer (to know)",
              "conjugations": [
                [
                  "hubiera / hubiese conocido",
                  "hubiéramos / hubiésemos conocido"
                ],
                [
                  "hubieras / hubieses conocido",
                  "hubierais / hubieseis conocido"
                ],
                [
                  "hubiera / hubiese conocido",
                  "hubieran / hubiesen conocido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "hubiera / hubiese comido",
                "hubiéramos / hubiésemos comido"
              ],
              [
                "hubieras / hubieses comido",
                "hubierais / hubieseis comido"
              ],
              [
                "hubiera / hubiese comido",
                "hubieran / hubiesen comido"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "ir",
              "description": "irregular participle (ido)",
              "dimmed": true,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "hubiera / hubiese ido",
                  "hubiéramos / hubiésemos ido"
                ],
                [
                  "hubieras / hubieses ido",
                  "hubierais / hubieseis ido"
                ],
                [
                  "hubiera / hubiese ido",
                  "hubieran / hubiesen ido"
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular participle (dicho)",
              "dimmed": false,
              "verbs": "decir, bendecir, maldecir, contradecir, predecir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "hubiera / hubiese dicho",
                  "hubiéramos / hubiésemos dicho"
                ],
                [
                  "hubieras / hubieses dicho",
                  "hubierais / hubieseis dicho"
                ],
                [
                  "hubiera / hubiese dicho",
                  "hubieran / hubiesen dicho"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "sentir, preferir, mentir, convertir, divertir, hervir, invertir, referir, sugerir, advertir",
              "example": "sentir (to feel)",
              "conjugations": [
                [
                  "hubiera / hubiese sentido",
                  "hubiéramos / hubiésemos sentido"
                ],
                [
                  "hubieras / hubieses sentido",
                  "hubierais / hubieseis sentido"
                ],
                [
                  "hubiera / hubiese sentido",
                  "hubieran / hubiesen sentido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "pedir, servir, repetir, seguir, vestir, competir, conseguir, corregir, despedir, elegir",
              "example": "pedir (to ask for)",
              "conjugations": [
                [
                  "hubiera / hubiese pedido",
                  "hubiéramos / hubiésemos pedido"
                ],
                [
                  "hubieras / hubieses pedido",
                  "hubierais / hubieseis pedido"
                ],
                [
                  "hubiera / hubiese pedido",
                  "hubieran / hubiesen pedido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (muerto)",
              "dimmed": false,
              "verbs": "dormir, morir",
              "example": "morir (to die)",
              "conjugations": [
                [
                  "hubiera / hubiese muerto",
                  "hubiéramos / hubiésemos muerto"
                ],
                [
                  "hubieras / hubieses muerto",
                  "hubierais / hubieseis muerto"
                ],
                [
                  "hubiera / hubiese muerto",
                  "hubieran / hubiesen muerto"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular participle (venido)",
              "dimmed": true,
              "verbs": "venir, salir, oír, decir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "hubiera / hubiese venido",
                  "hubiéramos / hubiésemos venido"
                ],
                [
                  "hubieras / hubieses venido",
                  "hubierais / hubieseis venido"
                ],
                [
                  "hubiera / hubiese venido",
                  "hubieran / hubiesen venido"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "producir, traducir, conducir, reducir, introducir, reproducir, deducir, inducir, seducir",
              "example": "producir (to produce)",
              "conjugations": [
                [
                  "hubiera / hubiese producido",
                  "hubiéramos / hubiésemos producido"
                ],
                [
                  "hubieras / hubieses producido",
                  "hubierais / hubieseis producido"
                ],
                [
                  "hubiera / hubiese producido",
                  "hubieran / hubiesen producido"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-ido participle)",
              "dimmed": true,
              "verbs": "construir, destruir, incluir, influir, contribuir, distribuir, sustituir, huir, concluir, excluir",
              "example": "construir (to build)",
              "conjugations": [
                [
                  "hubiera / hubiese construido",
                  "hubiéramos / hubiésemos construido"
                ],
                [
                  "hubieras / hubieses construido",
                  "hubierais / hubieseis construido"
                ],
                [
                  "hubiera / hubiese construido",
                  "hubieran / hubiesen construido"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "hubiera / hubiese vivido",
                "hubiéramos / hubiésemos vivido"
              ],
              [
                "hubieras / hubieses vivido",
                "hubierais / hubieseis vivido"
              ],
              [
                "hubiera / hubiese vivido",
                "hubieran / hubiesen vivido"
              ]
            ]
          }
        }
      ],
      "description": "Expresses impossible past conditions — things that could have happened but didn't. Used in contrary-to-fact 'if' clauses about the past."
    },
    "imp_affirmative": {
      "label": "Affirmative (Imperativo afirmativo)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "-ar",
              "description": "regular",
              "dimmed": true,
              "verbs": "hablar, contar, pensar, jugar, empezar, llegar, buscar",
              "example": "hablar (to speak)",
              "conjugations": [
                [
                  "habla (tú)",
                  "hablad (vosotros)"
                ],
                [
                  "hable (usted)",
                  "hablen (ustedes)"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "habla (tú)",
                "hablad (vosotros)"
              ],
              [
                "hable (usted)",
                "hablen (ustedes)"
              ],
              [
                "",
                ""
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "-er",
              "description": "regular",
              "dimmed": true,
              "verbs": "comer, poder, querer, tener, hacer, conocer",
              "example": "comer (to eat)",
              "conjugations": [
                [
                  "come (tú)",
                  "comed (vosotros)"
                ],
                [
                  "coma (usted)",
                  "coman (ustedes)"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "come (tú)",
                "comed (vosotros)"
              ],
              [
                "coma (usted)",
                "coman (ustedes)"
              ],
              [
                "",
                ""
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "vivir, sentir, pedir, dormir",
              "example": "vivir (to live)",
              "conjugations": [
                [
                  "vive (tú)",
                  "vivid (vosotros)"
                ],
                [
                  "viva (usted)",
                  "vivan (ustedes)"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "ir",
              "description": "irregular",
              "dimmed": false,
              "verbs": "ir",
              "example": "ir (to go)",
              "conjugations": [
                [
                  "ve (tú)",
                  "id (vosotros)"
                ],
                [
                  "vaya (usted)",
                  "vayan (ustedes)"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "decir",
              "description": "irregular",
              "dimmed": false,
              "verbs": "decir",
              "example": "decir (to say)",
              "conjugations": [
                [
                  "di (tú)",
                  "decid (vosotros)"
                ],
                [
                  "diga (usted)",
                  "digan (ustedes)"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "vive (tú)",
                "vivid (vosotros)"
              ],
              [
                "viva (usted)",
                "vivan (ustedes)"
              ],
              [
                "",
                ""
              ]
            ]
          }
        }
      ],
      "description": "Gives positive commands — telling someone to do something. 'Speak!' 'Come here!'"
    },
    "imp_negative": {
      "label": "Negative (Imperativo negativo)",
      "icon": "bi-x-circle",
      "columns": [
        {
          "label": "-ar",
          "patterns": [
            {
              "name": "-ar",
              "description": "uses subjunctive forms",
              "dimmed": true,
              "verbs": "hablar, contar, pensar, jugar, empezar, llegar, buscar",
              "example": "hablar (to speak)",
              "conjugations": [
                [
                  "no hables (tú)",
                  "no habléis (vosotros)"
                ],
                [
                  "no hable (usted)",
                  "no hablen (ustedes)"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ar",
            "example": "hablar (to speak)",
            "conjugations": [
              [
                "no hables (tú)",
                "no habléis (vosotros)"
              ],
              [
                "no hable (usted)",
                "no hablen (ustedes)"
              ],
              [
                "",
                ""
              ]
            ]
          }
        },
        {
          "label": "-er",
          "patterns": [
            {
              "name": "-er",
              "description": "uses subjunctive forms",
              "dimmed": true,
              "verbs": "comer, poder, querer, tener, hacer, conocer",
              "example": "comer (to eat)",
              "conjugations": [
                [
                  "no comas (tú)",
                  "no comáis (vosotros)"
                ],
                [
                  "no coma (usted)",
                  "no coman (ustedes)"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "comer (to eat)",
            "conjugations": [
              [
                "no comas (tú)",
                "no comáis (vosotros)"
              ],
              [
                "no coma (usted)",
                "no coman (ustedes)"
              ],
              [
                "",
                ""
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "uses subjunctive forms",
              "dimmed": true,
              "verbs": "vivir, sentir, pedir, dormir",
              "example": "vivir (to live)",
              "conjugations": [
                [
                  "no vivas (tú)",
                  "no viváis (vosotros)"
                ],
                [
                  "no viva (usted)",
                  "no vivan (ustedes)"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "vivir (to live)",
            "conjugations": [
              [
                "no vivas (tú)",
                "no viváis (vosotros)"
              ],
              [
                "no viva (usted)",
                "no vivan (ustedes)"
              ],
              [
                "",
                ""
              ]
            ]
          }
        }
      ],
      "description": "Gives negative commands — telling someone not to do something. Uses subjunctive forms. 'Don't speak!' 'Don't go!'"
    }
  },
  "groups": {
    "indicative": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "compound_past",
          "imperfect",
          "pluperfect",
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
    ]
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
  "pluralization": [
    { "rule": "Ends in vowel: add -s", "singular": "casa", "plural": "casas", "examples": "libro→libros, gato→gatos, mesa→mesas, coche→coches" },
    { "rule": "Ends in consonant: add -es", "singular": "ciudad", "plural": "ciudades", "examples": "color→colores, papel→papeles, reloj→relojes, león→leones" },
    { "rule": "Ends in -z: change to -ces", "singular": "lápiz", "plural": "lápices", "examples": "pez→peces, luz→luces, voz→voces, vez→veces, cruz→cruces" },
    { "rule": "Ends in -ión: add -es, drop accent", "singular": "canción", "plural": "canciones", "examples": "nación→naciones, opinión→opiniones, lección→lecciones" },
    { "rule": "Ends in -és/-án/-ín: add -es, drop accent", "singular": "francés", "plural": "franceses", "examples": "alemán→alemanes, jardín→jardines, autobús→autobuses" },
    { "rule": "Ends in unstressed -s: no change", "singular": "lunes", "plural": "lunes", "examples": "martes→martes, crisis→crisis, análisis→análisis, paraguas→paraguas" },
    { "rule": "Irregular", "singular": "carácter", "plural": "caracteres", "examples": "régimen→regímenes, espécimen→especímenes" }
  ],
  "chart": {
    "columns": ["Past (Pasado)", "Present (Presente)", "Future (Futuro)", "Conditional (Condicional)"],
    "rows": ["Simple (Simple)", "Compound (Compuesto)", "Imperfect (Imperfecto)", "Pluperfect (Pluscuamperfecto)"],
    "groups": ["-ar: hablar", "-er: comer", "-ir: vivir"],
    "cells": [
      [
        { "form": "Pretérito perfecto", "rule": "Stem + endings",
          "er": [["yo hablé", "n. hablamos"], ["tú hablaste", "v. hablasteis"], ["él habló", "ellos hablaron"]],
          "ir": [["yo comí", "n. comimos"], ["tú comiste", "v. comisteis"], ["él comió", "ellos comieron"]],
          "re": [["yo viví", "n. vivimos"], ["tú viviste", "v. vivisteis"], ["él vivió", "ellos vivieron"]] },
        { "form": "Presente", "rule": "Stem + endings",
          "er": [["yo hablo", "n. hablamos"], ["tú hablas", "v. habláis"], ["él habla", "ellos hablan"]],
          "ir": [["yo como", "n. comemos"], ["tú comes", "v. coméis"], ["él come", "ellos comen"]],
          "re": [["yo vivo", "n. vivimos"], ["tú vives", "v. vivís"], ["él vive", "ellos viven"]] },
        { "form": "Futuro simple", "rule": "Inf. + endings",
          "er": [["yo hablaré", "n. hablaremos"], ["tú hablarás", "v. hablaréis"], ["él hablará", "ellos hablarán"]],
          "ir": [["yo comeré", "n. comeremos"], ["tú comerás", "v. comeréis"], ["él comerá", "ellos comerán"]],
          "re": [["yo viviré", "n. viviremos"], ["tú vivirás", "v. viviréis"], ["él vivirá", "ellos vivirán"]] },
        { "form": "Cond. simple", "rule": "Inf. + endings",
          "er": [["yo hablaría", "n. hablaríamos"], ["tú hablarías", "v. hablaríais"], ["él hablaría", "ellos hablarían"]],
          "ir": [["yo comería", "n. comeríamos"], ["tú comerías", "v. comeríais"], ["él comería", "ellos comerían"]],
          "re": [["yo viviría", "n. viviríamos"], ["tú vivirías", "v. viviríais"], ["él viviría", "ellos vivirían"]] }
      ],
      [
        { "form": "Pret. perf. compuesto", "rule": "Pres. haber + p.p.",
          "er": [["yo he hablado", "n. hemos hablado"], ["tú has hablado", "v. habéis hablado"], ["él ha hablado", "ellos han hablado"]],
          "ir": [["yo he comido", "n. hemos comido"], ["tú has comido", "v. habéis comido"], ["él ha comido", "ellos han comido"]],
          "re": [["yo he vivido", "n. hemos vivido"], ["tú has vivido", "v. habéis vivido"], ["él ha vivido", "ellos han vivido"]] },
        null,
        { "form": "Futuro perfecto", "rule": "Fut. haber + p.p.",
          "er": [["yo habré hablado", "n. habremos hablado"], ["tú habrás hablado", "v. habréis hablado"], ["él habrá hablado", "ellos habrán hablado"]],
          "ir": [["yo habré comido", "n. habremos comido"], ["tú habrás comido", "v. habréis comido"], ["él habrá comido", "ellos habrán comido"]],
          "re": [["yo habré vivido", "n. habremos vivido"], ["tú habrás vivido", "v. habréis vivido"], ["él habrá vivido", "ellos habrán vivido"]] },
        { "form": "Cond. perfecto", "rule": "Cond. haber + p.p.",
          "er": [["yo habría hablado", "n. habríamos hablado"], ["tú habrías hablado", "v. habríais hablado"], ["él habría hablado", "ellos habrían hablado"]],
          "ir": [["yo habría comido", "n. habríamos comido"], ["tú habrías comido", "v. habríais comido"], ["él habría comido", "ellos habrían comido"]],
          "re": [["yo habría vivido", "n. habríamos vivido"], ["tú habrías vivido", "v. habríais vivido"], ["él habría vivido", "ellos habrían vivido"]] }
      ],
      [
        { "form": "Imperfecto", "rule": "Stem + endings",
          "er": [["yo hablaba", "n. hablábamos"], ["tú hablabas", "v. hablabais"], ["él hablaba", "ellos hablaban"]],
          "ir": [["yo comía", "n. comíamos"], ["tú comías", "v. comíais"], ["él comía", "ellos comían"]],
          "re": [["yo vivía", "n. vivíamos"], ["tú vivías", "v. vivíais"], ["él vivía", "ellos vivían"]] },
        null, null, null
      ],
      [
        { "form": "Pluscuamperfecto", "rule": "Imp. haber + p.p.",
          "er": [["yo había hablado", "n. habíamos hablado"], ["tú habías hablado", "v. habíais hablado"], ["él había hablado", "ellos habían hablado"]],
          "ir": [["yo había comido", "n. habíamos comido"], ["tú habías comido", "v. habíais comido"], ["él había comido", "ellos habían comido"]],
          "re": [["yo había vivido", "n. habíamos vivido"], ["tú habías vivido", "v. habíais vivido"], ["él había vivido", "ellos habían vivido"]] },
        null, null, null
      ]
    ]
  }
};
