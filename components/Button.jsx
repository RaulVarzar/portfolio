"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { twMerge } from "tailwind-merge";

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

  return <div></div>;
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

  return <div></div>;
};

const Button = ({
  label,
  link,
  children,
  className,
  color = "primary",
  transitionAmount = 8,
}) => {
  const bgVariants = {
    idle: { y: "110%", transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] } },
    hover: { y: "0%", transition: { duration: 0.55, ease: [0.8, 0, 0.2, 1] } },
  };
  const labelVariants = {
    idle: { x: 0, transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] } },
    hover: {
      x: transitionAmount,
      transition: { duration: 0.55, ease: [0.8, 0, 0.2, 1] },
    },
  };
  const iconVariants = {
    idle: {
      x: 0,
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: {
      x: -transitionAmount,

      transition: { duration: 0.55, ease: [0.8, 0, 0.2, 1] },
    },
  };

  const defaultClasses = `flex relative overflow-hidden items-center gap-6 px-0.5 py-2  text-sm sm:text-base xl:text-md  font-normal tracking-wide uppercase border-b cursor-pointer  md:gap-10 xl:gap-20 2xl:gap-24 border-primary-content !border-opacity-20  w-fit text-neutral-content`;

  return (
    <motion.a
      amount={[18, 12]}
      magnify={1.05}
      href={link}
      target="_blank"
      initial="idle"
      whileHover="hover"
      animate="idle"
      className={twMerge(defaultClasses, className)}
    >
      <motion.span variants={labelVariants}>{label}</motion.span>
      <motion.span variants={iconVariants}>{children}</motion.span>
      <motion.div
        variants={bgVariants}
        className={`absolute top-0 left-0 w-full h-full -z-10 bg-${color}`}
      />
    </motion.a>
  );
};

export default Button;
