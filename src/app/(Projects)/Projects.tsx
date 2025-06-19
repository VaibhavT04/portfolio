import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import data from "./data.json"

const Projects = () => {
    var currProj = data[1];

    const getData(i){
        currProj = data[i]
    }

    return (
        <div className="w-3/4 pl-100 flex flex-col justify-center">
            <div className="text-center mb-20">
                <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize  md:mt-0 ">
                    Projects
                </h1>
            </div>

            <div className="flex items-center justify-center">
                <div className="flex flex-row">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="max-w-xs"
                    >
                        <CarouselContent className="-mt-20 flex justify-center w-full h-[200px]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex items-center justify-center p-6">
                                                {getData(index + 1)}
                                                <div>
                                                    curr
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Projects
