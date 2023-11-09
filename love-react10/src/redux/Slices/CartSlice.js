import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{   // reducers fun 2 c hiz leta hai hamesh state and action
        add:(state, action)=>{
            state.push(action.payload); //action.payload ye batata hai ki  cuureently jis par action kiya gaya hia use push kar  do
        },
        remmove:(state, action)=>{
            return state.filter((item)=>item.id!=action.payload) // is state ke andar sirf us kart ko return karna jnki id (action.payload)- input me jo aai hai uske id ke brabar nahi ho
        },
    }

});


export const {add, remmove} = CartSlice.actions;
export default CartSlice.reducer;



























