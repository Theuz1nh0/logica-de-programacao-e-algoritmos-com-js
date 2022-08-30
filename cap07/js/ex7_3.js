var itens = []; // vetor global para armazenar os itens do pedido

function trocarItem() {
    var inPizza = document.getElementById("inPizza");
    var inBebida = document.getElementById("inBebida");

    // se estiver marcado
    if (rbPizza.checked) {
        inBebida.className = "oculta";
        inPizza.className = "exibe";
    } else {
        inPizza.className = "oculta";
        inBebida.className = "exibe"
    }
}
var rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem);

var rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener("change", trocarItem);

function mostrarNumSabores() {
    // se rbPizza estiver marcado
    if (rbPizza.checked) {
        var pizza = inPizza.value;
        var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;

        inDetalhes.placeholder = "Até " + num + " sabores";
    }
}
var inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener('focus', mostrarNumSabores);

// cria função (ânonima) ao evento blur (enquanto o campo perde o foco)
inDetalhes.addEventListener('blur', function() {
    inDetalhes.placeholder = "";
})

inDetalhes.addEventListener('keypress', function(tecla) {
    // se pressionou tecla de código 13 (enter)
    if (tecla.keyCode == 13) {
        adicionarItem();
    }
})

function adicionarItem() {
    var inPizza = document.getElementById("inPizza");
    var inBebida = document.getElementById("inBebida");
    var outPedido = document.getElementById("outPedido");

    // se rbPizza estiver marcado
    if (rbPizza.checked) {
        var num = inPizza.selectedIndex; // obtém nº do item selecionado
        var produto = inPizza.options[num].text; // texto do item selecionado
    } else {
        var num = inBebida.selectedIndex;
        var produto = inBebida.options[num].text;
    }
    var detalhes = inDetalhes.value;
    itens.push(produto + " (" + detalhes + ")"); // adiciona ao vetor
    outPedido.textContent = itens.join("\n");
    limparCampos();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarItem);

function limparCampos() {
    rbPizza.checked = true;
    inBebida.className = "oculta";
    inPizza.className = "exibe";
    inPizza.selectedIndex = 0;
    inDetalhes.value = "";
    rbPizza.focus();
}