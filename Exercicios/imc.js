const prompt = require("prompt-sync")({ sigint: true });

let peso = prompt("Qual o peso em kg?");
let altura = prompt("Qual a altura em m?");

let imc = Number(peso) / (Number(altura) * Number(altura));

if (imc <= 25) {
    console.log("Peso normal");
} else if (imc >= 25.1 && imc <= 29.9) {
    console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade Grau I");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade Grau II");
} else if (imc >= 40) {
    console.log("Obesidade Grau III");
}
