import { useRef } from "react";
import Form from "./Form";
import Header from "./Header";
import Socials from "./Socials";
import { motion, useInView } from "framer-motion";
import ChatIcon from "./ChatIcon";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // amount: 0.85,
    margin: "0% 0% -35% 0%",
  });
  return (
    <>
      <div ref={ref} className="-z-[999] h-0" />
      <div className="sticky bottom-0 min-h-[36vh] flex flex-col  z-0 bg-accent">
        <Bars isInView={isInView} />
        <footer className="static bottom-0 flex flex-col justify-between gap-0 pb-24 mx-auto lg:gap-x-30 xl:gap-x-36 gap-x-24 items-evenly md:flex-row">
          <motion.div className="flex flex-col items-start justify-center pt-8 pb-10 mx-auto gap-y-2 md:gap-y-4">
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
        duration: 1,
        delay: 0.1 + custom * 0.03,
      },
    }),
    visible: (custom) => ({
      y: "0%",
      transition: {
        ease: [0.44, 0.36, 0.23, 0.96],
        delay: custom * 0.05,
        duration: 0.6,
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
        className="z-10 w-1/4 h-full bg-base-100"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        custom={1}
        animate={isInView ? "visible" : "hidden"}
        className="z-10 w-1/4 h-full bg-base-100"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        custom={3}
        animate={isInView ? "visible" : "hidden"}
        className="z-10 w-1/4 h-full bg-base-100"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        custom={2}
        animate={isInView ? "visible" : "hidden"}
        className="z-10 w-1/4 h-full bg-base-100"
      />
    </div>
  );
};
