import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Sidebar from '../../components/Sidebar/Sidebar'
import StatusList from '../../components/StatusList/StatusList'

const Home = () => {
  return (
    <main className='w-full overflow-x-hidden'>
        <Header />
        <Hero />
        <StatusList />
        <Sidebar />
    </main>
  )
}

export default Home