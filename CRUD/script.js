let nomes = [];

function criar() {
  const input = document.getElementById("nomeInput");
  const nome = input.value.trim();

  if (!nome) return alert("Digite um nome!");

  nomes.push(nome);
  input.value = "";
  ler();
}

function ler() {
  const lista = document.getElementById("listaNomes");
  lista.innerHTML = "";

  nomes.forEach((nome, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = nome;

    const btnSelecionar = document.createElement("button");
    btnSelecionar.textContent = "Selecionar";
    btnSelecionar.onclick = () => selecionarParaEditar(index);

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = () => deletar(index);

    li.appendChild(span);
    li.appendChild(btnSelecionar);
    li.appendChild(btnExcluir);

    lista.appendChild(li);
  });
}

function selecionarParaEditar(index) {
  const nome = nomes[index];
  document.getElementById("nomeInput").value = nome;
  document.getElementById("indiceEditar").value = index;
}

function atualizar() {
  const index = document.getElementById("indiceEditar").value;
  const nome = document.getElementById("nomeInput").value.trim();

  if (index === "") return alert("Selecione um item para atualizar.");
  if (!nome) return alert("O nome não pode ser vazio.");

  nomes[index] = nome;
  document.getElementById("nomeInput").value = "";
  document.getElementById("indiceEditar").value = "";
  ler();
}

function deletar(index) {
  if (confirm("Deseja realmente excluir este item?")) {
    nomes.splice(index, 1);
    ler();
  }
}
