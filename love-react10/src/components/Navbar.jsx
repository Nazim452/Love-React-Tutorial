import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const {cart} = useSelector((state)=>state)
    return (
        <div>
            <div className='flex  justify-between items-cente h-20 max-w-6xl mx-auto'>
                <NavLink to='/'>
                    <div className='ml-5 mt-3 '>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.g_ZZAQa-FNSOczovPvEK3AAAAA&pid=Api&P=0&h=180" className='h-14 rounded-md ' />
                    </div>
                </NavLink>
                <div className='flex items-center font-medium text-slate-100 '>
                    <NavLink to='/'>
                        <p>Home</p>

                    </NavLink>

                    <NavLink to='/cart'>

                        <div className='ml-10 relative'>  <FaShoppingCart className='text-2xl' /> 
                              {
                                cart.length>0&&
                                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                              }
                        </div>

                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar