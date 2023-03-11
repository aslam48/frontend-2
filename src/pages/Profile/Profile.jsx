import React from 'react'
import { FaEdit, FaPen, FaPenAlt, FaPenFancy, FaUserEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import userIcon from '../../images/user.png'
import './Profile.css'


const Profile = () => {
    const {user} = useSelector(store => store.auth)
    return (
        <div className='profile'>
            <Header />
            <div className='mt-16 relative'>
                <header className='profile-header'>
                    <FaUserEdit className='text-xl text-primary absolute top-10 right-10 bg-slate-500 rounded-full p-1 w-[40px] h-[40px]'/>
                    <h1 className='absolute top-16 font-bold text-2xl'>
                        W<span className='lowercase'>elcome back,</span> {user.firstName} {user.otherName}
                    </h1>
                    <p className='absolute top-24 text-white w-full lg:w-2/3 text-center'>Your good bio here for others to read</p>
                    <img  src={userIcon} alt='user' className='profile-photo'/>
                    <FaPen className='text-white absolute -bottom-10 z-20 right-1/2 bg-slate-500 rounded-full p-1 w-[30px] h-[30px]'/>
                </header>
                <div className='profile-body'>
                    <section className='wrapper text-left'>
                        <div className='flex gap-2 items-center justify-center'>
                            <h2 className='font-bold text-center'>Personal info</h2>
                            <Link className='profile-link-round '>
                                <FaEdit />
                            </Link>
                        </div>
                        <article >
                            <small className='text-primary'>First name</small>
                            <hr />
                            <p>{user.firstName}</p>
                        </article>
                        <article>
                            <small className='text-primary'>Other name</small>
                            <hr />
                            <p>{user.otherName}</p>
                        </article>
                        <article>
                            <small className='text-primary'>Email</small>
                            <hr />
                            <p>{user.email}</p>
                        </article>
                        <article>
                            <small className='text-primary'>Location</small>
                            <hr />
                            <p>{user.location}</p>
                        </article>
                    </section>
                    <section className='wrapper text-left'>
                        <div className='flex gap-2 items-center justify-center'>
                            <h2 className='font-bold text-center'>Service info</h2>
                            <Link className='profile-link-round '>
                                <FaEdit />
                            </Link>
                        </div>
                        <article>
                            <small className='text-primary'>You are a</small>
                            <hr />
                            <p>Service consumer</p>
                        </article>
                        <article>
                            <small className='text-primary'>Service category</small>
                            <hr />
                            <p>Cleaning</p>
                        </article>
                        <article>
                            <small className='text-primary'>Related skills</small>
                            <hr />
                            <p>Cleaning, tile cleaning, car wash</p>
                        </article>
                        
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Profile