"use client";

import { motion, useInView, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/Button";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: "100%", transition: { duration: 0.4 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: "80%", transition: { duration: 0.4 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const progressBarVariants = {
    hidden: { opacity: 0, x: "-110%", transition: { duration: 0.4 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.7 },
    },
  };

  return (
    <div className="lg:sticky max-lg:pt-[10vh] lg:min-w-96 xl:px-4 2xl:px-8 3xl:px-12  top-[10vh] xl:top-[15vh] z-10  lg:h-screen  lg:items-end justify-start lg:w-fit flex-col gap-0.5 lg:gap-1.5 flex">
      <motion.div className="flex flex-col justify-center gap-2 px-4 lg:items-end lg:justify-end h-fit sm:px-8 md:px-0">
        <motion.h3
          variants={titleVariants}
          animate="visible"
          className="text-xl font-semibold leading-none tracking-wider text-center text-base-content md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        >
          MY PROJECTS
        </motion.h3>
        <motion.div variants={buttonVariants} animate="visible">
          <Button
            label={"View all"}
            color="accent"
            link={"https://github.com/RaulVarzar?tab=repositories"}
          >
            <GoArrowUpRight />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
