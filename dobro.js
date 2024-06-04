import prompt from "prompt-sync";
let ler = prompt();

var numeros = [];

console.log("quantos numeros você quer colocar?");
let QTDnumeros = ler();

console.log("quais numeros você vai colocar?");
for (let contador = 0; contador < QTDnumeros; contador++) {
  let armazenar = Number(ler());
  numeros[contador] = armazenar;
}

console.clear();

console.log("você digitou os numeros: ");
for (let normal of numeros) {
  console.log(normal);
}

let dobro = 0;
console.log("o dobro de cada numero é: ");
for (let legal of numeros) {
  dobro = legal * 2;
  console.log(dobro);
}
