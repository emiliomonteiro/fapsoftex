# Proposta:
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

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

    print = (separator = ', ') =>{
        const result = [];
        let temp = this.head;
        while(temp){
            result.push(temp.nome, temp.idade);
            temp = temp.filho;
        }
        return result.join(separator);
    }
};

const pessoas = new listagem();


pessoas.adicionar("Teste1", 21);
pessoas.adicionar("Teste2", 26);
pessoas.adicionar("Teste3", 28);

console.log(pessoas.print());

```
