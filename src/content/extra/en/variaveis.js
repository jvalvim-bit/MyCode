// Extra questions: variáveis
export const enExtra02_variaveis = [
  {
    "type": "mc",
    "kicker": "adaptive review",
    "q": "Which analogy best matches a variable?",
    "options": [
      "a labeled box",
      "a drawing with no function",
      "a question with no answer",
      "a terminal error"
    ],
    "correct": 0,
    "explain": "A variable is like a named box. The name lets you find the value later."
  },
  {
    "type": "fill",
    "kicker": "adaptive review",
    "q": "Complete an editable JavaScript variable.",
    "codeTemplate": [
      "___ points = 0;"
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
      "if",
      "return"
    ],
    "explain": "Use let when the value may change later. const is better for fixed values.",
    "hint": "editable box."
  }
];
