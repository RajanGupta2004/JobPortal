import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_END_POINTS } from '@/utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'


const Login = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        role: "",
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading } = useSelector((store) => store.auth)
    console.log("loading", loading)

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            // set loading true
            dispatch(setLoading(true))

            const res = await axios.post(`${USER_END_POINTS}/login`, inputs, {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your_token_here',
                // 'Custom-Header': 'custom_value'
            })
            console.log(res.data.user)
            if (res.data.success) {
                dispatch(setUser(res.data.user))
                toast(res.data.message)
                navigate("/")
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error)
            toast(error.response.data.message)
        } finally {
            dispatch(setLoading(false))
        }
    }
    return (
        <div className='h-[100vh]'>
            <Navbar />
            <div className='max-w-7xl mx-auto p-3 flex flex-col items-center  '>
                <form onSubmit={submitHandler} className='lg:w-1/3 md:w-1/2 shadow-lg p-5 rounded-md '>
                    <Label className="text-xl font-bold">Login</Label>

                    <div className='my-4'>
                        <Label className="text-sm font-bold">Email:</Label>
                        <Input type="email" value={inputs.email} name='email' onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })} placeholder="Email" />

                    </div>
                    <div className='my-4'>
                        <Label className="text-sm font-bold">Password:</Label>
                        <Input type="password" value={inputs.password} name='password' onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })} placeholder="password..." />

                    </div>

                    <div>
                        <RadioGroup name='role' onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}>
                            <div className='flex items-center gap-3 my-4'>

                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="student" id="r1" />
                                    <Label htmlFor="r1">student</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="recuriter" id="r2" />
                                    <Label htmlFor="r2">Recuriter</Label>
                                </div>
                            </div>

                        </RadioGroup>

                    </div>
                    {
                        loading ? <h1>Loading...</h1> : (<Button className="w-full">Login</Button>)

                    }


                    <p className='my-4 text-gray-500'>Don't have account ? <Link to="/sign-up" className='text-blue-500 underline'>sign-up</Link></p>
                </form>


            </div>

        </div>
    )
}

export default Login
