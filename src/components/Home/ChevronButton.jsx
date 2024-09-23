import { motion } from "framer-motion";

const ChevronButton = ({ goToSection }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
      className="relative left-0 right-0 z-50 flex justify-center mx-auto cursor-pointer w-fit  "
      onClick={goToSection}
    >
      <motion.div
        whileHover={{ scale: 1.08, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center justify-center h-10 overflow-hidden border-2 rounded-full w-7"
      >
        <motion.div
          animate={{
            x: 0,
            y: [-9, 26],
            opacity: [0, 0.8, 0.8, 0.6, 0, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            repeatDelay: 0.2,
            repeatType: "loop",
            ease: [0, 0.5, 0.8, 1],
          }}
          className="w-2.5 h-2.5 rounded-full bg-neutral-content"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ChevronButton;
