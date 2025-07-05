"use client";
import Navbar from "@/app/(Header)/Navbar";
import Hero from "@/app/(Header)/Hero";
import About from "@/app/(About)/About";
import Skills from "@/app/(Skills)/Skills"
import Projects from "@/app/(Projects)/Projects"
import Contact from "@/app/(Contact)/Contact"
import Footer from "@/app/Footer/Footer";
import SmoothFollower from "@/components/SmoothFollower";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ProjectsScroll from "@/components/Projects/ProjectsScroll";

export default function Home() {

  return (
      <>
          <ProgressBar/>
          <SmoothFollower/>
          <Navbar/>
          <Hero/>
          <About/>
          <div className="mt-26 justify-center items-center pl-120 w-3/4">
              <Skills/>
          </div>
          <ProjectsScroll/>
          <Contact/>
          <Footer/>
      </>
  );
}