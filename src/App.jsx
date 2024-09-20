import { useRef, useState } from "react";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";

import Footer from "./components/Contact/Footer";
import ScrollContext from "./components/SmoothScroll";

const App = () => {
  const home = useRef();
  const skills = useRef();

  function goToSection() {
    skills.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* <div className="md:hidden">
        <MobileNavbar activeSection={activeSection} goToSection={goToSection} />
      </div> */}
      {/* <div className="">
        <Navbar activeSection={activeSection} goToSection={goToSection} />
      </div> */}

      <ScrollContext>
        <div className="bg-accent">
          <Home ref={home} goToSection={() => goToSection("skills")} />
          <div ref={skills}>
            <Skills />
          </div>
          <Projects />

          <Footer />
        </div>
      </ScrollContext>
    </>
  );
};

export default App;
