const TAXA_MULTA = 2 / 100; // multa por atraso
const TAXA_JUROS = 0.33 / 100; // juros por dia de atraso

function calcularMultaJuros() {
    var inDataVenc = document.getElementById("inDataVenc");
    var inValor = document.getElementById("inValor");
    var outMulta = document.getElementById("outMulta");
    var outJuros = document.getElementById("outJuros");
    var outTotal = document.getElementById("outTotal");

    var dataVenc = inDataVenc.value;
    var valor = Number(inValor.value);

    // valida preenchimento dos campos
    if (dataVenc == "" || valor == 0 || isNaN(valor)) {
        alert("Informe corretamente os dados da conta...");
        inDataVenc.focus();
        return;
    }

    var hoje = new Date();
    var vencto = new Date();

    // a data vem no formato aaaa-mm-dd
    var partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1]) - 1);
    vencto.setFullYear(Number(partes[0]));

    var atraso = hoje - vencto;

    var multa = 0;
    var juros = 0;

    // se conta esticer em atraso...
    if (atraso > 0) {
        /* Converte os milissegundos da diferença em dias
        round(): necessário para periodos envolvendo horário de verão */
        var dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;
    }

    var total = valor + multa + juros;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);

}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularMultaJuros);

function limparCampos() {
    location.reload();
}
var btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener('click', limparCampos);