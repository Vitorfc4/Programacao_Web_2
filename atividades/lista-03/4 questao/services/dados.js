export default async function buscarDados() {
 
  return new Promise((resolve) => {
    setTimeout(() => resolve({ numeros: [10, 20, 30, 40] }), 300);
  });
}
