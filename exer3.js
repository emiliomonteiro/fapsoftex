const numeros = [1, 2, 3, 4, 5];
let produto = {
  nome: "Caneta",
  preco: 1.99,
  desconto: 0.2,
};

console.log(numeros[0]);
//forma não mais utilizada de acessar atributo do objeto
console.log(produto["nome"]);
console.log(produto["preco"]);
console.log(produto["desconto"]);

//utilizado para acessar atributo do objeto
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
