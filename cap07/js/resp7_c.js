function verificarValor() {
    var prConvenio = document.getElementById("prConvenio");

    // verifica qual 'radio' esta checado
    if (rbConvenioSim.checked) {
        prConvenio.className = "exibe"; // se estiver checado recebe a classe "exibe" do css...
    } else {
        prConvenio.className = "oculta"; // se não, recebe a classe "oculta"
    }
}
var rbConvenioSim = document.getElementById("rbConvenioSim");
rbConvenioSim.addEventListener('change', verificarValor);

var rbConvenioNao = document.getElementById("rbConvenioNao");
rbConvenioNao.addEventListener('change', verificarValor);

// declara variavel de escopo global
var inValor = document.getElementById("inValor");

function mostrarResposta() {
    var outDesconto = document.getElementById("outDesconto");
    var outValor = document.getElementById("outValor");
    var valor = Number(inValor.value);

    // verifica preenchimento do campo
    if (valor == 0 || isNaN(valor)) {
        alert("Insira o valor corretamente...")
        inValor.focus();
        return;
    }

    // adiciona o retorno da função na variavel
    var desconto = calcularDesconto(valor);

    outDesconto.textContent = "Desconto R$: " + desconto.toFixed(2);
    outValor.textContent = "A Pagar R$: " + (valor - desconto).toFixed(2)
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', mostrarResposta);

// cria uma função pra quando precionar a tecla enter (codigo 13)
inValor.addEventListener('keypress', function(tecla) {
    if (tecla.keyCode == 13) {
        mostrarResposta();
    }
})

function calcularDesconto(valor, taxa) {
    var inConvenio = document.getElementById("inConvenio");
    var convenio, desconto;

    // verifica qual input radio esta checado para adicionar a taxa especifica
    if (rbConvenioNao.checked) {
        taxa = 0.10;
    } else {
        convenio = inConvenio.value;
        taxa = convenio == "amigoDosAnimais" ? 0.20 : 0.50;
    }

    desconto = valor * taxa;

    // retorna valor do desconto
    return desconto;
}