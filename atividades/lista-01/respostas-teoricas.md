1a) Tipagem estática — o que é e como ocorre a verificação

Definição: o tipo das variáveis/expressões é conhecido antes de executar o programa (em compile time).

Verificação: o compilador/verificador de tipos analisa o código e reprova usos incompatíveis (ex.: somar número com string sem conversão). Erros de tipo impedem a compilação.

1b) Benefícios (performance e segurança)

Performance: o compilador pode gerar código mais eficiente (inlining, especialização de tipos, eliminação de checagens dinâmicas).

Segurança: classes de bugs são barradas cedo (acessos inválidos, chamadas com tipos errados), melhor autocompletion e refactor seguro.

1c) Tipagem dinâmica — como funciona e desafios

Definição: o tipo é associado ao valor em tempo de execução; a checagem acontece quando a operação roda.

Desafios de performance: precisa de checagens e despachos dinâmicos (ex.: decidir em runtime qual operação fazer), além de boxing/unboxing e layouts genéricos — tudo isso custa CPU/memória.

1d) Tipagem forte vs. fraca

Forte: o sistema restringe conversões implícitas perigosas; operações inválidas dão erro (ex.: não soma número com objeto sem coerção explícita).

Fraca: há coerções implícitas amplas entre tipos (podem ocorrer resultados surpreendentes).

Observação: “forte vs. fraca” não é binário universal; depende da linguagem/situação.

1e) Linguagens híbridas & inferência de tipos

Híbridas: permitem estático + dinâmico (ex.: anotações opcionais, módulos tipados convivendo com não-tipados, gradual typing).

Inferência (estática): o compilador deduz tipos a partir do uso, sem anotações explícitas, mantendo segurança e ergonomia.

1f) E o JavaScript?

JS é dinamicamente tipada e com coerções (muitas) → considerada fracamente tipada em vários cenários. O tipo é do valor, não da variável; conversões implícitas acontecem (ex.: 1 + "2" -> "12"). Tipagem estática opcional no ecossistema via TypeScript/JSDoc, mas o runtime JS continua dinâmico.
— Referências úteis: MDN “Data types and structures”, “Type coercion”.

> rascunho: ajustes via VS Code
