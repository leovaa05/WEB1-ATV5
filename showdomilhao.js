const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomeJogador = "";

const perguntas = [
  {
    pergunta: "1. Qual é o maior órgão do corpo humano?",
    alternativas: ["A) Coração", "B) Fígado", "C) Pulmão", "D) Pele"],
    correta: "D"
  }
];

function DigitarNome() {
  rl.question("Digite o seu nome: ", (nome) => {
    nomeJogador = nome;
    console.log(`\nBem-vindo ao Show do Milhão, ${nomeJogador}!\n`);
    mostrarPergunta();
  });
}

function mostrarPergunta() {
  const pergunta = perguntas[0];

  console.log(`Pergunta: ${pergunta.pergunta}`);
  pergunta.alternativas.forEach((alt) => {
    console.log(alt);
  });

  rl.question("\nDigite a resposta: ", (resposta) => {
    const respostaFormatada = resposta.trim().toUpperCase();

    if (respostaFormatada === pergunta.correta) {
      console.log("✅ Resposta correta!");
    } else {
      console.log(`❌ Resposta errada! A correta era: ${pergunta.correta}`);
    }

    rl.close();
  });
}

DigitarNome();

