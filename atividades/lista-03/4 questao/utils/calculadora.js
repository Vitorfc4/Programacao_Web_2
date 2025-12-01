export function calcularMedia(array) {
  const soma = array.reduce((acc, n) => acc + n, 0);
  return array.length ? soma / array.length : 0;
}

export const VALOR_PI = 3.141592653589793;
