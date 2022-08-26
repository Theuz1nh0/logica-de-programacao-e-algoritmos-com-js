function verificarFrase() {
    var inFrase = document.getElementById("inFrase");
    var outResposta = document.getElementById("outResposta");
    var frase = inFrase.value.toUpperCase();

    // verifica preenchimento do campo
    if (frase == "") {
        alert("Escreva uma frase ou palavra...");
        inFrase.focus();
        return;
    }

    var inversoFrase = ""; // cria uma variavel que recebera o inverso da palavra
    var numLetras = frase.length; // pega a quantidade de caracteres da palavra escrita

    // percorre a palavra escrita de trás pra frente
    for (var i = numLetras - 1; i >= 0; i--) {
        inversoFrase += frase.charAt(i);
    }

    // se a frase ou palavra sem espaços é igual ao seu inverso sem espaços
    if (frase.replace(/ /g, "") == inversoFrase.replace(/ /g, "")) {
        outResposta.textContent = frase + " é um Palíndromo";
    } else {
        outResposta.textContent = frase + " não é um Palíndromo";
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verificarFrase);