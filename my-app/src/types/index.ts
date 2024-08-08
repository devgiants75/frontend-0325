export type Item = {
  id: number;
  name: string;
  description: string;
}

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type CartItem = {
  id: number;
  productId: number;
  quantity: number;
};