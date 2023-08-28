# Proposta:

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.
 

# Resposta

Blockly

![image](https://github.com/emiliomonteiro/fapsoftex/assets/13697371/65312ea7-a866-48fc-a335-fe960c6b345f)

JavaScript

```javascript

var tempoExplodir, i;


tempoExplodir = Number(window.prompt('Quantos segundos para explosão?'));
var i_inc = 1;
if (tempoExplodir > 0) {
  i_inc = -i_inc;
}
for (i = tempoExplodir; i_inc >= 0 ? i <= 0 : i >= 0; i += i_inc) {
  window.alert(String(i) + ' Segundos');
}
window.alert('BOOM!');


```
