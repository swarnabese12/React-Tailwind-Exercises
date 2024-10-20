import React, { useState } from "react";

// const todos = [
//   'Buy groceries',
//   'Walk the dog',
//   'Read a book',
//   'Write blog post',
//   'Organize the closet'
// ];

const TodoList = () => {
  const [items, setItems] = useState([
    "Buy groceries",
    "Walk the dog",
    "Read a book",
    "Write blog post",
    "Organize the closet",
  ]);
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    console.log("newItem",newItem)
    if (newItem.trim()) {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem("");
    }
  };

  const handleRemove = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const ItemsList = ({ items, onRemove }) => {
    return (
      <div className="items-list">
        <h2 className="text-xl mb-4">Todo Items</h2>

        <div className="flex mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="border p-1 rounded mr-2"
            placeholder="New Todo"
          />
          <button
            onClick={handleAdd}
            className="p-1 bg-blue-500 text-white rounded"
          >
            Add New
          </button>
        </div>

        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{item}</span>
              </div>
              <div>
                <button
                  onClick={() => onRemove(index)}
                  className="p-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="w-124 h-724 flex items-center justify-center mt-4">
      <ItemsList items={items} onRemove={handleRemove} />
    </div>
  );
};

export default TodoList;
