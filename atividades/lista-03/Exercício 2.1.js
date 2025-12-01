const configuracoes = {
  sistema: "X",
  cache: null, 
};


const tempoExpApi = configuracoes.cache?.tempoExpiracao;
console.log("tempoExpApi:", tempoExpApi); 


const tempoExpFinal = tempoExpApi ?? 600;
console.log("tempoExpFinal:", tempoExpFinal);
