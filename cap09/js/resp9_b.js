function exibirNome() {
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;

    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Digite seu nome completo");
        inNome.focus();
        return;
    }

    gerarNome(nome);
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirNome);

inNome.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        exibirNome();
    }
})

function gerarNome(nome) {
    var vetorNome = nome.split(" ");
    var div = document.getElementById("container")
    for (var i = 0; i < vetorNome.length; i++) {
        var h3 = document.createElement("h3");
        var textoh3 = document.createTextNode(vetorNome[i]);
        h3.appendChild(textoh3);
        h3.style.color = corAleatoria();
        div.appendChild(h3)
    }
}

function corAleatoria() {
    const LETRAS = "0123456789ABCDEF";
    var cor = "#";

    for (var i = 0; i < 6; i++) {
        cor += LETRAS[Math.floor(Math.random() * 16)];
    }

    return cor;
}