var icelandicData = {
  "language": "Icelandic",
  "title": "Icelandic Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" },
    { "key": "pronouns", "icon": "bi-person", "label": "Pronouns" }
  ],
  "theme": {
    "primary": "#00838f",
    "secondary": "#006064",
    "tableHeader": "#0097a7",
    "stripedRow": "#e0f7fa",
    "border": "#80deea"
  },
  "moods": [
    {
      "label": "Indicative",
      "icon": "bi-chat-left-text",
      "key": "indicative",
      "description": "Framsöguháttur — describes reality: facts, events, and questions about what is, was, or will be."
    },
    {
      "label": "Subjunctive",
      "icon": "bi-question-circle",
      "key": "subjunctive",
      "description": "Viðtengingarháttur — expresses wishes, doubts, hypothetical situations, indirect speech, and purpose clauses."
    },
    {
      "label": "Imperative",
      "icon": "bi-exclamation-circle",
      "key": "imperative",
      "description": "Boðháttur — gives commands, instructions, or requests directly."
    }
  ],
  "groups": {
    "indicative": [
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "thatid",
          "perfekt",
          "pluskvamperfekt"
        ]
      },
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "nutid"
        ]
      },
      {
        "label": "Future",
        "icon": "bi-arrow-right",
        "tenses": [
          "framtid"
        ]
      }
    ],
    "subjunctive": [
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "nutid_vidtengingarhattur"
        ]
      },
      {
        "label": "Past",
        "icon": "bi-chevron-left",
        "tenses": [
          "thatid_vidtengingarhattur"
        ]
      }
    ],
    "imperative": [
      {
        "label": "Imperative",
        "icon": "bi-exclamation-circle",
        "tenses": [
          "bodhattur"
        ]
      }
    ]
  },
  "tenses": {
    "nutid": {
      "label": "Nútíð (Present)",
      "icon": "bi-record-circle",
      "description": "Describes current states, habitual actions, general truths, and ongoing events. Icelandic has no progressive form.",
      "extra": "<strong>Weak verb classes:</strong><br><br>Class 1 (-a): tala → tala, talar, talar<br>Class 2 (-a/-i): herma → hermi, hermir, hermir<br>Class 3 (-i): lifa → lifi, lifir, lifir<br>Class 4 (-i with j-insertion): telja → tel, telur, telur",
      "columns": [
        {
          "label": "Weak verbs",
          "regular": {
            "name": "weak class 1 (-a)",
            "example": "tala (to speak)",
            "conjugations": [
              ["ég tala", "við tölum"],
              ["þú talar", "þið talið"],
              ["hann/hún talar", "þeir/þær tala"]
            ]
          },
          "patterns": [
            {
              "name": "class 1 (-a)",
              "description": "stem + -a, -ar, -ar, -um, -ið, -a",
              "dimmed": true,
              "verbs": "tala, borða, elska, kalla, laga, spila, þakka, vinna",
              "example": "kalla (to call)",
              "conjugations": [
                ["ég kalla", "við köllum"],
                ["þú kallar", "þið kallið"],
                ["hann/hún kallar", "þeir/þær kalla"]
              ]
            },
            {
              "name": "class 2 (-a/-i)",
              "description": "stem + -i, -ir, -ir, -um, -ið, -a",
              "dimmed": false,
              "verbs": "herma, læra, meina, reyna, þýða, segja",
              "example": "herma (to imitate)",
              "conjugations": [
                ["ég hermi", "við hermum"],
                ["þú hermir", "þið hermið"],
                ["hann/hún hermir", "þeir/þær herma"]
              ]
            },
            {
              "name": "class 3 (-i)",
              "description": "stem + -i, -ir, -ir, -um, -ið, -a",
              "dimmed": false,
              "verbs": "lifa, horfa, ætla, vakna, dvelja",
              "example": "lifa (to live)",
              "conjugations": [
                ["ég lifi", "við lifum"],
                ["þú lifir", "þið lifið"],
                ["hann/hún lifir", "þeir/þær lifa"]
              ]
            },
            {
              "name": "class 4 (-i, j-insert)",
              "description": "j-insertion in some forms; stem + -∅, -ur, -ur, -jum, -jið, -ja",
              "dimmed": false,
              "verbs": "telja, delja, berja, setja, leggja, þekkja",
              "example": "telja (to count)",
              "conjugations": [
                ["ég tel", "við teljum"],
                ["þú telur", "þið teljið"],
                ["hann/hún telur", "þeir/þær telja"]
              ]
            }
          ]
        },
        {
          "label": "Strong verbs",
          "regular": null,
          "patterns": [
            {
              "name": "class 1 (í–ei)",
              "description": "ablaut: í in infinitive, ei in past plural",
              "dimmed": false,
              "verbs": "bíta, drífa, grípa, ríða, líta, rísa, víkja",
              "example": "bíta (to bite)",
              "conjugations": [
                ["ég bít", "við bítum"],
                ["þú bítur", "þið bítið"],
                ["hann/hún bítur", "þeir/þær bíta"]
              ]
            },
            {
              "name": "class 2 (jó/ú–au)",
              "description": "ablaut: jó/ú in infinitive",
              "dimmed": false,
              "verbs": "bjóða, fljúga, ljúga, sjóða, skjóta, þjóta",
              "example": "bjóða (to offer)",
              "conjugations": [
                ["ég býð", "við bjóðum"],
                ["þú býður", "þið bjóðið"],
                ["hann/hún býður", "þeir/þær bjóða"]
              ]
            },
            {
              "name": "class 3 (e/i–u)",
              "description": "ablaut: e/i in infinitive, u in past",
              "dimmed": false,
              "verbs": "bera, finna, brenna, detta, verða, hverfa, skella",
              "example": "bera (to carry)",
              "conjugations": [
                ["ég ber", "við berum"],
                ["þú berð", "þið berið"],
                ["hann/hún ber", "þeir/þær bera"]
              ]
            },
            {
              "name": "class 4 (e–á)",
              "description": "ablaut: e in infinitive, á in past singular",
              "dimmed": false,
              "verbs": "bera, nema, stela, skera, fela",
              "example": "stela (to steal)",
              "conjugations": [
                ["ég stel", "við stelum"],
                ["þú stelur", "þið stelið"],
                ["hann/hún stelur", "þeir/þær stela"]
              ]
            },
            {
              "name": "class 5 (e–á)",
              "description": "ablaut: e in infinitive, a in past participle",
              "dimmed": false,
              "verbs": "gefa, lesa, meta, sjá, eta, biðja, sitja",
              "example": "gefa (to give)",
              "conjugations": [
                ["ég gef", "við gefum"],
                ["þú gefur", "þið gefið"],
                ["hann/hún gefur", "þeir/þær gefa"]
              ]
            },
            {
              "name": "class 6 (a–ó)",
              "description": "ablaut: a in infinitive, ó in past",
              "dimmed": false,
              "verbs": "fara, taka, draga, grafa, vaka, ala, vaxa",
              "example": "fara (to go/travel)",
              "conjugations": [
                ["ég fer", "við förum"],
                ["þú ferð", "þið farið"],
                ["hann/hún fer", "þeir/þær fara"]
              ]
            },
            {
              "name": "class 7 (reduplicating)",
              "description": "various ablaut patterns, historically reduplicating",
              "dimmed": false,
              "verbs": "halda, falla, heita, ganga, búa, ráða, láta, gráta, blása",
              "example": "halda (to hold)",
              "conjugations": [
                ["ég held", "við höldum"],
                ["þú heldur", "þið haldið"],
                ["hann/hún heldur", "þeir/þær halda"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vera",
              "description": "fully irregular — to be",
              "dimmed": false,
              "verbs": "vera",
              "example": "vera (to be)",
              "conjugations": [
                ["ég er", "við erum"],
                ["þú ert", "þið eruð"],
                ["hann/hún er", "þeir/þær eru"]
              ]
            },
            {
              "name": "hafa",
              "description": "irregular — to have",
              "dimmed": false,
              "verbs": "hafa",
              "example": "hafa (to have)",
              "conjugations": [
                ["ég hef", "við höfum"],
                ["þú hefur", "þið hafið"],
                ["hann/hún hefur", "þeir/þær hafa"]
              ]
            },
            {
              "name": "geta",
              "description": "preterite-present — to be able",
              "dimmed": false,
              "verbs": "geta",
              "example": "geta (to be able)",
              "conjugations": [
                ["ég get", "við getum"],
                ["þú getur", "þið getið"],
                ["hann/hún getur", "þeir/þær geta"]
              ]
            },
            {
              "name": "vilja",
              "description": "irregular — to want",
              "dimmed": false,
              "verbs": "vilja",
              "example": "vilja (to want)",
              "conjugations": [
                ["ég vil", "við viljum"],
                ["þú vilt", "þið viljið"],
                ["hann/hún vill", "þeir/þær vilja"]
              ]
            },
            {
              "name": "skulu / munu",
              "description": "modal auxiliaries — shall / will",
              "dimmed": false,
              "verbs": "skulu, munu",
              "example": "skulu (shall)",
              "conjugations": [
                ["ég skal", "við skulum"],
                ["þú skalt", "þið skuluð"],
                ["hann/hún skal", "þeir/þær skulu"]
              ]
            },
            {
              "name": "mega",
              "description": "preterite-present — may/be allowed",
              "dimmed": false,
              "verbs": "mega",
              "example": "mega (may)",
              "conjugations": [
                ["ég má", "við megum"],
                ["þú mátt", "þið megið"],
                ["hann/hún má", "þeir/þær mega"]
              ]
            },
            {
              "name": "verða",
              "description": "strong irregular — to become",
              "dimmed": false,
              "verbs": "verða",
              "example": "verða (to become)",
              "conjugations": [
                ["ég verð", "við verðum"],
                ["þú verður", "þið verðið"],
                ["hann/hún verður", "þeir/þær verða"]
              ]
            },
            {
              "name": "gera / koma / sjá",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gera, koma, sjá, fá, segja, þurfa",
              "example": "gera (to do)",
              "conjugations": [
                ["ég geri", "við gerum"],
                ["þú gerir", "þið gerið"],
                ["hann/hún gerir", "þeir/þær gera"]
              ]
            }
          ]
        }
      ]
    },
    "thatid": {
      "label": "Þátíð (Past/Preterite)",
      "icon": "bi-chevron-left",
      "description": "Describes completed actions in the past. Weak verbs add dental suffix (-ði, -di, -ti, -aði). Strong verbs change the stem vowel (ablaut).",
      "extra": "<strong>Weak vs. Strong past:</strong><br><br>Weak verbs: stem + dental suffix (<strong>-aði, -ði, -di, -ti</strong>)<br>Strong verbs: ablaut (vowel change) + <strong>-∅, -st, -∅, -um, -uð, -u</strong><br><br>Strong verb past singular and plural often have different vowels.",
      "columns": [
        {
          "label": "Weak verbs",
          "regular": {
            "name": "weak class 1 (-aði)",
            "example": "tala (to speak)",
            "conjugations": [
              ["ég talaði", "við töluðum"],
              ["þú talaðir", "þið töluðuð"],
              ["hann/hún talaði", "þeir/þær töluðu"]
            ]
          },
          "patterns": [
            {
              "name": "class 1 (-aði)",
              "description": "standard -aði past",
              "dimmed": true,
              "verbs": "tala, borða, elska, kalla, laga, spila, þakka",
              "example": "kalla (to call)",
              "conjugations": [
                ["ég kallaði", "við kölluðum"],
                ["þú kallaðir", "þið kölluðuð"],
                ["hann/hún kallaði", "þeir/þær kölluðu"]
              ]
            },
            {
              "name": "class 2 (-di/-ti)",
              "description": "stem + -di or -ti depending on final consonant",
              "dimmed": false,
              "verbs": "herma, læra, meina, reyna, þýða",
              "example": "herma (to imitate)",
              "conjugations": [
                ["ég hermdi", "við hermdum"],
                ["þú hermdir", "þið hermduð"],
                ["hann/hún hermdi", "þeir/þær hermdu"]
              ]
            },
            {
              "name": "class 3 (-ði)",
              "description": "stem + -ði",
              "dimmed": false,
              "verbs": "lifa, horfa, ætla, vakna",
              "example": "lifa (to live)",
              "conjugations": [
                ["ég lifði", "við lifðum"],
                ["þú lifðir", "þið lifðuð"],
                ["hann/hún lifði", "þeir/þær lifðu"]
              ]
            },
            {
              "name": "class 4 (-di, j-loss)",
              "description": "j disappears before dental suffix",
              "dimmed": false,
              "verbs": "telja, setja, leggja, þekkja",
              "example": "telja (to count)",
              "conjugations": [
                ["ég taldi", "við töldum"],
                ["þú taldir", "þið tölduð"],
                ["hann/hún taldi", "þeir/þær töldu"]
              ]
            }
          ]
        },
        {
          "label": "Strong verbs",
          "regular": null,
          "patterns": [
            {
              "name": "class 1 (í→ei)",
              "description": "ablaut: í → ei (sg) / i (pl)",
              "dimmed": false,
              "verbs": "bíta, drífa, grípa, ríða, líta",
              "example": "bíta (to bite)",
              "conjugations": [
                ["ég beit", "við bitum"],
                ["þú beitst", "þið bituð"],
                ["hann/hún beit", "þeir/þær bitu"]
              ]
            },
            {
              "name": "class 2 (jó→au)",
              "description": "ablaut: jó/ú → au (sg) / u (pl)",
              "dimmed": false,
              "verbs": "bjóða, skjóta, fljúga, ljúga",
              "example": "bjóða (to offer)",
              "conjugations": [
                ["ég bauð", "við buðum"],
                ["þú bauðst", "þið buðuð"],
                ["hann/hún bauð", "þeir/þær buðu"]
              ]
            },
            {
              "name": "class 3 (e→a/u)",
              "description": "ablaut: e → a (sg) / u (pl)",
              "dimmed": false,
              "verbs": "bera, finna, verða, brenna, detta",
              "example": "bera (to carry)",
              "conjugations": [
                ["ég bar", "við bárum"],
                ["þú barst", "þið báruð"],
                ["hann/hún bar", "þeir/þær báru"]
              ]
            },
            {
              "name": "class 5 (e→a)",
              "description": "ablaut: e → a (sg) / á (pl)",
              "dimmed": false,
              "verbs": "gefa, lesa, meta, sjá, eta, biðja, sitja",
              "example": "gefa (to give)",
              "conjugations": [
                ["ég gaf", "við gáfum"],
                ["þú gafst", "þið gáfuð"],
                ["hann/hún gaf", "þeir/þær gáfu"]
              ]
            },
            {
              "name": "class 6 (a→ó)",
              "description": "ablaut: a → ó",
              "dimmed": false,
              "verbs": "fara, taka, draga, grafa, ala, vaxa",
              "example": "fara (to go/travel)",
              "conjugations": [
                ["ég fór", "við fórum"],
                ["þú fórst", "þið fóruð"],
                ["hann/hún fór", "þeir/þær fóru"]
              ]
            },
            {
              "name": "class 7 (various)",
              "description": "various ablaut: a→é, ei→é, etc.",
              "dimmed": false,
              "verbs": "halda, falla, heita, ganga, búa, ráða, láta",
              "example": "halda (to hold)",
              "conjugations": [
                ["ég hélt", "við héldum"],
                ["þú héltst", "þið hélduð"],
                ["hann/hún hélt", "þeir/þær héldu"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vera",
              "description": "fully irregular past",
              "dimmed": false,
              "verbs": "vera",
              "example": "vera (to be)",
              "conjugations": [
                ["ég var", "við vorum"],
                ["þú varst", "þið voruð"],
                ["hann/hún var", "þeir/þær voru"]
              ]
            },
            {
              "name": "hafa",
              "description": "irregular past",
              "dimmed": false,
              "verbs": "hafa",
              "example": "hafa (to have)",
              "conjugations": [
                ["ég hafði", "við höfðum"],
                ["þú hafðir", "þið höfðuð"],
                ["hann/hún hafði", "þeir/þær höfðu"]
              ]
            },
            {
              "name": "geta",
              "description": "preterite-present past",
              "dimmed": false,
              "verbs": "geta",
              "example": "geta (to be able)",
              "conjugations": [
                ["ég gat", "við gátum"],
                ["þú gast", "þið gátuð"],
                ["hann/hún gat", "þeir/þær gátu"]
              ]
            },
            {
              "name": "vilja",
              "description": "irregular past",
              "dimmed": false,
              "verbs": "vilja",
              "example": "vilja (to want)",
              "conjugations": [
                ["ég vildi", "við vildum"],
                ["þú vildir", "þið vilduð"],
                ["hann/hún vildi", "þeir/þær vildu"]
              ]
            },
            {
              "name": "skulu / munu",
              "description": "modal past forms",
              "dimmed": false,
              "verbs": "skulu, munu",
              "example": "skulu (shall)",
              "conjugations": [
                ["ég skyldi", "við skyldum"],
                ["þú skyldir", "þið skylduð"],
                ["hann/hún skyldi", "þeir/þær skyldu"]
              ]
            },
            {
              "name": "mega",
              "description": "preterite-present past",
              "dimmed": false,
              "verbs": "mega",
              "example": "mega (may)",
              "conjugations": [
                ["ég mátti", "við máttum"],
                ["þú máttir", "þið máttuð"],
                ["hann/hún mátti", "þeir/þær máttu"]
              ]
            },
            {
              "name": "gera / koma / sjá",
              "description": "common irregular pasts",
              "dimmed": false,
              "verbs": "gera, koma, sjá, fá, segja, þurfa",
              "example": "gera (to do)",
              "conjugations": [
                ["ég gerði", "við gerðum"],
                ["þú gerðir", "þið gerðuð"],
                ["hann/hún gerði", "þeir/þær gerðu"]
              ]
            }
          ]
        }
      ]
    },
    "perfekt": {
      "label": "Perfekt (Present Perfect)",
      "icon": "bi-clock-history",
      "description": "Describes completed actions with present relevance. Formed with hafa (to have) + past participle (lýsingarháttur þátíðar). The participle agrees in gender/number with the subject in some constructions.",
      "extra": "<strong>Formation:</strong> hef/hefur/höfum + past participle<br><br><strong>Past participle:</strong><br>- Weak verbs: -að (class 1), -t (class 2/3), -ð (class 4)<br>- Strong verbs: -ið with ablaut vowel<br><br>With vera as auxiliary for some intransitive verbs of motion/change.",
      "columns": [
        {
          "label": "Weak verbs",
          "regular": {
            "name": "hafa + past participle",
            "example": "tala (to speak)",
            "conjugations": [
              ["ég hef talað", "við höfum talað"],
              ["þú hefur talað", "þið hafið talað"],
              ["hann/hún hefur talað", "þeir/þær hafa talað"]
            ]
          },
          "patterns": [
            {
              "name": "weak -að",
              "description": "standard class 1 participle",
              "dimmed": true,
              "verbs": "tala, borða, elska, kalla, laga, spila",
              "example": "kalla (to call)",
              "conjugations": [
                ["ég hef kallað", "við höfum kallað"],
                ["þú hefur kallað", "þið hafið kallað"],
                ["hann/hún hefur kallað", "þeir/þær hafa kallað"]
              ]
            },
            {
              "name": "weak -t/-ð",
              "description": "class 2/3/4 participle",
              "dimmed": false,
              "verbs": "herma, lifa, telja, setja, leggja, þekkja",
              "example": "telja (to count)",
              "conjugations": [
                ["ég hef talið", "við höfum talið"],
                ["þú hefur talið", "þið hafið talið"],
                ["hann/hún hefur talið", "þeir/þær hafa talið"]
              ]
            }
          ]
        },
        {
          "label": "Strong verbs",
          "regular": null,
          "patterns": [
            {
              "name": "strong -ið",
              "description": "hafa + strong participle (-ið with ablaut)",
              "dimmed": false,
              "verbs": "gefa, bera, finna, bjóða, skjóta, lesa, fara, halda",
              "example": "gefa (to give)",
              "conjugations": [
                ["ég hef gefið", "við höfum gefið"],
                ["þú hefur gefið", "þið hafið gefið"],
                ["hann/hún hefur gefið", "þeir/þær hafa gefið"]
              ]
            },
            {
              "name": "strong with vera",
              "description": "motion/change-of-state use vera as auxiliary",
              "dimmed": false,
              "verbs": "fara, koma, detta, falla, hverfa",
              "example": "fara (to go/travel)",
              "conjugations": [
                ["ég er farinn/farin", "við erum farin/farnar"],
                ["þú ert farinn/farin", "þið eruð farin/farnar"],
                ["hann/hún er farinn/farin", "þeir/þær eru farnir/farnar"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vera",
              "description": "hafa + verið",
              "dimmed": false,
              "verbs": "vera",
              "example": "vera (to be)",
              "conjugations": [
                ["ég hef verið", "við höfum verið"],
                ["þú hefur verið", "þið hafið verið"],
                ["hann/hún hefur verið", "þeir/þær hafa verið"]
              ]
            },
            {
              "name": "hafa",
              "description": "hafa + haft",
              "dimmed": false,
              "verbs": "hafa",
              "example": "hafa (to have)",
              "conjugations": [
                ["ég hef haft", "við höfum haft"],
                ["þú hefur haft", "þið hafið haft"],
                ["hann/hún hefur haft", "þeir/þær hafa haft"]
              ]
            },
            {
              "name": "gera / koma / sjá",
              "description": "common irregular participles",
              "dimmed": false,
              "verbs": "gera, koma, sjá, fá, segja, þurfa, verða",
              "example": "gera (to do)",
              "conjugations": [
                ["ég hef gert", "við höfum gert"],
                ["þú hefur gert", "þið hafið gert"],
                ["hann/hún hefur gert", "þeir/þær hafa gert"]
              ]
            }
          ]
        }
      ]
    },
    "pluskvamperfekt": {
      "label": "Pluskvamperfekt (Past Perfect)",
      "icon": "bi-skip-backward",
      "description": "Describes actions completed before another past action. Formed with hafði (past of hafa) + past participle.",
      "columns": [
        {
          "label": "Weak verbs",
          "regular": {
            "name": "hafði + past participle",
            "example": "tala (to speak)",
            "conjugations": [
              ["ég hafði talað", "við höfðum talað"],
              ["þú hafðir talað", "þið höfðuð talað"],
              ["hann/hún hafði talað", "þeir/þær höfðu talað"]
            ]
          },
          "patterns": [
            {
              "name": "weak past perfect",
              "description": "hafði + weak participle",
              "dimmed": true,
              "verbs": "tala, borða, elska, kalla, laga, spila",
              "example": "kalla (to call)",
              "conjugations": [
                ["ég hafði kallað", "við höfðum kallað"],
                ["þú hafðir kallað", "þið höfðuð kallað"],
                ["hann/hún hafði kallað", "þeir/þær höfðu kallað"]
              ]
            }
          ]
        },
        {
          "label": "Strong verbs",
          "regular": null,
          "patterns": [
            {
              "name": "strong past perfect",
              "description": "hafði + strong participle",
              "dimmed": false,
              "verbs": "gefa, bera, finna, bjóða, lesa, fara, halda",
              "example": "gefa (to give)",
              "conjugations": [
                ["ég hafði gefið", "við höfðum gefið"],
                ["þú hafðir gefið", "þið höfðuð gefið"],
                ["hann/hún hafði gefið", "þeir/þær höfðu gefið"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vera",
              "description": "hafði + verið",
              "dimmed": false,
              "verbs": "vera",
              "example": "vera (to be)",
              "conjugations": [
                ["ég hafði verið", "við höfðum verið"],
                ["þú hafðir verið", "þið höfðuð verið"],
                ["hann/hún hafði verið", "þeir/þær höfðu verið"]
              ]
            },
            {
              "name": "hafa",
              "description": "hafði + haft",
              "dimmed": false,
              "verbs": "hafa",
              "example": "hafa (to have)",
              "conjugations": [
                ["ég hafði haft", "við höfðum haft"],
                ["þú hafðir haft", "þið höfðuð haft"],
                ["hann/hún hafði haft", "þeir/þær höfðu haft"]
              ]
            },
            {
              "name": "gera / koma / sjá",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gera, koma, sjá, fá, segja, þurfa, verða",
              "example": "gera (to do)",
              "conjugations": [
                ["ég hafði gert", "við höfðum gert"],
                ["þú hafðir gert", "þið höfðuð gert"],
                ["hann/hún hafði gert", "þeir/þær höfðu gert"]
              ]
            }
          ]
        }
      ]
    },
    "framtid": {
      "label": "Framtíð (Future)",
      "icon": "bi-arrow-right",
      "description": "Icelandic has no synthetic future tense. Future is expressed periphrastically with munu (will) or skulu (shall) + infinitive. Present tense with future context is also common.",
      "columns": [
        {
          "label": "All verbs",
          "regular": {
            "name": "munu + infinitive",
            "example": "tala (to speak)",
            "conjugations": [
              ["ég mun tala", "við munum tala"],
              ["þú munt tala", "þið munuð tala"],
              ["hann/hún mun tala", "þeir/þær munu tala"]
            ]
          },
          "patterns": [
            {
              "name": "strong verbs",
              "description": "same pattern — munu + infinitive",
              "dimmed": true,
              "verbs": "gefa, fara, bera, finna, bjóða, halda, lesa",
              "example": "gefa (to give)",
              "conjugations": [
                ["ég mun gefa", "við munum gefa"],
                ["þú munt gefa", "þið munuð gefa"],
                ["hann/hún mun gefa", "þeir/þær munu gefa"]
              ]
            },
            {
              "name": "vera / hafa",
              "description": "munu + vera/hafa",
              "dimmed": false,
              "verbs": "vera, hafa",
              "example": "vera (to be)",
              "conjugations": [
                ["ég mun vera", "við munum vera"],
                ["þú munt vera", "þið munuð vera"],
                ["hann/hún mun vera", "þeir/þær munu vera"]
              ]
            },
            {
              "name": "skulu + infinitive",
              "description": "expresses intention, obligation, or promise",
              "dimmed": false,
              "verbs": "tala, gefa, fara, vera, gera",
              "example": "tala (to speak)",
              "conjugations": [
                ["ég skal tala", "við skulum tala"],
                ["þú skalt tala", "þið skuluð tala"],
                ["hann/hún skal tala", "þeir/þær skulu tala"]
              ]
            }
          ]
        }
      ]
    },
    "nutid_vidtengingarhattur": {
      "label": "Nútíð viðtengingarháttar (Present Subjunctive)",
      "icon": "bi-question-circle",
      "description": "Expresses wishes, purpose, uncertainty, and indirect commands. Weak verbs: stem + -i, -ir, -i, -um, -ið, -i. Strong verbs: subjunctive stem (often = infinitive stem) + same endings.",
      "extra": "<strong>Endings:</strong> -i, -ir, -i, -um, -ið, -i<br><br>Used after: <em>að</em> (purpose clauses), <em>óska</em> (wish), <em>ef</em> (hypothetical if), and in indirect commands.",
      "columns": [
        {
          "label": "Weak verbs",
          "regular": {
            "name": "weak present subjunctive",
            "example": "tala (to speak)",
            "conjugations": [
              ["ég tali", "við tölum"],
              ["þú talir", "þið talið"],
              ["hann/hún tali", "þeir/þær tali"]
            ]
          },
          "patterns": [
            {
              "name": "class 1 subjunctive",
              "description": "stem + -i, -ir, -i, -um, -ið, -i",
              "dimmed": true,
              "verbs": "tala, borða, elska, kalla, laga, spila",
              "example": "kalla (to call)",
              "conjugations": [
                ["ég kalli", "við köllum"],
                ["þú kallir", "þið kallið"],
                ["hann/hún kalli", "þeir/þær kalli"]
              ]
            },
            {
              "name": "class 4 subjunctive",
              "description": "j-insertion in plural",
              "dimmed": false,
              "verbs": "telja, setja, leggja, þekkja",
              "example": "telja (to count)",
              "conjugations": [
                ["ég telji", "við teljum"],
                ["þú teljir", "þið teljið"],
                ["hann/hún telji", "þeir/þær telji"]
              ]
            }
          ]
        },
        {
          "label": "Strong verbs",
          "regular": null,
          "patterns": [
            {
              "name": "strong present subjunctive",
              "description": "infinitive stem + subjunctive endings; no ablaut in present subjunctive",
              "dimmed": false,
              "verbs": "gefa, bera, finna, bjóða, fara, halda, lesa",
              "example": "gefa (to give)",
              "conjugations": [
                ["ég gefi", "við gefum"],
                ["þú gefir", "þið gefið"],
                ["hann/hún gefi", "þeir/þær gefi"]
              ]
            },
            {
              "name": "fara / taka",
              "description": "class 6 — stem uses infinitive vowel",
              "dimmed": false,
              "verbs": "fara, taka, draga, grafa",
              "example": "fara (to go/travel)",
              "conjugations": [
                ["ég fari", "við förum"],
                ["þú farir", "þið farið"],
                ["hann/hún fari", "þeir/þær fari"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vera",
              "description": "fully irregular subjunctive",
              "dimmed": false,
              "verbs": "vera",
              "example": "vera (to be)",
              "conjugations": [
                ["ég sé", "við séum"],
                ["þú sért", "þið séuð"],
                ["hann/hún sé", "þeir/þær séu"]
              ]
            },
            {
              "name": "hafa",
              "description": "subjunctive of hafa",
              "dimmed": false,
              "verbs": "hafa",
              "example": "hafa (to have)",
              "conjugations": [
                ["ég hafi", "við höfum"],
                ["þú hafir", "þið hafið"],
                ["hann/hún hafi", "þeir/þær hafi"]
              ]
            },
            {
              "name": "geta / vilja / mega",
              "description": "preterite-present and irregular subjunctives",
              "dimmed": false,
              "verbs": "geta, vilja, mega, þurfa",
              "example": "geta (to be able)",
              "conjugations": [
                ["ég geti", "við getum"],
                ["þú getir", "þið getið"],
                ["hann/hún geti", "þeir/þær geti"]
              ]
            },
            {
              "name": "gera / koma / sjá",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gera, koma, sjá, fá, segja, verða",
              "example": "gera (to do)",
              "conjugations": [
                ["ég geri", "við gerum"],
                ["þú gerir", "þið gerið"],
                ["hann/hún geri", "þeir/þær geri"]
              ]
            }
          ]
        }
      ]
    },
    "thatid_vidtengingarhattur": {
      "label": "Þátíð viðtengingarháttar (Past Subjunctive)",
      "icon": "bi-shuffle",
      "description": "Expresses unreal/hypothetical past situations, wishes about the past, and polite requests. Weak verbs: past stem + -i endings. Strong verbs: past plural stem (often with umlaut) + -i endings.",
      "extra": "<strong>Endings:</strong> -i, -ir, -i, -um, -uð, -u<br><br>Strong verbs often use the plural past stem with umlaut where possible. This is the main form for counterfactual conditions (<em>ef ég væri...</em>).",
      "columns": [
        {
          "label": "Weak verbs",
          "regular": {
            "name": "weak past subjunctive",
            "example": "tala (to speak)",
            "conjugations": [
              ["ég talaði", "við töluðum"],
              ["þú talaðir", "þið töluðuð"],
              ["hann/hún talaði", "þeir/þær töluðu"]
            ]
          },
          "patterns": [
            {
              "name": "weak past subj.",
              "description": "identical to indicative past for weak verbs",
              "dimmed": true,
              "verbs": "tala, borða, elska, kalla, laga, spila",
              "example": "kalla (to call)",
              "conjugations": [
                ["ég kallaði", "við kölluðum"],
                ["þú kallaðir", "þið kölluðuð"],
                ["hann/hún kallaði", "þeir/þær kölluðu"]
              ]
            }
          ]
        },
        {
          "label": "Strong verbs",
          "regular": null,
          "patterns": [
            {
              "name": "strong past subjunctive",
              "description": "past plural stem + umlaut (if possible) + -i, -ir, -i, -um, -uð, -u",
              "dimmed": false,
              "verbs": "gefa, bera, finna, bjóða, fara, halda, lesa",
              "example": "gefa (to give)",
              "conjugations": [
                ["ég gæfi", "við gæfum"],
                ["þú gæfir", "þið gæfuð"],
                ["hann/hún gæfi", "þeir/þær gæfu"]
              ]
            },
            {
              "name": "fara / taka",
              "description": "class 6 past subjunctive with umlaut",
              "dimmed": false,
              "verbs": "fara, taka, draga, grafa",
              "example": "fara (to go/travel)",
              "conjugations": [
                ["ég færi", "við færum"],
                ["þú færir", "þið færuð"],
                ["hann/hún færi", "þeir/þær færu"]
              ]
            },
            {
              "name": "halda / falla",
              "description": "class 7 past subjunctive",
              "dimmed": false,
              "verbs": "halda, falla, heita, ganga, búa",
              "example": "halda (to hold)",
              "conjugations": [
                ["ég héldi", "við héldum"],
                ["þú héldir", "þið hélduð"],
                ["hann/hún héldi", "þeir/þær héldu"]
              ]
            }
          ]
        },
        {
          "label": "Irregular",
          "regular": null,
          "patterns": [
            {
              "name": "vera",
              "description": "væri — the most common past subjunctive",
              "dimmed": false,
              "verbs": "vera",
              "example": "vera (to be)",
              "conjugations": [
                ["ég væri", "við værum"],
                ["þú værir", "þið væruð"],
                ["hann/hún væri", "þeir/þær væru"]
              ]
            },
            {
              "name": "hafa",
              "description": "hefði — very common",
              "dimmed": false,
              "verbs": "hafa",
              "example": "hafa (to have)",
              "conjugations": [
                ["ég hefði", "við hefðum"],
                ["þú hefðir", "þið hefðuð"],
                ["hann/hún hefði", "þeir/þær hefðu"]
              ]
            },
            {
              "name": "geta / vilja / mega",
              "description": "preterite-present past subjunctives",
              "dimmed": false,
              "verbs": "geta, vilja, mega, þurfa",
              "example": "geta (to be able)",
              "conjugations": [
                ["ég gæti", "við gætum"],
                ["þú gætir", "þið gætuð"],
                ["hann/hún gæti", "þeir/þær gætu"]
              ]
            },
            {
              "name": "skulu / munu",
              "description": "modal past subjunctives",
              "dimmed": false,
              "verbs": "skulu, munu",
              "example": "skulu (shall)",
              "conjugations": [
                ["ég skyldi", "við skyldum"],
                ["þú skyldir", "þið skylduð"],
                ["hann/hún skyldi", "þeir/þær skyldu"]
              ]
            },
            {
              "name": "gera / koma / sjá",
              "description": "common irregulars",
              "dimmed": false,
              "verbs": "gera, koma, sjá, fá, segja, verða",
              "example": "gera (to do)",
              "conjugations": [
                ["ég gerði", "við gerðum"],
                ["þú gerðir", "þið gerðuð"],
                ["hann/hún gerði", "þeir/þær gerðu"]
              ]
            }
          ]
        }
      ]
    },
    "bodhattur": {
      "label": "Boðháttur (Imperative)",
      "icon": "bi-exclamation-circle",
      "description": "Gives commands or requests. Icelandic has singular (þú) and plural (þið) imperative forms. The singular is typically the bare stem; the plural adds -ið.",
      "columns": [
        {
          "label": "Weak verbs",
          "regular": {
            "name": "verb stem",
            "example": "tala (to speak)",
            "conjugations": [
              ["talaðu!", "talið!"],
              ["", ""],
              ["", ""]
            ]
          },
          "patterns": [
            {
              "name": "class 1 imperative",
              "description": "stem + -aðu (sg), -ið (pl)",
              "dimmed": true,
              "verbs": "tala, borða, elska, kalla, laga, spila",
              "example": "kalla (to call)",
              "conjugations": [
                ["kallaðu!", "kallið!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "class 2/3 imperative",
              "description": "stem + -ðu/-du (sg), -ið (pl)",
              "dimmed": false,
              "verbs": "herma, lifa, horfa, ætla",
              "example": "herma (to imitate)",
              "conjugations": [
                ["hermdu!", "hermið!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "class 4 imperative",
              "description": "bare stem (sg), -ið (pl)",
              "dimmed": false,
              "verbs": "telja, setja, leggja, þekkja",
              "example": "telja (to count)",
              "conjugations": [
                ["teldu!", "teljið!"],
                ["", ""],
                ["", ""]
              ]
            }
          ]
        },
        {
          "label": "Strong verbs",
          "regular": null,
          "patterns": [
            {
              "name": "strong imperative",
              "description": "bare stem (sg) — no vowel change; -ið (pl)",
              "dimmed": false,
              "verbs": "gefa, bera, finna, bjóða, fara, halda, lesa",
              "example": "gefa (to give)",
              "conjugations": [
                ["gefðu!", "gefið!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "fara / taka",
              "description": "irregular stem in imperative",
              "dimmed": false,
              "verbs": "fara, taka, draga",
              "example": "fara (to go/travel)",
              "conjugations": [
                ["farðu!", "farið!"],
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
              "name": "vera",
              "description": "unique imperative",
              "dimmed": false,
              "verbs": "vera",
              "example": "vera (to be)",
              "conjugations": [
                ["vertu!", "verið!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "hafa",
              "description": "irregular imperative",
              "dimmed": false,
              "verbs": "hafa",
              "example": "hafa (to have)",
              "conjugations": [
                ["hafðu!", "hafið!"],
                ["", ""],
                ["", ""]
              ]
            },
            {
              "name": "gera / koma / sjá",
              "description": "common irregular imperatives",
              "dimmed": false,
              "verbs": "gera, koma, sjá, fá, segja",
              "example": "gera (to do)",
              "conjugations": [
                ["gerðu!", "gerið!"],
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
    { "rule": "Strong masc. -ur → -ar", "singular": "hestur", "plural": "hestar", "examples": "hundur→hundar, bíll→bílar, dalur→dalir, hattur→hattar" },
    { "rule": "Strong masc. -ur → -ir", "singular": "gestur", "plural": "gestir", "examples": "staður→staðir, kettur→kettir, sveinn→sveinar" },
    { "rule": "Strong fem. (no ending) → -ir", "singular": "kona", "plural": "konur", "examples": "borg→borgir, gjöf→gjafir, nál→nálar" },
    { "rule": "Strong fem. -a → -ur", "singular": "saga", "plural": "sögur", "examples": "stúlka→stúlkur, gata→götur, tunga→tungur" },
    { "rule": "Strong neuter (no ending in pl.)", "singular": "barn", "plural": "börn", "examples": "land→lönd, orð→orð, skip→skip, hús→hús" },
    { "rule": "Weak masc. -i → -ar", "singular": "nemandi", "plural": "nemendur", "examples": "tími→tímar, bóndi→bændur, penni→pennar" },
    { "rule": "Weak fem. -a → -ur", "singular": "kirkja", "plural": "kirkjur", "examples": "vika→vikur, stúlka→stúlkur, nýra→nýru" },
    { "rule": "Weak neuter -a → -u", "singular": "hjarta", "plural": "hjörtu", "examples": "auga→augu, eyra→eyru, nýra→nýru" },
    { "rule": "i-umlaut in plural", "singular": "maður", "plural": "menn", "examples": "fótur→fætur, bók→bækur, nótt→nætur, tón→tónar" },
    { "rule": "Irregular", "singular": "kýr", "plural": "kýr", "examples": "mús→mýs, lús→lýs, gás→gæs, önd→endur" }
  ],
  "pronouns": {
    "categories": [
      {
        "name": "Nominative (Nefnifall)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "ég", "við"],
          ["2nd person", "þú", "þið"],
          ["3rd person (m)", "hann", "þeir"],
          ["3rd person (f)", "hún", "þær"],
          ["3rd person (n)", "það", "þau"]
        ]
      },
      {
        "name": "Accusative (Þolfall)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "mig", "okkur"],
          ["2nd person", "þig", "ykkur"],
          ["3rd person (m)", "hann", "þá"],
          ["3rd person (f)", "hana", "þær"],
          ["3rd person (n)", "það", "þau"]
        ]
      },
      {
        "name": "Dative (Þágufall)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "mér", "okkur"],
          ["2nd person", "þér", "ykkur"],
          ["3rd person (m)", "honum", "þeim"],
          ["3rd person (f)", "henni", "þeim"],
          ["3rd person (n)", "því", "þeim"]
        ]
      },
      {
        "name": "Genitive (Eignarfall)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "mín", "okkar"],
          ["2nd person", "þín", "ykkar"],
          ["3rd person (m)", "hans", "þeirra"],
          ["3rd person (f)", "hennar", "þeirra"],
          ["3rd person (n)", "þess", "þeirra"]
        ]
      },
      {
        "name": "Possessive Pronouns (Eignarfornöfn) — minn",
        "headers": ["Person", "Masc.", "Fem.", "Neut."],
        "rows": [
          ["1st sing.", "minn", "mín", "mitt"],
          ["2nd sing.", "þinn", "þín", "þitt"],
          ["3rd sing. (own)", "sinn", "sín", "sitt"],
          ["1st pl.", "okkar", "okkar", "okkar"],
          ["2nd pl.", "ykkar", "ykkar", "ykkar"]
        ]
      },
      {
        "name": "Reflexive Pronouns (Afturbeygt fornafn)",
        "headers": ["Case", "Form"],
        "rows": [
          ["Accusative", "sig"],
          ["Dative", "sér"],
          ["Genitive", "sín"]
        ]
      }
    ]
  },
  "chart": {
    "columns": ["Past (Þátíð)", "Present (Nútíð)", "Future (Framtíð)"],
    "rows": ["Simple (Einfalt)", "Perfect (Lýsingarháttur þátíðar)"],
    "groups": ["Weak: tala", "Strong: gefa", "Irreg: vera"],
    "cells": [
      [
        { "form": "Þátíð", "rule": "Weak: stem+-aði; Strong: ablaut",
          "er": [["ég talaði", "við töluðum"], ["þú talaðir", "þið töluðuð"], ["hann talaði", "þeir töluðu"]],
          "ir": [["ég gaf", "við gáfum"], ["þú gafst", "þið gáfuð"], ["hann gaf", "þeir gáfu"]],
          "re": [["ég var", "við vorum"], ["þú varst", "þið voruð"], ["hann var", "þeir voru"]] },
        { "form": "Nútíð", "rule": "Stem + personal endings",
          "er": [["ég tala", "við tölum"], ["þú talar", "þið talið"], ["hann talar", "þeir tala"]],
          "ir": [["ég gef", "við gefum"], ["þú gefur", "þið gefið"], ["hann gefur", "þeir gefa"]],
          "re": [["ég er", "við erum"], ["þú ert", "þið eruð"], ["hann er", "þeir eru"]] },
        { "form": "Framtíð", "rule": "munu + infinitive",
          "er": [["ég mun tala", "við munum tala"], ["þú munt tala", "þið munuð tala"], ["hann mun tala", "þeir munu tala"]],
          "ir": [["ég mun gefa", "við munum gefa"], ["þú munt gefa", "þið munuð gefa"], ["hann mun gefa", "þeir munu gefa"]],
          "re": [["ég mun vera", "við munum vera"], ["þú munt vera", "þið munuð vera"], ["hann mun vera", "þeir munu vera"]] }
      ],
      [
        { "form": "Pluskvamperfekt", "rule": "hafði + past participle",
          "er": [["ég hafði talað", "við höfðum talað"], ["þú hafðir talað", "þið höfðuð talað"], ["hann hafði talað", "þeir höfðu talað"]],
          "ir": [["ég hafði gefið", "við höfðum gefið"], ["þú hafðir gefið", "þið höfðuð gefið"], ["hann hafði gefið", "þeir höfðu gefið"]],
          "re": [["ég hafði verið", "við höfðum verið"], ["þú hafðir verið", "þið höfðuð verið"], ["hann hafði verið", "þeir höfðu verið"]] },
        { "form": "Perfekt", "rule": "hef/hefur + past participle",
          "er": [["ég hef talað", "við höfum talað"], ["þú hefur talað", "þið hafið talað"], ["hann hefur talað", "þeir hafa talað"]],
          "ir": [["ég hef gefið", "við höfum gefið"], ["þú hefur gefið", "þið hafið gefið"], ["hann hefur gefið", "þeir hafa gefið"]],
          "re": [["ég hef verið", "við höfum verið"], ["þú hefur verið", "þið hafið verið"], ["hann hefur verið", "þeir hafa verið"]] },
        null
      ]
    ]
  }
};
