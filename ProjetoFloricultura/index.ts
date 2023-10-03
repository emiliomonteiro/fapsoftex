import express from "express";
import { Client, Product, Sale } from "./models";

const app = express();
app.use(express.json());

const clients: Client[] = [];
const products: Product[] = [];
const sales: Sale[] = [];

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send('Floricultura Softex');
});

app.post("/clientes", (req, res) => {
  const client: Client = req.body;
  clients.push(client);
  res.status(201).json(client);
});

app.get("/clientes", (req, res) => {
  res.status(200).json(clients);
});

app.post("/produtos", (req, res) => {
  const product: Product = req.body;
  products.push(product);
  res.status(201).json(product);
});

app.get("/produtos", (req, res) => {
  res.status(200).json(products);
});

app.put("/produtos/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product: Product = req.body;

  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    res.status(404).json({ error: "Product not found" });
  } else {
    products[index] = product;
    res.status(200).json(product);
  }
});

app.delete("/produtos/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    res.status(404).json({ error: "Product not found" });
  } else {
    products.splice(index, 1);
    res.status(204).end();
  }
});

app.post("/vendas", (req, res) => {
  const sale: Sale = req.body;

  const clientExists = clients.some((client) => client.id === sale.clientId);

  if (!clientExists) {
    return res.status(400).json({ error: "Client not registered." });
  }

  const correctPrice = products.some(
    (product) => product.price * sale.quantity === sale.total
  );

  if (!correctPrice) {
    return res.status(400).json({ error: "Price discrepancy." });
  }

  const product = products.find((product) => product.id === sale.productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const stock = product.stock;

  if (sale.quantity > stock) {
    return res
      .status(400)
      .json({ error: "Quantity of sold products exceeds available stock." });
  }

  product.stock -= sale.quantity;

  sales.push(sale);
  res.status(201).json(sale);
});

app.get("/vendas", (req, res) => {
  res.status(200).json(sales);
});

app.get("/clientes/:id/vendas", (req, res) => {
  const clientId = parseInt(req.params.id);
  const totalSales = calculateTotalSalesForClient(clientId);
  res.status(200).json({ totalSales });
});

function calculateTotalSalesForClient(clientId: number): number {
  let totalSales = 0;

  sales.forEach((sale) => {
    if (sale.clientId === clientId) {
      totalSales += sale.total;
    }
  });

  return totalSales;
}
