import prompt from "prompt-sync";
let ler = prompt();

const CIANO = "\x1b[36m%s\x1b[0m";    //...
const VERDE = "\x1b[32m%s\x1b[0m";   //usados para diferenciar e ver oq esta inserido nos arrays ao decorrer do codigo

var Largada = []; //posiçoes de largadas!
var chegada = [];   //posiçoes de chegada ao fim da corrida!!
let posiçoes = 0;       //armazena as posiçoes tanto iniciais e finais para colocar na array
let diferença = 0;          //indica a diferença entre a largada e a chegada!!!

console.clear();

console.log("Qual a quantidade de pilotos?");
let QTDpilotos = Number(ler());

console.log("Quais as posições de largada?");
for (let contador = 1; contador <= QTDpilotos; contador++) {
  posiçoes = Number(ler());

  Largada[contador] = posiçoes;
}

console.log("quais as posiçoes de chegada?");                               //armazenando as posiçoes de chegada
for (let contador = 1; contador < Largada.length; contador++) {
  posiçoes = Number(ler());

  chegada[contador] = posiçoes;
}

for (let contador = 1; contador < Largada.length; contador++) {             //fazendo os calculos de diferença e inserindo dentro da chegada
  if (chegada[contador] > Largada[contador]) {                                  //logo depois inserindo a diferença dentro da array !!!
    diferença = chegada[contador] - Largada[contador];
    chegada[contador] = diferença;
    console.log(`o piloto ${contador} avançou ${diferença} posições!`);
  } else if (Largada[contador] > chegada[contador]) {
    diferença = Largada[contador] - chegada[contador];
    chegada[contador] = diferença;

    console.log(`o piloto ${contador} retrocedeu ${diferença} posições!`);
  } else {
    console.log(`o piloto ${contador} manteve a posição`);
  }
}