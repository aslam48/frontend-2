import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='error-wrapper'>
        <h1>Error! Page Not Found</h1>
        <Link to='/' className='nav-link'>Back Home</Link>
    </div>
  )
}

export default Error