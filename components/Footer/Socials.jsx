"use client";

import { motion } from "framer-motion";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

const Socials = ({ isInView }) => {
  const variants = {
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const childrenVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      filter: "blur(7px)",
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const SOCIALS = [
    { title: "github", link: "www.github.com" },
    { title: "behance", link: "www.behance.net" },
    { title: "instagram", link: "www.instagram.com" },
  ];

  return (
    <motion.ul
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-row justify-start gap-3 mx-auto text-base font-light w-fit md:w-full md:gap-4 max-md:text-center md:flex-row md:text-lg lg:text-xl text-neutral-content"
    >
      {SOCIALS.map((item) => (
        <motion.li
          key={item.link}
          variants={childrenVariants}
          href={item.link}
          className="relative flex flex-row items-center justify-center gap-3 px-4 py-3 overflow-hidden border-2 rounded-full cursor-pointer border-opacity- sm:px-4 md:px-6 xl:px-8 md:py-6 group border-base-content text-neutral-content "
        >
          <div className="absolute inset-0 w-full h-full transition-transform duration-300 translate-y-full bg-opacity-25 group-hover:translate-y-0 bg-secondary -z-10 ease-[cubic-bezier(0.7,0,0.25,1)]"></div>

          <motion.span className="leading-none transition-all duration-500 max-sm:hidden">
            {item.title}
          </motion.span>
          <FaSquareGithub />
        </motion.li>
      ))}
      {/* <FaSquareGithub />
      <FaBehanceSquare />
      <FaSquareInstagram /> */}
    </motion.ul>
  );
};

export default Socials;
