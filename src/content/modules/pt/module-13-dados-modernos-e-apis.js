// Dados Modernos e APIs
export const ptModule13 = [
  {
    "id": 121,
    "module": "Dados Modernos e APIs",
    "title": "map",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "map",
            "body": "<strong>map</strong> entra nesta ordem porque o aluno precisa aprender map transforma cada item antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “map”?",
            "options": [
              "decorar símbolos antes do sentido",
              "map transforma cada item",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é map transforma cada item. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "novo array dobrado",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que map transforma cada item. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const dobro = nums.map(n => n * 2);"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: map transforma cada item.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “map”?",
            "options": [
              "ler o código na ordem correta",
              "testar com exemplo pequeno",
              "separar dado de instrução",
              "usar o símbolo sem saber o que ele manda fazer"
            ],
            "correct": 3,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “map” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “map” deve aparecer em um programa?",
            "options": [
              "quando a regra do problema pedir exatamente essa ação",
              "sempre, mesmo sem necessidade",
              "nunca, porque iniciantes devem evitar",
              "só quando o visual parecer bonito"
            ],
            "correct": 0,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "copiar a resposta sem ler",
              "explicar com suas palavras o que a linha faz",
              "pular para assunto mais difícil",
              "trocar símbolos ao acaso"
            ],
            "correct": 1,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 122,
    "module": "Dados Modernos e APIs",
    "title": "filter",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "filter",
            "body": "<strong>filter</strong> entra nesta ordem porque o aluno precisa aprender filter mantém apenas itens que passam antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “filter”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "filter mantém apenas itens que passam",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é filter mantém apenas itens que passam. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "notas >= 7"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que filter mantém apenas itens que passam. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const aprovados = notas.filter(n => n >= 7);"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: filter mantém apenas itens que passam.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “filter”?",
            "options": [
              "usar o símbolo sem saber o que ele manda fazer",
              "ler o código na ordem correta",
              "testar com exemplo pequeno",
              "separar dado de instrução"
            ],
            "correct": 0,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “filter” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “filter” deve aparecer em um programa?",
            "options": [
              "sempre, mesmo sem necessidade",
              "quando a regra do problema pedir exatamente essa ação",
              "nunca, porque iniciantes devem evitar",
              "só quando o visual parecer bonito"
            ],
            "correct": 1,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "copiar a resposta sem ler",
              "pular para assunto mais difícil",
              "explicar com suas palavras o que a linha faz",
              "trocar símbolos ao acaso"
            ],
            "correct": 2,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 123,
    "module": "Dados Modernos e APIs",
    "title": "reduce",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 52,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "reduce",
            "body": "<strong>reduce</strong> entra nesta ordem porque o aluno precisa aprender reduce acumula em um valor antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “reduce”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "reduce acumula em um valor"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é reduce acumula em um valor. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "soma tudo",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que reduce acumula em um valor. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const total = nums.reduce((s,n) => s + n, 0);"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: reduce acumula em um valor.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “reduce”?",
            "options": [
              "ler o código na ordem correta",
              "usar o símbolo sem saber o que ele manda fazer",
              "testar com exemplo pequeno",
              "separar dado de instrução"
            ],
            "correct": 1,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “reduce” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “reduce” deve aparecer em um programa?",
            "options": [
              "sempre, mesmo sem necessidade",
              "nunca, porque iniciantes devem evitar",
              "quando a regra do problema pedir exatamente essa ação",
              "só quando o visual parecer bonito"
            ],
            "correct": 2,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "copiar a resposta sem ler",
              "pular para assunto mais difícil",
              "trocar símbolos ao acaso",
              "explicar com suas palavras o que a linha faz"
            ],
            "correct": 3,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 124,
    "module": "Dados Modernos e APIs",
    "title": "sort",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 49,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "sort",
            "body": "<strong>sort</strong> entra nesta ordem porque o aluno precisa aprender sort ordena valores antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “sort”?",
            "options": [
              "sort ordena valores",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é sort ordena valores. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "ordena nomes",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que sort ordena valores. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "nomes.sort();"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: sort ordena valores.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “sort”?",
            "options": [
              "ler o código na ordem correta",
              "testar com exemplo pequeno",
              "usar o símbolo sem saber o que ele manda fazer",
              "separar dado de instrução"
            ],
            "correct": 2,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “sort” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “sort” deve aparecer em um programa?",
            "options": [
              "sempre, mesmo sem necessidade",
              "nunca, porque iniciantes devem evitar",
              "só quando o visual parecer bonito",
              "quando a regra do problema pedir exatamente essa ação"
            ],
            "correct": 3,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "explicar com suas palavras o que a linha faz",
              "copiar a resposta sem ler",
              "pular para assunto mais difícil",
              "trocar símbolos ao acaso"
            ],
            "correct": 0,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 125,
    "module": "Dados Modernos e APIs",
    "title": "Desestruturação",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Desestruturação",
            "body": "<strong>Desestruturação</strong> entra nesta ordem porque o aluno precisa aprender desestruturação tira valores de dentro antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Desestruturação”?",
            "options": [
              "decorar símbolos antes do sentido",
              "desestruturação tira valores de dentro",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é desestruturação tira valores de dentro. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "pega nome",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que desestruturação tira valores de dentro. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const { nome } = aluno;"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: desestruturação tira valores de dentro.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “Desestruturação”?",
            "options": [
              "ler o código na ordem correta",
              "testar com exemplo pequeno",
              "separar dado de instrução",
              "usar o símbolo sem saber o que ele manda fazer"
            ],
            "correct": 3,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “Desestruturação” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Desestruturação” deve aparecer em um programa?",
            "options": [
              "quando a regra do problema pedir exatamente essa ação",
              "sempre, mesmo sem necessidade",
              "nunca, porque iniciantes devem evitar",
              "só quando o visual parecer bonito"
            ],
            "correct": 0,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "copiar a resposta sem ler",
              "explicar com suas palavras o que a linha faz",
              "pular para assunto mais difícil",
              "trocar símbolos ao acaso"
            ],
            "correct": 1,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 126,
    "module": "Dados Modernos e APIs",
    "title": "Spread",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Spread",
            "body": "<strong>Spread</strong> entra nesta ordem porque o aluno precisa aprender spread espalha valores de array/objeto antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Spread”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "spread espalha valores de array/objeto",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é spread espalha valores de array/objeto. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "copia itens"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que spread espalha valores de array/objeto. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const copia = [...lista];"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: spread espalha valores de array/objeto.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “Spread”?",
            "options": [
              "usar o símbolo sem saber o que ele manda fazer",
              "ler o código na ordem correta",
              "testar com exemplo pequeno",
              "separar dado de instrução"
            ],
            "correct": 0,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “Spread” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Spread” deve aparecer em um programa?",
            "options": [
              "sempre, mesmo sem necessidade",
              "quando a regra do problema pedir exatamente essa ação",
              "nunca, porque iniciantes devem evitar",
              "só quando o visual parecer bonito"
            ],
            "correct": 1,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "copiar a resposta sem ler",
              "pular para assunto mais difícil",
              "explicar com suas palavras o que a linha faz",
              "trocar símbolos ao acaso"
            ],
            "correct": 2,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 127,
    "module": "Dados Modernos e APIs",
    "title": "JSON stringify",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 52,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "JSON stringify",
            "body": "<strong>JSON stringify</strong> entra nesta ordem porque o aluno precisa aprender stringify transforma objeto em texto JSON antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “JSON stringify”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "stringify transforma objeto em texto JSON"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é stringify transforma objeto em texto JSON. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "texto JSON",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que stringify transforma objeto em texto JSON. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "JSON.stringify(aluno);"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: stringify transforma objeto em texto JSON.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “JSON stringify”?",
            "options": [
              "ler o código na ordem correta",
              "usar o símbolo sem saber o que ele manda fazer",
              "testar com exemplo pequeno",
              "separar dado de instrução"
            ],
            "correct": 1,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “JSON stringify” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “JSON stringify” deve aparecer em um programa?",
            "options": [
              "sempre, mesmo sem necessidade",
              "nunca, porque iniciantes devem evitar",
              "quando a regra do problema pedir exatamente essa ação",
              "só quando o visual parecer bonito"
            ],
            "correct": 2,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "copiar a resposta sem ler",
              "pular para assunto mais difícil",
              "trocar símbolos ao acaso",
              "explicar com suas palavras o que a linha faz"
            ],
            "correct": 3,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 128,
    "module": "Dados Modernos e APIs",
    "title": "JSON parse",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 49,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "JSON parse",
            "body": "<strong>JSON parse</strong> entra nesta ordem porque o aluno precisa aprender parse transforma JSON em objeto antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “JSON parse”?",
            "options": [
              "parse transforma JSON em objeto",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é parse transforma JSON em objeto. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "objeto",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que parse transforma JSON em objeto. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "JSON.parse(texto);"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: parse transforma JSON em objeto.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “JSON parse”?",
            "options": [
              "ler o código na ordem correta",
              "testar com exemplo pequeno",
              "usar o símbolo sem saber o que ele manda fazer",
              "separar dado de instrução"
            ],
            "correct": 2,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “JSON parse” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “JSON parse” deve aparecer em um programa?",
            "options": [
              "sempre, mesmo sem necessidade",
              "nunca, porque iniciantes devem evitar",
              "só quando o visual parecer bonito",
              "quando a regra do problema pedir exatamente essa ação"
            ],
            "correct": 3,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "explicar com suas palavras o que a linha faz",
              "copiar a resposta sem ler",
              "pular para assunto mais difícil",
              "trocar símbolos ao acaso"
            ],
            "correct": 0,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 129,
    "module": "Dados Modernos e APIs",
    "title": "async e await",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "async e await",
            "body": "<strong>async e await</strong> entra nesta ordem porque o aluno precisa aprender await espera uma Promise dentro de async antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “async e await”?",
            "options": [
              "decorar símbolos antes do sentido",
              "await espera uma Promise dentro de async",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é await espera uma Promise dentro de async. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "espera fetch",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que await espera uma Promise dentro de async. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "async function carregar() {",
              "  const dados = await fetch(url);",
              "}"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: await espera uma Promise dentro de async.",
            "hint": "procure o bloco que dá sentido à instrução."
          }
        ]
      },
      {
        "level": "intermediario",
        "steps": [
          {
            "type": "mc",
            "kicker": "erro comum",
            "q": "Qual erro mais atrapalha em “async e await”?",
            "options": [
              "ler o código na ordem correta",
              "testar com exemplo pequeno",
              "separar dado de instrução",
              "usar o símbolo sem saber o que ele manda fazer"
            ],
            "correct": 3,
            "explain": "Esse erro é comum: o aluno olha o símbolo e tenta adivinhar. O caminho mais seguro é voltar à pergunta: que ordem estou dando ao computador?"
          },
          {
            "type": "fill",
            "kicker": "modelo mental",
            "q": "Complete o modelo mental para lembrar “async e await” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “async e await” deve aparecer em um programa?",
            "options": [
              "quando a regra do problema pedir exatamente essa ação",
              "sempre, mesmo sem necessidade",
              "nunca, porque iniciantes devem evitar",
              "só quando o visual parecer bonito"
            ],
            "correct": 0,
            "explain": "Use o recurso quando ele resolve uma necessidade real do algoritmo. Programar é escolher a ferramenta pelo motivo, não pela aparência."
          }
        ]
      },
      {
        "level": "avancado",
        "steps": [
          {
            "type": "mc",
            "kicker": "revisão antes de avançar",
            "q": "Qual atitude mostra que você realmente entendeu esta microetapa?",
            "options": [
              "copiar a resposta sem ler",
              "explicar com suas palavras o que a linha faz",
              "pular para assunto mais difícil",
              "trocar símbolos ao acaso"
            ],
            "correct": 1,
            "explain": "Se você consegue explicar a linha com suas palavras, o conceito começou a virar raciocínio. Esse é o sinal certo para avançar."
          }
        ]
      }
    ]
  },
  {
    "id": 130,
    "module": "Dados Modernos e APIs",
    "title": "Projeto: painel assíncrono",
    "eyebrow": "módulo 13 · escada iniciante",
    "desc": "A etapa final une métodos modernos de array, JSON, Promise, fetch, async/await e tratamento de erro.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "javascript",
    "layers": [
      {
        "level": "avancado",
        "steps": [
          {
            "type": "teach",
            "kicker": "projeto final do módulo",
            "title": "Painel assíncrono",
            "body": "Agora você aplica o módulo em um pequeno programa completo. Leia os requisitos, escreva no editor e envie quando a lógica fizer sentido."
          }
        ]
      }
    ],
    "project": {
      "kind": "asyncDashboard",
      "language": "javascript",
      "title": "Painel assíncrono",
      "brief": "Crie um carregamento assíncrono com try/catch e uma lista de usuários.",
      "requirements": [
        "Crie uma async function.",
        "Use await.",
        "Use Promise.resolve ou fetch.",
        "Use try/catch.",
        "Percorra users."
      ],
      "starter": "async function loadUsers() {\n  try {\n    const users = await Promise.resolve([]);\n    // renderize usuários\n  } catch (error) {\n    console.log(error);\n  }\n}",
      "solution": "async function loadUsers() {\n  try {\n    const users = await Promise.resolve([{ name: \"Ana\" }]);\n    users.forEach(user => console.log(user.name));\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nloadUsers();"
    }
  }
];
