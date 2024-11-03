import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { projects } from "../../data/projects";

import { FaG, FaGithub } from "react-icons/fa6";

const variants = {
  hidden: { opacity: 0, y: "100%", transition: { duration: 0.4 } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 },
  },
};
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.5 },
  },
};

const Projects = () => {
  const sectionRef = useRef(null);
  const scrollableRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], ["0vg", "-20vh"]);

  const isInView = useInView(sectionRef, {
    margin: "0% 0% -91% 0%",
  });

  const { scrollYProgress: totalProgress } = useScroll({
    target: scrollableRef,
    offset: ["start", "end"],
  });
  const progressBarWidth = useTransform(totalProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative z-20  flex max-sm:pt-[50vh] pt-[10vh]  flex-col w-full md:flex-row bg-base-100"
    >
      <motion.div
        style={{ opacity, titleY }}
        className="sticky top-0  z-30 max-sm:bg-base-200 w-full md:top-[20vh] max-md:pt-12 items-center justify-start md:items-end sm:h-[40vh] md:h-[60vh] inset-y-0 sm:w-fit md:w-6/12 flex-col gap-0.5 md:gap-1.5 flex md:pr-8 lg:pr-12 mx-auto overflow-hidden"
      >
        <motion.div className="flex justify-end overflow-hidden h-fit">
          <motion.h3
            variants={variants}
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl font-bold leading-none tracking-wide text-center sm:font-black md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            MY PROJECTS
          </motion.h3>
        </motion.div>
        <motion.button
          transition={{ delay: 0.3, duration: 0.4 }}
          variants={buttonVariants}
          animate={isInView ? "visible" : "hidden"}
          className="flex text-sm font-semibold tracking-wide uppercase border-none rounded-md sm:text-md w-fit btn-sm text-primary border-accent btn hover:btn-outline btn-ghost hover:text-base-100"
        >
          View all
          <FaGithub />
        </motion.button>
        <div className="h-2 w-full sm:w-96 mt-2 bg-base-300 relative rounded-xl overflow-hidden">
          <motion.div
            style={{ width: progressBarWidth }}
            className="bg-accent w-full h-full left-0 top-0 absolute"
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={scrollableRef}
        className="relative  flex flex-col w-full pb-[20vh] md:w-6/12 items-center h-fit pt-[40vh] md:pt-[80vh] "
      >
        {projects.map((project, i) => (
          <ProjectCard project={project} i={i} key={project.title} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
