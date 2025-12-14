"use client";

import { motion } from "framer-motion";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import Button from "@/components/Button";

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
      className="flex flex-col gap-1.5 xl:gap-3 max-lg:mx-auto text-base font-light max-md:items-stretch md:flex-row w-fit max-md:text-center md:text-lg lg:text-xl text-neutral-content"
    >
      {SOCIALS.map((item) => (
        <Button
          label={item.title}
          link={item.link}
          className="xl:text-lg py-2 flex max-md:justify-between max-md:w-full md:py-2.5 border-1 px-5 !gap-6 font-light rounded-sm"
          color={"accent"}
          transitionAmount={3}
          key={item.title}
        >
          <FaSquareGithub />
        </Button>
      ))}
      {/* <FaSquareGithub />
      <FaBehanceSquare />
      <FaSquareInstagram /> */}
    </motion.ul>
  );
};

export default Socials;
