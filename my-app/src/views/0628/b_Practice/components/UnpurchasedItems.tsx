import React from "react";
import { ShoppingItem } from "../ShoppingListApp";


interface UnpurchasedItemsProps {
  items: ShoppingItem[];
  toggleItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

const UnpurchasedItems = ({ items, toggleItem, deleteItem }: UnpurchasedItemsProps) => {
  return (
    <div>
      <h4>미완료 항목</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items
          // purchased('구매된' 여부 확인 >> false값이 담겨 있어야 미완료 항목)
          .filter((item) => !item.purchased)
          .map((item) => (
            <li key={item.id} style={styles.item}>
              <span>
                {item.description} (추가 시간: {' '})
                {item.timestamp.toLocaleTimeString()}
              </span>
              <div>
                <button 
                  style={styles.button} 
                  onClick={() => toggleItem(item.id)}
                >
                  {item.purchased ? '구매 취소' : '구매 완료'}
                </button>
                <button 
                  style={styles.button}
                  onClick={() => deleteItem(item.id)}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

const styles = {
  item: {
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #ccc",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginRight: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "3px",
  },
  deleteButton: {
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "3px",
  },
};

export default UnpurchasedItems;
