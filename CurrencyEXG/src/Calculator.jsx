import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input+value);
    }
  };

  const clearInput = () => {
    setInput("0");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="w-80 mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-cyan-100">
      <div className="mb-4 p-3 bg-white text-right text-xl font-mono border rounded-lg">
        {input}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
            className="p-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg text-lg"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={clearInput}
          className="col-span-4 p-3 bg-red-400 hover:bg-red-500 text-white rounded-lg text-lg"
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;