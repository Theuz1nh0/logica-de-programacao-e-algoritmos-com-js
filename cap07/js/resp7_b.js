var inNome = document.getElementById("inNome"); // cria variavel de escopo global

function gerarSenha() {
    var outSenha = document.getElementById("outSenha");
    var nome = inNome.value.toLowerCase();

    // verifica o preenchimento dos campos a partir de uma função
    if (validarNome(nome) == false) {
        alert("Preencha o campo com seu nome completo");
        inNome.focus;
        return;
    }

    // adiciona o retorno de duas funções a suas respectivas variaveis
    var sobrenome = obterSobrenome(nome);
    var numVogais = contarVogais(nome);

    outSenha.textContent = "Senha Inicial: " + sobrenome + numVogais;
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener('click', gerarSenha);

// adiciona um ouvinte com função para tecla enter
inNome.addEventListener('keypress', function(tecla) {
    // verifica se a tecla apertada é a 13 (codigo da tecla enter)
    if (tecla.keyCode == 13) {
        gerarSenha();
    }
})

function validarNome(nome) {
    var validar;

    // verifica se nome esta completo ou não
    if (nome == "" || nome.indexOf(" ") == -1) {
        validar = false
    }

    // retorna o valor da variavel validar
    return validar;
}

function obterSobrenome(nome) {
    // pega o ultimo nome da pessoa e adiciona a uma variavel
    var ultimoESpaco = nome.lastIndexOf(" ");
    var sobrenome = nome.substr(ultimoESpaco + 1);

    return sobrenome;
}

function contarVogais(nome) {
    var vogais = nome.match(/[aeiou]/g); // pega todas as vogais do nome da pessoa e joga em um vetor
    var numVogais = vogais.length < 10 ? "0" + vogais.length : vogais.length; // cria uma condição para verificar se o numero é menor que 10

    return numVogais;
}