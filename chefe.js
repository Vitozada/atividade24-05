import prompt from "prompt-sync";
let ler = prompt();

var Numeros = [];
let soma = 0;
let valorAnterior = 0; //contador fora do for

console.log("insira a quantidade de numeros");
let QTDnumeros = Number(ler());

console.log("digite os numeros");

for (let contador = 0; contador < QTDnumeros; contador++) {
  let digitados = Number(ler());
  Numeros[valorAnterior] = digitados;

  if (digitados != 0) {
    soma += digitados;
    valorAnterior++;    //atravez do contador de fora
  } else {
                        //subtrai numero anterior
    valorAnterior--;
    soma -= Numeros[valorAnterior];
  }
}

console.log(soma);