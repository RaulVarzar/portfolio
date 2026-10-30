"use client";

import { motion } from "framer-motion";
import { useFooter } from "@/components/Footer/FooterContext";

const ease = [0.75, 0, 0.25, 1];

const ContactButton = ({ onClick }) => {
  const { isOpen } = useFooter();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className={`relative flex items-center overflow-hidden uppercase tracking-wide font-normal px-3 py-1.5 w-fit rounded-[0.175rem] transition-colors duration-300
        ${
          isOpen
            ? "bg-red-500 text-white"
            : "text-base-content hover:bg-base-content hover:bg-opacity-10"
        }`}
    >
      {/* Both labels share one grid cell, so the button keeps a stable width */}
      <span className="grid text-[0.85rem]">
        <motion.span
          className="col-start-1 row-start-1 text-center"
          initial={false}
          aria-hidden={isOpen}
          animate={
            isOpen ? { opacity: 0, y: "-70%" } : { opacity: 0.8, y: "0%" }
          }
          transition={{ duration: 0.45, ease }}
        >
          Contact
        </motion.span>
        <motion.span
          className="col-start-1 row-start-1 text-center"
          initial={false}
          aria-hidden={!isOpen}
          animate={isOpen ? { opacity: 1, y: "0%" } : { opacity: 0, y: "70%" }}
          transition={{ duration: 0.45, ease }}
        >
          Close
        </motion.span>
      </span>
    </button>
  );
};

export default ContactButton;
