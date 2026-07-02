// Modern Data and APIs
export const enModule13 = [
  {
    "id": 121,
    "module": "Modern Data and APIs",
    "title": "map",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "map",
            "body": "<strong>map</strong> appears here because learners need map transforms each item before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “map”?",
            "options": [
              "memorizing symbols before meaning",
              "map transforms each item",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is map transforms each item. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "novo array dobrado",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that map transforms each item. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const dobro = nums.map(n => n * 2);"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "nums.___(n => n * 2);"
            ],
            "correctSequence": [
              "map"
            ],
            "answerSequence": [
              "map"
            ],
            "tokenOptions": [
              "map",
              "filter",
              "reduce",
              "sort",
              "forEach"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: map transforms each item.",
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
            "q": "Which mistake most often gets in the way of “map”?",
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
            "q": "Complete the mental model to remember “map” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “map” appear in a program?",
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
    "id": 122,
    "module": "Modern Data and APIs",
    "title": "filter",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "filter",
            "body": "<strong>filter</strong> appears here because learners need filter keeps only items that pass before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “filter”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "filter keeps only items that pass",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is filter keeps only items that pass. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "notas >= 7"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that filter keeps only items that pass. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const aprovados = notas.filter(n => n >= 7);"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "notas.___(n => n >= 7);"
            ],
            "correctSequence": [
              "filter"
            ],
            "answerSequence": [
              "filter"
            ],
            "tokenOptions": [
              "filter",
              "map",
              "reduce",
              "sort",
              "push"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: filter keeps only items that pass.",
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
            "q": "Which mistake most often gets in the way of “filter”?",
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
            "q": "Complete the mental model to remember “filter” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “filter” appear in a program?",
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
    "id": 123,
    "module": "Modern Data and APIs",
    "title": "reduce",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 52,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "reduce",
            "body": "<strong>reduce</strong> appears here because learners need reduce accumulates into one value before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “reduce”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "reduce accumulates into one value"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is reduce accumulates into one value. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "soma tudo",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that reduce accumulates into one value. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const total = nums.reduce((s,n) => s + n, 0);"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "nums.___((s,n) => s + n, 0);"
            ],
            "correctSequence": [
              "reduce"
            ],
            "answerSequence": [
              "reduce"
            ],
            "tokenOptions": [
              "reduce",
              "map",
              "filter",
              "sort",
              "length"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: reduce accumulates into one value.",
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
            "q": "Which mistake most often gets in the way of “reduce”?",
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
            "q": "Complete the mental model to remember “reduce” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “reduce” appear in a program?",
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
    "id": 124,
    "module": "Modern Data and APIs",
    "title": "sort",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 49,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "sort",
            "body": "<strong>sort</strong> appears here because learners need sort orders values before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “sort”?",
            "options": [
              "sort orders values",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is sort orders values. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "ordena nomes",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that sort orders values. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "nomes.sort();"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "nomes.___();"
            ],
            "correctSequence": [
              "sort"
            ],
            "answerSequence": [
              "sort"
            ],
            "tokenOptions": [
              "sort",
              "map",
              "filter",
              "push",
              "reduce"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: sort orders values.",
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
            "q": "Which mistake most often gets in the way of “sort”?",
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
            "q": "Complete the mental model to remember “sort” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “sort” appear in a program?",
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
    "id": 125,
    "module": "Modern Data and APIs",
    "title": "Destructuring",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Destructuring",
            "body": "<strong>Destructuring</strong> appears here because learners need destructuring pulls values out before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Destructuring”?",
            "options": [
              "memorizing symbols before meaning",
              "destructuring pulls values out",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is destructuring pulls values out. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "pega nome",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that destructuring pulls values out. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const { nome } = aluno;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const ___ nome ___ = aluno;"
            ],
            "correctSequence": [
              "{",
              "}"
            ],
            "answerSequence": [
              "{",
              "}"
            ],
            "tokenOptions": [
              "{",
              "}",
              "[",
              "]",
              "const"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: destructuring pulls values out.",
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
            "q": "Which mistake most often gets in the way of “Destructuring”?",
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
            "q": "Complete the mental model to remember “Destructuring” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “Destructuring” appear in a program?",
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
    "id": 126,
    "module": "Modern Data and APIs",
    "title": "Spread",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Spread",
            "body": "<strong>Spread</strong> appears here because learners need spread spreads array/object values before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Spread”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "spread spreads array/object values",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is spread spreads array/object values. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "copia itens"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that spread spreads array/object values. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const copia = [...lista];"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const copia = [___lista];"
            ],
            "correctSequence": [
              "..."
            ],
            "answerSequence": [
              "..."
            ],
            "tokenOptions": [
              "...",
              "++",
              "=>",
              "*",
              "&"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: spread spreads array/object values.",
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
            "q": "Which mistake most often gets in the way of “Spread”?",
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
            "q": "Complete the mental model to remember “Spread” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “Spread” appear in a program?",
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
    "id": 127,
    "module": "Modern Data and APIs",
    "title": "JSON stringify",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 52,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "JSON stringify",
            "body": "<strong>JSON stringify</strong> appears here because learners need stringify turns object into JSON text before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “JSON stringify”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "stringify turns object into JSON text"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is stringify turns object into JSON text. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "texto JSON",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that stringify turns object into JSON text. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "JSON.stringify(aluno);"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "JSON.___(aluno);"
            ],
            "correctSequence": [
              "stringify"
            ],
            "answerSequence": [
              "stringify"
            ],
            "tokenOptions": [
              "stringify",
              "parse",
              "fetch",
              "map",
              "await"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: stringify turns object into JSON text.",
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
            "q": "Which mistake most often gets in the way of “JSON stringify”?",
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
            "q": "Complete the mental model to remember “JSON stringify” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “JSON stringify” appear in a program?",
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
    "id": 128,
    "module": "Modern Data and APIs",
    "title": "JSON parse",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 49,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "JSON parse",
            "body": "<strong>JSON parse</strong> appears here because learners need parse turns JSON into an object before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “JSON parse”?",
            "options": [
              "parse turns JSON into an object",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is parse turns JSON into an object. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "objeto",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that parse turns JSON into an object. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "JSON.parse(texto);"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "JSON.___(texto);"
            ],
            "correctSequence": [
              "parse"
            ],
            "answerSequence": [
              "parse"
            ],
            "tokenOptions": [
              "parse",
              "stringify",
              "fetch",
              "map",
              "await"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: parse turns JSON into an object.",
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
            "q": "Which mistake most often gets in the way of “JSON parse”?",
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
            "q": "Complete the mental model to remember “JSON parse” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “JSON parse” appear in a program?",
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
    "id": 129,
    "module": "Modern Data and APIs",
    "title": "async and await",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "async and await",
            "body": "<strong>async and await</strong> appears here because learners need await waits for a Promise inside async before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “async and await”?",
            "options": [
              "memorizing symbols before meaning",
              "await waits for a Promise inside async",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is await waits for a Promise inside async. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "espera fetch",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that await waits for a Promise inside async. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "async function carregar() {",
              "  const dados = await fetch(url);",
              "}"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const dados = ___ fetch(url);"
            ],
            "correctSequence": [
              "await"
            ],
            "answerSequence": [
              "await"
            ],
            "tokenOptions": [
              "await",
              "async",
              "return",
              "then",
              "try"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: await waits for a Promise inside async.",
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
            "q": "Which mistake most often gets in the way of “async and await”?",
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
            "q": "Complete the mental model to remember “async and await” later.",
            "codeTemplate": [
              "regra → ___"
            ],
            "correctSequence": [
              "entender"
            ],
            "answerSequence": [
              "entender"
            ],
            "tokenOptions": [
              "entender",
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
            "q": "When should “async and await” appear in a program?",
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
    "id": 130,
    "module": "Modern Data and APIs",
    "title": "Project: Async dashboard",
    "eyebrow": "module 13 · beginner ladder",
    "desc": "The final step combines modern array methods, JSON, Promise, fetch, async/await, and error handling.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "advanced",
        "steps": [
          {
            "type": "teach",
            "kicker": "module final project",
            "title": "Async dashboard",
            "body": "Now you apply this module in a small complete program. Read the requirements, write in the editor, and submit when the logic makes sense."
          }
        ]
      }
    ],
    "project": {
      "kind": "asyncDashboard",
      "language": "javascript",
      "title": "Async dashboard",
      "brief": "Create async loading with try/catch and a user list.",
      "requirements": [
        "Create an async function.",
        "Use await.",
        "Use Promise.resolve or fetch.",
        "Use try/catch.",
        "Loop through users."
      ],
      "starter": "async function loadUsers() {\n  try {\n    const users = await Promise.resolve([]);\n    // renderize usuários\n  } catch (error) {\n    console.log(error);\n  }\n}",
      "solution": "async function loadUsers() {\n  try {\n    const users = await Promise.resolve([{ name: \"Ana\" }]);\n    users.forEach(user => console.log(user.name));\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nloadUsers();"
    }
  }
];
