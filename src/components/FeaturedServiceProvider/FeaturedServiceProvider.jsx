import React from 'react'
import CardButton from '../CardButton/CardButton'
import Stars from '../Stars/Stars'

const FeaturedServiceProvider = ({id, name, image, rating, service}) => {
  return (
    <article 
        className='rounded-t-lg bg-slate-200 transition-slow hover:scale-105 shadow-sm'>
        <img 
            src={image}
            alt={name}
            className='w-full h-[300px] rounded-t-lg'
        />
       <div className='p-2 text-center flex flex-col gap-1'>
        <p>{name}</p>
        <h3 
            className='text-slate-600 text-xl font-bold text-center p-2 bg-slate-300 rounded-md'
          >
              {service}
        </h3>
        <Stars stars={rating}/>
        <CardButton 
          path={`/provider/${id}`}
          text='details'
        />
       </div>
    </article>
  )
}

export default FeaturedServiceProvider