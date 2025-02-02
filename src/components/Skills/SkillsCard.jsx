import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconText } from "./IconText";

const dividerVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: { duration: 0.7, delay: 0.25 },
  },
};

const titleVariants = {
  hidden: { opacity: "0%", y: "50%" },
  visible: {
    opacity: "100%",
    y: "0%",
    transition: { duration: 0.4, delay: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: "0%", y: "10%" },
  visible: {
    opacity: "100%",
    y: "0%",
    transition: { duration: 0.25, delay: 0.5 },
  },
};

const SkillsCard = ({ title, icon, text, reverse }) => {
  const ref = useRef(null);
  const rowRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.85"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { scrollYProgress: rowProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftLimit = reverse ? "10%" : "-10%";
  const rightLimit = reverse ? "-10%" : "10%";
  const x = useTransform(rowProgress, [0, 1], [leftLimit, rightLimit]);

  const isInView = useInView(ref, {
    margin: "1000% 0% -10% 0%",
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative flex flex-col items-center justify-center w-full gap-2 p-2 sm:px-10 text-base-content"
    >
      <motion.div
        className="h-24 tracking-wide divider place-self-center text-md font-extralight"
        // initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={dividerVariants}
      >
        <motion.h1
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-sm text-neutral sm:text-base"
        >
          {title}
        </motion.h1>
      </motion.div>
      <motion.div
        ref={rowRef}
        style={{ x }}
        variants={textVariants}
        animate={isInView ? "visible" : "hidden"}
        className="flex items-center gap-2 py-4 md:py-8 lg:py-12 xl:py-24 will-change-transform"
      >
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
      </motion.div>
    </motion.div>
  );
};

export default SkillsCard;
