// Lista de amigos
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!nome) {
        alert("Ei, o campo está vazio! Digite um nome antes de adicionar.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de fazer o sorteio!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    amigos = [];
    atualizarLista();

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> O amigo secreto sorteado é: <strong>${nomeSorteado}</strong>!</li>`;
}
