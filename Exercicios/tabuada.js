const prompt = require("prompt-sync")({ sigint: true });
var num;
var x = 1;
x = prompt("Qual o numero desejado? ");
x = Number(x);

for (num = 0; num <= 10; num++) console.log(x, "*", num, "=", x * num, "\n");
if (num <= 10) {
} else console.log("Numero invalido");

##Codigo precisa de correção, falta user input.
