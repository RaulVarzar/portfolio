"use client";

import { useRef } from "react";
import Home from "@/components/Home/Home";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import { useFooter } from "@/components/Footer/FooterContext";
import PageTransitionAnimation from "@/components/PageTransitionAnimation";

export default function RootPage() {
  const skills = useRef();

  function goToSection() {
    skills.current?.scrollIntoView({ behavior: "smooth" });
  }

  // const { isOpen: footerOpen } = useFooter();

  return (
    <PageTransitionAnimation>
      <motion.div className="relative bg-base-100">
        <Home />

        {/* <Skills /> */}
      </motion.div>
    </PageTransitionAnimation>
  );
}
