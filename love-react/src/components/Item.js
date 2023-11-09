import React,{useState} from "react";
// import './Ite.css';


const Item = () => {
  const[value,setValue] = useState("Nirma ka sief");
  const[title, setTitile] = useState("");
  // let v = "Nazim"

  function clickHandler(){
    setValue ("Khan");
    console.log("Clicked hai");
  }

  function inputHandler(event){
    console.log(event);
    console.log(event.target.value);
    // setTitile(event.target.value);
    // console.log(setTitile(event.target.value));
    setTitile('');

  }
  // function empty(){
  //   setTitile(' ');
  // }

  function saveProduct(props){
    console.log("I am in side item");
  }

  return (
    <div>
      <p className='nirma'>{value}</p>
      {/* <button onClick={clickHandler}>Clicked</button> */}

      {/* <input type="text"  placeholder="Search" value={setTitile}  /> */}
      {/* <button type="submit"onClick={inputHandler}>Cicked me for emoty</button> */}

    
    </div>
  )
}

export default Item






















