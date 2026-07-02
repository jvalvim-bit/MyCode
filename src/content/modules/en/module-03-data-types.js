// Data Types
export const enModule03 = [
  {
    "id": 21,
    "module": "Data Types",
    "title": "Text is string",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Text is string",
            "body": "<strong>Text is string</strong> appears here because learners need a string is text inside quotes before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Text is string”?",
            "options": [
              "memorizing symbols before meaning",
              "a string is text inside quotes",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is a string is text inside quotes. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "texto Python",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that a string is text inside quotes. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const curso = \"Python\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const curso = ___;"
            ],
            "correctSequence": [
              "\"Python\""
            ],
            "answerSequence": [
              "\"Python\""
            ],
            "tokenOptions": [
              "\"Python\"",
              "Python",
              "10",
              "true",
              "const"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: a string is text inside quotes.",
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
            "q": "Which mistake most often gets in the way of “Text is string”?",
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
            "q": "Complete the mental model to remember “Text is string” later.",
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
            "q": "When should “Text is string” appear in a program?",
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
    "id": 22,
    "module": "Data Types",
    "title": "Numbers do not use quotes",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Numbers do not use quotes",
            "body": "<strong>Numbers do not use quotes</strong> appears here because learners need a number without quotes can be calculated before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Numbers do not use quotes”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "a number without quotes can be calculated",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is a number without quotes can be calculated. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "número 5"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that a number without quotes can be calculated. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const curtidas = 5;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const curtidas = ___;"
            ],
            "correctSequence": [
              "5"
            ],
            "answerSequence": [
              "5"
            ],
            "tokenOptions": [
              "5",
              "\"5\"",
              "cinco",
              "true",
              "const"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: a number without quotes can be calculated.",
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
            "q": "Which mistake most often gets in the way of “Numbers do not use quotes”?",
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
            "q": "Complete the mental model to remember “Numbers do not use quotes” later.",
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
            "q": "When should “Numbers do not use quotes” appear in a program?",
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
    "id": 23,
    "module": "Data Types",
    "title": "Integers",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 52,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Integers",
            "body": "<strong>Integers</strong> appears here because learners need an integer is a number without decimals before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Integers”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "an integer is a number without decimals"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is an integer is a number without decimals. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "25 é inteiro",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that an integer is a number without decimals. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "idade = 25"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "idade = ___"
            ],
            "correctSequence": [
              "25"
            ],
            "answerSequence": [
              "25"
            ],
            "tokenOptions": [
              "25",
              "25.5",
              "\"25\"",
              "True",
              "idade"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: an integer is a number without decimals.",
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
            "q": "Which mistake most often gets in the way of “Integers”?",
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
            "q": "Complete the mental model to remember “Integers” later.",
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
            "q": "When should “Integers” appear in a program?",
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
    "id": 24,
    "module": "Data Types",
    "title": "Decimals",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 49,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Decimals",
            "body": "<strong>Decimals</strong> appears here because learners need a decimal represents fractional values before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Decimals”?",
            "options": [
              "a decimal represents fractional values",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is a decimal represents fractional values. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "9.90 é decimal",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that a decimal represents fractional values. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const preco = 9.90;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const preco = ___;"
            ],
            "correctSequence": [
              "9.90"
            ],
            "answerSequence": [
              "9.90"
            ],
            "tokenOptions": [
              "9.90",
              "\"9.90\"",
              "9",
              "true",
              "preco"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: a decimal represents fractional values.",
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
            "q": "Which mistake most often gets in the way of “Decimals”?",
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
            "q": "Complete the mental model to remember “Decimals” later.",
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
            "q": "When should “Decimals” appear in a program?",
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
    "id": 25,
    "module": "Data Types",
    "title": "Booleans",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Booleans",
            "body": "<strong>Booleans</strong> appears here because learners need a boolean only answers true or false before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Booleans”?",
            "options": [
              "memorizing symbols before meaning",
              "a boolean only answers true or false",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is a boolean only answers true or false. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "valor lógico",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that a boolean only answers true or false. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const aprovado = true;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const aprovado = ___;"
            ],
            "correctSequence": [
              "true"
            ],
            "answerSequence": [
              "true"
            ],
            "tokenOptions": [
              "true",
              "\"true\"",
              "sim",
              "1",
              "aprovado"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: a boolean only answers true or false.",
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
            "q": "Which mistake most often gets in the way of “Booleans”?",
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
            "q": "Complete the mental model to remember “Booleans” later.",
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
            "q": "When should “Booleans” appear in a program?",
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
    "id": 26,
    "module": "Data Types",
    "title": "Numeric string",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Numeric string",
            "body": "<strong>Numeric string</strong> appears here because learners need \"10\" looks like a number but is text before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Numeric string”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "\"10\" looks like a number but is text",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is \"10\" looks like a number but is text. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "texto 10"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that \"10\" looks like a number but is text. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const valor = \"10\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const valor = ___;"
            ],
            "correctSequence": [
              "\"10\""
            ],
            "answerSequence": [
              "\"10\""
            ],
            "tokenOptions": [
              "\"10\"",
              "10",
              "true",
              "valor",
              "const"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: \"10\" looks like a number but is text.",
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
            "q": "Which mistake most often gets in the way of “Numeric string”?",
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
            "q": "Complete the mental model to remember “Numeric string” later.",
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
            "q": "When should “Numeric string” appear in a program?",
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
    "id": 27,
    "module": "Data Types",
    "title": "Converting to number",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 52,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Converting to number",
            "body": "<strong>Converting to number</strong> appears here because learners need conversion turns numeric text into a real number before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Converting to number”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "conversion turns numeric text into a real number"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is conversion turns numeric text into a real number. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "18 como número",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that conversion turns numeric text into a real number. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const idade = Number(\"18\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const idade = ___(\"18\");"
            ],
            "correctSequence": [
              "Number"
            ],
            "answerSequence": [
              "Number"
            ],
            "tokenOptions": [
              "Number",
              "String",
              "Boolean",
              "console.log",
              "parse"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: conversion turns numeric text into a real number.",
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
            "q": "Which mistake most often gets in the way of “Converting to number”?",
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
            "q": "Complete the mental model to remember “Converting to number” later.",
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
            "q": "When should “Converting to number” appear in a program?",
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
    "id": 28,
    "module": "Data Types",
    "title": "Converting in Python",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 49,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Converting in Python",
            "body": "<strong>Converting in Python</strong> appears here because learners need int turns numeric text into an integer before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Converting in Python”?",
            "options": [
              "int turns numeric text into an integer",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is int turns numeric text into an integer. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "18 inteiro",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that int turns numeric text into an integer. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "idade = int(\"18\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "idade = ___(\"18\")"
            ],
            "correctSequence": [
              "int"
            ],
            "answerSequence": [
              "int"
            ],
            "tokenOptions": [
              "int",
              "str",
              "float",
              "print",
              "input"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: int turns numeric text into an integer.",
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
            "q": "Which mistake most often gets in the way of “Converting in Python”?",
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
            "q": "Complete the mental model to remember “Converting in Python” later.",
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
            "q": "When should “Converting in Python” appear in a program?",
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
    "id": 29,
    "module": "Data Types",
    "title": "Comparing types",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Comparing types",
            "body": "<strong>Comparing types</strong> appears here because learners need wrong type changes the program rule before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Comparing types”?",
            "options": [
              "memorizing symbols before meaning",
              "wrong type changes the program rule",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is wrong type changes the program rule. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "número e texto diferentes",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that wrong type changes the program rule. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const n = 5;",
              "const t = \"5\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const t = ___;"
            ],
            "correctSequence": [
              "\"5\""
            ],
            "answerSequence": [
              "\"5\""
            ],
            "tokenOptions": [
              "\"5\"",
              "5",
              "true",
              "n",
              "const"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: wrong type changes the program rule.",
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
            "q": "Which mistake most often gets in the way of “Comparing types”?",
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
            "q": "Complete the mental model to remember “Comparing types” later.",
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
            "q": "When should “Comparing types” appear in a program?",
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
    "id": 30,
    "module": "Data Types",
    "title": "Project: Type receipt",
    "eyebrow": "module 03 · beginner ladder",
    "desc": "Learners separate text, integers, decimals, and booleans before calculating or comparing.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "advanced",
        "steps": [
          {
            "type": "teach",
            "kicker": "module final project",
            "title": "Type receipt",
            "body": "Now you apply this module in a small complete program. Read the requirements, write in the editor, and submit when the logic makes sense."
          }
        ]
      }
    ],
    "project": {
      "kind": "typeInspector",
      "language": "javascript",
      "title": "Type receipt",
      "brief": "Create values of different types and display each one in the console.",
      "requirements": [
        "Create a string.",
        "Create a number.",
        "Create a boolean.",
        "Use console.log at least three times."
      ],
      "starter": "const product = \"\";\nconst price = 0;\nconst available = false;\n\n// mostre os valores",
      "solution": "const product = \"Curso\";\nconst price = 10;\nconst available = true;\nconsole.log(product);\nconsole.log(price);\nconsole.log(available);"
    }
  }
];
