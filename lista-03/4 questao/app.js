import { calcularMedia, VALOR_PI } from "./utils/calculadora.js";
import buscarDados from "./services/dados.js";

async function main() {
  const dados = await buscarDados();
  const media = calcularMedia(dados.numeros);

  console.log("Dados:", dados);
  console.log("Média:", media);
  console.log("PI:", VALOR_PI);
}

main();
//O type="module" habilita import/export no navegador
//  e faz o app.js ser carregado como módulo (com escopo próprio).