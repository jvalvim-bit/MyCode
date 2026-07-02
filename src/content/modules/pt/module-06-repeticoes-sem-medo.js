// Repetições Sem Medo
export const ptModule06 = [
  {
    "id": 51,
    "module": "Repetições Sem Medo",
    "title": "Por que repetir",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 40,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Por que repetir",
            "body": "<strong>Por que repetir</strong> entra nesta ordem porque o aluno precisa aprender loop evita escrever a mesma ordem muitas vezes antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Por que repetir”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "loop evita escrever a mesma ordem muitas vezes"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é loop evita escrever a mesma ordem muitas vezes. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "repetição manual",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que loop evita escrever a mesma ordem muitas vezes. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "console.log(\"oi\");",
              "console.log(\"oi\");"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "___(\"oi\");"
            ],
            "correctSequence": [
              "console.log"
            ],
            "answerSequence": [
              "console.log"
            ],
            "tokenOptions": [
              "console.log",
              "if",
              "while",
              "for",
              "return"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: loop evita escrever a mesma ordem muitas vezes.",
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
            "q": "Qual erro mais atrapalha em “Por que repetir”?",
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
            "q": "Complete o modelo mental para lembrar “Por que repetir” depois.",
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
            "q": "Quando “Por que repetir” deve aparecer em um programa?",
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
    "id": 52,
    "module": "Repetições Sem Medo",
    "title": "while básico",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 41,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "while básico",
            "body": "<strong>while básico</strong> entra nesta ordem porque o aluno precisa aprender while repete enquanto a condição for verdadeira antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “while básico”?",
            "options": [
              "while repete enquanto a condição for verdadeira",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é while repete enquanto a condição for verdadeira. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "repete até contador chegar a 3",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que while repete enquanto a condição for verdadeira. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "while (contador < 3) {",
              "  contador = contador + 1;",
              "}"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "___ (contador < 3) {"
            ],
            "correctSequence": [
              "while"
            ],
            "answerSequence": [
              "while"
            ],
            "tokenOptions": [
              "while",
              "if",
              "for",
              "else",
              "return"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: while repete enquanto a condição for verdadeira.",
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
            "q": "Qual erro mais atrapalha em “while básico”?",
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
            "q": "Complete o modelo mental para lembrar “while básico” depois.",
            "codeTemplate": [
              "loop → ___ passos"
            ],
            "correctSequence": [
              "repetir"
            ],
            "answerSequence": [
              "repetir"
            ],
            "tokenOptions": [
              "repetir",
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
            "q": "Quando “while básico” deve aparecer em um programa?",
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
    "id": 53,
    "module": "Repetições Sem Medo",
    "title": "Contador",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 42,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Contador",
            "body": "<strong>Contador</strong> entra nesta ordem porque o aluno precisa aprender contador controla quantas vezes o loop roda antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Contador”?",
            "options": [
              "decorar símbolos antes do sentido",
              "contador controla quantas vezes o loop roda",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é contador controla quantas vezes o loop roda. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "começa em 0",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que contador controla quantas vezes o loop roda. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "let contador = 0;"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "let contador = ___;"
            ],
            "correctSequence": [
              "0"
            ],
            "answerSequence": [
              "0"
            ],
            "tokenOptions": [
              "0",
              "1",
              "\"0\"",
              "true",
              "contador"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: contador controla quantas vezes o loop roda.",
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
            "q": "Qual erro mais atrapalha em “Contador”?",
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
            "q": "Complete o modelo mental para lembrar “Contador” depois.",
            "codeTemplate": [
              "loop → ___ passos"
            ],
            "correctSequence": [
              "repetir"
            ],
            "answerSequence": [
              "repetir"
            ],
            "tokenOptions": [
              "repetir",
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
            "q": "Quando “Contador” deve aparecer em um programa?",
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
    "id": 54,
    "module": "Repetições Sem Medo",
    "title": "Incremento",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 39,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Incremento",
            "body": "<strong>Incremento</strong> entra nesta ordem porque o aluno precisa aprender incrementar é atualizar o contador antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Incremento”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "incrementar é atualizar o contador",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é incrementar é atualizar o contador. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "soma 1"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que incrementar é atualizar o contador. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "contador = contador + 1;"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "contador = contador ___ 1;"
            ],
            "correctSequence": [
              "+"
            ],
            "answerSequence": [
              "+"
            ],
            "tokenOptions": [
              "+",
              "-",
              "*",
              "/",
              "="
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: incrementar é atualizar o contador.",
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
            "q": "Qual erro mais atrapalha em “Incremento”?",
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
            "q": "Complete o modelo mental para lembrar “Incremento” depois.",
            "codeTemplate": [
              "loop → ___ passos"
            ],
            "correctSequence": [
              "repetir"
            ],
            "answerSequence": [
              "repetir"
            ],
            "tokenOptions": [
              "repetir",
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
            "q": "Quando “Incremento” deve aparecer em um programa?",
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
    "id": 55,
    "module": "Repetições Sem Medo",
    "title": "Evitar loop infinito",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 40,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Evitar loop infinito",
            "body": "<strong>Evitar loop infinito</strong> entra nesta ordem porque o aluno precisa aprender o contador precisa mudar para o while terminar antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Evitar loop infinito”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "o contador precisa mudar para o while terminar"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é o contador precisa mudar para o while terminar. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "n muda",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que o contador precisa mudar para o while terminar. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "while (n < 3) {",
              "  n = n + 1;",
              "}"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "n = n ___ 1;"
            ],
            "correctSequence": [
              "+"
            ],
            "answerSequence": [
              "+"
            ],
            "tokenOptions": [
              "+",
              "-",
              "===",
              "while",
              "if"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: o contador precisa mudar para o while terminar.",
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
            "q": "Qual erro mais atrapalha em “Evitar loop infinito”?",
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
            "q": "Complete o modelo mental para lembrar “Evitar loop infinito” depois.",
            "codeTemplate": [
              "loop → ___ passos"
            ],
            "correctSequence": [
              "repetir"
            ],
            "answerSequence": [
              "repetir"
            ],
            "tokenOptions": [
              "repetir",
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
            "q": "Quando “Evitar loop infinito” deve aparecer em um programa?",
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
    "id": 56,
    "module": "Repetições Sem Medo",
    "title": "for com range",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 41,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "for com range",
            "body": "<strong>for com range</strong> entra nesta ordem porque o aluno precisa aprender for é bom quando você sabe a quantidade antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “for com range”?",
            "options": [
              "for é bom quando você sabe a quantidade",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é for é bom quando você sabe a quantidade. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "0,1,2",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que for é bom quando você sabe a quantidade. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "for i in range(3):",
              "  print(i)"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
              "while",
              "len",
              "list",
              "print"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: for é bom quando você sabe a quantidade.",
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
            "q": "Qual erro mais atrapalha em “for com range”?",
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
            "q": "Complete o modelo mental para lembrar “for com range” depois.",
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
            "q": "Quando “for com range” deve aparecer em um programa?",
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
    "id": 57,
    "module": "Repetições Sem Medo",
    "title": "for em JavaScript",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 42,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "for em JavaScript",
            "body": "<strong>for em JavaScript</strong> entra nesta ordem porque o aluno precisa aprender for junta início, condição e atualização antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “for em JavaScript”?",
            "options": [
              "decorar símbolos antes do sentido",
              "for junta início, condição e atualização",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é for junta início, condição e atualização. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "i vai de 0 a 2",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que for junta início, condição e atualização. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "for (let i = 0; i < 3; i++) {",
              "  console.log(i);",
              "}"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "for (let i = 0; i ___ 3; i++) {"
            ],
            "correctSequence": [
              "<"
            ],
            "answerSequence": [
              "<"
            ],
            "tokenOptions": [
              "<",
              ">",
              "===",
              "=",
              "+"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: for junta início, condição e atualização.",
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
            "q": "Qual erro mais atrapalha em “for em JavaScript”?",
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
            "q": "Complete o modelo mental para lembrar “for em JavaScript” depois.",
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
            "q": "Quando “for em JavaScript” deve aparecer em um programa?",
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
    "id": 58,
    "module": "Repetições Sem Medo",
    "title": "Percorrer uma lista",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 39,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Percorrer uma lista",
            "body": "<strong>Percorrer uma lista</strong> entra nesta ordem porque o aluno precisa aprender loop também visita cada item de uma lista antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Percorrer uma lista”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "loop também visita cada item de uma lista",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é loop também visita cada item de uma lista. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "mostra cada nome"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que loop também visita cada item de uma lista. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "for (const nome of nomes) {",
              "  console.log(nome);",
              "}"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "for (const nome ___ nomes) {"
            ],
            "correctSequence": [
              "of"
            ],
            "answerSequence": [
              "of"
            ],
            "tokenOptions": [
              "of",
              "in",
              "from",
              "while",
              "if"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: loop também visita cada item de uma lista.",
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
            "q": "Qual erro mais atrapalha em “Percorrer uma lista”?",
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
            "q": "Complete o modelo mental para lembrar “Percorrer uma lista” depois.",
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
            "q": "Quando “Percorrer uma lista” deve aparecer em um programa?",
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
    "id": 59,
    "module": "Repetições Sem Medo",
    "title": "Loop com condição",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 40,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Loop com condição",
            "body": "<strong>Loop com condição</strong> entra nesta ordem porque o aluno precisa aprender dentro do loop, if filtra o que interessa antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Loop com condição”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "dentro do loop, if filtra o que interessa"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é dentro do loop, if filtra o que interessa. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "mostra aprovados",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que dentro do loop, if filtra o que interessa. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "if (nota >= 7) {",
              "  console.log(nota);",
              "}"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: dentro do loop, if filtra o que interessa.",
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
            "q": "Qual erro mais atrapalha em “Loop com condição”?",
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
            "q": "Complete o modelo mental para lembrar “Loop com condição” depois.",
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
            "q": "Quando “Loop com condição” deve aparecer em um programa?",
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
    "id": 60,
    "module": "Repetições Sem Medo",
    "title": "Projeto: contador guiado",
    "eyebrow": "módulo 06 · escada iniciante",
    "desc": "Loops entram depois das decisões. Primeiro while e contador, depois for e percorrer listas.",
    "xp": 41,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "loops",
    "layers": [
      {
        "level": "avancado",
        "steps": [
          {
            "type": "teach",
            "kicker": "projeto final do módulo",
            "title": "Contador guiado",
            "body": "Agora você aplica o módulo em um pequeno programa completo. Leia os requisitos, escreva no editor e envie quando a lógica fizer sentido."
          }
        ]
      }
    ],
    "project": {
      "kind": "loopCounter",
      "language": "javascript",
      "title": "Contador guiado",
      "brief": "Use loop e contador para mostrar números de 1 a 5.",
      "requirements": [
        "Crie um contador.",
        "Use while ou for.",
        "Atualize o contador se usar while.",
        "Mostre os números com console.log."
      ],
      "starter": "let counter = 1;\n\n// repita enquanto counter <= 5",
      "solution": "let counter = 1;\nwhile (counter <= 5) {\n  console.log(counter);\n  counter = counter + 1;\n}"
    }
  }
];
