# Resposta

```javascript
try {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (numero2 === 0) {
        throw new Error("Divisão por zero não é permitida!");
    }

    let resultado = numero1 / numero2;
    console.log(`O resultado da divisão é: ${resultado}`);

} catch (erro) {
    console.error(`Erro: ${erro.message}`);

} finally {
    console.log("O bloco finally é sempre executado.");
}

```

