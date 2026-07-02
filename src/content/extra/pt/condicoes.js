// Extra questions: condições
export const ptExtra04_condicoes = [
  {
    "type": "mc",
    "kicker": "reforço adaptativo",
    "q": "O que o if faz?",
    "options": [
      "repete para sempre",
      "decide se um bloco executa",
      "guarda texto",
      "cria uma lista"
    ],
    "correct": 1,
    "explain": "if é decisão: se a condição for verdadeira, o bloco executa."
  },
  {
    "type": "fill",
    "kicker": "reforço adaptativo",
    "q": "Complete a comparação de aprovado.",
    "codeTemplate": [
      "if (nota ___ 7) {"
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
    "explain": ">= significa maior ou igual. É a comparação comum para nota mínima.",
    "hint": "maior ou igual."
  }
];
