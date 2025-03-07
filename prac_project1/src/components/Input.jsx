import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../Content/TodoSlice";


function Input(){
    const [text, setText]=useState('');
    const dispatch=useDispatch();
 
    const handleSubmit=(e)=>{
        
        e.preventDefault();

        if (text.trim() === "") return

        dispatch(addTodo(text));
        setText('')
    }

    return(
         <div className="flex justify-center ">
            <form onSubmit={handleSubmit}>
                <input placeholder="Add your Todos"
                className="h-10 p-2 w-2xs border-2 border-b-black shadow-blue-300"
                type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                />
                 <button className="border-2 h-11 w-11 rounded-md hover:bg-blue-950 bg-blue-800 text-amber-100 " type="submit">Add</button>
            </form>
           
         </div>
    )
}

export default Input