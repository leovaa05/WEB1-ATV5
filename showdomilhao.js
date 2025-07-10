const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function NomeDoJogador() {
  rl.question("Digite o seu nome: ", (nome) => {
    console.log('!!Bem-vindo ao Show do Milhão, ${nome}!');
    rl.close();
  });
}

NomeDoJogador();