import React, { useState } from "react";
import UnpurchasedItems from "./components/UnpurchasedItems";
import PurchasedItems from "./components/PurchasedItems";


// 쇼핑 항목 인터페이스 정의
export interface ShoppingItem {
  description: string; // 쇼핑 항목 설명
  purchased: boolean; // 구매 여부
  timestamp: Date; // 생성 시각
}

const ShoppingListApp = () => {
  // 쇼핑 항목 리스트 상태 관리
  const [items, setItems] = useState<ShoppingItem[]>([]);
  // 입력된 아이템 상태 관리
  const [inputItem, setInputItem] = useState<string>('');

  //# 새로운 쇼핑 항목 생성 함수
  const addItem = () => {
    // 입력된 값이 존재한다면
    // >> 새로운 아이템 생성: newItem

    // 기존의 아이템 배열의 끝에 새로운 아이템 추가

    // 입력 창 초기화

    if (inputItem.trim() !== '') {
      const newItem: ShoppingItem = {
        description: inputItem,
        purchased: false,
        timestamp: new Date(),
      };

      setItems([...items, newItem]);
      setInputItem('');
    }
  }

  //# 쇼핑 항목 구매 상태 토글 함수
  const toggleItem = (index: number) => {
    // 새로운 배열을 담을 newItems 상수
    // : 기존의 아이템 배열을 순회하여 버튼이 클릭된 요소와 인덱스 번호가
    //   일치하는 경우 구매여부 속성(purchased)값을 토글(boolean값 토글)
    //   , 일치하지 않을 경우 해당 요소 그대로를 반환

    // newItems로 배열을 업데이트

    const toggleItem = (index: number) => {
      const newItems = items.map((item, idx) =>
        idx === index ? { ...item, purchased: !item.purchased } : item
      );

      setItems(newItems);
    };

  }

  //# 쇼핑 항목 삭제 함수
  const deleteItem = (index: number) => {
    // 새로운 배열을 담을 newItems 상수
    // : 버튼이 클릭된 요소의 index와 일치하지 않는 요소만 새로운 배열에 추가

    const newItems = items.filter((_, idx) => idx !== index);
    
    setItems(newItems);
  }

  return (
    <div style={styles.container}>
      <h3>쇼핑 목록 앱</h3>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          placeholder="쇼핑 항목을 입력하세요."
          style={styles.input}
        />
        <button onClick={addItem} style={styles.addButton}>
          항목 추가
        </button>
      </div>
      <hr />
      {/* 미완료 항목 */}
      <UnpurchasedItems />

      {/* 완료된 항목 */}
      <PurchasedItems />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#FFCCCC",
    width: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid black",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default ShoppingListApp;
