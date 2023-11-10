**Objetos Materiais:**

1. **Carro:**
   - Atributos:
     1. Modelo
     2. Cor
     3. Velocidade Atual
   - Métodos:
     1. Acelerar
     2. Frear
     3. ObterInformacoes (retorna informações sobre o carro)

2. **Livro:**
   - Atributos:
     1. Título
     2. Autor
     3. Número de Páginas
   - Métodos:
     1. Abrir (indica que o livro está sendo aberto)
     2. Fechar (indica que o livro está sendo fechado)
     3. ObterDetalhes (retorna detalhes sobre o livro)

**Objetos Abstratos:**

1. **Conta Bancária:**
   - Atributos:
     1. Número da Conta
     2. Saldo
     3. Titular da Conta
   - Métodos:
     1. Depositar
     2. Sacar
     3. ConsultarSaldo (retorna o saldo atual)

2. **Calendário:**
   - Atributos:
     1. Ano Atual
     2. Mês Atual
     3. Dia Atual
   - Métodos:
     1. AvançarDia
     2. RetrocederDia
     3. ObterDataAtual (retorna a data atual)

**Demonstração em JavaScript:**

```javascript
class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidadeAtual = 0;
    }

    acelerar() {
        this.velocidadeAtual += 10;
        console.log(`${this.modelo} acelerou. Velocidade atual: ${this.velocidadeAtual} km/h`);
    }

    frear() {
        this.velocidadeAtual -= 5;
        console.log(`${this.modelo} freou. Velocidade atual: ${this.velocidadeAtual} km/h`);
    }

    obterInformacoes() {
        return `Carro: ${this.modelo}, Cor: ${this.cor}, Velocidade: ${this.velocidadeAtual} km/h`;
    }
}

const meuCarro = new Carro('Fusca', 'Azul');
meuCarro.acelerar();
meuCarro.frear();
console.log(meuCarro.obterInformacoes());

class Livro {
    constructor(titulo, autor, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
        this.aberto = false;
    }

    abrir() {
        this.aberto = true;
        console.log(`Livro ${this.titulo} aberto.`);
    }

    fechar() {
        this.aberto = false;
        console.log(`Livro ${this.titulo} fechado.`);
    }

    obterDetalhes() {
        return `Livro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.numPaginas}, Aberto: ${this.aberto}`;
    }
}

const meuLivro = new Livro('Aventuras na Floresta', 'João Silva', 200);
meuLivro.abrir();
meuLivro.fechar();
console.log(meuLivro.obterDetalhes());

class ContaBancaria {
    constructor(numeroConta, saldoInicial, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.titular = titular;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    consultarSaldo() {
        return `Saldo da conta ${this.numeroConta} de ${this.titular}: R$${this.saldo}`;
    }
}

const minhaContaBancaria = new ContaBancaria('12345-6', 1000, 'João Silva');
minhaContaBancaria.depositar(500);
minhaContaBancaria.sacar(200);
console.log(minhaContaBancaria.consultarSaldo());

class Calendario {
    constructor(anoAtual, mesAtual, diaAtual) {
        this.anoAtual = anoAtual;
        this.mesAtual = mesAtual;
        this.diaAtual = diaAtual;
    }

    avancarDia() {
        this.diaAtual++;
        console.log(`Avançou para o próximo dia: ${this.diaAtual}/${this.mesAtual}/${this.anoAtual}`);
    }

    retrocederDia() {
        this.diaAtual--;
        console.log(`Retrocedeu para o dia anterior: ${this.diaAtual}/${this.mesAtual}/${this.anoAtual}`);
    }

    obterDataAtual() {
        return `Data atual: ${this.diaAtual}/${this.mesAtual}/${this.anoAtual}`;
    }
}

const meuCalendario = new Calendario(2023, 11, 10);
meuCalendario.avancarDia();
meuCalendario.retrocederDia();
console.log(meuCalendario.obterDataAtual());
```

