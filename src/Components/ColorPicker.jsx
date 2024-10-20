import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff'); // Default to white

  const handleChange = (event) => {
    setColor(event.target.value);
    document.body.style.backgroundColor = event.target.value; // Change background color
  };

  return (
    <div className="flex items-center justify-center h-full mt-8">
      <h2>Select Background Color</h2>
      <input 
        type="color" 
        value={color} 
        onChange={handleChange} 
      />
    </div>
  );
};

export default ColorPicker;
