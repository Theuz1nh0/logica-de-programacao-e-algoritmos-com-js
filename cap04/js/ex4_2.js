function listarNumeros() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    // verifica validade do número
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    var resposta = "Entre " + numero + " e 1: ";

    // cria um for decrescente
    for (var i = numero; i > 1; i--) {
        resposta = resposta + i + ", ";
    }
    resposta = resposta + i +"."

    outResposta.textContent = resposta;
}

var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener('click', listarNumeros);