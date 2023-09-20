import { Agencia } from "./model/agencia.js";
import { Cliente } from "./model/cliente.js";
import { Conta } from "./model/conta.js";
import { Endereco } from "./model/endereco.js";

//Criando uma agência
let endAgencia = new Endereco(
    "PE",
    "Recife",
    "São José",
    "Rua da Guia",
    1000,
    205,
    "40050-030"
);
let agencia = new Agencia(
    "Softex",
    1234,
    "81988273956",
    "agsoftex@gmail.com",
    endAg
);
let endClient = new Endereco(
    "PE",
    "Recife",
    "Cordeiro",
    "Rua Rio Jiquiá",
    88,
    null,
    "50702-310"
);
let cliEgito = new Cliente(
    "José Egito",
    "111.345.233-67",
    new Date("2014-10-10"),
    "733439",
    "egito@gmail.com",
    "81989038829"
);
let contaEgito = new Conta(cliEgito, 79221, agencia, 1378.5);

contaEgito.depositar(300);
contaEgito.sacar(500);

console.log(contaEgito);
