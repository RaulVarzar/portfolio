import { useRef } from "react";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import ScrollContext from "./components/SmoothScroll";

const App = () => {
  const skills = useRef();

  function goToSection() {
    skills.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ScrollContext>
      <div className="relative z-10">
        <Home goToSection={() => goToSection("skills")} />
        <div ref={skills}>
          <Skills />
        </div>
        <Projects />
      </div>
      <Footer />
    </ScrollContext>
  );
};

export default App;
