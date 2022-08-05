function mostrarChinchilas() {
    var inChinchilas = document.getElementById("inChinchilas");
    var inAnos = document.getElementById("inAnos");
    var outPrevisao = document.getElementById("outPrevisao");

    var chincilas = Number(inChinchilas.value);
    var anos = Number(inAnos.value);

    if (chincilas < 2 || isNaN(chincilas) || anos == 0 || isNaN(anos)) {
        alert("Preencha os campos corretamente...");
        inChinchilas.focus();
        return;
    }

    var numAno = 0; // cria uma variável contadora
    var numChinchilas = chincilas; // cria uma variável acumuladora
    var resposta = "";

    // cria um laço de repetição
    for (var i = 1; i <= anos; i++) {
        numAno++;
        resposta = resposta + numAno + "º Ano: " + numChinchilas + " Chinchilas" + "\n";
        numChinchilas *= 3;
    }

    outPrevisao.textContent = resposta;
}

var btPrevisao = document.getElementById("btPrevisao");
btPrevisao.addEventListener('click', mostrarChinchilas);