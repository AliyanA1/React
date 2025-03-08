import { createSlice , nanoid} from "@reduxjs/toolkit";

const SetTodos=()=>{
    const savedTodos=localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos):[];
}

const TodoSlice=createSlice({
    name: 'Todo',
    initialState:SetTodos(),
    reducers:{
        addTodo:(state, action)=>{
            state.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        localStorage.setItem('todos', JSON.stringify(state))
        
        },
        // removeTodo:(state, action)=>{
        //     return state=state.filter(todo=> todo.id !== action.payload)
        // },
        // updateTodo:(state, action)=>{
        //   const todo=state.map(todo=> todo.id === action.payload.id);
        //   if(todo){
        //     todo.text=action.payload.text
        //   }
        // }
        
    }
});

export const {addTodo}= TodoSlice.actions;
export default TodoSlice.reducer