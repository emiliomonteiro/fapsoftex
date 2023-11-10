# Resposta

```javascript
class Sanduiche {
    custo() {
        throw new Error("Método 'custo' deve ser implementado por subclasses");
    }
}

class FrangoAssado extends Sanduiche {
    custo() {
        return 4.50;
    }
}

class Decorator extends Sanduiche {
    constructor(sanduiche) {
        super();
        this._sanduiche = sanduiche;
    }

    custo() {
        return this._sanduiche.custo();
    }
}

class Pepperoni extends Decorator {
    custo() {
        return this._sanduiche.custo() + 0.99;
    }
}

class QueijoMussarelaRalado extends Decorator {
    custo() {
        return this._sanduiche.custo() + 2.00;
    }
}

function main() {
    const sanduicheBase = new FrangoAssado();
    const sanduicheDecorado = new QueijoMussarelaRalado(new Pepperoni(sanduicheBase));

    console.log(`Sanduíche de Frango Assado com Pepperoni e Queijo Mussarela Ralado custa $${sanduicheDecorado.custo().toFixed(2)}.`);
}

main();


```

