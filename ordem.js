import prompt from "prompt-sync";
let ler = prompt();

let crescente = true;
let decrescente = true;
var ordem = [];

console.log("quantos numeros vc quer colocar?");
let qtdNumeros = Number(ler());

console.log("quais numeros vc vai inserir?");

for (let contador = 0; contador < qtdNumeros; contador++) {
  let numeros = Number(ler());
  ordem[contador] = numeros;

  if (ordem[contador] > ordem[contador - 1]) {
    decrescente = false;
  }

  if (ordem[contador] < ordem[contador - 1]) {
    crescente = false;
  }
}

console.log("Organização dos elementos");

if (crescente == true) {
  console.log("crescente");
} else if (decrescente == true) {
  console.log("decrescente");
} else {
  console.log("desordenados");
}