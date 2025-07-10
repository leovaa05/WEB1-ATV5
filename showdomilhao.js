const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomeJogador = "";
let rodadaAtual = 0;
let premioFinal = "R$ 0";

const perguntas = [
  {
    pergunta: "1. Qual é o maior órgão do corpo humano?",
    alternativas: ["A) Coração", "B) Fígado", "C) Pulmão", "D) Pele"],
    correta: "D"
  },
];

const premiacoes = [
  "R$ 10.000",
  "R$ 25.000",
  "R$ 50.000",
  "R$ 100.000",
  "R$ 250.000",
  "R$ 500.000",
  "R$ 1.000.000"
];

function DigitarNome() {
  rl.question("Digite o seu nome: ", (nome) => {
    nomeJogador = nome;
    console.log(`\nBem-vindo ao Show do Milhão, ${nomeJogador}!`);
    proximaRodada();
  });
}

function proximaRodada() {
  if (rodadaAtual >= 7) {
    return finalizarJogo(true);
  }

  const pergunta = perguntas[rodadaAtual % perguntas.length];

  console.log(`\nRodada ${rodadaAtual + 1}`);
  console.log(`Premiação: ${premiacoes[rodadaAtual]}`);
  console.log(`\n${pergunta.pergunta}`);
  pergunta.alternativas.forEach((alt) => {
    console.log(alt);
  });

  rl.question("\nDigite a sua resposta: ", (resposta) => {
    const respostaFormatada = resposta.trim().toUpperCase();

    if (respostaFormatada === pergunta.correta) {
      console.log("✅ Resposta correta!");
      premioFinal = premiacoes[rodadaAtual];
      rodadaAtual++;
      proximaRodada();
    } else {
      console.log(`❌ Resposta errada! A correta era: ${pergunta.correta}`);
      premioFinal = "R$ 0";
      finalizarJogo(false);
    }
  });
}

function finalizarJogo(acertouTodas) {
  console.log("\nFim do jogo!");
  console.log(`Jogador: ${nomeJogador}`);
  console.log(`Rodadas concluídas: ${rodadaAtual}/7`);
  console.log(`Premiação final: ${premioFinal}`);
  rl.close();
}

DigitarNome();