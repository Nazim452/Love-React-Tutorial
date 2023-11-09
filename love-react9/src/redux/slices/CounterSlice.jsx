import {createSlice} from "@reduxjs/toolkit";


const initialState={
    value:0,
}

// slicer is a part of any spicefic task

export const  CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1;
        },

        decrement:(state)=>{
            state.value -=1;
        }
    }
}
   
)


export  const{increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;



