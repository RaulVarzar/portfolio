"use client";

import { motion } from "framer-motion";

const ControlButton = ({ label, onClick, className = "" }) => {
  const bgVariants = {
    idle: {
      y: "-140%",
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: { y: "0%", transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] } },
  };

  const labelVariants = {
    idle: {
      opacity: 0.5,
      scale: 1,
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: {
      opacity: 1,
      scale: 1.04,
      transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] },
    },
  };

  return (
    <motion.button
      initial="idle"
      whileHover="hover"
      animate="idle"
      onClick={onClick}
      className={`relative px-10 py-4 overflow-hidden tracking-wide rounded-sm borde w-fit md:py-6 border-base-content border-opacity-15 ${className}`}
    >
      <motion.p variants={labelVariants}>{label}</motion.p>
      <motion.div
        variants={bgVariants}
        layoutId="hoverLine"
        className="absolute top-0 left-0 w-full h-0.5 -z-10 bg-secondary"
      />
    </motion.button>
  );
};

export default ControlButton;
