siteFatec = 'http://www.fatecsorocaba.edu.br/';

function popup(s) {
    const nomeCurso = s.options[s.selectedIndex].text;
    if (!window.confirm('Abrir janela com informações sobre o curso de ' + nomeCurso + '?'))
        return;

    const curso = s.value;
    window.open(siteFatec + curso, 'NovaJanela', 'width=600, height=300');
}