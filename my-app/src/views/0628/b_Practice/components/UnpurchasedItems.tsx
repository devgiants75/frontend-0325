import React from "react";

const UnpurchasedItems = () => {
  return (
    <div>
      <h4>미완료 항목</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
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
