var italianData = {
  "language": "Italian",
  "title": "Italian Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" }
  ],
  "theme": {
    "primary": "#558b2f",
    "secondary": "#33691e",
    "tableHeader": "#689f38",
    "stripedRow": "#f1f8e9",
    "border": "#aed581"
  },
  "tenses": {
    "present": {
      "label": "Present (Presente)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sono", "siamo"],
                ["sei", "siete"],
                ["è", "sono"]
              ]
            },
            {
              "name": "avere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["ho", "abbiamo"],
                ["hai", "avete"],
                ["ha", "hanno"]
              ]
            },
            {
              "name": "andare",
              "description": "stem change (and- → vad-/va-)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["vado", "andiamo"],
                ["vai", "andate"],
                ["va", "vanno"]
              ]
            },
            {
              "name": "fare",
              "description": "contracted from facere",
              "dimmed": false,
              "verbs": "fare, disfare, rifare, soddisfare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["faccio", "facciamo"],
                ["fai", "fate"],
                ["fa", "fanno"]
              ]
            },
            {
              "name": "dare",
              "description": "irregular monosyllabic",
              "dimmed": false,
              "verbs": "dare, ridare",
              "example": "dare (to give)",
              "conjugations": [
                ["do", "diamo"],
                ["dai", "date"],
                ["dà", "danno"]
              ]
            },
            {
              "name": "stare",
              "description": "irregular monosyllabic",
              "dimmed": false,
              "verbs": "stare, restare",
              "example": "stare (to stay)",
              "conjugations": [
                ["sto", "stiamo"],
                ["stai", "state"],
                ["sta", "stanno"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["parlo", "parliamo"],
              ["parli", "parlate"],
              ["parla", "parlano"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "stem change (pot- → poss-/puoi)",
              "dimmed": false,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["posso", "possiamo"],
                ["puoi", "potete"],
                ["può", "possono"]
              ]
            },
            {
              "name": "volere",
              "description": "stem change (vol- → vogl-/vuoi)",
              "dimmed": false,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["voglio", "vogliamo"],
                ["vuoi", "volete"],
                ["vuole", "vogliono"]
              ]
            },
            {
              "name": "dovere",
              "description": "stem change (dov- → dev-/debb-)",
              "dimmed": false,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["devo", "dobbiamo"],
                ["devi", "dovete"],
                ["deve", "devono"]
              ]
            },
            {
              "name": "sapere",
              "description": "stem change (sap- → sa-/sann-)",
              "dimmed": false,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["so", "sappiamo"],
                ["sai", "sapete"],
                ["sa", "sanno"]
              ]
            },
            {
              "name": "bere",
              "description": "contracted from bevere",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["bevo", "beviamo"],
                ["bevi", "bevete"],
                ["beve", "bevono"]
              ]
            },
            {
              "name": "tenere",
              "description": "stem change (ten- → tien-/teng-)",
              "dimmed": false,
              "verbs": "tenere, mantenere, ottenere, contenere, sostenere, trattenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["tengo", "teniamo"],
                ["tieni", "tenete"],
                ["tiene", "tengono"]
              ]
            },
            {
              "name": "piacere",
              "description": "stem change (piac- → piacc-)",
              "dimmed": false,
              "verbs": "piacere, dispiacere, tacere, giacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["piaccio", "piacciamo"],
                ["piaci", "piacete"],
                ["piace", "piacciono"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["vendo", "vendiamo"],
              ["vendi", "vendete"],
              ["vende", "vendono"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "finire (-isc-)",
              "description": "-isc- insertion in singular and 3rd plural",
              "dimmed": false,
              "verbs": "finire, capire, preferire, pulire, costruire, spedire, unire, colpire, garantire, suggerire",
              "example": "finire (to finish)",
              "conjugations": [
                ["finisco", "finiamo"],
                ["finisci", "finite"],
                ["finisce", "finiscono"]
              ]
            },
            {
              "name": "dire",
              "description": "contracted from dicere",
              "dimmed": false,
              "verbs": "dire, contraddire, predire, maledire, benedire",
              "example": "dire (to say)",
              "conjugations": [
                ["dico", "diciamo"],
                ["dici", "dite"],
                ["dice", "dicono"]
              ]
            },
            {
              "name": "venire",
              "description": "stem change (ven- → vien-/veng-)",
              "dimmed": false,
              "verbs": "venire, divenire, avvenire, convenire, provenire",
              "example": "venire (to come)",
              "conjugations": [
                ["vengo", "veniamo"],
                ["vieni", "venite"],
                ["viene", "vengono"]
              ]
            },
            {
              "name": "uscire",
              "description": "stem change (usc- → esc-)",
              "dimmed": false,
              "verbs": "uscire, riuscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["esco", "usciamo"],
                ["esci", "uscite"],
                ["esce", "escono"]
              ]
            },
            {
              "name": "morire",
              "description": "stem change (mor- → muoi-/muor-)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["muoio", "moriamo"],
                ["muori", "morite"],
                ["muore", "muoiono"]
              ]
            },
            {
              "name": "salire",
              "description": "stem change (sal- → salg-)",
              "dimmed": false,
              "verbs": "salire, risalire",
              "example": "salire (to climb)",
              "conjugations": [
                ["salgo", "saliamo"],
                ["sali", "salite"],
                ["sale", "salgono"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["dormo", "dormiamo"],
              ["dormi", "dormite"],
              ["dorme", "dormono"]
            ]
          }
        }
      ]
    },
    "compound_past": {
      "label": "Present Perfect (Passato prossimo)",
      "icon": "bi-check2",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "essere + stato (uses essere as auxiliary)",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sono stato/a", "siamo stati/e"],
                ["sei stato/a", "siete stati/e"],
                ["è stato/a", "sono stati/e"]
              ]
            },
            {
              "name": "avere",
              "description": "avere + avuto",
              "dimmed": false,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["ho avuto", "abbiamo avuto"],
                ["hai avuto", "avete avuto"],
                ["ha avuto", "hanno avuto"]
              ]
            },
            {
              "name": "andare",
              "description": "essere + andato (uses essere)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["sono andato/a", "siamo andati/e"],
                ["sei andato/a", "siete andati/e"],
                ["è andato/a", "sono andati/e"]
              ]
            },
            {
              "name": "fare",
              "description": "avere + fatto (irregular past participle)",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["ho fatto", "abbiamo fatto"],
                ["hai fatto", "avete fatto"],
                ["ha fatto", "hanno fatto"]
              ]
            },
            {
              "name": "dare",
              "description": "avere + dato",
              "dimmed": false,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["ho dato", "abbiamo dato"],
                ["hai dato", "avete dato"],
                ["ha dato", "hanno dato"]
              ]
            },
            {
              "name": "stare",
              "description": "essere + stato (uses essere)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["sono stato/a", "siamo stati/e"],
                ["sei stato/a", "siete stati/e"],
                ["è stato/a", "sono stati/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["ho parlato", "abbiamo parlato"],
              ["hai parlato", "avete parlato"],
              ["ha parlato", "hanno parlato"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "avere + potuto",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["ho potuto", "abbiamo potuto"],
                ["hai potuto", "avete potuto"],
                ["ha potuto", "hanno potuto"]
              ]
            },
            {
              "name": "volere",
              "description": "avere + voluto",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["ho voluto", "abbiamo voluto"],
                ["hai voluto", "avete voluto"],
                ["ha voluto", "hanno voluto"]
              ]
            },
            {
              "name": "dovere",
              "description": "avere + dovuto",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["ho dovuto", "abbiamo dovuto"],
                ["hai dovuto", "avete dovuto"],
                ["ha dovuto", "hanno dovuto"]
              ]
            },
            {
              "name": "sapere",
              "description": "avere + saputo",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["ho saputo", "abbiamo saputo"],
                ["hai saputo", "avete saputo"],
                ["ha saputo", "hanno saputo"]
              ]
            },
            {
              "name": "bere",
              "description": "avere + bevuto (irregular past participle)",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["ho bevuto", "abbiamo bevuto"],
                ["hai bevuto", "avete bevuto"],
                ["ha bevuto", "hanno bevuto"]
              ]
            },
            {
              "name": "tenere",
              "description": "avere + tenuto",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["ho tenuto", "abbiamo tenuto"],
                ["hai tenuto", "avete tenuto"],
                ["ha tenuto", "hanno tenuto"]
              ]
            },
            {
              "name": "piacere",
              "description": "essere + piaciuto (uses essere)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["sono piaciuto/a", "siamo piaciuti/e"],
                ["sei piaciuto/a", "siete piaciuti/e"],
                ["è piaciuto/a", "sono piaciuti/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["ho venduto", "abbiamo venduto"],
              ["hai venduto", "avete venduto"],
              ["ha venduto", "hanno venduto"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "avere + detto (irregular past participle)",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["ho detto", "abbiamo detto"],
                ["hai detto", "avete detto"],
                ["ha detto", "hanno detto"]
              ]
            },
            {
              "name": "venire",
              "description": "essere + venuto (uses essere)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["sono venuto/a", "siamo venuti/e"],
                ["sei venuto/a", "siete venuti/e"],
                ["è venuto/a", "sono venuti/e"]
              ]
            },
            {
              "name": "uscire",
              "description": "essere + uscito (uses essere)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["sono uscito/a", "siamo usciti/e"],
                ["sei uscito/a", "siete usciti/e"],
                ["è uscito/a", "sono usciti/e"]
              ]
            },
            {
              "name": "morire",
              "description": "essere + morto (irregular p.p., uses essere)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["sono morto/a", "siamo morti/e"],
                ["sei morto/a", "siete morti/e"],
                ["è morto/a", "sono morti/e"]
              ]
            },
            {
              "name": "salire",
              "description": "essere + salito (uses essere with intransitive)",
              "dimmed": false,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["sono salito/a", "siamo saliti/e"],
                ["sei salito/a", "siete saliti/e"],
                ["è salito/a", "sono saliti/e"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular past participle (-ito)",
              "dimmed": true,
              "verbs": "finire, capire, preferire, pulire",
              "example": "finire (to finish)",
              "conjugations": [
                ["ho finito", "abbiamo finito"],
                ["hai finito", "avete finito"],
                ["ha finito", "hanno finito"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["ho dormito", "abbiamo dormito"],
              ["hai dormito", "avete dormito"],
              ["ha dormito", "hanno dormito"]
            ]
          }
        }
      ]
    },
    "imperfect": {
      "label": "Imperfect (Imperfetto)",
      "icon": "bi-hourglass-split",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["ero", "eravamo"],
                ["eri", "eravate"],
                ["era", "erano"]
              ]
            },
            {
              "name": "avere",
              "description": "regular",
              "dimmed": true,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["avevo", "avevamo"],
                ["avevi", "avevate"],
                ["aveva", "avevano"]
              ]
            },
            {
              "name": "andare",
              "description": "regular",
              "dimmed": true,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["andavo", "andavamo"],
                ["andavi", "andavate"],
                ["andava", "andavano"]
              ]
            },
            {
              "name": "fare",
              "description": "contracted stem (fac-)",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["facevo", "facevamo"],
                ["facevi", "facevate"],
                ["faceva", "facevano"]
              ]
            },
            {
              "name": "dare",
              "description": "regular",
              "dimmed": true,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["davo", "davamo"],
                ["davi", "davate"],
                ["dava", "davano"]
              ]
            },
            {
              "name": "stare",
              "description": "regular",
              "dimmed": true,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["stavo", "stavamo"],
                ["stavi", "stavate"],
                ["stava", "stavano"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["parlavo", "parlavamo"],
              ["parlavi", "parlavate"],
              ["parlava", "parlavano"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "regular",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["potevo", "potevamo"],
                ["potevi", "potevate"],
                ["poteva", "potevano"]
              ]
            },
            {
              "name": "volere",
              "description": "regular",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["volevo", "volevamo"],
                ["volevi", "volevate"],
                ["voleva", "volevano"]
              ]
            },
            {
              "name": "dovere",
              "description": "regular",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["dovevo", "dovevamo"],
                ["dovevi", "dovevate"],
                ["doveva", "dovevano"]
              ]
            },
            {
              "name": "sapere",
              "description": "regular",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["sapevo", "sapevamo"],
                ["sapevi", "sapevate"],
                ["sapeva", "sapevano"]
              ]
            },
            {
              "name": "bere",
              "description": "contracted stem (bev-)",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["bevevo", "bevevamo"],
                ["bevevi", "bevevate"],
                ["beveva", "bevevano"]
              ]
            },
            {
              "name": "tenere",
              "description": "regular",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["tenevo", "tenevamo"],
                ["tenevi", "tenevate"],
                ["teneva", "tenevano"]
              ]
            },
            {
              "name": "piacere",
              "description": "regular",
              "dimmed": true,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["piacevo", "piacevamo"],
                ["piacevi", "piacevate"],
                ["piaceva", "piacevano"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["vendevo", "vendevamo"],
              ["vendevi", "vendevate"],
              ["vendeva", "vendevano"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "contracted stem (dic-)",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["dicevo", "dicevamo"],
                ["dicevi", "dicevate"],
                ["diceva", "dicevano"]
              ]
            },
            {
              "name": "venire",
              "description": "regular",
              "dimmed": true,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["venivo", "venivamo"],
                ["venivi", "venivate"],
                ["veniva", "venivano"]
              ]
            },
            {
              "name": "uscire",
              "description": "regular",
              "dimmed": true,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["uscivo", "uscivamo"],
                ["uscivi", "uscivate"],
                ["usciva", "uscivano"]
              ]
            },
            {
              "name": "morire",
              "description": "regular",
              "dimmed": true,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["morivo", "morivamo"],
                ["morivi", "morivate"],
                ["moriva", "morivano"]
              ]
            },
            {
              "name": "salire",
              "description": "regular",
              "dimmed": true,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["salivo", "salivamo"],
                ["salivi", "salivate"],
                ["saliva", "salivano"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular (no -isc- in imperfect)",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["finivo", "finivamo"],
                ["finivi", "finivate"],
                ["finiva", "finivano"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["dormivo", "dormivamo"],
              ["dormivi", "dormivate"],
              ["dormiva", "dormivano"]
            ]
          }
        }
      ]
    },
    "pluperfect": {
      "label": "Pluperfect (Trapassato prossimo)",
      "icon": "bi-skip-backward",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "imperfect essere + stato",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["ero stato/a", "eravamo stati/e"],
                ["eri stato/a", "eravate stati/e"],
                ["era stato/a", "erano stati/e"]
              ]
            },
            {
              "name": "avere",
              "description": "imperfect avere + avuto",
              "dimmed": true,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["avevo avuto", "avevamo avuto"],
                ["avevi avuto", "avevate avuto"],
                ["aveva avuto", "avevano avuto"]
              ]
            },
            {
              "name": "andare",
              "description": "imperfect essere + andato (uses essere)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["ero andato/a", "eravamo andati/e"],
                ["eri andato/a", "eravate andati/e"],
                ["era andato/a", "erano andati/e"]
              ]
            },
            {
              "name": "fare",
              "description": "imperfect avere + fatto",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["avevo fatto", "avevamo fatto"],
                ["avevi fatto", "avevate fatto"],
                ["aveva fatto", "avevano fatto"]
              ]
            },
            {
              "name": "dare",
              "description": "imperfect avere + dato",
              "dimmed": true,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["avevo dato", "avevamo dato"],
                ["avevi dato", "avevate dato"],
                ["aveva dato", "avevano dato"]
              ]
            },
            {
              "name": "stare",
              "description": "imperfect essere + stato (uses essere)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["ero stato/a", "eravamo stati/e"],
                ["eri stato/a", "eravate stati/e"],
                ["era stato/a", "erano stati/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["avevo parlato", "avevamo parlato"],
              ["avevi parlato", "avevate parlato"],
              ["aveva parlato", "avevano parlato"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "imperfect avere + potuto",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["avevo potuto", "avevamo potuto"],
                ["avevi potuto", "avevate potuto"],
                ["aveva potuto", "avevano potuto"]
              ]
            },
            {
              "name": "volere",
              "description": "imperfect avere + voluto",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["avevo voluto", "avevamo voluto"],
                ["avevi voluto", "avevate voluto"],
                ["aveva voluto", "avevano voluto"]
              ]
            },
            {
              "name": "dovere",
              "description": "imperfect avere + dovuto",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["avevo dovuto", "avevamo dovuto"],
                ["avevi dovuto", "avevate dovuto"],
                ["aveva dovuto", "avevano dovuto"]
              ]
            },
            {
              "name": "sapere",
              "description": "imperfect avere + saputo",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["avevo saputo", "avevamo saputo"],
                ["avevi saputo", "avevate saputo"],
                ["aveva saputo", "avevano saputo"]
              ]
            },
            {
              "name": "bere",
              "description": "imperfect avere + bevuto",
              "dimmed": true,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["avevo bevuto", "avevamo bevuto"],
                ["avevi bevuto", "avevate bevuto"],
                ["aveva bevuto", "avevano bevuto"]
              ]
            },
            {
              "name": "tenere",
              "description": "imperfect avere + tenuto",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["avevo tenuto", "avevamo tenuto"],
                ["avevi tenuto", "avevate tenuto"],
                ["aveva tenuto", "avevano tenuto"]
              ]
            },
            {
              "name": "piacere",
              "description": "imperfect essere + piaciuto (uses essere)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["ero piaciuto/a", "eravamo piaciuti/e"],
                ["eri piaciuto/a", "eravate piaciuti/e"],
                ["era piaciuto/a", "erano piaciuti/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["avevo venduto", "avevamo venduto"],
              ["avevi venduto", "avevate venduto"],
              ["aveva venduto", "avevano venduto"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "imperfect avere + detto",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["avevo detto", "avevamo detto"],
                ["avevi detto", "avevate detto"],
                ["aveva detto", "avevano detto"]
              ]
            },
            {
              "name": "venire",
              "description": "imperfect essere + venuto (uses essere)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["ero venuto/a", "eravamo venuti/e"],
                ["eri venuto/a", "eravate venuti/e"],
                ["era venuto/a", "erano venuti/e"]
              ]
            },
            {
              "name": "uscire",
              "description": "imperfect essere + uscito (uses essere)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["ero uscito/a", "eravamo usciti/e"],
                ["eri uscito/a", "eravate usciti/e"],
                ["era uscito/a", "erano usciti/e"]
              ]
            },
            {
              "name": "morire",
              "description": "imperfect essere + morto (uses essere)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["ero morto/a", "eravamo morti/e"],
                ["eri morto/a", "eravate morti/e"],
                ["era morto/a", "erano morti/e"]
              ]
            },
            {
              "name": "salire",
              "description": "imperfect essere + salito (uses essere)",
              "dimmed": false,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["ero salito/a", "eravamo saliti/e"],
                ["eri salito/a", "eravate saliti/e"],
                ["era salito/a", "erano saliti/e"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular past participle (-ito)",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["avevo finito", "avevamo finito"],
                ["avevi finito", "avevate finito"],
                ["aveva finito", "avevano finito"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["avevo dormito", "avevamo dormito"],
              ["avevi dormito", "avevate dormito"],
              ["aveva dormito", "avevano dormito"]
            ]
          }
        }
      ]
    },
    "past": {
      "label": "Simple Past (Passato remoto)",
      "icon": "bi-clock-history",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["fui", "fummo"],
                ["fosti", "foste"],
                ["fu", "furono"]
              ]
            },
            {
              "name": "avere",
              "description": "irregular (1s, 3s, 3p)",
              "dimmed": false,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["ebbi", "avemmo"],
                ["avesti", "aveste"],
                ["ebbe", "ebbero"]
              ]
            },
            {
              "name": "andare",
              "description": "regular",
              "dimmed": true,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["andai", "andammo"],
                ["andasti", "andaste"],
                ["andò", "andarono"]
              ]
            },
            {
              "name": "fare",
              "description": "irregular stem (fec-)",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["feci", "facemmo"],
                ["facesti", "faceste"],
                ["fece", "fecero"]
              ]
            },
            {
              "name": "dare",
              "description": "irregular (diedi/detti forms)",
              "dimmed": false,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["diedi", "demmo"],
                ["desti", "deste"],
                ["diede", "diedero"]
              ]
            },
            {
              "name": "stare",
              "description": "irregular (stetti forms)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["stetti", "stemmo"],
                ["stesti", "steste"],
                ["stette", "stettero"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["parlai", "parlammo"],
              ["parlasti", "parlaste"],
              ["parlò", "parlarono"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "irregular (potei/potetti)",
              "dimmed": false,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["potei", "potemmo"],
                ["potesti", "poteste"],
                ["poté", "poterono"]
              ]
            },
            {
              "name": "volere",
              "description": "irregular (volli forms)",
              "dimmed": false,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["volli", "volemmo"],
                ["volesti", "voleste"],
                ["volle", "vollero"]
              ]
            },
            {
              "name": "dovere",
              "description": "irregular (dovei/dovetti)",
              "dimmed": false,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["dovei", "dovemmo"],
                ["dovesti", "doveste"],
                ["dové", "doverono"]
              ]
            },
            {
              "name": "sapere",
              "description": "irregular (seppi forms)",
              "dimmed": false,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["seppi", "sapemmo"],
                ["sapesti", "sapeste"],
                ["seppe", "seppero"]
              ]
            },
            {
              "name": "bere",
              "description": "irregular (bevvi forms)",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["bevvi", "bevemmo"],
                ["bevesti", "beveste"],
                ["bevve", "bevvero"]
              ]
            },
            {
              "name": "tenere",
              "description": "irregular (tenni forms)",
              "dimmed": false,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["tenni", "tenemmo"],
                ["tenesti", "teneste"],
                ["tenne", "tennero"]
              ]
            },
            {
              "name": "piacere",
              "description": "irregular (piacqui forms)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["piacqui", "piacemmo"],
                ["piacesti", "piaceste"],
                ["piacque", "piacquero"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["vendei", "vendemmo"],
              ["vendesti", "vendeste"],
              ["vendé", "venderono"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "irregular (dissi forms)",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["dissi", "dicemmo"],
                ["dicesti", "diceste"],
                ["disse", "dissero"]
              ]
            },
            {
              "name": "venire",
              "description": "irregular (venni forms)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["venni", "venimmo"],
                ["venisti", "veniste"],
                ["venne", "vennero"]
              ]
            },
            {
              "name": "uscire",
              "description": "regular",
              "dimmed": true,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["uscii", "uscimmo"],
                ["uscisti", "usciste"],
                ["uscì", "uscirono"]
              ]
            },
            {
              "name": "morire",
              "description": "irregular (morii forms)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["morii", "morimmo"],
                ["moristi", "moriste"],
                ["morì", "morirono"]
              ]
            },
            {
              "name": "salire",
              "description": "regular",
              "dimmed": true,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["salii", "salimmo"],
                ["salisti", "saliste"],
                ["salì", "salirono"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular (no -isc- in passato remoto)",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["finii", "finimmo"],
                ["finisti", "finiste"],
                ["finì", "finirono"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["dormii", "dormimmo"],
              ["dormisti", "dormiste"],
              ["dormì", "dormirono"]
            ]
          }
        }
      ]
    },
    "anterior": {
      "label": "Past Anterior (Trapassato remoto)",
      "icon": "bi-skip-start",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "p. remoto essere + stato",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["fui stato/a", "fummo stati/e"],
                ["fosti stato/a", "foste stati/e"],
                ["fu stato/a", "furono stati/e"]
              ]
            },
            {
              "name": "avere",
              "description": "p. remoto avere + avuto",
              "dimmed": true,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["ebbi avuto", "avemmo avuto"],
                ["avesti avuto", "aveste avuto"],
                ["ebbe avuto", "ebbero avuto"]
              ]
            },
            {
              "name": "andare",
              "description": "p. remoto essere + andato (uses essere)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["fui andato/a", "fummo andati/e"],
                ["fosti andato/a", "foste andati/e"],
                ["fu andato/a", "furono andati/e"]
              ]
            },
            {
              "name": "fare",
              "description": "p. remoto avere + fatto",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["ebbi fatto", "avemmo fatto"],
                ["avesti fatto", "aveste fatto"],
                ["ebbe fatto", "ebbero fatto"]
              ]
            },
            {
              "name": "dare",
              "description": "p. remoto avere + dato",
              "dimmed": true,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["ebbi dato", "avemmo dato"],
                ["avesti dato", "aveste dato"],
                ["ebbe dato", "ebbero dato"]
              ]
            },
            {
              "name": "stare",
              "description": "p. remoto essere + stato (uses essere)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["fui stato/a", "fummo stati/e"],
                ["fosti stato/a", "foste stati/e"],
                ["fu stato/a", "furono stati/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["ebbi parlato", "avemmo parlato"],
              ["avesti parlato", "aveste parlato"],
              ["ebbe parlato", "ebbero parlato"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "p. remoto avere + potuto",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["ebbi potuto", "avemmo potuto"],
                ["avesti potuto", "aveste potuto"],
                ["ebbe potuto", "ebbero potuto"]
              ]
            },
            {
              "name": "volere",
              "description": "p. remoto avere + voluto",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["ebbi voluto", "avemmo voluto"],
                ["avesti voluto", "aveste voluto"],
                ["ebbe voluto", "ebbero voluto"]
              ]
            },
            {
              "name": "dovere",
              "description": "p. remoto avere + dovuto",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["ebbi dovuto", "avemmo dovuto"],
                ["avesti dovuto", "aveste dovuto"],
                ["ebbe dovuto", "ebbero dovuto"]
              ]
            },
            {
              "name": "sapere",
              "description": "p. remoto avere + saputo",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["ebbi saputo", "avemmo saputo"],
                ["avesti saputo", "aveste saputo"],
                ["ebbe saputo", "ebbero saputo"]
              ]
            },
            {
              "name": "bere",
              "description": "p. remoto avere + bevuto",
              "dimmed": true,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["ebbi bevuto", "avemmo bevuto"],
                ["avesti bevuto", "aveste bevuto"],
                ["ebbe bevuto", "ebbero bevuto"]
              ]
            },
            {
              "name": "tenere",
              "description": "p. remoto avere + tenuto",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["ebbi tenuto", "avemmo tenuto"],
                ["avesti tenuto", "aveste tenuto"],
                ["ebbe tenuto", "ebbero tenuto"]
              ]
            },
            {
              "name": "piacere",
              "description": "p. remoto essere + piaciuto (uses essere)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["fui piaciuto/a", "fummo piaciuti/e"],
                ["fosti piaciuto/a", "foste piaciuti/e"],
                ["fu piaciuto/a", "furono piaciuti/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["ebbi venduto", "avemmo venduto"],
              ["avesti venduto", "aveste venduto"],
              ["ebbe venduto", "ebbero venduto"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "p. remoto avere + detto",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["ebbi detto", "avemmo detto"],
                ["avesti detto", "aveste detto"],
                ["ebbe detto", "ebbero detto"]
              ]
            },
            {
              "name": "venire",
              "description": "p. remoto essere + venuto (uses essere)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["fui venuto/a", "fummo venuti/e"],
                ["fosti venuto/a", "foste venuti/e"],
                ["fu venuto/a", "furono venuti/e"]
              ]
            },
            {
              "name": "uscire",
              "description": "p. remoto essere + uscito (uses essere)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["fui uscito/a", "fummo usciti/e"],
                ["fosti uscito/a", "foste usciti/e"],
                ["fu uscito/a", "furono usciti/e"]
              ]
            },
            {
              "name": "morire",
              "description": "p. remoto essere + morto (uses essere)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["fui morto/a", "fummo morti/e"],
                ["fosti morto/a", "foste morti/e"],
                ["fu morto/a", "furono morti/e"]
              ]
            },
            {
              "name": "salire",
              "description": "p. remoto essere + salito (uses essere)",
              "dimmed": false,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["fui salito/a", "fummo saliti/e"],
                ["fosti salito/a", "foste saliti/e"],
                ["fu salito/a", "furono saliti/e"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular compound",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["ebbi finito", "avemmo finito"],
                ["avesti finito", "aveste finito"],
                ["ebbe finito", "ebbero finito"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["ebbi dormito", "avemmo dormito"],
              ["avesti dormito", "aveste dormito"],
              ["ebbe dormito", "ebbero dormito"]
            ]
          }
        }
      ]
    },
    "future": {
      "label": "Future (Futuro semplice)",
      "icon": "bi-arrow-right",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "fully irregular stem (sar-)",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sarò", "saremo"],
                ["sarai", "sarete"],
                ["sarà", "saranno"]
              ]
            },
            {
              "name": "avere",
              "description": "contracted stem (avr-)",
              "dimmed": false,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["avrò", "avremo"],
                ["avrai", "avrete"],
                ["avrà", "avranno"]
              ]
            },
            {
              "name": "andare",
              "description": "contracted stem (andr-)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["andrò", "andremo"],
                ["andrai", "andrete"],
                ["andrà", "andranno"]
              ]
            },
            {
              "name": "fare",
              "description": "contracted stem (far-)",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["farò", "faremo"],
                ["farai", "farete"],
                ["farà", "faranno"]
              ]
            },
            {
              "name": "dare",
              "description": "contracted stem (dar-)",
              "dimmed": false,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["darò", "daremo"],
                ["darai", "darete"],
                ["darà", "daranno"]
              ]
            },
            {
              "name": "stare",
              "description": "contracted stem (star-)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["starò", "staremo"],
                ["starai", "starete"],
                ["starà", "staranno"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["parlerò", "parleremo"],
              ["parlerai", "parlerete"],
              ["parlerà", "parleranno"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "contracted stem (potr-)",
              "dimmed": false,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["potrò", "potremo"],
                ["potrai", "potrete"],
                ["potrà", "potranno"]
              ]
            },
            {
              "name": "volere",
              "description": "contracted stem (vorr-)",
              "dimmed": false,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["vorrò", "vorremo"],
                ["vorrai", "vorrete"],
                ["vorrà", "vorranno"]
              ]
            },
            {
              "name": "dovere",
              "description": "contracted stem (dovr-)",
              "dimmed": false,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["dovrò", "dovremo"],
                ["dovrai", "dovrete"],
                ["dovrà", "dovranno"]
              ]
            },
            {
              "name": "sapere",
              "description": "contracted stem (sapr-)",
              "dimmed": false,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["saprò", "sapremo"],
                ["saprai", "saprete"],
                ["saprà", "sapranno"]
              ]
            },
            {
              "name": "bere",
              "description": "contracted stem (berr-)",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["berrò", "berremo"],
                ["berrai", "berrete"],
                ["berrà", "berranno"]
              ]
            },
            {
              "name": "tenere",
              "description": "contracted stem (terr-)",
              "dimmed": false,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["terrò", "terremo"],
                ["terrai", "terrete"],
                ["terrà", "terranno"]
              ]
            },
            {
              "name": "piacere",
              "description": "contracted stem (piacer-)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["piacerò", "piaceremo"],
                ["piacerai", "piacerete"],
                ["piacerà", "piaceranno"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["venderò", "venderemo"],
              ["venderai", "venderete"],
              ["venderà", "venderanno"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "contracted stem (dir-)",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["dirò", "diremo"],
                ["dirai", "direte"],
                ["dirà", "diranno"]
              ]
            },
            {
              "name": "venire",
              "description": "contracted stem (verr-)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["verrò", "verremo"],
                ["verrai", "verrete"],
                ["verrà", "verranno"]
              ]
            },
            {
              "name": "uscire",
              "description": "regular",
              "dimmed": true,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["uscirò", "usciremo"],
                ["uscirai", "uscirete"],
                ["uscirà", "usciranno"]
              ]
            },
            {
              "name": "morire",
              "description": "contracted stem (morr-)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["morrò", "morremo"],
                ["morrai", "morrete"],
                ["morrà", "morranno"]
              ]
            },
            {
              "name": "salire",
              "description": "regular",
              "dimmed": true,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["salirò", "saliremo"],
                ["salirai", "salirete"],
                ["salirà", "saliranno"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular (no -isc- in future)",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["finirò", "finiremo"],
                ["finirai", "finirete"],
                ["finirà", "finiranno"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["dormirò", "dormiremo"],
              ["dormirai", "dormirete"],
              ["dormirà", "dormiranno"]
            ]
          }
        }
      ]
    },
    "future_perfect": {
      "label": "Future Perfect (Futuro anteriore)",
      "icon": "bi-arrow-bar-right",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "future essere + stato",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sarò stato/a", "saremo stati/e"],
                ["sarai stato/a", "sarete stati/e"],
                ["sarà stato/a", "saranno stati/e"]
              ]
            },
            {
              "name": "avere",
              "description": "future avere + avuto",
              "dimmed": true,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["avrò avuto", "avremo avuto"],
                ["avrai avuto", "avrete avuto"],
                ["avrà avuto", "avranno avuto"]
              ]
            },
            {
              "name": "andare",
              "description": "future essere + andato (uses essere)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["sarò andato/a", "saremo andati/e"],
                ["sarai andato/a", "sarete andati/e"],
                ["sarà andato/a", "saranno andati/e"]
              ]
            },
            {
              "name": "fare",
              "description": "future avere + fatto",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["avrò fatto", "avremo fatto"],
                ["avrai fatto", "avrete fatto"],
                ["avrà fatto", "avranno fatto"]
              ]
            },
            {
              "name": "dare",
              "description": "future avere + dato",
              "dimmed": true,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["avrò dato", "avremo dato"],
                ["avrai dato", "avrete dato"],
                ["avrà dato", "avranno dato"]
              ]
            },
            {
              "name": "stare",
              "description": "future essere + stato (uses essere)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["sarò stato/a", "saremo stati/e"],
                ["sarai stato/a", "sarete stati/e"],
                ["sarà stato/a", "saranno stati/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["avrò parlato", "avremo parlato"],
              ["avrai parlato", "avrete parlato"],
              ["avrà parlato", "avranno parlato"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "future avere + potuto",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["avrò potuto", "avremo potuto"],
                ["avrai potuto", "avrete potuto"],
                ["avrà potuto", "avranno potuto"]
              ]
            },
            {
              "name": "volere",
              "description": "future avere + voluto",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["avrò voluto", "avremo voluto"],
                ["avrai voluto", "avrete voluto"],
                ["avrà voluto", "avranno voluto"]
              ]
            },
            {
              "name": "dovere",
              "description": "future avere + dovuto",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["avrò dovuto", "avremo dovuto"],
                ["avrai dovuto", "avrete dovuto"],
                ["avrà dovuto", "avranno dovuto"]
              ]
            },
            {
              "name": "sapere",
              "description": "future avere + saputo",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["avrò saputo", "avremo saputo"],
                ["avrai saputo", "avrete saputo"],
                ["avrà saputo", "avranno saputo"]
              ]
            },
            {
              "name": "bere",
              "description": "future avere + bevuto",
              "dimmed": true,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["avrò bevuto", "avremo bevuto"],
                ["avrai bevuto", "avrete bevuto"],
                ["avrà bevuto", "avranno bevuto"]
              ]
            },
            {
              "name": "tenere",
              "description": "future avere + tenuto",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["avrò tenuto", "avremo tenuto"],
                ["avrai tenuto", "avrete tenuto"],
                ["avrà tenuto", "avranno tenuto"]
              ]
            },
            {
              "name": "piacere",
              "description": "future essere + piaciuto (uses essere)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["sarò piaciuto/a", "saremo piaciuti/e"],
                ["sarai piaciuto/a", "sarete piaciuti/e"],
                ["sarà piaciuto/a", "saranno piaciuti/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["avrò venduto", "avremo venduto"],
              ["avrai venduto", "avrete venduto"],
              ["avrà venduto", "avranno venduto"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "future avere + detto",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["avrò detto", "avremo detto"],
                ["avrai detto", "avrete detto"],
                ["avrà detto", "avranno detto"]
              ]
            },
            {
              "name": "venire",
              "description": "future essere + venuto (uses essere)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["sarò venuto/a", "saremo venuti/e"],
                ["sarai venuto/a", "sarete venuti/e"],
                ["sarà venuto/a", "saranno venuti/e"]
              ]
            },
            {
              "name": "uscire",
              "description": "future essere + uscito (uses essere)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["sarò uscito/a", "saremo usciti/e"],
                ["sarai uscito/a", "sarete usciti/e"],
                ["sarà uscito/a", "saranno usciti/e"]
              ]
            },
            {
              "name": "morire",
              "description": "future essere + morto (uses essere)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["sarò morto/a", "saremo morti/e"],
                ["sarai morto/a", "sarete morti/e"],
                ["sarà morto/a", "saranno morti/e"]
              ]
            },
            {
              "name": "salire",
              "description": "future essere + salito (uses essere)",
              "dimmed": false,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["sarò salito/a", "saremo saliti/e"],
                ["sarai salito/a", "sarete saliti/e"],
                ["sarà salito/a", "saranno saliti/e"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular compound",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["avrò finito", "avremo finito"],
                ["avrai finito", "avrete finito"],
                ["avrà finito", "avranno finito"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["avrò dormito", "avremo dormito"],
              ["avrai dormito", "avrete dormito"],
              ["avrà dormito", "avranno dormito"]
            ]
          }
        }
      ]
    },
    "conditional": {
      "label": "Present (Condizionale presente)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "irregular stem (sar-)",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sarei", "saremmo"],
                ["saresti", "sareste"],
                ["sarebbe", "sarebbero"]
              ]
            },
            {
              "name": "avere",
              "description": "contracted stem (avr-)",
              "dimmed": false,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["avrei", "avremmo"],
                ["avresti", "avreste"],
                ["avrebbe", "avrebbero"]
              ]
            },
            {
              "name": "andare",
              "description": "contracted stem (andr-)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["andrei", "andremmo"],
                ["andresti", "andreste"],
                ["andrebbe", "andrebbero"]
              ]
            },
            {
              "name": "fare",
              "description": "contracted stem (far-)",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["farei", "faremmo"],
                ["faresti", "fareste"],
                ["farebbe", "farebbero"]
              ]
            },
            {
              "name": "dare",
              "description": "contracted stem (dar-)",
              "dimmed": false,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["darei", "daremmo"],
                ["daresti", "dareste"],
                ["darebbe", "darebbero"]
              ]
            },
            {
              "name": "stare",
              "description": "contracted stem (star-)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["starei", "staremmo"],
                ["staresti", "stareste"],
                ["starebbe", "starebbero"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["parlerei", "parleremmo"],
              ["parleresti", "parlereste"],
              ["parlerebbe", "parlerebbero"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "contracted stem (potr-)",
              "dimmed": false,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["potrei", "potremmo"],
                ["potresti", "potreste"],
                ["potrebbe", "potrebbero"]
              ]
            },
            {
              "name": "volere",
              "description": "contracted stem (vorr-)",
              "dimmed": false,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["vorrei", "vorremmo"],
                ["vorresti", "vorreste"],
                ["vorrebbe", "vorrebbero"]
              ]
            },
            {
              "name": "dovere",
              "description": "contracted stem (dovr-)",
              "dimmed": false,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["dovrei", "dovremmo"],
                ["dovresti", "dovreste"],
                ["dovrebbe", "dovrebbero"]
              ]
            },
            {
              "name": "sapere",
              "description": "contracted stem (sapr-)",
              "dimmed": false,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["saprei", "sapremmo"],
                ["sapresti", "sapreste"],
                ["saprebbe", "saprebbero"]
              ]
            },
            {
              "name": "bere",
              "description": "contracted stem (berr-)",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["berrei", "berremmo"],
                ["berresti", "berreste"],
                ["berrebbe", "berrebbero"]
              ]
            },
            {
              "name": "tenere",
              "description": "contracted stem (terr-)",
              "dimmed": false,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["terrei", "terremmo"],
                ["terresti", "terreste"],
                ["terrebbe", "terrebbero"]
              ]
            },
            {
              "name": "piacere",
              "description": "regular stem (piacer-)",
              "dimmed": true,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["piacerei", "piaceremmo"],
                ["piaceresti", "piacereste"],
                ["piacerebbe", "piacerebbero"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["venderei", "venderemmo"],
              ["venderesti", "vendereste"],
              ["venderebbe", "venderebbero"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "contracted stem (dir-)",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["direi", "diremmo"],
                ["diresti", "direste"],
                ["direbbe", "direbbero"]
              ]
            },
            {
              "name": "venire",
              "description": "contracted stem (verr-)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["verrei", "verremmo"],
                ["verresti", "verreste"],
                ["verrebbe", "verrebbero"]
              ]
            },
            {
              "name": "uscire",
              "description": "regular",
              "dimmed": true,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["uscirei", "usciremmo"],
                ["usciresti", "uscireste"],
                ["uscirebbe", "uscirebbero"]
              ]
            },
            {
              "name": "morire",
              "description": "contracted stem (morr-)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["morrei", "morremmo"],
                ["morresti", "morreste"],
                ["morrebbe", "morrebbero"]
              ]
            },
            {
              "name": "salire",
              "description": "regular",
              "dimmed": true,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["salirei", "saliremmo"],
                ["saliresti", "salireste"],
                ["salirebbe", "salirebbero"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular (no -isc- in conditional)",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["finirei", "finiremmo"],
                ["finiresti", "finireste"],
                ["finirebbe", "finirebbero"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["dormirei", "dormiremmo"],
              ["dormiresti", "dormireste"],
              ["dormirebbe", "dormirebbero"]
            ]
          }
        }
      ]
    },
    "conditional_perfect": {
      "label": "Past (Condizionale passato)",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "conditional essere + stato",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sarei stato/a", "saremmo stati/e"],
                ["saresti stato/a", "sareste stati/e"],
                ["sarebbe stato/a", "sarebbero stati/e"]
              ]
            },
            {
              "name": "avere",
              "description": "conditional avere + avuto",
              "dimmed": true,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["avrei avuto", "avremmo avuto"],
                ["avresti avuto", "avreste avuto"],
                ["avrebbe avuto", "avrebbero avuto"]
              ]
            },
            {
              "name": "andare",
              "description": "conditional essere + andato (uses essere)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["sarei andato/a", "saremmo andati/e"],
                ["saresti andato/a", "sareste andati/e"],
                ["sarebbe andato/a", "sarebbero andati/e"]
              ]
            },
            {
              "name": "fare",
              "description": "conditional avere + fatto",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["avrei fatto", "avremmo fatto"],
                ["avresti fatto", "avreste fatto"],
                ["avrebbe fatto", "avrebbero fatto"]
              ]
            },
            {
              "name": "dare",
              "description": "conditional avere + dato",
              "dimmed": true,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["avrei dato", "avremmo dato"],
                ["avresti dato", "avreste dato"],
                ["avrebbe dato", "avrebbero dato"]
              ]
            },
            {
              "name": "stare",
              "description": "conditional essere + stato (uses essere)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["sarei stato/a", "saremmo stati/e"],
                ["saresti stato/a", "sareste stati/e"],
                ["sarebbe stato/a", "sarebbero stati/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["avrei parlato", "avremmo parlato"],
              ["avresti parlato", "avreste parlato"],
              ["avrebbe parlato", "avrebbero parlato"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "conditional avere + potuto",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["avrei potuto", "avremmo potuto"],
                ["avresti potuto", "avreste potuto"],
                ["avrebbe potuto", "avrebbero potuto"]
              ]
            },
            {
              "name": "volere",
              "description": "conditional avere + voluto",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["avrei voluto", "avremmo voluto"],
                ["avresti voluto", "avreste voluto"],
                ["avrebbe voluto", "avrebbero voluto"]
              ]
            },
            {
              "name": "dovere",
              "description": "conditional avere + dovuto",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["avrei dovuto", "avremmo dovuto"],
                ["avresti dovuto", "avreste dovuto"],
                ["avrebbe dovuto", "avrebbero dovuto"]
              ]
            },
            {
              "name": "sapere",
              "description": "conditional avere + saputo",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["avrei saputo", "avremmo saputo"],
                ["avresti saputo", "avreste saputo"],
                ["avrebbe saputo", "avrebbero saputo"]
              ]
            },
            {
              "name": "bere",
              "description": "conditional avere + bevuto",
              "dimmed": true,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["avrei bevuto", "avremmo bevuto"],
                ["avresti bevuto", "avreste bevuto"],
                ["avrebbe bevuto", "avrebbero bevuto"]
              ]
            },
            {
              "name": "tenere",
              "description": "conditional avere + tenuto",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["avrei tenuto", "avremmo tenuto"],
                ["avresti tenuto", "avreste tenuto"],
                ["avrebbe tenuto", "avrebbero tenuto"]
              ]
            },
            {
              "name": "piacere",
              "description": "conditional essere + piaciuto (uses essere)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["sarei piaciuto/a", "saremmo piaciuti/e"],
                ["saresti piaciuto/a", "sareste piaciuti/e"],
                ["sarebbe piaciuto/a", "sarebbero piaciuti/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["avrei venduto", "avremmo venduto"],
              ["avresti venduto", "avreste venduto"],
              ["avrebbe venduto", "avrebbero venduto"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "conditional avere + detto",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["avrei detto", "avremmo detto"],
                ["avresti detto", "avreste detto"],
                ["avrebbe detto", "avrebbero detto"]
              ]
            },
            {
              "name": "venire",
              "description": "conditional essere + venuto (uses essere)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["sarei venuto/a", "saremmo venuti/e"],
                ["saresti venuto/a", "sareste venuti/e"],
                ["sarebbe venuto/a", "sarebbero venuti/e"]
              ]
            },
            {
              "name": "uscire",
              "description": "conditional essere + uscito (uses essere)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["sarei uscito/a", "saremmo usciti/e"],
                ["saresti uscito/a", "sareste usciti/e"],
                ["sarebbe uscito/a", "sarebbero usciti/e"]
              ]
            },
            {
              "name": "morire",
              "description": "conditional essere + morto (uses essere)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["sarei morto/a", "saremmo morti/e"],
                ["saresti morto/a", "sareste morti/e"],
                ["sarebbe morto/a", "sarebbero morti/e"]
              ]
            },
            {
              "name": "salire",
              "description": "conditional essere + salito (uses essere)",
              "dimmed": false,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["sarei salito/a", "saremmo saliti/e"],
                ["saresti salito/a", "sareste saliti/e"],
                ["sarebbe salito/a", "sarebbero saliti/e"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular compound",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["avrei finito", "avremmo finito"],
                ["avresti finito", "avreste finito"],
                ["avrebbe finito", "avrebbero finito"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["avrei dormito", "avremmo dormito"],
              ["avresti dormito", "avreste dormito"],
              ["avrebbe dormito", "avrebbero dormito"]
            ]
          }
        }
      ]
    },
    "subj_present": {
      "label": "Present (Congiuntivo presente)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sia", "siamo"],
                ["sia", "siate"],
                ["sia", "siano"]
              ]
            },
            {
              "name": "avere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["abbia", "abbiamo"],
                ["abbia", "abbiate"],
                ["abbia", "abbiano"]
              ]
            },
            {
              "name": "andare",
              "description": "stem change (and- → vad-)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["vada", "andiamo"],
                ["vada", "andiate"],
                ["vada", "vadano"]
              ]
            },
            {
              "name": "fare",
              "description": "contracted stem (facc-)",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["faccia", "facciamo"],
                ["faccia", "facciate"],
                ["faccia", "facciano"]
              ]
            },
            {
              "name": "dare",
              "description": "irregular",
              "dimmed": false,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["dia", "diamo"],
                ["dia", "diate"],
                ["dia", "diano"]
              ]
            },
            {
              "name": "stare",
              "description": "irregular",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["stia", "stiamo"],
                ["stia", "stiate"],
                ["stia", "stiano"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["parli", "parliamo"],
              ["parli", "parliate"],
              ["parli", "parlino"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "stem change (pot- → poss-)",
              "dimmed": false,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["possa", "possiamo"],
                ["possa", "possiate"],
                ["possa", "possano"]
              ]
            },
            {
              "name": "volere",
              "description": "stem change (vol- → vogl-)",
              "dimmed": false,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["voglia", "vogliamo"],
                ["voglia", "vogliate"],
                ["voglia", "vogliano"]
              ]
            },
            {
              "name": "dovere",
              "description": "stem change (dov- → debb-)",
              "dimmed": false,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["debba", "dobbiamo"],
                ["debba", "dobbiate"],
                ["debba", "debbano"]
              ]
            },
            {
              "name": "sapere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["sappia", "sappiamo"],
                ["sappia", "sappiate"],
                ["sappia", "sappiano"]
              ]
            },
            {
              "name": "bere",
              "description": "contracted stem (bev-)",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["beva", "beviamo"],
                ["beva", "beviate"],
                ["beva", "bevano"]
              ]
            },
            {
              "name": "tenere",
              "description": "stem change (ten- → teng-)",
              "dimmed": false,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["tenga", "teniamo"],
                ["tenga", "teniate"],
                ["tenga", "tengano"]
              ]
            },
            {
              "name": "piacere",
              "description": "stem change (piac- → piacc-)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["piaccia", "piacciamo"],
                ["piaccia", "piacciate"],
                ["piaccia", "piacciano"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["venda", "vendiamo"],
              ["venda", "vendiate"],
              ["venda", "vendano"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "finire (-isc-)",
              "description": "-isc- insertion in singular and 3rd plural",
              "dimmed": false,
              "verbs": "finire, capire, preferire, pulire, costruire",
              "example": "finire (to finish)",
              "conjugations": [
                ["finisca", "finiamo"],
                ["finisca", "finiate"],
                ["finisca", "finiscano"]
              ]
            },
            {
              "name": "dire",
              "description": "contracted stem (dic-)",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["dica", "diciamo"],
                ["dica", "diciate"],
                ["dica", "dicano"]
              ]
            },
            {
              "name": "venire",
              "description": "stem change (ven- → veng-)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["venga", "veniamo"],
                ["venga", "veniate"],
                ["venga", "vengano"]
              ]
            },
            {
              "name": "uscire",
              "description": "stem change (usc- → esc-)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["esca", "usciamo"],
                ["esca", "usciate"],
                ["esca", "escano"]
              ]
            },
            {
              "name": "morire",
              "description": "stem change (mor- → muoi-)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["muoia", "moriamo"],
                ["muoia", "moriate"],
                ["muoia", "muoiano"]
              ]
            },
            {
              "name": "salire",
              "description": "stem change (sal- → salg-)",
              "dimmed": false,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["salga", "saliamo"],
                ["salga", "saliate"],
                ["salga", "salgano"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["dorma", "dormiamo"],
              ["dorma", "dormiate"],
              ["dorma", "dormano"]
            ]
          }
        }
      ]
    },
    "subj_past": {
      "label": "Past (Congiuntivo passato)",
      "icon": "bi-check2",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "subj. essere + stato",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sia stato/a", "siamo stati/e"],
                ["sia stato/a", "siate stati/e"],
                ["sia stato/a", "siano stati/e"]
              ]
            },
            {
              "name": "avere",
              "description": "subj. avere + avuto",
              "dimmed": true,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["abbia avuto", "abbiamo avuto"],
                ["abbia avuto", "abbiate avuto"],
                ["abbia avuto", "abbiano avuto"]
              ]
            },
            {
              "name": "andare",
              "description": "subj. essere + andato (uses essere)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["sia andato/a", "siamo andati/e"],
                ["sia andato/a", "siate andati/e"],
                ["sia andato/a", "siano andati/e"]
              ]
            },
            {
              "name": "fare",
              "description": "subj. avere + fatto",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["abbia fatto", "abbiamo fatto"],
                ["abbia fatto", "abbiate fatto"],
                ["abbia fatto", "abbiano fatto"]
              ]
            },
            {
              "name": "dare",
              "description": "subj. avere + dato",
              "dimmed": true,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["abbia dato", "abbiamo dato"],
                ["abbia dato", "abbiate dato"],
                ["abbia dato", "abbiano dato"]
              ]
            },
            {
              "name": "stare",
              "description": "subj. essere + stato (uses essere)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["sia stato/a", "siamo stati/e"],
                ["sia stato/a", "siate stati/e"],
                ["sia stato/a", "siano stati/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["abbia parlato", "abbiamo parlato"],
              ["abbia parlato", "abbiate parlato"],
              ["abbia parlato", "abbiano parlato"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "subj. avere + potuto",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["abbia potuto", "abbiamo potuto"],
                ["abbia potuto", "abbiate potuto"],
                ["abbia potuto", "abbiano potuto"]
              ]
            },
            {
              "name": "volere",
              "description": "subj. avere + voluto",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["abbia voluto", "abbiamo voluto"],
                ["abbia voluto", "abbiate voluto"],
                ["abbia voluto", "abbiano voluto"]
              ]
            },
            {
              "name": "dovere",
              "description": "subj. avere + dovuto",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["abbia dovuto", "abbiamo dovuto"],
                ["abbia dovuto", "abbiate dovuto"],
                ["abbia dovuto", "abbiano dovuto"]
              ]
            },
            {
              "name": "sapere",
              "description": "subj. avere + saputo",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["abbia saputo", "abbiamo saputo"],
                ["abbia saputo", "abbiate saputo"],
                ["abbia saputo", "abbiano saputo"]
              ]
            },
            {
              "name": "bere",
              "description": "subj. avere + bevuto",
              "dimmed": true,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["abbia bevuto", "abbiamo bevuto"],
                ["abbia bevuto", "abbiate bevuto"],
                ["abbia bevuto", "abbiano bevuto"]
              ]
            },
            {
              "name": "tenere",
              "description": "subj. avere + tenuto",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["abbia tenuto", "abbiamo tenuto"],
                ["abbia tenuto", "abbiate tenuto"],
                ["abbia tenuto", "abbiano tenuto"]
              ]
            },
            {
              "name": "piacere",
              "description": "subj. essere + piaciuto (uses essere)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["sia piaciuto/a", "siamo piaciuti/e"],
                ["sia piaciuto/a", "siate piaciuti/e"],
                ["sia piaciuto/a", "siano piaciuti/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["abbia venduto", "abbiamo venduto"],
              ["abbia venduto", "abbiate venduto"],
              ["abbia venduto", "abbiano venduto"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "subj. avere + detto",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["abbia detto", "abbiamo detto"],
                ["abbia detto", "abbiate detto"],
                ["abbia detto", "abbiano detto"]
              ]
            },
            {
              "name": "venire",
              "description": "subj. essere + venuto (uses essere)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["sia venuto/a", "siamo venuti/e"],
                ["sia venuto/a", "siate venuti/e"],
                ["sia venuto/a", "siano venuti/e"]
              ]
            },
            {
              "name": "uscire",
              "description": "subj. essere + uscito (uses essere)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["sia uscito/a", "siamo usciti/e"],
                ["sia uscito/a", "siate usciti/e"],
                ["sia uscito/a", "siano usciti/e"]
              ]
            },
            {
              "name": "morire",
              "description": "subj. essere + morto (uses essere)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["sia morto/a", "siamo morti/e"],
                ["sia morto/a", "siate morti/e"],
                ["sia morto/a", "siano morti/e"]
              ]
            },
            {
              "name": "salire",
              "description": "subj. essere + salito (uses essere)",
              "dimmed": false,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["sia salito/a", "siamo saliti/e"],
                ["sia salito/a", "siate saliti/e"],
                ["sia salito/a", "siano saliti/e"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular compound",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["abbia finito", "abbiamo finito"],
                ["abbia finito", "abbiate finito"],
                ["abbia finito", "abbiano finito"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["abbia dormito", "abbiamo dormito"],
              ["abbia dormito", "abbiate dormito"],
              ["abbia dormito", "abbiano dormito"]
            ]
          }
        }
      ]
    },
    "subj_imperfect": {
      "label": "Imperfect (Congiuntivo imperfetto)",
      "icon": "bi-hourglass-split",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["fossi", "fossimo"],
                ["fossi", "foste"],
                ["fosse", "fossero"]
              ]
            },
            {
              "name": "avere",
              "description": "regular",
              "dimmed": true,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["avessi", "avessimo"],
                ["avessi", "aveste"],
                ["avesse", "avessero"]
              ]
            },
            {
              "name": "andare",
              "description": "regular",
              "dimmed": true,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["andassi", "andassimo"],
                ["andassi", "andaste"],
                ["andasse", "andassero"]
              ]
            },
            {
              "name": "fare",
              "description": "contracted stem (fac-)",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["facessi", "facessimo"],
                ["facessi", "faceste"],
                ["facesse", "facessero"]
              ]
            },
            {
              "name": "dare",
              "description": "irregular (dessi forms)",
              "dimmed": false,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["dessi", "dessimo"],
                ["dessi", "deste"],
                ["desse", "dessero"]
              ]
            },
            {
              "name": "stare",
              "description": "irregular (stessi forms)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["stessi", "stessimo"],
                ["stessi", "steste"],
                ["stesse", "stessero"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["parlassi", "parlassimo"],
              ["parlassi", "parlaste"],
              ["parlasse", "parlassero"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "regular",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["potessi", "potessimo"],
                ["potessi", "poteste"],
                ["potesse", "potessero"]
              ]
            },
            {
              "name": "volere",
              "description": "regular",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["volessi", "volessimo"],
                ["volessi", "voleste"],
                ["volesse", "volessero"]
              ]
            },
            {
              "name": "dovere",
              "description": "regular",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["dovessi", "dovessimo"],
                ["dovessi", "doveste"],
                ["dovesse", "dovessero"]
              ]
            },
            {
              "name": "sapere",
              "description": "regular",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["sapessi", "sapessimo"],
                ["sapessi", "sapeste"],
                ["sapesse", "sapessero"]
              ]
            },
            {
              "name": "bere",
              "description": "contracted stem (bev-)",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["bevessi", "bevessimo"],
                ["bevessi", "beveste"],
                ["bevesse", "bevessero"]
              ]
            },
            {
              "name": "tenere",
              "description": "regular",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["tenessi", "tenessimo"],
                ["tenessi", "teneste"],
                ["tenesse", "tenessero"]
              ]
            },
            {
              "name": "piacere",
              "description": "regular",
              "dimmed": true,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["piacessi", "piacessimo"],
                ["piacessi", "piaceste"],
                ["piacesse", "piacessero"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["vendessi", "vendessimo"],
              ["vendessi", "vendeste"],
              ["vendesse", "vendessero"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "contracted stem (dic-)",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["dicessi", "dicessimo"],
                ["dicessi", "diceste"],
                ["dicesse", "dicessero"]
              ]
            },
            {
              "name": "venire",
              "description": "regular",
              "dimmed": true,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["venissi", "venissimo"],
                ["venissi", "veniste"],
                ["venisse", "venissero"]
              ]
            },
            {
              "name": "uscire",
              "description": "regular",
              "dimmed": true,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["uscissi", "uscissimo"],
                ["uscissi", "usciste"],
                ["uscisse", "uscissero"]
              ]
            },
            {
              "name": "morire",
              "description": "regular",
              "dimmed": true,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["morissi", "morissimo"],
                ["morissi", "moriste"],
                ["morisse", "morissero"]
              ]
            },
            {
              "name": "salire",
              "description": "regular",
              "dimmed": true,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["salissi", "salissimo"],
                ["salissi", "saliste"],
                ["salisse", "salissero"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular (no -isc- in imperfect subjunctive)",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["finissi", "finissimo"],
                ["finissi", "finiste"],
                ["finisse", "finissero"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["dormissi", "dormissimo"],
              ["dormissi", "dormiste"],
              ["dormisse", "dormissero"]
            ]
          }
        }
      ]
    },
    "subj_pluperfect": {
      "label": "Pluperfect (Congiuntivo trapassato)",
      "icon": "bi-skip-backward",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "subj. imp. essere + stato",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["fossi stato/a", "fossimo stati/e"],
                ["fossi stato/a", "foste stati/e"],
                ["fosse stato/a", "fossero stati/e"]
              ]
            },
            {
              "name": "avere",
              "description": "subj. imp. avere + avuto",
              "dimmed": true,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["avessi avuto", "avessimo avuto"],
                ["avessi avuto", "aveste avuto"],
                ["avesse avuto", "avessero avuto"]
              ]
            },
            {
              "name": "andare",
              "description": "subj. imp. essere + andato (uses essere)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["fossi andato/a", "fossimo andati/e"],
                ["fossi andato/a", "foste andati/e"],
                ["fosse andato/a", "fossero andati/e"]
              ]
            },
            {
              "name": "fare",
              "description": "subj. imp. avere + fatto",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["avessi fatto", "avessimo fatto"],
                ["avessi fatto", "aveste fatto"],
                ["avesse fatto", "avessero fatto"]
              ]
            },
            {
              "name": "dare",
              "description": "subj. imp. avere + dato",
              "dimmed": true,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["avessi dato", "avessimo dato"],
                ["avessi dato", "aveste dato"],
                ["avesse dato", "avessero dato"]
              ]
            },
            {
              "name": "stare",
              "description": "subj. imp. essere + stato (uses essere)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["fossi stato/a", "fossimo stati/e"],
                ["fossi stato/a", "foste stati/e"],
                ["fosse stato/a", "fossero stati/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["avessi parlato", "avessimo parlato"],
              ["avessi parlato", "aveste parlato"],
              ["avesse parlato", "avessero parlato"]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "potere",
              "description": "subj. imp. avere + potuto",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["avessi potuto", "avessimo potuto"],
                ["avessi potuto", "aveste potuto"],
                ["avesse potuto", "avessero potuto"]
              ]
            },
            {
              "name": "volere",
              "description": "subj. imp. avere + voluto",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["avessi voluto", "avessimo voluto"],
                ["avessi voluto", "aveste voluto"],
                ["avesse voluto", "avessero voluto"]
              ]
            },
            {
              "name": "dovere",
              "description": "subj. imp. avere + dovuto",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["avessi dovuto", "avessimo dovuto"],
                ["avessi dovuto", "aveste dovuto"],
                ["avesse dovuto", "avessero dovuto"]
              ]
            },
            {
              "name": "sapere",
              "description": "subj. imp. avere + saputo",
              "dimmed": true,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["avessi saputo", "avessimo saputo"],
                ["avessi saputo", "aveste saputo"],
                ["avesse saputo", "avessero saputo"]
              ]
            },
            {
              "name": "bere",
              "description": "subj. imp. avere + bevuto",
              "dimmed": true,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["avessi bevuto", "avessimo bevuto"],
                ["avessi bevuto", "aveste bevuto"],
                ["avesse bevuto", "avessero bevuto"]
              ]
            },
            {
              "name": "tenere",
              "description": "subj. imp. avere + tenuto",
              "dimmed": true,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["avessi tenuto", "avessimo tenuto"],
                ["avessi tenuto", "aveste tenuto"],
                ["avesse tenuto", "avessero tenuto"]
              ]
            },
            {
              "name": "piacere",
              "description": "subj. imp. essere + piaciuto (uses essere)",
              "dimmed": false,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["fossi piaciuto/a", "fossimo piaciuti/e"],
                ["fossi piaciuto/a", "foste piaciuti/e"],
                ["fosse piaciuto/a", "fossero piaciuti/e"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["avessi venduto", "avessimo venduto"],
              ["avessi venduto", "aveste venduto"],
              ["avesse venduto", "avessero venduto"]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "dire",
              "description": "subj. imp. avere + detto",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["avessi detto", "avessimo detto"],
                ["avessi detto", "aveste detto"],
                ["avesse detto", "avessero detto"]
              ]
            },
            {
              "name": "venire",
              "description": "subj. imp. essere + venuto (uses essere)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["fossi venuto/a", "fossimo venuti/e"],
                ["fossi venuto/a", "foste venuti/e"],
                ["fosse venuto/a", "fossero venuti/e"]
              ]
            },
            {
              "name": "uscire",
              "description": "subj. imp. essere + uscito (uses essere)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["fossi uscito/a", "fossimo usciti/e"],
                ["fossi uscito/a", "foste usciti/e"],
                ["fosse uscito/a", "fossero usciti/e"]
              ]
            },
            {
              "name": "morire",
              "description": "subj. imp. essere + morto (uses essere)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["fossi morto/a", "fossimo morti/e"],
                ["fossi morto/a", "foste morti/e"],
                ["fosse morto/a", "fossero morti/e"]
              ]
            },
            {
              "name": "salire",
              "description": "subj. imp. essere + salito (uses essere)",
              "dimmed": false,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["fossi salito/a", "fossimo saliti/e"],
                ["fossi salito/a", "foste saliti/e"],
                ["fosse salito/a", "fossero saliti/e"]
              ]
            },
            {
              "name": "finire (-isc-)",
              "description": "regular compound",
              "dimmed": true,
              "verbs": "finire, capire, preferire",
              "example": "finire (to finish)",
              "conjugations": [
                ["avessi finito", "avessimo finito"],
                ["avessi finito", "aveste finito"],
                ["avesse finito", "avessero finito"]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["avessi dormito", "avessimo dormito"],
              ["avessi dormito", "aveste dormito"],
              ["avesse dormito", "avessero dormito"]
            ]
          }
        }
      ]
    },
    "imp_present": {
      "label": "Present (Imperativo presente)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "essere",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "essere",
              "example": "essere (to be)",
              "conjugations": [
                ["sii", "siamo"],
                ["", "siate"],
                ["", ""]
              ]
            },
            {
              "name": "avere",
              "description": "irregular",
              "dimmed": false,
              "verbs": "avere",
              "example": "avere (to have)",
              "conjugations": [
                ["abbi", "abbiamo"],
                ["", "abbiate"],
                ["", ""]
              ]
            },
            {
              "name": "andare",
              "description": "irregular (va'/vai)",
              "dimmed": false,
              "verbs": "andare",
              "example": "andare (to go)",
              "conjugations": [
                ["va'/vai", "andiamo"],
                ["", "andate"],
                ["", ""]
              ]
            },
            {
              "name": "fare",
              "description": "irregular (fa'/fai)",
              "dimmed": false,
              "verbs": "fare",
              "example": "fare (to do/make)",
              "conjugations": [
                ["fa'/fai", "facciamo"],
                ["", "fate"],
                ["", ""]
              ]
            },
            {
              "name": "dare",
              "description": "irregular (da'/dai)",
              "dimmed": false,
              "verbs": "dare",
              "example": "dare (to give)",
              "conjugations": [
                ["da'/dai", "diamo"],
                ["", "date"],
                ["", ""]
              ]
            },
            {
              "name": "stare",
              "description": "irregular (sta'/stai)",
              "dimmed": false,
              "verbs": "stare",
              "example": "stare (to stay)",
              "conjugations": [
                ["sta'/stai", "stiamo"],
                ["", "state"],
                ["", ""]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["parla", "parliamo"],
              ["", "parlate"],
              ["", ""]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "sapere",
              "description": "irregular",
              "dimmed": false,
              "verbs": "sapere",
              "example": "sapere (to know)",
              "conjugations": [
                ["sappi", "sappiamo"],
                ["", "sappiate"],
                ["", ""]
              ]
            },
            {
              "name": "bere",
              "description": "contracted stem (bev-)",
              "dimmed": false,
              "verbs": "bere",
              "example": "bere (to drink)",
              "conjugations": [
                ["bevi", "beviamo"],
                ["", "bevete"],
                ["", ""]
              ]
            },
            {
              "name": "tenere",
              "description": "stem change (ten- → tien-)",
              "dimmed": false,
              "verbs": "tenere",
              "example": "tenere (to hold)",
              "conjugations": [
                ["tieni", "teniamo"],
                ["", "tenete"],
                ["", ""]
              ]
            },
            {
              "name": "potere",
              "description": "no imperative (modal verb)",
              "dimmed": true,
              "verbs": "potere",
              "example": "potere (to be able)",
              "conjugations": [
                ["—", "—"],
                ["", "—"],
                ["", ""]
              ]
            },
            {
              "name": "volere",
              "description": "rare/formal only (vogli)",
              "dimmed": true,
              "verbs": "volere",
              "example": "volere (to want)",
              "conjugations": [
                ["vogli", "vogliamo"],
                ["", "vogliate"],
                ["", ""]
              ]
            },
            {
              "name": "dovere",
              "description": "no imperative (modal verb)",
              "dimmed": true,
              "verbs": "dovere",
              "example": "dovere (to have to)",
              "conjugations": [
                ["—", "—"],
                ["", "—"],
                ["", ""]
              ]
            },
            {
              "name": "piacere",
              "description": "no imperative (impersonal use)",
              "dimmed": true,
              "verbs": "piacere",
              "example": "piacere (to like/please)",
              "conjugations": [
                ["—", "—"],
                ["", "—"],
                ["", ""]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["vendi", "vendiamo"],
              ["", "vendete"],
              ["", ""]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "finire (-isc-)",
              "description": "-isc- insertion in tu form",
              "dimmed": false,
              "verbs": "finire, capire, preferire, pulire",
              "example": "finire (to finish)",
              "conjugations": [
                ["finisci", "finiamo"],
                ["", "finite"],
                ["", ""]
              ]
            },
            {
              "name": "dire",
              "description": "irregular (di')",
              "dimmed": false,
              "verbs": "dire",
              "example": "dire (to say)",
              "conjugations": [
                ["di'", "diciamo"],
                ["", "dite"],
                ["", ""]
              ]
            },
            {
              "name": "venire",
              "description": "stem change (ven- → vien-)",
              "dimmed": false,
              "verbs": "venire",
              "example": "venire (to come)",
              "conjugations": [
                ["vieni", "veniamo"],
                ["", "venite"],
                ["", ""]
              ]
            },
            {
              "name": "uscire",
              "description": "stem change (usc- → esc-)",
              "dimmed": false,
              "verbs": "uscire",
              "example": "uscire (to go out)",
              "conjugations": [
                ["esci", "usciamo"],
                ["", "uscite"],
                ["", ""]
              ]
            },
            {
              "name": "morire",
              "description": "stem change (mor- → muor-)",
              "dimmed": false,
              "verbs": "morire",
              "example": "morire (to die)",
              "conjugations": [
                ["muori", "moriamo"],
                ["", "morite"],
                ["", ""]
              ]
            },
            {
              "name": "salire",
              "description": "regular",
              "dimmed": true,
              "verbs": "salire",
              "example": "salire (to climb)",
              "conjugations": [
                ["sali", "saliamo"],
                ["", "salite"],
                ["", ""]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["dormi", "dormiamo"],
              ["", "dormite"],
              ["", ""]
            ]
          }
        }
      ]
    },
    "imp_negative": {
      "label": "Negative (Imperativo negativo)",
      "icon": "bi-x-circle",
      "columns": [
        {
          "label": "-are",
          "patterns": [
            {
              "name": "all -are verbs",
              "description": "non + infinitive (tu), non + present subj. (Lei/noi/voi)",
              "dimmed": true,
              "verbs": "all verbs",
              "example": "parlare (to speak)",
              "conjugations": [
                ["non parlare", "non parliamo"],
                ["", "non parlate"],
                ["", ""]
              ]
            }
          ],
          "regular": {
            "name": "regular -are",
            "example": "parlare (to speak)",
            "conjugations": [
              ["non parlare", "non parliamo"],
              ["", "non parlate"],
              ["", ""]
            ]
          }
        },
        {
          "label": "-ere",
          "patterns": [
            {
              "name": "all -ere verbs",
              "description": "non + infinitive (tu), non + present subj. (Lei/noi/voi)",
              "dimmed": true,
              "verbs": "all verbs",
              "example": "vendere (to sell)",
              "conjugations": [
                ["non vendere", "non vendiamo"],
                ["", "non vendete"],
                ["", ""]
              ]
            }
          ],
          "regular": {
            "name": "regular -ere",
            "example": "vendere (to sell)",
            "conjugations": [
              ["non vendere", "non vendiamo"],
              ["", "non vendete"],
              ["", ""]
            ]
          }
        },
        {
          "label": "-ire",
          "patterns": [
            {
              "name": "all -ire verbs",
              "description": "non + infinitive (tu), non + present subj. (Lei/noi/voi)",
              "dimmed": true,
              "verbs": "all verbs",
              "example": "dormire (to sleep)",
              "conjugations": [
                ["non dormire", "non dormiamo"],
                ["", "non dormite"],
                ["", ""]
              ]
            }
          ],
          "regular": {
            "name": "regular -ire",
            "example": "dormire (to sleep)",
            "conjugations": [
              ["non dormire", "non dormiamo"],
              ["", "non dormite"],
              ["", ""]
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
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "imp_present"
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
    { "rule": "Masculine -o → -i", "singular": "libro", "plural": "libri", "examples": "gatto→gatti, ragazzo→ragazzi, amico→amici, tavolo→tavoli" },
    { "rule": "Feminine -a → -e", "singular": "casa", "plural": "case", "examples": "donna→donne, porta→porte, ragazza→ragazze, scuola→scuole" },
    { "rule": "-e → -i (both genders)", "singular": "cane", "plural": "cani", "examples": "padre→padri, madre→madri, pesce→pesci, chiave→chiavi" },
    { "rule": "-co → -chi (stress on penult.)", "singular": "fuoco", "plural": "fuochi", "examples": "parco→parchi, bosco→boschi, disco→dischi" },
    { "rule": "-co → -ci (stress on antepenult.)", "singular": "medico", "plural": "medici", "examples": "amico→amici, nemico→nemici, sindaco→sindaci" },
    { "rule": "-go → -ghi", "singular": "lago", "plural": "laghi", "examples": "fungo→funghi, albergo→alberghi, drago→draghi" },
    { "rule": "-ca/-ga → -che/-ghe", "singular": "amica", "plural": "amiche", "examples": "barca→barche, bottega→botteghe, riga→righe" },
    { "rule": "-cia/-gia → -ce/-ge (after consonant)", "singular": "faccia", "plural": "facce", "examples": "roccia→rocce, pioggia→piogge, spiaggia→spiagge" },
    { "rule": "-cia/-gia → -cie/-gie (after vowel)", "singular": "camicia", "plural": "camicie", "examples": "valigia→valigie, ciliegia→ciliegie" },
    { "rule": "Invariable (ending in accent/consonant)", "singular": "città", "plural": "città", "examples": "caffè→caffè, film→film, bar→bar, sport→sport" },
    { "rule": "Irregular", "singular": "uomo", "plural": "uomini", "examples": "mano→mani, bue→buoi, dio→dèi, uovo→uova" }
  ],
  "chart": {
    "columns": ["Past (Passato)", "Present (Presente)", "Future (Futuro)", "Conditional (Condizionale)"],
    "rows": ["Simple (Semplice)", "Compound (Composto)", "Imperfect (Imperfetto)", "Pluperfect (Trapassato)"],
    "groups": ["-are: parlare", "-ere: vendere", "-ire: dormire"],
    "cells": [
      [
        { "form": "Passato remoto", "rule": "Stem + endings",
          "are": [["io parlai", "n. parlammo"], ["tu parlasti", "v. parlaste"], ["lui parlò", "loro parlarono"]],
          "ere": [["io vendei", "n. vendemmo"], ["tu vendesti", "v. vendeste"], ["lui vendé", "loro venderono"]],
          "ire": [["io dormii", "n. dormimmo"], ["tu dormisti", "v. dormiste"], ["lui dormì", "loro dormirono"]] },
        { "form": "Presente", "rule": "Stem + endings",
          "are": [["io parlo", "n. parliamo"], ["tu parli", "v. parlate"], ["lui parla", "loro parlano"]],
          "ere": [["io vendo", "n. vendiamo"], ["tu vendi", "v. vendete"], ["lui vende", "loro vendono"]],
          "ire": [["io dormo", "n. dormiamo"], ["tu dormi", "v. dormite"], ["lui dorme", "loro dormono"]] },
        { "form": "Futuro semplice", "rule": "Inf. stem + endings",
          "are": [["io parlerò", "n. parleremo"], ["tu parlerai", "v. parlerete"], ["lui parlerà", "loro parleranno"]],
          "ere": [["io venderò", "n. venderemo"], ["tu venderai", "v. venderete"], ["lui venderà", "loro venderanno"]],
          "ire": [["io dormirò", "n. dormiremo"], ["tu dormirai", "v. dormirete"], ["lui dormirà", "loro dormiranno"]] },
        { "form": "Cond. presente", "rule": "Inf. stem + imp. endings",
          "are": [["io parlerei", "n. parleremmo"], ["tu parleresti", "v. parlereste"], ["lui parlerebbe", "loro parlerebbero"]],
          "ere": [["io venderei", "n. venderemmo"], ["tu venderesti", "v. vendereste"], ["lui venderebbe", "loro venderebbero"]],
          "ire": [["io dormirei", "n. dormiremmo"], ["tu dormiresti", "v. dormireste"], ["lui dormirebbe", "loro dormirebbero"]] }
      ],
      [
        { "form": "Passato prossimo", "rule": "Pres. avere + p.p.",
          "are": [["io ho parlato", "n. abbiamo parlato"], ["tu hai parlato", "v. avete parlato"], ["lui ha parlato", "loro hanno parlato"]],
          "ere": [["io ho venduto", "n. abbiamo venduto"], ["tu hai venduto", "v. avete venduto"], ["lui ha venduto", "loro hanno venduto"]],
          "ire": [["io ho dormito", "n. abbiamo dormito"], ["tu hai dormito", "v. avete dormito"], ["lui ha dormito", "loro hanno dormito"]] },
        null,
        { "form": "Futuro anteriore", "rule": "Fut. avere + p.p.",
          "are": [["io avrò parlato", "n. avremo parlato"], ["tu avrai parlato", "v. avrete parlato"], ["lui avrà parlato", "loro avranno parlato"]],
          "ere": [["io avrò venduto", "n. avremo venduto"], ["tu avrai venduto", "v. avrete venduto"], ["lui avrà venduto", "loro avranno venduto"]],
          "ire": [["io avrò dormito", "n. avremo dormito"], ["tu avrai dormito", "v. avrete dormito"], ["lui avrà dormito", "loro avranno dormito"]] },
        { "form": "Cond. passato", "rule": "Cond. avere + p.p.",
          "are": [["io avrei parlato", "n. avremmo parlato"], ["tu avresti parlato", "v. avreste parlato"], ["lui avrebbe parlato", "loro avrebbero parlato"]],
          "ere": [["io avrei venduto", "n. avremmo venduto"], ["tu avresti venduto", "v. avreste venduto"], ["lui avrebbe venduto", "loro avrebbero venduto"]],
          "ire": [["io avrei dormito", "n. avremmo dormito"], ["tu avresti dormito", "v. avreste dormito"], ["lui avrebbe dormito", "loro avrebbero dormito"]] }
      ],
      [
        { "form": "Imperfetto", "rule": "Stem + endings",
          "are": [["io parlavo", "n. parlavamo"], ["tu parlavi", "v. parlavate"], ["lui parlava", "loro parlavano"]],
          "ere": [["io vendevo", "n. vendevamo"], ["tu vendevi", "v. vendevate"], ["lui vendeva", "loro vendevano"]],
          "ire": [["io dormivo", "n. dormivamo"], ["tu dormivi", "v. dormivate"], ["lui dormiva", "loro dormivano"]] },
        null, null, null
      ],
      [
        { "form": "Trapassato prossimo", "rule": "Imp. avere + p.p.",
          "are": [["io avevo parlato", "n. avevamo parlato"], ["tu avevi parlato", "v. avevate parlato"], ["lui aveva parlato", "loro avevano parlato"]],
          "ere": [["io avevo venduto", "n. avevamo venduto"], ["tu avevi venduto", "v. avevate venduto"], ["lui aveva venduto", "loro avevano venduto"]],
          "ire": [["io avevo dormito", "n. avevamo dormito"], ["tu avevi dormito", "v. avevate dormito"], ["lui aveva dormito", "loro avevano dormito"]] },
        null, null, null
      ]
    ]
  }
};
