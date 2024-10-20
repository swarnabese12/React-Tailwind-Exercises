import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <h3>Counter:</h3>
      <div className="w-24 h-24 bg-green-500 flex items-center justify-center mb-4 ml-1">
        <h1 className="text-white text-xl font-bold">{count}</h1>
      </div>

      <button
        onClick={increment}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition ml-4"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition ml-4"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
