function apenasImpares(arr) {
  return arr.filter(n => Math.abs(n) % 2 === 1);
}
// Ex.: console.log(apenasImpares([1,2,3,4,5])); // [1,3,5]
