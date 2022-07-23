function converterDuracao() {
    // cria referência aos elementos da página
    var inFilme = document.getElementById("inFilme");
    var inDuracao = document.getElementById("inDuracao");
    var outFilme = document.getElementById("outFilme");
    var outResposta = document.getElementById("outResposta");

    // obtém conteúdos dos campos de entrada
    var titulo = inFilme.value;
    var duracao = Number(inDuracao.value);

    // arredonda para baixo o valor da divisão
    var horas = Math.floor(duracao / 60);
    // obtém o resto da divisão entre os números
    var minutos = duracao % 60;
    // alerta o conteúdo dos paragrafos de respostas
    outFilme.textContent = titulo;
    outResposta.textContent = horas + " horas(s) e " + minutos + " minuto(s)";
}
// cria uma referência ao elemento btnConcerter (botão)
var btnConverter = document.getElementById("btnConverter");
// registra um evento associado ao botão, para carregar uma função
btnConverter.addEventListener("click", converterDuracao);