import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types';

type ProductsPageProps = {
  addToCart: (productId: number) => void;
};

const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3001/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
