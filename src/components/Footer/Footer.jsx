import { useRef } from "react";
import Form from "./Form";
import Header from "./Header";
import Socials from "./Socials";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // amount: 0.85,
    margin: "0% 0% -35% 0%",
  });
  return (
    <>
      <div ref={ref} className="-z-[999] h-0" />
      <div className="sticky bottom-0 min-h-[60vh] flex flex-col justify-center z-0 bg-accent">
        <Bars isInView={isInView} />
        <footer className="static bottom-0 flex flex-col items-start justify-between gap-0 pt-8 pb-12 mx-auto md:pt-16 xl:pt-20 sm:pb-24 lg:gap-x-30 xl:gap-x-36 gap-x-24 xl:flex-row">
          <motion.div className="flex flex-col items-start justify-center w-full pb-10 mx-auto md:justify-start gap-y-3 md:gap-y-1">
            <Header isInView={isInView} />
            <Socials isInView={isInView} />
          </motion.div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", transition: { delay: 0 } }}
            className="relative z-0 flex flex-col mx-auto w-fit"
          >
            <Form isInView={isInView} closeForm={() => toggleForm(false)} />
          </motion.div>
        </footer>
      </div>
    </>
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
