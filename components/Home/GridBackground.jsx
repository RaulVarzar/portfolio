"use client";

import { motion } from "framer-motion";
import { usePageAnimation } from "@/hooks/usePageAnimation";

const GridBackground = () => {
  const controls = usePageAnimation({
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.75,
        ease: [0.75, 0, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  });
  return (
    <motion.div
      animate={controls}
      className="absolute inset-0 bg-base-100 grid-bg"
    />
  );
};

export default GridBackground;
