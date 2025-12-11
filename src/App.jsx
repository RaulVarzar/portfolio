import { useRef } from "react";

import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import { FooterProvider } from "../components/Footer/FooterContext";

import ScrollContext from "../components/SmoothScroll";

const App = () => {
  const skills = useRef();

  // function goToSection() {
  //   skills.current?.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <ScrollContext>
      <FooterProvider>
        <Home />
        <div ref={skills}>
          <Skills />
        </div>
        <Projects />

        <Footer />
      </FooterProvider>
    </ScrollContext>
  );
};

export default App;
