import React,{useState} from 'react'

const Counter = () => {
    const[val, setVal] = useState(0);

    function adding(){
        setVal(val+1);

    }
    function subtracting(){
        setVal(val-1);
    }
    function re(){
        setVal(0);
    }


  return (
    <>
    <div className='count'>

    <button className='add' onClick={adding}>Add </button>
    <div className='val' >{val}</div>
    <button className='sub' onClick={subtracting}>Subtract</button>

    <button onClick={re}>Reset</button>
    </div>
      
    </>
  )
}

export default Counter
