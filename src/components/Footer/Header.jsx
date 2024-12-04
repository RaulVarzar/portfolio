import { motion } from "framer-motion";
import splitStringUsingRegex from "../../util/splitString";

import ChatIcon from "./ChatIcon";

const Header = ({ isInView }) => {
  const headerVariants = {
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
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

  const TITLE = splitStringUsingRegex("Let's  talk");

  return (
    <motion.span
      variants={headerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-row px-0 overflow-hidden text-6xl  w-full justify-center tracking-tight md:text-8xl xl:text-9xl"
    >
      {TITLE.map((letter, i) => (
        <motion.h1
          variants={letterVariants}
          className="pr-0.5 min-w-2 md:min-w-3 xl:min-w-5 font-bold leading-tight"
          key={i}
        >
          {letter}
        </motion.h1>
      ))}
    </motion.span>
  );
};

export default Header;
