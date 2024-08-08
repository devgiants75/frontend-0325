import React, { useEffect, useRef, useState } from "react";
import { Item } from "../types";
import axios from "axios";

export default function MockServer() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const nextId = useRef(4);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  //! 데이터 가져오기(fetch) - Read
  // >> axios.get
  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3001/items");
    setItems(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  //! 데이터 생성 - Create
  // >> axios.post
  const handleCreate = async () => {
    const response = await axios.post("http://localhost:3001/items", {
      id: nextId.current,
      name,
      description,
    });

    setItems([...items, response.data]);
    setName("");
    setDescription("");

    nextId.current += 1;
  };

  //! 데이터 수정 - Update
  // axios.put
  const handleUpdate = async () => {
    if (selectedItem) {
      const response = await axios.put(
        `http://localhost:3001/items/${selectedItem.id}`,
        {
          name,
          description,
        }
      );

      setItems(
        items.map((item) =>
          item.id === selectedItem.id ? response.data : item
        )
      );
      setSelectedItem(null);
      setName('');
      setDescription('');
    }
  };

  //! 데이터 삭제 - Delete
  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3001/items/${id}`);
    setItems(items.filter(item => item.id !== id));
  };

  const selectItem = (item: Item) => {
    setSelectedItem(item);
    setName(item.name);
    setDescription(item.description);
  };

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
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={selectedItem ? handleUpdate : handleCreate}>
          {selectedItem ? "Update" : "Create"}
        </button>
      </div>
      <ul>
        {items.map((item) => (
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
