import React, { useRef, useState } from 'react'
import styles from './styles/ProductApp.module.css';

import { Product } from './types/product.type';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

/*
useState를 사용하여 products 상태를 관리

useRef를 사용하여 각 상품의 고유 ID를 생성

addProduct, updateProduct, removeProduct 함수를 통해 상태를 업데이트

ProductForm 컴포넌트를 통해 새로운 상품을 추가하고, ProductList 컴포넌트를 통해 상품 목록을 표시
*/

export default function ProductApp() {
  const [products, setProducts] = useState<Product[]>([]);

  //# useRef를 사용하여 다음 상품의 고유 ID를 생성 - 초기값 1
  const nextId = useRef(1);

  // 매개변수의 product는 name과 price의 속성만을 가지는 객체 타입
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      id: nextId.current,
      ...product
    }

    setProducts([...products, newProduct]);
    nextId.current += 1;
  };

  const updateProduct = (id: number, updatedProduct: Omit<Product, 'id'>) => {
    setProducts(
      products.map(product =>
        product.id === id ? { id, ...updatedProduct } : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts(
      products.filter(product => product.id !== id)
    );
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Product Management</h1>
      
      <ProductForm 
        addProduct={addProduct}
      />
      <ProductList 
        products={products}
        updateProduct={updateProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}
