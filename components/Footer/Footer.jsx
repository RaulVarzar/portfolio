"use client";

import { useEffect } from "react";
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
          data-lenis-prevent
          className="fixed inset-0 border-6 h-full z-[999] flex items-start justify-center overflow-y-auto overscroll-contain"
        >
          <motion.div className="relative min-h-[100dvh] w-full bottom-0 -z-10 overflow-auto grid place-content-center bg-accent px-8 pt-4 pb-28 lg:px-12">
            <Overlay />
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

const Overlay = () => {
  const variants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration: 0.9, delay: 0.4, ease: [0.25, 1, 0.5, 1] },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="absolute bottom-0 right-0 z-0 w-full h-full bg-base-300"
    />
  );
};
