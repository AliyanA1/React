import { createSlice , nanoid} from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name: 'Todo',
    initialState:[],
    reducers:{
        addTodo:(state, action)=>{
            state.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })

            
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