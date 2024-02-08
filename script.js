// adicionando as perguntas do chat gpt
const perguntas = [
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "pop()",
            "shift()",
        ],
        correta: 0
    },
    {
        pergunta: "Como você chama uma função em JavaScript?",
        respostas: [
            "call minhaFuncao()",
            "minhaFuncao()",
            "execute minhaFuncao()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "=",
            "==",
            "===",
        ],
        correta: 2
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToNumber()",
            "toNumber()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "shift()",
            "slice()",
            "pop()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador de incremento em JavaScript?",
        respostas: [
            "+=",
            "++",
            "+",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para concatenar dois arrays em JavaScript?",
        respostas: [
            "join()",
            "concat()",
            "merge()",
        ],
        correta: 1
    },
    {
        pergunta: "Como você escreve um comentário de linha única em JavaScript?",
        respostas: [
            "/ * comentário * /",
            "// comentário",
            "<!-- comentário -->",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
        respostas: [
            "fun",
            "function",
            "def",
        ],
        correta: 1
    }
];

// selecionando o id "#quiz" e a tag "template" do html para o javaScript
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    // Adicionar todas as alternativas de cada pergunta
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        //Vai aatualizar os indices/valor de cada pergunta para a resposta estar correta 
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta  // true ou false
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas  
        }

        quizItem.querySelector('dl').appendChild(dt)
    }
    
    // remover a "Reposta A"
    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}