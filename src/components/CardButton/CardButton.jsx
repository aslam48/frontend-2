import React from 'react'
import { Link } from 'react-router-dom'

const CardButton = ({text, path}) => {
  return (
    <Link 
        to={path} 
        className='shadow-md shadow-slate-400 transition-slow no-underline py-1 block my-2 text-center bg-primary text-white rounded-full hover:bg-black hover:text-primary'
    >
        {text}
    </Link>
  )
}

export default CardButton