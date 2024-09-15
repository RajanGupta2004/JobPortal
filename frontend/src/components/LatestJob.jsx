import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const LatestJob = () => {
    const LatestJob = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='mx-auto  flex  flex-col gap-10 px-20 my-10'>
            <h1 className=' text-xl w-full px-4 md:text-3xl font-bold'><span className='text-purple-700'>Latest and Top</span> Job Opeaning</h1>
            <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '  >
                {
                    LatestJob.map(() => (
                        <Card className=" shadow-xl cursor-pointer">
                            <CardHeader>
                                <CardTitle className='text-xl font-bold'>Google</CardTitle>
                                <CardDescription>India</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h1 className='text-xl font-bold'>FullStack Developer</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, itaque?</p>
                            </CardContent>
                            <CardFooter>
                                <span className=' mx-2 font-semibold text-purple-500'>2 Positions</span>
                                <span className='mx-2 font-semibold text-orange-700'>Full Time</span>
                                <span className=' mx-2 font-semibold text-green-600'>12 LPA</span>
                            </CardFooter>
                        </Card>

                    ))
                }






            </div>

        </div>
    )
}

export default LatestJob
