function mostrarTempo() {
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);
    var troco
    var tempo

    if (inValor.value == "" || isNaN(valor)) {
        alert("Preencha os dados corretamente");
        inValor.focus();
        return;
    }

    /*
    Valor | tempo
     1,00 |  30 min
     1,75 |  60 min
     3,00 |  120 min
    */

    // estrutura de condições do paquinmetro
    if (valor > 3) {  // se tentar pagar mais que 3 reais
        alert("O valor máximo é R$ 3.00");
        return;
    } else if (valor == 3) {  // se pagar 3 reais
        tempo = 120;
        troco = valor - 3;
    } else if (valor >= 1.75) {  // se pagar entre 1.75 e 3 reais
        tempo = 60;
        troco = valor - 1.75;
    } else if (valor >= 1) { // se pagar entre 1 e 1.75 reais
        tempo = 30;
        troco = valor - 1
    } else { // se pagar menos que 1 real
        alert("Valor insuficiente");
        inValor.focus();
        return;
    }

    if (troco >= 1) { // se o troco for maior que 1 ( somar 1.75 + 1 e calcular o troco)
        tempo = 90;
        troco = troco - 1;
    }

    outTempo.textContent = "Tempo: " + tempo + " min";
    
    if (troco == 0) { // se o troco for 0
        outTroco.textContent = ""
    } else if (troco < 1) { // se o troco for menor que 1
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }

}

var btConfirmarDeposito = document.getElementById("btConfirmarDeposito");
btConfirmarDeposito.addEventListener('click', mostrarTempo);