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
        console.log('close')
    }
    return (
        <aside 
            className={`${isOpen? 'translate-x-0 flex flex-col bg-slate-200 p-5 absolute w-11/12 z-10 top-0 left-0 h-screen': '-translate-x-[100%]'} transition-slow`}
        >
            <FaTimes 
                className='text-2xl text-primary font-bold absolute top-5 right-5 bg-slate-400 rounded-full'
                onClick={handleClose}
            />
            <Brand />
            <NavItems />
            <SocialLinks />
        </aside>
    )
}

export default Sidebar