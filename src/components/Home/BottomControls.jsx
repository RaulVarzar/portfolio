import { motion } from "framer-motion";
import { useFooter } from "../Footer/FooterContext";

const BottomControls = () => {
  const bgVariants = {
    idle: {
      y: "-140%",
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: { y: "0%", transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] } },
  };
  const labelVariants = {
    idle: {
      opacity: 0.6,
      scale: 1,
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: {
      opacity: 1,
      scale: 1.04,
      transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] },
    },
  };

  const { openFooter } = useFooter();

  return (
    <motion.div className="inset-x-0 flex items-stretch justify-center w-full gap-6 pb-4 mx-auto border-t max-w-screen-2xl border-opacity-10 text-md md:text-xl border-base-content divide-x- divide-base-content divide-opacity-10">
      <motion.button
        initial="idle"
        whileHover="hover"
        animate="idle"
        className="relative px-10 py-4 overflow-hidden tracking-wide rounded-sm borde w-fit md:py-6 border-base-content border-opacity-15"
      >
        <motion.p variants={labelVariants}>MY SKILLS</motion.p>
        <motion.div
          variants={bgVariants}
          className="absolute top-0 left-0 w-full h-0.5 -z-10 bg-secondary"
        />
      </motion.button>

      <motion.button
        initial="idle"
        whileHover="hover"
        animate="idle"
        className="relative px-10 py-4 overflow-hidden tracking-wide rounded-sm borde w-fit md:py-6 border-base-content border-opacity-15"
      >
        <motion.p variants={labelVariants}>PROJECTS</motion.p>
        <motion.div
          variants={bgVariants}
          className="absolute top-0 left-0 w-full h-0.5 -z-10 bg-secondary"
        />
      </motion.button>
      <motion.button
        initial="idle"
        whileHover="hover"
        animate="idle"
        className="relative px-10 py-4 overflow-hidden tracking-wide rounded-sm borde w-fit md:py-6 border-base-content border-opacity-15"
        onClick={() => openFooter()}
      >
        <motion.p variants={labelVariants}>CONTACT</motion.p>
        <motion.div
          variants={bgVariants}
          className="absolute top-0 left-0 w-full h-0.5 -z-10 bg-secondary"
        />
      </motion.button>
    </motion.div>
  );
};

export default BottomControls;
