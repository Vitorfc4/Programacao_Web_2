function mediaFinal(n1, n2) { return (n1 * 2 + n2 * 3) / 5; }

const n1 = Number(prompt("Nota N1 (0–10):").replace(",", "."));
const n2 = Number(prompt("Nota N2 (0–10):").replace(",", "."));
const mf = mediaFinal(n1, n2);
const aprovado = mf >= 7.0;
const msg = `Média final: ${mf.toFixed(2)} — ${aprovado ? "APROVADO" : "REPROVADO"}`;
alert(msg);
console.log(msg);
