# Resposta

```JavaScript
class Banco {
    private conta: string;
    private saldo: number;
    private tipoConta: string;
    private agencia: string;

    constructor(conta: string, saldo: number, tipoConta: string, agencia: string) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }

    buscarSaldo(): number {
        return this.saldo;
    }

    deposito(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    saque(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    numeroDaConta(): string {
        return this.conta;
    }
}

const minhaConta = new Banco("12345-6", 1000, "Corrente", "7890");

console.log(`Saldo atual: R$${minhaConta.buscarSaldo()}`);
minhaConta.deposito(500);
minhaConta.saque(200);
console.log(`Número da conta: ${minhaConta.numeroDaConta()}`);


```
