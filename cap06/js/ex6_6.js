function verSenha() {
    var inSenha = document.getElementById("inSenha");
    var outResposta = document.getElementById("outResposta");

    var senha = inSenha.value;
    var erros = []; // vetor com erros

    // verifica se o tamanho da senha é invalido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    // verifica se não possui números
    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no minimo, 1)");
    }

    // verifica se não possui letras minúsculas
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas (no minimo, 1)");
    }

    // verifica se não possui letras maiúsculas ou se possui apenas 1
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("possuir letras maiúsculas (no minimo, 2)");
    }

    // verifica se não possui simbolos ou "_"
    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir simbolos (no minimo, 1)");
    }

    // se vetor estã vazio (significa que não foram encontrados erros)
    if (erros.length == 0) {
        outResposta.textContent = "Ok! Senha Válida";
    } else {
        outResposta.textContent = "Erro... A senha deve " + erros.join(", ");
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verSenha);