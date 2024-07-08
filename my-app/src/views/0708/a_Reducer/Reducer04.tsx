import React from 'react'

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
  
  return (
    <div>
      
    </div>
  )
}