"use client";

import React, { createContext, useContext } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const LenisContext = createContext<ReturnType<typeof useLenis> | null>(null);

export const useLenisScroll = () => useContext(LenisContext);

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
    const lenis = useLenis();

    return (
        <LenisContext.Provider value={lenis}>
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
                {children}
            </ReactLenis>
        </LenisContext.Provider>
    );
};

export default SmoothScrolling;
