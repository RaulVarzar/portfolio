import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconText } from "./IconText";

const dividerVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: { duration: 0.9, delay: 0.25 },
  },
};

const titleVariants = {
  hidden: { opacity: "0%", y: "50%" },
  visible: {
    opacity: "100%",
    y: "0%",
    transition: { duration: 0.4, delay: 0.4 },
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
    margin: "0% 0% -10% 0%",
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative flex items-center flex-col w-full justify-center gap-2 p-2 sm:px-10 text-base-content"
    >
      <motion.div
        className="divider place-self-center h-24 text-md font-extralight tracking-wide"
        // initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={dividerVariants}
      >
        <motion.h1
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-neutral text-sm sm:text-base"
        >
          {title}
        </motion.h1>
      </motion.div>
      <motion.div
        ref={rowRef}
        style={{ x }}
        className="flex items-center gap-2 py-4 md:py-8 lg:py-12 xl:py-24"
      >
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
        <IconText text={text} icon={icon} />
      </motion.div>

      {/* {large && (
        <>
          <div className="divider h-fit"></div>
          <h3 className="text-center text-md">My React knowledge</h3>
          <ul className="flex flex-wrap items-center justify-center text-xs sm:text-sm md:text-base gap-x-2 gap-y-1 xl:text-md">
            <li className="px-4 py-1.5 sm:px-6 sm:py-2.5 text-white rounded-4xl border-1 border-opacity-20 border-base-content w-fit bg-base-content bg-opacity-5">
              React Router
            </li>
            <li className="px-4 py-1.5 sm:px-6 sm:py-2.5 text-white rounded-4xl border-1 border-opacity-20 border-base-content w-fit bg-base-content bg-opacity-5">
              Redux Toolkit
            </li>
            <li className="px-4 py-1.5 sm:px-6 sm:py-2.5 text-white rounded-4xl border-1 border-opacity-20 border-base-content w-fit bg-base-content bg-opacity-5">
              TanStack Query
            </li>
            <li className="px-4 py-1.5 sm:px-6 sm:py-2.5 text-white rounded-4xl border-1 border-opacity-20 border-base-content w-fit bg-base-content bg-opacity-5">
              Next.JS
            </li>
          </ul>
        </>
      )} */}
    </motion.div>
  );
};

export default SkillsCard;
