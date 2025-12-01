8) Explicação (Rest e Spread):

Rest (...atributosNativos) ajudou a separar as props internas do componente
 (id, className, onClick) do resto que é atributo HTML válido 
 (ex.: title, data-acao, disabled).

Spread garantiu a prioridade pela ordem: quando fazemos
 { ...padrao, ...atributosNativos, disabled: false }, 
 o disabled: false do final vence tudo que veio antes.