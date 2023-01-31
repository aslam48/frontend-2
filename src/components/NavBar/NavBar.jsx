import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex gap-4'>
        <Link 
            to='/services' 
            className='transition-slow hidden lg:flex no-underline p-2 px-7 text-black rounded-full hover:bg-slate-200'
        >
            Services
        </Link>
        <Link 
            to='/login' 
            className='transition-slow no-underline py-1 md:py-2 px-7 bg-primary text-white rounded-full hover:bg-black hover:text-primary'
        >
            Login
        </Link>
    </nav>
  )
}

export default NavBar