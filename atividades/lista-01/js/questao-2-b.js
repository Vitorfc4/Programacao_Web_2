function perimetroCircunferencia(r) {
  return 2 * Math.PI * r;
}

// Demo:
const r = Number(prompt("Raio do círculo:").replace(",", "."));
alert(`Perímetro = ${perimetroCircunferencia(r).toFixed(4)}`);
console.log("Perímetro:", perimetroCircunferencia(r));
