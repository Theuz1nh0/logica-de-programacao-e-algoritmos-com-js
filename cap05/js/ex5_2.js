var erros = [];

// gera um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random() * 100) + 1;

// declara constante com o número de chances
const CHANCES = 6;

function apostarNumero() {
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    if (numero < 1 || numero > 100 || isNaN(numero)) {
        alert("Informe um número de 1 à 100...");
        inNumero.focus();
        return;
    }

    var outDica = document.getElementById("outDica");
    var outChances = document.getElementById("outChances");
    var outErros = document.getElementById("outErros");

    if ( numero == sorteado) {
        alert("Parabéns!! Você Acertou!!!");
        // troca status dos botões
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
    } else {
        // se numero existe no vetor erros
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + ". Tente outro...");
        } else {
            erros.push(numero); // adciona número ao vetor
            var numErros = erros.length; // obtém o tamanho do vetor
            var numChances = CHANCES - numErros;// calcula nº de chances

            outErros.textContent = numErros + " (" + erros.join(", ") + ")";
            outChances.textContent = numChances;

            if (numChances == 0) {
                alert("Suas chances acabaram...");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "Game Over!! Número Sorteado: " + sorteado;
            } else {
                // usa operador ternário (condicional) para mensagem da dica
                var dica = numero < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica: tente um número " + dica + " que " + numero;
            }
        }
    }

    inNumero.value = ""
    inNumero.focus();
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener('click', apostarNumero);

function jogarNovamenete() {
    location.reload();
}
var btJogar = document.getElementById("btJogar");
btJogar.addEventListener('click', jogarNovamenete);