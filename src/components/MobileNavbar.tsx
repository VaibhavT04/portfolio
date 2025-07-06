"use client";

import React from "react";
import {
    Home,
    UserCircle,
    Hammer,
    Folder,
    Send
} from "lucide-react";

import { useLenisScroll } from "@/components/SmoothScrolling";

const navItems = [
    { icon: <Home className="w-6 h-6" />, id: "#home", label: "Home" },
    { icon: <UserCircle className="w-6 h-6" />, id: "#about", label: "About" },
    { icon: <Hammer className="w-6 h-6" />, id: "#skills", label: "Skills" },
    { icon: <Folder className="w-6 h-6" />, id: "#projects", label: "Projects" },
    { icon: <Send className="w-6 h-6" />, id: "#contact", label: "Contact" },
];

const MobileNavbar: React.FC = () => {
    const lenis = useLenisScroll();

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const el = document.querySelector(id);
        if (lenis && el) {
            lenis.scrollTo(el, {
                offset: -100,
                duration: 1.5,
                easing: (t) => t,
            });
        }
    };

    return (
        <nav className="fixed shadow-2xl bottom-4 left-4 right-4 z-50 sm:hidden border-3 bg-white dark:bg-amber-50/90 border-gray-600 dark:border-zinc-700 rounded-full px-12 py-3 mx-8 mb-2 flex justify-between items-center">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-gray-700 dark:text-black hover:text-yellow-400 transition-colors"
                    aria-label={item.label}
                >
                    {item.icon}
                </button>
            ))}
        </nav>
    );
};

export default MobileNavbar;
