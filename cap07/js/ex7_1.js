function mostrarDados() {
    var inModelo = document.getElementById("inModelo");
    var inAno = document.getElementById("inAno");
    var inPreco = document.getElementById("inPreco");
    var outClassif = document.getElementById("outClassif");
    var outPrecoVenda = document.getElementById("outPrecoVenda");

    var modelo = inModelo.value;
    var ano = Number(inAno.value);
    var preco = Number(inPreco.value);

    // valida preenchimento dos campos
    if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
        alert("Informe corretamente os dados do veiculo");
        inModelo.focus();
        return;
    }

    // chama e atribui o retorno das funções às variáveis
    var classificacao = classificarVeiculo(ano);
    var precoVenda = calculaVenda(preco, classificacao);

    // exibe resposta
    outClassif.textContent = modelo + " - " + classificacao;
    outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
}
var btCalcuolar = document.getElementById("btCalcuolar");
btCalcuolar.addEventListener('click', mostrarDados);

// função recebe ano do veiculo como parâmetro
function classificarVeiculo(ano) {
    var anoAtual = new Date().getFullYear();
    var classif;

    // confição para definir a classificação do veiculo
    if (ano == anoAtual) {
        classif = "Novo";
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = "Seminovo";
    } else {
        classif = "Usado"
    }

    return classif; // retorna a classificação
}

// recebe valor e status do veiculo como parametro
function calculaVenda(valor, status) {
    var prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;
    return prVenda;
}