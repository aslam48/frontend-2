import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import userIcon from '../../images/user.png'
import DropDown from '../DropDown/DropDown'
import { userDropDown } from '../../data'
import { useState } from 'react'

const NavBar = () => {
    const {user} = useSelector(store => store.auth)
    const [isOpen, setIsOpen] = useState(false)
    console.log(user)
  return (
    <nav className='flex gap-4 px-4'>
        <Link 
            to='/services' 
            className='transition-slow hidden lg:flex no-underline p-2 px-7 text-black rounded-full hover:bg-slate-200'
        >
            Services
        </Link>
        {
            user? (
                <div className='flex gap-2 items-center relative'>
                    <img src={userIcon} alt='user-icon'  className='rounded-full w-[60px] h-[50px] shadow-md'/>
                    <p className='text-primary'>{user.firstName} {user.otherName}</p>
                    {
                        isOpen? <FaChevronUp  className='' onClick={()=> setIsOpen(!isOpen)}/>:
                        <FaChevronDown  className='' onClick={()=> setIsOpen(!isOpen)}/>
                    }
                    {
                        isOpen ? <DropDown items={userDropDown}/>: null
                    }
                </div>

            ): (
                <>
                    {/* <Link 
                        to='/login' 
                        className='transition-slow no-underline py-1 md:py-2 px-7  border-primary bg-slate-200 text-black rounded-full hover:bg-black hover:text-primary'
                    >
                        Login
                    </Link> */}
                    <Link 
                        to='/login' 
                        className='transition-slow no-underline py-1 md:py-2 px-7 bg-primary text-white rounded-full hover:bg-black hover:text-primary'
                    >
                        Login
                    </Link>
                </>
            )
        }
    </nav>
  )
}

export default NavBar