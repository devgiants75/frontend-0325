import React from "react";
import { ShoppingItem } from "../ShoppingListApp"; // 추후 컴포넌트 파일에서 import 해주세요.

interface UnpurchasedItemsProps {
  items: ShoppingItem[];
  toggleItem: (index: number) => void;
  deleteItem: (index: number) => void;
}

const UnpurchasedItems: React.FC<UnpurchasedItemsProps> = ({
  items,
  toggleItem,
  deleteItem,
}) => {
  return (
    <div>
      <h4>미완료 항목</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items
          .filter((item) => !item.purchased)
          .map((item, index) => (
            <li key={index} style={styles.item}>
              <span>
                {item.description} (추가 시간:{" "}
                {item.timestamp.toLocaleTimeString()})
              </span>
              <div>
                <button style={styles.button} onClick={() => toggleItem(index)}>
                  {item.purchased ? "구매 취소" : "구매 완료"}
                </button>
                <button
                  style={styles.deleteButton}
                  onClick={() => deleteItem(index)}
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
