import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const Navbar = ({ isLoggedIn, setLoggedIn }) => {
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4'>

      <Link to='/'>
        <img src="https://tse3.mm.bing.net/th?id=OIP._HWJ7DRbjlLwd9eqOfdrJQHaEK&pid=Api&P=0&h=180" alt="" width={150} height={10} loading='lazy' />
      </Link>

      <nav>
        <ul className='flex gap-6 text-white'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>


      {/* LOgin signup dashboard logout */}
      <div className='flex ml-5 mr-5 gap-3  items-center'>
        {!isLoggedIn &&
          <Link to="/login">
            <button className='bg-richblack-800 py-[8px] px-[12px]  rounded-[8px] border borderichblack-700 text-white' >
              Login
            </button>
          </Link>
        }
        {!isLoggedIn &&
          <Link to="/signup">
            <button  className='bg-richblack-800 py-[8px] px-[12px]  rounded-[8px] border borderichblack-700 text-white' >
              Sign Up
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/">
            <button  className='bg-richblack-800 py-[8px] px-[12px]  rounded-[8px] border borderichblack-700 text-white' 
            onClick={() => {
              setLoggedIn(false)
              toast.success("Logged Out")
             
            }}>
              Log Out
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/dashboard">
            <button className='bg-richblack-800 py-[8px] px-[12px]  rounded-[8px] border borderichblack-700 text-white' >
              Dashboard
            </button>
          </Link>
        }
      </div>


    </div>
  )
}

export default Navbar
