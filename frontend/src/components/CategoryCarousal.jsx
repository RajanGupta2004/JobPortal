import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Item } from '@radix-ui/react-radio-group'
import { Button } from './ui/button'


const CategoryCarousal = () => {
    const category = [
        "Frontend Developer",
        "Backend Developer",
        "Python Developer",
        "Full Stack Developer",
        "Python Developer",
        "Full Stack Developer",
        "Python Developer",
        "Full Stack Developer",
        "Python Developer",
        "Full Stack Developer",
    ]
    return (
        <div>
            <Carousel className=" w-full  max-w-md md:max-w-xl mx-auto my-10 px-5 ">
                <CarouselContent>
                    {
                        category.map((Item, index) => (
                            <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                                <Button variant="outline" className="rounded-full"> {Item}</Button>
                            </CarouselItem>


                        ))
                    }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    )
}

export default CategoryCarousal
