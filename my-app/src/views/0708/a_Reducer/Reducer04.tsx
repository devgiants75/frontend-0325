import React, { useReducer, useRef, useState } from 'react';
import './Reducer04.css';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface State {
  cart: CartItem[];
  total: number;
}

type Action = 
  | { type: 'add'; product: Product }
  | { type: 'remove'; productId: number }
  | { type: 'increment'; productId: number }
  | { type: 'decrement'; productId: number }
  | { type: 'clear' };

const initialState: State = {
  cart: [],
  total: 0
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add':
      const existingItem = state.cart.find((item) => item.id === action.product.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) => 
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.product.price,
        };
      } else {
        return {
          ...state,
          cart: [ ...state.cart, { ...action.product, quantity: 1 }],
          total: state.total + action.product.price
        };
      }

    case 'remove':
      const itemToRemove = state.cart.find((item) => item.id === action.productId);
      if (itemToRemove) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.productId),
          total: state.total - itemToRemove.price * itemToRemove.quantity,
        };
      }
      return state;

    case 'increment':
      const item = state.cart.find((item) => item.id === action.productId)!;
      return {
        ...state,
        cart: state.cart.map((item) => 
          item.id === action.productId
            ? { ...item, quantity: item.quantity + 1}
            : item
        ),
        total: state.total + item.price,
      };

    case 'decrement':
      const itemToDecrement = state.cart.find((item) => item.id === action.productId)!;
      if (itemToDecrement.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) => 
            item.id === action.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: state.total - itemToDecrement.price,
        }
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.productId),
          total: state.total - itemToDecrement.price,
        };
      }

    case 'clear':
      return initialState;

    default: 
      throw new Error('Unhandled action type');
  }
}

export default function Reducer04() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0
  });

  const productIdRef = useRef(4);

  const handleAddProduct = () => {
    const product = {
      id: productIdRef.current,
      ...newProduct
    };

    setProducts([...products, product]);
    setNewProduct({
      name: '',
      price: 0
    });

    productIdRef.current += 1;
  }
  
  return (
    <div>
      <hr />
      <div className="shopping-cart">
        <h2>Products</h2>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              {product.name} - ${product.price}
              <button onClick={() => dispatch({ type: "add", product })}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>

        <h2>Add New Product</h2>
        <div className="add-product">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>

        <h2>Cart</h2>
        <ul className="cart-list">
          {state.cart.map((item) => (
            <li key={item.id} className="cart-item">
              {item.name} - ${item.price} x {item.quantity}
              <button
                onClick={() =>
                  dispatch({ type: "increment", productId: item.id })
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "decrement", productId: item.id })
                }
              >
                -
              </button>
              <button
                onClick={() => dispatch({ type: "remove", productId: item.id })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p>Total: ${state.total}</p>
        <button onClick={() => dispatch({ type: "clear" })}>
          Clear Cart
        </button>
      </div>
      <hr />
    </div>
  );
}