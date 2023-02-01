import React, {useState} from 'react'
import cleaningImage from '../../images/cleaner.jpg'
import mechanicImage from '../../images/mechanic.jpg'
import electricianImage from '../../images/electrician.jpg'
import cookImage from '../../images/cook.jpg'
import FeaturedService from '../FeaturedService/FeaturedService'


const services = [
    {
        name: 'Cleaning',
        image: cleaningImage,
    }, 
    {
        name: 'Mechanic',
        image: mechanicImage,
    }, 
    {
        name: 'Catering',
        image: cookImage,
    }, 
    {
        name: 'Electrical',
        image: electricianImage,
    }, 
]

const FeaturedServices = () => {
    const [fetchedServices, setFetchedServices] = useState([])
  return (
    <section 
        className='bg-red-50 main-x-p main-y-p group'
    >
        <h2 className='text-center lg:text-left text-3xl lg:text-4xl font-extrabold'>Popular services</h2>
        <hr 
            className='border-8 rounded-lg border-primary w-[50%] lg:w-[23%] my-2 group-hover:w-10 transition-slow'
        />
        <div 
            className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10'
        >
            {
                fetchedServices.length < 1? 
                (
                services.map(service => <FeaturedService key={service} {...service}/>)
                ): (
                fetchedServices.map(service => <FeaturedService key={service} {...service}/>)
                )
            }
        </div>
    </section>
  )
}

export default FeaturedServices