"use client";

import { useFooter } from "@/components/Footer/FooterContext";
import NavButton from "./NavButton";
import ContactButton from "./ContactButton/ContactButton";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTransitionStore } from "@/hooks/transitionStore";
import { GoPlus } from "react-icons/go";
import { TiPlusOutline } from "react-icons/ti";

const Navbar = () => {
  const bgVariants = {
    idle: {
      y: "-140%",
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: { y: "0%", transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] } },
  };
  const labelVariants = {
    idle: {
      opacity: 0.6,
      scale: 1,
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: {
      opacity: 1,
      scale: 1.04,
      transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] },
    },
  };

  const { toggleFooter } = useFooter();

  const triggerExit = useTransitionStore((state) => state.triggerExit);

  return (
    <motion.nav
      layout
      className="fixed z-[99999] top-0 inset-x-0 flex items-center justify-end w-full gap-4 py-6 px-2 sm:px-4 lg:px-8 xl:py-8 3xl:py-10 mx-auto max-w-screen-3xl"
    >
      <NavButton label="My skills">
        <TiPlusOutline />
      </NavButton>
      <NavButton label="Projects" onClick={() => triggerExit("/projects")}>
        <TiPlusOutline />
      </NavButton>
      <ContactButton onClick={toggleFooter} />
    </motion.nav>
  );
};

export default Navbar;
