"use client";

import { useRef } from "react";
import Home from "@/components/Home/Home";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import { useFooter } from "@/components/Footer/FooterContext";

export default function RootPage() {
  const skills = useRef();

  function goToSection() {
    skills.current?.scrollIntoView({ behavior: "smooth" });
  }

  const { isOpen: footerOpen } = useFooter();

  return (
    <>
      <motion.div
        className=""
        animate={
          footerOpen
            ? { opacity: 0.55, scale: 0.99, y: "3vh", filter: "blur(4px)" }
            : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: 1.1, ease: [0.6, 0, 0.2, 1] }}
      >
        <Home goToSection={() => goToSection()} />
        <div ref={skills}>
          <Skills />
        </div>
        <Projects />
      </motion.div>
      <Footer />
    </>
  );
}
