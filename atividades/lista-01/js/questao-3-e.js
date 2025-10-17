
function totalCompra(valorUnit, quantidade, desconto = 0) {
  const subtotal = valorUnit * quantidade;
  return subtotal * (1 - desconto);
}

