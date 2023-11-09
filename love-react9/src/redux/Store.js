import {configureStore} from  "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";




// Store collect all the slicer that made by slicer fil
// Store  is a group of slicer
export const store = configureStore({
    reducer:{
        counter:CounterSlice
    },
})




