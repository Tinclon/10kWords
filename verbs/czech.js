var czechData = {
  "language": "Czech",
  "title": "Czech Verbs",
  "theme": {
    "primary": "#6a1b9a",
    "secondary": "#4a148c",
    "tableHeader": "#7b1fa2",
    "stripedRow": "#f3e5f5",
    "border": "#ce93d8"
  },
  "tenses": {
    "present": {
      "label": "Present (Přítomný čas)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-e / -ne class",
          "patterns": [
            {
              "name": "být",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "být",
              "example": "být (to be)",
              "conjugations": [
                [
                  "jsem",
                  "jsme"
                ],
                [
                  "jsi",
                  "jste"
                ],
                [
                  "je",
                  "jsou"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "nést type (consonant stem)",
              "dimmed": false,
              "verbs": "nést, vézt, péct, téct, říct, lézt, moct",
              "example": "nést (to carry)",
              "conjugations": [
                [
                  "nesu",
                  "neseme"
                ],
                [
                  "neseš",
                  "nesete"
                ],
                [
                  "nese",
                  "nesou"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "brát type (vowel shortening)",
              "dimmed": false,
              "verbs": "brát, prát, drát, žrát",
              "example": "brát (to take)",
              "conjugations": [
                [
                  "beru",
                  "bereme"
                ],
                [
                  "bereš",
                  "berete"
                ],
                [
                  "bere",
                  "berou"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "mazat type (consonant alternation)",
              "dimmed": false,
              "verbs": "mazat, psát, plakat, skákat, kázat, řezat, vázat, lízat, hledat, česat",
              "example": "mazat (to smear)",
              "conjugations": [
                [
                  "mažu",
                  "mažeme"
                ],
                [
                  "mažeš",
                  "mažete"
                ],
                [
                  "maže",
                  "mažou"
                ]
              ]
            },
            {
              "name": "-ne class",
              "description": "tisknout type (-nout verbs)",
              "dimmed": false,
              "verbs": "tisknout, minout, táhnout, padnout, vrhnout, klepnout, sednout, zvednout, začít, ohnout",
              "example": "tisknout (to press)",
              "conjugations": [
                [
                  "tisknu",
                  "tiskneme"
                ],
                [
                  "tiskneš",
                  "tisknete"
                ],
                [
                  "tiskne",
                  "tisknou"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -e class",
            "example": "nést (to carry)",
            "conjugations": [
              [
                "nesu",
                "neseme"
              ],
              [
                "neseš",
                "nesete"
              ],
              [
                "nese",
                "nesou"
              ]
            ]
          }
        },
        {
          "label": "-je / -á class",
          "patterns": [
            {
              "name": "-je class",
              "description": "kupovat type (-ovat verbs)",
              "dimmed": false,
              "verbs": "kupovat, pracovat, milovat, cestovat, darovat, děkovat, jmenovat, malovat, potřebovat, studovat",
              "example": "kupovat (to buy)",
              "conjugations": [
                [
                  "kupuju/kupuji",
                  "kupujeme"
                ],
                [
                  "kupuješ",
                  "kupujete"
                ],
                [
                  "kupuje",
                  "kupují"
                ]
              ]
            },
            {
              "name": "-je class",
              "description": "krýt type (vowel stem)",
              "dimmed": false,
              "verbs": "krýt, mýt, žít, pít, bít, výt, rýt, šít, lít",
              "example": "krýt (to cover)",
              "conjugations": [
                [
                  "kryju/kryji",
                  "kryjeme"
                ],
                [
                  "kryješ",
                  "kryjete"
                ],
                [
                  "kryje",
                  "kryjí"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "dělat type (regular -at)",
              "dimmed": false,
              "verbs": "dělat, volat, hledat, čekat, říkat, dávat, znát, hrát, ptát se, poslouchat",
              "example": "dělat (to do)",
              "conjugations": [
                [
                  "dělám",
                  "děláme"
                ],
                [
                  "děláš",
                  "děláte"
                ],
                [
                  "dělá",
                  "dělají"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "sázet type (consonant alternation)",
              "dimmed": false,
              "verbs": "sázet, mazat, kázat, vázat, řídit, chodit, nosit, prosit, platit, jezdit",
              "example": "sázet (to plant)",
              "conjugations": [
                [
                  "sázím",
                  "sázíme"
                ],
                [
                  "sázíš",
                  "sázíte"
                ],
                [
                  "sází",
                  "sázejí"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -á class",
            "example": "dělat (to do)",
            "conjugations": [
              [
                "dělám",
                "děláme"
              ],
              [
                "děláš",
                "děláte"
              ],
              [
                "dělá",
                "dělají"
              ]
            ]
          }
        },
        {
          "label": "-í class / irregular",
          "patterns": [
            {
              "name": "-í class",
              "description": "prosit type (-it verbs)",
              "dimmed": false,
              "verbs": "prosit, mluvit, chodit, nosit, vozit, učit, platit, vrátit, chránit, skočit",
              "example": "prosit (to ask/beg)",
              "conjugations": [
                [
                  "prosím",
                  "prosíme"
                ],
                [
                  "prosíš",
                  "prosíte"
                ],
                [
                  "prosí",
                  "prosí"
                ]
              ]
            },
            {
              "name": "-í class",
              "description": "trpět type (-ět verbs)",
              "dimmed": false,
              "verbs": "trpět, vidět, slyšet, záviset, běžet, sedět, letět, myslet, rozumět, umět",
              "example": "trpět (to suffer)",
              "conjugations": [
                [
                  "trpím",
                  "trpíme"
                ],
                [
                  "trpíš",
                  "trpíte"
                ],
                [
                  "trpí",
                  "trpí"
                ]
              ]
            },
            {
              "name": "mít",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "mít",
              "example": "mít (to have)",
              "conjugations": [
                [
                  "mám",
                  "máme"
                ],
                [
                  "máš",
                  "máte"
                ],
                [
                  "má",
                  "mají"
                ]
              ]
            },
            {
              "name": "jíst",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "jíst",
              "example": "jíst (to eat)",
              "conjugations": [
                [
                  "jím",
                  "jíme"
                ],
                [
                  "jíš",
                  "jíte"
                ],
                [
                  "jí",
                  "jedí"
                ]
              ]
            },
            {
              "name": "vědět",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "vědět",
              "example": "vědět (to know)",
              "conjugations": [
                [
                  "vím",
                  "víme"
                ],
                [
                  "víš",
                  "víte"
                ],
                [
                  "ví",
                  "vědí"
                ]
              ]
            },
            {
              "name": "chtít",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "chtít",
              "example": "chtít (to want)",
              "conjugations": [
                [
                  "chci",
                  "chceme"
                ],
                [
                  "chceš",
                  "chcete"
                ],
                [
                  "chce",
                  "chtějí"
                ]
              ]
            },
            {
              "name": "jít",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "jít, přijít, odejít, najít, vejít, vyjít, obejít, sejít",
              "example": "jít (to go on foot)",
              "conjugations": [
                [
                  "jdu",
                  "jdeme"
                ],
                [
                  "jdeš",
                  "jdete"
                ],
                [
                  "jde",
                  "jdou"
                ]
              ]
            },
            {
              "name": "jet",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "jet, přijet, odjet, zajet, projet, vyjet",
              "example": "jet (to go by vehicle)",
              "conjugations": [
                [
                  "jedu",
                  "jedeme"
                ],
                [
                  "jedeš",
                  "jedete"
                ],
                [
                  "jede",
                  "jedou"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -í class",
            "example": "prosit (to ask/beg)",
            "conjugations": [
              [
                "prosím",
                "prosíme"
              ],
              [
                "prosíš",
                "prosíte"
              ],
              [
                "prosí",
                "prosí"
              ]
            ]
          }
        }
      ],
      "description": "Describes current states, habitual actions, and general truths. Also used for scheduled future events."
    },
    "past": {
      "label": "Past (Minulý čas)",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "-e / -ne class",
          "patterns": [
            {
              "name": "být",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "být",
              "example": "být (to be)",
              "conjugations": [
                [
                  "byl/byla jsem",
                  "byli/byly jsme"
                ],
                [
                  "byl/byla jsi",
                  "byli/byly jste"
                ],
                [
                  "byl/byla/bylo",
                  "byli/byly/byla"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "irregular participle (vowel change)",
              "dimmed": false,
              "verbs": "nést, vézt, péct, téct, říct, lézt, moct",
              "example": "nést (to carry)",
              "conjugations": [
                [
                  "nesl jsem",
                  "nesli jsme"
                ],
                [
                  "nesl jsi",
                  "nesli jste"
                ],
                [
                  "nesl/nesla",
                  "nesli/nesly"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "brát, prát, drát, žrát",
              "example": "brát (to take)",
              "conjugations": [
                [
                  "bral jsem",
                  "brali jsme"
                ],
                [
                  "bral jsi",
                  "brali jste"
                ],
                [
                  "bral/brala",
                  "brali/braly"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "mazat, psát, plakat, skákat, kázat, řezat, vázat, lízat, hledat, česat",
              "example": "mazat (to smear)",
              "conjugations": [
                [
                  "mazal jsem",
                  "mazali jsme"
                ],
                [
                  "mazal jsi",
                  "mazali jste"
                ],
                [
                  "mazal/mazala",
                  "mazali/mazaly"
                ]
              ]
            },
            {
              "name": "-ne class",
              "description": "dropped -nou- in participle",
              "dimmed": false,
              "verbs": "tisknout, minout, táhnout, padnout, vrhnout, klepnout, sednout, zvednout, začít, ohnout",
              "example": "tisknout (to press)",
              "conjugations": [
                [
                  "tiskl jsem",
                  "tiskli jsme"
                ],
                [
                  "tiskl jsi",
                  "tiskli jste"
                ],
                [
                  "tiskl/tiskla",
                  "tiskli/tiskly"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -e class",
            "example": "nést (to carry)",
            "conjugations": [
              [
                "nesl jsem",
                "nesli jsme"
              ],
              [
                "nesl jsi",
                "nesli jste"
              ],
              [
                "nesl/nesla",
                "nesli/nesly"
              ]
            ]
          }
        },
        {
          "label": "-je / -á class",
          "patterns": [
            {
              "name": "-je class",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "kupovat, pracovat, milovat, cestovat, darovat, děkovat, jmenovat, malovat, potřebovat, studovat",
              "example": "kupovat (to buy)",
              "conjugations": [
                [
                  "kupoval jsem",
                  "kupovali jsme"
                ],
                [
                  "kupoval jsi",
                  "kupovali jste"
                ],
                [
                  "kupoval/kupovala",
                  "kupovali/kupovaly"
                ]
              ]
            },
            {
              "name": "-je class",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "krýt, mýt, žít, pít, bít, výt, rýt, šít, lít",
              "example": "krýt (to cover)",
              "conjugations": [
                [
                  "kryl jsem",
                  "kryli jsme"
                ],
                [
                  "kryl jsi",
                  "kryli jste"
                ],
                [
                  "kryl/kryla",
                  "kryli/kryly"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "dělat, volat, hledat, čekat, říkat, dávat, znát, hrát, ptát se, poslouchat",
              "example": "dělat (to do)",
              "conjugations": [
                [
                  "dělal jsem",
                  "dělali jsme"
                ],
                [
                  "dělal jsi",
                  "dělali jste"
                ],
                [
                  "dělal/dělala",
                  "dělali/dělaly"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "sázet, mazat, kázat, vázat, řídit, chodit, nosit, prosit, platit, jezdit",
              "example": "sázet (to plant)",
              "conjugations": [
                [
                  "sázel jsem",
                  "sázeli jsme"
                ],
                [
                  "sázel jsi",
                  "sázeli jste"
                ],
                [
                  "sázel/sázela",
                  "sázeli/sázely"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -á class",
            "example": "dělat (to do)",
            "conjugations": [
              [
                "dělal jsem",
                "dělali jsme"
              ],
              [
                "dělal jsi",
                "dělali jste"
              ],
              [
                "dělal/dělala",
                "dělali/dělaly"
              ]
            ]
          }
        },
        {
          "label": "-í class / irregular",
          "patterns": [
            {
              "name": "-í class",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "prosit, mluvit, chodit, nosit, vozit, učit, platit, vrátit, chránit, skočit",
              "example": "prosit (to ask/beg)",
              "conjugations": [
                [
                  "prosil jsem",
                  "prosili jsme"
                ],
                [
                  "prosil jsi",
                  "prosili jste"
                ],
                [
                  "prosil/prosila",
                  "prosili/prosily"
                ]
              ]
            },
            {
              "name": "-í class",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "trpět, vidět, slyšet, záviset, běžet, sedět, letět, myslet, rozumět, umět",
              "example": "trpět (to suffer)",
              "conjugations": [
                [
                  "trpěl jsem",
                  "trpěli jsme"
                ],
                [
                  "trpěl jsi",
                  "trpěli jste"
                ],
                [
                  "trpěl/trpěla",
                  "trpěli/trpěly"
                ]
              ]
            },
            {
              "name": "mít",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "mít",
              "example": "mít (to have)",
              "conjugations": [
                [
                  "měl jsem",
                  "měli jsme"
                ],
                [
                  "měl jsi",
                  "měli jste"
                ],
                [
                  "měl/měla",
                  "měli/měly"
                ]
              ]
            },
            {
              "name": "jíst",
              "description": "irregular participle (jíst → jedl)",
              "dimmed": false,
              "verbs": "jíst",
              "example": "jíst (to eat)",
              "conjugations": [
                [
                  "jedl jsem",
                  "jedli jsme"
                ],
                [
                  "jedl jsi",
                  "jedli jste"
                ],
                [
                  "jedl/jedla",
                  "jedli/jedly"
                ]
              ]
            },
            {
              "name": "vědět",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "vědět",
              "example": "vědět (to know)",
              "conjugations": [
                [
                  "věděl jsem",
                  "věděli jsme"
                ],
                [
                  "věděl jsi",
                  "věděli jste"
                ],
                [
                  "věděl/věděla",
                  "věděli/věděly"
                ]
              ]
            },
            {
              "name": "chtít",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "chtít",
              "example": "chtít (to want)",
              "conjugations": [
                [
                  "chtěl jsem",
                  "chtěli jsme"
                ],
                [
                  "chtěl jsi",
                  "chtěli jste"
                ],
                [
                  "chtěl/chtěla",
                  "chtěli/chtěly"
                ]
              ]
            },
            {
              "name": "jít",
              "description": "irregular participle (jít → šel)",
              "dimmed": false,
              "verbs": "jít, přijít, odejít, najít, vejít, vyjít, obejít, sejít",
              "example": "jít (to go on foot)",
              "conjugations": [
                [
                  "šel jsem",
                  "šli jsme"
                ],
                [
                  "šel jsi",
                  "šli jste"
                ],
                [
                  "šel/šla",
                  "šli/šly"
                ]
              ]
            },
            {
              "name": "jet",
              "description": "regular participle",
              "dimmed": true,
              "verbs": "jet, přijet, odjet, zajet, projet, vyjet",
              "example": "jet (to go by vehicle)",
              "conjugations": [
                [
                  "jel jsem",
                  "jeli jsme"
                ],
                [
                  "jel jsi",
                  "jeli jste"
                ],
                [
                  "jel/jela",
                  "jeli/jely"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -í class",
            "example": "prosit (to ask/beg)",
            "conjugations": [
              [
                "prosil jsem",
                "prosili jsme"
              ],
              [
                "prosil jsi",
                "prosili jste"
              ],
              [
                "prosil/prosila",
                "prosili/prosily"
              ]
            ]
          }
        }
      ],
      "description": "Describes completed actions in the past.",
      "extra": "<strong>Auxiliary verb být</strong><br><br>The past tense uses the auxiliary verb <em>být</em> (to be) conjugated in the present + the -l participle. However, in the <strong>3rd person</strong> (both singular and plural), the auxiliary is <strong>dropped</strong>:<br><br><table class=\"table table-bordered table-sm mb-0\"><tbody><tr><td>já jsem dělal</td><td>my jsme dělali</td></tr><tr><td>ty jsi dělal</td><td>vy jste dělali</td></tr><tr><td><strong>on dělal</strong> (no auxiliary)</td><td><strong>oni dělali</strong> (no auxiliary)</td></tr></tbody></table><br>In colloquial speech, the auxiliary is also frequently dropped in the 1st person singular: <em>já dělal</em> instead of <em>já jsem dělal</em>."
    },
    "conditional": {
      "label": "Present (Podmiňovací způsob přítomný)",
      "icon": "bi-question-circle",
      "description": "Describes hypothetical situations, wishes, polite requests. Formed with the past participle + conditional particle (bych, bys, by...).",
      "columns": [
        {
          "label": "-e / -ne class",
          "regular": {
            "name": "regular -e class",
            "example": "nést (to carry)",
            "conjugations": [
              [
                "nesl bych",
                "nesli bychom"
              ],
              [
                "nesl bys",
                "nesli byste"
              ],
              [
                "nesl by",
                "nesli by"
              ]
            ]
          },
          "patterns": [
            {
              "name": "být",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "být",
              "example": "být (to be)",
              "conjugations": [
                [
                  "byl bych",
                  "byli bychom"
                ],
                [
                  "byl bys",
                  "byli byste"
                ],
                [
                  "byl by",
                  "byli by"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "nést, vézt, péct, téct, říct, lézt, moct",
              "example": "nést (to carry)",
              "conjugations": [
                [
                  "nesl bych",
                  "nesli bychom"
                ],
                [
                  "nesl bys",
                  "nesli byste"
                ],
                [
                  "nesl by",
                  "nesli by"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "brát, prát, drát, žrát",
              "example": "brát (to take)",
              "conjugations": [
                [
                  "bral bych",
                  "brali bychom"
                ],
                [
                  "bral bys",
                  "brali byste"
                ],
                [
                  "bral by",
                  "brali by"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "mazat, psát, plakat, skákat, kázat, řezat, vázat, lízat, hledat, česat",
              "example": "mazat (to smear)",
              "conjugations": [
                [
                  "mazal bych",
                  "mazali bychom"
                ],
                [
                  "mazal bys",
                  "mazali byste"
                ],
                [
                  "mazal by",
                  "mazali by"
                ]
              ]
            },
            {
              "name": "-ne class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "tisknout, minout, táhnout, padnout, vrhnout, klepnout, sednout, zvednout, začít, ohnout",
              "example": "tisknout (to press)",
              "conjugations": [
                [
                  "tiskl bych",
                  "tiskli bychom"
                ],
                [
                  "tiskl bys",
                  "tiskli byste"
                ],
                [
                  "tiskl by",
                  "tiskli by"
                ]
              ]
            }
          ]
        },
        {
          "label": "-je / -á class",
          "regular": {
            "name": "regular -á class",
            "example": "dělat (to do)",
            "conjugations": [
              [
                "dělal bych",
                "dělali bychom"
              ],
              [
                "dělal bys",
                "dělali byste"
              ],
              [
                "dělal by",
                "dělali by"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-je class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "kupovat, pracovat, milovat, cestovat, darovat, děkovat, jmenovat, malovat, potřebovat, studovat",
              "example": "kupovat (to buy)",
              "conjugations": [
                [
                  "kupoval bych",
                  "kupovali bychom"
                ],
                [
                  "kupoval bys",
                  "kupovali byste"
                ],
                [
                  "kupoval by",
                  "kupovali by"
                ]
              ]
            },
            {
              "name": "-je class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "krýt, mýt, žít, pít, bít, výt, rýt, šít, lít",
              "example": "krýt (to cover)",
              "conjugations": [
                [
                  "kryl bych",
                  "kryli bychom"
                ],
                [
                  "kryl bys",
                  "kryli byste"
                ],
                [
                  "kryl by",
                  "kryli by"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "dělat, volat, hledat, čekat, říkat, dávat, znát, hrát, ptát se, poslouchat",
              "example": "dělat (to do)",
              "conjugations": [
                [
                  "dělal bych",
                  "dělali bychom"
                ],
                [
                  "dělal bys",
                  "dělali byste"
                ],
                [
                  "dělal by",
                  "dělali by"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "sázet, mazat, kázat, vázat, řídit, chodit, nosit, prosit, platit, jezdit",
              "example": "sázet (to plant)",
              "conjugations": [
                [
                  "sázel bych",
                  "sázeli bychom"
                ],
                [
                  "sázel bys",
                  "sázeli byste"
                ],
                [
                  "sázel by",
                  "sázeli by"
                ]
              ]
            }
          ]
        },
        {
          "label": "-í class / irregular",
          "regular": {
            "name": "regular -í class",
            "example": "prosit (to ask/beg)",
            "conjugations": [
              [
                "prosil bych",
                "prosili bychom"
              ],
              [
                "prosil bys",
                "prosili byste"
              ],
              [
                "prosil by",
                "prosili by"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-í class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "prosit, mluvit, chodit, nosit, vozit, učit, platit, vrátit, chránit, skočit",
              "example": "prosit (to ask/beg)",
              "conjugations": [
                [
                  "prosil bych",
                  "prosili bychom"
                ],
                [
                  "prosil bys",
                  "prosili byste"
                ],
                [
                  "prosil by",
                  "prosili by"
                ]
              ]
            },
            {
              "name": "-í class",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "trpět, vidět, slyšet, záviset, běžet, sedět, letět, myslet, rozumět, umět",
              "example": "trpět (to suffer)",
              "conjugations": [
                [
                  "trpěl bych",
                  "trpěli bychom"
                ],
                [
                  "trpěl bys",
                  "trpěli byste"
                ],
                [
                  "trpěl by",
                  "trpěli by"
                ]
              ]
            },
            {
              "name": "mít",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "mít",
              "example": "mít (to have)",
              "conjugations": [
                [
                  "měl bych",
                  "měli bychom"
                ],
                [
                  "měl bys",
                  "měli byste"
                ],
                [
                  "měl by",
                  "měli by"
                ]
              ]
            },
            {
              "name": "jíst",
              "description": "irregular participle (jedl)",
              "dimmed": false,
              "verbs": "jíst",
              "example": "jíst (to eat)",
              "conjugations": [
                [
                  "jedl bych",
                  "jedli bychom"
                ],
                [
                  "jedl bys",
                  "jedli byste"
                ],
                [
                  "jedl by",
                  "jedli by"
                ]
              ]
            },
            {
              "name": "vědět",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "vědět",
              "example": "vědět (to know)",
              "conjugations": [
                [
                  "věděl bych",
                  "věděli bychom"
                ],
                [
                  "věděl bys",
                  "věděli byste"
                ],
                [
                  "věděl by",
                  "věděli by"
                ]
              ]
            },
            {
              "name": "chtít",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "chtít",
              "example": "chtít (to want)",
              "conjugations": [
                [
                  "chtěl bych",
                  "chtěli bychom"
                ],
                [
                  "chtěl bys",
                  "chtěli byste"
                ],
                [
                  "chtěl by",
                  "chtěli by"
                ]
              ]
            },
            {
              "name": "jít",
              "description": "irregular participle (šel)",
              "dimmed": false,
              "verbs": "jít, přijít, odejít, najít, vejít, vyjít, obejít, sejít",
              "example": "jít (to go on foot)",
              "conjugations": [
                [
                  "šel bych",
                  "šli bychom"
                ],
                [
                  "šel bys",
                  "šli byste"
                ],
                [
                  "šel by",
                  "šli by"
                ]
              ]
            },
            {
              "name": "jet",
              "description": "regular conditional",
              "dimmed": true,
              "verbs": "jet, přijet, odjet, zajet, projet, vyjet",
              "example": "jet (to go by vehicle)",
              "conjugations": [
                [
                  "jel bych",
                  "jeli bychom"
                ],
                [
                  "jel bys",
                  "jeli byste"
                ],
                [
                  "jel by",
                  "jeli by"
                ]
              ]
            }
          ]
        }
      ]
    },
    "conditional_past": {
      "label": "Past (Podmiňovací způsob minulý)",
      "icon": "bi-question-circle-fill",
      "description": "Describes unrealized past conditions — things that could have happened but didn't. Formed with past participle + byl + conditional particle.",
      "columns": [
        {
          "label": "-e / -ne class",
          "regular": {
            "name": "regular -e class",
            "example": "nést (to carry)",
            "conjugations": [
              [
                "byl bych nesl",
                "byli bychom nesli"
              ],
              [
                "byl bys nesl",
                "byli byste nesli"
              ],
              [
                "byl by nesl",
                "byli by nesli"
              ]
            ]
          },
          "patterns": [
            {
              "name": "být",
              "description": "n/a (auxiliary itself)",
              "dimmed": true,
              "verbs": "být",
              "example": "být (to be)",
              "conjugations": [
                [
                  "byl bych býval",
                  "byli bychom bývali"
                ],
                [
                  "byl bys býval",
                  "byli byste bývali"
                ],
                [
                  "byl by býval",
                  "byli by bývali"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "regular",
              "dimmed": true,
              "verbs": "nést, vézt, péct, téct, říct, lézt, moct",
              "example": "nést (to carry)",
              "conjugations": [
                [
                  "byl bych nesl",
                  "byli bychom nesli"
                ],
                [
                  "byl bys nesl",
                  "byli byste nesli"
                ],
                [
                  "byl by nesl",
                  "byli by nesli"
                ]
              ]
            },
            {
              "name": "-ne class",
              "description": "regular",
              "dimmed": true,
              "verbs": "tisknout, minout, táhnout, padnout",
              "example": "tisknout (to press)",
              "conjugations": [
                [
                  "byl bych tiskl",
                  "byli bychom tiskli"
                ],
                [
                  "byl bys tiskl",
                  "byli byste tiskli"
                ],
                [
                  "byl by tiskl",
                  "byli by tiskli"
                ]
              ]
            }
          ]
        },
        {
          "label": "-je / -á class",
          "regular": {
            "name": "regular -á class",
            "example": "dělat (to do)",
            "conjugations": [
              [
                "byl bych dělal",
                "byli bychom dělali"
              ],
              [
                "byl bys dělal",
                "byli byste dělali"
              ],
              [
                "byl by dělal",
                "byli by dělali"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-je class",
              "description": "regular",
              "dimmed": true,
              "verbs": "kupovat, pracovat, milovat, cestovat",
              "example": "kupovat (to buy)",
              "conjugations": [
                [
                  "byl bych kupoval",
                  "byli bychom kupovali"
                ],
                [
                  "byl bys kupoval",
                  "byli byste kupovali"
                ],
                [
                  "byl by kupoval",
                  "byli by kupovali"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "regular",
              "dimmed": true,
              "verbs": "dělat, volat, hledat, čekat, říkat",
              "example": "dělat (to do)",
              "conjugations": [
                [
                  "byl bych dělal",
                  "byli bychom dělali"
                ],
                [
                  "byl bys dělal",
                  "byli byste dělali"
                ],
                [
                  "byl by dělal",
                  "byli by dělali"
                ]
              ]
            }
          ]
        },
        {
          "label": "-í class / irregular",
          "regular": {
            "name": "regular -í class",
            "example": "prosit (to ask/beg)",
            "conjugations": [
              [
                "byl bych prosil",
                "byli bychom prosili"
              ],
              [
                "byl bys prosil",
                "byli byste prosili"
              ],
              [
                "byl by prosil",
                "byli by prosili"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-í class",
              "description": "regular",
              "dimmed": true,
              "verbs": "prosit, mluvit, chodit, nosit, vozit",
              "example": "prosit (to ask/beg)",
              "conjugations": [
                [
                  "byl bych prosil",
                  "byli bychom prosili"
                ],
                [
                  "byl bys prosil",
                  "byli byste prosili"
                ],
                [
                  "byl by prosil",
                  "byli by prosili"
                ]
              ]
            },
            {
              "name": "jít",
              "description": "irregular participle",
              "dimmed": false,
              "verbs": "jít, přijít, odejít",
              "example": "jít (to go on foot)",
              "conjugations": [
                [
                  "byl bych šel",
                  "byli bychom šli"
                ],
                [
                  "byl bys šel",
                  "byli byste šli"
                ],
                [
                  "byl by šel",
                  "byli by šli"
                ]
              ]
            },
            {
              "name": "jíst",
              "description": "irregular participle",
              "dimmed": false,
              "verbs": "jíst",
              "example": "jíst (to eat)",
              "conjugations": [
                [
                  "byl bych jedl",
                  "byli bychom jedli"
                ],
                [
                  "byl bys jedl",
                  "byli byste jedli"
                ],
                [
                  "byl by jedl",
                  "byli by jedli"
                ]
              ]
            }
          ]
        }
      ]
    },
    "imperative": {
      "label": "Imperative (Rozkazovací způsob)",
      "icon": "bi-exclamation-circle",
      "description": "Gives commands. Only 2nd person singular, 1st person plural, and 2nd person plural forms exist.",
      "columns": [
        {
          "label": "-e / -ne class",
          "regular": {
            "name": "regular -e class",
            "example": "nést (to carry)",
            "conjugations": [
              [
                "nes",
                "nesme"
              ],
              [
                "",
                "neste"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": [
            {
              "name": "-e class",
              "description": "nést type",
              "dimmed": false,
              "verbs": "nést, vézt, péct, téct, říct, lézt",
              "example": "nést (to carry)",
              "conjugations": [
                [
                  "nes",
                  "nesme"
                ],
                [
                  "",
                  "neste"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "brát type",
              "dimmed": false,
              "verbs": "brát, prát, drát",
              "example": "brát (to take)",
              "conjugations": [
                [
                  "ber",
                  "berme"
                ],
                [
                  "",
                  "berte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "mazat type",
              "dimmed": false,
              "verbs": "mazat, psát, plakat, skákat",
              "example": "mazat (to smear)",
              "conjugations": [
                [
                  "maž",
                  "mažme"
                ],
                [
                  "",
                  "mažte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-ne class",
              "description": "tisknout type",
              "dimmed": false,
              "verbs": "tisknout, minout, táhnout, padnout, sednout",
              "example": "tisknout (to press)",
              "conjugations": [
                [
                  "tiskni",
                  "tiskněme"
                ],
                [
                  "",
                  "tiskněte"
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
          "label": "-je / -á class",
          "regular": {
            "name": "regular -á class",
            "example": "dělat (to do)",
            "conjugations": [
              [
                "dělej",
                "dělejme"
              ],
              [
                "",
                "dělejte"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": [
            {
              "name": "-je class",
              "description": "kupovat type",
              "dimmed": false,
              "verbs": "kupovat, pracovat, milovat, cestovat",
              "example": "kupovat (to buy)",
              "conjugations": [
                [
                  "kupuj",
                  "kupujme"
                ],
                [
                  "",
                  "kupujte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-je class",
              "description": "krýt type",
              "dimmed": false,
              "verbs": "krýt, mýt, žít, pít",
              "example": "krýt (to cover)",
              "conjugations": [
                [
                  "kryj",
                  "kryjme"
                ],
                [
                  "",
                  "kryjte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "dělat type",
              "dimmed": false,
              "verbs": "dělat, volat, hledat, čekat, říkat, dávat",
              "example": "dělat (to do)",
              "conjugations": [
                [
                  "dělej",
                  "dělejme"
                ],
                [
                  "",
                  "dělejte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "sázet type",
              "dimmed": false,
              "verbs": "sázet, řídit, chodit, nosit",
              "example": "sázet (to plant)",
              "conjugations": [
                [
                  "sázej",
                  "sázejme"
                ],
                [
                  "",
                  "sázejte"
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
          "label": "-í class / irregular",
          "regular": {
            "name": "regular -í class",
            "example": "prosit (to ask/beg)",
            "conjugations": [
              [
                "pros",
                "prosme"
              ],
              [
                "",
                "proste"
              ],
              [
                "",
                ""
              ]
            ]
          },
          "patterns": [
            {
              "name": "-í class",
              "description": "prosit type (-it)",
              "dimmed": false,
              "verbs": "prosit, mluvit, chodit, nosit, vozit, učit, platit",
              "example": "mluvit (to speak)",
              "conjugations": [
                [
                  "mluv",
                  "mluvme"
                ],
                [
                  "",
                  "mluvte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-í class",
              "description": "trpět type (-ět)",
              "dimmed": false,
              "verbs": "trpět, vidět, slyšet, sedět, letět, myslet",
              "example": "vidět (to see)",
              "conjugations": [
                [
                  "viz",
                  "vizme"
                ],
                [
                  "",
                  "vizte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "být",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "být",
              "example": "být (to be)",
              "conjugations": [
                [
                  "buď",
                  "buďme"
                ],
                [
                  "",
                  "buďte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "mít",
              "description": "irregular",
              "dimmed": false,
              "verbs": "mít",
              "example": "mít (to have)",
              "conjugations": [
                [
                  "měj",
                  "mějme"
                ],
                [
                  "",
                  "mějte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "jíst",
              "description": "irregular",
              "dimmed": false,
              "verbs": "jíst",
              "example": "jíst (to eat)",
              "conjugations": [
                [
                  "jez",
                  "jezme"
                ],
                [
                  "",
                  "jezte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "vědět",
              "description": "irregular",
              "dimmed": false,
              "verbs": "vědět",
              "example": "vědět (to know)",
              "conjugations": [
                [
                  "věz",
                  "vězme"
                ],
                [
                  "",
                  "vězte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "jít",
              "description": "irregular",
              "dimmed": false,
              "verbs": "jít, přijít, odejít",
              "example": "jít (to go on foot)",
              "conjugations": [
                [
                  "jdi",
                  "jděme"
                ],
                [
                  "",
                  "jděte"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "jet",
              "description": "irregular",
              "dimmed": false,
              "verbs": "jet, přijet, odjet",
              "example": "jet (to go by vehicle)",
              "conjugations": [
                [
                  "jeď",
                  "jeďme"
                ],
                [
                  "",
                  "jeďte"
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
    "future": {
      "label": "Future (Budoucí čas)",
      "icon": "bi-arrow-right",
      "description": "Imperfective verbs form the future with budu + infinitive. Perfective verbs use their present-tense conjugation with future meaning.",
      "extra": "<strong>Imperfective vs. Perfective</strong><br><br>Czech verbs come in aspect pairs. The future is formed differently depending on aspect:<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Imperfective (ongoing)</th><th>Perfective (completed)</th></tr></thead><tbody><tr><td>budu + infinitive<br><em>budu dělat</em> (I will be doing)</td><td>present-tense forms = future<br><em>udělám</em> (I will do/finish)</td></tr><tr><td>dělat → budu dělat</td><td>udělat → udělám</td></tr><tr><td>psát → budu psát</td><td>napsat → napíšu</td></tr><tr><td>číst → budu číst</td><td>přečíst → přečtu</td></tr></tbody></table>",
      "columns": [
        {
          "label": "-e / -ne class",
          "regular": {
            "name": "imperfective future",
            "example": "nést (to carry)",
            "conjugations": [
              [
                "budu nést",
                "budeme nést"
              ],
              [
                "budeš nést",
                "budete nést"
              ],
              [
                "bude nést",
                "budou nést"
              ]
            ]
          },
          "patterns": [
            {
              "name": "být",
              "description": "synthetic future (fully irregular)",
              "dimmed": false,
              "verbs": "být",
              "example": "být (to be)",
              "conjugations": [
                [
                  "budu",
                  "budeme"
                ],
                [
                  "budeš",
                  "budete"
                ],
                [
                  "bude",
                  "budou"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "nést, vézt, péct, téct, říct, lézt, moct",
              "example": "nést (to carry)",
              "conjugations": [
                [
                  "budu nést",
                  "budeme nést"
                ],
                [
                  "budeš nést",
                  "budete nést"
                ],
                [
                  "bude nést",
                  "budou nést"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "brát, prát, drát, žrát",
              "example": "brát (to take)",
              "conjugations": [
                [
                  "budu brát",
                  "budeme brát"
                ],
                [
                  "budeš brát",
                  "budete brát"
                ],
                [
                  "bude brát",
                  "budou brát"
                ]
              ]
            },
            {
              "name": "-e class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "mazat, psát, plakat, skákat, kázat, řezat, vázat, lízat, hledat, česat",
              "example": "mazat (to smear)",
              "conjugations": [
                [
                  "budu mazat",
                  "budeme mazat"
                ],
                [
                  "budeš mazat",
                  "budete mazat"
                ],
                [
                  "bude mazat",
                  "budou mazat"
                ]
              ]
            },
            {
              "name": "-ne class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "tisknout, minout, táhnout, padnout, vrhnout, klepnout, sednout, zvednout, začít, ohnout",
              "example": "tisknout (to press)",
              "conjugations": [
                [
                  "budu tisknout",
                  "budeme tisknout"
                ],
                [
                  "budeš tisknout",
                  "budete tisknout"
                ],
                [
                  "bude tisknout",
                  "budou tisknout"
                ]
              ]
            }
          ]
        },
        {
          "label": "-je / -á class",
          "regular": {
            "name": "imperfective future",
            "example": "dělat (to do)",
            "conjugations": [
              [
                "budu dělat",
                "budeme dělat"
              ],
              [
                "budeš dělat",
                "budete dělat"
              ],
              [
                "bude dělat",
                "budou dělat"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-je class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "kupovat, pracovat, milovat, cestovat, darovat, děkovat, jmenovat, malovat, potřebovat, studovat",
              "example": "kupovat (to buy)",
              "conjugations": [
                [
                  "budu kupovat",
                  "budeme kupovat"
                ],
                [
                  "budeš kupovat",
                  "budete kupovat"
                ],
                [
                  "bude kupovat",
                  "budou kupovat"
                ]
              ]
            },
            {
              "name": "-je class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "krýt, mýt, žít, pít, bít, výt, rýt, šít, lít",
              "example": "krýt (to cover)",
              "conjugations": [
                [
                  "budu krýt",
                  "budeme krýt"
                ],
                [
                  "budeš krýt",
                  "budete krýt"
                ],
                [
                  "bude krýt",
                  "budou krýt"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "dělat, volat, hledat, čekat, říkat, dávat, znát, hrát, ptát se, poslouchat",
              "example": "dělat (to do)",
              "conjugations": [
                [
                  "budu dělat",
                  "budeme dělat"
                ],
                [
                  "budeš dělat",
                  "budete dělat"
                ],
                [
                  "bude dělat",
                  "budou dělat"
                ]
              ]
            },
            {
              "name": "-á class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "sázet, mazat, kázat, vázat, řídit, chodit, nosit, prosit, platit, jezdit",
              "example": "sázet (to plant)",
              "conjugations": [
                [
                  "budu sázet",
                  "budeme sázet"
                ],
                [
                  "budeš sázet",
                  "budete sázet"
                ],
                [
                  "bude sázet",
                  "budou sázet"
                ]
              ]
            }
          ]
        },
        {
          "label": "-í class / irregular",
          "regular": {
            "name": "imperfective future",
            "example": "prosit (to ask/beg)",
            "conjugations": [
              [
                "budu prosit",
                "budeme prosit"
              ],
              [
                "budeš prosit",
                "budete prosit"
              ],
              [
                "bude prosit",
                "budou prosit"
              ]
            ]
          },
          "patterns": [
            {
              "name": "-í class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "prosit, mluvit, chodit, nosit, vozit, učit, platit, vrátit, chránit, skočit",
              "example": "prosit (to ask/beg)",
              "conjugations": [
                [
                  "budu prosit",
                  "budeme prosit"
                ],
                [
                  "budeš prosit",
                  "budete prosit"
                ],
                [
                  "bude prosit",
                  "budou prosit"
                ]
              ]
            },
            {
              "name": "-í class",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "trpět, vidět, slyšet, záviset, běžet, sedět, letět, myslet, rozumět, umět",
              "example": "trpět (to suffer)",
              "conjugations": [
                [
                  "budu trpět",
                  "budeme trpět"
                ],
                [
                  "budeš trpět",
                  "budete trpět"
                ],
                [
                  "bude trpět",
                  "budou trpět"
                ]
              ]
            },
            {
              "name": "mít",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "mít",
              "example": "mít (to have)",
              "conjugations": [
                [
                  "budu mít",
                  "budeme mít"
                ],
                [
                  "budeš mít",
                  "budete mít"
                ],
                [
                  "bude mít",
                  "budou mít"
                ]
              ]
            },
            {
              "name": "jíst",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "jíst",
              "example": "jíst (to eat)",
              "conjugations": [
                [
                  "budu jíst",
                  "budeme jíst"
                ],
                [
                  "budeš jíst",
                  "budete jíst"
                ],
                [
                  "bude jíst",
                  "budou jíst"
                ]
              ]
            },
            {
              "name": "vědět",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "vědět",
              "example": "vědět (to know)",
              "conjugations": [
                [
                  "budu vědět",
                  "budeme vědět"
                ],
                [
                  "budeš vědět",
                  "budete vědět"
                ],
                [
                  "bude vědět",
                  "budou vědět"
                ]
              ]
            },
            {
              "name": "chtít",
              "description": "budu + infinitive",
              "dimmed": true,
              "verbs": "chtít",
              "example": "chtít (to want)",
              "conjugations": [
                [
                  "budu chtít",
                  "budeme chtít"
                ],
                [
                  "budeš chtít",
                  "budete chtít"
                ],
                [
                  "bude chtít",
                  "budou chtít"
                ]
              ]
            },
            {
              "name": "jít",
              "description": "perfective present = future (půjdu)",
              "dimmed": false,
              "verbs": "jít, přijít, odejít, najít, vejít, vyjít, obejít, sejít",
              "example": "jít (to go on foot)",
              "conjugations": [
                [
                  "půjdu",
                  "půjdeme"
                ],
                [
                  "půjdeš",
                  "půjdete"
                ],
                [
                  "půjde",
                  "půjdou"
                ]
              ]
            },
            {
              "name": "jet",
              "description": "perfective present = future (pojedu)",
              "dimmed": false,
              "verbs": "jet, přijet, odjet, zajet, projet, vyjet",
              "example": "jet (to go by vehicle)",
              "conjugations": [
                [
                  "pojedu",
                  "pojedeme"
                ],
                [
                  "pojedeš",
                  "pojedete"
                ],
                [
                  "pojede",
                  "pojedou"
                ]
              ]
            }
          ]
        }
      ]
    }
  },
  "groups": {
    "indicative": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
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
          "future"
        ]
      }
    ],
    "conditional": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "conditional_past"
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
        "label": "Imperative",
        "icon": "bi-exclamation-circle",
        "tenses": [
          "imperative"
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
      "label": "Conditional",
      "icon": "bi-question-circle",
      "key": "conditional",
      "description": "Describes hypothetical situations, wishes, and polite requests. Czech uses the conditional mood where other languages might use the subjunctive."
    },
    {
      "label": "Imperative",
      "icon": "bi-exclamation-circle",
      "key": "imperative",
      "description": "Gives commands, instructions, or requests directly."
    }
  ],
  "chart": {
    "columns": ["Past (Minulý)", "Present (Přítomný)", "Future (Budoucí)", "Conditional (Podmiňovací)"],
    "rows": ["Indicative", "Past Conditional"],
    "groups": ["-e: nést", "-je: kupovat", "-í: prosit"],
    "cells": [
      [
        { "form": "Minulý čas", "rule": "Past participle + být aux.",
          "er": [["nesl jsem", "nesli jsme"], ["nesl jsi", "nesli jste"], ["nesl", "nesli"]],
          "ir": [["kupoval jsem", "kupovali jsme"], ["kupoval jsi", "kupovali jste"], ["kupoval", "kupovali"]],
          "re": [["prosil jsem", "prosili jsme"], ["prosil jsi", "prosili jste"], ["prosil", "prosili"]] },
        { "form": "Přítomný čas", "rule": "Stem + personal endings",
          "er": [["nesu", "neseme"], ["neseš", "nesete"], ["nese", "nesou"]],
          "ir": [["kupuju", "kupujeme"], ["kupuješ", "kupujete"], ["kupuje", "kupují"]],
          "re": [["prosím", "prosíme"], ["prosíš", "prosíte"], ["prosí", "prosí"]] },
        { "form": "Budoucí čas", "rule": "budu + infinitive (imperf.)",
          "er": [["budu nést", "budeme nést"], ["budeš nést", "budete nést"], ["bude nést", "budou nést"]],
          "ir": [["budu kupovat", "budeme kupovat"], ["budeš kupovat", "budete kupovat"], ["bude kupovat", "budou kupovat"]],
          "re": [["budu prosit", "budeme prosit"], ["budeš prosit", "budete prosit"], ["bude prosit", "budou prosit"]] },
        { "form": "Podm. přítomný", "rule": "Past participle + bych/bys/by...",
          "er": [["nesl bych", "nesli bychom"], ["nesl bys", "nesli byste"], ["nesl by", "nesli by"]],
          "ir": [["kupoval bych", "kupovali bychom"], ["kupoval bys", "kupovali byste"], ["kupoval by", "kupovali by"]],
          "re": [["prosil bych", "prosili bychom"], ["prosil bys", "prosili byste"], ["prosil by", "prosili by"]] }
      ],
      [
        null, null, null,
        { "form": "Podm. minulý", "rule": "Past part. + byl + bych/bys/by...",
          "er": [["byl bych nesl", "byli bychom nesli"], ["byl bys nesl", "byli byste nesli"], ["byl by nesl", "byli by nesli"]],
          "ir": [["byl bych kupoval", "byli bychom kupovali"], ["byl bys kupoval", "byli byste kupovali"], ["byl by kupoval", "byli by kupovali"]],
          "re": [["byl bych prosil", "byli bychom prosili"], ["byl bys prosil", "byli byste prosili"], ["byl by prosil", "byli by prosili"]] }
      ]
    ]
  }
};
