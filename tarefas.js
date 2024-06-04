import prompt from "prompt-sync";
let ler = prompt();

let tarefas = [];
let coisas = "";

console.log("coloque suas tarefas");

for (let contador = 1; coisas != "sair"; contador++) {
  coisas = ler();

  if (coisas === "sair") {
    break;
  }

  tarefas[contador] = coisas;
}

console.log("suas tarefas são: ");

for (let item = 1; item < tarefas.length; item++) {
  console.log(`${item} ${tarefas[item]}`);
}
