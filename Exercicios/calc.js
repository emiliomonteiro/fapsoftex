const prompt = require("prompt-sync")({ sigint: true });
let operacao = prompt(
    "Qual Operação deseja executar? Digite + para Adição, Digite - para Subtração, Digite / para Divisão, Digite * para Multiplicação."
);

switch (operacao) {
    case "+":
        adicao();
        break;

    case "-":
        subtracao();
        break;

    case "/":
        divisao();
        break;

    case "*":
        multiplicacao();
        break;

    default:
        console.log("Operação incorreta");
        break;
}

function adicao() {
    let num1 = prompt("Qual o primeiro numero?");
    let num2 = prompt("Qual o segundoo numero?");
    let resultado = parseInt(num1) + parseInt(num2);
    console.log("O resultado é: ", resultado);
}

function subtracao() {
    let num1 = prompt("Qual o primeiro numero?");
    let num2 = prompt("Qual o segundo numero?");
    let resultado = parseInt(num1) - parseInt(num2);
    console.log("O resultado é: ", resultado);
}

function divisao() {
    let num1 = prompt("Qual o primeiro numero?");
    let num2 = prompt("Qual o segundo numero?");
    let resultado = parseInt(num1) / parseInt(num2);
    let resto = parseInt(num1) % parseInt(num2);
    console.log("O resultado é: ", resultado, "e o resto: ", resto);
}

function multiplicacao() {
    let num1 = prompt("Qual o primeiro numero?");
    let num2 = prompt("Qual o segundo numero?");
    let resultado = parseInt(num1) * parseInt(num2);
    console.log("O resultado é: ", resultado);
}
