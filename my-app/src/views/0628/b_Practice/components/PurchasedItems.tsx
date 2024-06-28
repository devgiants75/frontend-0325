import React from "react";
import { ShoppingItem } from "../ShoppingListApp";

interface PurchasedItemsProps {
  items: ShoppingItem[];
  toggleItem: (index: number) => void;
  deleteItem: (index: number) => void;
}

const PurchasedItems = ({ items, toggleItem, deleteItem }: PurchasedItemsProps) => {

  const filteredItems = items.filter((item) => item.purchased);

  return (
    <div>
      <h4>완료된 항목</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredItems
          .map((item, index) => (
            <li key={index} style={styles.item}>
              <span>
                {item.description} (추가 시간: {' '})
                {item.timestamp.toLocaleTimeString()}
              </span>
              <div>
                <button 
                  style={styles.button} 
                  onClick={() => toggleItem(index)}
                >
                  {item.purchased ? '구매 취소' : '구매 완료'}
                </button>
                <button 
                  style={styles.button}
                  onClick={() => deleteItem(index)}
                >
                  삭제
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const styles = {
  item: {
    backgroundColor: "#e9f7ef",
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

export default PurchasedItems;
