import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import MagneticButton from "../../util/MagneticButton";

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

  const containerRef = useRef(null);
  const visible = useInView(containerRef, {
    margin: "1000% 0% -5% 0%",
    once: true,
  });

  return (
    <div
      ref={containerRef}
      className="transition-all duration-300 hover:brightness-125"
    >
      <MagneticButton
        href={link}
        amount={[10, 6]}
        // variants={variants}
        // initial="hidden"
        // animate={visible ? "visible" : "hidden"}
        target="_blank"
        className="flex items-center justify-between gap-2 px-5 py-2 border-2 rounded-full lg:gap-3 border-base-content text-base-content md:py-3 xl:py-4 xl:px-8"
      >
        {/* <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i> */}
        <p className="text-sm font-normal md:text-base xl:text-lg">GitHub</p>
        <span className="text-base md:text-lg xl:text-xl">
          <IoLogoGithub />
        </span>
      </MagneticButton>
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
    <div ref={ref} className="transition-all duration-300 hover:brightness-125">
      <MagneticButton
        href={link}
        variants={variants}
        amount={[10, 6]}
        // initial="hidden"
        // animate={visible ? "visible" : "hidden"}
        target="_blank"
        className="flex items-center justify-between gap-2 px-5 py-2 border-2 rounded-full lg:gap-3 border-secondary bg-secondary text-base-content md:py-3 xl:py-4 xl:px-8"
      >
        {/* <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i> */}
        <p className="text-sm font-normal md:text-base xl:text-lg">Demo</p>
        <span className="text-base md:text-md xl:text-lg">
          <FaExternalLinkAlt />
        </span>
      </MagneticButton>
    </div>
  );
};

export const ViewAllProjectsButton = ({ visible }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
  return (
    <motion.div
      transition={{ delay: 0.3, duration: 0.4 }}
      variants={variants}
      animate={visible ? "visible" : "hidden"}
      className="max-lg:mx-auto w-fit"
    >
      <MagneticButton
        amount={[10, 5]}
        magnify={1.05}
        href="https://github.com/RaulVarzar"
        target="_blank"
        className="flex items-center gap-3 px-5 py-2 mx-1 text-sm font-medium tracking-wide uppercase border-2 rounded-full cursor-pointer lg:px-8 lg:py-3 sm:mx-5 md:mx-0 sm:text-base xl:text-lg w-fit text-primary border-primary "
      >
        View all
        <FaGithub />
      </MagneticButton>
    </motion.div>
  );
};
