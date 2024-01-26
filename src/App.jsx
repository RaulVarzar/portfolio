import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Photography from "./components/Photography/Photography";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./components/Contact/Contact";
import SmoothScroll from "./components/SmoothScroll";
import { HamburgerButton } from "./components/Hamburger/HamburgerButton";

const App = () => {
  const home = useRef();
  const projects = useRef();
  const photography = useRef();
  const contact = useRef();
  const skills = useRef();

  const [activeSection, setActiveSection] = useState("");

  function goToSection(section) {
    eval(section).current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function makeActive(section) {
    setActiveSection(section);
  }

  return (
    <div className="relative">
      <SmoothScroll>
        {/* <Sidebar activeSection={activeSection} goToSection={goToSection} /> */}

        <Home ref={home} makeActive={makeActive} goToSection={goToSection} />
        <Skills ref={skills} makeActive={makeActive} />

        <Projects ref={projects} makeActive={makeActive} />
        {/* <Photography ref={photography} makeActive={makeActive} /> */}
        <Contact ref={contact} makeActive={makeActive} />
      </SmoothScroll>
    </div>
  );
};

export default App;
