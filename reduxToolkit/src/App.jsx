import { useDispatch, useSelector } from "react-redux";
import { addPizza, removePizza, reset } from "./features/pizza/pizzaSlice";

function App() {
  const pizzaCount = useSelector((state) => state.Pizza.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6">🍕 Pizza Count: {pizzaCount}</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => dispatch(addPizza())}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Add Pizza
          </button>
          <button
            onClick={() => dispatch(removePizza())}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Remove Pizza
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
