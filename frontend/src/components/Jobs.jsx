import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'

const Jobs = () => {
    const jobs = [1, 2, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className=''>
            <Navbar />
            <div className='max-w-7xl mx-auto '>
                <div className='flex mt-5 gap-4'>
                    <div className='w-[20%] bg-white '>
                        <FilterCard />
                    </div>
                    <div className='flex-1 overflow-y-auto h-[88vh]  ' >
                        {
                            jobs.length <= 0 ? <div>No jobs found...</div> :
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 '>
                                    {
                                        jobs.map((item, index) => (
                                            <div>
                                                <Job />
                                            </div>
                                        ))
                                    }

                                </div>
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jobs
