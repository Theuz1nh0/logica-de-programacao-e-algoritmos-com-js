var todasNoticias = [];

function adicionarNoticia() {
    var inNoticia = document.getElementById("inNoticia");
    var noticia = inNoticia.value;

    // verifica preenchimento do campo
    if (noticia == "") {
        alert("Escreva alguma notícia...");
        inNoticia.focus();
        return;
    }

    todasNoticias.push(noticia); // adiciona noticia ao vetor

    var contador = 0; // cria um contador para mostar a númeração das notícias
    var lista = "";

    // percorre o vator todasNoticias
    for (var i = 0; i < todasNoticias.length; i++) {
        contador++
        lista += contador + "º) " + todasNoticias[i] + "\n";
    }

    document.getElementById("outRelatorio").textContent = "Notícias Cadastradas: " + todasNoticias.length;
    document.getElementById("outResposta").textContent = lista;

    // limpa os campos apos inclusão de uma noticia
    inNoticia.value = "";
    inNoticia.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarNoticia);

function listarNoticias() {
    // verifica se o vetor esta vaizio
    if (todasNoticias.length == 0) {
        alert("Você ainda não cadastrou nenhuma notícia");
        return
    }

    var numNoticias = Number(prompt("Quantas notícias serão listadas?"));

    // verifica se informou o número corretamente
    if (numNoticias == 0 | isNaN(numNoticias)) {
        alert("Valor incorreto...");
        return;
    } else if (numNoticias > todasNoticias.length) {
        alert("Escolha um número igual ou menor ao número de notícias cadastradas");
        return;
    }

    // clona o vetor
    var cloneVNoticias = todasNoticias.slice();
    cloneVNoticias.reverse();

    var contador = todasNoticias.length; // cria contador
    var lista = numNoticias + " Última(s) Notícia(s)" + "\n" + "--------------------------------------------" + "\n";

    // percorre o vetor e concatena as respostas
    for (var i = 0; i < numNoticias; i++) {
        lista += contador + "º) " + cloneVNoticias[i] + "\n";
        contador--;
    }

    document.getElementById("outResposta").textContent = lista;

}
var btListar = document.getElementById("btListar");
btListar.addEventListener('click', listarNoticias);