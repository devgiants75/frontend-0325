import React from "react";

const PurchasedItems = () => {
  return (
    <div>
      <h4>완료된 항목</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
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
