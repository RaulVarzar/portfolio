import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import ChatIcon from "./ChatIcon";
import Form from "./Form";

const Footer = () => {
  const activeRef = useRef(null);

  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end end"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["10vh", "0vh"]);

  const y = useTransform(scrollYProgress, [0.3, 1], ["10vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0.1, 1], ["10%", "100%"]);

  const sectionY = useTransform(scrollYProgress, [0, 0.4], ["10%", "0%"]);

  return (
    <motion.section
      // style={{ y: sectionY }}
      className=" bottom-0  mx-auto w-10/12 min-h-[40vh] px-2 bg-accent  -z-0 "
    >
      <motion.div
        style={{ scale: cardScale, y: cardY }}
        ref={cardRef}
        className="flex items-center justify-center w-full py-4 mx-auto overflow-hidden bg-base-20 rounded-t-3xl 3xl:max-w-8xl text-base-content"
      >
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col px-8 pb-8 max-md:w-full gap-x-12 gap-y-6 lg:flex-row md:grid-cols-2 max-w-8xl place-content-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: "tween",
            }}
            className="flex flex-row items-center pt-6 pr-2 text-right max-lg:justify-center lg:items-end gap-x-6 lg:flex-col text-neutral-content"
          >
            <motion.h1
              ref={activeRef}
              className="text-2xl font-bold md:text-3xl xl:text-5xl w-fit text-nowrap"
            >
              CONTACT ME
            </motion.h1>
            <ChatIcon className="mt-2 text-4xl lg:text-5xl text-neutral-content" />
          </motion.div>
          <Form />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export default Footer;
