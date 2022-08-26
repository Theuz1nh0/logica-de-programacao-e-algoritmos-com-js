function criptografarMensagem() {
    var inMensagem = document.getElementById("inMensagem");
    var mensagem = inMensagem.value;
    var numLetras = mensagem.length;

    // verifica se existe alguma mensagem
    if (mensagem == "") {
        alert("Digite sua mensagem...");
        inMensagem.focus();
        return;
    }
    
    // cria variavel que guardara as letras impares e pares
    var par = "";
    var impar = "";

    // percorre as letras da mensagem e adiciona-as nas variaveis respectivas
    for (var i = 1; i <= numLetras; i++) {
        // se i for par
        if (i % 2 == 0) {
            par += mensagem.charAt(i - 1);
        } else {
            impar += mensagem.charAt(i - 1)
        }
    }

    document.getElementById("outResposta").textContent = par + impar;
}
var btCrip = document.getElementById("btCrip");
btCrip.addEventListener('click', criptografarMensagem);

function descriptografarMensagem() {
    var inMensagem = document.getElementById("inMensagem");
    var mensagem = inMensagem.value;
    var numLetras = mensagem.length;

    if (mensagem == "") {
        alert("Digite sua mensagem...");
        inMensagem.focus();
        return;
    }

    var par = "";
    var impar = "";
    var resposta = ""

    // divide a mensagem criptografada em impares e pares
    for (var i = 0; i < numLetras; i++) {
        if (i < Math.floor(numLetras / 2)) {
            par += mensagem.charAt(i);
        } else {
            impar += mensagem.charAt(i)
        }
    }

    // pega as letras das variaveis em ordem e as concatena
    for (var i = 0; i < numLetras; i++) {  
        resposta += impar.charAt(i) + par.charAt(i);
    }

    document.getElementById("outResposta").textContent = resposta;
}
var btDescrip = document.getElementById("btDescrip");
btDescrip.addEventListener('click', descriptografarMensagem);