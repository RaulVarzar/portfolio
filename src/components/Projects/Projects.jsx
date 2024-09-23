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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], ["0vg", "-20vh"]);

  const isInView = useInView(sectionRef, {
    margin: "0% 0% -61% 0%",
  });

  const borderRadius = useTransform(
    scrollYProgress,
    [0.2, 0.95],
    ["0vw", "8vw"]
  );
  const scale = useTransform(scrollYProgress, [0.2, 0.95], ["100%", "92%"]);
  const y = useTransform(scrollYProgress, [0.9, 1], ["0vh", "-40vh"]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ borderRadius, scale, y }}
      className="relative z-20 flex flex-col w-full md:flex-row bg-base-100"
    >
      <motion.div
        style={{ opacity, titleY }}
        className="sticky top-0 md:top-[40vh] max-md:pt-12 items-center justify-start md:items-end h-[40vh] md:h-[60vh] inset-y-0 w-full md:w-5/12 flex-col gap-0.5 md:gap-1.5 flex md:pr-12 lg:pr-16 2xl:pr-24 mx-auto overflow-hidden"
      >
        <motion.div className="flex justify-end overflow-hidden h-fit">
          <motion.h3
            variants={variants}
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl font-bold leading-none tracking-wide text-center sm:font-black md:text-4xl lg:text-5xl xl:text-6xl"
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
      </motion.div>

      {/* <div className="w-5/12 "></div> */}

      <motion.div className="relative flex flex-col w-full md:w-7/12 items-center h-fit md:pt-[30vh] md:pb-[10vh]">
        {projects.map((project, i) => (
          <ProjectCard project={project} i={i} key={project.title} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
