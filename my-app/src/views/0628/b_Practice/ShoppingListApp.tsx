import React, { useState } from "react";
import UnpurchasedItems from "./components/UnpurchasedItems";
import PurchasedItems from "./components/PurchasedItems";

// 쇼핑 항목 인터페이스 정의
export interface ShoppingItem {
  description: string;
  purchased: boolean;
  timestamp: Date;
}

const ShoppingListApp = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [item, setItem] = useState<string>("");

  const addItem = () => {
    if (item.trim() !== "") {
      const newItem: ShoppingItem = {
        description: item,
        purchased: false,
        timestamp: new Date(),
      };

      setItems([...items, newItem]);
      setItem("");
    }
  };

  const toggleItem = (index: number) => {
    const newItems = items.map((item, idx) =>
      idx === index ? { ...item, purchased: !item.purchased } : item
    );
    setItems(newItems);
  };

  const deleteItem = (index: number) => {
    const newItems = items.filter((_, idx) => idx !== index);
    setItems(newItems);
  };

  return (
    <div style={styles.container}>
      <h3>쇼핑 목록 앱</h3>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="쇼핑 항목을 입력하세요"
          style={styles.input}
        />
        <button onClick={addItem} style={styles.addButton}>
          항목 추가
        </button>
      </div>
      <hr />
      <UnpurchasedItems
        items={items}
        toggleItem={toggleItem}
        deleteItem={deleteItem}
      />
      <PurchasedItems
        items={items}
        toggleItem={toggleItem}
        deleteItem={deleteItem}
      />
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
