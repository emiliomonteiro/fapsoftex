class Cliente {
    private nome:string;

    constructor(nome:string) {
        this.nome = nome;
    }

    public getNome():string {
        return this.nome;
    }
}

const cliente = new Cliente("Seu nome");

console.log(cliente.getNome());
