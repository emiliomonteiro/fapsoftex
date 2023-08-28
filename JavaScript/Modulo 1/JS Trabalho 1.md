# Proposta:

Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. Agora, vamos criar variáveis do tipo boolean, BigInt, string e symbol.
No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser UNDEFINED.
Em seguida, vamos deixar essas variáveis com valores nulos e imprimir. Por fim, cada uma deve receber um dos tipos como atribuição e os seus respectivos valores devem ser impressos na tela.

# Resposta

```JavaScript

let bool
let bigInt
let string
let symbol

console.log(bool, bigInt, string, symbol);

bool = null;
bigInt = null;
string = null;
symbol = null;

console.log(bool, bigInt, string, symbol);

bool = Boolean("true");
bigInt = BigInt("9007199254740991");
string = String("text");
symbol = Symbol("foo");

console.log(bool, bigInt, string, symbol);

```
