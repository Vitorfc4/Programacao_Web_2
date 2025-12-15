export function setStatus(el, msg, type = "") {
  el.textContent = msg;
  el.className = `status ${type}`.trim();
}

export function limparLista(container) {
  container.innerHTML = "";
}

export function renderProdutos(container, produtos) {
  container.innerHTML = produtos.map(p => `
    <article class="item">
      <img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.title)}" loading="lazy" />
      <h3>${escapeHtml(p.title)}</h3>
      <div class="meta">
        <span class="price">US$ ${Number(p.price).toFixed(2)}</span>
        <span class="badge">${escapeHtml(p.category || "sem categoria")}</span>
      </div>
    </article>
  `).join("");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll("`", "&#096;");
}
