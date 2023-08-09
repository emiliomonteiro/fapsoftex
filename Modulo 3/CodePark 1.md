# Proposta:

Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.


# Resposta

JavaScript

```javascript


var nomes = ['Emilio', 'Clarice', 'Thiago', 'João', 'Pedro', 'Fabio', 'Wesley', 'Bruno', 'Alesson', 'Ana'];
var idade = [29, 26, 28, 27, 27, 30, 28, 24, 25, 23];
var cores = ['Preto', 'Rosa', 'Azul', 'Verde', 'Laranja', 'Vermelho', 'Roxo', 'Magenta', 'Branco', 'Amarelo'];

for (let i = 0; i < nomes.length; i++) {
    console.log("nome:", nomes[i], " idade: ", idade[i], " cor: ", cores[i]);
    }

idade.splice(0,1, 31);
cores.splice(0,1, "Vinho");

for (let i = 0; i < nomes.length; i++) {
    console.log("nome: ", nomes[i], " , idade: ", idade[i], " cor: ", cores[i]);
    }

```
