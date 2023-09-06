const prompt = require("prompt-sync")({ sigint: true });
let operacao = prompt(
    "Qual Operação deseja executar? Digite 1 para Adição, Digite 2 para Subtração, Digite 3 para Divisão, Digite 4 para Multiplicação."
);
let num1 = prompt("");

switch (operacao) {
    case "1":
        adicao();
        break;

    case "2":
        subtracao();
        break;

    case "3":
        divisao();
        break;

    case "4":
        multiplicacao();
        break;

    default:
        console.log("Operação incorreta");
        break;
}
