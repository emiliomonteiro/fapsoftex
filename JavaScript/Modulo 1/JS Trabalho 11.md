# Resposta

```javascript
try {
    // Solicitar números ao usuário
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Verificar se o segundo número é zero
    if (numero2 === 0) {
        throw new Error("Divisão por zero não é permitida!");
    }

    // Realizar a divisão e imprimir o resultado
    let resultado = numero1 / numero2;
    console.log(`O resultado da divisão é: ${resultado}`);

} catch (erro) {
    // Capturar e tratar a exceção
    console.error(`Erro: ${erro.message}`);

} finally {
    // Código a ser executado independentemente de haver ou não uma exceção
    console.log("O bloco finally é sempre executado.");
}

```

