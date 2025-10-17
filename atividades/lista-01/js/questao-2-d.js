function ehPrimo(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let d = 3; d * d <= n; d += 2) if (n % d === 0) return false;
  return true;
}
function somaPrimos(arrayDeInteiros) {
  return arrayDeInteiros.reduce((acc, v) => acc + (ehPrimo(v) ? v : 0), 0);
}

// Demo simples via prompt: informe números separados por espaço
const entrada = prompt("Informe números inteiros positivos separados por espaço:");
const arr = entrada.trim().split(/\s+/).map(x => Number(x));
alert(`Soma dos primos = ${somaPrimos(arr)}`);
console.log("Soma dos primos:", somaPrimos(arr));
