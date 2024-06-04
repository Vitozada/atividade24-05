import prompt from "prompt-sync";
let ler = prompt();

let tabuada = [];

console.log("Informe o numero da tabuada");
let numero = ler();

for (let item = 0; item < 11; item++) {
  tabuada[item] = item;
}

for (let multi of tabuada) {
  console.log(multi * numero);
}