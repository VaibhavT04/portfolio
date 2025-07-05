"use client";

import React from 'react'
import Style from './ProgressBar.module.css'
import { useScroll, motion } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className={Style.progressBar}
            style={{scaleX : scrollYProgress}}
        ></motion.div>
    )
}
export default ProgressBar
