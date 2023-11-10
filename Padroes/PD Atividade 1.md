# Resposta

```javascript
class Computer {
  get RAM() {}
  get HDD() {}
  get CPU() {}
  get type() {}

  toString() {
    return `Type: ${this.type}, RAM: ${this.RAM} GB, HDD: ${this.HDD} GB, CPU: ${this.CPU} GHz`;
  }
}

class PC extends Computer {
  constructor(RAM, HDD, CPU) {
    super();
    this._RAM = RAM;
    this._HDD = HDD;
    this._CPU = CPU;
    this._type = 'PC';
  }

  get RAM() {
    return this._RAM;
  }

  get HDD() {
    return this._HDD;
  }

  get CPU() {
    return this._CPU;
  }

  get type() {
    return this._type;
  }
}

class Server extends Computer {
  constructor(RAM, HDD, CPU) {
    super();
    this._RAM = RAM;
    this._HDD = HDD;
    this._CPU = CPU;
    this._type = 'Server';
  }

  get RAM() {
    return this._RAM;
  }

  get HDD() {
    return this._HDD;
  }

  get CPU() {
    return this._CPU;
  }

  get type() {
    return this._type;
  }
}

class ComputerFactory {
  createComputer(RAM, HDD, CPU, type) {
    if (type === 'PC') {
      return new PC(RAM, HDD, CPU);
    } else if (type === 'Server') {
      return new Server(RAM, HDD, CPU);
    } else {
      throw new Error('Tipo de computador desconhecido');
    }
  }
}

const factory = new ComputerFactory();
const myPC = factory.createComputer(8, 512, 3.0, 'PC');
const myServer = factory.createComputer(16, 1024, 2.5, 'Server');

console.log(myPC.toString());
console.log(myServer.toString());


```

