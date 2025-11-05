const toCents = (v) => Math.round(Number(String(v).replace(',', '.')) * 100);
const fromCents = (c) => c / 100;
const fmtBRL = (n) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n);

function show(el, html, ok = true) {
  el.classList.toggle('error', !ok);
  el.classList.toggle('success', ok);
  el.innerHTML = html;
}
function required(...pairs) {
  for (const [el, msg] of pairs) {
    if (!el.value.trim()) {
      el.focus();
      return msg;
    }
  }
  return null;
}


document.getElementById('form-mercado').addEventListener('submit', (e) => {
  e.preventDefault();

  const produto = document.getElementById('produto');
  const preco = document.getElementById('precoProd');
  const out = document.getElementById('out-mercado');

  const err = required([produto, 'Informe a descrição do produto.'], [preco, 'Informe o preço unitário.']);
  if (err) return show(out, `❌ ${err}`, false);

  const pCents = toCents(preco.value);
  if (!(pCents >= 0)) return show(out, '❌ Preço inválido.', false);

  const meiaCents = Math.round(pCents / 2);
  const totalCents = pCents * 2 + meiaCents; 

  const html = `
    <p><strong>Promoção: Leve 3 ${produto.value.trim()}</strong></p>
    <p>Mensagem: Leve 3 e pague 2 por ${fmtBRL(fromCents(pCents))} + 1 por ${fmtBRL(fromCents(meiaCents))}.</p>
    <p><strong>Total: ${fmtBRL(fromCents(totalCents))}</strong></p>`;
  show(out, html, true);
});

document.getElementById('form-mercado').addEventListener('reset', () => {
  const out = document.getElementById('out-mercado');
  out.className = 'out';
  out.textContent = '';
});
