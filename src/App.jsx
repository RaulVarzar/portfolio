import { useRef } from "react";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Contact/Footer";

import ScrollContext from "./components/SmoothScroll";

const App = () => {
  const skills = useRef();

  function goToSection() {
    skills.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ScrollContext>
      <Home goToSection={() => goToSection("skills")} />
      <div className="relative bg-primary">
        <div ref={skills}>
          <Skills />
        </div>
        <Projects />
        <Footer />
      </div>
    </ScrollContext>
  );
};

export default App;
