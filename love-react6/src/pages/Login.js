// import React, { useState } from 'react'
// import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" })


//   const [showPassword, setShowPassword] = useState(false)
//   function changeHandler(event) {

//     setFormData((prevData) => (
//       {
//         ...prevData,
//         [event.target.name]: event.target.value
//       }
//     ))
//   }
//   return (
//     <div>

//       <form action="">


//         <label htmlFor="">
//           <p>
//             Email Address
//           </p>
//           <input type="email"
//             required
//             value={formData.email}
//             onChange={changeHandler}
//             placeholder='Enter Email'
//             name='email'
//           />
//         </label>


//         <label>
//           <p>
//             PassWord
//           </p>
//           <input type={showPassword ? ("text") : ("password")}
//             required
//             value={formData.password}
//             onChange={changeHandler}
//             placeholder='Enter PassWord'
//             name='password'

//           />

// {/* checking password showing is either true or false */}
//           <span onClick={()=>setShowPassword((prev)=>!prev)}>
//             {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
//           </span>

//           <Link to="#">
//             <p>Forgot Password</p>
//           </Link>



//         </label>


//          <button>
//           SignIn
//          </button>






//       </form>
//     </div>
//   )
// }

// export default Login
import React from 'react'
import Template from '../componets/Template'

const Login = ({ setLoggedIn }) => {
  return (
    <div>
      <Template
        title="WelCome Back"
        desc1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, deserunt."
        desc2="Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, deserunt."

        formtype="login"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default Login

