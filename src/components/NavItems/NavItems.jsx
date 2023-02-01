import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaHome, FaBell, FaEnvelope,  } from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import NavItem from '../NavItem/NavItem'

const navItems = [
    {
        text: 'Home', 
        icon: <FaHome />,
        path: '/'
    },
    {
        text: 'Serices', 
        icon: <MdHomeRepairService />,
        path: '/services'
    },
    {
        text: 'Messages', 
        icon: <FaEnvelope />,
        path: '/messages'
    },
    {
        text: 'Notifications', 
        icon: <FaBell />,
        path: '/notifications'
    },
    {
        text: 'Profile', 
        icon: <FaUser />,
        path: '/profile',
    }
]

const NavItems = () => {
  return (
    <nav>
        <ul 
            className='list-none flex flex-col items-start justify-center gap-1 my-20'
        >
          {
            navItems.map(item => <NavItem key={item.text} {...item}/>)
          }
        </ul>
    </nav>
  )
}

export default NavItems