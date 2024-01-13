import { useRef, useState } from 'react';

import Photography from './components/Photography';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact/Contact';

const App = () => {
  const home = useRef();
  const projects = useRef();
  const photography = useRef();
  const contact = useRef();
  const skills = useRef();
  const test = useRef();

  const [activeSection, setActiveSection] = useState('home');

  function goToSection(section) {
    eval(section).current.scrollIntoView();
  }

  function makeActive(element) {
    setActiveSection(element);
  }

  return (
    <div className="flex w-full justify-stretch mainn">
      <Sidebar activeSection={activeSection} goToSection={goToSection} />

      <div className="w-full">
        <section
          ref={home}
          className="grid w-full h-screen text-4xl section place-content-center text-info snap-center "
        >
          <Home makeActive={makeActive} goToSection={goToSection} />
        </section>
        <section
          ref={skills}
          className="grid h-screen text-4xl section place-content-center text-info snap-center"
        >
          <Skills makeActive={makeActive} />
        </section>
        <section
          ref={projects}
          className="grid h-screen text-4xl section place-content-center text-info snap-center"
        >
          <Projects makeActive={makeActive} />
        </section>
        <section
          ref={photography}
          className="grid h-screen text-4xl section place-content-center text-info snap-center"
        >
          <Photography makeActive={makeActive} />
          <div ref={test}></div>
        </section>
        <section
          ref={contact}
          className="grid h-screen text-4xl section place-content-center text-info snap-center"
        >
          <Contact makeActive={makeActive} />
        </section>
      </div>
    </div>
  );
};

export default App;
