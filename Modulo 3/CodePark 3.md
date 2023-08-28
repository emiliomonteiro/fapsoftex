# Proposta:
Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

# Resposta

Para fila a ordem seria: 3, 7, 9, 1, 0.
Para pilha a ordem seria: 0, 1, 9, 7, 3.
Para lista a ordem seria: 3, 7, 9, 1, 0.

JavaScript

```javascript

var fila = [3, 7, 9, 1, 0];
var lista = [3, 7, 9, 1, 0];
var pilha = [3, 7, 9, 1, 0];


while(fila.length != 0){
    console.log(fila[0]);
    fila.shift();
}

while(pilha.length != 0){
    console.log(pilha[pilha.length - 1]);
    pilha.pop();
}

function removerLista(element) {
    const quantLista = lista.indexOf(element);
    if(quantLista !== -1) {
        lista.splice(quantLista, 1);
        return true;
    } else {
        return false;
    }
}

console.log(lista);

```
