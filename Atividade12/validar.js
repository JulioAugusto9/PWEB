function validar() {
    const nome = document.formComentario.elements[0].value;
    if (!validaNome(nome)) {
        alert('Nome inválido: No mínimo 10 caracteres!');
        return;
    }
    const email = document.formComentario.elements[1].value;
    if (!validaEmail(email)) {
        alert('Email inválido!');
        return;
    }
    const comentario = document.formComentario.elements[2].value;
    if (!validaComentario(comentario)) {
        alert('Comentário deve ter no mínimo 20 caracteres!');
        return;
    }
    const sim = document.formComentario.elements[3].checked, nao = document.formComentario.elements[4].checked;
    if (!validaPesquisa(sim, nao)) {
        alert('A pesquisa é obrigatória!');
        return;
    }
    if (sim) {
        alert('Volte sempre a esta página!');
    }
    else {
        alert('Que bom que você voltou a vistar esta página!');
    }
}

function validaNome(nome) {
    if (nome.length < 10) {
        return false;
    }
    return true;
}

function validaEmail(email) {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        return false;
    }
    return true;
}

function validaComentario(comentario) {
    if (comentario.length < 20) {
        return false;
    }
    return true;
}

function validaPesquisa(sim, nao) {
    if (sim || nao) {
        return true;
    }
    return false;
}
