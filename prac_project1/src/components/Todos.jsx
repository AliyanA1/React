import { useSelector, useDispatch} from "react-redux"
import { removeTodo } from "../Content/TodoSlice"


function Todos(){
    const select=useSelector(state=> state.todos)
    const dispatch=useDispatch()
    
    return(
        <>
        <h2 className="flex justify-center items-center text-mono text-3xl m-2">
            <ul>
               {
                 select.map((todo)=> (
                    <li key={todo.id}>
                        • {todo.text} 
                     <button className="m-4" onClick={()=> dispatch(removeTodo(todo.id))}>🚮</button>
                     </li>
                 ))
               }
            </ul>
        </h2>
        </>
    )
}

export default Todos