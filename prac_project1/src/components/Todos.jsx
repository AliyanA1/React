import { useSelector} from "react-redux"


function Todos(){
    const select=useSelector(state=> state.todos)
    
    return(
        <>
        <h2 className="flex justify-center items-center text-mono text-3xl m-2">
            <ul>
               {
                 select.map((todo)=> (
                    <li key={todo.id}>• {todo.text}</li>
                 ))
               }
            </ul>
        </h2>
        </>
    )
}

export default Todos