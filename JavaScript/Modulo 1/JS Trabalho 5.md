# Proposta:

![image](https://github.com/emiliomonteiro/fapsoftex/assets/13697371/9c46d964-1046-46de-8217-2100c2402da3)


# Resposta

```JavaScript

const prompt = require('prompt-sync')({sigint: true});

var nota1 = prompt("Qual a primeira nota a ser inserida?");
var nota2 = prompt("Qual a segunda nota a ser inserida?");
var nota3 = prompt("Qual a terceira nota a ser inserida?");

var media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

console.log(media);

```
