import { SearchIcon } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='text-center mt-20'>
            <div className='flex items-center flex-col gap-8'>
                <h1 className='bg-gray-200 text-orange-700 px-4 py-2 text-xl font-semibold rounded-[1000px]'>No. 1 Job Hunt Website</h1>
                <h1 className='text-4xl md:text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs </span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur <br className='hidden md:block' /> tempo nihil tempora dolor!</p>
                <div className='flex items-center justify-between border  rounded-full w-[80%] md:[50%] lg:w-[40%] mx-auto  shadow-md '>
                    <input type='text' className='w-full py-2 rounded-l-full focus:outline-none border-none pl-3 text-[18px]' placeholder='search job here...' />
                    <span className='bg-[#6A38C2] px-5 py-2 rounded-r-full text-white font-bold cursor-pointer'><SearchIcon></SearchIcon></span>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
