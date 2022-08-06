function criarEstrelas() {
    var inNums = document.getElementById("inNums");
    var outResp = document.getElementById("outResp");

    var nums = Number(inNums.value);

    if (nums == 0 || isNaN(nums)) {
        alert("Digite um número...");
        inNums.focus();
        return;
    }

    var resposta = "";
    var estrelas = "*";

    for (var i = 1; i <= nums; i++) {
        resposta = resposta + estrelas + "\n";
        estrelas = estrelas + "*";
    }
    outResp.textContent = resposta;
}

var btCriarEstrelas = document.getElementById("btCriarEstrelas");
btCriarEstrelas.addEventListener('click', criarEstrelas);