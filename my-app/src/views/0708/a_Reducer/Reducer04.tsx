import React, { useReducer, useRef, useState } from 'react';
import './Reducer04.css';

interface Product {
  id: number; // 제품의 고유 ID
  name: string; // 제품의 이름
  price: number; // 제품의 가격
}

interface CartItem extends Product {
  quantity: number; // 카트에 담긴 제품의 수량
}

interface State {
  cart: CartItem[]; // 카트에 담긴 아이템들의 배열
  total: number; // 카트에 담긴 총 가격
}

type Action =
  | { type: 'add'; product: Product } // 제품을 카트에 추가하는 액션
  | { type: 'remove'; productId: number } // 카트에서 제품을 제거하는 액션
  | { type: 'increment'; productId: number } // 카트에서 제품 수량을 증가시키는 액션
  | { type: 'decrement'; productId: number } // 카트에서 제품 수량을 감소시키는 액션
  | { type: 'clear' }; // 카트를 비우는 액션

const initialState: State = {
  cart: [], // 초기 카트
  total: 0, // 초기 총 가격
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add': {
      // 'add' 액션 타입인 경우
      const existingItem = state.cart.find((item) => item.id === action.product.id);
      // 카트에 이미 같은 ID를 가진 제품이 있는지 확인
      if (existingItem) {
        // 이미 제품이 있는 경우
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ), // 해당 제품의 수량을 증가
          total: state.total + action.product.price, // 총 가격을 증가
        };
      } else {
        // 카트에 해당 제품이 없는 경우
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }],
          // 새로운 제품을 카트에 추가
          total: state.total + action.product.price, // 총 가격을 증가
        };
      }
    }
    case 'remove': {
      // 'remove' 액션 타입인 경우
      const itemToRemove = state.cart.find((item) => item.id === action.productId);
      // 카트에서 제거할 제품을 찾기
      if (itemToRemove) {
        // 제품이 존재하는 경우
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.productId),
          // 해당 제품을 카트에서 제거
          total: state.total - itemToRemove.price * itemToRemove.quantity,
          // 총 가격에서 해당 제품의 총 가격을 뺌
        };
      }
      return state; // 제품이 없는 경우 현재 상태를 반환
    }
    case 'increment': {
      // 'increment' 액션 타입인 경우
      const item = state.cart.find((item) => item.id === action.productId)!;
      // 수량을 증가시킬 제품을 찾기
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ), // 해당 제품의 수량을 1 증가
        total: state.total + item.price, // 총 가격을 증가
      };
    }
    case 'decrement': {
      // 'decrement' 액션 타입인 경우
      const itemToDecrement = state.cart.find((item) => item.id === action.productId)!;
      // 수량을 감소시킬 제품을 찾기
      if (itemToDecrement.quantity > 1) {
        // 제품의 수량이 1보다 큰 경우
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ), // 해당 제품의 수량을 1 감소
          total: state.total - itemToDecrement.price, // 총 가격을 감소
        };
      } else {
        // 제품의 수량이 1인 경우
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.productId),
          // 해당 제품을 카트에서 제거
          total: state.total - itemToDecrement.price, // 총 가격을 감소
        };
      }
    }
    case 'clear':
      return initialState; // 'clear' 액션 타입인 경우 초기 상태로 돌아감
    default:
      throw new Error('Unhandled action type'); // 처리되지 않은 액션 타입인 경우 에러를 발생
  }
};

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
            type="number"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
            step={100}
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