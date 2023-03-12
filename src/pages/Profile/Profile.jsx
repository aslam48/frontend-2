import React, {useEffect, useState} from 'react'
import { FaEdit, FaPen, FaUserEdit } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { getAllProfiles } from '../../features/profile/profileSlice'
import userIcon from '../../images/user.png'
import './Profile.css'
import PersonalProfile from '../../components/PersonalProfile/PersonalProfile'
import PersonalProfileEditForm from '../../components/PersonalProfileEditForm/PersonalProfileEditForm'


const Profile = () => {
    const {user} = useSelector(store => store.auth)
    const {isLoading, personalProfile, serviceProfile} = useSelector(store => store.profile)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        dispatch(getAllProfiles())
        .unwrap()
        .then((res) => {console.log('results: ', res)})
        .catch((error) => {console.log(error)})
    }, [])
    
    console.log('prof: ', personalProfile)
    if(isLoading){
        return(
            <div className='w-full h-full text-center'>
                <Header />
                <h1 className='font-bold mt-40'>Loading profile. Please wait...</h1>
            </div>
        )
    }
    return (
        <div className='profile relative'>
            <Header />
            <div className='mt-16 relative'>
                <header className='profile-header'>
                    <FaUserEdit 
                        className='text-xl text-primary absolute top-10 right-10 bg-slate-500 rounded-full p-1 w-[40px] h-[40px]'
                    />
                    <h1 className='absolute top-16 font-bold text-2xl'>
                        W<span className='lowercase'>elcome back,</span> {user.firstName} {user.otherName}
                    </h1>
                    <p className='absolute top-24 text-white w-full lg:w-2/3 text-center'>{personalProfile? personalProfile.bio: 'Your bio here'}</p>
                    <img  src={userIcon} alt='user' className='profile-photo'/>
                    <FaPen 
                        className='text-white absolute -bottom-10 z-20 right-1/2 bg-slate-500 rounded-full p-1 w-[30px] h-[30px]'
                    />
                </header>
                <div className='profile-body'>
                    <PersonalProfile personalProfile={personalProfile} user={user} setOpen={setOpen}/>
                    { 
                        open && <PersonalProfileEditForm setOpen={setOpen}/>
                    }
                    <section className='wrapper text-left'>
                        <div className='flex gap-2 items-center justify-center'>
                            <h2 className='font-bold text-center'>Service profile</h2>
                            { serviceProfile? (
                                    <Link className='profile-link-round '>
                                        <FaEdit />
                                    </Link>
                                ): null
                            }
                        </div>
                        {
                            serviceProfile? (
                                <>
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
                                </>
                            ):(
                                <div className='text-center flex flex-col gap-2 mt-2'>
                                    <p>Please create service profile to identify yourself as service provider or comsumer</p>
                                    <Link 
                                        className='my-2 p-2 px-4 text-white bg-primary rounded-full w-fit m-auto'
                                        to='/service-profile'
                                    >
                                        Set service profile
                                    </Link>
                                </div>
                            )
                        }
                        
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Profile