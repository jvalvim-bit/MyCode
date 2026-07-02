// Applied Python from Zero
export const enModule08 = [
  {
    "id": 71,
    "module": "Applied Python from Zero",
    "title": "From WRITE to print",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "From WRITE to print",
            "body": "<strong>From WRITE to print</strong> appears here because learners need print is Python output before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “From WRITE to print”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "print is Python output"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is print is Python output. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "Olá",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that print is Python output. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "print(\"Olá\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "___(\"Olá\")"
            ],
            "correctSequence": [
              "print"
            ],
            "answerSequence": [
              "print"
            ],
            "tokenOptions": [
              "print",
              "console.log",
              "input",
              "return",
              "if"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: print is Python output.",
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
            "q": "Which mistake most often gets in the way of “From WRITE to print”?",
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
            "q": "Complete the mental model to remember “From WRITE to print” later.",
            "codeTemplate": [
              "saída → ___ na tela/console"
            ],
            "correctSequence": [
              "mostrar"
            ],
            "answerSequence": [
              "mostrar"
            ],
            "tokenOptions": [
              "mostrar",
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
            "q": "When should “From WRITE to print” appear in a program?",
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
    "id": 72,
    "module": "Applied Python from Zero",
    "title": "Input with input",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Input with input",
            "body": "<strong>Input with input</strong> appears here because learners need input receives typed text before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Input with input”?",
            "options": [
              "input receives typed text",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is input receives typed text. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "guarda texto",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that input receives typed text. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "nome = input(\"Nome: \")"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "nome = ___(\"Nome: \")"
            ],
            "correctSequence": [
              "input"
            ],
            "answerSequence": [
              "input"
            ],
            "tokenOptions": [
              "input",
              "print",
              "int",
              "str",
              "return"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: input receives typed text.",
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
            "q": "Which mistake most often gets in the way of “Input with input”?",
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
            "q": "Complete the mental model to remember “Input with input” later.",
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
            "q": "When should “Input with input” appear in a program?",
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
    "id": 73,
    "module": "Applied Python from Zero",
    "title": "Converting with int",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 52,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Converting with int",
            "body": "<strong>Converting with int</strong> appears here because learners need int turns text into an integer before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Converting with int”?",
            "options": [
              "memorizing symbols before meaning",
              "int turns text into an integer",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is int turns text into an integer. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "idade numérica",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that int turns text into an integer. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "idade = int(input(\"Idade: \"))"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "idade = ___(input(\"Idade: \"))"
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
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: int turns text into an integer.",
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
            "q": "Which mistake most often gets in the way of “Converting with int”?",
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
            "q": "Complete the mental model to remember “Converting with int” later.",
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
            "q": "When should “Converting with int” appear in a program?",
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
    "id": 74,
    "module": "Applied Python from Zero",
    "title": "Converting with float",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 49,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Converting with float",
            "body": "<strong>Converting with float</strong> appears here because learners need float accepts decimals before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Converting with float”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "float accepts decimals",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is float accepts decimals. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "preço decimal"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that float accepts decimals. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "preco = float(input(\"Preço: \"))"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "preco = ___(input(\"Preço: \"))"
            ],
            "correctSequence": [
              "float"
            ],
            "answerSequence": [
              "float"
            ],
            "tokenOptions": [
              "float",
              "int",
              "str",
              "print",
              "len"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: float accepts decimals.",
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
            "q": "Which mistake most often gets in the way of “Converting with float”?",
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
            "q": "Complete the mental model to remember “Converting with float” later.",
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
            "q": "When should “Converting with float” appear in a program?",
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
    "id": 75,
    "module": "Applied Python from Zero",
    "title": "Basic f-string",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Basic f-string",
            "body": "<strong>Basic f-string</strong> appears here because learners need an f-string inserts a value into text before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Basic f-string”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "an f-string inserts a value into text"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is an f-string inserts a value into text. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "Olá, Ana",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that an f-string inserts a value into text. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "nome = \"Ana\"",
              "print(f\"Olá, {nome}\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "print(___\"Olá, {nome}\")"
            ],
            "correctSequence": [
              "f"
            ],
            "answerSequence": [
              "f"
            ],
            "tokenOptions": [
              "f",
              "str",
              "print",
              "input",
              "const"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: an f-string inserts a value into text.",
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
            "q": "Which mistake most often gets in the way of “Basic f-string”?",
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
            "q": "Complete the mental model to remember “Basic f-string” later.",
            "codeTemplate": [
              "saída → ___ na tela/console"
            ],
            "correctSequence": [
              "mostrar"
            ],
            "answerSequence": [
              "mostrar"
            ],
            "tokenOptions": [
              "mostrar",
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
            "q": "When should “Basic f-string” appear in a program?",
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
    "id": 76,
    "module": "Applied Python from Zero",
    "title": "Python if",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Python if",
            "body": "<strong>Python if</strong> appears here because learners need Python uses colon and indentation before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Python if”?",
            "options": [
              "Python uses colon and indentation",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is Python uses colon and indentation. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "bloco indentado",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that Python uses colon and indentation. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "if idade >= 18:",
              "  print(\"maior\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "if idade >= 18___"
            ],
            "correctSequence": [
              ":"
            ],
            "answerSequence": [
              ":"
            ],
            "tokenOptions": [
              ":",
              ";",
              "{",
              ")",
              "then"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: Python uses colon and indentation.",
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
            "q": "Which mistake most often gets in the way of “Python if”?",
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
            "q": "Complete the mental model to remember “Python if” later.",
            "codeTemplate": [
              "saída → ___ na tela/console"
            ],
            "correctSequence": [
              "mostrar"
            ],
            "answerSequence": [
              "mostrar"
            ],
            "tokenOptions": [
              "mostrar",
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
            "q": "When should “Python if” appear in a program?",
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
    "id": 77,
    "module": "Applied Python from Zero",
    "title": "Python else",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 52,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Python else",
            "body": "<strong>Python else</strong> appears here because learners need else takes the opposite path before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Python else”?",
            "options": [
              "memorizing symbols before meaning",
              "else takes the opposite path",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is else takes the opposite path. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "caminho alternativo",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that else takes the opposite path. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "else:",
              "  print(\"menor\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "___:"
            ],
            "correctSequence": [
              "else"
            ],
            "answerSequence": [
              "else"
            ],
            "tokenOptions": [
              "else",
              "elif",
              "if",
              "for",
              "while"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: else takes the opposite path.",
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
            "q": "Which mistake most often gets in the way of “Python else”?",
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
            "q": "Complete the mental model to remember “Python else” later.",
            "codeTemplate": [
              "saída → ___ na tela/console"
            ],
            "correctSequence": [
              "mostrar"
            ],
            "answerSequence": [
              "mostrar"
            ],
            "tokenOptions": [
              "mostrar",
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
            "q": "When should “Python else” appear in a program?",
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
    "id": 78,
    "module": "Applied Python from Zero",
    "title": "Python while",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 49,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Python while",
            "body": "<strong>Python while</strong> appears here because learners need while repeats while true before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Python while”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "while repeats while true",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is while repeats while true. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "repete"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that while repeats while true. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "while contador < 3:",
              "  contador = contador + 1"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "___ contador < 3:"
            ],
            "correctSequence": [
              "while"
            ],
            "answerSequence": [
              "while"
            ],
            "tokenOptions": [
              "while",
              "for",
              "if",
              "else",
              "return"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: while repeats while true.",
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
            "q": "Which mistake most often gets in the way of “Python while”?",
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
            "q": "Complete the mental model to remember “Python while” later.",
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
            "q": "When should “Python while” appear in a program?",
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
    "id": 79,
    "module": "Applied Python from Zero",
    "title": "Python for range",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 50,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Python for range",
            "body": "<strong>Python for range</strong> appears here because learners need range generates a number sequence before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Python for range”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "range generates a number sequence"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is range generates a number sequence. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "0,1,2",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that range generates a number sequence. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "for i in range(3):",
              "  print(i)"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "for i in ___(3):"
            ],
            "correctSequence": [
              "range"
            ],
            "answerSequence": [
              "range"
            ],
            "tokenOptions": [
              "range",
              "len",
              "list",
              "input",
              "while"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: range generates a number sequence.",
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
            "q": "Which mistake most often gets in the way of “Python for range”?",
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
            "q": "Complete the mental model to remember “Python for range” later.",
            "codeTemplate": [
              "saída → ___ na tela/console"
            ],
            "correctSequence": [
              "mostrar"
            ],
            "answerSequence": [
              "mostrar"
            ],
            "tokenOptions": [
              "mostrar",
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
            "q": "When should “Python for range” appear in a program?",
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
    "id": 80,
    "module": "Applied Python from Zero",
    "title": "Project: Python card",
    "eyebrow": "module 08 · beginner ladder",
    "desc": "After the general foundation, Python becomes easier: print, input, conversions, variables, f-strings, and small programs.",
    "xp": 51,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "advanced",
        "steps": [
          {
            "type": "teach",
            "kicker": "module final project",
            "title": "Python card",
            "body": "Now you apply this module in a small complete program. Read the requirements, write in the editor, and submit when the logic makes sense."
          }
        ]
      }
    ],
    "project": {
      "kind": "pythonProfileCard",
      "language": "python",
      "title": "Python card",
      "brief": "Write a complete Python program that creates three simple variables and displays a profile card in the terminal using print.",
      "requirements": [
        "Create a variable named name.",
        "Create a variable named topic.",
        "Create a variable named goal.",
        "Use print at least three times."
      ],
      "starter": "name = \"\"\ntopic = \"\"\ngoal = \"\"\n\n# mostre as três informações no terminal",
      "solution": "name = \"Ana\"\ntopic = \"Python\"\ngoal = \"criar meus primeiros programas\"\n\nprint(\"Nome:\", name)\nprint(\"Estudando:\", topic)\nprint(\"Objetivo:\", goal)"
    }
  }
];
