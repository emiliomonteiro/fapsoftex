# Proposta:

Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

# Resposta

JavaScript

```javascript


var candidato_X = 0;
var candidato_Y = 0;
var candidato_Z = 0;
var branco = 0;
var nulo = 0;

while (true) {
    let votos = window.prompt("Digite o número do candidato: \n para candidato_X => 889 \n para candidato_Y => 847 \n para candidato_Z => 515  \n ou 0 se deseja votar em branco.");
    
    if (votos === null) {
        break;
    }
    
    if (isNaN(votos) || voto === "") {
        alert("Opção inválida, digite o número do candidato ou 0 para branco.");
        continue;
    }

    votos = Number(votos);

    switch (votos) {
        default:
            nulo++;
            break;
        case 889:
            candidato_X++;
            break;
        case 847:
            candidato_Y++;
            break;
        case 515:
            candidato_Z++;
            break;
        case 0:
            branco++;
            break;
    }
    
    let continuar = confirm("Continuar a votação?");
    if (!continuar) {
        break;
    }
}

var total = candidato_X + candidato_Y + candidato_Z + branco + nulo;

function vencedor(candidato_X, candidato_Y, candidato_Z) {
    if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
        return "Candidato_X";
    } else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
        return "Candidato_Y";
    } else if (candidato_Z > candidato_X && candidato_Z > candidato_Y) {
        return "Candidato_Z";
    } else {
        return "Erro na apuração.";
    }
    }

window.alert(`Vencedor: ${vencedor(candidato_X, candidato_Y, candidato_Z)}`);
window.alert(`Candidato_X: ${candidato_X} votos`);
window.alert(`Candidato_Y: ${candidato_Y} votos`);
window.alert(`Candidato_Z: ${candidato_Z} votos`);
window.alert(`Brancos: ${branco} votos`);
window.alert(`Nulos: ${nulo} votos`);

```
