function calcularValor() {
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outValor = document.getElementById("outValor");

    var valor = Number(inValor.value);
    var tempo =  Number(inTempo.value);

    // calculo do valor a ser pago
    var total = Math.ceil((tempo / 15)) * valor;

    outValor.textContent = "Valor a Pagar R$: " + total.toFixed(2);
}

var btcalcularValor = document.getElementById("btcalcularValor");

// evento assocoiado ao botão btcalcularValor, para carregar uma função
btcalcularValor.addEventListener('click', calcularValor);