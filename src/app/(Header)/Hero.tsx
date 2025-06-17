"use client";
import React from "react";
import Image from "next/image";
const Hero = () => {
    return (
        <>
            <div id="home" className="w-full mt-10 md:mt-0 md:h-[80vh] sm:h-[60vh] flex flex-col-reverse sm:flex-row space-y-10 md:space-y-0 ">
                <div className="sm:w-1/2 flex flex-col items-center justify-center space-y-1">
                    <h3 className="md:text-5xl mt-10 sm:text-4xl text-3xl font-semibold">
                        Vaibhav Tatkare
                    </h3>
                    <div className="flex items-center justify-center space-x-1 pl-26 pt-2 mb-10 md:mb-0 sm:mb-5 ">
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h4 className="md:text-lg">Fullstack Developer</h4>
                    </div>
                </div>
                <div className="sm:w-1/2 md:h-[60vh] h-[30vh]  flex items-center justify-center mb-10 md:mb-0">
                    {/*<Image*/}
                    {/*    src={"/user-avatar.jpg"}*/}
                    {/*    className="md:mt-20 image mb-6 md:mb-0"*/}
                    {/*    alt="PFP"*/}
                    {/*    width={300}*/}
                    {/*    height={300}*/}
                    {/*/>*/}
                </div>
            </div>
        </>
    );
};

export default Hero;