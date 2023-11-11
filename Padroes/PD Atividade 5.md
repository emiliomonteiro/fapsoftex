# Resposta

```javascript
class OperationStrategy {
    execute(num1, num2) {
        throw new Error("O método 'execute' deve ser implementado por subclasses.");
    }
}

class AdditionStrategy extends OperationStrategy {
    execute(num1, num2) {
        return num1 + num2;
    }
}

class SubtractionStrategy extends OperationStrategy {
    execute(num1, num2) {
        return num1 - num2;
    }
}

class MultiplicationStrategy extends OperationStrategy {
    execute(num1, num2) {
        return num1 * num2;
    }
}

class Calculator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(num1, num2) {
        return this.strategy.execute(num1, num2);
    }
}

function runCalculator() {
    const calculator = new Calculator();

    const num1 = parseInt(prompt("Digite o primeiro número:"));
    const num2 = parseInt(prompt("Digite o segundo número:"));
    const operation = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");

    let strategy;

    switch (operation) {
        case '+':
            strategy = new AdditionStrategy();
            break;
        case '-':
            strategy = new SubtractionStrategy();
            break;
        case '*':
            strategy = new MultiplicationStrategy();
            break;
        default:
            console.log("Operação inválida.");
            return;
    }

    calculator.setStrategy(strategy);

    const result = calculator.calculate(num1, num2);
    console.log(`O resultado da operação é: ${result}`);
}

runCalculator();


```

