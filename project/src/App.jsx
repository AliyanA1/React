import { useEffect, useState } from "react"


const App=()=>{
  const [input, setInput]=useState([])
  const [todo, setTodo]=useState('')

  
  const handle=()=>{
    if(todo.trim()=='') return
    const updateTodo=[todo, ...input]
     localStorage.setItem('todos', JSON.stringify(updateTodo))
      setInput(updateTodo)
      setTodo('')
  }

  useEffect(()=>{
    try {
      const data=JSON.parse(localStorage.getItem('todos') || [])
      if(Array.isArray(data)) {
        setInput(data)
      }else{
         setInput([])
      }
      
    } catch (error) {
      console.log('here the error', error)
    }
  },[])

  return(
     <div className="h-screen flex justify-center bg-gray-900 text-white">
        <div>
        <input type="text"
      className="h-[50px] w-[350px] mt-10 mb-10 border-3 text-white border-white"
      value={todo}
      onChange={(e)=> setTodo(e.target.value)}
      />
     
     <button onClick={handle}>Add</button>

      <ul>
        {input.map((val,index)=>(
          <li key={index}>{val}</li>
        ))}
      </ul>
      </div>

     </div>
  )
}

export default App