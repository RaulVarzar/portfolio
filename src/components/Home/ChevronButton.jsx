import { motion } from 'framer-motion';

const ChevronButton = ({ goToSection }) => {
  return (
    <motion.div
      animate={{
        y: [0, 6, 0],
        opacity: [1, 0.8, 1],
      }}
      transition={{ ease: 'easeInOut', duration: 3, repeat: Infinity }}
      className="flex justify-center mx-auto cursor-pointer w-fit"
      onClick={() => goToSection('skills')}
    >
      <svg height="30" width="50" className="opacity-40 w-fit">
        <line
          x1="0"
          y1="3"
          x2="25"
          y2="20"
          className="stroke-2 stroke-base-content"
        />
        <line
          x1="25"
          y1="20"
          x2="50"
          y2="3"
          className="stroke-2 stroke-base-content"
        />
      </svg>
    </motion.div>
  );
};

export default ChevronButton;
