"use client";
import { motion } from "framer-motion";
import Projects from "@/components/Projects/Projects";
import { useEffect, useState } from "react";

const page = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.history.scrollRestoration = "manual";
  //   }
  // }, []);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <motion.div
      // initial={{ opacity: 0, y: "20rem" }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}

      initial={{ y: "30vh", opacity: 0 }}
      animate={hasMounted ? { y: "0vh", opacity: 1 } : {}}
      exit={{ y: "100vh", opacity: 0.9 }}
      transition={{ duration: 0.9, ease: [0.7, 0, 0.25, 1] }}
    >
      <div className="relative">
        <Projects />
      </div>
      {/* <motion.div
        className="absolute inset-0 bg-primary z-[99999]"
        initial={{ y: 0, transition: { duration: 0, delay: 0 } }}
        animate={{
          y: "-100%",
          transition: { duration: 0.8, delay: 0, ease: [0.7, 0, 0.25, 1] },
        }}
        exit={{
          y: 0,
          transition: { duration: 0.8, delay: 0, ease: [0.7, 0, 0.25, 1] },
        }}
      ></motion.div> */}
    </motion.div>
  );
};

export default page;
