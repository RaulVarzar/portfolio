"use client";

import { motion } from "framer-motion";
import { useFooter } from "@/components/Footer/FooterContext";

const ControlButton = ({ label, onClick, className = "", children }) => {
  const { closeFooter, isOpen } = useFooter();
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
    <motion.div
      initial={{ y: 0 }}
      animate={
        isOpen
          ? {
              y: "-150%",
              opacity: 0,
              transition: { duration: 0.4, ease: [0.75, 0, 0.25, 1] },
            }
          : {
              y: "0%",
              opacity: 1,
              transition: { duration: 0.65, ease: [0.75, 0, 0.25, 1] },
            }
      }
    >
      <motion.button
        initial="idle"
        whileHover="hover"
        animate="idle"
        onClick={() => {
          closeFooter();
          onClick?.();
        }}
        className={`relative flex flex-row uppercase items-center   overflow-hidden tracking-wide  text-neutral-content font-medium  pr-2 pl-3 py-1.5 md:py-2 gap-1.5 border-base-content border- border-opacity-15 w-fit  text-[0.85rem]  ${className}      }`}
      >
        <motion.p className="z-10" variants={labelVariants}>
          {label}
        </motion.p>
        {children && (
          <span className="z-10 grid p-2 text-xs rounded-sm place-content-center backdrop-brightness-150">
            {children}
          </span>
        )}
      </motion.button>
    </motion.div>
  );
};

export default ControlButton;
