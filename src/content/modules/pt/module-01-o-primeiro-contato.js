// O Primeiro Contato
export const ptModule01 = [
  {
    "id": 1,
    "module": "O Primeiro Contato",
    "title": "O que é um programa",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 40,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "O que é um programa",
            "body": "<strong>O que é um programa</strong> entra nesta ordem porque o aluno precisa aprender programa como lista de ordens claras antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “O que é um programa”?",
            "options": [
              "decorar símbolos antes do sentido",
              "programa como lista de ordens claras",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é programa como lista de ordens claras. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "mostra uma mensagem",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que programa como lista de ordens claras. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "// ordem 1",
              "console.log(\"Olá\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "console.log ___"
            ],
            "correctSequence": "(\"Olá\");",
            "answerSequence": "(\"Olá\");",
            "tokenOptions": [
              "console.log",
              "print",
              "if",
              "return",
              "(\"Olá\");",
              "\"Olá\""
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: programa como lista de ordens claras.",
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
            "q": "Qual erro mais atrapalha em “O que é um programa”?",
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
            "q": "Complete o modelo mental para lembrar “O que é um programa” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “O que é um programa” deve aparecer em um programa?",
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
    "id": 2,
    "module": "O Primeiro Contato",
    "title": "Onde o código roda",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 41,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Onde o código roda",
            "body": "<strong>Onde o código roda</strong> entra nesta ordem porque o aluno precisa aprender código precisa de um ambiente para executar antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Onde o código roda”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "código precisa de um ambiente para executar",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é código precisa de um ambiente para executar. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "executa no ambiente certo"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que código precisa de um ambiente para executar. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "// navegador ou terminal",
              "console.log(\"rodando\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "console.log___"
            ],
            "correctSequence": [
              "(\"rodando\");"
            ],
            "answerSequence": [
              "(\"rodando\");"
            ],
            "tokenOptions": [
              "console.log",
              "print",
              "(\"rodando\");",
              "input",
              "return"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: código precisa de um ambiente para executar.",
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
            "q": "Qual erro mais atrapalha em “Onde o código roda”?",
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
            "q": "Complete o modelo mental para lembrar “Onde o código roda” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Onde o código roda” deve aparecer em um programa?",
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
    "id": 3,
    "module": "O Primeiro Contato",
    "title": "Ordem das instruções",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 42,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Ordem das instruções",
            "body": "<strong>Ordem das instruções</strong> entra nesta ordem porque o aluno precisa aprender o computador executa de cima para baixo antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Ordem das instruções”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "o computador executa de cima para baixo"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é o computador executa de cima para baixo. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "A depois B",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que o computador executa de cima para baixo. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "console.log(\"A\");",
              "console.log(\"B\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "console.log(\"___\");"
            ],
            "correctSequence": [
              "A"
            ],
            "answerSequence": [
              "A"
            ],
            "tokenOptions": [
              "A",
              "B",
              "1",
              "true",
              "console.log"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: o computador executa de cima para baixo.",
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
            "q": "Qual erro mais atrapalha em “Ordem das instruções”?",
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
            "q": "Complete o modelo mental para lembrar “Ordem das instruções” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Ordem das instruções” deve aparecer em um programa?",
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
    "id": 4,
    "module": "O Primeiro Contato",
    "title": "Saída com console.log",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 39,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Saída com console.log",
            "body": "<strong>Saída com console.log</strong> entra nesta ordem porque o aluno precisa aprender console.log mostra algo no console do JavaScript antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Saída com console.log”?",
            "options": [
              "console.log mostra algo no console do JavaScript",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é console.log mostra algo no console do JavaScript. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "Hello World",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que console.log mostra algo no console do JavaScript. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "console.log(\"Hello World\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "___.log(\"Hello World\");"
            ],
            "correctSequence": [
              "console"
            ],
            "answerSequence": [
              "console"
            ],
            "tokenOptions": [
              "console",
              "print",
              "input",
              "return",
              "log"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: console.log mostra algo no console do JavaScript.",
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
            "q": "Qual erro mais atrapalha em “Saída com console.log”?",
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
            "q": "Complete o modelo mental para lembrar “Saída com console.log” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Saída com console.log” deve aparecer em um programa?",
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
    "id": 5,
    "module": "O Primeiro Contato",
    "title": "Saída com print",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 40,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Saída com print",
            "body": "<strong>Saída com print</strong> entra nesta ordem porque o aluno precisa aprender print mostra algo no terminal do Python antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Saída com print”?",
            "options": [
              "decorar símbolos antes do sentido",
              "print mostra algo no terminal do Python",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é print mostra algo no terminal do Python. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "Hello World",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que print mostra algo no terminal do Python. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "print(\"Hello World\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "___(\"Hello World\")"
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: print mostra algo no terminal do Python.",
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
            "q": "Qual erro mais atrapalha em “Saída com print”?",
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
            "q": "Complete o modelo mental para lembrar “Saída com print” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Saída com print” deve aparecer em um programa?",
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
    "id": 6,
    "module": "O Primeiro Contato",
    "title": "Texto literal com aspas",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 41,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Texto literal com aspas",
            "body": "<strong>Texto literal com aspas</strong> entra nesta ordem porque o aluno precisa aprender aspas dizem: mostre exatamente este texto antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Texto literal com aspas”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "aspas dizem: mostre exatamente este texto",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é aspas dizem: mostre exatamente este texto. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "nome"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que aspas dizem: mostre exatamente este texto. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "console.log(\"nome\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "console.log(___);"
            ],
            "correctSequence": [
              "\"nome\""
            ],
            "answerSequence": [
              "\"nome\""
            ],
            "tokenOptions": [
              "\"nome\"",
              "nome",
              "5",
              "true",
              "const"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: aspas dizem: mostre exatamente este texto.",
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
            "q": "Qual erro mais atrapalha em “Texto literal com aspas”?",
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
            "q": "Complete o modelo mental para lembrar “Texto literal com aspas” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Texto literal com aspas” deve aparecer em um programa?",
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
    "id": 7,
    "module": "O Primeiro Contato",
    "title": "Sem aspas procura valor",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 42,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Sem aspas procura valor",
            "body": "<strong>Sem aspas procura valor</strong> entra nesta ordem porque o aluno precisa aprender sem aspas, a linguagem procura uma variável antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Sem aspas procura valor”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "sem aspas, a linguagem procura uma variável"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é sem aspas, a linguagem procura uma variável. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "Ana",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que sem aspas, a linguagem procura uma variável. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "const nome = \"Ana\";",
              "console.log(nome);"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "console.log(___);"
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
              "Ana",
              "\"Ana\"",
              "console"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: sem aspas, a linguagem procura uma variável.",
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
            "q": "Qual erro mais atrapalha em “Sem aspas procura valor”?",
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
            "q": "Complete o modelo mental para lembrar “Sem aspas procura valor” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Sem aspas procura valor” deve aparecer em um programa?",
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
    "id": 8,
    "module": "O Primeiro Contato",
    "title": "Uma ordem por linha",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 39,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Uma ordem por linha",
            "body": "<strong>Uma ordem por linha</strong> entra nesta ordem porque o aluno precisa aprender linhas separam passos para facilitar a leitura antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Uma ordem por linha”?",
            "options": [
              "linhas separam passos para facilitar a leitura",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é linhas separam passos para facilitar a leitura. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "duas saídas em ordem",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que linhas separam passos para facilitar a leitura. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "console.log(\"início\");",
              "console.log(\"fim\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "console.log(\"início\"); ___(\"fim\");"
            ],
            "correctSequence": [
              "console.log"
            ],
            "answerSequence": [
              "console.log"
            ],
            "tokenOptions": [
              "console.log",
              "print",
              "return",
              "if",
              "let"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: linhas separam passos para facilitar a leitura.",
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
            "q": "Qual erro mais atrapalha em “Uma ordem por linha”?",
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
            "q": "Complete o modelo mental para lembrar “Uma ordem por linha” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Uma ordem por linha” deve aparecer em um programa?",
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
    "id": 9,
    "module": "O Primeiro Contato",
    "title": "Lendo erro simples",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 40,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Lendo erro simples",
            "body": "<strong>Lendo erro simples</strong> entra nesta ordem porque o aluno precisa aprender erro é pista do que o computador não entendeu antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Lendo erro simples”?",
            "options": [
              "decorar símbolos antes do sentido",
              "erro é pista do que o computador não entendeu",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é erro é pista do que o computador não entendeu. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "falta fechar parêntese",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que erro é pista do que o computador não entendeu. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "console.log(\"Olá\";"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "console.log(\"Olá\"___;"
            ],
            "correctSequence": [
              ")"
            ],
            "answerSequence": [
              ")"
            ],
            "tokenOptions": [
              ")",
              "(",
              "}",
              ";",
              "\""
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: erro é pista do que o computador não entendeu.",
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
            "q": "Qual erro mais atrapalha em “Lendo erro simples”?",
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
            "q": "Complete o modelo mental para lembrar “Lendo erro simples” depois.",
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
            "explain": "O modelo mental é um resumo curto para você lembrar depois. Ele não substitui a sintaxe, mas ajuda a sintaxe a fazer sentido.",
            "hint": "pense na ação que o computador executa."
          },
          {
            "type": "mc",
            "kicker": "quando usar",
            "q": "Quando “Lendo erro simples” deve aparecer em um programa?",
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
    "id": 10,
    "module": "O Primeiro Contato",
    "title": "Projeto: Hello World guiado",
    "eyebrow": "módulo 01 · escada iniciante",
    "desc": "Antes de variáveis e lógica pesada, o aluno entende o que é um programa, onde ele roda, como a ordem das instruções funciona e como mostrar algo na tela.",
    "xp": 41,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "fundamentos",
    "layers": [
      {
        "level": "avancado",
        "steps": [
          {
            "type": "teach",
            "kicker": "projeto final do módulo",
            "title": "Hello World guiado",
            "body": "Agora você aplica o módulo em um pequeno programa completo. Leia os requisitos, escreva no editor e envie quando a lógica fizer sentido."
          }
        ]
      }
    ],
    "project": {
      "kind": "helloWorld",
      "language": "javascript",
      "title": "Hello World guiado",
      "brief": "Crie uma mensagem chamada message e mostre Hello World no console.",
      "requirements": [
        "Crie uma variável chamada message.",
        "Guarde o texto \"Hello World\".",
        "Use console.log(message)."
      ],
      "starter": "const message = \"\";\n\n// mostre a mensagem no console",
      "solution": "const message = \"Hello World\";\nconsole.log(message);"
    }
  }
];
