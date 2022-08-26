function calcularData() {
    var inData = document.getElementById("inData");
    var inValor = document.getElementById("inValor");
    var outData = document.getElementById("outData");
    var outValor = document.getElementById("outValor");

    var data = inData.value;
    var valor = Number(inValor.value);

    // verifica preenchimento dos campos
    if (data == "" || valor == 0 || isNaN(valor)) {
        alert("Digite os dados corretamente...");
        inData.focus();
        return;
    }

    var diaZero, mesZero, dia, mes, ano; // cria varias variaveis que receberão partes da data
    var dataVenc = new Date(data); // recebe a data selecionada para fazer o calculo de dias

    dataVenc.setDate(dataVenc.getDate() + 90);
    dataVenc.setMonth(dataVenc.getMonth())

    // recebem as novas datas
    dia = dataVenc.getDate() + 1;
    mes = dataVenc.getMonth() + 1;
    ano = dataVenc.getFullYear();

    // calcula desconto
    var desconto = valor - (valor * 0.20); 

    // se dia e ano tiver apenas 1 digito
    diaZero = dia < 10 ? "0" + dia : dia;
    mesZero = mes < 10 ? "0" + mes : mes;

    outData.textContent = "Data limite para Pagamento com Desconto: " + diaZero + "/" + mesZero + "/" + ano;
    outValor.textContent = "Valor com Desconto R$: " + desconto.toFixed(2);

}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularData);