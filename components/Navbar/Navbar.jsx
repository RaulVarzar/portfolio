"use client";

import { useFooter } from "@/components/Footer/FooterContext";
import NavButton from "./NavButton";
import ContactButton from "./ContactButton/ContactButton";
import { motion } from "framer-motion";

const Navbar = () => {
  const { toggleFooter } = useFooter();

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: [0.8, 0, 0.2, 1] }}
      className="fixed z-[9999] bottom-0 border border-opacity-25 rounded-[0.3rem] border-base-content bg-base-100/40 backdrop-blur-md inset-x-0 flex items-center justify-center w-fit py-1.5 px-1.5 mb-6 xl:mb-8 2xl:mb-10 mx-auto max-w-screen-3xl"
    >
      <NavButton label="Home" link="/" />
      <NavButton label="Skills" link="/skills" />
      <NavButton label="Projects" link="/projects" />
      <ContactButton onClick={toggleFooter} />
    </motion.nav>
  );
};

export default Navbar;
