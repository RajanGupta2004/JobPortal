import React from 'react'
import Navbar from './shared/Navbar'
import { MdEdit } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

import AppliedJobTable from './AppliedJobTable';


const Profile = () => {

    const skills = ["Html", "CSS", "JavaScript", "React"]
    return (
        <div >
            <Navbar />
            <div className='max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center mt-10  '>
                <div className='w-[65%] border p-4 rounded-md'>
                    <div className='flex justify-between items-center '>
                        <div className='flex items-center gap-4'>
                            <div className='w-20 h-20 rounded-full overflow-hidden'>
                                <img src="https://github.com/shadcn.png" alt="profile" />
                            </div>
                            <div>
                                <h1 className='font-bold text-xl '>Rajan MERN Stack developer</h1>
                                <p className='text-gray-600'>Experince Software Developer</p>
                            </div>
                        </div>
                        <div>
                            <MdEdit size={30} />
                        </div>
                    </div>

                    <div className='my-4 flex flex-col justify-center gap-3'>
                        <div className='flex items-center gap-2 '>
                            <MdAttachEmail size={22} /> <h1>rajangupta@gmail.com</h1>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <IoIosContact size={22} /> <span>99999999999</span>
                        </div>

                    </div>

                    <div className=''>
                        <h1 className='font-bold my-1'>Skills</h1>
                        <div className='flex items-center gap-3 '>
                            {
                                skills.map((item, index) => (
                                    <div key={index} >
                                        <button className='border text-sm bg-black text-white rounded-full px-2 text-center  '>{item}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className='my-4'>
                        <h1 className='font-bold'>Resume</h1>
                        <a href="/" className='text-blue-600 underline cursor-pointer' target='_blank'>Rajan Resume.pdf</a>
                    </div>

                </div>

                <AppliedJobTable />




            </div>



        </div>
    )
}

export default Profile
