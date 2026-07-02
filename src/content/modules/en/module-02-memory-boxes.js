// Memory Boxes
export const enModule02 = [
  {
    "id": 11,
    "module": "Memory Boxes",
    "title": "Storing a value",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 45,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Storing a value",
            "body": "<strong>Storing a value</strong> appears here because learners need a variable is a labeled box before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Storing a value”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "a variable is a labeled box"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is a variable is a labeled box. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "guarda Ana em nome",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that a variable is a labeled box. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const nome = \"Ana\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const ___ = \"Ana\";"
            ],
            "correctSequence": [
              "nome"
            ],
            "answerSequence": [
              "nome"
            ],
            "tokenOptions": [
              "nome",
              "\"nome\"",
              "let",
              "var",
              "Ana"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: a variable is a labeled box.",
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
            "q": "Which mistake most often gets in the way of “Storing a value”?",
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
            "q": "Complete the mental model to remember “Storing a value” later.",
            "codeTemplate": [
              "variável → ___ valor"
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
            "q": "When should “Storing a value” appear in a program?",
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
    "id": 12,
    "module": "Memory Boxes",
    "title": "The assignment sign",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 46,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "The assignment sign",
            "body": "<strong>The assignment sign</strong> appears here because learners need = stores the value in the box on the left before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “The assignment sign”?",
            "options": [
              "= stores the value in the box on the left",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is = stores the value in the box on the left. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "idade recebe 20",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that = stores the value in the box on the left. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "let idade = 20;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "let idade ___ 20;"
            ],
            "correctSequence": [
              "="
            ],
            "answerSequence": [
              "="
            ],
            "tokenOptions": [
              "=",
              "==",
              "===",
              "=>",
              "+"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: = stores the value in the box on the left.",
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
            "q": "Which mistake most often gets in the way of “The assignment sign”?",
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
            "q": "Complete the mental model to remember “The assignment sign” later.",
            "codeTemplate": [
              "variável → ___ valor"
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
            "q": "When should “The assignment sign” appear in a program?",
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
    "id": 13,
    "module": "Memory Boxes",
    "title": "Variable names",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 47,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Variable names",
            "body": "<strong>Variable names</strong> appears here because learners need clear names help code tell the story before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Variable names”?",
            "options": [
              "memorizing symbols before meaning",
              "clear names help code tell the story",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is clear names help code tell the story. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "nome descreve o valor",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that clear names help code tell the story. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const totalDePontos = 10;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "const ___ = 10;"
            ],
            "correctSequence": [
              "totalDePontos"
            ],
            "answerSequence": [
              "totalDePontos"
            ],
            "tokenOptions": [
              "totalDePontos",
              "10",
              "const",
              "pontos totais",
              "\"total\""
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: clear names help code tell the story.",
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
            "q": "Which mistake most often gets in the way of “Variable names”?",
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
            "q": "Complete the mental model to remember “Variable names” later.",
            "codeTemplate": [
              "variável → ___ valor"
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
            "q": "When should “Variable names” appear in a program?",
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
    "id": 14,
    "module": "Memory Boxes",
    "title": "const as a locked box",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 44,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "const as a locked box",
            "body": "<strong>const as a locked box</strong> appears here because learners need const stores a value that should not change before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “const as a locked box”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "const stores a value that should not change",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is const stores a value that should not change. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "limite fixo"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that const stores a value that should not change. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "const limite = 3;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "___ limite = 3;"
            ],
            "correctSequence": [
              "const"
            ],
            "answerSequence": [
              "const"
            ],
            "tokenOptions": [
              "const",
              "let",
              "var",
              "if",
              "return"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: const stores a value that should not change.",
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
            "q": "Which mistake most often gets in the way of “const as a locked box”?",
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
            "q": "Complete the mental model to remember “const as a locked box” later.",
            "codeTemplate": [
              "variável → ___ valor"
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
            "q": "When should “const as a locked box” appear in a program?",
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
    "id": 15,
    "module": "Memory Boxes",
    "title": "let as an editable box",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 45,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "let as an editable box",
            "body": "<strong>let as an editable box</strong> appears here because learners need let lets the value change later before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “let as an editable box”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "let lets the value change later"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is let lets the value change later. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "pontos muda para 1",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that let lets the value change later. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "let pontos = 0;",
              "pontos = 1;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "___ pontos = 0;"
            ],
            "correctSequence": [
              "let"
            ],
            "answerSequence": [
              "let"
            ],
            "tokenOptions": [
              "let",
              "const",
              "var",
              "print",
              "if"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: let lets the value change later.",
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
            "q": "Which mistake most often gets in the way of “let as an editable box”?",
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
            "q": "Complete the mental model to remember “let as an editable box” later.",
            "codeTemplate": [
              "variável → ___ valor"
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
            "q": "When should “let as an editable box” appear in a program?",
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
    "id": 16,
    "module": "Memory Boxes",
    "title": "Why avoid var",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 46,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Why avoid var",
            "body": "<strong>Why avoid var</strong> appears here because learners need var is old and confuses scope for beginners before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Why avoid var”?",
            "options": [
              "var is old and confuses scope for beginners",
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 0,
            "explain": "Good. The foundation here is var is old and confuses scope for beginners. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "preferir let ou const",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 1,
            "explain": "The example is short on purpose. It shows that var is old and confuses scope for beginners. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "let nome = \"Bia\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "___ nome = \"Bia\";"
            ],
            "correctSequence": [
              "let"
            ],
            "answerSequence": [
              "let"
            ],
            "tokenOptions": [
              "var",
              "let",
              "function",
              "print",
              "if"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: var is old and confuses scope for beginners.",
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
            "q": "Which mistake most often gets in the way of “Why avoid var”?",
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
            "q": "Complete the mental model to remember “Why avoid var” later.",
            "codeTemplate": [
              "variável → ___ valor"
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
            "q": "When should “Why avoid var” appear in a program?",
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
    "id": 17,
    "module": "Memory Boxes",
    "title": "Variables in Python",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 47,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Variables in Python",
            "body": "<strong>Variables in Python</strong> appears here because learners need Python creates variables without const or let before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Variables in Python”?",
            "options": [
              "memorizing symbols before meaning",
              "Python creates variables without const or let",
              "choosing by appearance",
              "skipping the previous step"
            ],
            "correct": 1,
            "explain": "Good. The foundation here is Python creates variables without const or let. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "nome guarda Ana",
              "order does not matter"
            ],
            "correct": 2,
            "explain": "The example is short on purpose. It shows that Python creates variables without const or let. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "nome = \"Ana\"",
              "print(nome)"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "___ = \"Ana\""
            ],
            "correctSequence": [
              "nome"
            ],
            "answerSequence": [
              "nome"
            ],
            "tokenOptions": [
              "nome",
              "let",
              "const",
              "var",
              "print"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: Python creates variables without const or let.",
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
            "q": "Which mistake most often gets in the way of “Variables in Python”?",
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
            "q": "Complete the mental model to remember “Variables in Python” later.",
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
            "q": "When should “Variables in Python” appear in a program?",
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
    "id": 18,
    "module": "Memory Boxes",
    "title": "Constant by convention",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 44,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Constant by convention",
            "body": "<strong>Constant by convention</strong> appears here because learners need in Python, uppercase names signal it should not change before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Constant by convention”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "in Python, uppercase names signal it should not change",
              "skipping the previous step"
            ],
            "correct": 2,
            "explain": "Good. The foundation here is in Python, uppercase names signal it should not change. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter",
              "nome em maiúsculas"
            ],
            "correct": 3,
            "explain": "The example is short on purpose. It shows that in Python, uppercase names signal it should not change. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "TAXA = 10"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "___ = 10"
            ],
            "correctSequence": [
              "TAXA"
            ],
            "answerSequence": [
              "TAXA"
            ],
            "tokenOptions": [
              "TAXA",
              "taxa",
              "const",
              "let",
              "\"TAXA\""
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: in Python, uppercase names signal it should not change.",
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
            "q": "Which mistake most often gets in the way of “Constant by convention”?",
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
            "q": "Complete the mental model to remember “Constant by convention” later.",
            "codeTemplate": [
              "variável → ___ valor"
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
            "q": "When should “Constant by convention” appear in a program?",
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
    "id": 19,
    "module": "Memory Boxes",
    "title": "Updating a value",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 45,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "basic",
        "steps": [
          {
            "type": "teach",
            "kicker": "before code",
            "title": "Updating a value",
            "body": "<strong>Updating a value</strong> appears here because learners need only change when the rule asks for change before mixing it with larger challenges.<br><br>Read the analogy, observe one or two lines, and only then complete the block. This is the ladder: concept, visual trace, and application."
          },
          {
            "type": "mc",
            "kicker": "step A · analogy",
            "q": "What is the best way to think about “Updating a value”?",
            "options": [
              "memorizing symbols before meaning",
              "choosing by appearance",
              "skipping the previous step",
              "only change when the rule asks for change"
            ],
            "correct": 3,
            "explain": "Good. The foundation here is only change when the rule asks for change. Once that mental image is clear, syntax stops looking random and becomes an instruction with a purpose."
          },
          {
            "type": "mc",
            "kicker": "step B · visual trace",
            "q": "What happens in the example shown?",
            "options": [
              "tentativas vira 2",
              "the code is ignored",
              "the result depends on guessing",
              "order does not matter"
            ],
            "correct": 0,
            "explain": "The example is short on purpose. It shows that only change when the rule asks for change. Before writing code, practice seeing what is happening in one or two lines.",
            "codeLines": [
              "let tentativas = 1;",
              "tentativas = 2;"
            ]
          },
          {
            "type": "fill",
            "kicker": "step C · fill",
            "q": "Complete the highlighted part by tapping the correct blocks.",
            "codeTemplate": [
              "tentativas ___ 2;"
            ],
            "correctSequence": [
              "="
            ],
            "answerSequence": [
              "="
            ],
            "tokenOptions": [
              "=",
              "===",
              "+",
              "const",
              "if"
            ],
            "explain": "This fill-in locks the smallest detail. A common mistake is memorizing the whole line; focus on the block role: only change when the rule asks for change.",
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
            "q": "Which mistake most often gets in the way of “Updating a value”?",
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
            "q": "Complete the mental model to remember “Updating a value” later.",
            "codeTemplate": [
              "variável → ___ valor"
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
            "q": "When should “Updating a value” appear in a program?",
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
    "id": 20,
    "module": "Memory Boxes",
    "title": "Project: Data card",
    "eyebrow": "module 02 · beginner ladder",
    "desc": "Variables are named boxes. Learners study assignment, const, let, why var is avoided, and how Python stores values without a keyword.",
    "xp": 46,
    "tips": [
      "Do not skip the analogy before syntax.",
      "Read code from top to bottom."
    ],
    "topic": "variáveis",
    "layers": [
      {
        "level": "advanced",
        "steps": [
          {
            "type": "teach",
            "kicker": "module final project",
            "title": "Data card",
            "body": "Now you apply this module in a small complete program. Read the requirements, write in the editor, and submit when the logic makes sense."
          }
        ]
      }
    ],
    "project": {
      "kind": "memoryBoxes",
      "language": "javascript",
      "title": "Data card",
      "brief": "Create memory boxes with const and let and display the values.",
      "requirements": [
        "Use const for name.",
        "Use let for level.",
        "Display the values with console.log."
      ],
      "starter": "const name = \"\";\nlet level = 0;\n\n// mostre os dados",
      "solution": "const name = \"Ana\";\nlet level = 1;\nconsole.log(name);\nconsole.log(level);"
    }
  }
];
