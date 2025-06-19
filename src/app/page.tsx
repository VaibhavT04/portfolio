import Navbar from "@/app/(Header)/Navbar";
import Hero from "@/app/(Header)/Hero";
import About from "@/app/(About)/About";
import Skills from "@/app/(Skills)/Skills"
import Projects from "@/app/(Projects)/Projects"

export default function Home() {
  return (
      <>
        <Navbar/>
          <Hero/>
          <About/>
          <div className="mt-26 justify-center items-center pl-120 w-3/4">
              <Skills/>
          </div>
          <Projects/>
      </>
  );
}
