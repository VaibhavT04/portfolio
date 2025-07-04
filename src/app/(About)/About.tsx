"use client"

import React from 'react'
import Dialogmodal from "@/components/ui/dialogmodal";
import {
    Dialog,
} from "@/components/ui/dialog"

import {motion} from "framer-motion";

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Monitor, ListCollapse, BrainCircuit, DatabaseZap } from "lucide-react"


const About = () => {
    return (
        <>
            <div className="text-center mb-12 mt-30 space-y-1">
                <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize  md:mt-0 ">
                    About Me
                </h1>
            </div>
            <div className="flex flex-row justify-between px-30">
                <motion.div
                    initial={{ x:-50, y: 100, opacity: 0.2 }}
                    whileInView={{ x:0, y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{once: true}}
                >
                    <div className="w-[450px]">
                        <Card className={"border-gray-600"}>
                            <CardHeader>
                                <CardTitle className={"text-2xl"}>Web Developer</CardTitle>
                                <CardAction>
                                    <Monitor/>
                                </CardAction>
                                <CardDescription>Gained hands-on-experience of developement </CardDescription>
                                {/*<CardAction>Card Action</CardAction>*/}
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <h3>Its an art to designing & add functionality to make your website lively</h3>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Dialog>
                                    <Dialogmodal
                                        title={"Web Developer"}
                                        check1={"Ensuring consistent design and user experience across the entire application."}
                                        check2={"Building complete web applications from initial concept to deployment."}
                                        check3={"Solving issues that arise across the entire technology stack."}>
                                        <div className="flex cursor-pointer">
                                            <h2 className="pr-2"> Details </h2>
                                            <ListCollapse/>
                                        </div>
                                    </Dialogmodal>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 140, opacity: 0.2 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{once: true}}
                >
                    <div className="w-[450px]">
                        <Card className={"border-gray-600"}>
                            <CardHeader>
                                <CardTitle className={"text-2xl"}>AI Trainee</CardTitle>
                                <CardAction>
                                    <BrainCircuit/>
                                </CardAction>
                                <CardDescription>Ai will always be a fascinating aspect</CardDescription>
                                {/*<CardAction>Card Action</CardAction>*/}
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <h3>Its an art to designing & add functionality to make your website lively</h3>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Dialog>
                                    <Dialogmodal
                                        title={"AI Trainee"}
                                        check1={"Worked on AI Image Generation."}
                                        check2={"Tried varieties of models and their results"}
                                        check3={"Covered overview of aspects of AI and its sub-domains."}>
                                        <div className="flex cursor-pointer">
                                            <h2 className="pr-2"> Details </h2>
                                            <ListCollapse/>
                                        </div>
                                    </Dialogmodal>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x:50, y: 100, opacity: 0.2 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{once: true}}
                >
                    <div className="w-[450px]">
                        <Card className={"border-gray-600"}>
                            <CardHeader>
                                <CardTitle className={"text-2xl"}>Full Stack Developer</CardTitle>
                                <CardAction>
                                    <DatabaseZap/>
                                </CardAction>
                                <CardDescription>Creating scalable websites</CardDescription>
                                {/*<CardAction>Card Action</CardAction>*/}
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <h3>Integrating LLM&apos;s to your websites for automation and reducing manual workload intervention.</h3>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Dialog>
                                    <Dialogmodal
                                        title={"Full Stack Developer"}
                                        check1={"Integrated AI for smart and effective outcomes."}
                                        check2={"Structured multiple seamless API calls"}
                                        check3={"Ensuring consistent design and user experience across the entire application."}>
                                        <div className="flex cursor-pointer">
                                            <h2 className="pr-2"> Details </h2>
                                            <ListCollapse/>
                                        </div>
                                    </Dialogmodal>
                                </Dialog>
                            </CardFooter>

                        </Card>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default About
