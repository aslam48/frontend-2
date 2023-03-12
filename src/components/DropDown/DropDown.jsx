import React from 'react'
import { Link } from 'react-router-dom'
import './DropDown.css'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../features/auth/authSlice'
import { baseUrl } from '../../utils/base_url'

const DropDown = ({items}) => {

    const dispatch = useDispatch()
    const logout = async() =>{
        window.open(`${baseUrl}/api/auth/logout`, '_self')
        // window.open('http://localhost:8000/api/auth/logout', '_self')
        document.cookie = null
        try {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            const res = await dispatch(clearUser())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ul className='drop-down'>
            {items.map((item, index) =>{
                if(item.url === '/logout'){
                    return(
                        <li className='item' key={index}>
                            <Link onClick={logout}>{item.text}</Link>
                        </li>
                    )
                }else{
                    return (
                        <li className='item' key={index}>
                            <Link to={item.url}>{item.text}</Link>
                        </li>
                    ) 
                }
            }
            )}
        </ul>
    )
}

export default DropDown