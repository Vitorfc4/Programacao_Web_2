// 1) Objeto props
const props = {
  id: "btn-submit",
  className: "btn-primary",
  onClick: () => console.log("clicou!"),
  "data-acao": "enviar",
  disabled: true,
  title: "Enviar formulário",
};

// 2) Função prepararPropsBotao
function prepararPropsBotao(propriedades) {
  // 3) Destructuring para extrair id, className, onClick
  const { id, className, onClick, ...atributosNativos } = propriedades;

 
  console.log("internos:", { id, className, onClick });
  console.log("atributosNativos:", atributosNativos);

  // 5) configuracaoPadrao
  const configuracaoPadrao = {
    id: "default-id",
    type: "button",
    disabled: false,
  };

  // 6) Spread: ordem importa!
  const propsFinais = {
    ...configuracaoPadrao,
    ...atributosNativos,
    disabled: false,
  };

 
  return propsFinais;
}

// 7) imprimir fora
const resultado = prepararPropsBotao(props);
console.log("propsFinais:", resultado);
