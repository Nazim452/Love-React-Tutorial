import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';





const SignupForm = ({ setLoggedIn }) => {
    const navigate = useNavigate();
    const [accounttype, setaccounttype] = useState("student");


    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }


    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) toast.error("Passwords do not match")
        setLoggedIn(true);
        toast.success("Account Created Success")
        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData,
            accounttype
        }
        console.log("Printing final account adata");
        console.log(finalData);
        navigate("/dashboard")





    }

    return (
        <div>
            <div className='flex bg-slate-900 p-1 gap-z-1 my-6 rounded-full max-w-max'>
                <button
                    className={`${accounttype === "student" ?
                        "bg-slate-900 text-white" :
                        "bg-transparent text-slate-500 py-2 px-5 rounded-full transition-all duration-100"}`}
                    onClick={() => setaccounttype("student")}
                >
                    Student
                </button
                >

                <button
                    className={`${accounttype === "instructor" ?
                        "bg-slate-900 text-white" :
                        "bg-transparent text-slate-500 py-2 px-5 rounded-full transition-all duration-100"}`}
                    onClick={() => setaccounttype("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* firstName and Lastname */}
                <div className='flex justify-between mt-[20]'>
                    <label htmlFor="">
                        <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>First Name <sup>*</sup></p>
                        <input
                            className='bg-slate-800 w-full p-[12px]'
                            type="text"

                            placeholder='Enter First Name'
                            name='firstname'
                            onChange={changeHandler}
                            value={setFormData.firstname}

                        />

                    </label>
                    <label htmlFor="">
                        <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>Last Name <sup>*</sup></p>
                        <input
                            className='bg-slate-800 w-full p-[12px]'
                            type="text"

                            placeholder='"Enter Last Name'
                            name='lastname'
                            onChange={changeHandler}
                            value={setFormData.lastname}

                        />

                    </label>
                </div>


                {/* EMail Address */}

                <label htmlFor="">
                    <p className='text-[0.875rem] mb-1 leading-[1.375rem] mt-2'>Email Address <sup>*</sup></p>
                    <input
                        className='bg-slate-800 w-full p-[12px]'
                        type="email"

                        placeholder='Enter the email address'
                        name='email'
                        onChange={changeHandler}
                        value={setFormData.email}

                    />

                </label>


                {/* create And confirm password */}

                <div className='flex justify-between w-full mt-2 '>
                    <label className='relative'

                    >
                        <p>Create paasword <sup>*</sup></p>
                        <input
                            className='bg-slate-800 w-full p-[12px]'
                            type={showPassword ? ("text") : ("password")}
                            required

                            placeholder='Enter passWord'
                            name='password'
                            onChange={changeHandler}
                            value={setFormData.password}

                        />

                        <span
                            className='absolute top-[38px] right-3 cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} />) : (<AiOutlineEye fontSize={24} />)}
                        </span>

                    </label>

                    <label className='relative'>
                        <p>Confirm PassWord <sup>*</sup></p>
                        <input
                            className='bg-slate-800 w-full p-[12px] '
                            type={showConfirmPassword ? ("text") : ("password")}
                            required

                            placeholder='Confirm PassWord'
                            name='confirmPassword'
                            onChange={changeHandler}
                            value={setFormData.confirmPassword}

                        />

                        <span
                            className='absolute top-[38px] right-3 cursor-pointer mb-1'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} />) : (<AiOutlineEye fontSize={24} />)}
                        </span>



                    </label>
                </div>

                <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm


