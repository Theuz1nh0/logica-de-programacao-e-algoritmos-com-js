function incluirAposta() {
    var inNome = document.getElementById("inNome");
    var inPeso = document.getElementById("inPeso");

    var nome = inNome.value;
    var peso = Number(inPeso.value);

    // se vazios ou NaN
    if (nome == "" || peso == 0 || isNaN(peso)) {
        alert("Informe nome e peso da aposta");
        inNome.focus();
        return;
    }
    // chama funcion que verifica se o peso ja foi apostado
    if(verApostaExistente(peso)) {
        alert("Alguém já apostou este peso, informe outro...");
        inPeso.focus();
        return;
    }

    // se houver dados salvos no localStorage
    if (localStorage.getItem("melanciaNome")) {
        // obtem o conteudo já salvo e acrescenta ";" + dados da aposta
        var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

        // salva os dados em localStorage
        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else { // senão, é a primeira aposta (não tem ";")
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostarAposta();

    inNome.value = "";
    inPeso.value = "";
    inNome.focus();
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", incluirAposta);

function verApostaExistente(peso) {
    var existe = false; // valor inicial é false

    // se existe algum dado salvo em localStorage
    if (localStorage.getItem("melanciaPeso")) {
        var pesos = localStorage.getItem("melanciaPeso").split(";");

        if (pesos.indexOf(peso.toString()) >= 0) {
            existe = true;
        }
    }

    return existe;
}

function mostarAposta() {
    var outApostas = document.getElementById("outApostas");

    // se não ha apostas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        outApostas.textContent = "";
        return;
    }

    var nomes = localStorage.getItem("melanciaNome").split(";");
    var pesos = localStorage.getItem("melanciaPeso").split(";");

    var linhas = "";

    for (var i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "g \n";
    }

    outApostas.textContent = linhas;
}
mostarAposta();

function verificarVencedor() {
    if (!localStorage.getItem("melanciaNome")) {
        alert("Naõ há apostas cadastradas");
        return;
    }

    var pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return;
    }

    var nomes = localStorage.getItem("melanciaNome").split(";");
    var pesos = localStorage.getItem("melanciaPeso").split(";");

    var vencedorNome = nomes[0];
    var vencedorPeso = Number(pesos[0]);

    for (var i = 1; i < nomes.length; i++) {
        difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        if (difAposta < difVencedor) {
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
        }
    }

    var mensagem = "Resultado - Peso Correto: " + pesoCorreto + "g";
    mensagem += "\n------------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "g";
    alert(mensagem);
}
var btVencedor = document.getElementById("btVencedor");
btVencedor.addEventListener("click", verificarVencedor);

function limparAposta() {
    if (confirm("Confirma exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");
        mostarAposta();
    }
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparAposta);