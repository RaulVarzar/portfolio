"use client";

import { motion } from "framer-motion";

const ControlButton = ({
  label,
  onClick,
  colored = false,
  className = "",
  children,
}) => {
  const bgVariants = {
    idle: {
      y: "102%",
      transition: { duration: 0.43, ease: [0.75, 0, 0.25, 1] },
    },
    hover: {
      y: "0%",
      transition: { duration: 0.65, ease: [0.75, 0, 0.25, 1] },
    },
  };

  const labelVariants = {
    idle: {
      opacity: 0.8,
      scale: 1,
      transition: { duration: 0.5, ease: [0.8, 0, 0.2, 1] },
    },
    hover: {
      opacity: 1,
      scale: 1.02,
      transition: { duration: 0.4, ease: [0.8, 0, 0.2, 1] },
    },
  };

  return (
    <motion.button
      initial="idle"
      whileHover="hover"
      animate="idle"
      onClick={onClick}
      className={`relative flex flex-row uppercase items-center gap-3  overflow-hidden tracking-wide   w-fit  text-[0.85rem]  ${className} ${
        colored
          ? " text-base-content font-semibold text-opacity-100 bg-neutral px-3.5 py-1.5 md:py-2 "
          : "  text-neutral-content font-medium  pr-3 pl-4 py-1.5 md:py-2 border-base-content border-b border-opacity-15"
      }`}
    >
      <motion.p className="z-10" variants={labelVariants}>
        {label}
      </motion.p>
      {children && (
        <span className="z-10 grid p-2 text-xs rounded-sm place-content-center backdrop-brightness-150">
          {children}
        </span>
      )}

      {colored && (
        <motion.div
          variants={bgVariants}
          layoutId="hoverLine"
          className="absolute inset-0 bg-accent -z-0"
        />
      )}
    </motion.button>
  );
};

export default ControlButton;
