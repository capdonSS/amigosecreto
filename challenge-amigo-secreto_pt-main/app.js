// Lista de amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    // Validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array se ele ainda não existir na lista
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome); // Atualiza a lista de amigos

    // Limpar o campo de entrada
    input.value = "";

    // Atualizar a lista exibida na tela
    exibirLista();
}

// Função para exibir a lista de amigos na tela
function exibirLista() {
    let lista = document.getElementById("listaAmigos");
    
    // Limpar a lista para evitar duplicatas
    lista.innerHTML = "";

    // Percorrer o array de amigos e adicionar à lista
    for (let amigo of amigos) {
        let li = document.createElement("li"); // Criar elemento <li>
        li.textContent = amigo; // Definir o nome no <li>
        lista.appendChild(li); // Adicionar <li> à lista
    }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Verificar se há amigos suficientes para sortear
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos antes de sortear.");
        return;
    }

    // Escolher um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibir o resultado na tela
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
