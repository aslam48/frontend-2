import React from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../../features/sidebar/sidebarSlice'


const NavItem = ({text, path, icon}) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const isMatch = useMatch(path, location.pathname)

    return (
        <li 
            className={`rounded-full p-2 hover:bg-slate-300 ${isMatch? 'bg-slate-300': ''} w-full transition-slow`}
        >
            <Link 
                to={path} 
                className='nav-link flex gap-2 items-center'
                onClick={()=>{dispatch(closeSidebar)}}
            >
                <span className='text-primary'>{icon}</span>
                <span>{text}</span>
            </Link>
        </li>
    )
}

export default NavItem