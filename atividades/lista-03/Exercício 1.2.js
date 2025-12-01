function registrarEvento(tipo, ...metadados) {
  console.log("tipo:", tipo);
  console.log("metadados:", metadados);
}


registrarEvento("LOGIN");
registrarEvento("CLICK", { x: 10, y: 20 });
registrarEvento("COMPRA", { valor: 99.9 }, "PIX", "cupom:OFF10");
