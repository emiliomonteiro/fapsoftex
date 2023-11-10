function exibirMenu(): void {
    console.log("Escolha uma operação:");
    console.log("1. Soma");
    console.log("2. Multiplicação");
}

function soma(a: number, b: number): number {
    return a + b;
}

const multiplicacao = (a: number, b: number): number => a * b;

function calculadora(operacao: number, num1: number, num2: number): void {
    switch (operacao) {
        case 1:
            const resultadoSoma = soma(num1, num2);
            console.log(`Resultado da soma: ${resultadoSoma}`);
            break;
        case 2:
            const resultadoMultiplicacao = multiplicacao(num1, num2);
            console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
            break;
        default:
            console.log("Operação inválida.");
    }
}

exibirMenu();

const operacaoEscolhida = 1;
const numero1 = 5;
const numero2 = 3;

calculadora(operacaoEscolhida, numero1, numero2);
