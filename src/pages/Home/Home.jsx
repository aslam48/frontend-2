import React from 'react'
import FeaturedServiceProviders from '../../components/FeaturedServiceProviders/FeaturedServiceProviders'
import FeaturedServices from '../../components/FeaturedServices/FeaturedServices'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero2 from '../../components/Hero2/Hero2'
import HireWorker from '../../components/HireWorker/HireWorker'
import PostJob from '../../components/PostJob/PostJob'
import Sidebar from '../../components/Sidebar/Sidebar'
import StatusList from '../../components/StatusList/StatusList'
import WorkerCategories from '../../components/WorkerCategories/WorkerCategories'

const Home = () => {
  return (
    <div className='w-full mt-20 lg:mt-40'>
        <Header />
        <Hero2 />
        <FeaturedServices />
        <FeaturedServiceProviders />
        <PostJob />
        <HireWorker />
        <WorkerCategories />
        <Footer />
        <Sidebar />
    </div>
  )
}

export default Home