var frenchData = {
  "language": "French",
  "title": "French Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" },
    { "key": "pronouns", "icon": "bi-person", "label": "Pronouns" }
  ],
  "theme": {
    "primary": "#c62828",
    "secondary": "#b71c1c",
    "tableHeader": "#d32f2f",
    "stripedRow": "#ffebee",
    "border": "#ef9a9a"
  },
  "tenses": {
    "present": {
      "label": "Present (Présent de l'indicatif)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "vais",
                  "allons"
                ],
                [
                  "vas",
                  "allez"
                ],
                [
                  "va",
                  "vont"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "accent shift (é → è)",
              "dimmed": false,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "espère",
                  "espérons"
                ],
                [
                  "espères",
                  "espérez"
                ],
                [
                  "espère",
                  "espèrent"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "accent shift (e → è)",
              "dimmed": false,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "mène",
                  "menons"
                ],
                [
                  "mènes",
                  "menez"
                ],
                [
                  "mène",
                  "mènent"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "consonant doubling (l → ll, t → tt)",
              "dimmed": false,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "appelle",
                  "appelons"
                ],
                [
                  "appelles",
                  "appelez"
                ],
                [
                  "appelle",
                  "appellent"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "stem change (y → i)",
              "dimmed": false,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "envoie",
                  "envoyons"
                ],
                [
                  "envoies",
                  "envoyez"
                ],
                [
                  "envoie",
                  "envoient"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "optional stem change (y → i or y)",
              "dimmed": false,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "paie / paye",
                  "payons"
                ],
                [
                  "paies / payes",
                  "payez"
                ],
                [
                  "paie / paye",
                  "paient / payent"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "spelling preservation (ge → geo)",
              "dimmed": false,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "mange",
                  "mangeons"
                ],
                [
                  "manges",
                  "mangez"
                ],
                [
                  "mange",
                  "mangent"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "spelling preservation (c → ç)",
              "dimmed": false,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "commence",
                  "commençons"
                ],
                [
                  "commences",
                  "commencez"
                ],
                [
                  "commence",
                  "commencent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "parle",
                "parlons"
              ],
              [
                "parles",
                "parlez"
              ],
              [
                "parle",
                "parlent"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "er-like endings (-is → -e)",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ouvre",
                  "ouvrons"
                ],
                [
                  "ouvres",
                  "ouvrez"
                ],
                [
                  "ouvre",
                  "ouvrent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "consonant drop (dorm- → dor-)",
              "dimmed": false,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dors",
                  "dormons"
                ],
                [
                  "dors",
                  "dormez"
                ],
                [
                  "dort",
                  "dorment"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "vowel change (en → ien)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "viens",
                  "venons"
                ],
                [
                  "viens",
                  "venez"
                ],
                [
                  "vient",
                  "viennent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "stem change (mour- → meur-)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "meurs",
                  "mourons"
                ],
                [
                  "meurs",
                  "mourez"
                ],
                [
                  "meurt",
                  "meurent"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "stem change (ér- → ièr-)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "acquiers",
                  "acquérons"
                ],
                [
                  "acquiers",
                  "acquérez"
                ],
                [
                  "acquiert",
                  "acquièrent"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "y insertion (ui- → uy-)",
              "dimmed": false,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "fuis",
                  "fuyons"
                ],
                [
                  "fuis",
                  "fuyez"
                ],
                [
                  "fuit",
                  "fuient"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "regular",
              "dimmed": true,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "cours",
                  "courons"
                ],
                [
                  "cours",
                  "courez"
                ],
                [
                  "court",
                  "courent"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "loss of diaeresis (haï- → hai-)",
              "dimmed": false,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "hais",
                  "haïssons"
                ],
                [
                  "hais",
                  "haïssez"
                ],
                [
                  "hait",
                  "haïssent"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "stem reduction (bouill- → bou-)",
              "dimmed": false,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "bous",
                  "bouillons"
                ],
                [
                  "bous",
                  "bouillez"
                ],
                [
                  "bout",
                  "bouillent"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "defective (faill- → faux-)",
              "dimmed": false,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "faux",
                  "faillons"
                ],
                [
                  "faux",
                  "faillez"
                ],
                [
                  "faut",
                  "faillent"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "defective (limited forms)",
              "dimmed": false,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "conjugations": [
                [
                  "gîs",
                  "gisons"
                ],
                [
                  "gîs",
                  "gisez"
                ],
                [
                  "gît",
                  "gisent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "finis",
                "finissons"
              ],
              [
                "finis",
                "finissez"
              ],
              [
                "finit",
                "finissent"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "plural expansion (aî → aiss)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "connais",
                  "connaissons"
                ],
                [
                  "connais",
                  "connaissez"
                ],
                [
                  "connaît",
                  "connaissent"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "stem doubling (n → nn)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "prends",
                  "prenons"
                ],
                [
                  "prends",
                  "prenez"
                ],
                [
                  "prend",
                  "prennent"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "stem reduction (tt → t)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "mets",
                  "mettons"
                ],
                [
                  "mets",
                  "mettez"
                ],
                [
                  "met",
                  "mettent"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "plural expansion (ui → uis)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "construis",
                  "construisons"
                ],
                [
                  "construis",
                  "construisez"
                ],
                [
                  "construit",
                  "construisent"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "stem change (nd → gn)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "peins",
                  "peignons"
                ],
                [
                  "peins",
                  "peignez"
                ],
                [
                  "peint",
                  "peignent"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular plural stems (lire type)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "lis",
                  "lisons"
                ],
                [
                  "lis",
                  "lisez"
                ],
                [
                  "lit",
                  "lisent"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "stem reduction (viv- → vi-)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "vis",
                  "vivons"
                ],
                [
                  "vis",
                  "vivez"
                ],
                [
                  "vit",
                  "vivent"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "stem change (soud- → sou-)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "résous",
                  "résolvons"
                ],
                [
                  "résous",
                  "résolvez"
                ],
                [
                  "résout",
                  "résolvent"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "stem split (boi- / buv-)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "bois",
                  "buvons"
                ],
                [
                  "bois",
                  "buvez"
                ],
                [
                  "boit",
                  "boivent"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "circumflex 3rd singular (plaît)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "plais",
                  "plaisons"
                ],
                [
                  "plais",
                  "plaisez"
                ],
                [
                  "plaît",
                  "plaisent"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "unusual endings (conclure type)",
              "dimmed": false,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "conclus",
                  "concluons"
                ],
                [
                  "conclus",
                  "concluez"
                ],
                [
                  "conclut",
                  "concluent"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "added -t in 3rd singular (romp-t)",
              "dimmed": false,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "romps",
                  "rompons"
                ],
                [
                  "romps",
                  "rompez"
                ],
                [
                  "rompt",
                  "rompent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "vends",
                "vendons"
              ],
              [
                "vends",
                "vendez"
              ],
              [
                "vend",
                "vendent"
              ]
            ]
          }
        }
      ],
      "description": "Describes current states, habitual actions, and general truths. Also used for scheduled future events."
    },
    "compound_past": {
      "label": "Compound Past (Passé composé)",
      "icon": "bi-check2",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "être + allé (irregular auxiliary)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "suis allé(e)",
                  "sommes allé(e)s"
                ],
                [
                  "es allé(e)",
                  "êtes allé(e)s"
                ],
                [
                  "est allé(e)",
                  "sont allé(e)s"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "ai espéré",
                  "avons espéré"
                ],
                [
                  "as espéré",
                  "avez espéré"
                ],
                [
                  "a espéré",
                  "ont espéré"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "ai mené",
                  "avons mené"
                ],
                [
                  "as mené",
                  "avez mené"
                ],
                [
                  "a mené",
                  "ont mené"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "ai appelé",
                  "avons appelé"
                ],
                [
                  "as appelé",
                  "avez appelé"
                ],
                [
                  "a appelé",
                  "ont appelé"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "ai envoyé",
                  "avons envoyé"
                ],
                [
                  "as envoyé",
                  "avez envoyé"
                ],
                [
                  "a envoyé",
                  "ont envoyé"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "ai payé",
                  "avons payé"
                ],
                [
                  "as payé",
                  "avez payé"
                ],
                [
                  "a payé",
                  "ont payé"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "ai mangé",
                  "avons mangé"
                ],
                [
                  "as mangé",
                  "avez mangé"
                ],
                [
                  "a mangé",
                  "ont mangé"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "ai commencé",
                  "avons commencé"
                ],
                [
                  "as commencé",
                  "avez commencé"
                ],
                [
                  "a commencé",
                  "ont commencé"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "ai parlé",
                "avons parlé"
              ],
              [
                "as parlé",
                "avez parlé"
              ],
              [
                "a parlé",
                "ont parlé"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular participle (ouvert)",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ai ouvert",
                  "avons ouvert"
                ],
                [
                  "as ouvert",
                  "avez ouvert"
                ],
                [
                  "a ouvert",
                  "ont ouvert"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "ai dormi",
                  "avons dormi"
                ],
                [
                  "as dormi",
                  "avez dormi"
                ],
                [
                  "a dormi",
                  "ont dormi"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + venu (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "suis venu(e)",
                  "sommes venu(e)s"
                ],
                [
                  "es venu(e)",
                  "êtes venu(e)s"
                ],
                [
                  "est venu(e)",
                  "sont venu(e)s"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + mort (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "suis mort(e)",
                  "sommes mort(e)s"
                ],
                [
                  "es mort(e)",
                  "êtes mort(e)s"
                ],
                [
                  "est mort(e)",
                  "sont mort(e)s"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular participle (acquis)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "ai acquis",
                  "avons acquis"
                ],
                [
                  "as acquis",
                  "avez acquis"
                ],
                [
                  "a acquis",
                  "ont acquis"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "ai fui",
                  "avons fui"
                ],
                [
                  "as fui",
                  "avez fui"
                ],
                [
                  "a fui",
                  "ont fui"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular participle (couru)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "ai couru",
                  "avons couru"
                ],
                [
                  "as couru",
                  "avez couru"
                ],
                [
                  "a couru",
                  "ont couru"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "ai haï",
                  "avons haï"
                ],
                [
                  "as haï",
                  "avez haï"
                ],
                [
                  "a haï",
                  "ont haï"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "ai bouilli",
                  "avons bouilli"
                ],
                [
                  "as bouilli",
                  "avez bouilli"
                ],
                [
                  "a bouilli",
                  "ont bouilli"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "irregular participle (failli)",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "ai failli",
                  "avons failli"
                ],
                [
                  "as failli",
                  "avez failli"
                ],
                [
                  "a failli",
                  "ont failli"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no compound past forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé composé forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "ai fini",
                "avons fini"
              ],
              [
                "as fini",
                "avez fini"
              ],
              [
                "a fini",
                "ont fini"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular participle (connu)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "ai connu",
                  "avons connu"
                ],
                [
                  "as connu",
                  "avez connu"
                ],
                [
                  "a connu",
                  "ont connu"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (pris)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "ai pris",
                  "avons pris"
                ],
                [
                  "as pris",
                  "avez pris"
                ],
                [
                  "a pris",
                  "ont pris"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (mis)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "ai mis",
                  "avons mis"
                ],
                [
                  "as mis",
                  "avez mis"
                ],
                [
                  "a mis",
                  "ont mis"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular participle (construit)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "ai construit",
                  "avons construit"
                ],
                [
                  "as construit",
                  "avez construit"
                ],
                [
                  "a construit",
                  "ont construit"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular participle (peint)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "ai peint",
                  "avons peint"
                ],
                [
                  "as peint",
                  "avez peint"
                ],
                [
                  "a peint",
                  "ont peint"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular participle (lu)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "ai lu",
                  "avons lu"
                ],
                [
                  "as lu",
                  "avez lu"
                ],
                [
                  "a lu",
                  "ont lu"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular participle (vécu)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "ai vécu",
                  "avons vécu"
                ],
                [
                  "as vécu",
                  "avez vécu"
                ],
                [
                  "a vécu",
                  "ont vécu"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular participle (résolu)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "ai résolu",
                  "avons résolu"
                ],
                [
                  "as résolu",
                  "avez résolu"
                ],
                [
                  "a résolu",
                  "ont résolu"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular participle (bu)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "ai bu",
                  "avons bu"
                ],
                [
                  "as bu",
                  "avez bu"
                ],
                [
                  "a bu",
                  "ont bu"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular participle (plu)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "ai plu",
                  "avons plu"
                ],
                [
                  "as plu",
                  "avez plu"
                ],
                [
                  "a plu",
                  "ont plu"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "irregular participle (conclu)",
              "dimmed": false,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "ai conclu",
                  "avons conclu"
                ],
                [
                  "as conclu",
                  "avez conclu"
                ],
                [
                  "a conclu",
                  "ont conclu"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (-u participle)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "ai rompu",
                  "avons rompu"
                ],
                [
                  "as rompu",
                  "avez rompu"
                ],
                [
                  "a rompu",
                  "ont rompu"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "ai vendu",
                "avons vendu"
              ],
              [
                "as vendu",
                "avez vendu"
              ],
              [
                "a vendu",
                "ont vendu"
              ]
            ]
          }
        }
      ],
      "description": "Describes completed actions with relevance to the present. The most common past tense in spoken language.",
      "extra": "<strong>Être vs. Avoir</strong><br><br>Most verbs use <em>avoir</em>. The following use <em>être</em> (mnemonic: DR MRS VANDERTRAMP):<br><br><table class=\"table table-bordered table-sm mb-0\"><tbody><tr><td><strong>D</strong>evenir</td><td><strong>R</strong>evenir</td><td><strong>M</strong>onter</td></tr><tr><td><strong>R</strong>ester</td><td><strong>S</strong>ortir</td><td><strong>V</strong>enir</td></tr><tr><td><strong>A</strong>ller</td><td><strong>N</strong>aître</td><td><strong>D</strong>escendre</td></tr><tr><td><strong>E</strong>ntrer</td><td><strong>R</strong>etourner</td><td><strong>T</strong>omber</td></tr><tr><td><strong>R</strong>entrer</td><td><strong>A</strong>rriver</td><td><strong>M</strong>ourir</td></tr><tr><td><strong>P</strong>artir</td><td colspan=\"2\">+ all reflexive verbs (se laver, etc.)</td></tr></tbody></table><br>With être, the past participle agrees in gender/number with the subject."
    },
    "imperfect": {
      "label": "Imperfect (Imparfait)",
      "icon": "bi-three-dots",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "regular (all-)",
              "dimmed": true,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "allais",
                  "allions"
                ],
                [
                  "allais",
                  "alliez"
                ],
                [
                  "allait",
                  "allaient"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "espérais",
                  "espérions"
                ],
                [
                  "espérais",
                  "espériez"
                ],
                [
                  "espérait",
                  "espéraient"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "menais",
                  "menions"
                ],
                [
                  "menais",
                  "meniez"
                ],
                [
                  "menait",
                  "menaient"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "appelais",
                  "appelions"
                ],
                [
                  "appelais",
                  "appeliez"
                ],
                [
                  "appelait",
                  "appelaient"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "envoyais",
                  "envoyions"
                ],
                [
                  "envoyais",
                  "envoyiez"
                ],
                [
                  "envoyait",
                  "envoyaient"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "payais",
                  "payions"
                ],
                [
                  "payais",
                  "payiez"
                ],
                [
                  "payait",
                  "payaient"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "spelling preservation (ge before a)",
              "dimmed": false,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "mangeais",
                  "mangions"
                ],
                [
                  "mangeais",
                  "mangiez"
                ],
                [
                  "mangeait",
                  "mangeaient"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "spelling preservation (ç before a)",
              "dimmed": false,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "commençais",
                  "commencions"
                ],
                [
                  "commençais",
                  "commenciez"
                ],
                [
                  "commençait",
                  "commençaient"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "parlais",
                "parlions"
              ],
              [
                "parlais",
                "parliez"
              ],
              [
                "parlait",
                "parlaient"
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
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ouvrais",
                  "ouvrions"
                ],
                [
                  "ouvrais",
                  "ouvriez"
                ],
                [
                  "ouvrait",
                  "ouvraient"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormais",
                  "dormions"
                ],
                [
                  "dormais",
                  "dormiez"
                ],
                [
                  "dormait",
                  "dormaient"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "venais",
                  "venions"
                ],
                [
                  "venais",
                  "veniez"
                ],
                [
                  "venait",
                  "venaient"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "mourais",
                  "mourions"
                ],
                [
                  "mourais",
                  "mouriez"
                ],
                [
                  "mourait",
                  "mouraient"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "regular",
              "dimmed": true,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "acquérais",
                  "acquérions"
                ],
                [
                  "acquérais",
                  "acquériez"
                ],
                [
                  "acquérait",
                  "acquéraient"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "fuyais",
                  "fuyions"
                ],
                [
                  "fuyais",
                  "fuyiez"
                ],
                [
                  "fuyait",
                  "fuyaient"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "regular",
              "dimmed": true,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "courais",
                  "courions"
                ],
                [
                  "courais",
                  "couriez"
                ],
                [
                  "courait",
                  "couraient"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "haïssais",
                  "haïssions"
                ],
                [
                  "haïssais",
                  "haïssiez"
                ],
                [
                  "haïssait",
                  "haïssaient"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "bouillais",
                  "bouillions"
                ],
                [
                  "bouillais",
                  "bouilliez"
                ],
                [
                  "bouillait",
                  "bouillaient"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "faillais",
                  "faillions"
                ],
                [
                  "faillais",
                  "failliez"
                ],
                [
                  "faillait",
                  "faillaient"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "regular",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "conjugations": [
                [
                  "gisais",
                  "gisions"
                ],
                [
                  "gisais",
                  "gisiez"
                ],
                [
                  "gisait",
                  "gisaient"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "finissais",
                "finissions"
              ],
              [
                "finissais",
                "finissiez"
              ],
              [
                "finissait",
                "finissaient"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "regular (connaiss-)",
              "dimmed": true,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "connaissais",
                  "connaissions"
                ],
                [
                  "connaissais",
                  "connaissiez"
                ],
                [
                  "connaissait",
                  "connaissaient"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "regular (pren-)",
              "dimmed": true,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "prenais",
                  "prenions"
                ],
                [
                  "prenais",
                  "preniez"
                ],
                [
                  "prenait",
                  "prenaient"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "regular (mett-)",
              "dimmed": true,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "mettais",
                  "mettions"
                ],
                [
                  "mettais",
                  "mettiez"
                ],
                [
                  "mettait",
                  "mettaient"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "regular (construis-)",
              "dimmed": true,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "construisais",
                  "construisions"
                ],
                [
                  "construisais",
                  "construisiez"
                ],
                [
                  "construisait",
                  "construisaient"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "regular (peign-)",
              "dimmed": true,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "peignais",
                  "peignions"
                ],
                [
                  "peignais",
                  "peigniez"
                ],
                [
                  "peignait",
                  "peignaient"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "regular (lis-)",
              "dimmed": true,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "lisais",
                  "lisions"
                ],
                [
                  "lisais",
                  "lisiez"
                ],
                [
                  "lisait",
                  "lisaient"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "regular (viv-)",
              "dimmed": true,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "vivais",
                  "vivions"
                ],
                [
                  "vivais",
                  "viviez"
                ],
                [
                  "vivait",
                  "vivaient"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "regular (résolv-)",
              "dimmed": true,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "résolvais",
                  "résolvions"
                ],
                [
                  "résolvais",
                  "résolviez"
                ],
                [
                  "résolvait",
                  "résolvaient"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "regular (buv-)",
              "dimmed": true,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "buvais",
                  "buvions"
                ],
                [
                  "buvais",
                  "buviez"
                ],
                [
                  "buvait",
                  "buvaient"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "regular (plais-)",
              "dimmed": true,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "plaisais",
                  "plaisions"
                ],
                [
                  "plaisais",
                  "plaisiez"
                ],
                [
                  "plaisait",
                  "plaisaient"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "regular (conclu-)",
              "dimmed": true,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "concluais",
                  "concluions"
                ],
                [
                  "concluais",
                  "concluiez"
                ],
                [
                  "concluait",
                  "concluaient"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (romp-)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "rompais",
                  "rompions"
                ],
                [
                  "rompais",
                  "rompiez"
                ],
                [
                  "rompait",
                  "rompaient"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "vendais",
                "vendions"
              ],
              [
                "vendais",
                "vendiez"
              ],
              [
                "vendait",
                "vendaient"
              ]
            ]
          }
        }
      ],
      "description": "Describes ongoing, habitual, or background actions in the past. Sets the scene. 'I used to walk' or 'I was walking.'",
      "extra": "<strong>Imparfait vs. Passé composé</strong><br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Imparfait</th><th>Passé composé</th></tr></thead><tbody><tr><td>Ongoing/background action<br><em>Il pleuvait</em> (it was raining)</td><td>Completed event<br><em>Il a plu</em> (it rained)</td></tr><tr><td>Habitual past<br><em>Je marchais chaque jour</em></td><td>Single occurrence<br><em>J'ai marché hier</em></td></tr><tr><td>Description/state<br><em>Elle était fatiguée</em></td><td>Change of state<br><em>Elle est devenue fatiguée</em></td></tr><tr><td>Setting the scene<br><em>Il faisait beau...</em></td><td>Advancing the plot<br><em>...quand il est parti</em></td></tr></tbody></table>"
    },
    "pluperfect": {
      "label": "Pluperfect (Plus-que-parfait)",
      "icon": "bi-check2-all",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "être + allé (irregular auxiliary)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "étais allé(e)",
                  "étions allé(e)s"
                ],
                [
                  "étais allé(e)",
                  "étiez allé(e)s"
                ],
                [
                  "était allé(e)",
                  "étaient allé(e)s"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "avais espéré",
                  "avions espéré"
                ],
                [
                  "avais espéré",
                  "aviez espéré"
                ],
                [
                  "avait espéré",
                  "avaient espéré"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "avais mené",
                  "avions mené"
                ],
                [
                  "avais mené",
                  "aviez mené"
                ],
                [
                  "avait mené",
                  "avaient mené"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "avais appelé",
                  "avions appelé"
                ],
                [
                  "avais appelé",
                  "aviez appelé"
                ],
                [
                  "avait appelé",
                  "avaient appelé"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "avais envoyé",
                  "avions envoyé"
                ],
                [
                  "avais envoyé",
                  "aviez envoyé"
                ],
                [
                  "avait envoyé",
                  "avaient envoyé"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "avais payé",
                  "avions payé"
                ],
                [
                  "avais payé",
                  "aviez payé"
                ],
                [
                  "avait payé",
                  "avaient payé"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "avais mangé",
                  "avions mangé"
                ],
                [
                  "avais mangé",
                  "aviez mangé"
                ],
                [
                  "avait mangé",
                  "avaient mangé"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "avais commencé",
                  "avions commencé"
                ],
                [
                  "avais commencé",
                  "aviez commencé"
                ],
                [
                  "avait commencé",
                  "avaient commencé"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "avais parlé",
                "avions parlé"
              ],
              [
                "avais parlé",
                "aviez parlé"
              ],
              [
                "avait parlé",
                "avaient parlé"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular participle (ouvert)",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "avais ouvert",
                  "avions ouvert"
                ],
                [
                  "avais ouvert",
                  "aviez ouvert"
                ],
                [
                  "avait ouvert",
                  "avaient ouvert"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "avais dormi",
                  "avions dormi"
                ],
                [
                  "avais dormi",
                  "aviez dormi"
                ],
                [
                  "avait dormi",
                  "avaient dormi"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + venu (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "étais venu(e)",
                  "étions venu(e)s"
                ],
                [
                  "étais venu(e)",
                  "étiez venu(e)s"
                ],
                [
                  "était venu(e)",
                  "étaient venu(e)s"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + mort (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "étais mort(e)",
                  "étions mort(e)s"
                ],
                [
                  "étais mort(e)",
                  "étiez mort(e)s"
                ],
                [
                  "était mort(e)",
                  "étaient mort(e)s"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular participle (acquis)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "avais acquis",
                  "avions acquis"
                ],
                [
                  "avais acquis",
                  "aviez acquis"
                ],
                [
                  "avait acquis",
                  "avaient acquis"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "avais fui",
                  "avions fui"
                ],
                [
                  "avais fui",
                  "aviez fui"
                ],
                [
                  "avait fui",
                  "avaient fui"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular participle (couru)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "avais couru",
                  "avions couru"
                ],
                [
                  "avais couru",
                  "aviez couru"
                ],
                [
                  "avait couru",
                  "avaient couru"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "avais haï",
                  "avions haï"
                ],
                [
                  "avais haï",
                  "aviez haï"
                ],
                [
                  "avait haï",
                  "avaient haï"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "avais bouilli",
                  "avions bouilli"
                ],
                [
                  "avais bouilli",
                  "aviez bouilli"
                ],
                [
                  "avait bouilli",
                  "avaient bouilli"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "irregular participle (failli)",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "avais failli",
                  "avions failli"
                ],
                [
                  "avais failli",
                  "aviez failli"
                ],
                [
                  "avait failli",
                  "avaient failli"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no compound past forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé composé forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "avais fini",
                "avions fini"
              ],
              [
                "avais fini",
                "aviez fini"
              ],
              [
                "avait fini",
                "avaient fini"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular participle (connu)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "avais connu",
                  "avions connu"
                ],
                [
                  "avais connu",
                  "aviez connu"
                ],
                [
                  "avait connu",
                  "avaient connu"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (pris)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "avais pris",
                  "avions pris"
                ],
                [
                  "avais pris",
                  "aviez pris"
                ],
                [
                  "avait pris",
                  "avaient pris"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (mis)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "avais mis",
                  "avions mis"
                ],
                [
                  "avais mis",
                  "aviez mis"
                ],
                [
                  "avait mis",
                  "avaient mis"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular participle (construit)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "avais construit",
                  "avions construit"
                ],
                [
                  "avais construit",
                  "aviez construit"
                ],
                [
                  "avait construit",
                  "avaient construit"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular participle (peint)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "avais peint",
                  "avions peint"
                ],
                [
                  "avais peint",
                  "aviez peint"
                ],
                [
                  "avait peint",
                  "avaient peint"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular participle (lu)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "avais lu",
                  "avions lu"
                ],
                [
                  "avais lu",
                  "aviez lu"
                ],
                [
                  "avait lu",
                  "avaient lu"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular participle (vécu)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "avais vécu",
                  "avions vécu"
                ],
                [
                  "avais vécu",
                  "aviez vécu"
                ],
                [
                  "avait vécu",
                  "avaient vécu"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular participle (résolu)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "avais résolu",
                  "avions résolu"
                ],
                [
                  "avais résolu",
                  "aviez résolu"
                ],
                [
                  "avait résolu",
                  "avaient résolu"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular participle (bu)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "avais bu",
                  "avions bu"
                ],
                [
                  "avais bu",
                  "aviez bu"
                ],
                [
                  "avait bu",
                  "avaient bu"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular participle (plu)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "avais plu",
                  "avions plu"
                ],
                [
                  "avais plu",
                  "aviez plu"
                ],
                [
                  "avait plu",
                  "avaient plu"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "irregular participle (conclu)",
              "dimmed": false,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "avais conclu",
                  "avions conclu"
                ],
                [
                  "avais conclu",
                  "aviez conclu"
                ],
                [
                  "avait conclu",
                  "avaient conclu"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (-u participle)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "avais rompu",
                  "avions rompu"
                ],
                [
                  "avais rompu",
                  "aviez rompu"
                ],
                [
                  "avait rompu",
                  "avaient rompu"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "avais vendu",
                "avions vendu"
              ],
              [
                "avais vendu",
                "aviez vendu"
              ],
              [
                "avait vendu",
                "avaient vendu"
              ]
            ]
          }
        }
      ],
      "description": "Describes an action completed before another past action. 'I had already walked there before.'"
    },
    "future": {
      "label": "Future (Futur simple)",
      "icon": "bi-arrow-right",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "irregular stem (ir-)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "irai",
                  "irons"
                ],
                [
                  "iras",
                  "irez"
                ],
                [
                  "ira",
                  "iront"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "espérerai",
                  "espérerons"
                ],
                [
                  "espéreras",
                  "espérerez"
                ],
                [
                  "espérera",
                  "espéreront"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "mènerai",
                  "mènerons"
                ],
                [
                  "mèneras",
                  "mènerez"
                ],
                [
                  "mènera",
                  "mèneront"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "consonant doubling (appell-)",
              "dimmed": false,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "appellerai",
                  "appellerons"
                ],
                [
                  "appelleras",
                  "appellerez"
                ],
                [
                  "appellera",
                  "appelleront"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "stem change (y → i)",
              "dimmed": false,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "enverrai",
                  "enverrons"
                ],
                [
                  "enverras",
                  "enverrez"
                ],
                [
                  "enverra",
                  "enverront"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "paierai / payerai",
                  "paierons / payerons"
                ],
                [
                  "paieras / payeras",
                  "paierez / payerez"
                ],
                [
                  "paiera / payera",
                  "paieront / payeront"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "mangerai",
                  "mangerons"
                ],
                [
                  "mangeras",
                  "mangerez"
                ],
                [
                  "mangera",
                  "mangeront"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "commencerai",
                  "commencerons"
                ],
                [
                  "commenceras",
                  "commencerez"
                ],
                [
                  "commencera",
                  "commenceront"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "parlerai",
                "parlerons"
              ],
              [
                "parleras",
                "parlerez"
              ],
              [
                "parlera",
                "parleront"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular stem (ouvrir → ouvrir-)",
              "dimmed": true,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ouvrirai",
                  "ouvrirons"
                ],
                [
                  "ouvriras",
                  "ouvrirez"
                ],
                [
                  "ouvrira",
                  "ouvriront"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormirai",
                  "dormirons"
                ],
                [
                  "dormiras",
                  "dormirez"
                ],
                [
                  "dormira",
                  "dormiront"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (ven- → viendr-)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "viendrai",
                  "viendrons"
                ],
                [
                  "viendras",
                  "viendrez"
                ],
                [
                  "viendra",
                  "viendront"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (mour- → mourr-)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "mourrai",
                  "mourrons"
                ],
                [
                  "mourras",
                  "mourrez"
                ],
                [
                  "mourra",
                  "mourront"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular stem (acquér- → acquerr-)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "acquerrai",
                  "acquerrons"
                ],
                [
                  "acquerras",
                  "acquerrez"
                ],
                [
                  "acquerra",
                  "acquerront"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "fuirai",
                  "fuirons"
                ],
                [
                  "fuiras",
                  "fuirez"
                ],
                [
                  "fuira",
                  "fuiront"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular stem (cour- → courr-)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "courrai",
                  "courrons"
                ],
                [
                  "courras",
                  "courrez"
                ],
                [
                  "courra",
                  "courront"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "haïrai",
                  "haïrons"
                ],
                [
                  "haïras",
                  "haïrez"
                ],
                [
                  "haïra",
                  "haïront"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "bouillirai",
                  "bouillirons"
                ],
                [
                  "bouilliras",
                  "bouillirez"
                ],
                [
                  "bouillira",
                  "bouilliront"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "faillirai",
                  "faillirons"
                ],
                [
                  "failliras",
                  "faillirez"
                ],
                [
                  "faillira",
                  "failliront"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no future forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No future forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "finirai",
                "finirons"
              ],
              [
                "finiras",
                "finirez"
              ],
              [
                "finira",
                "finiront"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "regular (connaîtr-)",
              "dimmed": true,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "connaîtrai",
                  "connaîtrons"
                ],
                [
                  "connaîtras",
                  "connaîtrez"
                ],
                [
                  "connaîtra",
                  "connaîtront"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "regular (prendr-)",
              "dimmed": true,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "prendrai",
                  "prendrons"
                ],
                [
                  "prendras",
                  "prendrez"
                ],
                [
                  "prendra",
                  "prendront"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "regular (mettr-)",
              "dimmed": true,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "mettrai",
                  "mettrons"
                ],
                [
                  "mettras",
                  "mettrez"
                ],
                [
                  "mettra",
                  "mettront"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "regular (construir-)",
              "dimmed": true,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "construirai",
                  "construirons"
                ],
                [
                  "construiras",
                  "construirez"
                ],
                [
                  "construira",
                  "construiront"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "regular (peindr-)",
              "dimmed": true,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "peindrai",
                  "peindrons"
                ],
                [
                  "peindras",
                  "peindrez"
                ],
                [
                  "peindra",
                  "peindront"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "regular (lir-)",
              "dimmed": true,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "lirai",
                  "lirons"
                ],
                [
                  "liras",
                  "lirez"
                ],
                [
                  "lira",
                  "liront"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "regular (vivr-)",
              "dimmed": true,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "vivrai",
                  "vivrons"
                ],
                [
                  "vivras",
                  "vivrez"
                ],
                [
                  "vivra",
                  "vivront"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "regular (résoudr-)",
              "dimmed": true,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "résoudrai",
                  "résoudrons"
                ],
                [
                  "résoudras",
                  "résoudrez"
                ],
                [
                  "résoudra",
                  "résoudront"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "regular (boir-)",
              "dimmed": true,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "boirai",
                  "boirons"
                ],
                [
                  "boiras",
                  "boirez"
                ],
                [
                  "boira",
                  "boiront"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "regular (plair-)",
              "dimmed": true,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "plairai",
                  "plairons"
                ],
                [
                  "plairas",
                  "plairez"
                ],
                [
                  "plaira",
                  "plairont"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "regular (conclur-)",
              "dimmed": true,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "conclurai",
                  "conclurons"
                ],
                [
                  "concluras",
                  "conclurez"
                ],
                [
                  "conclura",
                  "concluront"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (rompr-)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "romprai",
                  "romprons"
                ],
                [
                  "rompras",
                  "romprez"
                ],
                [
                  "rompra",
                  "rompront"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "vendrai",
                "vendrons"
              ],
              [
                "vendras",
                "vendrez"
              ],
              [
                "vendra",
                "vendront"
              ]
            ]
          }
        }
      ],
      "description": "Describes actions that will happen in the future. Also used for predictions and promises."
    },
    "future_perfect": {
      "label": "Future Perfect (Futur antérieur)",
      "icon": "bi-arrow-right-circle",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "être + allé (irregular auxiliary)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "serai allé(e)",
                  "serons allé(e)s"
                ],
                [
                  "seras allé(e)",
                  "serez allé(e)s"
                ],
                [
                  "sera allé(e)",
                  "seront allé(e)s"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "aurai espéré",
                  "aurons espéré"
                ],
                [
                  "auras espéré",
                  "aurez espéré"
                ],
                [
                  "aura espéré",
                  "auront espéré"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "aurai mené",
                  "aurons mené"
                ],
                [
                  "auras mené",
                  "aurez mené"
                ],
                [
                  "aura mené",
                  "auront mené"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "aurai appelé",
                  "aurons appelé"
                ],
                [
                  "auras appelé",
                  "aurez appelé"
                ],
                [
                  "aura appelé",
                  "auront appelé"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "aurai envoyé",
                  "aurons envoyé"
                ],
                [
                  "auras envoyé",
                  "aurez envoyé"
                ],
                [
                  "aura envoyé",
                  "auront envoyé"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "aurai payé",
                  "aurons payé"
                ],
                [
                  "auras payé",
                  "aurez payé"
                ],
                [
                  "aura payé",
                  "auront payé"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "aurai mangé",
                  "aurons mangé"
                ],
                [
                  "auras mangé",
                  "aurez mangé"
                ],
                [
                  "aura mangé",
                  "auront mangé"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "aurai commencé",
                  "aurons commencé"
                ],
                [
                  "auras commencé",
                  "aurez commencé"
                ],
                [
                  "aura commencé",
                  "auront commencé"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "aurai parlé",
                "aurons parlé"
              ],
              [
                "auras parlé",
                "aurez parlé"
              ],
              [
                "aura parlé",
                "auront parlé"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular participle (ouvert)",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "aurai ouvert",
                  "aurons ouvert"
                ],
                [
                  "auras ouvert",
                  "aurez ouvert"
                ],
                [
                  "aura ouvert",
                  "auront ouvert"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "aurai dormi",
                  "aurons dormi"
                ],
                [
                  "auras dormi",
                  "aurez dormi"
                ],
                [
                  "aura dormi",
                  "auront dormi"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + venu (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "serai venu(e)",
                  "serons venu(e)s"
                ],
                [
                  "seras venu(e)",
                  "serez venu(e)s"
                ],
                [
                  "sera venu(e)",
                  "seront venu(e)s"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + mort (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "serai mort(e)",
                  "serons mort(e)s"
                ],
                [
                  "seras mort(e)",
                  "serez mort(e)s"
                ],
                [
                  "sera mort(e)",
                  "seront mort(e)s"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular participle (acquis)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "aurai acquis",
                  "aurons acquis"
                ],
                [
                  "auras acquis",
                  "aurez acquis"
                ],
                [
                  "aura acquis",
                  "auront acquis"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "aurai fui",
                  "aurons fui"
                ],
                [
                  "auras fui",
                  "aurez fui"
                ],
                [
                  "aura fui",
                  "auront fui"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular participle (couru)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "aurai couru",
                  "aurons couru"
                ],
                [
                  "auras couru",
                  "aurez couru"
                ],
                [
                  "aura couru",
                  "auront couru"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "aurai haï",
                  "aurons haï"
                ],
                [
                  "auras haï",
                  "aurez haï"
                ],
                [
                  "aura haï",
                  "auront haï"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "aurai bouilli",
                  "aurons bouilli"
                ],
                [
                  "auras bouilli",
                  "aurez bouilli"
                ],
                [
                  "aura bouilli",
                  "auront bouilli"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "irregular participle (failli)",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "aurai failli",
                  "aurons failli"
                ],
                [
                  "auras failli",
                  "aurez failli"
                ],
                [
                  "aura failli",
                  "auront failli"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no compound past forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé composé forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "aurai fini",
                "aurons fini"
              ],
              [
                "auras fini",
                "aurez fini"
              ],
              [
                "aura fini",
                "auront fini"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular participle (connu)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "aurai connu",
                  "aurons connu"
                ],
                [
                  "auras connu",
                  "aurez connu"
                ],
                [
                  "aura connu",
                  "auront connu"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (pris)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "aurai pris",
                  "aurons pris"
                ],
                [
                  "auras pris",
                  "aurez pris"
                ],
                [
                  "aura pris",
                  "auront pris"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (mis)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "aurai mis",
                  "aurons mis"
                ],
                [
                  "auras mis",
                  "aurez mis"
                ],
                [
                  "aura mis",
                  "auront mis"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular participle (construit)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "aurai construit",
                  "aurons construit"
                ],
                [
                  "auras construit",
                  "aurez construit"
                ],
                [
                  "aura construit",
                  "auront construit"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular participle (peint)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "aurai peint",
                  "aurons peint"
                ],
                [
                  "auras peint",
                  "aurez peint"
                ],
                [
                  "aura peint",
                  "auront peint"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular participle (lu)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "aurai lu",
                  "aurons lu"
                ],
                [
                  "auras lu",
                  "aurez lu"
                ],
                [
                  "aura lu",
                  "auront lu"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular participle (vécu)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "aurai vécu",
                  "aurons vécu"
                ],
                [
                  "auras vécu",
                  "aurez vécu"
                ],
                [
                  "aura vécu",
                  "auront vécu"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular participle (résolu)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "aurai résolu",
                  "aurons résolu"
                ],
                [
                  "auras résolu",
                  "aurez résolu"
                ],
                [
                  "aura résolu",
                  "auront résolu"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular participle (bu)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "aurai bu",
                  "aurons bu"
                ],
                [
                  "auras bu",
                  "aurez bu"
                ],
                [
                  "aura bu",
                  "auront bu"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular participle (plu)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "aurai plu",
                  "aurons plu"
                ],
                [
                  "auras plu",
                  "aurez plu"
                ],
                [
                  "aura plu",
                  "auront plu"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "irregular participle (conclu)",
              "dimmed": false,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "aurai conclu",
                  "aurons conclu"
                ],
                [
                  "auras conclu",
                  "aurez conclu"
                ],
                [
                  "aura conclu",
                  "auront conclu"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (-u participle)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "aurai rompu",
                  "aurons rompu"
                ],
                [
                  "auras rompu",
                  "aurez rompu"
                ],
                [
                  "aura rompu",
                  "auront rompu"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "aurai vendu",
                "aurons vendu"
              ],
              [
                "auras vendu",
                "aurez vendu"
              ],
              [
                "aura vendu",
                "auront vendu"
              ]
            ]
          }
        }
      ],
      "description": "Describes actions that will be completed before a specific future point. 'I will have walked 10 miles by then.'"
    },
    "anterior": {
      "label": "Past Anterior (Passé antérieur)",
      "icon": "bi-chevron-double-left",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "être + allé (irregular auxiliary)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "fus allé(e)",
                  "fûmes allé(e)s"
                ],
                [
                  "fus allé(e)",
                  "fûtes allé(e)s"
                ],
                [
                  "fut allé(e)",
                  "furent allé(e)s"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "eus espéré",
                  "eûmes espéré"
                ],
                [
                  "eus espéré",
                  "eûtes espéré"
                ],
                [
                  "eut espéré",
                  "eurent espéré"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "eus mené",
                  "eûmes mené"
                ],
                [
                  "eus mené",
                  "eûtes mené"
                ],
                [
                  "eut mené",
                  "eurent mené"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "eus appelé",
                  "eûmes appelé"
                ],
                [
                  "eus appelé",
                  "eûtes appelé"
                ],
                [
                  "eut appelé",
                  "eurent appelé"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "eus envoyé",
                  "eûmes envoyé"
                ],
                [
                  "eus envoyé",
                  "eûtes envoyé"
                ],
                [
                  "eut envoyé",
                  "eurent envoyé"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "eus payé",
                  "eûmes payé"
                ],
                [
                  "eus payé",
                  "eûtes payé"
                ],
                [
                  "eut payé",
                  "eurent payé"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "eus mangé",
                  "eûmes mangé"
                ],
                [
                  "eus mangé",
                  "eûtes mangé"
                ],
                [
                  "eut mangé",
                  "eurent mangé"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "eus commencé",
                  "eûmes commencé"
                ],
                [
                  "eus commencé",
                  "eûtes commencé"
                ],
                [
                  "eut commencé",
                  "eurent commencé"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "eus parlé",
                "eûmes parlé"
              ],
              [
                "eus parlé",
                "eûtes parlé"
              ],
              [
                "eut parlé",
                "eurent parlé"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular participle (ouvert)",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "eus ouvert",
                  "eûmes ouvert"
                ],
                [
                  "eus ouvert",
                  "eûtes ouvert"
                ],
                [
                  "eut ouvert",
                  "eurent ouvert"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "eus dormi",
                  "eûmes dormi"
                ],
                [
                  "eus dormi",
                  "eûtes dormi"
                ],
                [
                  "eut dormi",
                  "eurent dormi"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + venu (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "fus venu(e)",
                  "fûmes venu(e)s"
                ],
                [
                  "fus venu(e)",
                  "fûtes venu(e)s"
                ],
                [
                  "fut venu(e)",
                  "furent venu(e)s"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + mort (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "fus mort(e)",
                  "fûmes mort(e)s"
                ],
                [
                  "fus mort(e)",
                  "fûtes mort(e)s"
                ],
                [
                  "fut mort(e)",
                  "furent mort(e)s"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular participle (acquis)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "eus acquis",
                  "eûmes acquis"
                ],
                [
                  "eus acquis",
                  "eûtes acquis"
                ],
                [
                  "eut acquis",
                  "eurent acquis"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "eus fui",
                  "eûmes fui"
                ],
                [
                  "eus fui",
                  "eûtes fui"
                ],
                [
                  "eut fui",
                  "eurent fui"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular participle (couru)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "eus couru",
                  "eûmes couru"
                ],
                [
                  "eus couru",
                  "eûtes couru"
                ],
                [
                  "eut couru",
                  "eurent couru"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "eus haï",
                  "eûmes haï"
                ],
                [
                  "eus haï",
                  "eûtes haï"
                ],
                [
                  "eut haï",
                  "eurent haï"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "eus bouilli",
                  "eûmes bouilli"
                ],
                [
                  "eus bouilli",
                  "eûtes bouilli"
                ],
                [
                  "eut bouilli",
                  "eurent bouilli"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "irregular participle (failli)",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "eus failli",
                  "eûmes failli"
                ],
                [
                  "eus failli",
                  "eûtes failli"
                ],
                [
                  "eut failli",
                  "eurent failli"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no compound past forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé composé forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "eus fini",
                "eûmes fini"
              ],
              [
                "eus fini",
                "eûtes fini"
              ],
              [
                "eut fini",
                "eurent fini"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular participle (connu)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "eus connu",
                  "eûmes connu"
                ],
                [
                  "eus connu",
                  "eûtes connu"
                ],
                [
                  "eut connu",
                  "eurent connu"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (pris)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "eus pris",
                  "eûmes pris"
                ],
                [
                  "eus pris",
                  "eûtes pris"
                ],
                [
                  "eut pris",
                  "eurent pris"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (mis)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "eus mis",
                  "eûmes mis"
                ],
                [
                  "eus mis",
                  "eûtes mis"
                ],
                [
                  "eut mis",
                  "eurent mis"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular participle (construit)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "eus construit",
                  "eûmes construit"
                ],
                [
                  "eus construit",
                  "eûtes construit"
                ],
                [
                  "eut construit",
                  "eurent construit"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular participle (peint)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "eus peint",
                  "eûmes peint"
                ],
                [
                  "eus peint",
                  "eûtes peint"
                ],
                [
                  "eut peint",
                  "eurent peint"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular participle (lu)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "eus lu",
                  "eûmes lu"
                ],
                [
                  "eus lu",
                  "eûtes lu"
                ],
                [
                  "eut lu",
                  "eurent lu"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular participle (vécu)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "eus vécu",
                  "eûmes vécu"
                ],
                [
                  "eus vécu",
                  "eûtes vécu"
                ],
                [
                  "eut vécu",
                  "eurent vécu"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular participle (résolu)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "eus résolu",
                  "eûmes résolu"
                ],
                [
                  "eus résolu",
                  "eûtes résolu"
                ],
                [
                  "eut résolu",
                  "eurent résolu"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular participle (bu)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "eus bu",
                  "eûmes bu"
                ],
                [
                  "eus bu",
                  "eûtes bu"
                ],
                [
                  "eut bu",
                  "eurent bu"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular participle (plu)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "eus plu",
                  "eûmes plu"
                ],
                [
                  "eus plu",
                  "eûtes plu"
                ],
                [
                  "eut plu",
                  "eurent plu"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "irregular participle (conclu)",
              "dimmed": false,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "eus conclu",
                  "eûmes conclu"
                ],
                [
                  "eus conclu",
                  "eûtes conclu"
                ],
                [
                  "eut conclu",
                  "eurent conclu"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (-u participle)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "eus rompu",
                  "eûmes rompu"
                ],
                [
                  "eus rompu",
                  "eûtes rompu"
                ],
                [
                  "eut rompu",
                  "eurent rompu"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "eus vendu",
                "eûmes vendu"
              ],
              [
                "eus vendu",
                "eûtes vendu"
              ],
              [
                "eut vendu",
                "eurent vendu"
              ]
            ]
          }
        }
      ],
      "description": "Literary tense describing an action completed immediately before another past action. Rare in modern usage; found in formal writing after 'when', 'as soon as', etc."
    },
    "past": {
      "label": "Simple Past (Passé simple)",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "regular",
              "dimmed": true,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "allai",
                  "allâmes"
                ],
                [
                  "allas",
                  "allâtes"
                ],
                [
                  "alla",
                  "allèrent"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "espérai",
                  "espérâmes"
                ],
                [
                  "espéras",
                  "espérâtes"
                ],
                [
                  "espéra",
                  "espérèrent"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "menai",
                  "menâmes"
                ],
                [
                  "menas",
                  "menâtes"
                ],
                [
                  "mena",
                  "menèrent"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "appelai",
                  "appelâmes"
                ],
                [
                  "appelas",
                  "appelâtes"
                ],
                [
                  "appela",
                  "appelèrent"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "envoyai",
                  "envoyâmes"
                ],
                [
                  "envoyas",
                  "envoyâtes"
                ],
                [
                  "envoya",
                  "envoyèrent"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "payai",
                  "payâmes"
                ],
                [
                  "payas",
                  "payâtes"
                ],
                [
                  "paya",
                  "payèrent"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "mangeai",
                  "mangeâmes"
                ],
                [
                  "mangeas",
                  "mangeâtes"
                ],
                [
                  "mangea",
                  "mangèrent"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "commençai",
                  "commençâmes"
                ],
                [
                  "commenças",
                  "commençâtes"
                ],
                [
                  "commença",
                  "commencèrent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "parlai",
                "parlâmes"
              ],
              [
                "parlas",
                "parlâtes"
              ],
              [
                "parla",
                "parlèrent"
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
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ouvris",
                  "ouvrîmes"
                ],
                [
                  "ouvris",
                  "ouvrîtes"
                ],
                [
                  "ouvrit",
                  "ouvrirent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormis",
                  "dormîmes"
                ],
                [
                  "dormis",
                  "dormîtes"
                ],
                [
                  "dormit",
                  "dormirent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (ven- → vin-)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "vins",
                  "vînmes"
                ],
                [
                  "vins",
                  "vîntes"
                ],
                [
                  "vint",
                  "vinrent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular -us endings (mour-)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "mourus",
                  "mourûmes"
                ],
                [
                  "mourus",
                  "mourûtes"
                ],
                [
                  "mourut",
                  "moururent"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular stem (acquér- → acqu-)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "acquis",
                  "acquîmes"
                ],
                [
                  "acquis",
                  "acquîtes"
                ],
                [
                  "acquit",
                  "acquirent"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "fuis",
                  "fuîmes"
                ],
                [
                  "fuis",
                  "fuîtes"
                ],
                [
                  "fuit",
                  "fuirent"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular -us endings (cour-)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "courus",
                  "courûmes"
                ],
                [
                  "courus",
                  "courûtes"
                ],
                [
                  "courut",
                  "coururent"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "haïs",
                  "haïmes"
                ],
                [
                  "haïs",
                  "haïtes"
                ],
                [
                  "haït",
                  "haïrent"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "bouillis",
                  "bouillîmes"
                ],
                [
                  "bouillis",
                  "bouillîtes"
                ],
                [
                  "bouillit",
                  "bouillirent"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "faillis",
                  "faillîmes"
                ],
                [
                  "faillis",
                  "faillîtes"
                ],
                [
                  "faillit",
                  "faillirent"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no passé simple forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé simple forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "finis",
                "finîmes"
              ],
              [
                "finis",
                "finîtes"
              ],
              [
                "finit",
                "finirent"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular stem (connaî- → conn-)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "connus",
                  "connûmes"
                ],
                [
                  "connus",
                  "connûtes"
                ],
                [
                  "connut",
                  "connurent"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular stem (prend- → pr-)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "pris",
                  "prîmes"
                ],
                [
                  "pris",
                  "prîtes"
                ],
                [
                  "prit",
                  "prirent"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular stem (mett- → m-)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "mis",
                  "mîmes"
                ],
                [
                  "mis",
                  "mîtes"
                ],
                [
                  "mit",
                  "mirent"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular stem (construi- → construis-)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "construisis",
                  "construisîmes"
                ],
                [
                  "construisis",
                  "construisîtes"
                ],
                [
                  "construisit",
                  "construisirent"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular stem (peind- → peign-)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "peignis",
                  "peignîmes"
                ],
                [
                  "peignis",
                  "peignîtes"
                ],
                [
                  "peignit",
                  "peignirent"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular stem (li- → l-)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "lus",
                  "lûmes"
                ],
                [
                  "lus",
                  "lûtes"
                ],
                [
                  "lut",
                  "lurent"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular stem (viv- → véc-)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "vécus",
                  "vécûmes"
                ],
                [
                  "vécus",
                  "vécûtes"
                ],
                [
                  "vécut",
                  "vécurent"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular stem (résoud- → résol-)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "résolus",
                  "résolûmes"
                ],
                [
                  "résolus",
                  "résolûtes"
                ],
                [
                  "résolut",
                  "résolurent"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular stem (boi- → b-)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "bus",
                  "bûmes"
                ],
                [
                  "bus",
                  "bûtes"
                ],
                [
                  "but",
                  "burent"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular stem (plai- → pl-)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "plus",
                  "plûmes"
                ],
                [
                  "plus",
                  "plûtes"
                ],
                [
                  "plut",
                  "plurent"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "regular",
              "dimmed": true,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "conclus",
                  "conclûmes"
                ],
                [
                  "conclus",
                  "conclûtes"
                ],
                [
                  "conclut",
                  "conclurent"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "rompis",
                  "rompîmes"
                ],
                [
                  "rompis",
                  "rompîtes"
                ],
                [
                  "rompit",
                  "rompirent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "vendis",
                "vendîmes"
              ],
              [
                "vendis",
                "vendîtes"
              ],
              [
                "vendit",
                "vendirent"
              ]
            ]
          }
        }
      ],
      "description": "Describes completed actions in the past.",
      "extra": "<strong>Literary tense only</strong><br><br>The passé simple is virtually never used in spoken French. In conversation and informal writing, the <em>passé composé</em> serves as the default past tense instead.<br><br>You will encounter the passé simple in:<br>• Novels and literature<br>• Formal historical writing<br>• Fairy tales (\"il fut une fois...\")<br>• News articles (occasionally)<br><br>For everyday communication, use the passé composé."
    },
    "conditional": {
      "label": "Conditional (Conditionnel présent)",
      "icon": "bi-question-circle",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "irregular stem (ir-)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "irais",
                  "irions"
                ],
                [
                  "irais",
                  "iriez"
                ],
                [
                  "irait",
                  "iraient"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "espérerais",
                  "espérerions"
                ],
                [
                  "espérerais",
                  "espéreriez"
                ],
                [
                  "espérerait",
                  "espéreraient"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "mènerais",
                  "mènerions"
                ],
                [
                  "mènerais",
                  "mèneriez"
                ],
                [
                  "mènerait",
                  "mèneraient"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "consonant doubling (appell-)",
              "dimmed": false,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "appellerais",
                  "appellerions"
                ],
                [
                  "appellerais",
                  "appelleriez"
                ],
                [
                  "appellerait",
                  "appelleraient"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "stem change (y → i)",
              "dimmed": false,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "enverrais",
                  "enverrions"
                ],
                [
                  "enverrais",
                  "enverriez"
                ],
                [
                  "enverrait",
                  "enverraient"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "paierais / payerais",
                  "paierions / payerions"
                ],
                [
                  "paierais / payerais",
                  "paieriez / payeriez"
                ],
                [
                  "paierait / payerait",
                  "paieraient / payeraient"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "mangerais",
                  "mangerions"
                ],
                [
                  "mangerais",
                  "mangeriez"
                ],
                [
                  "mangerait",
                  "mangeraient"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "commencerais",
                  "commencerions"
                ],
                [
                  "commencerais",
                  "commenceriez"
                ],
                [
                  "commencerait",
                  "commenceraient"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "parlerais",
                "parlerions"
              ],
              [
                "parlerais",
                "parleriez"
              ],
              [
                "parlerait",
                "parleraient"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular stem (ouvrir → ouvrir-)",
              "dimmed": true,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ouvrirais",
                  "ouvririons"
                ],
                [
                  "ouvrirais",
                  "ouvririez"
                ],
                [
                  "ouvrirait",
                  "ouvriraient"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormirais",
                  "dormirions"
                ],
                [
                  "dormirais",
                  "dormiriez"
                ],
                [
                  "dormirait",
                  "dormiraient"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (ven- → viendr-)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "viendrais",
                  "viendrions"
                ],
                [
                  "viendrais",
                  "viendriez"
                ],
                [
                  "viendrait",
                  "viendraient"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (mour- → mourr-)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "mourrais",
                  "mourrions"
                ],
                [
                  "mourrais",
                  "mourriez"
                ],
                [
                  "mourrait",
                  "mourraient"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular stem (acquér- → acquerr-)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "acquerrais",
                  "acquerrions"
                ],
                [
                  "acquerrais",
                  "acquerriez"
                ],
                [
                  "acquerrait",
                  "acquerraient"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "fuirais",
                  "fuirions"
                ],
                [
                  "fuirais",
                  "fuiriez"
                ],
                [
                  "fuirait",
                  "fuiraient"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular stem (cour- → courr-)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "courrais",
                  "courrions"
                ],
                [
                  "courrais",
                  "courriez"
                ],
                [
                  "courrait",
                  "courraient"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "haïrais",
                  "haïrions"
                ],
                [
                  "haïrais",
                  "haïriez"
                ],
                [
                  "haïrait",
                  "haïraient"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "bouillirais",
                  "bouillirions"
                ],
                [
                  "bouillirais",
                  "bouilliriez"
                ],
                [
                  "bouillirait",
                  "bouilliraient"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "faillirais",
                  "faillirions"
                ],
                [
                  "faillirais",
                  "failliriez"
                ],
                [
                  "faillirait",
                  "failliraient"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no future forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No future forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "finirais",
                "finirions"
              ],
              [
                "finirais",
                "finiriez"
              ],
              [
                "finirait",
                "finiraient"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "regular (connaîtr-)",
              "dimmed": true,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "connaîtrais",
                  "connaîtrions"
                ],
                [
                  "connaîtrais",
                  "connaîtriez"
                ],
                [
                  "connaîtrait",
                  "connaîtraient"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "regular (prendr-)",
              "dimmed": true,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "prendrais",
                  "prendrions"
                ],
                [
                  "prendrais",
                  "prendriez"
                ],
                [
                  "prendrait",
                  "prendraient"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "regular (mettr-)",
              "dimmed": true,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "mettrais",
                  "mettrions"
                ],
                [
                  "mettrais",
                  "mettriez"
                ],
                [
                  "mettrait",
                  "mettraient"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "regular (construir-)",
              "dimmed": true,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "construirais",
                  "construirions"
                ],
                [
                  "construirais",
                  "construiriez"
                ],
                [
                  "construirait",
                  "construiraient"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "regular (peindr-)",
              "dimmed": true,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "peindrais",
                  "peindrions"
                ],
                [
                  "peindrais",
                  "peindriez"
                ],
                [
                  "peindrait",
                  "peindraient"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "regular (lir-)",
              "dimmed": true,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "lirais",
                  "lirions"
                ],
                [
                  "lirais",
                  "liriez"
                ],
                [
                  "lirait",
                  "liraient"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "regular (vivr-)",
              "dimmed": true,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "vivrais",
                  "vivrions"
                ],
                [
                  "vivrais",
                  "vivriez"
                ],
                [
                  "vivrait",
                  "vivraient"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "regular (résoudr-)",
              "dimmed": true,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "résoudrais",
                  "résoudrions"
                ],
                [
                  "résoudrais",
                  "résoudriez"
                ],
                [
                  "résoudrait",
                  "résoudraient"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "regular (boir-)",
              "dimmed": true,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "boirais",
                  "boirions"
                ],
                [
                  "boirais",
                  "boiriez"
                ],
                [
                  "boirait",
                  "boiraient"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "regular (plair-)",
              "dimmed": true,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "plairais",
                  "plairions"
                ],
                [
                  "plairais",
                  "plairiez"
                ],
                [
                  "plairait",
                  "plairaient"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "regular (conclur-)",
              "dimmed": true,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "conclurais",
                  "conclurions"
                ],
                [
                  "conclurais",
                  "concluriez"
                ],
                [
                  "conclurait",
                  "concluraient"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (rompr-)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "romprais",
                  "romprions"
                ],
                [
                  "romprais",
                  "rompriez"
                ],
                [
                  "romprait",
                  "rompraient"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "vendrais",
                "vendrions"
              ],
              [
                "vendrais",
                "vendriez"
              ],
              [
                "vendrait",
                "vendraient"
              ]
            ]
          }
        }
      ],
      "description": "Describes what would happen under a hypothetical condition. Used for polite requests and imagined scenarios."
    },
    "conditional_perfect": {
      "label": "Conditional Perfect (Conditionnel passé)",
      "icon": "bi-question-circle-fill",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "être + allé (irregular auxiliary)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "serais allé(e)",
                  "serions allé(e)s"
                ],
                [
                  "serais allé(e)",
                  "seriez allé(e)s"
                ],
                [
                  "serait allé(e)",
                  "seraient allé(e)s"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "aurais espéré",
                  "aurions espéré"
                ],
                [
                  "aurais espéré",
                  "auriez espéré"
                ],
                [
                  "aurait espéré",
                  "auraient espéré"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "aurais mené",
                  "aurions mené"
                ],
                [
                  "aurais mené",
                  "auriez mené"
                ],
                [
                  "aurait mené",
                  "auraient mené"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "aurais appelé",
                  "aurions appelé"
                ],
                [
                  "aurais appelé",
                  "auriez appelé"
                ],
                [
                  "aurait appelé",
                  "auraient appelé"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "aurais envoyé",
                  "aurions envoyé"
                ],
                [
                  "aurais envoyé",
                  "auriez envoyé"
                ],
                [
                  "aurait envoyé",
                  "auraient envoyé"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "aurais payé",
                  "aurions payé"
                ],
                [
                  "aurais payé",
                  "auriez payé"
                ],
                [
                  "aurait payé",
                  "auraient payé"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "aurais mangé",
                  "aurions mangé"
                ],
                [
                  "aurais mangé",
                  "auriez mangé"
                ],
                [
                  "aurait mangé",
                  "auraient mangé"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "aurais commencé",
                  "aurions commencé"
                ],
                [
                  "aurais commencé",
                  "auriez commencé"
                ],
                [
                  "aurait commencé",
                  "auraient commencé"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "aurais parlé",
                "aurions parlé"
              ],
              [
                "aurais parlé",
                "auriez parlé"
              ],
              [
                "aurait parlé",
                "auraient parlé"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular participle (ouvert)",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "aurais ouvert",
                  "aurions ouvert"
                ],
                [
                  "aurais ouvert",
                  "auriez ouvert"
                ],
                [
                  "aurait ouvert",
                  "auraient ouvert"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "aurais dormi",
                  "aurions dormi"
                ],
                [
                  "aurais dormi",
                  "auriez dormi"
                ],
                [
                  "aurait dormi",
                  "auraient dormi"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + venu (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "serais venu(e)",
                  "serions venu(e)s"
                ],
                [
                  "serais venu(e)",
                  "seriez venu(e)s"
                ],
                [
                  "serait venu(e)",
                  "seraient venu(e)s"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + mort (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "serais mort(e)",
                  "serions mort(e)s"
                ],
                [
                  "serais mort(e)",
                  "seriez mort(e)s"
                ],
                [
                  "serait mort(e)",
                  "seraient mort(e)s"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular participle (acquis)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "aurais acquis",
                  "aurions acquis"
                ],
                [
                  "aurais acquis",
                  "auriez acquis"
                ],
                [
                  "aurait acquis",
                  "auraient acquis"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "aurais fui",
                  "aurions fui"
                ],
                [
                  "aurais fui",
                  "auriez fui"
                ],
                [
                  "aurait fui",
                  "auraient fui"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular participle (couru)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "aurais couru",
                  "aurions couru"
                ],
                [
                  "aurais couru",
                  "auriez couru"
                ],
                [
                  "aurait couru",
                  "auraient couru"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "aurais haï",
                  "aurions haï"
                ],
                [
                  "aurais haï",
                  "auriez haï"
                ],
                [
                  "aurait haï",
                  "auraient haï"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "aurais bouilli",
                  "aurions bouilli"
                ],
                [
                  "aurais bouilli",
                  "auriez bouilli"
                ],
                [
                  "aurait bouilli",
                  "auraient bouilli"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "irregular participle (failli)",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "aurais failli",
                  "aurions failli"
                ],
                [
                  "aurais failli",
                  "auriez failli"
                ],
                [
                  "aurait failli",
                  "auraient failli"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no compound past forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé composé forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "aurais fini",
                "aurions fini"
              ],
              [
                "aurais fini",
                "auriez fini"
              ],
              [
                "aurait fini",
                "auraient fini"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular participle (connu)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "aurais connu",
                  "aurions connu"
                ],
                [
                  "aurais connu",
                  "auriez connu"
                ],
                [
                  "aurait connu",
                  "auraient connu"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (pris)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "aurais pris",
                  "aurions pris"
                ],
                [
                  "aurais pris",
                  "auriez pris"
                ],
                [
                  "aurait pris",
                  "auraient pris"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (mis)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "aurais mis",
                  "aurions mis"
                ],
                [
                  "aurais mis",
                  "auriez mis"
                ],
                [
                  "aurait mis",
                  "auraient mis"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular participle (construit)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "aurais construit",
                  "aurions construit"
                ],
                [
                  "aurais construit",
                  "auriez construit"
                ],
                [
                  "aurait construit",
                  "auraient construit"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular participle (peint)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "aurais peint",
                  "aurions peint"
                ],
                [
                  "aurais peint",
                  "auriez peint"
                ],
                [
                  "aurait peint",
                  "auraient peint"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular participle (lu)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "aurais lu",
                  "aurions lu"
                ],
                [
                  "aurais lu",
                  "auriez lu"
                ],
                [
                  "aurait lu",
                  "auraient lu"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular participle (vécu)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "aurais vécu",
                  "aurions vécu"
                ],
                [
                  "aurais vécu",
                  "auriez vécu"
                ],
                [
                  "aurait vécu",
                  "auraient vécu"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular participle (résolu)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "aurais résolu",
                  "aurions résolu"
                ],
                [
                  "aurais résolu",
                  "auriez résolu"
                ],
                [
                  "aurait résolu",
                  "auraient résolu"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular participle (bu)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "aurais bu",
                  "aurions bu"
                ],
                [
                  "aurais bu",
                  "auriez bu"
                ],
                [
                  "aurait bu",
                  "auraient bu"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular participle (plu)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "aurais plu",
                  "aurions plu"
                ],
                [
                  "aurais plu",
                  "auriez plu"
                ],
                [
                  "aurait plu",
                  "auraient plu"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "irregular participle (conclu)",
              "dimmed": false,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "aurais conclu",
                  "aurions conclu"
                ],
                [
                  "aurais conclu",
                  "auriez conclu"
                ],
                [
                  "aurait conclu",
                  "auraient conclu"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (-u participle)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "aurais rompu",
                  "aurions rompu"
                ],
                [
                  "aurais rompu",
                  "auriez rompu"
                ],
                [
                  "aurait rompu",
                  "auraient rompu"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "aurais vendu",
                "aurions vendu"
              ],
              [
                "aurais vendu",
                "auriez vendu"
              ],
              [
                "aurait vendu",
                "auraient vendu"
              ]
            ]
          }
        }
      ],
      "description": "Describes what would have happened if conditions had been different. Expresses regret or unrealized possibilities."
    },
    "subj_present": {
      "label": "Present (Subjonctif présent)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "irregular stem (aill-)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "aille",
                  "allions"
                ],
                [
                  "ailles",
                  "alliez"
                ],
                [
                  "aille",
                  "aillent"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "espère",
                  "espérions"
                ],
                [
                  "espères",
                  "espériez"
                ],
                [
                  "espère",
                  "espèrent"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "mène",
                  "menions"
                ],
                [
                  "mènes",
                  "meniez"
                ],
                [
                  "mène",
                  "mènent"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "appelle",
                  "appelions"
                ],
                [
                  "appelles",
                  "appeliez"
                ],
                [
                  "appelle",
                  "appellent"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "envoie",
                  "envoyions"
                ],
                [
                  "envoies",
                  "envoyiez"
                ],
                [
                  "envoie",
                  "envoient"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "paie / paye",
                  "payions"
                ],
                [
                  "paies / payes",
                  "payiez"
                ],
                [
                  "paie / paye",
                  "paient / payent"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "mange",
                  "mangions"
                ],
                [
                  "manges",
                  "mangiez"
                ],
                [
                  "mange",
                  "mangent"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "commence",
                  "commencions"
                ],
                [
                  "commences",
                  "commenciez"
                ],
                [
                  "commence",
                  "commencent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "parle",
                "parlions"
              ],
              [
                "parles",
                "parliez"
              ],
              [
                "parle",
                "parlent"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ouvre",
                  "ouvrions"
                ],
                [
                  "ouvres",
                  "ouvriez"
                ],
                [
                  "ouvre",
                  "ouvrent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dorme",
                  "dormions"
                ],
                [
                  "dormes",
                  "dormiez"
                ],
                [
                  "dorme",
                  "dorment"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (vienn-/ven-)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "vienne",
                  "venions"
                ],
                [
                  "viennes",
                  "veniez"
                ],
                [
                  "vienne",
                  "viennent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (meur-/mour-)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "meure",
                  "mourions"
                ],
                [
                  "meures",
                  "mouriez"
                ],
                [
                  "meure",
                  "meurent"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular stem (acquièr-)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "acquière",
                  "acquérions"
                ],
                [
                  "acquières",
                  "acquériez"
                ],
                [
                  "acquière",
                  "acquièrent"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "fuie",
                  "fuyions"
                ],
                [
                  "fuies",
                  "fuyiez"
                ],
                [
                  "fuie",
                  "fuient"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "coure",
                  "courions"
                ],
                [
                  "coures",
                  "couriez"
                ],
                [
                  "coure",
                  "courent"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "haïsse",
                  "haïssions"
                ],
                [
                  "haïsses",
                  "haïssiez"
                ],
                [
                  "haïsse",
                  "haïssent"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "bouille",
                  "bouillions"
                ],
                [
                  "bouilles",
                  "bouilliez"
                ],
                [
                  "bouille",
                  "bouillent"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "regular subjunctive",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "faille",
                  "faillions"
                ],
                [
                  "failles",
                  "failliez"
                ],
                [
                  "faille",
                  "faillent"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no subjunctive forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No subjunctive forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "finisse",
                "finissions"
              ],
              [
                "finisses",
                "finissiez"
              ],
              [
                "finisse",
                "finissent"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "regular subjunctive (connaiss-)",
              "dimmed": true,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "connaisse",
                  "connaissions"
                ],
                [
                  "connaisses",
                  "connaissiez"
                ],
                [
                  "connaisse",
                  "connaissent"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular stem (prenn-/pren-)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "prenne",
                  "prenions"
                ],
                [
                  "prennes",
                  "preniez"
                ],
                [
                  "prenne",
                  "prennent"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "regular subjunctive (mett-)",
              "dimmed": true,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "mette",
                  "mettions"
                ],
                [
                  "mettes",
                  "mettiez"
                ],
                [
                  "mette",
                  "mettent"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "regular subjunctive (construis-)",
              "dimmed": true,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "construise",
                  "construisions"
                ],
                [
                  "construises",
                  "construisiez"
                ],
                [
                  "construise",
                  "construisent"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "regular subjunctive (peign-)",
              "dimmed": true,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "peigne",
                  "peignions"
                ],
                [
                  "peignes",
                  "peigniez"
                ],
                [
                  "peigne",
                  "peignent"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "regular subjunctive (lis-)",
              "dimmed": true,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "lise",
                  "lisions"
                ],
                [
                  "lises",
                  "lisiez"
                ],
                [
                  "lise",
                  "lisent"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "regular subjunctive (viv-)",
              "dimmed": true,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "vive",
                  "vivions"
                ],
                [
                  "vives",
                  "viviez"
                ],
                [
                  "vive",
                  "vivent"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "regular subjunctive (résolv-)",
              "dimmed": true,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "résolve",
                  "résolvions"
                ],
                [
                  "résolves",
                  "résolviez"
                ],
                [
                  "résolve",
                  "résolvent"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular stem (boiv-/buv-)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "boive",
                  "buvions"
                ],
                [
                  "boives",
                  "buviez"
                ],
                [
                  "boive",
                  "boivent"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "regular subjunctive (plais-)",
              "dimmed": true,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "plaise",
                  "plaisions"
                ],
                [
                  "plaises",
                  "plaisiez"
                ],
                [
                  "plaise",
                  "plaisent"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "regular subjunctive (conclu-)",
              "dimmed": true,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "conclue",
                  "concluions"
                ],
                [
                  "conclues",
                  "concluiez"
                ],
                [
                  "conclue",
                  "concluent"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular subjunctive (romp-)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "rompe",
                  "rompions"
                ],
                [
                  "rompes",
                  "rompiez"
                ],
                [
                  "rompe",
                  "rompent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "vende",
                "vendions"
              ],
              [
                "vendes",
                "vendiez"
              ],
              [
                "vende",
                "vendent"
              ]
            ]
          }
        }
      ],
      "description": "Expresses wishes, demands, suggestions, or doubts about present or future situations. Often follows 'que' (that).",
      "extra": "<strong>Subjunctive triggers</strong><br><br>The subjunctive is required after certain expressions:<br><br><table class=\"table table-bordered table-sm mb-0\"><thead><tr><th>Category</th><th>Expressions</th></tr></thead><tbody><tr><td>Necessity</td><td>il faut que, il est nécessaire que</td></tr><tr><td>Desire</td><td>je veux que, je souhaite que, je désire que</td></tr><tr><td>Emotion</td><td>je suis content que, je regrette que, il est triste que</td></tr><tr><td>Doubt</td><td>je doute que, il est possible que, il semble que</td></tr><tr><td>Conjunctions</td><td>bien que, pour que, avant que, à moins que, sans que, afin que</td></tr><tr><td>Opinion (negative)</td><td>je ne pense pas que, je ne crois pas que</td></tr></tbody></table>"
    },
    "subj_past": {
      "label": "Past (Subjonctif passé)",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "être + allé (irregular auxiliary)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "sois allé(e)",
                  "soyons allé(e)s"
                ],
                [
                  "sois allé(e)",
                  "soyez allé(e)s"
                ],
                [
                  "soit allé(e)",
                  "soient allé(e)s"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "aie espéré",
                  "ayons espéré"
                ],
                [
                  "aies espéré",
                  "ayez espéré"
                ],
                [
                  "ait espéré",
                  "aient espéré"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "aie mené",
                  "ayons mené"
                ],
                [
                  "aies mené",
                  "ayez mené"
                ],
                [
                  "ait mené",
                  "aient mené"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "aie appelé",
                  "ayons appelé"
                ],
                [
                  "aies appelé",
                  "ayez appelé"
                ],
                [
                  "ait appelé",
                  "aient appelé"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "aie envoyé",
                  "ayons envoyé"
                ],
                [
                  "aies envoyé",
                  "ayez envoyé"
                ],
                [
                  "ait envoyé",
                  "aient envoyé"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "aie payé",
                  "ayons payé"
                ],
                [
                  "aies payé",
                  "ayez payé"
                ],
                [
                  "ait payé",
                  "aient payé"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "aie mangé",
                  "ayons mangé"
                ],
                [
                  "aies mangé",
                  "ayez mangé"
                ],
                [
                  "ait mangé",
                  "aient mangé"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "aie commencé",
                  "ayons commencé"
                ],
                [
                  "aies commencé",
                  "ayez commencé"
                ],
                [
                  "ait commencé",
                  "aient commencé"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "aie parlé",
                "ayons parlé"
              ],
              [
                "aies parlé",
                "ayez parlé"
              ],
              [
                "ait parlé",
                "aient parlé"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular participle (ouvert)",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "aie ouvert",
                  "ayons ouvert"
                ],
                [
                  "aies ouvert",
                  "ayez ouvert"
                ],
                [
                  "ait ouvert",
                  "aient ouvert"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "aie dormi",
                  "ayons dormi"
                ],
                [
                  "aies dormi",
                  "ayez dormi"
                ],
                [
                  "ait dormi",
                  "aient dormi"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + venu (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "sois venu(e)",
                  "soyons venu(e)s"
                ],
                [
                  "sois venu(e)",
                  "soyez venu(e)s"
                ],
                [
                  "soit venu(e)",
                  "soient venu(e)s"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + mort (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "sois mort(e)",
                  "soyons mort(e)s"
                ],
                [
                  "sois mort(e)",
                  "soyez mort(e)s"
                ],
                [
                  "soit mort(e)",
                  "soient mort(e)s"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular participle (acquis)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "aie acquis",
                  "ayons acquis"
                ],
                [
                  "aies acquis",
                  "ayez acquis"
                ],
                [
                  "ait acquis",
                  "aient acquis"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "aie fui",
                  "ayons fui"
                ],
                [
                  "aies fui",
                  "ayez fui"
                ],
                [
                  "ait fui",
                  "aient fui"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular participle (couru)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "aie couru",
                  "ayons couru"
                ],
                [
                  "aies couru",
                  "ayez couru"
                ],
                [
                  "ait couru",
                  "aient couru"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "aie haï",
                  "ayons haï"
                ],
                [
                  "aies haï",
                  "ayez haï"
                ],
                [
                  "ait haï",
                  "aient haï"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "aie bouilli",
                  "ayons bouilli"
                ],
                [
                  "aies bouilli",
                  "ayez bouilli"
                ],
                [
                  "ait bouilli",
                  "aient bouilli"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "irregular participle (failli)",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "aie failli",
                  "ayons failli"
                ],
                [
                  "aies failli",
                  "ayez failli"
                ],
                [
                  "ait failli",
                  "aient failli"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no compound past forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé composé forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "aie fini",
                "ayons fini"
              ],
              [
                "aies fini",
                "ayez fini"
              ],
              [
                "ait fini",
                "aient fini"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular participle (connu)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "aie connu",
                  "ayons connu"
                ],
                [
                  "aies connu",
                  "ayez connu"
                ],
                [
                  "ait connu",
                  "aient connu"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (pris)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "aie pris",
                  "ayons pris"
                ],
                [
                  "aies pris",
                  "ayez pris"
                ],
                [
                  "ait pris",
                  "aient pris"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (mis)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "aie mis",
                  "ayons mis"
                ],
                [
                  "aies mis",
                  "ayez mis"
                ],
                [
                  "ait mis",
                  "aient mis"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular participle (construit)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "aie construit",
                  "ayons construit"
                ],
                [
                  "aies construit",
                  "ayez construit"
                ],
                [
                  "ait construit",
                  "aient construit"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular participle (peint)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "aie peint",
                  "ayons peint"
                ],
                [
                  "aies peint",
                  "ayez peint"
                ],
                [
                  "ait peint",
                  "aient peint"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular participle (lu)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "aie lu",
                  "ayons lu"
                ],
                [
                  "aies lu",
                  "ayez lu"
                ],
                [
                  "ait lu",
                  "aient lu"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular participle (vécu)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "aie vécu",
                  "ayons vécu"
                ],
                [
                  "aies vécu",
                  "ayez vécu"
                ],
                [
                  "ait vécu",
                  "aient vécu"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular participle (résolu)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "aie résolu",
                  "ayons résolu"
                ],
                [
                  "aies résolu",
                  "ayez résolu"
                ],
                [
                  "ait résolu",
                  "aient résolu"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular participle (bu)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "aie bu",
                  "ayons bu"
                ],
                [
                  "aies bu",
                  "ayez bu"
                ],
                [
                  "ait bu",
                  "aient bu"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular participle (plu)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "aie plu",
                  "ayons plu"
                ],
                [
                  "aies plu",
                  "ayez plu"
                ],
                [
                  "ait plu",
                  "aient plu"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "irregular participle (conclu)",
              "dimmed": false,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "aie conclu",
                  "ayons conclu"
                ],
                [
                  "aies conclu",
                  "ayez conclu"
                ],
                [
                  "ait conclu",
                  "aient conclu"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (-u participle)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "aie rompu",
                  "ayons rompu"
                ],
                [
                  "aies rompu",
                  "ayez rompu"
                ],
                [
                  "ait rompu",
                  "aient rompu"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "aie vendu",
                "ayons vendu"
              ],
              [
                "aies vendu",
                "ayez vendu"
              ],
              [
                "ait vendu",
                "aient vendu"
              ]
            ]
          }
        }
      ],
      "description": "Expresses doubt or emotion about completed actions, or hypothetical past situations."
    },
    "subj_imperfect": {
      "label": "Imperfect (Subjonctif imparfait)",
      "icon": "bi-three-dots",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "regular",
              "dimmed": true,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "allasse",
                  "allassions"
                ],
                [
                  "allasses",
                  "allassiez"
                ],
                [
                  "allât",
                  "allassent"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "espérasse",
                  "espérassions"
                ],
                [
                  "espérasses",
                  "espérassiez"
                ],
                [
                  "espérât",
                  "espérassent"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "menasse",
                  "menassions"
                ],
                [
                  "menasses",
                  "menassiez"
                ],
                [
                  "menât",
                  "menassent"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "appelasse",
                  "appelassions"
                ],
                [
                  "appelasses",
                  "appelassiez"
                ],
                [
                  "appelât",
                  "appelassent"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "envoyasse",
                  "envoyassions"
                ],
                [
                  "envoyasses",
                  "envoyassiez"
                ],
                [
                  "envoyât",
                  "envoyassent"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "payasse",
                  "payassions"
                ],
                [
                  "payasses",
                  "payassiez"
                ],
                [
                  "payât",
                  "payassent"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "mangeasse",
                  "mangeassions"
                ],
                [
                  "mangeasses",
                  "mangeassiez"
                ],
                [
                  "mangeât",
                  "mangeassent"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "commençasse",
                  "commençassions"
                ],
                [
                  "commençasses",
                  "commençassiez"
                ],
                [
                  "commençât",
                  "commençassent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "parlasse",
                "parlassions"
              ],
              [
                "parlasses",
                "parlassiez"
              ],
              [
                "parlât",
                "parlassent"
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
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ouvrisse",
                  "ouvrissions"
                ],
                [
                  "ouvrisses",
                  "ouvrissiez"
                ],
                [
                  "ouvrît",
                  "ouvrissent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dormisse",
                  "dormissions"
                ],
                [
                  "dormisses",
                  "dormissiez"
                ],
                [
                  "dormît",
                  "dormissent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular stem (ven- → vin-)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "vinsse",
                  "vinssions"
                ],
                [
                  "vinsses",
                  "vinssiez"
                ],
                [
                  "vînt",
                  "vinssent"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "irregular -us endings (mour-)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "mourusse",
                  "mourussions"
                ],
                [
                  "mourusses",
                  "mourussiez"
                ],
                [
                  "mourût",
                  "mourussent"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular stem (acquér- → acqu-)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "acquisse",
                  "acquissions"
                ],
                [
                  "acquisses",
                  "acquissiez"
                ],
                [
                  "acquît",
                  "acquissent"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "fuisse",
                  "fuissions"
                ],
                [
                  "fuisses",
                  "fuissiez"
                ],
                [
                  "fuît",
                  "fuissent"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular -us endings (cour-)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "courusse",
                  "courussions"
                ],
                [
                  "courusses",
                  "courussiez"
                ],
                [
                  "courût",
                  "courussent"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "haïs",
                  "haïmes"
                ],
                [
                  "haïs",
                  "haïtes"
                ],
                [
                  "haït",
                  "haïrent"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "bouillisse",
                  "bouillissions"
                ],
                [
                  "bouillisses",
                  "bouillissiez"
                ],
                [
                  "bouillît",
                  "bouillissent"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "regular",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "faillisse",
                  "faillissions"
                ],
                [
                  "faillisses",
                  "faillissiez"
                ],
                [
                  "faillît",
                  "faillissent"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no passé simple forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé simple forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "finisse",
                "finissions"
              ],
              [
                "finisses",
                "finissiez"
              ],
              [
                "finît",
                "finissent"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular stem (connaî- → conn-)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "connusse",
                  "connussions"
                ],
                [
                  "connusses",
                  "connussiez"
                ],
                [
                  "connût",
                  "connussent"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular stem (prend- → pr-)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "prisse",
                  "prissions"
                ],
                [
                  "prisses",
                  "prissiez"
                ],
                [
                  "prît",
                  "prissent"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular stem (mett- → m-)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "misse",
                  "missions"
                ],
                [
                  "misses",
                  "missiez"
                ],
                [
                  "mît",
                  "missent"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular stem (construi- → construis-)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "construisisse",
                  "construisissions"
                ],
                [
                  "construisisses",
                  "construisissiez"
                ],
                [
                  "construisît",
                  "construisissent"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular stem (peind- → peign-)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "peignisse",
                  "peignissions"
                ],
                [
                  "peignisses",
                  "peignissiez"
                ],
                [
                  "peignît",
                  "peignissent"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular stem (li- → l-)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "lusse",
                  "lussions"
                ],
                [
                  "lusses",
                  "lussiez"
                ],
                [
                  "lût",
                  "lussent"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular stem (viv- → véc-)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "vécusse",
                  "vécussions"
                ],
                [
                  "vécusses",
                  "vécussiez"
                ],
                [
                  "vécût",
                  "vécussent"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular stem (résoud- → résol-)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "résolusse",
                  "résolussions"
                ],
                [
                  "résolusses",
                  "résolussiez"
                ],
                [
                  "résolût",
                  "résolussent"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular stem (boi- → b-)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "busse",
                  "bussions"
                ],
                [
                  "busses",
                  "bussiez"
                ],
                [
                  "bût",
                  "bussent"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular stem (plai- → pl-)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "plusse",
                  "plussions"
                ],
                [
                  "plusses",
                  "plussiez"
                ],
                [
                  "plût",
                  "plussent"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "regular",
              "dimmed": true,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "conclusse",
                  "conclussions"
                ],
                [
                  "conclusses",
                  "conclussiez"
                ],
                [
                  "conclût",
                  "conclussent"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "rompisse",
                  "rompissions"
                ],
                [
                  "rompisses",
                  "rompissiez"
                ],
                [
                  "rompît",
                  "rompissent"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "vendisse",
                "vendissions"
              ],
              [
                "vendisses",
                "vendissiez"
              ],
              [
                "vendît",
                "vendissent"
              ]
            ]
          }
        }
      ],
      "description": "Expresses hypothetical conditions, wishes about the past, or polite suggestions. Used in 'if' clauses for unlikely scenarios."
    },
    "subj_pluperfect": {
      "label": "Pluperfect (Subjonctif plus-que-parfait)",
      "icon": "bi-check2-all",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "être + allé (irregular auxiliary)",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "fusse allé(e)",
                  "fussions allé(e)s"
                ],
                [
                  "fusses allé(e)",
                  "fussiez allé(e)s"
                ],
                [
                  "fût allé(e)",
                  "fussent allé(e)s"
                ]
              ]
            },
            {
              "name": "é_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "céder, espérer, préférer, répéter, compléter, considérer, exagérer, gérer, libérer, tolérer",
              "example": "espérer (to hope)",
              "conjugations": [
                [
                  "eusse espéré",
                  "eussions espéré"
                ],
                [
                  "eusses espéré",
                  "eussiez espéré"
                ],
                [
                  "eût espéré",
                  "eussent espéré"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "mener, lever, peser, semer, geler, modeler, acheter, haleter, fureter, crever",
              "example": "mener (to lead)",
              "conjugations": [
                [
                  "eusse mené",
                  "eussions mené"
                ],
                [
                  "eusses mené",
                  "eussiez mené"
                ],
                [
                  "eût mené",
                  "eussent mené"
                ]
              ]
            },
            {
              "name": "e_er",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "appeler, rappeler, jeter, rejeter, projeter, feuilleter, épeler, renouveler, ruisseler, chanceler",
              "example": "appeler (to call)",
              "conjugations": [
                [
                  "eusse appelé",
                  "eussions appelé"
                ],
                [
                  "eusses appelé",
                  "eussiez appelé"
                ],
                [
                  "eût appelé",
                  "eussent appelé"
                ]
              ]
            },
            {
              "name": "-oyer/-uyer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "envoyer, employer, nettoyer, tutoyer, vouvoyer, ennuyer, appuyer, essuyer",
              "example": "envoyer (to send)",
              "conjugations": [
                [
                  "eusse envoyé",
                  "eussions envoyé"
                ],
                [
                  "eusses envoyé",
                  "eussiez envoyé"
                ],
                [
                  "eût envoyé",
                  "eussent envoyé"
                ]
              ]
            },
            {
              "name": "-ayer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "payer, essayer, balayer, rayer, délayer, défrayer, effrayer, égayer, relayer, bégayer",
              "example": "payer (to pay)",
              "conjugations": [
                [
                  "eusse payé",
                  "eussions payé"
                ],
                [
                  "eusses payé",
                  "eussiez payé"
                ],
                [
                  "eût payé",
                  "eussent payé"
                ]
              ]
            },
            {
              "name": "-ger",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "manger, voyager, nager, partager, changer, ranger, plonger, déménager, encourager, protéger",
              "example": "manger (to eat)",
              "conjugations": [
                [
                  "eusse mangé",
                  "eussions mangé"
                ],
                [
                  "eusses mangé",
                  "eussiez mangé"
                ],
                [
                  "eût mangé",
                  "eussent mangé"
                ]
              ]
            },
            {
              "name": "-cer",
              "description": "regular (-é participle)",
              "dimmed": true,
              "verbs": "commencer, avancer, annoncer, lancer, placer, remplacer, prononcer, effacer, menacer, forcer",
              "example": "commencer (to begin)",
              "conjugations": [
                [
                  "eusse commencé",
                  "eussions commencé"
                ],
                [
                  "eusses commencé",
                  "eussiez commencé"
                ],
                [
                  "eût commencé",
                  "eussent commencé"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -er",
            "example": "parler (to speak)",
            "conjugations": [
              [
                "eusse parlé",
                "eussions parlé"
              ],
              [
                "eusses parlé",
                "eussiez parlé"
              ],
              [
                "eût parlé",
                "eussent parlé"
              ]
            ]
          }
        },
        {
          "label": "-ir",
          "patterns": [
            {
              "name": "-ir",
              "description": "irregular participle (ouvert)",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, découvrir, recouvrir, rouvrir, entrouvrir, cueillir, accueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "eusse ouvert",
                  "eussions ouvert"
                ],
                [
                  "eusses ouvert",
                  "eussiez ouvert"
                ],
                [
                  "eût ouvert",
                  "eussent ouvert"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "dormir, partir, sortir, sentir, servir, mentir, se repentir, consentir, ressortir, démentir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "eusse dormi",
                  "eussions dormi"
                ],
                [
                  "eusses dormi",
                  "eussiez dormi"
                ],
                [
                  "eût dormi",
                  "eussent dormi"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + venu (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "venir, tenir, devenir, revenir, obtenir, maintenir, soutenir, retenir, appartenir, convenir",
              "example": "venir (to come)",
              "conjugations": [
                [
                  "fusse venu(e)",
                  "fussions venu(e)s"
                ],
                [
                  "fusses venu(e)",
                  "fussiez venu(e)s"
                ],
                [
                  "fût venu(e)",
                  "fussent venu(e)s"
                ]
              ]
            },
            {
              "name": "-ir",
              "description": "être + mort (irregular auxiliary + participle)",
              "dimmed": false,
              "verbs": "mourir",
              "example": "mourir (to die)",
              "conjugations": [
                [
                  "fusse mort(e)",
                  "fussions mort(e)s"
                ],
                [
                  "fusses mort(e)",
                  "fussiez mort(e)s"
                ],
                [
                  "fût mort(e)",
                  "fussent mort(e)s"
                ]
              ]
            },
            {
              "name": "-érir",
              "description": "irregular participle (acquis)",
              "dimmed": false,
              "verbs": "acquérir, conquérir, requérir",
              "example": "acquérir (to acquire)",
              "conjugations": [
                [
                  "eusse acquis",
                  "eussions acquis"
                ],
                [
                  "eusses acquis",
                  "eussiez acquis"
                ],
                [
                  "eût acquis",
                  "eussent acquis"
                ]
              ]
            },
            {
              "name": "-uir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "fuir, s'enfuir",
              "example": "fuir (to flee)",
              "conjugations": [
                [
                  "eusse fui",
                  "eussions fui"
                ],
                [
                  "eusses fui",
                  "eussiez fui"
                ],
                [
                  "eût fui",
                  "eussent fui"
                ]
              ]
            },
            {
              "name": "-rir",
              "description": "irregular participle (couru)",
              "dimmed": false,
              "verbs": "courir, parcourir, secourir, concourir",
              "example": "courir (to run)",
              "conjugations": [
                [
                  "eusse couru",
                  "eussions couru"
                ],
                [
                  "eusses couru",
                  "eussiez couru"
                ],
                [
                  "eût couru",
                  "eussent couru"
                ]
              ]
            },
            {
              "name": "haïr",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "haïr",
              "example": "haïr (to hate)",
              "conjugations": [
                [
                  "eusse haï",
                  "eussions haï"
                ],
                [
                  "eusses haï",
                  "eussiez haï"
                ],
                [
                  "eût haï",
                  "eussent haï"
                ]
              ]
            },
            {
              "name": "bouillir",
              "description": "regular (-i participle)",
              "dimmed": true,
              "verbs": "bouillir",
              "example": "bouillir (to boil)",
              "conjugations": [
                [
                  "eusse bouilli",
                  "eussions bouilli"
                ],
                [
                  "eusses bouilli",
                  "eussiez bouilli"
                ],
                [
                  "eût bouilli",
                  "eussent bouilli"
                ]
              ]
            },
            {
              "name": "faillir",
              "description": "irregular participle (failli)",
              "dimmed": true,
              "verbs": "faillir, défaillir",
              "example": "faillir (to fail/nearly do)",
              "conjugations": [
                [
                  "eusse failli",
                  "eussions failli"
                ],
                [
                  "eusses failli",
                  "eussiez failli"
                ],
                [
                  "eût failli",
                  "eussent failli"
                ]
              ]
            },
            {
              "name": "gésir",
              "description": "no compound past forms",
              "dimmed": true,
              "verbs": "gésir",
              "example": "gésir (to lie/rest)",
              "note": "No passé composé forms"
            }
          ],
          "regular": {
            "name": "regular -ir",
            "example": "finir (to finish)",
            "conjugations": [
              [
                "eusse fini",
                "eussions fini"
              ],
              [
                "eusses fini",
                "eussiez fini"
              ],
              [
                "eût fini",
                "eussent fini"
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-aître",
              "description": "irregular participle (connu)",
              "dimmed": false,
              "verbs": "connaître, paraître, apparaître, disparaître, reconnaître, naître, comparaître, transparaître",
              "example": "connaître (to know)",
              "conjugations": [
                [
                  "eusse connu",
                  "eussions connu"
                ],
                [
                  "eusses connu",
                  "eussiez connu"
                ],
                [
                  "eût connu",
                  "eussent connu"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (pris)",
              "dimmed": false,
              "verbs": "prendre, apprendre, comprendre, surprendre, reprendre, entreprendre, méprendre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "eusse pris",
                  "eussions pris"
                ],
                [
                  "eusses pris",
                  "eussiez pris"
                ],
                [
                  "eût pris",
                  "eussent pris"
                ]
              ]
            },
            {
              "name": "-re",
              "description": "irregular participle (mis)",
              "dimmed": false,
              "verbs": "mettre, permettre, promettre, admettre, commettre, soumettre, remettre, transmettre, émettre, omettre",
              "example": "mettre (to put)",
              "conjugations": [
                [
                  "eusse mis",
                  "eussions mis"
                ],
                [
                  "eusses mis",
                  "eussiez mis"
                ],
                [
                  "eût mis",
                  "eussent mis"
                ]
              ]
            },
            {
              "name": "-uire",
              "description": "irregular participle (construit)",
              "dimmed": false,
              "verbs": "construire, produire, conduire, traduire, introduire, reproduire, détruire, réduire, séduire, instruire",
              "example": "construire (to build)",
              "conjugations": [
                [
                  "eusse construit",
                  "eussions construit"
                ],
                [
                  "eusses construit",
                  "eussiez construit"
                ],
                [
                  "eût construit",
                  "eussent construit"
                ]
              ]
            },
            {
              "name": "-indre",
              "description": "irregular participle (peint)",
              "dimmed": false,
              "verbs": "peindre, craindre, plaindre, joindre, atteindre, éteindre, feindre, contraindre, rejoindre, enfreindre",
              "example": "peindre (to paint)",
              "conjugations": [
                [
                  "eusse peint",
                  "eussions peint"
                ],
                [
                  "eusses peint",
                  "eussiez peint"
                ],
                [
                  "eût peint",
                  "eussent peint"
                ]
              ]
            },
            {
              "name": "-ire",
              "description": "irregular participle (lu)",
              "dimmed": false,
              "verbs": "lire, dire, écrire, suffire, interdire, contredire, prédire",
              "example": "lire (to read)",
              "conjugations": [
                [
                  "eusse lu",
                  "eussions lu"
                ],
                [
                  "eusses lu",
                  "eussiez lu"
                ],
                [
                  "eût lu",
                  "eussent lu"
                ]
              ]
            },
            {
              "name": "-ivre",
              "description": "irregular participle (vécu)",
              "dimmed": false,
              "verbs": "vivre, survivre, poursuivre",
              "example": "vivre (to live)",
              "conjugations": [
                [
                  "eusse vécu",
                  "eussions vécu"
                ],
                [
                  "eusses vécu",
                  "eussiez vécu"
                ],
                [
                  "eût vécu",
                  "eussent vécu"
                ]
              ]
            },
            {
              "name": "-oudre",
              "description": "irregular participle (résolu)",
              "dimmed": false,
              "verbs": "résoudre, absoudre, dissoudre",
              "example": "résoudre (to resolve)",
              "conjugations": [
                [
                  "eusse résolu",
                  "eussions résolu"
                ],
                [
                  "eusses résolu",
                  "eussiez résolu"
                ],
                [
                  "eût résolu",
                  "eussent résolu"
                ]
              ]
            },
            {
              "name": "-oire",
              "description": "irregular participle (bu)",
              "dimmed": false,
              "verbs": "boire",
              "example": "boire (to drink)",
              "conjugations": [
                [
                  "eusse bu",
                  "eussions bu"
                ],
                [
                  "eusses bu",
                  "eussiez bu"
                ],
                [
                  "eût bu",
                  "eussent bu"
                ]
              ]
            },
            {
              "name": "-aire",
              "description": "irregular participle (plu)",
              "dimmed": false,
              "verbs": "plaire, déplaire, taire",
              "example": "plaire (to please)",
              "conjugations": [
                [
                  "eusse plu",
                  "eussions plu"
                ],
                [
                  "eusses plu",
                  "eussiez plu"
                ],
                [
                  "eût plu",
                  "eussent plu"
                ]
              ]
            },
            {
              "name": "-ure",
              "description": "irregular participle (conclu)",
              "dimmed": false,
              "verbs": "conclure, exclure, inclure",
              "example": "conclure (to conclude)",
              "conjugations": [
                [
                  "eusse conclu",
                  "eussions conclu"
                ],
                [
                  "eusses conclu",
                  "eussiez conclu"
                ],
                [
                  "eût conclu",
                  "eussent conclu"
                ]
              ]
            },
            {
              "name": "-ompre",
              "description": "regular (-u participle)",
              "dimmed": true,
              "verbs": "rompre, corrompre, interrompre",
              "example": "rompre (to break)",
              "conjugations": [
                [
                  "eusse rompu",
                  "eussions rompu"
                ],
                [
                  "eusses rompu",
                  "eussiez rompu"
                ],
                [
                  "eût rompu",
                  "eussent rompu"
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "eusse vendu",
                "eussions vendu"
              ],
              [
                "eusses vendu",
                "eussiez vendu"
              ],
              [
                "eût vendu",
                "eussent vendu"
              ]
            ]
          }
        }
      ],
      "description": "Expresses impossible past conditions — things that could have happened but didn't. Used in contrary-to-fact 'if' clauses about the past."
    },
    "imp_present": {
      "label": "Present (Impératif présent)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "aller",
              "description": "irregular",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "va",
                  "allons"
                ],
                [
                  "",
                  "allez"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-er verbs",
              "description": "regular",
              "dimmed": true,
              "verbs": "parler, manger, commencer, appeler, envoyer, payer",
              "example": "parler (to speak)",
              "conjugations": [
                [
                  "parle",
                  "parlons"
                ],
                [
                  "",
                  "parlez"
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
            "example": "parler (to speak)",
            "conjugations": [
              [
                "parle",
                "parlons"
              ],
              [
                "",
                "parlez"
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
              "name": "-ir (ouvrir type)",
              "description": "er-like forms",
              "dimmed": false,
              "verbs": "ouvrir, couvrir, offrir, souffrir, cueillir",
              "example": "ouvrir (to open)",
              "conjugations": [
                [
                  "ouvre",
                  "ouvrons"
                ],
                [
                  "",
                  "ouvrez"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "-ir verbs",
              "description": "regular",
              "dimmed": true,
              "verbs": "dormir, partir, venir, courir, finir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "dors",
                  "dormons"
                ],
                [
                  "",
                  "dormez"
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
            "example": "finir (to finish)",
            "conjugations": [
              [
                "finis",
                "finissons"
              ],
              [
                "",
                "finissez"
              ],
              [
                "",
                ""
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-re verbs",
              "description": "regular",
              "dimmed": true,
              "verbs": "prendre, mettre, lire, écrire, boire, vivre",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "prends",
                  "prenons"
                ],
                [
                  "",
                  "prenez"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "vends",
                "vendons"
              ],
              [
                "",
                "vendez"
              ],
              [
                "",
                ""
              ]
            ]
          }
        }
      ],
      "description": "Gives direct commands or requests in the present. The most common imperative form."
    },
    "imp_past": {
      "label": "Past (Impératif passé)",
      "icon": "bi-chevron-left",
      "columns": [
        {
          "label": "-er",
          "patterns": [
            {
              "name": "-er verbs",
              "description": "avoir + participle",
              "dimmed": true,
              "verbs": "parler, manger, commencer",
              "example": "parler (to speak)",
              "conjugations": [
                [
                  "aie parlé",
                  "ayons parlé"
                ],
                [
                  "",
                  "ayez parlé"
                ],
                [
                  "",
                  ""
                ]
              ]
            },
            {
              "name": "aller",
              "description": "être + participle",
              "dimmed": false,
              "verbs": "aller",
              "example": "aller (to go)",
              "conjugations": [
                [
                  "sois allé(e)",
                  "soyons allé(e)s"
                ],
                [
                  "",
                  "soyez allé(e)s"
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
            "example": "parler (to speak)",
            "conjugations": [
              [
                "aie parlé",
                "ayons parlé"
              ],
              [
                "",
                "ayez parlé"
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
              "name": "-ir verbs",
              "description": "avoir + participle",
              "dimmed": true,
              "verbs": "dormir, partir, courir, finir",
              "example": "dormir (to sleep)",
              "conjugations": [
                [
                  "aie dormi",
                  "ayons dormi"
                ],
                [
                  "",
                  "ayez dormi"
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
            "example": "finir (to finish)",
            "conjugations": [
              [
                "aie fini",
                "ayons fini"
              ],
              [
                "",
                "ayez fini"
              ],
              [
                "",
                ""
              ]
            ]
          }
        },
        {
          "label": "-re",
          "patterns": [
            {
              "name": "-re verbs",
              "description": "avoir + participle",
              "dimmed": true,
              "verbs": "prendre, mettre, lire, écrire",
              "example": "prendre (to take)",
              "conjugations": [
                [
                  "aie pris",
                  "ayons pris"
                ],
                [
                  "",
                  "ayez pris"
                ],
                [
                  "",
                  ""
                ]
              ]
            }
          ],
          "regular": {
            "name": "regular -re",
            "example": "vendre (to sell)",
            "conjugations": [
              [
                "aie vendu",
                "ayons vendu"
              ],
              [
                "",
                "ayez vendu"
              ],
              [
                "",
                ""
              ]
            ]
          }
        }
      ],
      "description": "Gives commands about completed actions — rare and literary. 'Have finished by tomorrow.'"
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
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "imp_past"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "imp_present"
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
    { "rule": "Regular: add -s", "singular": "chat", "plural": "chats", "examples": "livre→livres, maison→maisons, ami→amis, porte→portes" },
    { "rule": "Ends in -au, -eau, -eu: add -x", "singular": "bateau", "plural": "bateaux", "examples": "chapeau→chapeaux, gâteau→gâteaux, jeu→jeux, noyau→noyaux" },
    { "rule": "Ends in -al: change to -aux", "singular": "animal", "plural": "animaux", "examples": "cheval→chevaux, journal→journaux, hôpital→hôpitaux, canal→canaux" },
    { "rule": "Exceptions: -al adds -s", "singular": "festival", "plural": "festivals", "examples": "bal→bals, carnaval→carnavals, récital→récitals, régal→régals" },
    { "rule": "Ends in -ail: some change to -aux", "singular": "travail", "plural": "travaux", "examples": "vitrail→vitraux, corail→coraux, émail→émaux" },
    { "rule": "Ends in -ail: regular add -s", "singular": "détail", "plural": "détails", "examples": "rail→rails, éventail→éventails, chandail→chandails" },
    { "rule": "Ends in -ou: most add -s", "singular": "trou", "plural": "trous", "examples": "clou→clous, sou→sous, verrou→verrous" },
    { "rule": "Ends in -ou: seven take -x", "singular": "bijou", "plural": "bijoux", "examples": "caillou→cailloux, chou→choux, genou→genoux, hibou→hiboux, joujou→joujoux, pou→poux" },
    { "rule": "Ends in -s, -x, -z: no change", "singular": "bras", "plural": "bras", "examples": "voix→voix, nez→nez, souris→souris, noix→noix" },
    { "rule": "Irregular", "singular": "œil", "plural": "yeux", "examples": "monsieur→messieurs, madame→mesdames, mademoiselle→mesdemoiselles" }
  ],
  "pronouns": {
    "categories": [
      {
        "name": "Subject Pronouns (Pronoms sujets)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "je (j')", "nous"],
          ["2nd person", "tu", "vous"],
          ["3rd person (m)", "il", "ils"],
          ["3rd person (f)", "elle", "elles"],
          ["Indefinite", "on", "—"]
        ]
      },
      {
        "name": "Direct Object Pronouns (Pronoms COD)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "me (m')", "nous"],
          ["2nd person", "te (t')", "vous"],
          ["3rd person (m)", "le (l')", "les"],
          ["3rd person (f)", "la (l')", "les"]
        ]
      },
      {
        "name": "Indirect Object Pronouns (Pronoms COI)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "me (m')", "nous"],
          ["2nd person", "te (t')", "vous"],
          ["3rd person", "lui", "leur"]
        ]
      },
      {
        "name": "Stressed / Disjunctive Pronouns (Pronoms toniques)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "moi", "nous"],
          ["2nd person", "toi", "vous"],
          ["3rd person (m)", "lui", "eux"],
          ["3rd person (f)", "elle", "elles"],
          ["Indefinite", "soi", "—"]
        ]
      },
      {
        "name": "Possessive Adjectives (Adjectifs possessifs)",
        "headers": ["Person", "Masc. sing.", "Fem. sing.", "Plural"],
        "rows": [
          ["1st sing.", "mon", "ma", "mes"],
          ["2nd sing.", "ton", "ta", "tes"],
          ["3rd sing.", "son", "sa", "ses"],
          ["1st pl.", "notre", "notre", "nos"],
          ["2nd pl.", "votre", "votre", "vos"],
          ["3rd pl.", "leur", "leur", "leurs"]
        ]
      },
      {
        "name": "Reflexive Pronouns (Pronoms réfléchis)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "me (m')", "nous"],
          ["2nd person", "te (t')", "vous"],
          ["3rd person", "se (s')", "se (s')"]
        ]
      }
    ]
  },
  "chart": {
    "columns": ["Past (Passé)", "Present (Présent)", "Future (Futur)", "Conditional (Conditionnel)"],
    "rows": ["Simple (Simple)", "Compound (Composé)", "Imperfect (Imparfait)", "Pluperfect (Plus-que-parfait)"],
    "groups": ["-er: marcher", "-ir: finir", "-re: vendre"],
    "cells": [
      [
        { "form": "Passé simple", "rule": "Stem + endings",
          "er": [["je marchai", "n. marchâmes"], ["tu marchas", "v. marchâtes"], ["il marcha", "ils marchèrent"]],
          "ir": [["je finis", "n. finîmes"], ["tu finis", "v. finîtes"], ["il finit", "ils finirent"]],
          "re": [["je vendis", "n. vendîmes"], ["tu vendis", "v. vendîtes"], ["il vendit", "ils vendirent"]] },
        { "form": "Présent", "rule": "Stem + endings",
          "er": [["je marche", "n. marchons"], ["tu marches", "v. marchez"], ["il marche", "ils marchent"]],
          "ir": [["je finis", "n. finissons"], ["tu finis", "v. finissez"], ["il finit", "ils finissent"]],
          "re": [["je vends", "n. vendons"], ["tu vends", "v. vendez"], ["il vend", "ils vendent"]] },
        { "form": "Futur simple", "rule": "Inf. + endings",
          "er": [["je marcherai", "n. marcherons"], ["tu marcheras", "v. marcherez"], ["il marchera", "ils marcheront"]],
          "ir": [["je finirai", "n. finirons"], ["tu finiras", "v. finirez"], ["il finira", "ils finiront"]],
          "re": [["je vendrai", "n. vendrons"], ["tu vendras", "v. vendrez"], ["il vendra", "ils vendront"]] },
        { "form": "Cond. présent", "rule": "Inf. + imp. endings",
          "er": [["je marcherais", "n. marcherions"], ["tu marcherais", "v. marcheriez"], ["il marcherait", "ils marcheraient"]],
          "ir": [["je finirais", "n. finirions"], ["tu finirais", "v. finiriez"], ["il finirait", "ils finiraient"]],
          "re": [["je vendrais", "n. vendrions"], ["tu vendrais", "v. vendriez"], ["il vendrait", "ils vendraient"]] }
      ],
      [
        { "form": "Passé composé", "rule": "Pres. avoir + p.p.",
          "er": [["j'ai marché", "n. avons marché"], ["tu as marché", "v. avez marché"], ["il a marché", "ils ont marché"]],
          "ir": [["j'ai fini", "n. avons fini"], ["tu as fini", "v. avez fini"], ["il a fini", "ils ont fini"]],
          "re": [["j'ai vendu", "n. avons vendu"], ["tu as vendu", "v. avez vendu"], ["il a vendu", "ils ont vendu"]] },
        null,
        { "form": "Futur antérieur", "rule": "Fut. avoir + p.p.",
          "er": [["j'aurai marché", "n. aurons marché"], ["tu auras marché", "v. aurez marché"], ["il aura marché", "ils auront marché"]],
          "ir": [["j'aurai fini", "n. aurons fini"], ["tu auras fini", "v. aurez fini"], ["il aura fini", "ils auront fini"]],
          "re": [["j'aurai vendu", "n. aurons vendu"], ["tu auras vendu", "v. aurez vendu"], ["il aura vendu", "ils auront vendu"]] },
        { "form": "Cond. passé", "rule": "Cond. avoir + p.p.",
          "er": [["j'aurais marché", "n. aurions marché"], ["tu aurais marché", "v. auriez marché"], ["il aurait marché", "ils auraient marché"]],
          "ir": [["j'aurais fini", "n. aurions fini"], ["tu aurais fini", "v. auriez fini"], ["il aurait fini", "ils auraient fini"]],
          "re": [["j'aurais vendu", "n. aurions vendu"], ["tu aurais vendu", "v. auriez vendu"], ["il aurait vendu", "ils auraient vendu"]] }
      ],
      [
        { "form": "Imparfait", "rule": "Nous-stem + endings",
          "er": [["je marchais", "n. marchions"], ["tu marchais", "v. marchiez"], ["il marchait", "ils marchaient"]],
          "ir": [["je finissais", "n. finissions"], ["tu finissais", "v. finissiez"], ["il finissait", "ils finissaient"]],
          "re": [["je vendais", "n. vendions"], ["tu vendais", "v. vendiez"], ["il vendait", "ils vendaient"]] },
        null, null, null
      ],
      [
        { "form": "Plus-que-parfait", "rule": "Imp. avoir + p.p.",
          "er": [["j'avais marché", "n. avions marché"], ["tu avais marché", "v. aviez marché"], ["il avait marché", "ils avaient marché"]],
          "ir": [["j'avais fini", "n. avions fini"], ["tu avais fini", "v. aviez fini"], ["il avait fini", "ils avaient fini"]],
          "re": [["j'avais vendu", "n. avions vendu"], ["tu avais vendu", "v. aviez vendu"], ["il avait vendu", "ils avaient vendu"]] },
        null, null, null
      ]
    ]
  }
};
