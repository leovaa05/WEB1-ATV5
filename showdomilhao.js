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
    pergunta: "Qual é o maior órgão do corpo humano?",
    alternativas: ["A) Coração", "B) Fígado", "C) Pulmão", "D) Pele"],
    correta: "D"
  },
  {
    pergunta: "Qual é a cor resultante da mistura entre azul e amarelo?",
    alternativas: ["A) Verde", "B) Roxo", "C) Laranja", "D) Marrom"],
    correta: "A"
  },
  {
    pergunta: "Quantos dias tem um ano bissexto?",
    alternativas: ["A) 364", "B) 365", "C) 366", "D) 367"],
    correta: "C"
  },
  {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    alternativas: ["A) Terra", "B) Vênus", "C) Mercúrio", "D) Marte"],
    correta: "C"
  },
  {
    pergunta: "Quem escreveu 'O Pequeno Príncipe'?",
    alternativas: ["A) J. K. Rowling", "B) Antoine de Saint-Exupéry", "C) Monteiro Lobato", "D) Machado de Assis"],
    correta: "B"
  },
  {
    pergunta: "Em que continente fica o deserto do Saara?",
    alternativas: ["A) Ásia", "B) América", "C) África", "D) Oceania"],
    correta: "C"
  },
  {
    pergunta: "Qual é a fórmula química da água?",
    alternativas: ["A) H2O", "B) CO2", "C) NaCl", "D) O2"],
    correta: "A"
  },
  {
    pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
    alternativas: ["A) 1822", "B) 1889", "C) 1922", "D) 1964"],
    correta: "B"
  },
  {
    pergunta: "Quem pintou a obra 'Guernica'?",
    alternativas: ["A) Leonardo da Vinci", "B) Pablo Picasso", "C) Salvador Dalí", "D) Claude Monet"],
    correta: "B"
  },
  {
    pergunta: "Qual é o maior país do mundo em extensão territorial?",
    alternativas: ["A) Canadá", "B) Estados Unidos", "C) China", "D) Rússia"],
    correta: "D"
  },
  {
    pergunta: "Qual é o nome do processo de divisão celular que origina células com metade dos cromossomos?",
    alternativas: ["A) Mitose", "B) Meiose", "C) Fagocitose", "D) Osmose"],
    correta: "B"
  },
  {
    pergunta: "Quem foi o primeiro filósofo da história, segundo a tradição ocidental?",
    alternativas: ["A) Aristóteles", "B) Sócrates", "C) Tales de Mileto", "D) Platão"],
    correta: "C"
  },
  {
    pergunta: "Qual é a capital do Cazaquistão?",
    alternativas: ["A) Tashkent", "B) Astana", "C) Almaty", "D) Baku"],
    correta: "B"
  },
  {
    pergunta: "Qual elemento químico tem o símbolo 'W'?",
    alternativas: ["A) Tungstênio", "B) Potássio", "C) Zinco", "D) Estanho"],
    correta: "A"
  },
  {
    pergunta: "Em que ano foi criada a Organização das Nações Unidas (ONU)?",
    alternativas: ["A) 1919", "B) 1939", "C) 1945", "D) 1955"],
    correta: "C"
  }
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

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let perguntasEmbaralhadas = [];

function DigitarNome() {
  rl.question("Qual é o seu nome? ", (nome) => {
    nomeJogador = nome;
    rodadaAtual = 0;
    premioFinal = "R$ 0";
    perguntasEmbaralhadas = embaralharArray([...perguntas]); // embaralha perguntas
    console.log(`\nBem-vindo ao Show do Milhão, ${nomeJogador}!`);
    proximaRodada();
  });
}

function proximaRodada() {
  if (rodadaAtual >= 7) {
    return finalizarJogo(true);
  }

  const pergunta = perguntasEmbaralhadas[rodadaAtual];

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
      finalizarJogo(false, pergunta.correta);
    }
  });
}

function finalizarJogo(venceu, respostaCorreta = null) {
  console.log("\nFim do jogo!");
  console.log(`Jogador: ${nomeJogador}`);
  console.log(`Rodadas concluídas: ${rodadaAtual}/7`);
  if (!venceu && respostaCorreta) {
    console.log(`A resposta correta da última pergunta era: ${respostaCorreta}`);
  }
  console.log(`Premiação final: ${premioFinal}`);

  rl.question("\n🔁 Deseja jogar novamente? (s/n): ", (resposta) => {
    if (resposta.trim().toLowerCase() === "s") {
      console.log("\n🔄 Reiniciando o jogo...\n");
      perguntarNome();
    } else {
      console.log("\nObrigado por jogar o Show do Milhão! Até a próxima!");
      rl.close();
    }
  });
}

DigitarNome();