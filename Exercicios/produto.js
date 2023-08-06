const produto = {
  nome: "ipad",
  preco: 5600,
  desconto: 0.15,
  precoComDesconto: function () {
    // this -> equivalente a falar produto.preco, se referente ao objeto
    return this.preco * (1 - this.desconto);
  },
};

console.log(
  `Valor final do Produto: ${produto.nome} R$${produto.precoComDesconto()}.`
);
