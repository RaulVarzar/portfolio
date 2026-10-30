"use client";

import { useFooter } from "@/components/Footer/FooterContext";
import NavButton from "./NavButton";
import ContactButton from "./ContactButton/ContactButton";
import { motion } from "framer-motion";
import { TiPlusOutline } from "react-icons/ti";
import { AnimatedBox } from "@/util/exitAnimationWrapper";

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

  return (
    <AnimatedBox scale={0.8} duration={0.65}>
      <motion.nav className="fixed z-[9999] bottom-0 border-1 border-opacity-25 rounded-[0.3rem]  border-base-content inset-x-0 flex items-center justify-center w-fit gap-1.5  py-1.5 px-1.5 mb-6 xl:mb-8 2xl:mb-10 mx-auto max-w-screen-3xl">
        <NavButton label="Home" link="/" active={true} />
        <NavButton label="Skills" link="skills" />
        <NavButton label="Projects" link="projects" />
        {/* <ContactButton onClick={toggleFooter} /> */}
      </motion.nav>
    </AnimatedBox>
  );
};

export default Navbar;
