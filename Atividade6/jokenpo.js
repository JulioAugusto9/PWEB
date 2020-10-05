function EscolherUmaMao() {
    const mao = Math.floor(3 * Math.random());
    console.log(mao);
    switch (mao) {
        case 0:
            return 'Pedra';
        case 1:
            return 'Papel';
        case 2:
            return 'Tesoura';
    }
}

function jokenpo(humano) {
    const ia = EscolherUmaMao();
    const saida = 'Você: ' + humano + '\nSite: ' + ia + '\n';

    if (humano === ia) {
        alert(saida + 'EMPATE!');
        return;
    }

    if (
        humano === 'Pedra' && ia === 'Tesoura' ||
        humano === 'Papel' && ia === 'Pedra' ||
        humano === 'Tesoura' && ia === 'Papel'
    ) {
        alert(saida + 'VOCÊ GANHOU!!! :)');
    }
    else {
        alert(saida + 'VOCÊ PERDEU... :(');
    }
}