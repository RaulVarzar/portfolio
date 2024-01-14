import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Photography from "./components/Photography";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./components/Contact/Contact";

const App = () => {
  const home = useRef();
  const projects = useRef();
  const photography = useRef();
  const contact = useRef();
  const skills = useRef();

  const [activeSection, setActiveSection] = useState("");

  function goToSection(section) {
    eval(section).current.scrollIntoView();
  }

  function makeActive(section) {
    setActiveSection(section);
  }

  const cursor = useRef(null);
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };

  return (
    <div className="" onMouseMove={changePosition}>
      <div className="cursor-style" ref={cursor}></div>

      <AnimatePresence>
        <motion.div
          key={activeSection}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, delay: 0.4, opacity: 0.1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed text-3xl italic font-bold uppercase top-4 right-8 2xl:hidden"
        >
          #{activeSection}
        </motion.div>
      </AnimatePresence>

      <div className="flex 2xl:w-11/12 mx-auto max-w-[2100px] ">
        <Sidebar activeSection={activeSection} goToSection={goToSection} />

        <div className="w-full px-6">
          <Home ref={home} makeActive={makeActive} goToSection={goToSection} />
          <Skills ref={skills} makeActive={makeActive} />
          <Projects ref={projects} makeActive={makeActive} />
          <Photography ref={photography} makeActive={makeActive} />
          <Contact ref={contact} makeActive={makeActive} />
        </div>
      </div>
    </div>
  );
};

export default App;
