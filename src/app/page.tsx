import Navbar from "@/app/(Header)/Navbar";
// import About from "@/app/(About)/About";
import Hero from "@/app/(Header)/Hero";
import About from "@/app/(About)/About";

export default function Home() {
  return (
      <>
        <Navbar/>
          <Hero/>
          <About/>
      </>
  );
}
