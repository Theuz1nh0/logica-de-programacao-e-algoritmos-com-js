function gerarCitacao() {
    var inNome = document.getElementById("inNome");
    var outCitacao = document.getElementById("outCitacao");
    var nome = inNome.value.toUpperCase();

    // verifica preenchimento do campo ou se há espaços no nome
    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Digite o nome completo do autor.");
        inNome.focus();
        return;
    }

    var ultNome = nome.substr(nome.lastIndexOf(" ")); // obtem o ultimo nome do Autor
    var partNomes = nome.split(" "); //cria vetor com nomes separados do Autor
    var resposta = "";

    // percorre o vetor partNomes, que contem nomes separados
    for (var i = 0; i < partNomes.length - 1; i++) {
        resposta += partNomes[i].charAt(0) + ".";
    }

    outCitacao.textContent = ultNome + ", " + resposta;
}
var btGerarCitacao = document.getElementById("btGerarCitacao");
btGerarCitacao.addEventListener('click', gerarCitacao);