# Resposta

```javascript
class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }

  clone() {}

  represent() {}
}

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }

  clone() {
    return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
  }

  represent() {
    return `Carro: ${this.modelo} ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Portas: ${this.numeroPortas}`;
  }
}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, estilo) {
    super(modelo, marca, cor, numeroRodas);
    this.estilo = estilo;
  }

  clone() {
    return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.estilo);
  }

  represent() {
    return `Moto: ${this.modelo} ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Estilo: ${this.estilo}`;
  }
}

class Aplicacao {
  static criarVeiculos() {
    const carroPrototype = new Carro('Sedan', 'Toyota', 'Preto', 4, 4);
    const motoPrototype = new Moto('Esportiva', 'Honda', 'Vermelha', 2, 'Esportiva');

    const veiculos = [];

    for (let i = 0; i < 3; i++) {
      veiculos.push(carroPrototype.clone());
    }

    for (let i = 0; i < 3; i++) {
      veiculos.push(motoPrototype.clone());
    }

    return veiculos;
  }

  static clonarVeiculos(veiculos) {
    return veiculos.map((veiculo) => veiculo.clone());
  }

  static representarVeiculos(veiculos) {
    for (const veiculo of veiculos) {
      console.log(veiculo.represent());
    }
  }
}

const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);

console.log('Veículos Originais:');
Aplicacao.representarVeiculos(veiculos);

console.log('\n----------------\n');

console.log('Veículos Clonados:');
Aplicacao.representarVeiculos(clones);



```

