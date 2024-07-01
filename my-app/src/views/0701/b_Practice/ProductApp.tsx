import React from 'react'

import styles from './ProductApp.module.css';

/*
useState를 사용하여 products 상태를 관리

useRef를 사용하여 각 상품의 고유 ID를 생성

addProduct, updateProduct, removeProduct 함수를 통해 상태를 업데이트

ProductForm 컴포넌트를 통해 새로운 상품을 추가하고, ProductList 컴포넌트를 통해 상품 목록을 표시

*/


export default function ProductApp() {

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Product Management</h1>
      
    </div>
  );
}
