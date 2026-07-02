// Extra questions: condições
export const enExtra04_condicoes = [
  {
    "type": "mc",
    "kicker": "adaptive review",
    "q": "What does if do?",
    "options": [
      "repeats forever",
      "decides whether a block runs",
      "stores text",
      "creates a list"
    ],
    "correct": 1,
    "explain": "if is a decision: if the condition is true, the block runs."
  },
  {
    "type": "fill",
    "kicker": "adaptive review",
    "q": "Complete the passing grade comparison.",
    "codeTemplate": [
      "if (grade ___ 7) {"
    ],
    "correctSequence": [
      ">="
    ],
    "answerSequence": [
      ">="
    ],
    "tokenOptions": [
      ">=",
      "<=",
      "=",
      "+",
      "&&"
    ],
    "explain": ">= means greater than or equal. It is common for minimum grades.",
    "hint": "greater than or equal."
  }
];
