# Proposta:

Desenvolva, utilizando o Google Blockly, um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:
 
- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis.


# Resposta

Blockly

![image](https://github.com/emiliomonteiro/fapsoftex/assets/13697371/d3ee03b5-7b5e-4c01-961d-fd7fb58557f8)

JavaScript

```javascript


var Aluno, Faltas, Nota1, Nota2, Media;


Aluno = window.prompt('Qual o nome do aluno?');
Faltas = Number(window.prompt('Quantas faltas o aluno teve?'));
Nota1 = Number(window.prompt('Qual a nota do aluno na primeira avaliação?'));
Nota2 = Number(window.prompt('Qual a nota do aluno na segunda avaliação?'));
Media = (Nota1 + Nota2) / 2;
if (Faltas > 3 || Media < 7) {
  window.alert(String(Aluno) + ' foi reprovado.');
} else {
  window.alert(String(Aluno) + ' foi aprovado.');
}

```
