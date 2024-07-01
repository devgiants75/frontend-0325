import React, { useState } from 'react';

import styles from './styles/ProductItem.module.css';
import { Product } from './types/product.type';

/*
개별 상품을 표시하고, 수정 모드와 보기 모드 간 전환이 가능
수정 모드에서는 상품 정보를 입력받아 업데이트
삭제 버튼을 클릭하면 해당 상품이 삭제
*/

interface ProductItemProps {
  product: Product;
  updateProduct: (id: number, updatedProduct: Omit<Product, 'id'>) => void;
  removeProduct: (id: number) => void;
}

function ProductItem({ product, updateProduct, removeProduct }: ProductItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  // 상품 정보를 업데이트하는 함수 정의
  const handleUpdate = () => {
    updateProduct(product.id, {name, price});
    setIsEditing(false); // 수정 모드 종료
  }

  return (
    <div className={styles.productItem}>
      {isEditing ? (
        // 수정모드 인 경우 렌더링 
        <div className={styles.editing}>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            className={styles.input} 
          />
          <input 
            type="number" 
            value={price}
            onChange={e => setPrice(parseFloat(e.target.value))}
            className={styles.input}
          />
          <button onClick={handleUpdate} className={styles.button}>
            Save
          </button>
        </div>
      ) : (
        // 보기모드 인 경우 렌더링
        <div className={styles.view}>
          <span className={styles.name}>{product.name}</span>
          <span className={styles.price}>{product.price}</span>
          <button 
            onClick={() => setIsEditing(true)} 
            className={styles.button}
          >
            Edit
          </button>
          <button 
            onClick={() => removeProduct(product.id)} 
            className={styles.button}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
