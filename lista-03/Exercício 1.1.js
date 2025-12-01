// Dados recebidos
const respostaApi = { id: 101, username: "user_a", email: "a@ex.com", status: "ativo" };

// 1) Destructuring: extrair username e email
const { username, email } = respostaApi;
console.log("username:", username);
console.log("email:", email);

// 2) Rest Operator: extrair id e agrupar o resto
const { id, ...dadosComplementares } = respostaApi;
console.log("id:", id);
console.log("dadosComplementares:", dadosComplementares); // { username, email, status }

// 3) Spread Operator: config final com prioridade do usuário
const configPadrao = { tema: "dark", notificacoes: true };
const configUsuario = { notificacoes: false };

const configFinal = { ...configPadrao, ...configUsuario };
console.log("configFinal:", configFinal); 
