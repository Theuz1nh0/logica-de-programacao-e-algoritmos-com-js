function verPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outProduto = document.getElementById("outProduto");

    var produto = inProduto.value;
    var preco =  Number(inPreco.value);

    // calculo da promoção
    var promocao = preco * 0.50;
    var valor = (preco * 2) + promocao;

    outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + valor.toFixed(2);
    outProduto.textContent = "O 3º produto custa apenas R$: " + promocao.toFixed(2);
}

var btVerPromocao = document.getElementById("btVerPromocao");

// evento assocoiado ao botão btVerPromocao, para carregar uma função
btVerPromocao.addEventListener('click', verPromocao);