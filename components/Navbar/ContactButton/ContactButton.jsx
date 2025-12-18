"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useFooter } from "../../Footer/FooterContext";

import ButtonLabel from "./ButtonLabel";
import ButtonIcon from "./ButtonIcon";

const buttonVariants = {
  idle: {
    scale: 1,
    transition: { duration: 0.45, ease: [0.75, 0, 0.25, 1] },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.65, ease: [0.75, 0, 0.25, 1] },
  },
};

const bgVariants = {
  idle: {
    y: "102%",
    transition: { duration: 0.45, ease: [0.75, 0, 0.25, 1] },
  },
  hover: {
    y: "0%",
    transition: { duration: 0.65, ease: [0.75, 0, 0.25, 1] },
  },
};

const ControlButton = ({ onClick }) => {
  const { isOpen } = useFooter();

  return (
    <motion.button
      initial="idle"
      whileHover="hover"
      animate="idle"
      variants={buttonVariants}
      onClick={onClick}
      className="relative flex flex-row uppercase items-center   overflow-hidden tracking-wide   w-fit    rounded-sm       text-base-content font-semibold text-opacity-100 bg-neutral gap-2.5 lg:gap-4 px-3.5 lg:pl-6 lg:pr-4 py-1.5 lg:py-3 "
    >
      <ButtonLabel isOpen={isOpen} />

      <ButtonIcon isOpen={isOpen} />

      <motion.div
        variants={bgVariants}
        layoutId="hoverLine"
        className="absolute inset-0 bg-accent -z-0"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.3,
                ease: [0.75, 0, 0.25, 1],
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
                delay: 0.15,
                ease: [0.75, 0, 0.25, 1],
              },
            }}
            className="absolute inset-0 z-0 bg-error"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ControlButton;
