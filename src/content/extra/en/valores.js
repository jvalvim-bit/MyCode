// Extra questions: valores
export const enExtra03_valores = [
  {
    "type": "mc",
    "kicker": "adaptive review",
    "q": "Which value is text, not a number?",
    "options": [
      "10",
      "true",
      "\"10\"",
      "7.5"
    ],
    "correct": 2,
    "explain": "With quotes, \"10\" becomes text. Without quotes, 10 is a number."
  },
  {
    "type": "fill",
    "kicker": "adaptive review",
    "q": "Complete with a JavaScript boolean.",
    "codeTemplate": [
      "const active = ___;"
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
      "active",
      "const"
    ],
    "explain": "true without quotes is a boolean. \"true\" with quotes is text.",
    "hint": "logical value without quotes."
  }
];
