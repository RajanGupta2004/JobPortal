import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Link, useNavigate } from 'react-router-dom'
import { USER_END_POINTS } from "../../utils/Constant.js"
import axios from 'axios'
import { toast } from "sonner"
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { store } from '@/redux/store'


const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading } = useSelector((store) => store.auth)
    console.log("loading1", loading)


    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(inputs)
        try {
            dispatch(setLoading(true))

            const res = await axios.post(`${USER_END_POINTS}/register`, inputs, {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer your_token_here',
                // 'Custom-Header': 'custom_value'
            })

            if (res.data.success) {
                toast(res.data.message)
                navigate("/login")
                toast.success(res.data.message);
            }

            // console.log(res.data)



        } catch (error) {
            console.log(error)
            toast(error.response.data.message)

        } finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto p-3 flex flex-col items-center justify-center '>
                <form onSubmit={submitHandler} className='lg:w-1/3 md:w-1/2 shadow-lg p-5 rounded-md '>
                    <Label className="text-xl font-bold">Sign Up</Label>

                    <div className='my-4'>
                        <Label className="text-sm font-bold">Name:</Label>
                        <Input type="text" name="fullName" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })} placeholder="Name..." />

                    </div>
                    <div className='my-4'>
                        <Label className="text-sm font-bold">Email:</Label>
                        <Input type="email" name='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })} placeholder="Email..." />

                    </div>
                    <div className='my-4'>
                        <Label className="text-sm font-bold">Phone No:</Label>
                        <Input type="text" name='phoneNumber' value={inputs.phoneNo} onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })} placeholder="Phone..." />

                    </div>
                    <div className='my-4'>
                        <Label className="text-sm font-bold">Password:</Label>
                        <Input type="password" name="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })} placeholder="password..." />

                    </div>


                    <div className='flex items-center gap-2 my-4'>
                        <RadioGroup defaultValue={inputs.role} name="role" onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}>
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
                        <div>

                            <Input type="file" name='file' onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.files?.[0] })} placeholder="upload..." />
                        </div>

                    </div>
                    {
                        loading ? <h1>please wait</h1> : <Button className="w-full">Sign Up</Button>

                    }

                    <p className='my-4 text-gray-500'>Don't have account ? <Link to="/login " className='text-blue-500 underline'>Login</Link></p>
                </form>


            </div>
        </div>
    )
}

export default SignUp
