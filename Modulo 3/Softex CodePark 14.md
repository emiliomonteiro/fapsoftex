# Proposta:

Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 


# Resposta

Blockly

![image](https://github.com/emiliomonteiro/fapsoftex/assets/13697371/613a1a87-51f3-41b1-9736-25b4b9c2b62f)

JavaScript

```javascript




var operacao, numero1, numero2;


while (!false) {
  operacao = Number(window.prompt('Escolha a operação digitando o respectivo número ou digite 0 para sair: 1: Soma 2: Subtração 3: Multiplicação 4: Divisão'));
  if (operacao == 0) {
    break;
  } else if (operacao > 4) {
    window.alert('Opção inválida.');
    continue;
  }
  numero1 = Number(window.prompt('Qual o primeiro número?'));
  numero2 = Number(window.prompt('Qual o segundo número?'));
  if (operacao == 1) {
    window.alert('Para soma o resultado é:' + String(numero1 + numero2));
  } else if (operacao == 2) {
    window.alert('Para subtração o resultado é:' + String(numero1 - numero2));
  } else if (operacao == 3) {
    window.alert('Para multiplicação o resultado é:' + String(numero1 * numero2));
  } else if (operacao == 4) {
    window.alert('Para divisão o resultado é:' + String(numero1 / numero2));
  }
}
```
