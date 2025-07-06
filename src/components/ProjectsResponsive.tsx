// components/ProjectsResponsive.tsx
"use client"
import React from "react";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

const ProjectsResponsive: React.FC = () => {
    return (
        <div id="projects" className="block md:hidden px-10">
            <h1 className="text-center text-5xl mt-10 font-semibold mb-10">Projects</h1>

            {projects.map((project) => (
                <div key={project.id} className="mb-12 flex flex-col gap-6">
                    <div className="w-full relative aspect-video rounded-xl overflow-hidden">
                        <Image
                            src={project.ImageUrl}
                            alt={project.title}
                            fill
                            className="object-contain border rounded-2xl"
                        />
                    </div>

                    <div className="flex flex-col gap-3 px-2">
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">TechStack:</span>
                            {[project.techLogo1, project.techLogo2, project.techLogo3].map((logo, index) => (
                                <div key={index} className={cn("bg-white rounded-full border border-gray-400 p-1", index >= 1 && "-ml-3")}>
                                    <Image
                                        src={logo}
                                        alt="tech"
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-700 text-sm">{project.description}</p>
                        <div className="flex justify-end gap-4 mt-4">
                            <Link href={project.github} target="_blank">
                                <Github className="w-8 h-8 p-1 bg-gray-500 rounded-full text-white" />
                            </Link>
                            <Link href={project.websiteUrl} target="_blank">
                                <Globe className="w-8 h-8 p-1 bg-gray-500 rounded-full text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsResponsive;
