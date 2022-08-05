function verificarNumero() {
    var inNum = document.getElementById("inNum");
    var outNum = document.getElementById("outNum");
    var outResp = document.getElementById("outResp");

    var num = Number(inNum.value);

    // verifica se os campos estão preenchidos
    if (num == 0 || isNaN(num)) {
        alert("Digite um número...");
        inNum.focus();
        return;
    }

    var divisores = 1; // mostra os divisores do num
    var soma = 1; // soma os divisores do num

    // cria um laço para achar os divisores de num, menos ele mesmo
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            divisores = divisores + "," + i;
            soma = soma + i;
        }
    }

    outNum.textContent = "Divisores do " + num + ": " + divisores + " (Soma: " + soma + ")";

    if (soma == num) {
        outResp.textContent = num + " É um Número Perfeito";
    } else {
        outResp.textContent = num + " Não é um Número Perfeito";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verificarNumero)