function verificarPrimo() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var num = Number(inNumero.value);

    if (num == 0 || isNaN(num)) {
        alert("Número Inválido...");
        inNumero.focus();
        return;
    }

    var temDivisor = 0;

    //percorre todos os possíveis divisores do número
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            temDivisor = 1; // muda o flag
            break; // sai da repetição
        }
    }

    // se num > 1 e não possui divisor
    if (num > 1 && !temDivisor) {
        outResposta.textContent = num + " É primo";
    } else {
        outResposta.textContent = num + " Não é primo"
    }
}

var btVeirificarPrimo = document.getElementById("btVeirificarPrimo");
btVeirificarPrimo.addEventListener('click', verificarPrimo);