function verificarLados() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outResultado = document.getElementById("outResultado");
    var outTriangulo = document.getElementById("outTriangulo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    // verifica se os lados estão preenchidos corretamente
    if (inLadoA.value == "" || isNaN(ladoA)) {
        alert("Preencha os lados corretamente");
        inLadoA.focus();
        return;
    } else if (inLadoB.value == "" || isNaN(ladoB)) {
        alert("Preencha os lados corretamente");
        inLadoB.focus();
        return;
    } else if (inLadoC.value == "" || isNaN(ladoC)) {
        alert("Preencha os lados corretamente");
        inLadoC.focus();
        return;
    }

    // verifica se os lados podem ou não formar um triângulo
    if ((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) { // um lado não pode ser maior que a soma dos outros dois
        outResultado.textContent = "Lados não podem formar um tiângulo";
        return;
    } else {
        outResultado.textContent = "Lados podem formar um triângulo";
    }

    // condição que define o tipo do triângulo
    if (ladoA == ladoB && ladoB == ladoC) {
        outTriangulo.textContent = "Tipo: Equilátero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        outTriangulo.textContent = "Tipo: Isósceles";
    } else {
        outTriangulo.textContent = "Tipo: Escaleno";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verificarLados);