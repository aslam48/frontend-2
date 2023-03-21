import React from 'react'
import Brand from '../Brand/Brand'
import NavItems from '../NavItems/NavItems'
import {useSelector, useDispatch} from 'react-redux/'
import { FaTimes } from 'react-icons/fa'
import { closeSidebar } from '../../features/sidebar/sidebarSlice'
import SocialLinks from '../SocialLinks/SocialLinks'


const Sidebar = () => {
    const {isOpen} = useSelector(store => store.sidebar)
    const {user} = useSelector( store => store.auth)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(closeSidebar())
    }
    return (
        <aside 
            className={`${isOpen? 'translate-x-0 flex flex-col bg-slate-200 p-5 fixed w-[95%] z-50 bg-opacity-100 top-2 left-2 h-screen': 'absolute top-0 -translate-x-[120%]'} lg:hidden transition-slow`}
        >
            <FaTimes 
                className='text-4xl p-1 text-primary font-bold absolute -top-1 -right-2 bg-slate-400 rounded-full'
                onClick={handleClose}
            />
            <Brand />
            <hr className='border-primary mt-2'/>

            <div className='mt-2'>
                <i>Hello, {user.firstName} {user.otherName}</i>
            </div>
            <NavItems />
            <SocialLinks />
        </aside>
    )
}

export default Sidebar