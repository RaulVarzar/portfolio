"use client";

import { useRef, useEffect } from "react";
import Form from "@/components/Footer/Form";
import Header from "@/components/Footer/Header";
import Socials from "@/components/Footer/Socials";
import { motion, AnimatePresence } from "framer-motion";
import { useFooter } from "@/components/Footer/FooterContext";

export default function Footer() {
  const { isOpen, closeFooter } = useFooter();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeFooter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeFooter]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            y: "100%",
          }}
          animate={{
            y: 0,
            transition: {
              duration: 1.05,
              delay: 0.1,
              ease: [0.75, 0, 0.25, 1],
            },
          }}
          exit={{
            y: "100%",
            transition: { duration: 0.8, ease: [0.75, 0, 0.25, 1] },
          }}
          className="fixed inset-0  h-full z-[999] flex items-center justify-center"
        >
          <motion.div className="relative min-h-[100dvh] w-full bottom-0 -z-10 overflow-auto grid place-content-center bg-base-300 px-8 py-4 lg:px-12">
            <div className="flex flex-col items-start gap-8 mx-auto xl:flex-row w-fit">
              <div className="flex flex-col items-start justify-center w-full pb-6 gap-y-3 md:gap-y-6">
                <Header />
                <Socials />
              </div>

              <Form closeForm={closeFooter} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Bars = ({ isInView }) => {
  const variants = {
    hidden: (custom) => ({
      y: "100%",
      transition: {
        ease: [0.44, 0.36, 0.23, 0.96],
        duration: 0.8,
        delay: 0.1 + custom * 0.03,
      },
    }),
    visible: (custom) => ({
      y: "0%",
      transition: {
        ease: [0.44, 0.36, 0.23, 0.96],
        delay: custom * 0.05,
        duration: 1.1,
      },
    }),
  };

  return (
    <div className="absolute bottom-0 -translate-y-[100%] right-0 flex flex-row w-full h-full z-10 ">
      <motion.div
        variants={variants}
        initial="hidden"
        custom={0}
        animate={isInView ? "visible" : "hidden"}
        className="z-10 w-1/4 h-full bg-base-100 max-sm:w-1/3"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        custom={1}
        animate={isInView ? "visible" : "hidden"}
        className="z-10 w-1/4 h-full bg-base-100 max-sm:w-1/3"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        custom={3}
        animate={isInView ? "visible" : "hidden"}
        className="z-10 w-1/4 h-full bg-base-100 max-sm:w-1/3"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        custom={2}
        animate={isInView ? "visible" : "hidden"}
        className="z-10 w-1/4 h-full bg-base-100 max-sm:hidden"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        custom={1}
        animate={isInView ? "visible" : "hidden"}
        className="z-10 w-1/4 h-full bg-base-100 max-sm:hidden"
      />
    </div>
  );
};
