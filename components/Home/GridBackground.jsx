"use client";

import { AnimatedBox } from "@/util/exitAnimationWrapper";
import { motion } from "framer-motion";

const GridBackground = () => {
  const variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.45,
        ease: [0.75, 0, 0.3, 1],
      },
    },
  };

  return (
    <AnimatedBox y={0}>
      <motion.div
        variants={variants}
        initial="initial"
        animate="enter"
        className="absolute inset-0 bg-base-100 grid-bg"
      />
    </AnimatedBox>
  );
};

export default GridBackground;
