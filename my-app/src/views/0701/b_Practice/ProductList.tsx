import React from 'react';

import styles from './styles/ProductList.module.css';
import { Product } from './types/product.type';
import ProductItem from './ProductItem';

/*
products 배열을 받아 map을 사용하여 각 상품을 ProductItem 컴포넌트로 렌더링
*/

interface ProductListProps {
  products: Product[];
  updateProduct: (id: number, updatedProduct: Omit<Product, 'id'>) => void;
  removeProduct: (id: number) => void;
}

function ProductList({ products, updateProduct, removeProduct }: ProductListProps) {

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductItem 
          key={product.id}
          product={product}
          updateProduct={updateProduct}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
