"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Description = ({ visible, description }) => {
  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: "-15%",
      filter: "blur(5px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 0.25,
        delay: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0.4,
        duration: 0.9,
      },
    },
  };

  return (
    <motion.div
      variants={descriptionVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <p className="z-10 py-1 text-sm font-light leading-tight tracking-wider text-left transition-all duration-300 sm:text-base text-balance opacity-90 xl:text-md text-base-content group-hover:text-neutral-content ">
        {description}
      </p>
    </motion.div>
  );
};

export default Description;
