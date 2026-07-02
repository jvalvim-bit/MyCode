// Grouping Data
export const enModule07 = [
  {
    "id": 61,
    "module": "Grouping Data",
    "title": "Why lists exist",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 45,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Why lists exist",
            "body": "<strong>Why lists exist</strong> appears here because learners need a list stores multiple values in one variable before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Why lists exist”?",
            "options": [
              "memorizing symbols before meaning",
              "a list stores multiple values in one variable",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is a list stores multiple values in one variable. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "dois nomes",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that a list stores multiple values in one variable. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const nomes = [\"Ana\", \"Bia\"];"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const nomes = ___\"Ana\", \"Bia\"___;"
            ],
            "correctSequence": [
              "[",
              "]"
            ],
            "answerSequence": [
              "[",
              "]"
            ],
            "tokenOptions": [
              "[",
              "]",
              "{",
              "}",
              "()"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: a list stores multiple values in one variable.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “Why lists exist”?",
            "options": [
              "reading code in the correct order",
              "testing with a small example",
              "separating data from instruction",
              "using the symbol without knowing what it tells the computer to do"
            ],
            "correct": 3,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “Why lists exist” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “Why lists exist” appear in a program?",
            "options": [
              "when the problem rule asks for exactly that action",
              "always, even when not needed",
              "never, because beginners should avoid it",
              "only when it looks nice"
            ],
            "correct": 0,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "copying the answer without reading",
              "explaining in your own words what the line does",
              "jumping to a harder subject",
              "swapping symbols randomly"
            ],
            "correct": 1,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 62,
    "module": "Grouping Data",
    "title": "JavaScript array",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 46,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "JavaScript array",
            "body": "<strong>JavaScript array</strong> appears here because learners need an array uses square brackets before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “JavaScript array”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "an array uses square brackets",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is an array uses square brackets. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "array de notas"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that an array uses square brackets. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const notas = [7, 8, 9];"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const notas = ___7, 8, 9___;"
            ],
            "correctSequence": [
              "[",
              "]"
            ],
            "answerSequence": [
              "[",
              "]"
            ],
            "tokenOptions": [
              "[",
              "]",
              "{",
              "}",
              "\""
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: an array uses square brackets.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “JavaScript array”?",
            "options": [
              "using the symbol without knowing what it tells the computer to do",
              "reading code in the correct order",
              "testing with a small example",
              "separating data from instruction"
            ],
            "correct": 0,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “JavaScript array” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “JavaScript array” appear in a program?",
            "options": [
              "always, even when not needed",
              "when the problem rule asks for exactly that action",
              "never, because beginners should avoid it",
              "only when it looks nice"
            ],
            "correct": 1,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "copying the answer without reading",
              "jumping to a harder subject",
              "explaining in your own words what the line does",
              "swapping symbols randomly"
            ],
            "correct": 2,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 63,
    "module": "Grouping Data",
    "title": "Python list",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 47,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Python list",
            "body": "<strong>Python list</strong> appears here because learners need Python lists also use square brackets before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Python list”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "Python lists also use square brackets"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is Python lists also use square brackets. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "lista de notas",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that Python lists also use square brackets. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "notas = [7, 8, 9]"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "notas = ___7, 8, 9___"
            ],
            "correctSequence": [
              "[",
              "]"
            ],
            "answerSequence": [
              "[",
              "]"
            ],
            "tokenOptions": [
              "[",
              "]",
              "{",
              "}",
              "()"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: Python lists also use square brackets.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “Python list”?",
            "options": [
              "reading code in the correct order",
              "using the symbol without knowing what it tells the computer to do",
              "testing with a small example",
              "separating data from instruction"
            ],
            "correct": 1,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “Python list” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “Python list” appear in a program?",
            "options": [
              "always, even when not needed",
              "never, because beginners should avoid it",
              "when the problem rule asks for exactly that action",
              "only when it looks nice"
            ],
            "correct": 2,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "copying the answer without reading",
              "jumping to a harder subject",
              "swapping symbols randomly",
              "explaining in your own words what the line does"
            ],
            "correct": 3,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 64,
    "module": "Grouping Data",
    "title": "Index starts at zero",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 44,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Index starts at zero",
            "body": "<strong>Index starts at zero</strong> appears here because learners need the first item is index 0 before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Index starts at zero”?",
            "options": [
              "the first item is index 0",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is the first item is index 0. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "primeiro item",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that the first item is index 0. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const primeiro = nomes[0];"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const primeiro = nomes___;"
            ],
            "correctSequence": [
              "[0]"
            ],
            "answerSequence": [
              "[0]"
            ],
            "tokenOptions": [
              "[0]",
              "[1]",
              "(0)",
              "{0}",
              ".0"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: the first item is index 0.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “Index starts at zero”?",
            "options": [
              "reading code in the correct order",
              "testing with a small example",
              "using the symbol without knowing what it tells the computer to do",
              "separating data from instruction"
            ],
            "correct": 2,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “Index starts at zero” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “Index starts at zero” appear in a program?",
            "options": [
              "always, even when not needed",
              "never, because beginners should avoid it",
              "only when it looks nice",
              "when the problem rule asks for exactly that action"
            ],
            "correct": 3,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "explaining in your own words what the line does",
              "copying the answer without reading",
              "jumping to a harder subject",
              "swapping symbols randomly"
            ],
            "correct": 0,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 65,
    "module": "Grouping Data",
    "title": "Size with length",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 45,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Size with length",
            "body": "<strong>Size with length</strong> appears here because learners need length counts array items before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Size with length”?",
            "options": [
              "memorizing symbols before meaning",
              "length counts array items",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is length counts array items. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "quantidade de nomes",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that length counts array items. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const total = nomes.length;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const total = nomes.___;"
            ],
            "correctSequence": [
              "length"
            ],
            "answerSequence": [
              "length"
            ],
            "tokenOptions": [
              "length",
              "len",
              "size",
              "count",
              "push"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: length counts array items.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “Size with length”?",
            "options": [
              "reading code in the correct order",
              "testing with a small example",
              "separating data from instruction",
              "using the symbol without knowing what it tells the computer to do"
            ],
            "correct": 3,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “Size with length” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “Size with length” appear in a program?",
            "options": [
              "when the problem rule asks for exactly that action",
              "always, even when not needed",
              "never, because beginners should avoid it",
              "only when it looks nice"
            ],
            "correct": 0,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "copying the answer without reading",
              "explaining in your own words what the line does",
              "jumping to a harder subject",
              "swapping symbols randomly"
            ],
            "correct": 1,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 66,
    "module": "Grouping Data",
    "title": "Size with len",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 46,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Size with len",
            "body": "<strong>Size with len</strong> appears here because learners need len counts items in Python before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Size with len”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "len counts items in Python",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is len counts items in Python. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "quantidade de nomes"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that len counts items in Python. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "total = len(nomes)"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "total = ___(nomes)"
            ],
            "correctSequence": [
              "len"
            ],
            "answerSequence": [
              "len"
            ],
            "tokenOptions": [
              "len",
              "length",
              "count",
              "print",
              "input"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: len counts items in Python.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “Size with len”?",
            "options": [
              "using the symbol without knowing what it tells the computer to do",
              "reading code in the correct order",
              "testing with a small example",
              "separating data from instruction"
            ],
            "correct": 0,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “Size with len” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “Size with len” appear in a program?",
            "options": [
              "always, even when not needed",
              "when the problem rule asks for exactly that action",
              "never, because beginners should avoid it",
              "only when it looks nice"
            ],
            "correct": 1,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "copying the answer without reading",
              "jumping to a harder subject",
              "explaining in your own words what the line does",
              "swapping symbols randomly"
            ],
            "correct": 2,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 67,
    "module": "Grouping Data",
    "title": "Add with push",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 47,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Add with push",
            "body": "<strong>Add with push</strong> appears here because learners need push adds a new item to an array before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Add with push”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "push adds a new item to an array"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is push adds a new item to an array. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "adiciona Caio",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that push adds a new item to an array. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "nomes.push(\"Caio\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "nomes.___(\"Caio\");"
            ],
            "correctSequence": [
              "push"
            ],
            "answerSequence": [
              "push"
            ],
            "tokenOptions": [
              "push",
              "append",
              "len",
              "length",
              "pop"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: push adds a new item to an array.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “Add with push”?",
            "options": [
              "reading code in the correct order",
              "using the symbol without knowing what it tells the computer to do",
              "testing with a small example",
              "separating data from instruction"
            ],
            "correct": 1,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “Add with push” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “Add with push” appear in a program?",
            "options": [
              "always, even when not needed",
              "never, because beginners should avoid it",
              "when the problem rule asks for exactly that action",
              "only when it looks nice"
            ],
            "correct": 2,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "copying the answer without reading",
              "jumping to a harder subject",
              "swapping symbols randomly",
              "explaining in your own words what the line does"
            ],
            "correct": 3,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 68,
    "module": "Grouping Data",
    "title": "Add with append",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 44,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Add with append",
            "body": "<strong>Add with append</strong> appears here because learners need append adds a new item to a Python list before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Add with append”?",
            "options": [
              "append adds a new item to a Python list",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is append adds a new item to a Python list. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "adiciona Caio",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that append adds a new item to a Python list. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "nomes.append(\"Caio\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "nomes.___(\"Caio\")"
            ],
            "correctSequence": [
              "append"
            ],
            "answerSequence": [
              "append"
            ],
            "tokenOptions": [
              "append",
              "push",
              "len",
              "length",
              "print"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: append adds a new item to a Python list.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “Add with append”?",
            "options": [
              "reading code in the correct order",
              "testing with a small example",
              "using the symbol without knowing what it tells the computer to do",
              "separating data from instruction"
            ],
            "correct": 2,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “Add with append” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “Add with append” appear in a program?",
            "options": [
              "always, even when not needed",
              "never, because beginners should avoid it",
              "only when it looks nice",
              "when the problem rule asks for exactly that action"
            ],
            "correct": 3,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "explaining in your own words what the line does",
              "copying the answer without reading",
              "jumping to a harder subject",
              "swapping symbols randomly"
            ],
            "correct": 0,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 69,
    "module": "Grouping Data",
    "title": "Matrix as table",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 45,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Matrix as table",
            "body": "<strong>Matrix as table</strong> appears here because learners need a matrix is a list inside a list before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Matrix as table”?",
            "options": [
              "memorizing symbols before meaning",
              "a matrix is a list inside a list",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is a matrix is a list inside a list. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "duas linhas",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that a matrix is a list inside a list. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const grade = [[1,2],[3,4]];"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const grade = ___[1,2],[3,4]___;"
            ],
            "correctSequence": [
              "[",
              "]"
            ],
            "answerSequence": [
              "[",
              "]"
            ],
            "tokenOptions": [
              "[",
              "]",
              "{",
              "}",
              "()"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: a matrix is a list inside a list.",
            "hint": "look for the block that gives meaning to the instruction."
          }
        ]
      },
      {
        "level": "intermediate",
        "steps": [
          {
            "type": "mc",
            "kicker": "common mistake",
            "q": "Which mistake most often gets in the way of “Matrix as table”?",
            "options": [
              "reading code in the correct order",
              "testing with a small example",
              "separating data from instruction",
              "using the symbol without knowing what it tells the computer to do"
            ],
            "correct": 3,
            "explain": "This mistake is common: learners look at the symbol and guess. The safer path is to ask: what instruction am I giving the computer?"
          },
          {
            "type": "fill",
            "kicker": "mental model",
            "q": "Complete the mental model to remember “Matrix as table” later.",
            "codeTemplate": [
              "lista → ___ vários valores"
            ],
            "correctSequence": [
              "guardar"
            ],
            "answerSequence": [
              "guardar"
            ],
            "tokenOptions": [
              "guardar",
              "decorar",
              "pular",
              "confundir",
              "apagar"
            ],
            "explain": "The mental model is a short reminder for later. It does not replace syntax, but it helps syntax make sense.",
            "hint": "think about the action the computer performs."
          },
          {
            "type": "mc",
            "kicker": "when to use it",
            "q": "When should “Matrix as table” appear in a program?",
            "options": [
              "when the problem rule asks for exactly that action",
              "always, even when not needed",
              "never, because beginners should avoid it",
              "only when it looks nice"
            ],
            "correct": 0,
            "explain": "Use the feature when it solves a real algorithm need. Programming means choosing the tool for a reason, not by appearance."
          }
        ]
      },
      {
        "level": "advanced",
        "steps": [
          {
            "type": "mc",
            "kicker": "review before moving on",
            "q": "Which action shows you really understood this micro-step?",
            "options": [
              "copying the answer without reading",
              "explaining in your own words what the line does",
              "jumping to a harder subject",
              "swapping symbols randomly"
            ],
            "correct": 1,
            "explain": "If you can explain the line in your own words, the concept is becoming reasoning. That is the right sign to move on."
          }
        ]
      }
    ]
  },
  {
    "id": 70,
    "module": "Grouping Data",
    "title": "Project: Approved list",
    "eyebrow": "module 07 · beginner ladder",
    "desc": "Before advanced functions, learners store multiple values in a list, access indexes, and measure length.",
    "xp": 46,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "arrays",
    "layers": [
      {
        "level": "advanced",
        "steps": [
          {
            "type": "teach",
            "kicker": "module final project",
            "title": "Approved list",
            "body": "Now you apply this module in a small complete program. Read the requirements, write in the editor, and submit when the logic makes sense."
          }
        ]
      }
    ],
    "project": {
      "kind": "listBasics",
      "language": "javascript",
      "title": "Approved list",
      "brief": "Create a list of grades and display only grades greater than or equal to 7.",
      "requirements": [
        "Create an array named grades.",
        "Use for to loop.",
        "Use if to check >= 7.",
        "Display approved ones with console.log."
      ],
      "starter": "const grades = [5, 7, 9];\n\n// percorra e mostre as aprovadas",
      "solution": "const grades = [5, 7, 9];\nfor (const grade of grades) {\n  if (grade >= 7) {\n    console.log(grade);\n  }\n}"
    }
  }
];
