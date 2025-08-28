import { motion } from "framer-motion";

const Title = ({ title, visible }) => {
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: "-50%",
      filter: "blur(6px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 0.25,
        delay: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0,
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <motion.h3 className="z-10 flex justify-start overflow-hidden text-2xl font-medium leading-none tracking-wider text-left uppercase transition-all duration-300 xl:leading-8 text-base-content md:text-3xl xl:text-4xl ">
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default Title;
