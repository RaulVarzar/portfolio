import { motion } from 'framer-motion';

const ChevronButton = ({ goToSection }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ ease: 'easeOut', duration: 1, delay: 1.5 }}
      className="absolute left-0 right-0 z-50 flex justify-center mx-auto cursor-pointer w-fit bottom-6 md:bottom-10"
      onClick={goToSection}
    >
      {/* <svg
        height="30"
        width="70"
        className="scale-75 opacity-80 w-fit md:scale-100"
      >
        <line
          x1="0"
          y1="0"
          x2="35"
          y2="17"
          className="stroke-2 stroke-neutral-content"
        />
        <line
          x1="35"
          y1="17"
          x2="70"
          y2="0"
          className="stroke-2 stroke-neutral-content"
        />
      </svg> */}
      <div className="flex items-center justify-center h-10 overflow-hidden border-2 rounded-full w-7">
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
            repeatType: 'loop',
            ease: [0, 0.5, 0.8, 1],
          }}
          className="w-2.5 h-2.5 rounded-full bg-neutral-content"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ChevronButton;
