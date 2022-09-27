function exibirVelas() {
    var inIdade = document.getElementById("inIdade");
    var idade = Number(inIdade.value);

    if (idade < 1 || isNaN(idade) || idade > 120) {
        alert("Defina a idade corretamente (apenas idades entre 1 e 120 serão aceitas)");
        inIdade.focus();
        return;
    }

    var container = document.getElementById("container");
    idade = idade.toString();

    for (var i = 0; i < idade.length; i++) {
        var img = document.createElement("img");
        img.src = "./img/" + idade.charAt(i) + ".jpg";
        img.alt = "imagem do numero " + idade.charAt(i);

        container.appendChild(img);
    }

    inIdade.value = "";
    inIdade.focus();
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirVelas);

function novasVelas() {
    location.reload()
}
var btNovas = document.getElementById("btNovas");
btNovas.addEventListener("click", novasVelas);