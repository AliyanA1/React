import { useEffect, useState } from "react";

const App = () => {
  const [expense, setExpense] = useState([]);
  const [degree, setDegree] = useState("");
  const [income, setIncome] = useState("");
  const [pasy, setPasy] = useState("");
  const [karcha, setKarcha] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!income || !degree) return;

    const newExpense = { amount: Number(income), category: degree };

    setExpense((prevExpenses) => [...prevExpenses, newExpense]);
    setDegree("");
    setIncome("");
  };

  
  useEffect(() => {
    const totalExpense = expense.reduce((acc, curr) => acc + curr.amount, 0);
    setKarcha(totalExpense);
  }, [expense]);

  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col items-center">
      <div className="mt-5">
        <label htmlFor="">Add your income: </label>
        <input
          type="number"
          className="border-2 text-white"
          value={pasy}
          onChange={(e) => setPasy(e.target.value)}
        />
        <h3>Income: {pasy}</h3>
        <h3>Expense: {karcha}</h3>
      </div>

      <div>
        <h4>Add Expense:</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="border-2 m-2 p-2"
          type="number"
          value={income} // ✅ Controlled input
          onChange={(e) => setIncome(e.target.value)}
        />
        <select onChange={(e) => setDegree(e.target.value)} value={degree} className="bg-black">
          <option value="">Select Expense Type</option>
          <option value="Rent">Rent</option>
          <option value="Food">Food</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="border-2 m-2">Add</button>
      </form>

      <ul>
        <h3>All Expenses:</h3>
        {expense.map((val, index) => (
          <div key={index} className="border-b py-2">
            <p>
              Amount: <input type="text" className="border-2" value={val.amount} readOnly />
              Category: {val.category} {/* ✅ Fixed typo */}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
