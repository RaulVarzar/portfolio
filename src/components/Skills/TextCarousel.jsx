import { motion } from 'framer-motion';

const TextCarousel = ({ textX }) => {
  const arr = Array(8).fill('My skills');
  return (
    <motion.div
      style={{ x: textX }}
      className="text-4xl flex flex-row opacity-60 uppercase flex-nowrap font-bold  tracking-wider text-base-200 md:text-7xl max-w-7xl top-[10vh]  text-nowrap"
    >
      {arr.map((word, i) => (
        <div key={word} className="flex items-center">
          <h3 key={i}>{word}</h3>
          <i className="px-8 text-base fa-solid fa-circle"></i>
        </div>
      ))}
    </motion.div>
  );
};

export default TextCarousel;
