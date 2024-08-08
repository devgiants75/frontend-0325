import React, { useEffect, useState } from "react";
import { Item } from "../types";
import axios from "axios";

export default function MockServer() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  //! 데이터 가져오기(fetch) - Read
  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3001/items");
    setItems(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  //! 데이터 생성 - Create
  const handleCreate = () => {

  }

  //! 데이터 수정 - Update
  const handleUpdate = () => {

  }

  //! 데이터 삭제 - Delete
  const handleDelete = (id: number) => {

  }

  const selectItem = (item: Item) => {

  }

  return (
    <div>
      <h2>Mock Server CRUD</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={selectedItem ? handleUpdate : handleCreate}>
          {selectedItem ? "Update" : "Create"}
        </button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => selectItem(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
