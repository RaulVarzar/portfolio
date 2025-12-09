import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function splitStringUsingRegex(inputString) {
  const characters = [];
  const regex = /[\s\S]/gu;

  let match;
  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}

export default splitStringUsingRegex;

const variants = {
  hidden: { opacity: 0, y: "150%" },
  visible: {
    opacity: 0.4,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      mass: 0.2,
      stiffness: 80,
    },
  },
};

export const Title = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.7], ["85%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 0.7], ["5vh", "0vh"]);

  const isInView = useInView(ref, {
    margin: "0% 0% -15% 0%",
    once: true,
  });

  const TITLE = splitStringUsingRegex("my skills");

  return (
    <motion.div
      style={{ scale }}
      ref={ref}
      className="relative origin-bottom overflow-hidden mx-auto  my-[10vh] xl:my-[15vh]"
    >
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.1,
        }}
        className="flex flex-row text-5xl font-bold tracking-wide uppercase text-neutral osm:text-6xl md:text-8xl lg:text-9xl"
      >
        {TITLE.map((letter, i) => (
          <motion.span className="min-w-2" key={i} variants={variants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};
