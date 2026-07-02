// Extra questions: valores
export const ptExtra03_valores = [
  {
    "type": "mc",
    "kicker": "reforço adaptativo",
    "q": "Qual valor é texto, não número?",
    "options": [
      "10",
      "true",
      "\"10\"",
      "7.5"
    ],
    "correct": 2,
    "explain": "Com aspas, \"10\" vira texto. Sem aspas, 10 é número."
  },
  {
    "type": "fill",
    "kicker": "reforço adaptativo",
    "q": "Complete com um booleano em JavaScript.",
    "codeTemplate": [
      "const ativo = ___;"
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
      "10",
      "ativo",
      "const"
    ],
    "explain": "true sem aspas é booleano. \"true\" com aspas é texto.",
    "hint": "valor lógico sem aspas."
  }
];
