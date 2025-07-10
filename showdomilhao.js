const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomeJogador = "";

const perguntas = [
  {
    pergunta: "alguma coisa...?",
    alternativas: ["A) a", "B) b", "C) c"]
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

  console.log(`🔹 Pergunta: ${pergunta.pergunta}`);
  pergunta.alternativas.forEach((alt) => {
    console.log(alt);
  });

  rl.close();
}

DigitarNome();
