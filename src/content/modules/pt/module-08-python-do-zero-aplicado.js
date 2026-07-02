// Python do Zero Aplicado
export const ptModule08 = [
  {
    "id": 71,
    "module": "Python do Zero Aplicado",
    "title": "Do ESCREVA ao print",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Do ESCREVA ao print",
            "body": "<strong>Do ESCREVA ao print</strong> entra nesta ordem porque o aluno precisa aprender print é a saída do Python antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Do ESCREVA ao print”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "print é a saída do Python"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é print é a saída do Python. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "Olá",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que print é a saída do Python. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "print(\"Olá\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "___(\"Olá\")"
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: print é a saída do Python.",
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
            "q": "Qual erro mais atrapalha em “Do ESCREVA ao print”?",
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
            "q": "Complete o modelo mental para lembrar “Do ESCREVA ao print” depois.",
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
            "q": "Quando “Do ESCREVA ao print” deve aparecer em um programa?",
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
    "id": 72,
    "module": "Python do Zero Aplicado",
    "title": "Entrada com input",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Entrada com input",
            "body": "<strong>Entrada com input</strong> entra nesta ordem porque o aluno precisa aprender input recebe texto digitado antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Entrada com input”?",
            "options": [
              "input recebe texto digitado",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é input recebe texto digitado. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "guarda texto",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que input recebe texto digitado. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "nome = input(\"Nome: \")"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "nome = ___(\"Nome: \")"
            ],
            "correctSequence": [
              "input"
            ],
            "answerSequence": [
              "input"
            ],
            "tokenOptions": [
              "input",
              "print",
              "int",
              "str",
              "return"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: input recebe texto digitado.",
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
            "q": "Qual erro mais atrapalha em “Entrada com input”?",
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
            "q": "Complete o modelo mental para lembrar “Entrada com input” depois.",
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
            "q": "Quando “Entrada com input” deve aparecer em um programa?",
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
    "id": 73,
    "module": "Python do Zero Aplicado",
    "title": "Convertendo com int",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 52,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Convertendo com int",
            "body": "<strong>Convertendo com int</strong> entra nesta ordem porque o aluno precisa aprender int transforma texto em inteiro antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Convertendo com int”?",
            "options": [
              "decorar símbolos antes do sentido",
              "int transforma texto em inteiro",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é int transforma texto em inteiro. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "idade numérica",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que int transforma texto em inteiro. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "idade = int(input(\"Idade: \"))"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "idade = ___(input(\"Idade: \"))"
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
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: int transforma texto em inteiro.",
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
            "q": "Qual erro mais atrapalha em “Convertendo com int”?",
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
            "q": "Complete o modelo mental para lembrar “Convertendo com int” depois.",
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
            "q": "Quando “Convertendo com int” deve aparecer em um programa?",
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
    "id": 74,
    "module": "Python do Zero Aplicado",
    "title": "Convertendo com float",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 49,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "Convertendo com float",
            "body": "<strong>Convertendo com float</strong> entra nesta ordem porque o aluno precisa aprender float aceita decimal antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “Convertendo com float”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "float aceita decimal",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é float aceita decimal. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "preço decimal"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que float aceita decimal. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "preco = float(input(\"Preço: \"))"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "preco = ___(input(\"Preço: \"))"
            ],
            "correctSequence": [
              "float"
            ],
            "answerSequence": [
              "float"
            ],
            "tokenOptions": [
              "float",
              "int",
              "str",
              "print",
              "len"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: float aceita decimal.",
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
            "q": "Qual erro mais atrapalha em “Convertendo com float”?",
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
            "q": "Complete o modelo mental para lembrar “Convertendo com float” depois.",
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
            "q": "Quando “Convertendo com float” deve aparecer em um programa?",
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
    "id": 75,
    "module": "Python do Zero Aplicado",
    "title": "f-string básica",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "f-string básica",
            "body": "<strong>f-string básica</strong> entra nesta ordem porque o aluno precisa aprender f-string encaixa valor em texto antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “f-string básica”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "f-string encaixa valor em texto"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é f-string encaixa valor em texto. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "Olá, Ana",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que f-string encaixa valor em texto. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "nome = \"Ana\"",
              "print(f\"Olá, {nome}\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "print(___\"Olá, {nome}\")"
            ],
            "correctSequence": [
              "f"
            ],
            "answerSequence": [
              "f"
            ],
            "tokenOptions": [
              "f",
              "str",
              "print",
              "input",
              "const"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: f-string encaixa valor em texto.",
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
            "q": "Qual erro mais atrapalha em “f-string básica”?",
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
            "q": "Complete o modelo mental para lembrar “f-string básica” depois.",
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
            "q": "Quando “f-string básica” deve aparecer em um programa?",
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
    "id": 76,
    "module": "Python do Zero Aplicado",
    "title": "if em Python",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "if em Python",
            "body": "<strong>if em Python</strong> entra nesta ordem porque o aluno precisa aprender Python usa dois pontos e indentação antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “if em Python”?",
            "options": [
              "Python usa dois pontos e indentação",
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 0,
            "explain": "Boa. Aqui a base é Python usa dois pontos e indentação. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "bloco indentado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 1,
            "explain": "O exemplo foi curto de propósito. Ele mostra que Python usa dois pontos e indentação. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "if idade >= 18:",
              "  print(\"maior\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "if idade >= 18___"
            ],
            "correctSequence": [
              ":"
            ],
            "answerSequence": [
              ":"
            ],
            "tokenOptions": [
              ":",
              ";",
              "{",
              ")",
              "then"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: Python usa dois pontos e indentação.",
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
            "q": "Qual erro mais atrapalha em “if em Python”?",
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
            "q": "Complete o modelo mental para lembrar “if em Python” depois.",
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
            "q": "Quando “if em Python” deve aparecer em um programa?",
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
    "id": 77,
    "module": "Python do Zero Aplicado",
    "title": "else em Python",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 52,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "else em Python",
            "body": "<strong>else em Python</strong> entra nesta ordem porque o aluno precisa aprender else pega o caminho contrário antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “else em Python”?",
            "options": [
              "decorar símbolos antes do sentido",
              "else pega o caminho contrário",
              "escolher pela aparência",
              "pular a etapa anterior"
            ],
            "correct": 1,
            "explain": "Boa. Aqui a base é else pega o caminho contrário. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "caminho alternativo",
              "a ordem não importa"
            ],
            "correct": 2,
            "explain": "O exemplo foi curto de propósito. Ele mostra que else pega o caminho contrário. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "else:",
              "  print(\"menor\")"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "___:"
            ],
            "correctSequence": [
              "else"
            ],
            "answerSequence": [
              "else"
            ],
            "tokenOptions": [
              "else",
              "elif",
              "if",
              "for",
              "while"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: else pega o caminho contrário.",
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
            "q": "Qual erro mais atrapalha em “else em Python”?",
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
            "q": "Complete o modelo mental para lembrar “else em Python” depois.",
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
            "q": "Quando “else em Python” deve aparecer em um programa?",
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
    "id": 78,
    "module": "Python do Zero Aplicado",
    "title": "while em Python",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 49,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "while em Python",
            "body": "<strong>while em Python</strong> entra nesta ordem porque o aluno precisa aprender while repete enquanto for verdade antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “while em Python”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "while repete enquanto for verdade",
              "pular a etapa anterior"
            ],
            "correct": 2,
            "explain": "Boa. Aqui a base é while repete enquanto for verdade. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa",
              "repete"
            ],
            "correct": 3,
            "explain": "O exemplo foi curto de propósito. Ele mostra que while repete enquanto for verdade. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
            "codeLines": [
              "while contador < 3:",
              "  contador = contador + 1"
            ]
          },
          {
            "type": "fill",
            "kicker": "passo C · completar",
            "q": "Complete a parte destacada tocando nos blocos certos.",
            "codeTemplate": [
              "___ contador < 3:"
            ],
            "correctSequence": [
              "while"
            ],
            "answerSequence": [
              "while"
            ],
            "tokenOptions": [
              "while",
              "for",
              "if",
              "else",
              "return"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: while repete enquanto for verdade.",
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
            "q": "Qual erro mais atrapalha em “while em Python”?",
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
            "q": "Complete o modelo mental para lembrar “while em Python” depois.",
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
            "q": "Quando “while em Python” deve aparecer em um programa?",
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
    "id": 79,
    "module": "Python do Zero Aplicado",
    "title": "for range em Python",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 50,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "basico",
        "steps": [
          {
            "type": "teach",
            "kicker": "antes do código",
            "title": "for range em Python",
            "body": "<strong>for range em Python</strong> entra nesta ordem porque o aluno precisa aprender range gera uma sequência de números antes de misturar com desafios maiores.<br><br>Leia a analogia, observe uma ou duas linhas e só depois complete o bloco. Essa é a escada: conceito, rastreio visual e aplicação."
          },
          {
            "type": "mc",
            "kicker": "passo A · analogia",
            "q": "Qual é a melhor forma de pensar em “for range em Python”?",
            "options": [
              "decorar símbolos antes do sentido",
              "escolher pela aparência",
              "pular a etapa anterior",
              "range gera uma sequência de números"
            ],
            "correct": 3,
            "explain": "Boa. Aqui a base é range gera uma sequência de números. Quando você entende essa imagem mental, a sintaxe deixa de ser um desenho estranho e vira uma instrução com propósito."
          },
          {
            "type": "mc",
            "kicker": "passo B · rastreio visual",
            "q": "O que acontece no exemplo mostrado?",
            "options": [
              "0,1,2",
              "o código é ignorado",
              "o resultado depende de adivinhação",
              "a ordem não importa"
            ],
            "correct": 0,
            "explain": "O exemplo foi curto de propósito. Ele mostra que range gera uma sequência de números. Antes de escrever, treine enxergar o que já está acontecendo em uma ou duas linhas.",
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
              "len",
              "list",
              "input",
              "while"
            ],
            "explain": "Esse preenchimento fixa o detalhe mínimo. O erro comum é tentar decorar a linha inteira; foque no papel do bloco: range gera uma sequência de números.",
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
            "q": "Qual erro mais atrapalha em “for range em Python”?",
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
            "q": "Complete o modelo mental para lembrar “for range em Python” depois.",
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
            "q": "Quando “for range em Python” deve aparecer em um programa?",
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
    "id": 80,
    "module": "Python do Zero Aplicado",
    "title": "Projeto: cartão Python",
    "eyebrow": "módulo 08 · escada iniciante",
    "desc": "Depois da base geral, Python fica mais fácil: print, input, conversões, variáveis, f-strings e pequenos programas.",
    "xp": 51,
    "tips": [
      "Não pule a analogia antes da sintaxe.",
      "Leia o código de cima para baixo."
    ],
    "topic": "python",
    "layers": [
      {
        "level": "avancado",
        "steps": [
          {
            "type": "teach",
            "kicker": "projeto final do módulo",
            "title": "Cartão Python",
            "body": "Agora você aplica o módulo em um pequeno programa completo. Leia os requisitos, escreva no editor e envie quando a lógica fizer sentido."
          }
        ]
      }
    ],
    "project": {
      "kind": "pythonProfileCard",
      "language": "python",
      "title": "Cartão Python",
      "brief": "Escreva um programa Python completo que crie três variáveis simples e mostre um cartão de apresentação no terminal usando print.",
      "requirements": [
        "Crie uma variável chamada name.",
        "Crie uma variável chamada topic.",
        "Crie uma variável chamada goal.",
        "Use print pelo menos três vezes."
      ],
      "starter": "name = \"\"\ntopic = \"\"\ngoal = \"\"\n\n# mostre as três informações no terminal",
      "solution": "name = \"Ana\"\ntopic = \"Python\"\ngoal = \"criar meus primeiros programas\"\n\nprint(\"Nome:\", name)\nprint(\"Estudando:\", topic)\nprint(\"Objetivo:\", goal)"
    }
  }
];
