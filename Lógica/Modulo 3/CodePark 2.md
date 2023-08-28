# Proposta:

Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.
# Resposta

JavaScript

```javascript


var animal = [
    ["Juquinha", "Arthur", "Dora", "Ekans", "Gojira"], //nome dos animais
    ["Cachorro", "Cachorro", "Gato", "Cobra", "Sapo"], //especie dos animais
    [1, 5, 7, 2, 3]                                    //idade dos animais
];

    animal.forEach(row => {
        row.forEach(element => {
            console.log(element);
        })
    })

```
