"use client";
import Navbar from "@/app/(Header)/Navbar";
import Hero from "@/app/(Header)/Hero";
import About from "@/app/(About)/About";
import Skills from "@/app/(Skills)/Skills"
import Projects from "@/app/(Projects)/Projects"
import ProjectsResponsive from "@/components/ProjectsResponsive";
import Contact from "@/app/(Contact)/Contact"
import Footer from "@/app/Footer/Footer";
import SmoothFollower from "@/components/SmoothFollower";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ProjectsScroll from "@/components/Projects/ProjectsScroll";
import MobileNavbar from "@/components/MobileNavbar";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {

  return (
      <>
          <AnimatedBackground/>
          <ProgressBar/>
          <SmoothFollower/>
          <Navbar/>
          <MobileNavbar/>
          <Hero/>
          <About/>
          <Skills/>
          <div className="hidden md:block">
              <ProjectsScroll />
          </div>
          <ProjectsResponsive/>
          <Contact/>
          <Footer/>
      </>
  );
}