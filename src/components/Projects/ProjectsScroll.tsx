"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";
import { Github, Globe, FileText } from 'lucide-react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type Project = {
    id: number;
    title: string;
    description: string;
    github: string;
    ImageUrl: string;
    websiteUrl: string;
    color: string;
    techLogo1: string;
    techLogo2: string;
    techLogo3: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "AI Interviewer",
        description:
            "AI interview platform using Voice Agent workflow (Vapi) and Gemini LLM for dynamic question generation, real-time feedback. Firebase Auth, Firestore DB, Next.js frontend.",
        github: "https://github.com/VaibhavT04/Interview-Prep-AI",
        ImageUrl: "/ProjInterview.png",
        websiteUrl: "https://interview-prep-ai-three.vercel.app/",
        color: "orange",
        techLogo1: "/nextjs.svg",
        techLogo3: "/tailwind.svg",
        techLogo2: "/firebase.svg"
    },
    {
        id: 2,
        title: "AI LMS Saas Platform",
        description:
            "AI LMS using LLMs for material generation, course recommendations. Stripe-integrated payments, Firestore DB, dynamic content via admin API, built with Next.js.",
        github: "https://github.com/VaibhavT04/Eduvia-AI",
        ImageUrl: "/LMS.png",
        websiteUrl: "https://eduvia-phi.vercel.app/",
        color: "blue",
        techLogo1: "/nextjs.svg",
        techLogo3: "/tailwind.svg",
        techLogo2: "/postgres.svg"
    },
    {
        id: 3,
        title: "ML-Brain Tumor Detection",
        description:
            "A machine learning-based system that classifies brain MRI scans by predicting tumor presence using three different ML algorithms. It outputs the probability (%) of tumor detection for each model to aid diagnosis.",
        github: "https://github.com/VaibhavT04/",
        ImageUrl: "/ML.jpeg",
        websiteUrl: "https://github.com/VaibhavT04/",
        color: "red",
        techLogo1: "/python.svg",
        techLogo2: "/jupyter.svg",
        techLogo3: "/html.svg"
    },
];

const ProjectsScroll: React.FC = () => {
    const sectionRefs = useRef<HTMLElement[]>([]);
    const imageRefs = useRef<HTMLDivElement[]>([]);

    useLayoutEffect(() => {
        const triggers: ScrollTrigger[] = [];

        sectionRefs.current.forEach((section, index) => {
            const image = imageRefs.current[index];

            if (section && image) {
                const isLast = index === sectionRefs.current.length - 1;

                triggers.push(
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top top",
                        end: isLast ? "bottom 80%" : "bottom top", // ✅ last one unpins sooner
                        scrub: true,
                        pin: image,
                        pinSpacing: false,
                        markers: false,
                    })
                );
            }
        });

        return () => triggers.forEach((t) => t.kill());
    }, []);


    return (
        <>
            <div>
                <h1 id="projects" className="text-center text-5xl md:text-6xl -mb-10 sm:text-6xl font-semibold capitalize  md:mt-0 ">
                    Projects
                </h1>
            </div>
            <div className={styles.wrapper}>
                {projects.map((project, index) => (
                    <section
                        key={project.id}
                        className={styles.projectSection}
                        ref={(el) => {
                            if (el) sectionRefs.current[index] = el;
                        }}
                    >
                        <div
                            className={styles.imageWrapper}
                            ref={(el) => {
                                if (el) imageRefs.current[index] = el;
                            }}
                        >
                            <Image
                                src={project.ImageUrl}
                                alt={project.title}
                                fill
                                priority
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.content}>
                            <motion.div
                                initial={{ x:0, y: 120, opacity: 0.4 }}
                                whileInView={{ x:0, y: 0, opacity: 1 }}
                                transition={{ duration: 1.8 }}
                                viewport={{once: true}}
                            >
                                <div>
                                    <h1 className="text-4xl font-bold">{project.title}</h1>
                                </div>
                                <div>
                                    <div className="flex flex-row">
                                        <h2 className="mr-4 font-bold text-center my-8">TechStack :</h2>
                                        {[project.techLogo1, project.techLogo2, project.techLogo3].map((logo, index) => (
                                            <div key={index} className={cn("relative my-4 -ml-2 group bg-dark-300 rounded-full p-2 flex-center", index >=1 && '-ml-6')}>
                                                <Image src={logo} alt="logo" width={100} height={100} className="size-9 bg-white p-1 rounded-full border-1 border-gray-600" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>
                                            {project.description}
                                        </h3>
                                    </div>
                                    <div className="flex flex-row justify-end mt-8 space-x-3 mr-10">
                                        <Link
                                            target={"_blank"}
                                            href={project.github}
                                            className="flex border-2 rounded-full hover:border-amber-50 hover:scale-115 justify-end cursor-pointer"
                                        >
                                            <Github width={45} height={45} className="cursor-pointer p-2 bg-gray-500 rounded-full"/>
                                        </Link>
                                        <Link
                                            target={"_blank"}
                                            href={project.websiteUrl}
                                            className="flex border-2 rounded-full hover:border-amber-50 hover:scale-115 justify-end cursor-pointer"
                                        >
                                            <Globe width={45} height={45} className="cursor-pointer p-2 bg-gray-500 rounded-full"/>
                                        </Link>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
};

export default ProjectsScroll;
