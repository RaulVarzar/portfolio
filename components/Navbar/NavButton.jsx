"use client";

import { motion } from "framer-motion";
import { useFooter } from "@/components/Footer/FooterContext";
import { usePathname } from "next/navigation";
import { useAnimatedRouter } from "../useAnimatedRouter";

const ControlButton = ({ className = "", label, link }) => {
  const pathname = usePathname();
  const active = pathname === link;
  const { isOpen } = useFooter();

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
  const navigate = useAnimatedRouter();

  return (
    <motion.div
      className="relative"
      initial={false}
      animate={
        isOpen
          ? {
              width: 0,
              opacity: 0,
              marginRight: 0,
              overflow: "hidden",
              transition: { duration: 0.55, ease: [0.75, 0, 0.25, 1] },
            }
          : {
              width: "auto",
              opacity: 1,
              marginRight: "0.375rem",
              transition: { duration: 0.65, ease: [0.75, 0, 0.25, 1] },
              // keep clipping while expanding, then release so the sliding pill isn't clipped
              transitionEnd: { overflow: "visible" },
            }
      }
      style={{ pointerEvents: isOpen ? "none" : "auto" }}
      aria-hidden={isOpen}
    >
      {active && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-[0.175rem] bg-base-content"
          transition={{ duration: 0.5, ease: [0.75, 0, 0.25, 1] }}
        />
      )}
      <button
        tabIndex={isOpen ? -1 : 0}
        onClick={(e) => {
          navigate(link);
        }}
        className={`relative z-10 flex flex-row uppercase items-center overflow-hidden whitespace-nowrap tracking-wide  font-normal px-3 py-1.5 gap-0.5 w-fit rounded-[0.175rem]  
          ${active ? "text-base-300 font-bold" : "text-base-content hover:bg-base-content hover:bg-opacity-10"} transition-colors duration-300 
          ${className}`}
      >
        <motion.p
          className={`z-10 text-[0.85rem]  ${active ? "font-bold" : "font-normal"}`}
          variants={labelVariants}
        >
          {label}
        </motion.p>
      </button>
    </motion.div>
  );
};

export default ControlButton;
