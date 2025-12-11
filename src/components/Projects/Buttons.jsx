import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import MagneticButton from "../../src/util/MagneticButton";

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
      <motion.button
        href={link}
        // variants={variants}
        // initial="hidden"
        // animate={visible ? "visible" : "hidden"}
        target="_blank"
        className="flex items-center justify-between gap-2 px-5 py-2 border-b-1 border-opacity-35 lg:gap-3 border-base-content text-base-content md:py-3 xl:py-4 xl:px-8"
      >
        {/* <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i> */}
        <p className="text-sm font-normal md:text-base xl:text-lg">GitHub</p>
        <span className="text-base md:text-lg xl:text-xl">
          <IoLogoGithub />
        </span>
      </motion.button>
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

const Button = ({ label, link, children }) => {
  const bgVariants = {
    idle: { y: "110%", transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] } },
    hover: { y: "0%", transition: { duration: 0.55, ease: [0.8, 0, 0.2, 1] } },
  };
  const labelVariants = {
    idle: { x: 0, transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] } },
    hover: { x: 7, transition: { duration: 0.55, ease: [0.8, 0, 0.2, 1] } },
  };
  const iconVariants = {
    idle: {
      x: 0,
      scale: 1,
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: {
      x: -7,
      scale: 1.2,
      transition: { duration: 0.55, ease: [0.8, 0, 0.2, 1] },
    },
  };
  return (
    <motion.button
      amount={[18, 12]}
      magnify={1.05}
      href="https://github.com/RaulVarzar"
      target="_blank"
      initial="idle"
      whileHover="hover"
      animate="idle"
      className="flex relative overflow-hidden items-center  gap-6 px-0.5 py-2 mx-1 text-sm font-normal tracking-wide uppercase border-b cursor-pointer md:gap-10 xl:gap-20 2xl:gap-24 border-base-content border-opacity-20  lg:py-3 sm:mx-5 md:mx-0 sm:text-base xl:text-md w-fit text-neutral-content "
    >
      <motion.span variants={labelVariants} className="z-10">
        {label}
      </motion.span>
      <motion.span variants={iconVariants} className="z-10">
        {children}
      </motion.span>
      <motion.div
        variants={bgVariants}
        className="absolute top-0 left-0 w-full h-full bg-primary -z-10"
      />
    </motion.button>
  );
};

export default Button;
