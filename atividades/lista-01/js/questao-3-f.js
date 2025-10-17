const contaBancaria = {
  numero: "12345-6",
  saldo: 0,
  depositar(valor) {
    if (valor <= 0) return console.warn("Valor inválido.");
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor.toFixed(2)} — Saldo: R$ ${this.saldo.toFixed(2)}`);
  },
  sacar(valor) {
    if (valor <= 0) return console.warn("Valor inválido.");
    if (valor > this.saldo) return console.warn("Saldo insuficiente.");
    this.saldo -= valor;
    console.log(`Saque de R$ ${valor.toFixed(2)} — Saldo: R$ ${this.saldo.toFixed(2)}`);
  },
  informarSaldo() {
    console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)} (Conta ${this.numero})`);
  }
};
// Ex.: contaBancaria.depositar(100); contaBancaria.sacar(40); contaBancaria.informarSaldo();
