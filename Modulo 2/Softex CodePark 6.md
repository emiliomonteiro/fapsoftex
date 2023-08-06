# Proposta:

Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

# Resposta

JavaScript

```javascript

function calc(numero1, numero2, calculo) {

if (calculo != (1 || 2 || 3 || 4)) {
        console.log(0);
      }

    switch (calculo) {
      case 1:
        return numero1 + numero2;
      case 2:
        return numero1 - numero2;
      case 3:
        return numero1 * numero2;
      case 4:
        return numero1 / numero2;
    }
  }

var resultado = calc(2, 3, 1);
console.log(resultado);

```
