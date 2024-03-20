import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addItem = () => {
    if (inputValue.trim() !== '') {
      if (editingIndex !== null) {
        const newItems = [...items];
        newItems[editingIndex] = inputValue;
        setItems(newItems);
        setEditingIndex(null);
      } else {
        setItems([...items, inputValue]);
      }
      setInputValue('');
    }
  };

  const startEditing = (index) => {
    setInputValue(items[index]);
    setEditingIndex(index);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>CRUD in React</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>{editingIndex !== null ? 'Edit' : 'Add'}</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
