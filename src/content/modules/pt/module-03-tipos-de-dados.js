// Tipos de Dados
export const ptModule03 = [
  {
    "id": 21,
    "module": "Tipos de Dados",
    "title": "Texto é string",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Texto é string",
            "body": "<strong>Texto é string</strong> entra nesta ordem porque o aluno precisa aprender string é texto entre aspas antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Texto é string”?",
            "options": [
              "decorar símbolos antes do sentido",
              "string é texto entre aspas",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é string é texto entre aspas. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "texto Python",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que string é texto entre aspas. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const curso = \"Python\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: string é texto entre aspas.",
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
            "q": "Qual erro mais atrapalha em “Texto é string”?",
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
            "q": "Complete o modelo mental para lembrar “Texto é string” depois.",
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
            "q": "Quando “Texto é string” deve aparecer em um programa?",
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
    "id": 22,
    "module": "Tipos de Dados",
    "title": "Número não usa aspas",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Número não usa aspas",
            "body": "<strong>Número não usa aspas</strong> entra nesta ordem porque o aluno precisa aprender número sem aspas pode participar de cálculo antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Número não usa aspas”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "número sem aspas pode participar de cálculo",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é número sem aspas pode participar de cálculo. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "número 5"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que número sem aspas pode participar de cálculo. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const curtidas = 5;"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: número sem aspas pode participar de cálculo.",
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
            "q": "Qual erro mais atrapalha em “Número não usa aspas”?",
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
            "q": "Complete o modelo mental para lembrar “Número não usa aspas” depois.",
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
            "q": "Quando “Número não usa aspas” deve aparecer em um programa?",
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
    "id": 23,
    "module": "Tipos de Dados",
    "title": "Inteiros",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 52,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Inteiros",
            "body": "<strong>Inteiros</strong> entra nesta ordem porque o aluno precisa aprender inteiro é número sem parte decimal antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Inteiros”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "inteiro é número sem parte decimal"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é inteiro é número sem parte decimal. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "25 é inteiro",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que inteiro é número sem parte decimal. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "idade = 25"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: inteiro é número sem parte decimal.",
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
            "q": "Qual erro mais atrapalha em “Inteiros”?",
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
            "q": "Complete o modelo mental para lembrar “Inteiros” depois.",
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
            "q": "Quando “Inteiros” deve aparecer em um programa?",
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
    "id": 24,
    "module": "Tipos de Dados",
    "title": "Decimais",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 49,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Decimais",
            "body": "<strong>Decimais</strong> entra nesta ordem porque o aluno precisa aprender decimal representa valores quebrados antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Decimais”?",
            "options": [
              "decimal representa valores quebrados",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é decimal representa valores quebrados. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "9.90 é decimal",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que decimal representa valores quebrados. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const preco = 9.90;"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: decimal representa valores quebrados.",
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
            "q": "Qual erro mais atrapalha em “Decimais”?",
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
            "q": "Complete o modelo mental para lembrar “Decimais” depois.",
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
            "q": "Quando “Decimais” deve aparecer em um programa?",
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
    "id": 25,
    "module": "Tipos de Dados",
    "title": "Booleanos",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Booleanos",
            "body": "<strong>Booleanos</strong> entra nesta ordem porque o aluno precisa aprender booleano só responde verdadeiro ou falso antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Booleanos”?",
            "options": [
              "decorar símbolos antes do sentido",
              "booleano só responde verdadeiro ou falso",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é booleano só responde verdadeiro ou falso. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "valor lógico",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que booleano só responde verdadeiro ou falso. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const aprovado = true;"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: booleano só responde verdadeiro ou falso.",
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
            "q": "Qual erro mais atrapalha em “Booleanos”?",
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
            "q": "Complete o modelo mental para lembrar “Booleanos” depois.",
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
            "q": "Quando “Booleanos” deve aparecer em um programa?",
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
    "id": 26,
    "module": "Tipos de Dados",
    "title": "String numérica",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "String numérica",
            "body": "<strong>String numérica</strong> entra nesta ordem porque o aluno precisa aprender \"10\" parece número, mas é texto antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “String numérica”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "\"10\" parece número, mas é texto",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é \"10\" parece número, mas é texto. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "texto 10"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que \"10\" parece número, mas é texto. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const valor = \"10\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: \"10\" parece número, mas é texto.",
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
            "q": "Qual erro mais atrapalha em “String numérica”?",
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
            "q": "Complete o modelo mental para lembrar “String numérica” depois.",
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
            "q": "Quando “String numérica” deve aparecer em um programa?",
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
    "id": 27,
    "module": "Tipos de Dados",
    "title": "Convertendo para número",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 52,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Convertendo para número",
            "body": "<strong>Convertendo para número</strong> entra nesta ordem porque o aluno precisa aprender conversão muda texto numérico para número real antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Convertendo para número”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "conversão muda texto numérico para número real"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é conversão muda texto numérico para número real. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "18 como número",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que conversão muda texto numérico para número real. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const idade = Number(\"18\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: conversão muda texto numérico para número real.",
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
            "q": "Qual erro mais atrapalha em “Convertendo para número”?",
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
            "q": "Complete o modelo mental para lembrar “Convertendo para número” depois.",
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
            "q": "Quando “Convertendo para número” deve aparecer em um programa?",
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
    "id": 28,
    "module": "Tipos de Dados",
    "title": "Convertendo em Python",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 49,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Convertendo em Python",
            "body": "<strong>Convertendo em Python</strong> entra nesta ordem porque o aluno precisa aprender int transforma texto numérico em inteiro antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Convertendo em Python”?",
            "options": [
              "int transforma texto numérico em inteiro",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é int transforma texto numérico em inteiro. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "18 inteiro",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que int transforma texto numérico em inteiro. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "idade = int(\"18\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: int transforma texto numérico em inteiro.",
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
            "q": "Qual erro mais atrapalha em “Convertendo em Python”?",
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
            "q": "Complete o modelo mental para lembrar “Convertendo em Python” depois.",
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
            "q": "Quando “Convertendo em Python” deve aparecer em um programa?",
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
    "id": 29,
    "module": "Tipos de Dados",
    "title": "Comparando tipos",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Comparando tipos",
            "body": "<strong>Comparando tipos</strong> entra nesta ordem porque o aluno precisa aprender tipo errado muda a regra do programa antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Comparando tipos”?",
            "options": [
              "decorar símbolos antes do sentido",
              "tipo errado muda a regra do programa",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é tipo errado muda a regra do programa. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "número e texto diferentes",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que tipo errado muda a regra do programa. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const n = 5;",
              "const t = \"5\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: tipo errado muda a regra do programa.",
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
            "q": "Qual erro mais atrapalha em “Comparando tipos”?",
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
            "q": "Complete o modelo mental para lembrar “Comparando tipos” depois.",
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
            "q": "Quando “Comparando tipos” deve aparecer em um programa?",
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
    "id": 30,
    "module": "Tipos de Dados",
    "title": "Projeto: recibo de tipos",
    "eyebrow": "módulo 03 · escada iniciante",
    "desc": "O aluno separa texto, número inteiro, número decimal e booleano antes de calcular ou comparar.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "valores",
    "layers": [
      {
        "level": "avancado",
        "steps": [
          {
            "type": "teach",
            "kicker": "projeto final do módulo",
            "title": "Recibo de tipos",
            "body": "Agora você aplica o módulo em um pequeno programa completo. Leia os requisitos, escreva no editor e envie quando a lógica fizer sentido."
          }
        ]
      }
    ],
    "project": {
      "kind": "typeInspector",
      "language": "javascript",
      "title": "Recibo de tipos",
      "brief": "Crie valores de tipos diferentes e mostre cada um no console.",
      "requirements": [
        "Crie uma string.",
        "Crie um number.",
        "Crie um boolean.",
        "Use console.log pelo menos três vezes."
      ],
      "starter": "const product = \"\";\nconst price = 0;\nconst available = false;\n\n// mostre os valores",
      "solution": "const product = \"Curso\";\nconst price = 10;\nconst available = true;\nconsole.log(product);\nconsole.log(price);\nconsole.log(available);"
    }
  }
];
