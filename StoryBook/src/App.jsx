import React, { useState } from "react";
import Stories from "./Components/Stories";

const App = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-amber-200">
      {selectedStory === null ? (
        <div>
          <h3 className="text-xl font-mono">Choose Story</h3>

          <button
            className="text-xl m-4 font-mono bg-white px-4 py-2 rounded-md shadow-md"
            onClick={() => setSelectedStory(0)}
          >
            Story 1
          </button>

          <button
            className="text-xl font-mono bg-white px-4 py-2 rounded-md shadow-md"
            onClick={() => setSelectedStory(1)}
          >
            Story 2
          </button>
        </div>
      ) : (
        <Stories val={selectedStory} />
      )}
    </div>
  );
};

export default App;
