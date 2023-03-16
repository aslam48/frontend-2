import React from 'react'
import Brand from '../Brand/Brand'
import NavItems from '../NavItems/NavItems'
import {useSelector, useDispatch} from 'react-redux/'
import { FaTimes } from 'react-icons/fa'
import { closeSidebar } from '../../features/sidebar/sidebarSlice'
import SocialLinks from '../SocialLinks/SocialLinks'


const Sidebar = () => {
    const {isOpen} = useSelector(store => store.sidebar)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(closeSidebar())
    }
    return (
        <aside 
            className={`${isOpen? 'translate-x-0 flex flex-col bg-slate-200 p-5 fixed w-11/12 z-50 bg-opacity-95 top-2 left-2 h-auto': 'absolute top-0 -translate-x-[120%]'} lg:hidden transition-slow`}
        >
            <FaTimes 
                className='text-2xl text-primary font-bold absolute -top-2 -right-2 bg-slate-400 rounded-full'
                onClick={handleClose}
            />
            <Brand />
            <NavItems />
            <SocialLinks />
        </aside>
    )
}

export default Sidebar