// cria variaveis de escopo glocal
var inNome = document.getElementById("inNome");
var inIdade = document.getElementById("inIdade");

function categozirarAtleta() {
    var outResposta = document.getElementById("outResposta");
    var nome = inNome.value;
    var idade = Number(inIdade.value);

    // verifica preenchimento dos campos
    if (nome == "" || idade == 0 || isNaN(idade)) {
        alert("Digite o nome e a idade do atleta");
        inNome.focus();
        return;
    }
    // verifica se à espaços no nome
    if (nome.indexOf(" ") == -1) {
        alert("Digite o nome completo do atleta");
        inNome.focus();
        return;
    }

    // guarda os retornos das funcoes em variaveis
    var categoriaIdade = categorizarAluno(idade);
    var tracosNome = retornarTracos(nome);

    outResposta.textContent = nome + "\n" + tracosNome + "\nCategoria: " + categoriaIdade;
}
var btCategorizar = document.getElementById("btCategorizar");
btCategorizar.addEventListener('click', categozirarAtleta);

// cria ouvinte com função para a tecla enter
inNome.addEventListener('keypress', function(tecla) {
    // verifica se a tecla apertada é a 13 (codigo da tecla enter)
    if (tecla.keyCode == 13 && inIdade.value == "") {
        inIdade.focus();
    } else if (tecla.keyCode == 13 && inIdade.value != "") {
        categozirarAtleta();
    }
})

inIdade.addEventListener('keypress', function(tecla) {
    if (tecla.keyCode == 13 && inNome.value == "") {
        inNome.focus();
    } else if (tecla.keyCode == 13 && inNome.value != "") {
        categozirarAtleta();
    }
})


function retornarTracos(nome) {
    var nomeEmTracos = "";
    // percorre o nome e troca qualquer caracteze diferente de espaço por "-"
    for (var i = 0; i < nome.length; i++) {
        if (nome.charAt(i) != " ") {
            nomeEmTracos += "-"
        } else {
            nomeEmTracos += " ";
        }
    }
    // retorna o resultado do laço criado
    return nomeEmTracos;
}

function categorizarAluno(idade) {
    var categoria;

    // verifica a idade escolhida e a categoriza
    if (idade <= 12) {
        categoria = "Infantil";
    } else if (idade <= 18) {
        categoria = "Juvenil";
    } else {
        categoria = "Adulto";
    }

    return categoria;
}