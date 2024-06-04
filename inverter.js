import prompt from "prompt-sync";
let ler = prompt();

var normal = [];
var invertido = [];
let numeros = 0;

console.log("quantos numeros serão informados?");
let QTDnumeros = ler();

console.log("quais numeros você vai armazenar?");

for (let contador = 0; contador < QTDnumeros; contador++) {
  let numeros = Number(ler());
  normal[contador] = numeros;

  invertido[contador] = numeros;
}

console.log("os numeros invertidos são:");

for (let contador = QTDnumeros - 1; contador >= 0; contador--) {
  console.log(invertido[contador]);
}