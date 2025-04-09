import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { projects } from "../../data/projects";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const sectionRef = useRef(null);
  const scrollableRef = useRef(null);

  const { scrollYProgress: totalProgress } = useScroll({
    target: scrollableRef,
    offset: ["start center", "end"],
  });

  return (
    <motion.div
      ref={sectionRef}
      className="relative z-20   flex max-sm:pt-[30vh] pt-[10vh]  flex-col justify-end w-full lg:flex-row bg-base-100"
    >
      <Header trackedRef={sectionRef} progress={totalProgress} />

      <motion.div
        ref={scrollableRef}
        className="relative flex flex-col w-full pb-[5vh] md:max-lg:grow lg:w-1/2 items-center h-fit mt-[30vh] lg:mt-[40vh] "
      >
        {projects.map((project, i) => (
          <ProjectCard project={project} i={i} key={project.title} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

const Header = ({ trackedRef, progress }) => {
  const variants = {
    hidden: { opacity: 0, y: "100%", transition: { duration: 0.4 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const progressBarVariants = {
    hidden: { opacity: 0, x: "-110%", transition: { duration: 0.4 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.7 },
    },
  };

  const entered = useInView(trackedRef, {
    margin: "0% 0% -50% 0%",
  });
  const notComplete = useInView(trackedRef, {
    margin: "-70% 0% 0% 0%",
  });

  const visible = entered & notComplete;

  const progressBarWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="sticky  -mt-[100vh] top-0 lg:pb-[25vh] z-30  w-full lg:h-screen items-start lg:items-end max-lg:pt-5  justify-end   lg:w-fit flex-col gap-0.5 lg:gap-1.5 flex md:pr-2 lg:pr-4  overflow-hidden">
      <div
        className={
          "absolute inset-0 -z-10 lg:hidden transition-all duration-300 " +
          (visible && " max-lg:bg-base-300")
        }
      ></div>
      <motion.div className="flex justify-end px-4 overflow-hidden h-fit sm:px-8 md:px-0">
        <motion.h3
          variants={variants}
          animate={visible ? "visible" : "hidden"}
          className="text-3xl font-medium leading-none tracking-wide text-center md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
        >
          MY PROJECTS
        </motion.h3>
      </motion.div>
      <motion.a
        transition={{ delay: 0.3, duration: 0.4 }}
        variants={buttonVariants}
        animate={visible ? "visible" : "hidden"}
        href="https://github.com/RaulVarzar"
        target="_blank"
        className="flex mx-1 text-sm font-semibold tracking-wide uppercase border-none rounded-md sm:mx-5 md:mx-0 sm:text-base xl:text-xl w-fit btn-sm text-primary border-accent btn hover:btn-outline btn-ghost hover:text-base-100"
      >
        View all
        <FaGithub />
      </motion.a>
      <div className="overflow-hidden max-md:w-full">
        <motion.div
          variants={progressBarVariants}
          animate={visible ? "visible" : "hidden"}
          className="relative w-full h-1.5 sm:h-3 mt-2 overflow-hidden rounded-sm md:w-80 bg-base-300"
        >
          <motion.div
            style={{ width: progressBarWidth }}
            className="absolute top-0 left-0 w-full h-full bg-accent"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};
