"use client";
import { motion } from "framer-motion";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleCheckBigIcon } from 'lucide-react'


type SkillsProps = {
    name: string;
    x: string;
    y: string;
    pt1: string;
    pt2: string;
    pt3: string;
};
const Skills = ({ name, x, y, pt1, pt2, pt3 }: SkillsProps) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold md:bg-primary text-primary md:text-secondary py-2 px-3 shadow-primary cursor-pointer absolute lg:py-3 md:text-sm md:py-1.5 md:px-4  sm:font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
        >
            <DropdownMenu>
                <DropdownMenuTrigger>{name}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Applications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <CircleCheckBigIcon/>
                        {pt1}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CircleCheckBigIcon/>
                        {pt2}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CircleCheckBigIcon/>
                        {pt3}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </motion.div>
    );
};

const Skill = () => {
    return (
        <>
            <div id="skills" className="">
                <div className="text-center space-y-1 -mb-10">
                    <h1 className="text-center mb-10 pt-10 text-5xl md:text-7xl sm:text-6xl font-semibold capitalize mt-22 md:mt-20 ">
                        Skills
                    </h1>
                    <p className="text-gray-500">Equipped with these TechStack</p>
                </div>
                <div className="flex w-3/4 mx-auto relative lg:h-screen md:h-[80vh] h-[50vh] items-center justify-center  bg-circularLightsm  md:bg-circularLight dark:bg-circularDarksm md:dark:bg-circularDark  ">
                    <motion.div
                        className="flex items-center justify-center rounded-full font-semibold bg-transparent text-primary md:bg-primary md:text-secondary shadow-primary cursor-pointer lg:p-8 md:p-5 sm:p-6 sm:text-xs"
                        whileHover={{ scale: 1.05 }}
                    >
                        Tech
                    </motion.div>
                    <Skills name="Tailwind" x="-24.5vw" y="1.5vw" pt1="Styled portfolio with animations" pt2="Built clean UIs in IntelliPrep & InternMatch" pt3="Accelerated dev with utility-first CSS"/>
                    <Skills name="HTML5" x="-6vw" y="-9vw" pt1="Structured UI layouts across projects" pt2="Built semantic pages in Codsoft Internship" pt3="Powered core UI foundations"/>
                    <Skills name="Agentic Workflows" x="21vw" y="7.5vw" pt1="Built N8N-FBosed flows during hackathon" pt2="Integrated Langflow for multi-step AI" pt3="Enabled dynamic prompt chaining"/>
                    <Skills name="NextJS" x="1vw" y="10vw" pt1="Created AI-Interviewer using workflows and Firebase" pt2="Basic CRUD app for blogs" pt3="This portfolio itself :)"/>
                    <Skills name="Firebase" x="-19vw" y="-16.2vw" pt1="Used for auth & DB in IntelliPrep" pt2="Handled storage & hosting" pt3="Enabled real-time updates"/>
                    <Skills name="PostgresSQL" x="14vw" y="-13.5vw" pt1="Stored structured data in InternMatch" pt2="Queried resumes and matches" pt3="Integrated with Supabase backend"/>
                    <Skills name="React" x="30vw" y="-6.5vw" pt1="Built UI for IntelliPrep & InternMatch" pt2="Handled dynamic dashboard views" pt3="Created modular components"/>
                    <Skills name="ML Models" x="-33.2vw" y="-10.8vw" pt1="Built models for tumor & resume detection" pt2="Applied in real-world use cases" pt3="Explored during hackathons & R&D"/>
                    <Skills name="TypeScript" x="-26.2vw" y="17.2vw" pt1="Typed frontend logic in IntelliPrep" pt2="Used in AI agent development" pt3="Improved reliability & scalability"/>
                    <Skills name="VectorDB" x="19.2vw" y="16.8vw" pt1="Stored embeddings for AI Interviewer" pt2="Queried documents in StartX" pt3="Enhanced accuracy in RAG pipelines"/>

                </div>
            </div>
        </>
    );
};

export default Skill;
