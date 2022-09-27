var inClube = document.getElementById("inClube");

function adicionarClube() {

    var clube = inClube.value;

    // verifica preenchimento dos campos
    if (clube == "") {
        alert("Insira o Nome de um Clube");
        inClube.focus();
        return;
    }

    var tagsH5 = document.getElementById("tagsH5");
    var h5 = document.createElement("h5");
    var texto = document.createTextNode(clube);
    h5.appendChild(texto);
    h5.className = "aDireita italico";
    tagsH5.appendChild(h5);

    inClube.value = "";
    inClube.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

inClube.addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        adicionarClube();
    }
})

function mostrarTabela() {
    var tagsH5 = document.getElementById("tagsH5");
    var h3TituloTabela = document.getElementById("h3TituloTabela");
    var h5 = tagsH5.getElementsByTagName("h5");

    // se numero de clubes não for par
    if (h5.length % 2 != 0 || h5.length == 0) {
        alert("Você não possui uma quantidade par de clubes")
        return;
    }

    h3TituloTabela.className = "comDisplay";

    var tbClubes = document.getElementById("tbClubes");
    var numLinhas = 0;

    for (var i = 0; i < h5.length; i += 2) {
        var linha = tbClubes.insertRow(numLinhas);
        var coluna = linha.insertCell(0);
        var coluna2 = linha.insertCell(1);

        coluna.textContent = h5[i].textContent;
        coluna2.textContent = h5[i + 1].textContent;
        numLinhas++
    }

    btAdicionar.disabled = true;
    btMostar.disabled = true;
}
var btMostar = document.getElementById("btMostar");
btMostar.addEventListener("click", mostrarTabela);

function novaTabela() {
    location.reload();
}
var btNovosClubes = document.getElementById("btNovosClubes");
btNovosClubes.addEventListener("click", novaTabela);
