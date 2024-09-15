import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousal from './CategoryCarousal'
import LatestJob from './LatestJob'
import Footer from './shared/Footer'

const Home = () => {
    return (
        <div className='mx-auto px-4'>
            <Navbar />
            <HeroSection />
            <CategoryCarousal />
            <LatestJob />
            <Footer />

        </div>
    )
}

export default Home
