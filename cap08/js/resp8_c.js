function adicionar() {
    var inServico = document.getElementById("inServico");
    var outNumServicos = document.getElementById("outNumServicos");
    var servico = inServico.value;

    // verifica preechimento dos campos
    if (servico == "") {
        alert("Escreva um serviço antes de adicionar");
        inServico.focus();
        return;
    }

    // verifica se há algum serviço repetido
    if (verificarRepetido(servico)) {
        alert("Este serviço ja existe");
        inServico.focus();
        return;
    }

    var numServicos = verificarServico(servico);

    outNumServicos.style.color = "red"
    outNumServicos.textContent = numServicos;

    inServico.value = "";
    inServico.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionar);

function executar() {
    var outServico = document.getElementById("outServico");
    var outNumServicos = document.getElementById("outNumServicos");
    var outExecucao = document.getElementById("outExecucao");

    // se nao existir nenhum servico para execultar
    if (!localStorage.getItem("servicos")) {
        alert("Não há serviços a serem executados");
        return;
    }

    var servicos = localStorage.getItem("servicos");
    var vetorServico = servicos.split(";");
    var execucao = vetorServico.shift();

    outExecucao.className = "execucao";

    // verifica quantos elementos existe no vetor, e altera a variavel servicos conforme o mesmo
    switch (vetorServico.length) {
        case 0:
            servicos = "";
            break;
        case 1:
            servicos = vetorServico[0];
            break;
        default:
            servicos = vetorServico[0];

            for (var i = 1; i < vetorServico.length; i++) {
                servicos += ";" + vetorServico[i]
            }
    }

    localStorage.setItem("servicos", servicos);

    outNumServicos.textContent = vetorServico.length;
    outServico.textContent = execucao;

}
var btExecutar = document.getElementById("btExecutar");
btExecutar.addEventListener("click", executar);

function verificarServico(servico) {
    var servicos = "";
    var numServicos = 0;

    // se houver algum dado em localStorege "servicos"
    if (localStorage.getItem("servicos")) {
        servicos = localStorage.getItem("servicos");
        servicos += ";" + servico;
        var vetorServico = servicos.split(";");
        numServicos = vetorServico.length;
    } else {
        servicos = servico;
        numServicos = 1;
    }

    localStorage.setItem("servicos", servicos);

    return numServicos
}

function verificarRepetido(servico) {
    var verificar = "";
    var servicoEmMinusculo = servico.toLowerCase()
    var verificador = false;

    if (localStorage.getItem("servicos")) {
        verificar = (localStorage.getItem("servicos")).toLowerCase();
        var vetorServico = verificar.split(";");

        if (vetorServico.indexOf(servicoEmMinusculo) >= 0) {
            verificador = true;
        }
    }

    return verificador;
}

function loadPagina() { // quando a pagina carregar, mostrar os servicos pendentes
    var outNumServicos = document.getElementById("outNumServicos");

    if (localStorage.getItem("servicos")) {
        var servicos = localStorage.getItem("servicos");
        var vetorServico = servicos.split(";");
        var numServicos = vetorServico.length

        outNumServicos.textContent = numServicos;
    } else {
        outNumServicos.textContent = 0;
    }

    outNumServicos.style.color = "red";
}
loadPagina()