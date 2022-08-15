var concurso = [];

function adicionarCandidato() {
    var inNome = document.getElementById("inNome");
    var inNum = document.getElementById("inNum");

    var nome = inNome.value;
    var num = Number(inNum.value);

    // verifica preenchimento dos campos
    if (nome == "" | num == 0 | isNaN(num)) {
        alert("Preencha os campos corretamente");
        inNome.focus();
        return;
    }

    // adiciona ao vetor objeto
    concurso.push({ nome: nome, num: num });

    inNome.value = "";
    inNum.value = "";
    inNome.focus();

    listarCandidato(); // chama a função listarCandidato
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarCandidato);

function listarCandidato() {
    // verifica se hã elementos no vetor
    if (concurso.length == 0) {
        alert("Você ainda não adicionou nenhum nome");
        return;
    }

    var lista = "";

    // percorre o vetor concurso
    for (var i = 0; i < concurso.length; i++) {
        lista += concurso[i].nome + " - " + concurso[i].num + " acertos\n";
    }

    document.getElementById("outResposta").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener('click', listarCandidato);

function exibirAprovados() {
    if (concurso.length == 0) {
        alert("Você ainda não adicionou nenhum nome");
        return;
    }

    var numAcertos = Number(prompt("Número de Acertos para Aprovação"));

    // clona o vetor concurso e deixa-o em ordem decrescente
    var cloneConcurso = concurso.slice();
    cloneConcurso.sort(function (a, b) {return a.num - b.num});
    cloneConcurso.reverse();

    var lista = "";

    for (var i = 0; i < concurso.length; i++) {
        if (cloneConcurso[i].num >= numAcertos) {
            lista += cloneConcurso[i].nome + " - " + cloneConcurso[i].num + " acertos\n";
        }
    }
    
    document.getElementById("outResposta").textContent = lista;
}
var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener('click', exibirAprovados);