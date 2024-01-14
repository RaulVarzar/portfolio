import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 0.75,
    transition: { duration: 0.5, delay: 0.3, staggerChildren: 0.4 },
  },
};

const SECTIONS = ["home", "skills", "projects", "photography", "contact"];

export const Menu = ({ activeSection, goToSection }) => {
  return (
    <motion.ul
      variants={variants}
      animate="show"
      initial="hide"
      className="flex flex-col w-full h-full gap-5 px-8 text-lg font-semibold transition duration-300 place-content-center 2xl:px-16 xl:text-xl 2xl:blur-xxxs hover:blur-none 2xl:brightness-85 2xl:hover:brightness-100 "
    >
      {SECTIONS.map((section, i) => (
        <MenuItem
          key={section}
          activeSection={section === activeSection}
          section={section}
          sectionIndex={i}
          goToSection={goToSection}
        />
      ))}
    </motion.ul>
  );
};
