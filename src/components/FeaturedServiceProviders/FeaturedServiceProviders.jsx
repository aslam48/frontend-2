import React, {useState} from 'react'
import providerImage1 from '../../images/provider1.jpg'
import providerImage2 from '../../images/provider2.jpg'
import providerImage3 from '../../images/provider3.jpg'
import providerImage4 from '../../images/provider4.jpg'
import FeaturedServiceProvider from '../FeaturedServiceProvider/FeaturedServiceProvider'

const services = [
    {
        id: 1,
        name: 'Sally James',
        image: providerImage1,
        rating: 4,
        service: 'Web development'
    }, 
    {
        id: 2,
        name: 'Salisu Umar',
        image: providerImage2,
        rating: 5,
        service: 'Catering'
    }, 
    {
        id: 3,
        name: 'Harry Fred',
        image: providerImage3,
        rating: 5,
        service: 'Photography'
    }, 
    {
        id: 4,
        name: 'Kenneth Olamide',
        image: providerImage4,
        rating: 4,
        service: 'Electrical'
    }, 
]

const FeaturedServiceProviders = () => {
    const [fetchedServiceProviders, ] = useState([])
    return (
        <section 
            className='bg-slate-100 main-x-p main-y-p group'
        >
            <div className='flex flex-col items-center lg:items-start gap-2'>
                <h2 className='text-center lg:text-left text-3xl lg:text-4xl font-extrabold'>Top service providers</h2>
                <hr 
                    className='border-8 rounded-lg border-primary w-[50%] lg:w-[23%] lg:my-2 group-hover:w-10 transition-slow'
                />
            </div>
            <div 
                className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10'
            >
                {
                   fetchedServiceProviders.length < 1? 
                   (
                    services.map(service => 
                            <FeaturedServiceProvider 
                                key={service} 
                                {...service}
                            />
                        )
                   ): (
                    fetchedServiceProviders.map(service => 
                            <FeaturedServiceProvider 
                                key={service} 
                                {...service}
                            />
                        )
                   )
                }
            </div>
        </section>
    )
}

export default FeaturedServiceProviders