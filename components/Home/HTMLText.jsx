"use client";

import { motion } from "framer-motion";
import HtmlElement from "@/components/Home/HtmlElement";
import { usePageAnimation } from "@/hooks/usePageAnimation";

const variants = {
  hide: { opacity: 0, x: -40 },
  show: {
    opacity: [0, 0.2, 0.25, 1],
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.8, 0, 0.2, 1],
      staggerChildren: 0.9,
    },
  },
};

const HTMLText = ({ zoomInText }) => {
  const controls = usePageAnimation({
    initial: { opacity: 0, x: -40 },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.75, 0, 0.25, 1],
        staggerChildren: 22,
      },
    },
    exit: {
      opacity: 0,
      x: -40,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  });

  return (
    <motion.div className="relative flex flex-col max-w-3xl gap-0 py-2 roboto md:max-w-4xl 2xl:max-w-6xl sm:px-4 max-sm:pl-3 md:pr-12 md:pl-10 h-fit xl:pl-12 xl:pr-16 2xl:pr-20 ">
      <HtmlElement tag={"header"} zoomInText={zoomInText} animate={controls}>
        <HtmlElement tag={"h3"} zoomInText={zoomInText} animate={controls}>
          <motion.h3
            className={
              "text-sm md:text-md xl:text-xl  leading-tight  2xl:text-3xl z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
              (zoomInText
                ? " scale-105 opacity-90 tracking-wide"
                : " opacity-70 tracking-normal")
            }
          >
            Hello, my name is
          </motion.h3>
        </HtmlElement>
        <HtmlElement animate={controls} tag={"h1"} zoomInText={zoomInText}>
          <motion.h3
            animate={controls}
            className={
              "text-4xl font-bold roboto md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl 2xl:text-8xl 3xl:text-9xl z-50 text-neutral-content brightness-125 transition-all duration-500  ease-[cubic-bezier(.03,.98,.52,.99)] " +
              (zoomInText
                ? " scale-105  opacity-90 tracking-normal"
                : " opacity-70 tracking-tight ")
            }
          >
            Raul Vărzar
          </motion.h3>
        </HtmlElement>
      </HtmlElement>
      <HtmlElement zoomInText={zoomInText} tag={"p"} animate={controls}>
        <motion.h3
          className={
            "text-sm md:text-md xl:text-xl  leading-tight  2xl:text-3xl z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
            (zoomInText ? " scale-105 font-normal opacity-90" : " opacity-70")
          }
        >
          I am passionate about web design and creating stuff that looks pretty
        </motion.h3>
      </HtmlElement>
    </motion.div>
  );
};

export default HTMLText;
