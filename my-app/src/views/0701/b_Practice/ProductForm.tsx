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
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState(0);

  //#
  const [formState, setFormState] = useState<Omit<Product, 'id'>>({ name: '', price: 0 }); 

  //#
  const { name, price } = formState;

  //#
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // 입력 필드의 상태를 업데이트하는 함수 정의
    const { name, value } = e.target; // 이벤트 타겟에서 name과 value를 추출
    setFormState(prevState => ({
      ...prevState, // 이전 상태를 복사
      [name]: name === 'price' ? parseFloat(value) : value // 필드의 이름에 따라 상태 업데이트
    }));
  };

  const handleAddProduct = () => {
    // addProduct({ name, price });
    // setName('');
    // setPrice(0);

    //#
    addProduct({ name: name, price: price }); // addProduct 함수를 호출하여 상품 객체를 전달
    setFormState({ name: '', price: 0 }); // 입력 필드를 초기화
  }

  return (
    <div className={styles.productForm}>
      <input 
        type="text" 
        placeholder='Product Name'
        value={name}
        // onChange={e => setName(e.target.value)}
        //#
        onChange={handleInputChange}
        className={styles.input}
      />
      <input 
        type="number" 
        placeholder='Product Name'
        value={price}
        // onChange={e => setPrice(parseFloat(e.target.value))}
        //#
        onChange={handleInputChange}
        className={styles.input}
      />
      <button onClick={handleAddProduct} className={styles.button}>
        Add Product
      </button>
    </div>
  );
}

export default ProductForm;
