class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome} | Email: ${this.email}`);
  }
}

class Administrador extends Usuario {
  constructor(nome, email, nivelAcesso) {
    super(nome, email); // 
    this.nivelAcesso = nivelAcesso;
  }

  exibirInfo() {
    super.exibirInfo();
    console.log(`Nível de Acesso: ${this.nivelAcesso}`);
  }
}


const u1 = new Usuario("Ana", "ana@ex.com");
const adm1 = new Administrador("Carlos", "carlos@ex.com", "alto");

u1.exibirInfo();
adm1.exibirInfo();
