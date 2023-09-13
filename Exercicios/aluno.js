class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    saudacao() {
        console.log("Olá", this.nome);
    }
}

class Aluno extends Pessoa {
    constructor(nome) {
        console.log("Criando turma de aluno");
        super(nome);
    }
}

let pessoa1 = new Pessoa("José");
console.log(pessoa1.nome);
pessoa1.saudacao();
let aluno1 = new Aluno("Paula");
console.log(aluno1.nome);
aluno1.saudacao();
