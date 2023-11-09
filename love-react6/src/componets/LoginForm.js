import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const LoginForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" })

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  function changeHandler(event) {

    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }



  function submtHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged in")
    console.log("Printing loginForm...");
    console.log(formData);
    navigate("/dashboard")



  }
  return (
    <div className=''>

      <form onSubmit={submtHandler}
        className='flex flex-col w-full gap-y-4 mt-6'
      >


        <label
          className='w-full '
          htmlFor="">
          <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
            Email Address

            <sup className='text-pink-200'>*</sup>
          </p>

          <input
          className='bg-slate-800 w-full p-[12px]'


            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email'
            name='email'
          />
        </label>


        <label className='w-full relative'>
          <p  className='text-[0.875rem] mb-1 leading-[1.375rem]'>
            PassWord
          </p>
          <input 
           className='bg-slate-800 w-full p-[12px]'



          type={showPassword ? ("text") : ("password")}
            required
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter PassWord'
            name='password'

          />



          {/* checking password showing is either true or false */}



          <span 
          className='absolute top-[38px] right-3 cursor-pointer' 
          onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} />) : (<AiOutlineEye fontSize={24} />)}
          </span>




          <Link to="#">
            <p className='text-xs mt-1 text-blue-500 ml-auto max-w-max'>Forgot Password</p>
          </Link>



        </label>


        <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
          SignIn
        </button>






      </form>
    </div>
  )
}

export default LoginForm