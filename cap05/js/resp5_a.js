var tabela = [];

function adicionarClube() {
    var inClube = document.getElementById("inClube");
    var clube = inClube.value;

    // verifica preenchimento do campo
    if (inClube.value == "") {
        alert("Informe o nome de um clube")
        inClube.focus();
        return;
    }

    tabela.push(clube); // adiciona ao vetor tabela
    inClube.value = "";
    inClube.focus();

    listarClubes(); // chama a função listarClubes
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarClube);

function listarClubes() {
    // verifica se a elementos no vetor
    if (tabela.length == 0) {
        alert("Não há clubes para listar");
        return;
    }

    var lista = "";
    var ordem = 0;

    for (var i = 0; i < tabela.length; i++) {
        ordem++
        lista += ordem + ". " + tabela[i] + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener('click', listarClubes);

function montarTabela() {
    if (tabela.length == 0) {
        alert("Não há clubes para listar");
        return;
    }

    // verifica se existe um número par de clubes para montar a tabela
    if (tabela.length % 2 == 1) {
        alert("Precisa ter um número par de clubes");
        return;
    }

    var lista = "";
    
    // cria uma copia do vetor tabela e inverte ele
    var tabelaInversa = tabela.slice();
    tabelaInversa.reverse()

    // percorre os vetores e monta a tabela de clubes
    for (var i = 0; i < tabela.length / 2; i++) {
        lista += tabela[i] + " x " + tabelaInversa[i] + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}
var btTabela = document.getElementById("btTabela");
btTabela.addEventListener('click', montarTabela);