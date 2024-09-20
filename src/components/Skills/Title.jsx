import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: { y: "150%" },
  visible: {
    y: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

export const Title = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });
  const titleScale = useTransform(scrollYProgress, [0, 0.4], ["85%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["5vh", "0vh"]);

  const isInView = useInView(ref, {
    margin: "0% 0% -10% 0%",
    once: true,
  });

  return (
    <motion.div
      style={{ y }}
      ref={ref}
      className="relative overflow-hidden mx-auto mt-4 md:mt-8"
    >
      <motion.h3
        style={{ scale: titleScale }}
        variants={variants}
        animate={isInView ? "visible" : "hidden"}
        className="text-3xl font-bold tracking-widest stroke-text text-base-100 py-[10vh] sm:text-4xl md:text-5xl lg:text-6xl"
      >
        MY SKILLS
      </motion.h3>
    </motion.div>
  );
};
