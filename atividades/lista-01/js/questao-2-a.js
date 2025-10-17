
function converterReaisParaDolares(valorReais, cotacaoDolar) {
  if (cotacaoDolar <= 0) throw new Error("Cotação inválida.");
  return valorReais / cotacaoDolar;
}

const reais = Number(prompt("Valor em R$:").replace(",", "."));
const cotacao = Number(prompt("Cotação do US$ (ex.: 5.20):").replace(",", "."));
const dolares = converterReaisParaDolares(reais, cotacao);
console.log(`R$ ${reais.toFixed(2)} = US$ ${dolares.toFixed(2)} (cotação ${cotacao})`);
alert(`US$ ${dolares.toFixed(2)}`);
