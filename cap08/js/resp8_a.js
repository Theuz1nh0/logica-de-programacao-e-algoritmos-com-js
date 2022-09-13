function trocarClube() {
    var imgClube = document.getElementById("imgClube");
    var divTitulo = document.getElementById("divTitulo");

    var clube = ["Brasil", "Franca", "Mexico"];

    // percorre os radiobuttons para verificar qual será selecionasdo
    for (var i = 0; i < 4; i++) {
        if (inputsRadio[i].checked) { // se selecionado...
            var selecao = i; // armazena o indice do radio selecionado
            break; // e  sai da repetição
        }
    }

    if (selecao <= 2) {
        divTitulo.className = "row cores" + clube[selecao];

        // modifica a imagem de acordo com a seleção do cliente
        imgClube.src = "./img/" + clube[selecao].toLowerCase() + ".svg";
        imgClube.className = "exibe";
        imgClube.alt = "Simbolo do(a) " + clube[selecao];

        // salva no navegador a escolha do cliente
        localStorage.setItem("clube", clube[selecao]);
    } else {
        divTitulo.className = "row";
        imgClube.className = "oculta"
        imgClube.alt = "";
        localStorage.removeItem("clube");
    }
}


var inputsRadio = document.getElementsByTagName("input");
for (var i = 0; i < inputsRadio.length; i++) {
    inputsRadio[i].addEventListener("change", trocarClube);
}

function verificarClube() {
    // se já estiver salvo algum clube
    if (localStorage.getItem("clube")) {

        var clube = localStorage.getItem("clube"); // obtem o nome do clube

        // conforme o clube, marca um dos elementos do input type radio
        if (clube == "Brasil") {
            inputsRadio[0].checked = true;
        } else if (clube == "Franca") {
            inputsRadio[1].checked = true;
        } else {
            inputsRadio[2].checked = true;
        }

        trocarClube();
    }
}
verificarClube();

function contadorVizitas() {
    var outContadorVizita = document.getElementById("outContadorVizita");
    var contador;

    // verifica se ja tem contador armazenado
    if (localStorage.getItem("contador")) {
        contador = localStorage.getItem("contador");
    } else {
        contador = 0;
    }

    // se algum input radio estiver marcado
    for (var i = 0; i < inputsRadio.length; i++) {
        if (inputsRadio[i].checked) {
            contador++;
        }
    }

    // verifica o numero de vezes que a pessoa entrou no site, para mostrar frase 
    if (contador == 1) {
        outContadorVizita.textContent = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site."
    } else {
        outContadorVizita.textContent = "Que bom que você voltou! Esta é a sua visita número " + contador + " ao nosso site.";
    }

    localStorage.setItem("contador", contador);
}
contadorVizitas()
