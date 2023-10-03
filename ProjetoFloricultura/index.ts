import express from "express";
import { Clientes, Produtos, Venda } from "./models";
const app = express();
app.use(express.json());
const clientes: Clientes[] = [];
const products: Produtos[] = [];
const vendas: Venda[] = [];
app.listen(3000, () => {
  console.log("Servidor executando na porta 3000");
});
app.get("/", (req, res) => {
  res.send('Floricultura Softex');
});
app.post("/clientes", (req, res) => {
  const client: Clientes = req.body;
  clientes.push(client);
  res.status(201).json(client);
});
app.get("/clientes", (req, res) => {
  res.status(200).json(clientes);
});
app.post("/produtos", (req, res) => {
  const product: Produtos = req.body;
  products.push(product);
  res.status(201).json(product);
});
app.get("/produtos", (req, res) => {
  res.status(200).json(products);
});
app.put("/produtos/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product: Produtos = req.body;
 
  const index = products.findIndex((p) => p.id === productId);
 
  if (index === -1) {
     res.status(404).json({ error: "Produto não encontrado" });
  } else {
     products[index] = product;
     res.status(200).json(product);
  }
 });
 app.delete("/produtos/:id", (req, res) => {
  const productId = parseInt(req.params.id);
 
  const index = products.findIndex((p) => p.id === productId);
 
  if (index === -1) {
     res.status(404).json({ error: "Produto não encontrado" });
  } else {
     products.splice(index, 1);
     res.status(204).end();
  }
 });
 app.post("/vendas", (req, res) => {
  const venda: Venda = req.body;

  const clienteExiste = clientes.some(client => client.id == venda.client_id);

  if (!clienteExiste) {
    return res.status(400).json({ error: "Cliente não cadastrado." });
  }
  
  const precoCorreto = products.some(product => product.price * venda.quantity === venda.total);

  if (!precoCorreto) {
     return res.status(400).json({ error: "Divergencia de preços." });
  };

  const produto = products.find(product => product.id === venda.product_id);

  if (!produto) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }
  
  const stock = produto.estoque;
  
  if (venda.quantity > stock) {
    return res.status(400).json({ error: "Quantidade de produtos vendidos é maior que o estoque disponível." });
  }

  produto.estoque -= venda.quantity;

  vendas.push(venda);
  res.status(201).json(venda);
});
app.get("/vendas", (req, res) => {
  res.status(200).json(vendas);
});
app.get("/clientes/:id/vendas", (req, res) => {
  const clienteId = parseInt(req.params.id);
  const totalVendas = calcularTotalDoCliente(clienteId);
  res.status(200).json({ totalVendas });
 });
function calcularTotalDoCliente(clientId: number): number {
  let totalVendas = 0;
 
  vendas.forEach((venda) => {
     if (venda.client_id === clientId) {
       totalVendas += venda.total;
     }
  });
 
  return totalVendas;
 }
