// desconto em FRAÇÃO (ex.: 0.1 = 10%). Padrão = 0.
function totalCompra(valorUnit, quantidade, desconto = 0) {
  const subtotal = valorUnit * quantidade;
  return subtotal * (1 - desconto);
}
// Ex.: console.log(totalCompra(50, 3));        // 150
// Ex.: console.log(totalCompra(50, 3, 0.1));   // 135 (10% off)
