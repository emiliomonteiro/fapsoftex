# Proposta:

No hipertexto anterior, temos um exemplo de um fluxograma que realiza o cálculo da média de duas notas de um aluno. O fluxograma solicita duas notas que serão somadas, e logo em seguida a média dessas notas é calculada. Dessa forma o resultado da média quando é maior ou igual a 7 o aluno está APROVADO, quando menor que 7 o aluno está REPROVADO.

Utilizando o Google Blockly construa o algoritmos que realiza esse processamento.

# Resposta

Blockly

![image](https://github.com/emiliomonteiro/fapsoftex/assets/13697371/62870203-6bda-4c86-87fe-432bd2d1cdf5)

JavaScript

```javascript

var nota1, nota2, media;

function calculoMedia() {
  nota1 = 8;
  nota2 = 7;
  media = (nota1 + nota2) / 2;
  if (media >= 7) {
    window.alert('Aprovado');
  } else {
    window.alert('Reprovado');
  }
}

```
