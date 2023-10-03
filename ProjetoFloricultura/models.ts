export interface Clientes {
  id: number;
  rg: number;
  name: string;
  email: string;
}
export interface Produtos {
  id: number;
  name: string;
  price: number;
  estoque: number;
}
export interface Venda {
  id: number;
  client_id: number;
  product_id: number;
  quantity: number;
  total: number;
}
