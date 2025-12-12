"use client";
import { motion } from "framer-motion";
import Projects from "@/components/Projects/Projects";

const page = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: "20rem" }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}
      className="relative"
    >
      <Projects />
      <motion.div
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
      ></motion.div>
    </motion.div>
  );
};

export default page;
