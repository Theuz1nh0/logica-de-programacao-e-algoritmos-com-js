alert("Digite 0 para sair");
// inicio da repetição
do {
    var num = Number(prompt("Número: "));

    if (num == 0 || isNaN(num)) {
        var sair = confirm("Confirma saida?"); // solicita confirmação do usuário

        if (sair) {
            break; // sai da repetição
        } else {
            continue; // volta ao inicio do laço
        }
    }
    // se par mostra o dobro; impar, mostra o triplo
    if (num % 2 == 0) {
        alert("O dobro de " + num + " é: " + num * 2);
    } else {
        alert("O triplo de " + num + " é: " + num * 3);
    }
} while(true); // enquanto verdade (só sai pelo break)

alert("Bye, Bye...")