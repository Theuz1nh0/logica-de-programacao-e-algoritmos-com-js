function repetirFruta() {
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var fruta = inFruta.value;
    var num = Number(inNumero.value);

    // verifica se os campos estão vazios
    if (fruta == "" || num == 0 || isNaN(num)) {
        alert("Digite os valores corretamente...");
        inFruta.focus();
        return;
    }

    var repetir = fruta;

    // cria o laço para a resposta
    for (var i = 2; i <= num; i++) {
        repetir = repetir + "*" + fruta;
    }

    outResposta.textContent = repetir;
}

var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener('click', repetirFruta);