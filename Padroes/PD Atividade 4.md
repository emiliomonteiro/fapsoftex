# Resposta

```javascript
class Galinha {
    cacarejar() {
        throw new Error("Método 'cacarejar' deve ser implementado por subclasses");
    }
}

class GalinhaComum extends Galinha {
    cacarejar() {
        console.log("Cocoricó!");
    }
}

class Pato {
    grasnar() {
        throw new Error("Método 'grasnar' deve ser implementado por subclasses");
    }
}

class PatoComum extends Pato {
    grasnar() {
        console.log("Quack!");
    }
}

class AdaptadorPato extends Galinha {
    constructor(pato) {
        super();
        this._pato = pato;
    }

    cacarejar() {
        this._pato.grasnar();
    }
}

class AdaptadorPatoDemo {
    static executar() {
        const galinhaComum = new GalinhaComum();
        const patoComum = new PatoComum();
        const adaptadorPato = new AdaptadorPato(patoComum);

        console.log("Galinha Comum:");
        galinhaComum.cacarejar();

        console.log("\nPato Comum:");
        patoComum.grasnar();

        console.log("\nAdaptador Pato usado como Galinha:");
        adaptadorPato.cacarejar();
    }
}

AdaptadorPatoDemo.executar();



```

