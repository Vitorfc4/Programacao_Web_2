class ContaBancaria {
  #saldo;

  constructor() {
    this.#saldo = 0;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor <= 0) return false;
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return true;
    }
    return false;
  }

  consultarSaldo() {
    return this.#saldo;
  }
}

const minhaConta = new ContaBancaria();
minhaConta.depositar(200);
console.log("Saldo:", minhaConta.consultarSaldo()); 

console.log("Saque 50:", minhaConta.sacar(50)); 
console.log("Saldo:", minhaConta.consultarSaldo()); 

console.log("Saque 999:", minhaConta.sacar(999)); 
console.log("Saldo:", minhaConta.consultarSaldo()); 

// 6) Tentar acessar diretamente 
// minhaConta.#saldo = 1000;
