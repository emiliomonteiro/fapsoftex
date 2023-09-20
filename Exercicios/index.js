var Cliente = /** @class */ (function () {
    function Cliente(nome) {
        this.nome = nome;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    return Cliente;
}());
var cliente = new Cliente("Seu nome");
console.log(cliente.getNome());
