import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Photography from './components/Photography/Photography';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';

const App = () => {
  const home = useRef();
  const projects = useRef();
  const photography = useRef();
  const contact = useRef();
  const skills = useRef();

  const [activeSection, setActiveSection] = useState('');

  function goToSection(section) {
    eval(section).current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function makeActive(section) {
    setActiveSection(section);
  }

  return (
    <div className="">
      <motion.div
        layout
        className="fixed top-0 right-0 z-50 px-4 py-1 overflow-hidden text-base italic font-semibold uppercase md:py-2 md:px-5 md:text-lg w-fit bg-neutral rounded-es-xl 2xl:hidden"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, delay: 0.4, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            key={activeSection}
          >
            #{activeSection}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <div className="flex 2xl:w-11/12 mx-auto max-w-[2100px] ">
        <Sidebar activeSection={activeSection} goToSection={goToSection} />

        <div className="w-full px-3">
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
