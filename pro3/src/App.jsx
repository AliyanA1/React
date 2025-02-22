import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const copyPassword = useRef(null);

  // Callback hook for password generating
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*(){}?><.+=";

    for (let i = 0; i < length; i++) {
      let create = Math.floor(Math.random() * str.length);
      pass += str.charAt(create);
    }
    setPassword(pass);
    setCopied(false); 
  }, [length, number, char]);

  // Function to copy the password
  const copyToClipboard = useCallback(() => {
    if (copyPassword.current) {
      copyPassword.current.select();
      navigator.clipboard.writeText(password);
      setCopied(true);
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">🔐 Password 
        <button onClick={passwordGenerator} className=" right-2  top-2 px-3 ml-2 bg-red-500 hover:bg-red-700 text-white rounded">Generate</button>
        </h1>

        {/* Password Display */}
        <div className="relative">
          <input
            type="text"
            value={password}
            readOnly
            ref={copyPassword}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
          />
          
          <button
            onClick={copyToClipboard}
            className="absolute right-2  top-2 px-3  bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            {copied ? "✔ Copied!" : "Copy"}
          </button>
        </div>

        

        {/* Length Slider */}
        <div className="flex items-center justify-between mt-4">
          
          <label className="text-lg">Length: {length}</label>
          <input
            type="range"
            min={8}
            max={40}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-2/3 accent-blue-500"
          />
        </div>

        {/* Options: Numbers & Special Characters */}
        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
              className="mr-2 accent-green-500"
            />
            Numbers
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={char}
              onChange={() => setChar((prev) => !prev)}
              className="mr-2 accent-red-500"
            />
            Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
