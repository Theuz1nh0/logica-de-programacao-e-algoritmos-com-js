var numeros = [];

function adicionarNumero() {
    var inNum = document.getElementById("inNum");
    num = Number(inNum.value);

    // verifica preenchimento dos campos
    if (inNum.value == "" | isNaN(num)) {
        alert("Preencha o campo com um número");
        inNum.focus();
        return;
    }

    // verifica se número já existe no vetor
    if (numeros.indexOf(num) >= 0) {
        alert("Vocês já adcionou esse número");
        return;
    }

    numeros.push(num);
    document.getElementById("outNum").textContent = "Números: " + numeros.join(", ");

    inNum.value = "";
    document.getElementById("outOrdem").textContent = "";
    inNum.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarNumero);

function verificarNumero() {
    var outOrdem = document.getElementById("outOrdem");

    // verifica se vetor está vazio ou se so tem um número
    if (numeros.length == 0) {
        outOrdem.textContent = "Você ainda não adicionou nenhum número";
        return;
    } else if (numeros.length == 1) {
        outOrdem.textContent = "Adicione mais um número para verificar a Ordem";
        return;
    }

    // clona o vetor números e o deixa em ordem crescente
    var cloneNumeros = numeros.slice();
    cloneNumeros.sort(function (a, b) { return a - b });

    var verificar = 0; // cria um contador

    /* verifica se a ordem dos números do vetor proncipal está igual
    ordem dos números do vetor secundário */
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] == cloneNumeros[i]) {
            verificar++
        }
    }

    // verifica se todos os números verificados estavam iguais e na ordem certa
    if (numeros.length == verificar) {
        outOrdem.textContent = "Números estão em ordem crescente"
    } else {
        outOrdem.textContent = "Atenção... Números não estão em ordem crescente"
    }

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verificarNumero);