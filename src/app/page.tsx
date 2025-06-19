import Navbar from "@/app/(Header)/Navbar";
import Hero from "@/app/(Header)/Hero";
import About from "@/app/(About)/About";
import Skills from "@/app/(Skills)/Skills"

export default function Home() {
  return (
      <>
        <Navbar/>
          <Hero/>
          <About/>
          <div className="mt-26">
              <Skills/>
          </div>
      </>
  );
}
