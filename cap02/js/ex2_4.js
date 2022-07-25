function calcularPraco() {
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    // calcula o valor a ser pago
    var valor = quilo * (consumo / 1000);

    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");

// registra um evento associado ao botão, para carregar a função
btCalcular.addEventListener("click", calcularPraco);