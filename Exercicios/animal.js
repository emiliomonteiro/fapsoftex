const prompt = require("prompt-sync")({ sigint: true });

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("O animal faz um som.");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("O cachorro late.");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("O gato mia.");
    }
}

function makeAnimalSound(animal) {
    animal.makeSound();
}
let nomegato = prompt("Qual o nome do Gato?");
let nomecachorro = prompt("Qual o nome do cachorro?");
const dog = new Dog(nomecachorro);
const cat = new Cat(nomegato);

console.log(dog.name);
makeAnimalSound(dog);
console.log(cat.name);
makeAnimalSound(cat);
