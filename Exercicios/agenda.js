const prompt = require("prompt-sync")({ sigint: true });

let tarefas = [];
var opcao = 1;

while (opcao == 1) {
    let tipo = prompt(
        "Digite 1 para inserir, 2 para editar, 3 para remover, 4 para listar ou 5 para sair."
    );

    switch (tipo) {
        case "1":
            inserir();
            break;

        case "2":
            editar();
            break;

        case "3":
            remover();
            break;

        case "4":
            listar();
            break;

        case "5":
            var opcao = 0;
            break;

        default:
            console.log("Operação incorreta.");
            break;
    }
}

function inserir() {
    let tarefa = prompt("Digite a tarefa a ser inserida: ");
    tarefas.push(tarefa);
}

function editar() {
    console.log("Alterar Tarefas");
    console.log(tarefas);
    let n = parseInt(prompt("Digite o número da tarefa a ser alterada: "));
    let item = prompt("Digite a nova tarefa a ser inserida: ");
    tarefas.splice(n, 1, item);
}

function remover() {
    console.log("Excluir Tarefas");
    console.log(tarefas);
    let n = parseInt(prompt("Digite o número da tarefa a ser alterada: "));
    tarefas.splice(n, 1);
}

function listar() {
    tamanho = tarefas.length;

    for (let controle = 0; controle < tamanho; controle++) {
        console.log(tarefas[controle]);
    }
}
