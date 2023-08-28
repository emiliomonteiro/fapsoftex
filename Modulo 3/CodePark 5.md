# Proposta:
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

# Resposta

JavaScript

```javascript

function buscaBinaria(umVetor, item) {
    let primeiro = 0;
    let ultimo = umVetor.length - 1;
    let encontrou = false;

    while (primeiro <= ultimo && !encontrou) {
        meioLista = Math.floor((primeiro + ultimo) / 2);

        if (umVetor[meioLista] === item) {
            return meioLista; 
        } else if (umVetor[meioLista] < item) {
            primeiro = meioLista + 1;
        } else {
            ultimo = meioLista - 1;
        }
    }

    return encontrou; 
}

const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
const valor = 20;

const indice = buscaBinaria(array, valor);

if (indice !== -1) {
    console.log(`Está na posição ${indice}.`);
} else {
    console.log(`Não está na lista.`);
}

```
