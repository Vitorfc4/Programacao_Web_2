export async function buscarProdutos(limite = 10) {
  const url = `https://fakestoreapi.com/products?limit=${encodeURIComponent(limite)}`;

  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Falha ao buscar produtos (HTTP ${resp.status}).`);
  }

  const data = await resp.json();
  if (!Array.isArray(data)) {
    throw new Error("Resposta inesperada da API.");
  }
  return data;
}
