import { useRef } from "react";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

import Footer from "./components/Contact/Footer";
import ScrollContext from "./components/SmoothScroll";
import { useScroll, motion, useTransform } from "framer-motion";

const App = () => {
  const home = useRef();
  const skills = useRef();

  function goToSection() {
    skills.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <ScrollContext>
        <Home ref={home} goToSection={() => goToSection("skills")} />
        <motion.div className="relative bg-primary">
          <div ref={skills}>
            <Skills />
          </div>
          <Projects />
          <Footer />
        </motion.div>
      </ScrollContext>
    </>
  );
};

export default App;
