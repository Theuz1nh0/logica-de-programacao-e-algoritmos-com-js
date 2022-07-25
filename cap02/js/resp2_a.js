function mostrarPromocao() {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    // calculo da promoção
    promocao = Math.floor(preco * 2);

    outMedicamento.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}

var btMostrarPromocao = document.getElementById("btMostrarPromocao");

// evento associado ao botão btMostrarPromocao, para carregar uma função
btMostrarPromocao.addEventListener('click', mostrarPromocao);