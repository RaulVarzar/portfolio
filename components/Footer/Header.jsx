"use client";

import { motion } from "framer-motion";
import splitStringUsingRegex from "@/utils/splitString";

import ChatIcon from "@/components/Footer/ChatIcon";

const Header = ({}) => {
  const headerVariants = {
    visible: {
      transition: { staggerChildren: 0.035, delayChildren: 0.6 },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: "110%",
      filter: "blur(7px)",
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.485, 0.415, 0.145, 1.0] },
    },
  };

  const TITLE = splitStringUsingRegex("Let's  talk!");

  return (
    <motion.span
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-row justify-center w-full px-0 overflow-hidden text-4xl tracking-tight uppercase md:justify-start sm:text-6xl md:text-7xl 2xl:text-8xl"
    >
      {TITLE.map((letter, i) => (
        <motion.h1
          variants={letterVariants}
          className="pr-0.5 font-black text-neutral-content leading-none min-w-2 md:min-w-3 xl:min-w-5"
          key={i}
        >
          {letter}
        </motion.h1>
      ))}
    </motion.span>
  );
};

export default Header;
