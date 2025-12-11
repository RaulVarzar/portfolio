"use client";

import { AnimatePresence, motion } from "framer-motion";

const itemVariants = {
  hide: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const MenuItem = ({
  section,
  activeSection,
  sectionIndex,
  goToSection,
  dark,
}) => {
  return (
    <motion.li
      // variants={itemVariants}
      initial={{ x: 80, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.3 + sectionIndex * 0.35,
          damping: 10,
          duration: 0.6,
        },
      }}
      whileHover={{
        y: 2,
        scale: 0.98,
        transition: { delay: 0, duration: 0.25 },
      }}
      layout
      key={section}
      className="relative flex flex-row items-center justify-start w-full gap-1 px-5 py-2 cursor-pointer group "
      onClick={() => goToSection(section)}
    >
      {activeSection && (
        <motion.div
          className="absolute z-50 flex justify-between h-full text-sm font-thin align-baseline top-3 -left-1 w-fit text-accent tracking-none roboto"
          layoutId="background"
          transition={{
            layout: {
              duration: 0.3,
              delay: 0,
              ease: "easeIn",
              type: "spring",
              stiffness: 400,
              damping: 25,
            },
          }}
        >
          {/* {sectionIndex} */}
          <span className="font-black tracking-tighter ">&#47;&#47;</span>
        </motion.div>
      )}
      <motion.span
        layout="position"
        className={
          "transition-colors duration-300 group-hover:scale-110 roboto text-md font-normal tracking-[0px] " +
          (activeSection && !dark
            ? " scale-110 text-accent "
            : activeSection && dark
            ? " text-accent  "
            : !activeSection && dark && " invert opacity-70")
        }
      >
        {section}
      </motion.span>
    </motion.li>
  );
};
