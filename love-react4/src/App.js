
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
function App() {

  // const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comment: "", checkbox: true, mode: "",favCar:"" })

  // console.log(formData);
  // function changeHandler(event) {
  //   const { name, value, checked, type } = event.target
  //   setFormData(prevData => {
  //     return {
  //       ...prevData,
  //       // [event.target.name]: event.target.value
  //       // [name] :type==="checkbox" ?checked:value            OR
  //       [event.target.name]: type === "checkbox" ? checked : event.target.value
  //       // --check if checkbox hai then put checked value either True OR False put  in checkbox, otherwise put general value as a tas value

  //     }
  //   });


  // }

  // function submitHandler(event){
  //   event.preventDefault();

  //   console.log("Finally  Submitting....");
  //   console.log(formData);

  // }

  return (
    <div>

      <Form/>
      {/* <form action="" onSubmit={submitHandler}>


        <input type="text"
          placeholder='First name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />
        <br />
        <input type="text"
          placeholder='Last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />
        <br />

        <input type="email"
          placeholder='Enter your email address'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br />

        <textarea id="" cols="30" rows="10"
          placeholder='Enter Your commnets here'
          name="comment"
          value={formData.comment}
          onChange={changeHandler}
        />
        <br />

        <input type="checkbox"
          onChange={changeHandler}
          name='checkbox'
          // value={formData.checkbox}
          id='isVisible'
          checked={formData.checkbox}

        />
        <label htmlFor="isVisible">I am Visisble</label>
        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>


          <input type="radio"
            onChange={changeHandler}
            name='mode'
            value="Online Mode"
            id='Online-Mode'
          // checked={formData.mode ==="Online-Mode"}


          />
          <label htmlFor="Online-Mode">Online</label>
          <input type="radio"
            onChange={changeHandler}
            name='mode'
            value="Offline Mode"
            id='Offline-Mode'
          // checked={formData.mode ==="Offline-Mode"} // here cheked if formdata.mode== Offline-Mode then this mode must be checked and other radio buton uncheked

          />
          <label htmlFor="Offline-Mode">Offline</label>




        </fieldset>

        <label htmlFor="favCar">Tell me Your fav Car </label>
        <select  
        onChange={changeHandler}
        name='favCar'
        id="favCar"
        value={formData.favCar}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Thar">Thar</option>
          <option value="Defender">Defender</option>
          <option value="Defender1">Defender1</option>
         
        
        </select>

        <br />
        <button type='submit'>Submit</button> 
      



      </form> */}
        {/* jab ye button submit hoga tab form ko onsubmit name ka handler pass hoga */}
    </div>
  );
}

export default App;
