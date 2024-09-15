import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { Button } from './ui/button';

const Job = () => {
    return (
        <div className='border p-4 rounded shadow-lg w-[300px]  bg-white'>
            <div className='flex items-center justify-between my-2'>
                <p>Today</p>
                <CiBookmark size={25} />
            </div>
            <div className='flex items-center gap-5 my-1'>
                <img className='w-8 h-8' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png' alt='logo' />
                <div>
                    <h1 className='font-bold'>Google</h1>
                    <p>India</p>
                </div>
            </div>
            <h1 className='text-xl font-bold'>Backend Developer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit tempore totam err dicta labore?</p>
            <div className='my-2'>
                <span className='text-green-500 font-semibold mx-2'>4 position</span>
                <span className='text-orange-700 font-semibold mx-2'> Part Time</span>
                <span className='text-purple-500 font-semibold mx-2'>30LPA</span>
            </div>
            <div className='flex items-center gap-8 my-3'>
                <Button variant="outline">Details</Button>
                <Button className='bg-purple-600 hover:bg-purple-800'>Save For Later</Button>
            </div>

        </div>
    )
}

export default Job
