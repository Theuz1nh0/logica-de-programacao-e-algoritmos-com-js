function calcularPeso() {
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");

    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    // verificar se o nome foi preenchido e sexo seleciondo
    if (nome == "" ||  (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus(); // posiciona (joga o foco) no campo de edição inNome
        return;
    }

    // se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    // se masculino (masculino == true)
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    // apresenta a resposta
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg";
}

var btCalcular  = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularPeso);

function limparCampos() {
    // recarrega a pá0gina
    location.reload();
    document.getElementById("inNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener('click', limparCampos);