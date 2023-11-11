# Resposta

```javascript
class Observer {
    update() {
        throw new Error("O método 'update' deve ser implementado por subclasses.");
    }
}

class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}

class Editor extends Observable {
    open() {
        console.log("Editor aberto.");
        this.notifyObservers();
    }
}

class TextEditor extends Observer {
    constructor() {
        super();
        this.lines = [];
    }

    insertLine(lineNumber, text) {
        this.lines.splice(lineNumber - 1, 0, text);
        console.log(`Linha ${lineNumber} inserida: ${text}`);
    }

    removeLine(lineNumber) {
        const removedLine = this.lines.splice(lineNumber - 1, 1);
        console.log(`Linha ${lineNumber} removida: ${removedLine}`);
    }

    update() {
        console.log("Evento 'open' disparado. TextEditor pronto para receber linhas de texto.");
        this.receiveTextLines();
    }

    receiveTextLines() {
        console.log("Insira as linhas de texto (Digite 'EOF' para encerrar):");

        let lineNumber = 1;
        let userInput = prompt(`Linha ${lineNumber}: `);

        while (userInput !== "EOF") {
            this.insertLine(lineNumber, userInput);
            lineNumber++;
            userInput = prompt(`Linha ${lineNumber}: `);
        }

        console.log("Evento 'save' disparado. Conteúdo salvo e exibido:");
        this.notifyObservers();
    }

    displayContent() {
        console.log(this.lines.join('\n'));
    }
}

const textEditor = new TextEditor();
const editor = new Editor();

editor.addObserver(textEditor);
editor.open();
textEditor.displayContent();


```

