function adicionarProduto() {
    var inProduto = document.getElementById("inProduto");
    var outLista = document.getElementById("outLista");
    var produto = inProduto.value;

    // verifica o preenchimento do campo produto
    if (produto == "") {
        alert("Coloque seu produto corretamente");
        inProduto.focus();
        return;
    }

    // verifica se ja existe o produto
    if (verificarRepetido(produto)) {
        alert("Você já a adicionou esse produto");
        inProduto.value = "";
        inProduto.focus();
        return;
    }

    var lista = VerificarProduto(produto)

    outLista.textContent = lista;

    inProduto.value = "";
    inProduto.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProduto);

// se precionar a teclar Enter (codigo == 13)
addEventListener("keypress", function(tecla) {
    if (tecla.keyCode == 13) {
        adicionarProduto()
    }
})

function limparLista() {
    if (localStorage.getItem("lista")) {
        var confirmar = confirm("Você tem certeza que quer limpar a lista?");

        // se confirmar == true
        if (confirmar) {
            localStorage.removeItem("lista");
            localStorage.removeItem("outLista");

            outLista.textContent = "";
        }
    } else {
        alert("Não há produtos para limpar")
    }
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);


function verificarRepetido(produto) {
    var verificar = false;
    if (localStorage.getItem("lista")) {
        var produtos = localStorage.getItem("lista").toLowerCase();
        var vetorProdutos = produtos.split(";");

        if (vetorProdutos.indexOf(produto.toLowerCase()) != -1) {
            verificar = true;
        }
    }
    // Verifica se a palavra em minusculo ja tem no vetor

    return verificar;
}

function VerificarProduto(produto) {
    var lista = "Produtos Adicionados\n---------------------------------------\n";

    // verifica sse ja tem localStorage
    if (localStorage.getItem("lista")) {
        // se tiver. adiicona-o a "listaProdutos" e adiciona o novo produto
        var listaProdutos = localStorage.getItem("lista");
        listaProdutos += ";" + produto;
        // cria um vetor com os produtos atuais
        var vetorLista = listaProdutos.split(";");

        // clona o vetor e o deixa em ordem
        var produtoEmOrdem = vetorLista.slice();
        produtoEmOrdem.sort();

        // percorre o vetor e cria a saida de dados
        for (var i = 0; i < produtoEmOrdem.length; i++) {
            lista += produtoEmOrdem[i] + "\n";
        }
    } else {
        // caso nao tenha localStorage, apenas adiciona primeiro produto
        var listaProdutos = produto;
        lista += produto;
    }

    localStorage.setItem("lista", listaProdutos);
    localStorage.setItem("outLista", lista)

    return lista
}

// quando a pagina atualizar, a lista aparecera
function loadPage() {
    var outLista = document.getElementById("outLista");
    lista = localStorage.getItem("outLista");

    outLista.textContent = lista;
}
loadPage()