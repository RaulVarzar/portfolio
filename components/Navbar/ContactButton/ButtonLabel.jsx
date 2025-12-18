import { motion } from "framer-motion";

const labelVariants = {
  idle: {
    opacity: 0.8,

    transition: { duration: 0.5, ease: [0.8, 0, 0.2, 1] },
  },
  hover: {
    opacity: 1,
    filter: "brightness(150%)",
    transition: { duration: 0.4, ease: [0.8, 0, 0.2, 1] },
  },
};

const ButtonLabel = ({ isOpen }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2, delay: 0.1, ease: [0.75, 0, 0.25, 1] },
      }}
      key={isOpen}
      className="relative z-10 flex items-center px-10 text-[0.85rem] lg:text-base whitespace-nowrap"
      variants={labelVariants}
    >
      {/* Render both labels, only one visible at a time, to keep width stable */}
      <motion.span
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none left-1/2 top-1/2"
        animate={
          isOpen
            ? { opacity: 0, transition: { delay: 0 } }
            : { opacity: 1, transition: { delay: 0.5 } }
        }
        transition={{ duration: 0.4, ease: [0.75, 0, 0.25, 1] }}
        aria-hidden={isOpen}
      >
        Contact
      </motion.span>
      <motion.span
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none left-1/2 top-1/2"
        animate={
          isOpen
            ? { opacity: 1, transition: { delay: 0.5 } }
            : { opacity: 0, transition: { delay: 0 } }
        }
        transition={{ duration: 0.4, ease: [0.75, 0, 0.25, 1] }}
        aria-hidden={!isOpen}
      >
        Close
      </motion.span>
      {/* Add min-w-[max-content] to parent to prevent width collapse */}
    </motion.p>
  );
};

export default ButtonLabel;
