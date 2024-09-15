import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
const filterData = [
    {
        filterType: "Loactions",
        arrays: ["Mumbai", "Luckonw", "Pune", "Goa", "Banglore"]
    },
    {
        filterType: "Industry",
        arrays: ["Frontend Developer", "Backend Developer", "Data Science", "Machine Learning",]
    },
    {
        filterType: "Salary",
        arrays: ["0 to 40K", "40k to 1 Lacks", "1 Lacks to 4 Lacks", "4 Lacks to 10 Lacks", "10 Lacks to above"]
    }
]


const FilterCard = () => {

    const [selectedValue, setSelectedValue] = useState('')

    const handleValueChange = (value) => {
        setSelectedValue(value)
    }

    console.log("selectedValue", selectedValue)

    return (
        <div className='bg-gray-50 h-[88vh] p-4'>
            <h1 className='text-xl font-bold'>Filter Jobs</h1>
            <hr />
            <div>
                {
                    filterData.map((item, i) => {
                        return (
                            <div key={i}>
                                <h1 className='text-xl font-semibold my-3'>{item.filterType}</h1>
                                <div className='pl-3'>
                                    <RadioGroup value={selectedValue} onValueChange={handleValueChange}>
                                        {
                                            item.arrays.map((item, i) => (
                                                <div key={i} className='flex gap-3'>

                                                    <RadioGroupItem value={item} />
                                                    <Label>{item}</Label>
                                                </div>

                                            ))
                                        }
                                    </RadioGroup>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}

export default FilterCard
