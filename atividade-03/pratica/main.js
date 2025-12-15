import { buscarProdutos } from "./api.js";
import { setStatus, limparLista, renderProdutos } from "./ui.js";

const btn = document.querySelector("#btnCarregar");
const selLimite = document.querySelector("#selLimite");
const statusEl = document.querySelector("#status");
const listaEl = document.querySelector("#lista");

async function carregar() {
  const limite = Number(selLimite.value || 10);

  btn.disabled = true;
  selLimite.disabled = true;
  limparLista(listaEl);
  setStatus(statusEl, "Carregando...", "loading");

  try {
    const produtos = await buscarProdutos(limite);
    setStatus(statusEl, `OK! ${produtos.length} produto(s) carregado(s).`);
    renderProdutos(listaEl, produtos);
  } catch (err) {
    setStatus(statusEl, err?.message || "Erro ao carregar produtos.", "error");
  } finally {
    btn.disabled = false;
    selLimite.disabled = false;
  }
}

btn.addEventListener("click", carregar);
