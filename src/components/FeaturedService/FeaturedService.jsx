import React from 'react'

const FeaturedService = ({name, image}) => {
  return (
    <article 
        className='rounded-t-lg bg-slate-200 transition-slow hover:scale-105 shadow-sm'>
        <img 
            src={image}
            alt={name}
            className='w-full h-[300px] rounded-t-lg'
        />
        <h3 
            className='text-primary text-2xl font-bold text-center p-2'
        >
            {name}
        </h3>
    </article>
  )
}

export default FeaturedService