function fatorial(n) {
  if (n < 0 || !Number.isInteger(n)) throw new Error("Use inteiro n >= 0");
  return n <= 1 ? 1 : n * fatorial(n - 1);
}

