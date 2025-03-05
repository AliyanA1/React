import {createSlice}  from '@reduxjs/toolkit';

const pizzaSlice=createSlice({
    name:"pizza",
    initialState:{
        count:0
    },
    reducers:{
        addPizza:(state)=>{
            state.count +=1;
        },
        removePizza:(state)=>{
            if(state.count > 0) state.count -=1;
        },
        reset:(state)=>{
            state.count =0;
        }
    }
});

export const {addPizza, removePizza, reset}= pizzaSlice.actions;
export default pizzaSlice.reducer;