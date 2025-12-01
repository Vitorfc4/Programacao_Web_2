const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } };


function obterNivelBateria(dispositivo) {
  return dispositivo.info?.bateria?.nivel ?? -1;
}

console.log("dispositivo1:", obterNivelBateria(dispositivo1)); // 85
console.log("dispositivo2:", obterNivelBateria(dispositivo2)); // -1
console.log("dispositivo3:", obterNivelBateria(dispositivo3)); // 0

// Explicação:
// - dispositivo3 retorna 0 porque 0 NÃO é null nem undefined, então o ?? não troca.
// - dispositivo2 retorna -1 porque info é null, então a cadeia com ?. vira undefined,
//   e aí o ?? aplica o padrão -1.
