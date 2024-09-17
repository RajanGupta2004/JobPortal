import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { LogOut, UserRound } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const { user } = useSelector((store => store.auth))

    return (
        <div className='flex items-center justify-between mx-auto px-4 md:px-20  h-14 max-w-8xl'>
            <div>

                <h1 className='text-2xl font-bold cursor-pointer'>Job <span className='text-red-700' >Portal</span></h1>
            </div>
            <div className='flex items-center gap-10'>

                <ul className='flex items-center gap-4'>
                    <li className='uppercase font-bold text-gray-900 cursor-pointer'><Link to={"/"}>home</Link></li>
                    <li className='uppercase font-bold text-gray-900 cursor-pointer'><Link to={"/jobs"}>Job</Link></li>
                    <li className='uppercase font-bold text-gray-900 cursor-pointer'><Link to={"/browse"}>Browse</Link></li>
                </ul>

                {
                    !user ? (
                        <div className='flex items-center gap-2'>
                            <Link to="/login">
                                <Button variant="outline">Login</Button>
                            </Link>
                            <Link to="/sign-up">
                                <Button className='bg-purple-700 hover:bg-purple-800' >Signup</Button>
                            </Link>
                        </div>

                    ) : (
                        <Popover>
                            <PopoverTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className='flex items-center gap-3'>
                                    <UserRound />
                                    <h3 className='cursor-pointer hover:underline'><Link to='/profile'>Profile</Link></h3>
                                </div>
                                <div className='flex items-center gap-3 mt-2'>
                                    <LogOut />
                                    <h3 className='cursor-pointer hover:underline'>Logout</h3>
                                </div>

                            </PopoverContent>
                        </Popover>
                    )
                }




            </div>

        </div>
    )
}

export default Navbar
