function gerarEmail() {
    var inFuncionario = document.getElementById("inFuncionario");
    var outEmail = document.getElementById("outEmail");

    var funcionario = inFuncionario.value;

    // se vazio ou se não há espaço no nome do funcionário
    if (funcionario == "" || funcionario.indexOf(" ") == -1) {
        alert("Informe o nome completo do funcionário");
        inFuncionario.focus();
        return;
    }

    var partes = funcionario.split(" ");
    var email = "";
    var tam = partes.length;

    // percorre os itens do vetor (exeto o últomo)
    for (var i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0);
    }

    email += partes[tam - 1] + "@empresa.com.br"
    outEmail.textContent = "E-mail: " + email.toLowerCase();
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener('click', gerarEmail);