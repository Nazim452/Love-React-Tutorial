import React from 'react'
import {useSelector, useDispatch}from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice'

// useSelector hook take data from slicer
// useDiaspathxh used from taking function from slicer
const Counter = () => {
 
    // counter name ke value ko lena hai
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  


  return (
    <div>
        <button onClick={()=>dispatch(increment())}>
            Increment
        </button>
<br />
<br />

      <div>
       {count}
      </div>
        <button onClick={()=>dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter