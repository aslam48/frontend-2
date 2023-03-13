import React from 'react'
import { useRef, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import center from '../../images/hero-large-center.png'
import heroImage from '../../images/hero-photo.jpg'
import heroImage2 from '../../images/hero-photo2.jpg'


const Hero = () => {
    const imagesWrapper = useRef(null)
    const [represh, setRepresh] = useState(false)
    const [zIndex, setZindex] = useState([10, 20])
    useEffect(() => {
        // const timeOut = setTimeout(()=>{
        //     imagesWrapper.current.childNodes.forEach(element => {
        //         let index = Math.floor((Math.random()*5)+1)
        //         element.style.zIndex = index
        //     });
        //     setRepresh(!represh)
        // }, 5000)
        const timeInterval = setInterval(()=>{
            if(zIndex[0] === 10){
                setZindex([20, 10])
            }else{
                setZindex([10, 20])
            }
        }, 5000)
        return () => {
            clearTimeout(timeInterval)
        }
    }, [zIndex])
    

    return (
        <section 
            className='grid grid-cols-1 lg:grid-cols-2 main-x-p py-10 h-[600px] gap-5 pb-20 relative'
        >
            <div 
                className='flex flex-col lg:pt-5 justify-center lg:justify-start item-center lg:items-start text-center lg:text-left'
            >
                <h1 
                    className='text-primary text-4xl lg:text-7xl font-extrabold animate-bounce'
                >
                    Hire the world
                </h1>
                <h2 
                    className='text-slate-500 text-xl lg:text-3xl font-bold'
                >
                    Whenever you are ready
                </h2>
                <p 
                    className='my-5 lg:my-10 lg:w-[80%]'
                >
                    Hire helpers, get assistance, 
                    save time and pay as go on the hourney of hiring the world
                </p>
                <Link 
                    to='/login' 
                    className='shadow-md shadow-slate-400 hover:scale-105 transition-slow no-underline py-1 md:py-2 px-7 text-center mx-auto lg:mx-0 w-1/2 bg-primary font-bold text-white rounded-full hover:bg-black hover:text-primary'
                >
                    Get Started
                </Link>
            </div>
            <div 
                className='w-full h-full relative'
            >
                <img 
                    src={heroImage} 
                    alt="hero-show" 
                    className={`h-full w-full mx-auto object-cover aspect-auto rounded-full scale-110 lg:animate-pulse absolute transition-all duration-300 z-${zIndex[0]}`}
                />
                <img 
                    src={heroImage2} 
                    alt="hero-show" 
                    className={`h-[200px] lg:h-full w-full mx-auto object-cover aspect-auto rounded-full scale-110 lg:animate-pulse transition-all duration-1000 absolute z-${zIndex[1]}`}
                />
                
            </div>
        </section>
    )
}

export default Hero