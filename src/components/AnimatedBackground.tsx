"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();

  const lightGradient =
    "linear-gradient(120deg,rgb(255, 255, 255),rgb(226, 255, 250),rgb(255, 255, 255),rgb(158, 158, 158))";
  const darkGradient =
    "linear-gradient(120deg,rgb(13, 24, 53),rgb(0, 0, 0),rgb(15, 33, 61),rgb(0, 0, 0))";

  const isLight = resolvedTheme === "light";

  return (
    <>
      <div className="grain-animated-overlay" />
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -2,
          backgroundImage: isLight ? lightGradient : darkGradient,
          backgroundSize: "400% 400%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "100% 100%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}