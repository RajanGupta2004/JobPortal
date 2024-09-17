import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"


const AppliedJobTable = () => {
    return (
        <div className='flex items-start p-3 border w-[65%]'>
            <div className=' w-full'>
                <h1 className='font-bold my-6'>Applid Jobs</h1>

                <div className=' '>
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Date</TableHead>
                                <TableHead>Job Role</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {
                                [1, 2, 3, 4, 5].map((item) => (

                                    <TableRow>
                                        <TableCell className="font-medium">23/02/2000</TableCell>
                                        <TableCell>Frontend</TableCell>
                                        <TableCell>TCS</TableCell>
                                        <TableCell className="text-right"><Badge variant="">Selected</Badge>
                                        </TableCell>
                                    </TableRow>

                                ))
                            }


                        </TableBody>
                    </Table>
                </div>

            </div>
        </div>
    )
}

export default AppliedJobTable
