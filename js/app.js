let amigos = [];
let listaAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    let regex = /[^a-zA-ZÀ-ÿ\s]/g;
    let nome = ' ' + document.getElementById('nome-amigo').value;
    document.getElementById('nome-amigo').value = '';
    if (nome == ' ') {
        alert('Escreva um nome!');
    } else if (amigos.includes(nome)) {
        alert('Esse nome já existe!');
    } else if (regex.test(nome)) {
        alert('Digite apenas letras!')
    } else {
        amigos.push(nome);
        listaAmigos.textContent = amigos;
    }
}

function sortear() {
    listaSorteio.innerHTML = '';
    let num = amigos.length;
    let sorteado;
    let sorteados = [];
    if (num < 4) {
        alert('Adicione pelo menos 4 pessoas ao sorteio!');
        return;
    }
    for (let i = 0; i < num; i++) {
        sorteado = amigos[Math.floor(Math.random() * num)];
        if (sorteados.includes(sorteado) || sorteado == amigos[i]) {
            i--;
            if (i == (num - 2)) {
                sorteados = [];
                listaSorteio.innerHTML = '';
                i -= num - 1;
            }
        } else {
            sorteados.push(sorteado);
            listaSorteio.innerHTML += amigos[i] + ' --> ' + sorteado + '<br \>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}
