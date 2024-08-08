import React from 'react';
import { CartItem, Product } from '../types';

type CartPageProps = {
  cart: CartItem[];
  products: Product[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  getTotalPrice: () => number;
};

const CartPage: React.FC<CartPageProps> = ({ cart, products, updateQuantity, removeFromCart, getTotalPrice }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => {
          const product = products.find(p => p.id === item.productId);
          return (
            <li key={item.id}>
              {product?.name} - Quantity: {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <h2>Total Price: ${getTotalPrice()}</h2>
    </div>
  );
};

export default CartPage;
