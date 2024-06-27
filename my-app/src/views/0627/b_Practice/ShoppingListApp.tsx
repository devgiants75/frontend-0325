import React from "react";
import UnpurchasedItems from "./components/UnpurchasedItems";
import PurchasedItems from "./components/PurchasedItems";

// 쇼핑 항목 인터페이스 정의


const ShoppingListApp = () => {
  
  return (
    <div style={styles.container}>
      <h3>쇼핑 목록 앱</h3>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="쇼핑 항목을 입력하세요"
          style={styles.input}
        />
        <button style={styles.addButton}>
          항목 추가
        </button>
      </div>
      <hr />
      <UnpurchasedItems

      />
      <PurchasedItems

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
