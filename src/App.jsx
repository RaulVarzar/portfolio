import { useRef, useState } from 'react';

import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import MobileNavbar from './components/Navbar/MobileNavbar';

import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const App = () => {
  const home = useRef();
  const skills = useRef();
  const projects = useRef();
  const contact = useRef();

  const [activeSection, setActiveSection] = useState('');

  function goToSection(sectionRef) {
    window.scrollTo({
      top: eval(sectionRef).current.offsetTop,
      behavior: 'smooth',
    });
  }

  function makeActive(section) {
    setActiveSection(section);
  }

  return (
    <div>
      <div className="md:hidden">
        <MobileNavbar activeSection={activeSection} goToSection={goToSection} />
      </div>
      <div className="max-md:hidden">
        <Navbar activeSection={activeSection} goToSection={goToSection} />
      </div>

      <SmoothScroll>
        <div className="relative bg-base-200 ">
          <Home
            ref={home}
            makeActive={makeActive}
            goToSection={() => goToSection('skills')}
          />
          <Skills ref={skills} makeActive={makeActive} />

          <Projects ref={projects} makeActive={makeActive} />
          {/* <Photography ref={photography} makeActive={makeActive} /> */}
          {/* <Contact ref={contact} makeActive={makeActive} /> */}

          <Footer ref={contact} makeActive={makeActive} />
        </div>
      </SmoothScroll>
    </div>
  );
};

export default App;
