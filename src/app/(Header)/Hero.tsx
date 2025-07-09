"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clapperboard, MoveDown } from 'lucide-react'
import {Button} from "@/components/ui/button";


const Hero = () => {
    return (
        <>
            <div id="home"></div>
            <div className="w-full mt-10 md:mt-0 md:h-[80vh] sm:h-[60vh] flex flex-col-reverse sm:flex-row space-y-10 md:space-y-0 ">
                <div className="sm:w-3/4 p-6 sm:p-2 flex flex-col items-center justify-center space-y-1">
                    <h3 className="md:text-5xl mt-10 ml-5 sm:text-4xl text-3xl font-semibold">
                        Vaibhav Tatkare👋
                    </h3>
                    <div className="flex items-center justify-center space-x-1 pl-26 pt-2 mb-10 md:mb-0 sm:mb-5 ">
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h4 className="text-xl text-gray-300">Fullstack Developer</h4>
                    </div>

                    <div className="mt-10 w-1/2 text-lg text-gray-400">
                        Passionate full stack web developer with fascination about AI and LLM integrations to your websites.
                    </div>
                    <div className="w-1/2 mt-8 flex justify-start">
                        <Button variant="outline" className="w-[230px] h-[55px] border-1 border-gray-600 shadow-2xl hover:cursor-pointer">
                            <a className="flex space-x-3 text-lg items-center">
                                <h3 className="text-gray-300">Get in touch</h3>
                                <Clapperboard/>
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="sm:w-1/2 p-10 md:mr-28 md:h-[60vh] h-[30vh] mt-8 flex items-center justify-center mb-10 md:mb-0">
                    <div className="flex-col space-y-5 mt-15">
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="ml-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="ml-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="ml-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="ml-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="ml-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="ml-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                    </div>
                    <Image
                        src={"/user-avatar.jpg"}
                        className="md:mt-20 mt-23 rounded-2xl image mb-6 md:mb-0"
                        alt="PFP"
                        width={300}
                        height={300}
                    />
                    <div className="flex-col space-y-5 mt-25">
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="mr-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="mr-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="mr-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="mr-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="mr-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="mr-6 w-18 font-extralight h-0.5 bg-gray-500 "></h5>
                        <h5 className="w-24 font-extralight h-0.5 bg-gray-500 "></h5>
                    </div>
                </div>
            </div>
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1 }}
                initial={{ y: 200, opacity: 0.2 }}
                className="flex items-center mt-20 md:mt-0 mb-22 sm:mt-4   justify-center  space-x-2 "
            >
                <div className="flex justify-center md:h-13 border-4 h-10  border-primary md:w-8 w-8 rounded-full">
                    <div className="w-0.5 h-3 mt-2 animate-bounce md:border-4 border-2 rounded-full border-primary"></div>
                </div>
                <div className="flex ml-3 items-center">
                    Scroll down <MoveDown className="mr-2 h-4 w-4 animate-pulse" />
                </div>
            </motion.div>
        </>
    );
};

export default Hero;