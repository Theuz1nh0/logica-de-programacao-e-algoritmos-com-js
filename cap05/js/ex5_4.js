var criancas = [];

function adicionarCriancas() {
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    nome = inNome.value;
    idade = Number(inIdade.value);

    // verifica preenchimento dos campos
    if (nome == "" | inIdade.value == ""| isNaN(idade)) {
        alert("Informe corretamente os dados");
        inNome.focus();
        return;
    }

    // adiciona os dados ao vetor de objetos
    criancas.push({ nome: nome, idade: idade });

    // limpa os campos
    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    listarCriancas(); // chama funcion que lista as crianças
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarCriancas);

function listarCriancas() {
    // verifica se vetor está vazio
    if (criancas.length == 0) {
        alert("Não há crianças na lista");
        return;
    }

    var lista = "";

    // percorre os elementos do vetor
    for (var i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n"
    }

    // exibe a lista (em uma única instrução)
    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener('click', listarCriancas);

function resumirLista() {
    if (criancas.length == 0) {
        alert("Não há crianças na lista");
        return;
    }

    // cria uma copia do vetor criancas
    var copia = criancas.slice();

    // ordena o vetor copia pela idade
    copia.sort(function (a, b) { return a.idade - b.idade });

    var resumo = "";
    var aux = copia[0].idade; // menor idade do vetor ordenado
    var nomes = []; // vetor para inserir nomes de casa idade

    for (var i = 0; i < copia.length; i++) {
        // se é da mesma idade auxiliar, adicionar ao vetor
        if (copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        } else {
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = copia[i].idade; // obtém a nova idade na ordem
            nomes = []; // limpa o vetor dos nomes
            nomes.push(copia[i].nome); // adiciona o promeiro da nova lista
        }
    }
    // adciona os nomes da última idade ordenada
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    document.getElementById("outLista").textContent = resumo;
}
var btResumir = document.getElementById("btResumir");
btResumir.addEventListener('click', resumirLista);