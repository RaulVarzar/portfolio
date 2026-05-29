"use client";
import { motion } from "framer-motion";
import Projects from "@/components/Projects/Projects";

const page = () => {
  return (
    <motion.div transition={{ duration: 0.9, ease: [0.7, 0, 0.25, 1] }}>
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
