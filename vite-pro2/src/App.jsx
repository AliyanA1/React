import { useState } from 'react';


function App() {
  const [color, setcolor]=useState("white");

  
  return (
    <>
  
    <div className="flex justify-center items-end h-screen" style={{backgroundColor:color}}>
      <footer className="w-5xl h-15 border-2 border-b-black bg-white mb-5">
        <div className="h-full w-full flex items-center justify-evenly">

        <button onClick={()=> setcolor("black")}
         className="bg-black  border-2    text-white">Black</button>

       <button onClick={()=> setcolor("red")} className="bg-red-400 border-2   text-white">Red</button>

     <button onClick={()=> setcolor("pink")} className="bg-pink-400 border-2   text-white">pink</button>
      
       <button onClick={()=> setcolor("yellow")} className="bg-yellow-400 border-2  text-white">yellow</button>
       
       <button onClick={()=> setcolor("green")} className="bg-green-400 border-2 text-white">Black</button>
        </div>
      </footer>
    </div>
     
    </>
  );
}

export default App;
