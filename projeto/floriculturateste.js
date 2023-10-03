class pedidos{
    constructor(cliente){
        this.data = Date.now();
        this.cliente = cliente;
        this.itensPedido = [];
        this.valor = 0.0;
    }

    addItem(itemPedido) {
        this.itensPedido.push(itemPedido);
        this.valor += itemPedido.precoInd * itemPedido.qtd;
    }
}

class produtos{
    constructor(produto, precoInd, qtd){
        this.produto = produto;
        this.precoInd = precoInd;
        this.qtd = qtd;
    }
}

class clientes{
    constructor(nome, telefone, rg, endereco){
        this.nome = nome;
        this.telefone = telefone;
        this.rg = rg;
        this.endereco = endereco;
    }
}

var filaPedidos = [];

var clienteTeste = new clientes("Fulano", "(81)912345678", 1234567, "Rua Beltrano, n59");
var produtoTeste = new produtos("Buquê de Rosas", 35, 1);
var pedidoFulano = new pedidos(clienteTeste);
pedidoFulano.addItem(produtoTeste);

filaPedidos.push(pedidoFulano);

console.log (clienteTeste);
console.log (produtoTeste);
console.log (pedidoFulano);
console.log(filaPedidos);
