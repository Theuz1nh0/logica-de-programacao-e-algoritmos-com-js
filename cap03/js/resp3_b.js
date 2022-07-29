function verificarVelocidade() {
    var inVelPermitida = document.getElementById("inVelPermitida");
    var inVelCondutor = document.getElementById("inVelCondutor");
    var outResposta = document.getElementById("outResposta");

    var velPermitida = Number(inVelPermitida.value);
    var velCondutor = Number(inVelCondutor.value);

    if (velPermitida == 0 || isNaN(velPermitida)) {
        alert("Velocidade Permitida não foi preenchida corretamente...");
        inVelPermitida.focus();
        return;
    }

    if (inVelCondutor.value == "" || isNaN(velCondutor)) {
        alert("Velocidade do Condutor não foi preenchida corretamente...");
        inVelCondutor.focus();
        return;
    }

    if (velCondutor <= velPermitida) {
        outResposta.textContent = "Situação: Sem Multa";
    } else if (velCondutor <= velPermitida + (velPermitida * 0.20)) {
        outResposta.textContent = "Situação: Multa Leve";
    } else {
        outResposta.textContent = "Situação: Multa Grave";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verificarVelocidade);