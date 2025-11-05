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

document.getElementById('form-farmacia').addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('medicamento');
  const preco = document.getElementById('precoMedic');
  const out = document.getElementById('out-farmacia');

  const err = required([nome, 'Informe a descrição do medicamento.'], [preco, 'Informe o preço.']);
  if (err) return show(out, `❌ ${err}`, false);

  const pCents = toCents(preco.value);
  if (!(pCents >= 0)) return show(out, '❌ Preço inválido.', false);

  const totalCents = pCents * 2;
  const descontoCents = totalCents % 100;
  const finalCents = totalCents - descontoCents;

  const html = `
    <p><strong>Promoção de ${nome.value.trim()}!</strong></p>
    <p>2 unidades por ${fmtBRL(fromCents(totalCents))} → desconto de ${fmtBRL(fromCents(descontoCents))}</p>
    <p><strong>Total: ${fmtBRL(fromCents(finalCents))}</strong></p>`;
  show(out, html, true);
});

document.getElementById('form-farmacia').addEventListener('reset', () => {
  const out = document.getElementById('out-farmacia');
  out.className = 'out';
  out.textContent = '';
});
