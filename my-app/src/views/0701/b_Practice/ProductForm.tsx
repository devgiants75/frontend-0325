import React from 'react';

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
  

  return (
    <div className={styles.productForm}>
      
    </div>
  );
}

export default ProductForm;
