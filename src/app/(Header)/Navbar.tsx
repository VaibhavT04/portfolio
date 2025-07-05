"use client";

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Github, Twitter, LinkedinIcon, File, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLenisScroll } from "@/components/SmoothScrolling";


function Navbar() {
    const {setTheme} = useTheme();

    const lenis = useLenisScroll();

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault(); // prevent default jump
        const el = document.querySelector(id);
        if (lenis && el) {
            lenis.scrollTo(el, {
                offset: -100, // adjust for fixed navbar if needed
                duration: 1.5,
                easing: (t) => t, // linear scroll
            });
        }
    }

    return (
        <nav className="sm:flex hidden z-100 w-full md:fixed pt-6 pb-5 justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-600">
            <div className="w-1/3 flex-col flex items-center ">
                <div className=" flex space-x-2 items-center justify-center">
                    <DropdownMenu>
                        <Avatar className="text-lg">
                            <DropdownMenuTrigger>
                                <AvatarImage src="https://github.com/VaibhavT04.png" alt="PFP" />
                                <AvatarFallback>PFP</AvatarFallback>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Links</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer ">
                                    <a
                                        className="flex items-center justify-center "
                                        target="_blank"
                                        href="https://github.com/DhrishP "
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        <span>GitHub</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer ">
                                    <a
                                        className="flex items-center justify-center "
                                        target="_blank"
                                        href="https://www.linkedin.com/in/dhrish-parekh-89a845262/ "
                                    >
                                        <LinkedinIcon className="mr-2 h-4 w-4" />
                                        <span>LinkedIn</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer ">
                                    <a
                                        className="flex items-center justify-center "
                                        target="_blank"
                                        href="https://twitter.com/whycurious101 "
                                    >
                                        <Twitter className="mr-2 h-4 w-4" />
                                        <span>Twitter</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer ">
                                    <a
                                        className="flex items-center justify-center "
                                        target="_blank"
                                        href="https://dhrishp.tiiny.site"
                                    >
                                        <File className="mr-2 h-4 w-4" />
                                        <span>Resume</span>
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </Avatar>
                        <h3 className="font-bold text-2xl pl-3">Vaibhav Tatkare</h3>
                    </DropdownMenu>
                </div>
            </div>
            <ul className="w-1/2 flex cursor-pointer mr-2 md:mr-2 text-lg items-center space-x-6 justify-center  ">
                <li className="hover:text-gray-600">
                    <a href="#home" onClick={(e) => scrollToSection(e, "#home")}>Home</a>
                </li>
                <li className="hover:text-gray-600">
                    <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>About</a>
                </li>
                <li className="hover:text-gray-600">
                    <a href="#skills" onClick={(e) => scrollToSection(e, "#skills")}>Skills</a>
                </li>
                <li className="hover:text-gray-600">
                    <a href="#projects" onClick={(e) => scrollToSection(e, "#projects")}>Projects</a>
                </li>
                <li className="hover:text-gray-600">
                    <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Contact</a>
                </li>
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
