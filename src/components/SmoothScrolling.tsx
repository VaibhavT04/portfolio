"use client";

import React, { createContext, useContext } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const LenisContext = createContext<ReturnType<typeof useLenis> | null>(null);

export const useLenisScroll = () => useContext(LenisContext);

interface SmoothScrollingProps {
    children: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
    const lenis = useLenis();

    return (
        <LenisContext.Provider value={lenis}>
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
                <div>
                    {children}
                </div>
            </ReactLenis>
        </LenisContext.Provider>
    );
};

export default SmoothScrolling;
