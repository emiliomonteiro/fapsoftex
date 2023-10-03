export interface Client {
  id: number;
  rg: number;
  name: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number; 
}

export interface Sale {
  id: number;
  clientId: number; 
  productId: number; 
  quantity: number;
  total: number;
}
