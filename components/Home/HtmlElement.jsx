"use client";

import { motion } from "framer-motion";

const HtmlElement = ({ tag, children, zoomInText, variants, ...props }) => {
  return (
    <motion.div
      {...props}
      className={
        "flex flex-col text-left roboto cursor-default " +
        (tag === "h1" ? " leading-tight" : " leading-tight")
      }
      variants={variants}
    >
      <span
        className={
          "text-md md:text-lg xl:text-xl roboto 2xl:text-3xl text-left ml-0 text-neutral-content w-fit opacity-25 transition-all duration-300 ease-[cubic-bezier(0.8, 0, 0.2, 1)] " +
          (zoomInText && " blur-xs scale-95")
        }
      >
        &lt;{tag}&gt;
      </span>
      <motion.div
        className={
          " flex flex-col gap-2 ml-4 md:ml-6 2xl:ml-7 text-lg md:text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  "
        }
        variants={
          variants
            ? {
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }
            : undefined
        }
      >
        {children}
      </motion.div>
      <span
        className={
          "text-md md:text-lg xl:text-xl 2xl:text-3xl text-left text-neutral-content opacity-25 transition-all duration-300 w-fit ease-[cubic-bezier(0.8, 0, 0.2, 1)]" +
          (zoomInText && " blur-xs scale-95")
        }
      >
        &lt;/{tag}&gt;
      </span>
    </motion.div>
  );
};

export default HtmlElement;
