import React from 'react'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'

const SearchForm = () => {
  return (
    <form 
        action="" 
        className='flex'
    >
        <div className='relative'>
            <FaSearch 
                className='input-icon-custom'
            />
            <input 
                type="search" 
                placeholder='keyword' 
                id='service' 
                className='rounded-l-full border-2 outline-none border-slate-400 p-2 px-10 border-r-0'
            />
        </div>
        <div className='relative'>
            <FaMapMarkerAlt  
                className='input-icon-custom'
            />
            <input 
                type="search" 
                placeholder='Location' 
                id='location'
                className='rounded-r-full border-2 outline-none border-slate-400 p-2 px-10 border-l-0 bg-slate-100'
            />
        </div>
        <input type="submit" className='hidden'/>
    </form>
  )
}

export default SearchForm