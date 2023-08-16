# Proposta:
Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.

# Resposta

JavaScript

```javascript

function pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null;
    }


class listagem {
    adicionar(nome, idade) {
        const novaPessoa = new pessoa(nome, idade);
        if (!this.head){
        this.head = novaPessoa;
        this.tail = novaPessoa;
        }else {
            this.tail.filho = novaPessoa;
            this.tail = this.tail.filho;
        }
    };

    print = (separa = ', ') =>{
        const resultado = [];
        let impri = this.head;
        while(impri){
            resultado.push(impri.nome, impri.idade);
            impri = impri.filho;
        }
        return resultado.join(separa);
    }
};

const pessoas = new listagem();


pessoas.adicionar("Teste1", 21);
pessoas.adicionar("Teste2", 26);
pessoas.adicionar("Teste3", 28);

console.log(pessoas.print());

```
