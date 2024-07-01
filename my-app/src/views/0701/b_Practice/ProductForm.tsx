import React, { useState } from 'react';

import styles from './styles/ProductForm.module.css';
import { Product } from './types/product.type';

/*
새로운 상품을 추가할 수 있는 입력 폼을 제공
입력 필드를 통해 상품 이름과 가격을 입력받아 추가
*/

interface ProductFormProps {
  addProduct: (product: Omit<Product, 'id'>) => void;
}

function ProductForm({ addProduct }: ProductFormProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleAddProduct = () => {
    addProduct({ name, price });
    setName('');
    setPrice(0);
  }

  return (
    <div className={styles.productForm}>
      <input 
        type="text" 
        placeholder='Product Name'
        value={name}
        onChange={e => setName(e.target.value)}
        className={styles.input}
      />
      <input 
        type="number" 
        placeholder='Product Name'
        value={price}
        onChange={e => setPrice(parseFloat(e.target.value))}
        className={styles.input}
      />
      <button onClick={handleAddProduct} className={styles.button}>
        Add Product
      </button>
    </div>
  );
}

export default ProductForm;
