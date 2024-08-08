import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";
import { CartItem, Product } from "../types";

export default function Main() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const fetchCart = async () => {
    const response = await axios.get("http://localhost:3001/cart");
    setCart(response.data);
  };

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const addToCart = async (productId: number) => {
    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      await axios.put(
        `http://localhost:3001/cart/${existingItem.id}`,
        updatedItem
      );
      setCart(
        cart.map((item) => (item.id === existingItem.id ? updatedItem : item))
      );
    } else {
      const newItem = { productId, quantity: 1 };
      const response = await axios.post("http://localhost:3001/cart", newItem);
      setCart([...cart, response.data]);
    }
  };

  const updateQuantity = async (id: number, quantity: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      const updatedItem = { ...item, quantity };
      await axios.put(`http://localhost:3001/cart/${id}`, updatedItem);
      setCart(cart.map((i) => (i.id === id ? updatedItem : i)));
    }
  };

  const removeFromCart = async (id: number) => {
    await axios.delete(`http://localhost:3001/cart/${id}`);
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="cart"
          element={
            <CartPage
              cart={cart}
              products={products}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              getTotalPrice={getTotalPrice}
            />
          }
        />
        <Route
          path="products"
          element={<ProductsPage addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}
