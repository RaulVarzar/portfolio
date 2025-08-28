import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

export const GithubButton = ({ link }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "-20%",
      filter: "blur(4px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 0.3,
        delay: 0,
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

  const ref = useRef(null);
  const visible = useInView(ref, { margin: "1000% 0% -5% 0%", once: true });

  return (
    <div ref={ref}>
      <motion.a
        href={link}
        variants={variants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        target="_blank"
        className="flex items-center justify-between gap-2 px-5 py-1.5 rounded-xl  font-black border-2 border-secondary text-secondary group-hover:scale-105 group-hover:brightness-200 xl:py-2 hover:text-primary"
      >
        {/* <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i> */}
        <p className="text-sm font-light ">GitHub</p>
        <span>
          <IoLogoGithub />
        </span>
      </motion.a>
    </div>
  );
};

export const DemoButton = ({ link }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "-20%",
      filter: "blur(4px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 0.3,
        delay: 0,
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

  const ref = useRef(null);
  const visible = useInView(ref, { margin: "1000% 0% -5% 0%", once: true });

  return (
    <div ref={ref}>
      <motion.a
        href={link}
        variants={variants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        target="_blank"
        className="flex items-center justify-between gap-2 px-6 py-2 font-black border-2 rounded-xl border-secondary bg-secondary text-base-200 group-hover:scale-105 group-hover:brightness-105 xl:py-2 hover:text-primary"
      >
        {/* <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i> */}
        <p className="text-sm font-normal tracking-wide ">Demo</p>
        <span>
          <FaExternalLinkAlt />
        </span>
      </motion.a>
    </div>
  );
};
