var pacientes = []; // declara vetor global

function adicionarPaciente() {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value; // obtém o nome do paciente

    // verifica preenchimento do paciente
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome); // adiciona o nome no final do vetor

    var lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarPaciente);

function urgenciaPaciente() {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value; // obtém o nome do paciente

    // verifica preenchimento do paciente
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nome); // adiciona o nome no final do vetor

    var lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener('click', urgenciaPaciente);

function atenderPaciente() {
    // verifica se o vetor pacientes está vazio
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        inPaciente.focus();
        return;
    }

    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    // remove paciente do inicio da fila
    var atender = pacientes.shift();
    // exibe o nome do paciente em atendimento
    outAtendimento.textContent = atender;

    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
    outLista.textContent = lista;
}

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener('click', atenderPaciente);