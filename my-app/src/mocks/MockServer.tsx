import React, { useEffect, useRef, useState } from "react";
import { CartItem, Item, Product } from "../types";
import axios from "axios";

export default function MockServer() {
  //# 1. json-server 예제
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const nextId = useRef(4);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  //# 2. 장바구니 예제
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  //* ===============================//
  //! 데이터 가져오기(fetch) - Read
  // >> axios.get
  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3001/items");
    setItems(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  //! 데이터 생성 - Create
  // >> axios.post
  const handleCreate = async () => {
    const response = await axios.post("http://localhost:3001/items", {
      id: nextId.current,
      name,
      description,
    });

    setItems([...items, response.data]);
    setName("");
    setDescription("");

    nextId.current += 1;
  };

  //! 데이터 수정 - Update
  // axios.put
  const handleUpdate = async () => {
    if (selectedItem) {
      const response = await axios.put(
        `http://localhost:3001/items/${selectedItem.id}`,
        {
          name,
          description,
        }
      );

      setItems(
        items.map((item) =>
          item.id === selectedItem.id ? response.data : item
        )
      );
      setSelectedItem(null);
      setName("");
      setDescription("");
    }
  };

  //! 데이터 삭제 - Delete
  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3001/items/${id}`);
    setItems(items.filter((item) => item.id !== id));
  };

  const selectItem = (item: Item) => {
    setSelectedItem(item);
    setName(item.name);
    setDescription(item.description);
  };

  //* ===============================//
  //& 장바구니 구현
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");
    setProducts(response.data);
  };

  const fetchCart = async () => {
    const response = await axios.get("http://localhost:3001/cart");
    setCart(response.data);
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
      <h2>Mock Server CRUD</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={selectedItem ? handleUpdate : handleCreate}>
          {selectedItem ? "Update" : "Create"}
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => selectItem(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <hr />
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>

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
}
