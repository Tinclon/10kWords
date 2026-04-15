var greekData = {
  "language": "Greek",
  "title": "Greek Verbs",
  "pages": [
    { "key": "conjugation", "icon": "bi-table", "label": "Conjugations" },
    { "key": "chart", "icon": "bi-grid-3x3", "label": "Chart" },
    { "key": "pluralization", "icon": "bi-files", "label": "Pluralization" },
    { "key": "pronouns", "icon": "bi-person", "label": "Pronouns" }
  ],
  "theme": {
    "primary": "#0277bd",
    "secondary": "#01579b",
    "tableHeader": "#0288d1",
    "stripedRow": "#e1f5fe",
    "border": "#81d4fa"
  },
  "tenses": {
    "present": {
      "label": "Present (Ενεστώτας)",
      "icon": "bi-record-circle",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "είμαι",
              "description": "fully irregular — no personal endings, unique forms",
              "dimmed": false,
              "verbs": "είμαι",
              "example": "είμαι (to be)",
              "conjugations": [
                ["είμαι", "είμαστε"],
                ["είσαι", "είστε"],
                ["είναι", "είναι"]
              ]
            },
            {
              "name": "έχω",
              "description": "regular Group A pattern",
              "dimmed": true,
              "verbs": "έχω",
              "example": "έχω (to have)",
              "conjugations": [
                ["έχω", "έχουμε"],
                ["έχεις", "έχετε"],
                ["έχει", "έχουν"]
              ]
            },
            {
              "name": "πηγαίνω/πάω",
              "description": "dual forms — πηγαίνω regular, πάω contracted",
              "dimmed": false,
              "verbs": "πηγαίνω, πάω",
              "example": "πηγαίνω/πάω (to go)",
              "conjugations": [
                ["πηγαίνω / πάω", "πηγαίνουμε / πάμε"],
                ["πηγαίνεις / πας", "πηγαίνετε / πάτε"],
                ["πηγαίνει / πάει", "πηγαίνουν / πάνε"]
              ]
            },
            {
              "name": "βλέπω",
              "description": "regular Group A — irregular only in aorist stem",
              "dimmed": true,
              "verbs": "βλέπω",
              "example": "βλέπω (to see)",
              "conjugations": [
                ["βλέπω", "βλέπουμε"],
                ["βλέπεις", "βλέπετε"],
                ["βλέπει", "βλέπουν"]
              ]
            },
            {
              "name": "λέω",
              "description": "contracted verb — irregular present forms",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["λέω", "λέμε"],
                ["λες", "λέτε"],
                ["λέει", "λένε"]
              ]
            },
            {
              "name": "τρώω",
              "description": "contracted verb — irregular present forms",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["τρώω", "τρώμε"],
                ["τρως", "τρώτε"],
                ["τρώει", "τρώνε"]
              ]
            },
            {
              "name": "πίνω",
              "description": "regular Group A — irregular only in aorist stem",
              "dimmed": true,
              "verbs": "πίνω",
              "example": "πίνω (to drink)",
              "conjugations": [
                ["πίνω", "πίνουμε"],
                ["πίνεις", "πίνετε"],
                ["πίνει", "πίνουν"]
              ]
            },
            {
              "name": "ξέρω",
              "description": "defective — no aorist, uses μάθ- stem for perfective",
              "dimmed": false,
              "verbs": "ξέρω",
              "example": "ξέρω (to know)",
              "conjugations": [
                ["ξέρω", "ξέρουμε"],
                ["ξέρεις", "ξέρετε"],
                ["ξέρει", "ξέρουν"]
              ]
            },
            {
              "name": "δίνω",
              "description": "regular Group A — irregular aorist stem δω-",
              "dimmed": true,
              "verbs": "δίνω",
              "example": "δίνω (to give)",
              "conjugations": [
                ["δίνω", "δίνουμε"],
                ["δίνεις", "δίνετε"],
                ["δίνει", "δίνουν"]
              ]
            },
            {
              "name": "βάζω",
              "description": "regular Group A — irregular aorist stem βαλ-",
              "dimmed": true,
              "verbs": "βάζω",
              "example": "βάζω (to put)",
              "conjugations": [
                ["βάζω", "βάζουμε"],
                ["βάζεις", "βάζετε"],
                ["βάζει", "βάζουν"]
              ]
            },
            {
              "name": "παίρνω",
              "description": "regular Group A — irregular aorist stem πήρ-",
              "dimmed": true,
              "verbs": "παίρνω",
              "example": "παίρνω (to take)",
              "conjugations": [
                ["παίρνω", "παίρνουμε"],
                ["παίρνεις", "παίρνετε"],
                ["παίρνει", "παίρνουν"]
              ]
            },
            {
              "name": "φεύγω",
              "description": "regular Group A — irregular aorist stem φυγ-",
              "dimmed": true,
              "verbs": "φεύγω",
              "example": "φεύγω (to leave)",
              "conjugations": [
                ["φεύγω", "φεύγουμε"],
                ["φεύγεις", "φεύγετε"],
                ["φεύγει", "φεύγουν"]
              ]
            },
            {
              "name": "θέλω",
              "description": "regular Group A in present",
              "dimmed": true,
              "verbs": "θέλω",
              "example": "θέλω (to want)",
              "conjugations": [
                ["θέλω", "θέλουμε"],
                ["θέλεις", "θέλετε"],
                ["θέλει", "θέλουν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A (-ω)",
            "example": "γράφω (to write)",
            "conjugations": [
              ["γράφω", "γράφουμε"],
              ["γράφεις", "γράφετε"],
              ["γράφει", "γράφουν"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "Group B — defective, no imperative",
              "dimmed": false,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["μπορώ", "μπορούμε"],
                ["μπορείς", "μπορείτε"],
                ["μπορεί", "μπορούν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B (-ώ/-άω)",
            "example": "μιλώ/μιλάω (to speak)",
            "conjugations": [
              ["μιλώ / μιλάω", "μιλούμε / μιλάμε"],
              ["μιλάς", "μιλάτε"],
              ["μιλά / μιλάει", "μιλούν / μιλάνε"]
            ]
          }
        }
      ]
    },
    "aorist": {
      "label": "Aorist / Simple Past (Αόριστος)",
      "icon": "bi-check2",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "είμαι",
              "description": "fully irregular — ήμουν(α) forms",
              "dimmed": false,
              "verbs": "είμαι",
              "example": "είμαι (to be) — no true aorist, uses imperfect",
              "conjugations": [
                ["ήμουν(α)", "ήμασταν"],
                ["ήσουν(α)", "ήσασταν"],
                ["ήταν(ε)", "ήταν(ε)"]
              ]
            },
            {
              "name": "έχω",
              "description": "irregular aorist stem είχ-",
              "dimmed": false,
              "verbs": "έχω",
              "example": "έχω (to have) — uses imperfect form",
              "conjugations": [
                ["είχα", "είχαμε"],
                ["είχες", "είχατε"],
                ["είχε", "είχαν"]
              ]
            },
            {
              "name": "πηγαίνω/πάω",
              "description": "suppletive aorist stem πήγ-",
              "dimmed": false,
              "verbs": "πηγαίνω, πάω",
              "example": "πηγαίνω/πάω (to go)",
              "conjugations": [
                ["πήγα", "πήγαμε"],
                ["πήγες", "πήγατε"],
                ["πήγε", "πήγαν"]
              ]
            },
            {
              "name": "βλέπω",
              "description": "aorist stem είδ- (suppletive)",
              "dimmed": false,
              "verbs": "βλέπω",
              "example": "βλέπω (to see)",
              "conjugations": [
                ["είδα", "είδαμε"],
                ["είδες", "είδατε"],
                ["είδε", "είδαν"]
              ]
            },
            {
              "name": "λέω",
              "description": "aorist stem ειπ-",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["είπα", "είπαμε"],
                ["είπες", "είπατε"],
                ["είπε", "είπαν"]
              ]
            },
            {
              "name": "τρώω",
              "description": "aorist stem φα- (suppletive)",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["έφαγα", "φάγαμε"],
                ["έφαγες", "φάγατε"],
                ["έφαγε", "φάγαν(ε)"]
              ]
            },
            {
              "name": "πίνω",
              "description": "aorist stem ήπι-",
              "dimmed": false,
              "verbs": "πίνω",
              "example": "πίνω (to drink)",
              "conjugations": [
                ["ήπια", "ήπιαμε"],
                ["ήπιες", "ήπιατε"],
                ["ήπιε", "ήπιαν"]
              ]
            },
            {
              "name": "δίνω",
              "description": "aorist stem έδω- → έδωσ-",
              "dimmed": false,
              "verbs": "δίνω",
              "example": "δίνω (to give)",
              "conjugations": [
                ["έδωσα", "δώσαμε"],
                ["έδωσες", "δώσατε"],
                ["έδωσε", "δώσαν(ε)"]
              ]
            },
            {
              "name": "βάζω",
              "description": "aorist stem έβαλ-",
              "dimmed": false,
              "verbs": "βάζω",
              "example": "βάζω (to put)",
              "conjugations": [
                ["έβαλα", "βάλαμε"],
                ["έβαλες", "βάλατε"],
                ["έβαλε", "βάλαν(ε)"]
              ]
            },
            {
              "name": "παίρνω",
              "description": "aorist stem πήρ-",
              "dimmed": false,
              "verbs": "παίρνω",
              "example": "παίρνω (to take)",
              "conjugations": [
                ["πήρα", "πήραμε"],
                ["πήρες", "πήρατε"],
                ["πήρε", "πήραν"]
              ]
            },
            {
              "name": "φεύγω",
              "description": "aorist stem έφυγ-",
              "dimmed": false,
              "verbs": "φεύγω",
              "example": "φεύγω (to leave)",
              "conjugations": [
                ["έφυγα", "φύγαμε"],
                ["έφυγες", "φύγατε"],
                ["έφυγε", "φύγαν(ε)"]
              ]
            },
            {
              "name": "θέλω",
              "description": "aorist stem θέλησ-",
              "dimmed": false,
              "verbs": "θέλω",
              "example": "θέλω (to want)",
              "conjugations": [
                ["ήθελα", "θέλαμε"],
                ["ήθελες", "θέλατε"],
                ["ήθελε", "θέλαν(ε)"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A aorist (-σα)",
            "example": "γράφω → έγραψα (to write)",
            "conjugations": [
              ["έγραψα", "γράψαμε"],
              ["έγραψες", "γράψατε"],
              ["έγραψε", "γράψαν(ε)"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "aorist stem μπόρεσ-",
              "dimmed": false,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["μπόρεσα", "μπορέσαμε"],
                ["μπόρεσες", "μπορέσατε"],
                ["μπόρεσε", "μπορέσαν(ε)"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B aorist (-ησα)",
            "example": "μιλώ → μίλησα (to speak)",
            "conjugations": [
              ["μίλησα", "μιλήσαμε"],
              ["μίλησες", "μιλήσατε"],
              ["μίλησε", "μιλήσαν(ε)"]
            ]
          }
        }
      ]
    },
    "imperfect": {
      "label": "Imperfect / Past Continuous (Παρατατικός)",
      "icon": "bi-arrow-repeat",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "είμαι",
              "description": "fully irregular",
              "dimmed": false,
              "verbs": "είμαι",
              "example": "είμαι (to be)",
              "conjugations": [
                ["ήμουν(α)", "ήμασταν"],
                ["ήσουν(α)", "ήσασταν"],
                ["ήταν(ε)", "ήταν(ε)"]
              ]
            },
            {
              "name": "έχω",
              "description": "irregular imperfect",
              "dimmed": false,
              "verbs": "έχω",
              "example": "έχω (to have)",
              "conjugations": [
                ["είχα", "είχαμε"],
                ["είχες", "είχατε"],
                ["είχε", "είχαν"]
              ]
            },
            {
              "name": "πηγαίνω/πάω",
              "description": "imperfect stem πήγαιν-",
              "dimmed": false,
              "verbs": "πηγαίνω, πάω",
              "example": "πηγαίνω/πάω (to go)",
              "conjugations": [
                ["πήγαινα", "πηγαίναμε"],
                ["πήγαινες", "πηγαίνατε"],
                ["πήγαινε", "πήγαιναν"]
              ]
            },
            {
              "name": "λέω",
              "description": "irregular imperfect stem έλεγ-",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["έλεγα", "λέγαμε"],
                ["έλεγες", "λέγατε"],
                ["έλεγε", "λέγαν(ε)"]
              ]
            },
            {
              "name": "τρώω",
              "description": "irregular imperfect stem έτρωγ-",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["έτρωγα", "τρώγαμε"],
                ["έτρωγες", "τρώγατε"],
                ["έτρωγε", "τρώγαν(ε)"]
              ]
            },
            {
              "name": "βλέπω",
              "description": "regular imperfect",
              "dimmed": true,
              "verbs": "βλέπω",
              "example": "βλέπω (to see)",
              "conjugations": [
                ["έβλεπα", "βλέπαμε"],
                ["έβλεπες", "βλέπατε"],
                ["έβλεπε", "βλέπαν(ε)"]
              ]
            },
            {
              "name": "πίνω",
              "description": "irregular imperfect stem έπιν-",
              "dimmed": false,
              "verbs": "πίνω",
              "example": "πίνω (to drink)",
              "conjugations": [
                ["έπινα", "πίναμε"],
                ["έπινες", "πίνατε"],
                ["έπινε", "πίναν(ε)"]
              ]
            },
            {
              "name": "θέλω",
              "description": "irregular imperfect",
              "dimmed": false,
              "verbs": "θέλω",
              "example": "θέλω (to want)",
              "conjugations": [
                ["ήθελα", "θέλαμε"],
                ["ήθελες", "θέλατε"],
                ["ήθελε", "θέλαν(ε)"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A imperfect (-α)",
            "example": "γράφω → έγραφα (to write)",
            "conjugations": [
              ["έγραφα", "γράφαμε"],
              ["έγραφες", "γράφατε"],
              ["έγραφε", "γράφαν(ε)"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "regular Group B imperfect",
              "dimmed": true,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["μπορούσα", "μπορούσαμε"],
                ["μπορούσες", "μπορούσατε"],
                ["μπορούσε", "μπορούσαν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B imperfect (-ούσα)",
            "example": "μιλώ → μιλούσα (to speak)",
            "conjugations": [
              ["μιλούσα", "μιλούσαμε"],
              ["μιλούσες", "μιλούσατε"],
              ["μιλούσε", "μιλούσαν"]
            ]
          }
        }
      ]
    },
    "present_perfect": {
      "label": "Present Perfect (Παρακείμενος)",
      "icon": "bi-check2-all",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "είμαι",
              "description": "no perfect form — use aorist or present context",
              "dimmed": false,
              "verbs": "είμαι",
              "example": "είμαι (to be) — no standard perfect",
              "conjugations": [
                ["—", "—"],
                ["—", "—"],
                ["—", "—"]
              ]
            },
            {
              "name": "έχω",
              "description": "regular perfect with invariable participle",
              "dimmed": true,
              "verbs": "έχω",
              "example": "έχω (to have)",
              "conjugations": [
                ["έχω έχει*", "—"],
                ["—", "—"],
                ["—", "—"]
              ]
            },
            {
              "name": "βλέπω",
              "description": "έχω + δει (invariable)",
              "dimmed": false,
              "verbs": "βλέπω",
              "example": "βλέπω (to see)",
              "conjugations": [
                ["έχω δει", "έχουμε δει"],
                ["έχεις δει", "έχετε δει"],
                ["έχει δει", "έχουν δει"]
              ]
            },
            {
              "name": "λέω",
              "description": "έχω + πει (invariable)",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["έχω πει", "έχουμε πει"],
                ["έχεις πει", "έχετε πει"],
                ["έχει πει", "έχουν πει"]
              ]
            },
            {
              "name": "τρώω",
              "description": "έχω + φάει (invariable)",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["έχω φάει", "έχουμε φάει"],
                ["έχεις φάει", "έχετε φάει"],
                ["έχει φάει", "έχουν φάει"]
              ]
            },
            {
              "name": "πίνω",
              "description": "έχω + πιει (invariable)",
              "dimmed": false,
              "verbs": "πίνω",
              "example": "πίνω (to drink)",
              "conjugations": [
                ["έχω πιει", "έχουμε πιει"],
                ["έχεις πιει", "έχετε πιει"],
                ["έχει πιει", "έχουν πιει"]
              ]
            },
            {
              "name": "δίνω",
              "description": "έχω + δώσει (invariable)",
              "dimmed": false,
              "verbs": "δίνω",
              "example": "δίνω (to give)",
              "conjugations": [
                ["έχω δώσει", "έχουμε δώσει"],
                ["έχεις δώσει", "έχετε δώσει"],
                ["έχει δώσει", "έχουν δώσει"]
              ]
            },
            {
              "name": "παίρνω",
              "description": "έχω + πάρει (invariable)",
              "dimmed": false,
              "verbs": "παίρνω",
              "example": "παίρνω (to take)",
              "conjugations": [
                ["έχω πάρει", "έχουμε πάρει"],
                ["έχεις πάρει", "έχετε πάρει"],
                ["έχει πάρει", "έχουν πάρει"]
              ]
            },
            {
              "name": "φεύγω",
              "description": "έχω + φύγει (invariable)",
              "dimmed": false,
              "verbs": "φεύγω",
              "example": "φεύγω (to leave)",
              "conjugations": [
                ["έχω φύγει", "έχουμε φύγει"],
                ["έχεις φύγει", "έχετε φύγει"],
                ["έχει φύγει", "έχουν φύγει"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A perfect (έχω + aorist stem + -ει)",
            "example": "γράφω → έχω γράψει (to write)",
            "conjugations": [
              ["έχω γράψει", "έχουμε γράψει"],
              ["έχεις γράψει", "έχετε γράψει"],
              ["έχει γράψει", "έχουν γράψει"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "έχω + μπορέσει",
              "dimmed": true,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["έχω μπορέσει", "έχουμε μπορέσει"],
                ["έχεις μπορέσει", "έχετε μπορέσει"],
                ["έχει μπορέσει", "έχουν μπορέσει"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B perfect (έχω + -ήσει)",
            "example": "μιλώ → έχω μιλήσει (to speak)",
            "conjugations": [
              ["έχω μιλήσει", "έχουμε μιλήσει"],
              ["έχεις μιλήσει", "έχετε μιλήσει"],
              ["έχει μιλήσει", "έχουν μιλήσει"]
            ]
          }
        }
      ]
    },
    "past_perfect": {
      "label": "Past Perfect (Υπερσυντέλικος)",
      "icon": "bi-skip-backward",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "βλέπω",
              "description": "είχα + δει",
              "dimmed": false,
              "verbs": "βλέπω",
              "example": "βλέπω (to see)",
              "conjugations": [
                ["είχα δει", "είχαμε δει"],
                ["είχες δει", "είχατε δει"],
                ["είχε δει", "είχαν δει"]
              ]
            },
            {
              "name": "λέω",
              "description": "είχα + πει",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["είχα πει", "είχαμε πει"],
                ["είχες πει", "είχατε πει"],
                ["είχε πει", "είχαν πει"]
              ]
            },
            {
              "name": "τρώω",
              "description": "είχα + φάει",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["είχα φάει", "είχαμε φάει"],
                ["είχες φάει", "είχατε φάει"],
                ["είχε φάει", "είχαν φάει"]
              ]
            },
            {
              "name": "παίρνω",
              "description": "είχα + πάρει",
              "dimmed": false,
              "verbs": "παίρνω",
              "example": "παίρνω (to take)",
              "conjugations": [
                ["είχα πάρει", "είχαμε πάρει"],
                ["είχες πάρει", "είχατε πάρει"],
                ["είχε πάρει", "είχαν πάρει"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A past perfect (είχα + aorist stem + -ει)",
            "example": "γράφω → είχα γράψει (to write)",
            "conjugations": [
              ["είχα γράψει", "είχαμε γράψει"],
              ["είχες γράψει", "είχατε γράψει"],
              ["είχε γράψει", "είχαν γράψει"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "είχα + μπορέσει",
              "dimmed": true,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["είχα μπορέσει", "είχαμε μπορέσει"],
                ["είχες μπορέσει", "είχατε μπορέσει"],
                ["είχε μπορέσει", "είχαν μπορέσει"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B past perfect (είχα + -ήσει)",
            "example": "μιλώ → είχα μιλήσει (to speak)",
            "conjugations": [
              ["είχα μιλήσει", "είχαμε μιλήσει"],
              ["είχες μιλήσει", "είχατε μιλήσει"],
              ["είχε μιλήσει", "είχαν μιλήσει"]
            ]
          }
        }
      ]
    },
    "simple_future": {
      "label": "Simple Future (Μέλλοντας στιγμιαίος)",
      "icon": "bi-arrow-right",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "είμαι",
              "description": "θα + είμαι (no perfective form)",
              "dimmed": false,
              "verbs": "είμαι",
              "example": "είμαι (to be)",
              "conjugations": [
                ["θα είμαι", "θα είμαστε"],
                ["θα είσαι", "θα είστε"],
                ["θα είναι", "θα είναι"]
              ]
            },
            {
              "name": "έχω",
              "description": "θα + aorist subjunctive",
              "dimmed": true,
              "verbs": "έχω",
              "example": "έχω (to have)",
              "conjugations": [
                ["θα έχω", "θα έχουμε"],
                ["θα έχεις", "θα έχετε"],
                ["θα έχει", "θα έχουν"]
              ]
            },
            {
              "name": "πηγαίνω/πάω",
              "description": "θα + πάω (perfective)",
              "dimmed": false,
              "verbs": "πηγαίνω, πάω",
              "example": "πηγαίνω/πάω (to go)",
              "conjugations": [
                ["θα πάω", "θα πάμε"],
                ["θα πας", "θα πάτε"],
                ["θα πάει", "θα πάνε"]
              ]
            },
            {
              "name": "βλέπω",
              "description": "θα + δω (perfective subjunctive)",
              "dimmed": false,
              "verbs": "βλέπω",
              "example": "βλέπω (to see)",
              "conjugations": [
                ["θα δω", "θα δούμε"],
                ["θα δεις", "θα δείτε"],
                ["θα δει", "θα δουν"]
              ]
            },
            {
              "name": "λέω",
              "description": "θα + πω (perfective subjunctive)",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["θα πω", "θα πούμε"],
                ["θα πεις", "θα πείτε"],
                ["θα πει", "θα πουν"]
              ]
            },
            {
              "name": "τρώω",
              "description": "θα + φάω (perfective subjunctive)",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["θα φάω", "θα φάμε"],
                ["θα φας", "θα φάτε"],
                ["θα φάει", "θα φάνε"]
              ]
            },
            {
              "name": "πίνω",
              "description": "θα + πιω (perfective subjunctive)",
              "dimmed": false,
              "verbs": "πίνω",
              "example": "πίνω (to drink)",
              "conjugations": [
                ["θα πιω", "θα πιούμε"],
                ["θα πιεις", "θα πιείτε"],
                ["θα πιει", "θα πιουν"]
              ]
            },
            {
              "name": "δίνω",
              "description": "θα + δώσω (perfective)",
              "dimmed": false,
              "verbs": "δίνω",
              "example": "δίνω (to give)",
              "conjugations": [
                ["θα δώσω", "θα δώσουμε"],
                ["θα δώσεις", "θα δώσετε"],
                ["θα δώσει", "θα δώσουν"]
              ]
            },
            {
              "name": "παίρνω",
              "description": "θα + πάρω (perfective)",
              "dimmed": false,
              "verbs": "παίρνω",
              "example": "παίρνω (to take)",
              "conjugations": [
                ["θα πάρω", "θα πάρουμε"],
                ["θα πάρεις", "θα πάρετε"],
                ["θα πάρει", "θα πάρουν"]
              ]
            },
            {
              "name": "φεύγω",
              "description": "θα + φύγω (perfective)",
              "dimmed": false,
              "verbs": "φεύγω",
              "example": "φεύγω (to leave)",
              "conjugations": [
                ["θα φύγω", "θα φύγουμε"],
                ["θα φύγεις", "θα φύγετε"],
                ["θα φύγει", "θα φύγουν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A simple future (θα + perfective)",
            "example": "γράφω → θα γράψω (to write)",
            "conjugations": [
              ["θα γράψω", "θα γράψουμε"],
              ["θα γράψεις", "θα γράψετε"],
              ["θα γράψει", "θα γράψουν"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "θα + μπορέσω (perfective)",
              "dimmed": true,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["θα μπορέσω", "θα μπορέσουμε"],
                ["θα μπορέσεις", "θα μπορέσετε"],
                ["θα μπορέσει", "θα μπορέσουν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B simple future (θα + -ήσω)",
            "example": "μιλώ → θα μιλήσω (to speak)",
            "conjugations": [
              ["θα μιλήσω", "θα μιλήσουμε"],
              ["θα μιλήσεις", "θα μιλήσετε"],
              ["θα μιλήσει", "θα μιλήσουν"]
            ]
          }
        }
      ]
    },
    "continuous_future": {
      "label": "Continuous Future (Μέλλοντας εξακολουθητικός)",
      "icon": "bi-arrow-right-circle",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "είμαι",
              "description": "θα + present (same as simple future for είμαι)",
              "dimmed": false,
              "verbs": "είμαι",
              "example": "είμαι (to be)",
              "conjugations": [
                ["θα είμαι", "θα είμαστε"],
                ["θα είσαι", "θα είστε"],
                ["θα είναι", "θα είναι"]
              ]
            },
            {
              "name": "λέω",
              "description": "θα + present (imperfective)",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["θα λέω", "θα λέμε"],
                ["θα λες", "θα λέτε"],
                ["θα λέει", "θα λένε"]
              ]
            },
            {
              "name": "τρώω",
              "description": "θα + present (imperfective)",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["θα τρώω", "θα τρώμε"],
                ["θα τρως", "θα τρώτε"],
                ["θα τρώει", "θα τρώνε"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A continuous future (θα + present)",
            "example": "γράφω → θα γράφω (to write)",
            "conjugations": [
              ["θα γράφω", "θα γράφουμε"],
              ["θα γράφεις", "θα γράφετε"],
              ["θα γράφει", "θα γράφουν"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "θα + present (imperfective)",
              "dimmed": true,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["θα μπορώ", "θα μπορούμε"],
                ["θα μπορείς", "θα μπορείτε"],
                ["θα μπορεί", "θα μπορούν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B continuous future (θα + present)",
            "example": "μιλώ → θα μιλώ/μιλάω (to speak)",
            "conjugations": [
              ["θα μιλώ / μιλάω", "θα μιλούμε / μιλάμε"],
              ["θα μιλάς", "θα μιλάτε"],
              ["θα μιλά / μιλάει", "θα μιλούν / μιλάνε"]
            ]
          }
        }
      ]
    },
    "subj_present": {
      "label": "Subjunctive Present (Υποτακτική Ενεστώτα)",
      "icon": "bi-chat-left-dots",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "είμαι",
              "description": "να + present forms",
              "dimmed": false,
              "verbs": "είμαι",
              "example": "είμαι (to be)",
              "conjugations": [
                ["να είμαι", "να είμαστε"],
                ["να είσαι", "να είστε"],
                ["να είναι", "να είναι"]
              ]
            },
            {
              "name": "λέω",
              "description": "να + present (imperfective)",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["να λέω", "να λέμε"],
                ["να λες", "να λέτε"],
                ["να λέει", "να λένε"]
              ]
            },
            {
              "name": "τρώω",
              "description": "να + present (imperfective)",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["να τρώω", "να τρώμε"],
                ["να τρως", "να τρώτε"],
                ["να τρώει", "να τρώνε"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A subjunctive present (να + present)",
            "example": "γράφω → να γράφω (to write)",
            "conjugations": [
              ["να γράφω", "να γράφουμε"],
              ["να γράφεις", "να γράφετε"],
              ["να γράφει", "να γράφουν"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "να + present (imperfective)",
              "dimmed": true,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["να μπορώ", "να μπορούμε"],
                ["να μπορείς", "να μπορείτε"],
                ["να μπορεί", "να μπορούν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B subjunctive present (να + present)",
            "example": "μιλώ → να μιλώ/μιλάω (to speak)",
            "conjugations": [
              ["να μιλώ / μιλάω", "να μιλούμε / μιλάμε"],
              ["να μιλάς", "να μιλάτε"],
              ["να μιλά / μιλάει", "να μιλούν / μιλάνε"]
            ]
          }
        }
      ]
    },
    "subj_aorist": {
      "label": "Subjunctive Aorist (Υποτακτική Αορίστου)",
      "icon": "bi-chat-left-text",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "βλέπω",
              "description": "να + δω (perfective subjunctive)",
              "dimmed": false,
              "verbs": "βλέπω",
              "example": "βλέπω (to see)",
              "conjugations": [
                ["να δω", "να δούμε"],
                ["να δεις", "να δείτε"],
                ["να δει", "να δουν"]
              ]
            },
            {
              "name": "λέω",
              "description": "να + πω (perfective subjunctive)",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["να πω", "να πούμε"],
                ["να πεις", "να πείτε"],
                ["να πει", "να πουν"]
              ]
            },
            {
              "name": "τρώω",
              "description": "να + φάω (perfective subjunctive)",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["να φάω", "να φάμε"],
                ["να φας", "να φάτε"],
                ["να φάει", "να φάνε"]
              ]
            },
            {
              "name": "πίνω",
              "description": "να + πιω (perfective subjunctive)",
              "dimmed": false,
              "verbs": "πίνω",
              "example": "πίνω (to drink)",
              "conjugations": [
                ["να πιω", "να πιούμε"],
                ["να πιεις", "να πιείτε"],
                ["να πιει", "να πιουν"]
              ]
            },
            {
              "name": "δίνω",
              "description": "να + δώσω (perfective)",
              "dimmed": false,
              "verbs": "δίνω",
              "example": "δίνω (to give)",
              "conjugations": [
                ["να δώσω", "να δώσουμε"],
                ["να δώσεις", "να δώσετε"],
                ["να δώσει", "να δώσουν"]
              ]
            },
            {
              "name": "παίρνω",
              "description": "να + πάρω (perfective)",
              "dimmed": false,
              "verbs": "παίρνω",
              "example": "παίρνω (to take)",
              "conjugations": [
                ["να πάρω", "να πάρουμε"],
                ["να πάρεις", "να πάρετε"],
                ["να πάρει", "να πάρουν"]
              ]
            },
            {
              "name": "φεύγω",
              "description": "να + φύγω (perfective)",
              "dimmed": false,
              "verbs": "φεύγω",
              "example": "φεύγω (to leave)",
              "conjugations": [
                ["να φύγω", "να φύγουμε"],
                ["να φύγεις", "να φύγετε"],
                ["να φύγει", "να φύγουν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A subjunctive aorist (να + perfective)",
            "example": "γράφω → να γράψω (to write)",
            "conjugations": [
              ["να γράψω", "να γράψουμε"],
              ["να γράψεις", "να γράψετε"],
              ["να γράψει", "να γράψουν"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "να + μπορέσω (perfective)",
              "dimmed": true,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["να μπορέσω", "να μπορέσουμε"],
                ["να μπορέσεις", "να μπορέσετε"],
                ["να μπορέσει", "να μπορέσουν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B subjunctive aorist (να + -ήσω)",
            "example": "μιλώ → να μιλήσω (to speak)",
            "conjugations": [
              ["να μιλήσω", "να μιλήσουμε"],
              ["να μιλήσεις", "να μιλήσετε"],
              ["να μιλήσει", "να μιλήσουν"]
            ]
          }
        }
      ]
    },
    "imp_present": {
      "label": "Imperative Present (Προστακτική Ενεστώτα)",
      "icon": "bi-exclamation-circle",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "λέω",
              "description": "irregular imperative forms",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["—", "—"],
                ["λέγε", "λέγετε"],
                ["—", "—"]
              ]
            },
            {
              "name": "τρώω",
              "description": "irregular imperative forms",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["—", "—"],
                ["τρώγε", "τρώγετε"],
                ["—", "—"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A imperative present (-ε/-ετε)",
            "example": "γράφω → γράφε (to write)",
            "conjugations": [
              ["—", "—"],
              ["γράφε", "γράφετε"],
              ["—", "—"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [],
          "regular": {
            "name": "regular Group B imperative present (-α/-άτε)",
            "example": "μιλώ → μίλα (to speak)",
            "conjugations": [
              ["—", "—"],
              ["μίλα", "μιλάτε"],
              ["—", "—"]
            ]
          }
        }
      ]
    },
    "imp_aorist": {
      "label": "Imperative Aorist (Προστακτική Αορίστου)",
      "icon": "bi-exclamation-triangle",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "βλέπω",
              "description": "irregular aorist imperative δες",
              "dimmed": false,
              "verbs": "βλέπω",
              "example": "βλέπω (to see)",
              "conjugations": [
                ["—", "—"],
                ["δες", "δείτε"],
                ["—", "—"]
              ]
            },
            {
              "name": "λέω",
              "description": "irregular aorist imperative πες",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["—", "—"],
                ["πες", "πείτε"],
                ["—", "—"]
              ]
            },
            {
              "name": "τρώω",
              "description": "irregular aorist imperative φάε",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["—", "—"],
                ["φάε", "φάτε"],
                ["—", "—"]
              ]
            },
            {
              "name": "πίνω",
              "description": "irregular aorist imperative πιες",
              "dimmed": false,
              "verbs": "πίνω",
              "example": "πίνω (to drink)",
              "conjugations": [
                ["—", "—"],
                ["πιες", "πιείτε"],
                ["—", "—"]
              ]
            },
            {
              "name": "δίνω",
              "description": "aorist imperative δώσε",
              "dimmed": false,
              "verbs": "δίνω",
              "example": "δίνω (to give)",
              "conjugations": [
                ["—", "—"],
                ["δώσε", "δώστε"],
                ["—", "—"]
              ]
            },
            {
              "name": "παίρνω",
              "description": "aorist imperative πάρε",
              "dimmed": false,
              "verbs": "παίρνω",
              "example": "παίρνω (to take)",
              "conjugations": [
                ["—", "—"],
                ["πάρε", "πάρτε"],
                ["—", "—"]
              ]
            },
            {
              "name": "βάζω",
              "description": "aorist imperative βάλε",
              "dimmed": false,
              "verbs": "βάζω",
              "example": "βάζω (to put)",
              "conjugations": [
                ["—", "—"],
                ["βάλε", "βάλτε"],
                ["—", "—"]
              ]
            },
            {
              "name": "φεύγω",
              "description": "aorist imperative φύγε",
              "dimmed": false,
              "verbs": "φεύγω",
              "example": "φεύγω (to leave)",
              "conjugations": [
                ["—", "—"],
                ["φύγε", "φύγετε"],
                ["—", "—"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A aorist imperative (-ε/-τε)",
            "example": "γράφω → γράψε (to write)",
            "conjugations": [
              ["—", "—"],
              ["γράψε", "γράψτε"],
              ["—", "—"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [],
          "regular": {
            "name": "regular Group B aorist imperative (-ησε/-ήστε)",
            "example": "μιλώ → μίλησε (to speak)",
            "conjugations": [
              ["—", "—"],
              ["μίλησε", "μιλήστε"],
              ["—", "—"]
            ]
          }
        }
      ]
    },
    "conditional": {
      "label": "Conditional (θα + Παρατατικός)",
      "icon": "bi-question-circle",
      "columns": [
        {
          "label": "Group A (-ω)",
          "patterns": [
            {
              "name": "είμαι",
              "description": "θα + ήμουν (imperfect of είμαι)",
              "dimmed": false,
              "verbs": "είμαι",
              "example": "είμαι (to be)",
              "conjugations": [
                ["θα ήμουν(α)", "θα ήμασταν"],
                ["θα ήσουν(α)", "θα ήσασταν"],
                ["θα ήταν(ε)", "θα ήταν(ε)"]
              ]
            },
            {
              "name": "έχω",
              "description": "θα + είχα",
              "dimmed": false,
              "verbs": "έχω",
              "example": "έχω (to have)",
              "conjugations": [
                ["θα είχα", "θα είχαμε"],
                ["θα είχες", "θα είχατε"],
                ["θα είχε", "θα είχαν"]
              ]
            },
            {
              "name": "λέω",
              "description": "θα + έλεγα",
              "dimmed": false,
              "verbs": "λέω",
              "example": "λέω (to say)",
              "conjugations": [
                ["θα έλεγα", "θα λέγαμε"],
                ["θα έλεγες", "θα λέγατε"],
                ["θα έλεγε", "θα λέγαν(ε)"]
              ]
            },
            {
              "name": "τρώω",
              "description": "θα + έτρωγα",
              "dimmed": false,
              "verbs": "τρώω",
              "example": "τρώω (to eat)",
              "conjugations": [
                ["θα έτρωγα", "θα τρώγαμε"],
                ["θα έτρωγες", "θα τρώγατε"],
                ["θα έτρωγε", "θα τρώγαν(ε)"]
              ]
            },
            {
              "name": "θέλω",
              "description": "θα + ήθελα",
              "dimmed": false,
              "verbs": "θέλω",
              "example": "θέλω (to want)",
              "conjugations": [
                ["θα ήθελα", "θα θέλαμε"],
                ["θα ήθελες", "θα θέλατε"],
                ["θα ήθελε", "θα θέλαν(ε)"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group A conditional (θα + imperfect)",
            "example": "γράφω → θα έγραφα (to write)",
            "conjugations": [
              ["θα έγραφα", "θα γράφαμε"],
              ["θα έγραφες", "θα γράφατε"],
              ["θα έγραφε", "θα γράφαν(ε)"]
            ]
          }
        },
        {
          "label": "Group B (-ώ/-άω)",
          "patterns": [
            {
              "name": "μπορώ",
              "description": "θα + μπορούσα",
              "dimmed": true,
              "verbs": "μπορώ",
              "example": "μπορώ (to be able)",
              "conjugations": [
                ["θα μπορούσα", "θα μπορούσαμε"],
                ["θα μπορούσες", "θα μπορούσατε"],
                ["θα μπορούσε", "θα μπορούσαν"]
              ]
            }
          ],
          "regular": {
            "name": "regular Group B conditional (θα + imperfect -ούσα)",
            "example": "μιλώ → θα μιλούσα (to speak)",
            "conjugations": [
              ["θα μιλούσα", "θα μιλούσαμε"],
              ["θα μιλούσες", "θα μιλούσατε"],
              ["θα μιλούσε", "θα μιλούσαν"]
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
          "aorist",
          "imperfect",
          "present_perfect",
          "past_perfect"
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
          "simple_future",
          "continuous_future"
        ]
      }
    ],
    "subjunctive": [
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "subj_present",
          "subj_aorist"
        ]
      }
    ],
    "imperative": [
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "imp_present",
          "imp_aorist"
        ]
      }
    ],
    "conditional": [
      {
        "label": "Present",
        "icon": "bi-record-circle",
        "tenses": [
          "conditional"
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
      "description": "Expresses purpose, desire, or unrealized actions. Formed with να + verb. Crucial distinction: να + present (imperfective) vs να + aorist (perfective)."
    },
    {
      "label": "Conditional",
      "icon": "bi-question-circle",
      "key": "conditional",
      "description": "Describes what would happen under certain conditions. Formed with θα + imperfect (past continuous forms)."
    },
    {
      "label": "Imperative",
      "icon": "bi-exclamation-circle",
      "key": "imperative",
      "description": "Gives commands and instructions. Only 2nd person (singular and plural). Imperfective imperative for ongoing/repeated actions, aorist imperative for single/completed actions."
    }
  ],
  "pluralization": [
    { "rule": "Masculine -ος → -οι", "singular": "άνθρωπος", "plural": "άνθρωποι", "examples": "δρόμος→δρόμοι, γιατρός→γιατροί, δάσκαλος→δάσκαλοι, ουρανός→ουρανοί" },
    { "rule": "Masculine -ας → -ες", "singular": "άντρας", "plural": "άντρες", "examples": "μαθητής→μαθητές, πατέρας→πατέρες, εργάτης→εργάτες" },
    { "rule": "Masculine -ης → -ες", "singular": "φοιτητής", "plural": "φοιτητές", "examples": "μαθητής→μαθητές, ναύτης→ναύτες, επιβάτης→επιβάτες" },
    { "rule": "Feminine -α → -ες", "singular": "γυναίκα", "plural": "γυναίκες", "examples": "μητέρα→μητέρες, θάλασσα→θάλασσες, γλώσσα→γλώσσες, ώρα→ώρες" },
    { "rule": "Feminine -η → -ες", "singular": "αδελφή", "plural": "αδελφές", "examples": "ψυχή→ψυχές, ζωή→ζωές, αρχή→αρχές, τέχνη→τέχνες" },
    { "rule": "Neuter -ο → -α", "singular": "βιβλίο", "plural": "βιβλία", "examples": "παιδί→παιδιά, σπίτι→σπίτια, δέντρο→δέντρα, αυτοκίνητο→αυτοκίνητα" },
    { "rule": "Neuter -ι → -ια", "singular": "παιδί", "plural": "παιδιά", "examples": "σπίτι→σπίτια, κλειδί→κλειδιά, τραγούδι→τραγούδια" },
    { "rule": "Neuter -μα → -ματα", "singular": "μάθημα", "plural": "μαθήματα", "examples": "πρόβλημα→προβλήματα, σώμα→σώματα, όνομα→ονόματα, γράμμα→γράμματα" },
    { "rule": "Neuter -ος → -η", "singular": "δάσος", "plural": "δάση", "examples": "έθνος→έθνη, μέρος→μέρη, λάθος→λάθη" },
    { "rule": "Irregular", "singular": "γυναίκα", "plural": "γυναίκες", "examples": "μάτι→μάτια, αυτί→αυτιά, χέρι→χέρια, πόδι→πόδια" }
  ],
  "pronouns": {
    "categories": [
      {
        "name": "Subject Pronouns (Ονομαστική — Προσωπικές αντωνυμίες)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "εγώ", "εμείς"],
          ["2nd person", "εσύ", "εσείς"],
          ["3rd person (m)", "αυτός", "αυτοί"],
          ["3rd person (f)", "αυτή", "αυτές"],
          ["3rd person (n)", "αυτό", "αυτά"]
        ]
      },
      {
        "name": "Weak Object Pronouns — Accusative (Αιτιατική)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "με", "μας"],
          ["2nd person", "σε", "σας"],
          ["3rd person (m)", "τον", "τους"],
          ["3rd person (f)", "την / τη", "τις / τες"],
          ["3rd person (n)", "το", "τα"]
        ]
      },
      {
        "name": "Weak Object Pronouns — Genitive / Dative (Γενική)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "μου", "μας"],
          ["2nd person", "σου", "σας"],
          ["3rd person (m)", "του", "τους"],
          ["3rd person (f)", "της", "τους"],
          ["3rd person (n)", "του", "τους"]
        ]
      },
      {
        "name": "Strong Object Pronouns (Εμφατικές — Αιτιατική)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "εμένα", "εμάς"],
          ["2nd person", "εσένα", "εσάς"],
          ["3rd person (m)", "αυτόν", "αυτούς"],
          ["3rd person (f)", "αυτήν / αυτή", "αυτές"],
          ["3rd person (n)", "αυτό", "αυτά"]
        ]
      },
      {
        "name": "Possessive (Κτητικές αντωνυμίες — Genitive clitic)",
        "headers": ["Person", "Singular", "Plural"],
        "rows": [
          ["1st person", "μου", "μας"],
          ["2nd person", "σου", "σας"],
          ["3rd person (m)", "του", "τους"],
          ["3rd person (f)", "της", "τους"],
          ["3rd person (n)", "του", "τους"]
        ]
      }
    ]
  },
  "chart": {
    "columns": ["Past (Παρελθόν)", "Present (Παρόν)", "Future (Μέλλον)", "Conditional"],
    "rows": ["Simple/Aorist", "Continuous/Imperfective", "Perfect"],
    "groups": ["Group A: γράφω", "Group B: μιλώ", "Irreg: είμαι"],
    "info": "Greek verbs split into Group A (stress on endings: γράφ-ω, -εις, -ει) and Group B (contracted: μιλ-ώ/-άω, -άς, -ά). The key distinction across all tenses is aspect: perfective (completed action, aorist stems) vs imperfective (ongoing/repeated action, present stems). Future and subjunctive both use these two stems with different particles (θα vs να).",
    "cells": [
      [
        { "form": "Αόριστος", "rule": "Aorist stem + -α endings",
          "groupA": [["έγραψα", "γράψαμε"], ["έγραψες", "γράψατε"], ["έγραψε", "γράψαν(ε)"]],
          "groupB": [["μίλησα", "μιλήσαμε"], ["μίλησες", "μιλήσατε"], ["μίλησε", "μιλήσαν(ε)"]],
          "irreg": [["ήμουν(α)", "ήμασταν"], ["ήσουν(α)", "ήσασταν"], ["ήταν(ε)", "ήταν(ε)"]] },
        { "form": "Ενεστώτας", "rule": "Present stem + endings",
          "groupA": [["γράφω", "γράφουμε"], ["γράφεις", "γράφετε"], ["γράφει", "γράφουν"]],
          "groupB": [["μιλώ/μιλάω", "μιλούμε/μιλάμε"], ["μιλάς", "μιλάτε"], ["μιλά/μιλάει", "μιλούν/μιλάνε"]],
          "irreg": [["είμαι", "είμαστε"], ["είσαι", "είστε"], ["είναι", "είναι"]] },
        { "form": "Μέλλοντας στιγμ.", "rule": "θα + perfective subj.",
          "groupA": [["θα γράψω", "θα γράψουμε"], ["θα γράψεις", "θα γράψετε"], ["θα γράψει", "θα γράψουν"]],
          "groupB": [["θα μιλήσω", "θα μιλήσουμε"], ["θα μιλήσεις", "θα μιλήσετε"], ["θα μιλήσει", "θα μιλήσουν"]],
          "irreg": [["θα είμαι", "θα είμαστε"], ["θα είσαι", "θα είστε"], ["θα είναι", "θα είναι"]] },
        { "form": "θα + Παρατατικός", "rule": "θα + imperfect",
          "groupA": [["θα έγραφα", "θα γράφαμε"], ["θα έγραφες", "θα γράφατε"], ["θα έγραφε", "θα γράφαν(ε)"]],
          "groupB": [["θα μιλούσα", "θα μιλούσαμε"], ["θα μιλούσες", "θα μιλούσατε"], ["θα μιλούσε", "θα μιλούσαν"]],
          "irreg": [["θα ήμουν(α)", "θα ήμασταν"], ["θα ήσουν(α)", "θα ήσασταν"], ["θα ήταν(ε)", "θα ήταν(ε)"]] }
      ],
      [
        { "form": "Παρατατικός", "rule": "Imperfect stem + -α endings",
          "groupA": [["έγραφα", "γράφαμε"], ["έγραφες", "γράφατε"], ["έγραφε", "γράφαν(ε)"]],
          "groupB": [["μιλούσα", "μιλούσαμε"], ["μιλούσες", "μιλούσατε"], ["μιλούσε", "μιλούσαν"]],
          "irreg": [["ήμουν(α)", "ήμασταν"], ["ήσουν(α)", "ήσασταν"], ["ήταν(ε)", "ήταν(ε)"]] },
        null,
        { "form": "Μέλλοντας εξακ.", "rule": "θα + present",
          "groupA": [["θα γράφω", "θα γράφουμε"], ["θα γράφεις", "θα γράφετε"], ["θα γράφει", "θα γράφουν"]],
          "groupB": [["θα μιλώ/μιλάω", "θα μιλούμε/μιλάμε"], ["θα μιλάς", "θα μιλάτε"], ["θα μιλά/μιλάει", "θα μιλούν/μιλάνε"]],
          "irreg": [["θα είμαι", "θα είμαστε"], ["θα είσαι", "θα είστε"], ["θα είναι", "θα είναι"]] },
        null
      ],
      [
        { "form": "Υπερσυντέλικος", "rule": "είχα + aorist infinitive",
          "groupA": [["είχα γράψει", "είχαμε γράψει"], ["είχες γράψει", "είχατε γράψει"], ["είχε γράψει", "είχαν γράψει"]],
          "groupB": [["είχα μιλήσει", "είχαμε μιλήσει"], ["είχες μιλήσει", "είχατε μιλήσει"], ["είχε μιλήσει", "είχαν μιλήσει"]],
          "irreg": [["—", "—"], ["—", "—"], ["—", "—"]] },
        { "form": "Παρακείμενος", "rule": "έχω + aorist infinitive",
          "groupA": [["έχω γράψει", "έχουμε γράψει"], ["έχεις γράψει", "έχετε γράψει"], ["έχει γράψει", "έχουν γράψει"]],
          "groupB": [["έχω μιλήσει", "έχουμε μιλήσει"], ["έχεις μιλήσει", "έχετε μιλήσει"], ["έχει μιλήσει", "έχουν μιλήσει"]],
          "irreg": [["—", "—"], ["—", "—"], ["—", "—"]] },
        null, null
      ]
    ]
  }
};
