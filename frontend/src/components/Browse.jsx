import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'

const Browse = () => {

    const alljobs = [1, 2, 3, 4, 5, 6]
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />

            <div className=' mt-6 flex flex-col'>
                <div className='mx-auto '>
                    <h1 className='font-bold text-xl '>Search Results ({alljobs.length})</h1>
                </div>


                <div className='flex flex-col items-center  '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 my-4'>
                        {
                            alljobs.map((item, index) => {
                                return (
                                    <div key={index} >
                                        <Job />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Browse
