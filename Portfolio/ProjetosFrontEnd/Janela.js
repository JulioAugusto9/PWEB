let t = document.getElementById("titulo");

function abrir(j) {
    j.src = "JanelaAberta.jpg";
    t.innerHTML = "Não clique na Janela!"
}

function fechar(j) {
    j.src = "JanelaFechada.jpg";
    t.innerHTML = "Abra a Janela";
}

function quebrar(j) {
    j.src = "JanelaQuebrada.jpg";
    t.innerHTML = ":(";
}