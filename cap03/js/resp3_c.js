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

    if (valor > 3) {
        alert("O valor máximo é R$ 3.00");
        return;
    } else if (valor == 3) {
        tempo = 120;
        troco = valor - 3;
        outTempo.textContent = "Tempo: " + tempo + " min";
        outTroco.textContent = "";
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
        outTempo.textContent = "Tempo: " + tempo + " min";
        if (troco == 0) {
            outTroco.textContent = "";
        } else if (troco < 1) {
            outTroco.textContent = "Troco R$: " + troco.toFixed(2);
        } else {
            tempo = 90;
            troco = troco - 1;
            outTempo.textContent = "Tempo: " + tempo + " min";
            if (troco == 0) {
                outTroco.textContent = "";
            } else {
                outTroco.textContent = "Troco R$: " + troco.toFixed(2);
            }
        }
    } else if (valor >= 1) {
        tempo = 30;
        troco = valor - 1
        outTempo.textContent = "Tempo: " + tempo + " min";
        if (troco == 0) {
            outTroco.textContent = "";
        } else {
            outTroco.textContent = "Troco R$: " + troco.toFixed(2);
        }
    } else {
        alert("Valor insuficiente");
        inValor.focus();
        return;
    }
}

var btConfirmarDeposito = document.getElementById("btConfirmarDeposito");
btConfirmarDeposito.addEventListener('click', mostrarTempo);