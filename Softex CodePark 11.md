# Proposta:

Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:

A: Veículos com duas ou três rodas;

B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;

C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;

D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;

E: Veículos com quatro rodas ou mais e com mais de 6000 kg.



# Resposta

Blockly

![image](https://github.com/emiliomonteiro/fapsoftex/assets/13697371/b4a8f87b-6b90-413f-9e3f-6051615de7f2)

JavaScript

```javascript




var numeroRodas, peso, numeroPessoas, categoria;


numeroRodas = Number(window.prompt('Qual a quantidade de rodas?'));
peso = Number(window.prompt('Qual o peso do veiculo em KG?'));
numeroPessoas = Number(window.prompt('Qual o numero de passageiros?'));
if (numeroRodas == 2 || numeroRodas == 3) {
  categoria = 'A';
} else if (numeroRodas == 4 && numeroPessoas <= 8 && peso < 3500) {
  categoria = 'B';
} else if (numeroRodas >= 4 && peso >= 3500 && peso <= 6000) {
  categoria = 'C';
} else if (numeroRodas >= 4 && numeroPessoas > 8) {
  categoria = 'D';
} else if (numeroRodas >= 4 || peso > 6000) {
  categoria = 'E';
}
window.alert('A categoria ideal é: ' + String(categoria));


```
