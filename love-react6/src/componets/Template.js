import React from 'react'
import { FcGoogle } from "react-icons/fc"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = ({ title, dsec1, desc2, image, formtype, setLoggedIn }) => {
    return (
        <div className='flex justify-between w-11/12 py-12 mx-auto gap-x-12 gap-y-0 max-w-[1160px] py-12 '>

            <div className='w-11/12 max-w-[450px] ' >

                <h1 className='text-white text-3xl font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

                <p className=' text-[1.125rem] mt-4'>
                    <span className='text-richblack-100'>{dsec1}</span>

                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>

                {formtype === "signup" ?
                    (<SignupForm setLoggedIn={setLoggedIn} />) :
                    (<LoginForm setLoggedIn={setLoggedIn} />)}

                <div className='flex w-full items-center gap-x-2 my-4'>

                    <div className='h-[1px] bg-red-700 w-full'> </div>
                    <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                    <div className='h-[1px] bg-red-700 w-full'></div>


                </div>

                <button

                    className='w-full flex justify-center rounded-[8px] font-medium  border border-red-500  px-[12px] py-[8px] gap-x-2 mt-6'>

                    <FcGoogle className='mt-1' />  <p>Sign in with Google</p>
                </button>

            </div>

            <div className='relative w-11/12 max-w-[450px]'>
                <img src="https://tse3.mm.bing.net/th?id=OIP.hHsxvwKnOU32lROuRtr5agHaEo&pid=Api&P=0&h=180" alt="pattrn"
                    width={558}
                    height={504}
                    loading='lazy'
                />
                <img
                    className='absolute  -top-1 right-4'
                    src="https://tse1.mm.bing.net/th?id=OIP.DGU3tNun28scbhpS6w4znAHaEK&pid=Api&P=0&h=180" alt="Students"
                    width={558}
                    height={490}
                    loading='lazy'
                />

            </div>
        </div>
    )
}

export default Template
