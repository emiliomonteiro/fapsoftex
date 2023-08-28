# Proposta:

Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

# Resposta

JavaScript

```javascript

let nome, ano, idade, aniver;

while (true){
    nome = window.prompt("Digite o nome completo: ");
    ano = Number(window.prompt("Digite o ano de nascimento:" ));

        if (ano >= 1922 && ano <= 2021) {
            idade = 2021 - ano;
            aniver = idade + 1;
            break;
        } else {
           window.alert("Data inválida");
        }
    }

    
window.alert("Nome: " + nomeCompleto);
window.alert("Idade: " + idade);
window.alert("Terá" + aniver + " anos em 2022");

```
