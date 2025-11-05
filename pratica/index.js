const campoEntrada = document.getElementById("campoEntrada");
const formTarefa = document.getElementById("formTarefa");
const listaTarefas = document.getElementById("listaTarefas");

function novaTarefa() {
  const nomeTarefa = campoEntrada.value.trim();

  if (nomeTarefa === "") {
    campoEntrada.classList.add("input-erro");
    setTimeout(() => campoEntrada.classList.remove("input-erro"), 1500);
    campoEntrada.focus();
    return;
  }

  const itemTarefa = document.createElement("li");
  const span = document.createElement("span");
  const btnExcluir = document.createElement("button");

  span.innerText = nomeTarefa;
  btnExcluir.innerHTML = "<i class='bi bi-trash' aria-hidden='true'></i>";
  btnExcluir.setAttribute("aria-label", "Excluir tarefa");

  span.onclick = (evento) => {
    evento.target.classList.toggle("concluida");
  };

  btnExcluir.onclick = () => {
    listaTarefas.removeChild(itemTarefa);
    campoEntrada.focus();
  };

  itemTarefa.appendChild(span);
  itemTarefa.appendChild(btnExcluir);
  listaTarefas.appendChild(itemTarefa);

  campoEntrada.value = "";
  campoEntrada.focus();
}

formTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  novaTarefa();
});
