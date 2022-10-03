import React from 'react'
import logo from '../../images/logo.png'
import {FaUser, FaUserCircle, FaSearch, FaSearchLocation, FaHome, FaBell, FaList, FaEnvelope} from 'react-icons/fa'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <section className='top'>
            <div className='brand'> 
                <img src={logo} alt='logo' className='logo'/>
                <h3 className='text-dark large-font'>Runor</h3>
            </div>
            <form action="">
                <FaSearch className='input-icon'/>
                <input type="search" placeholder='Service' id='service' />
                <input type="search" placeholder='Location' id='location'/>
                <input type="submit" />
            </form>
            <div>
                <FaUser/>
                <Link to='signin' className='nav-link large-font text-dark'>Sign In</Link>
            </div>
        </section>
        <nav>
            <ul>
                <li className="nav-item">
                    <Link to='/' className='nav-link'>
                        <FaHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='profile' className='nav-link'>
                        <FaUser />
                        <span>Profile</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='nofitications' className='nav-link'>
                        <FaBell /> 
                        <span>Notifications</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='menu' className='nav-link'>
                        <FaList />
                        <span>Menu</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='messages' className='nav-link'>
                        <FaEnvelope /> 
                        <span>Messages</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header