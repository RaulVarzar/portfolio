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
    offset: ["start", "end"],
  });

  return (
    <motion.div
      ref={sectionRef}
      className="relative z-20  flex max-sm:pt-[50vh] pt-[10vh]  flex-col w-full md:flex-row bg-base-100"
    >
      <Header trackedRef={sectionRef} progress={totalProgress} />

      <motion.div
        ref={scrollableRef}
        className="relative  flex flex-col w-full  pb-[5vh] md:w-6/12 items-center h-fit pt-[40vh] md:pt-[30vh] "
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

  const isInView = useInView(trackedRef, {
    margin: "0% 0% -55% 0%",
  });

  const progressBarWidth = useTransform(progress, [0.02, 1], ["0%", "100%"]);

  return (
    <motion.div className="sticky -mt-[100vh] top-0 md:pb-[25vh] z-30 max-sm:bg-base-100 w-full md:h-screen items-end max-md:pt-12 justify-end  sm:w-fit md:w-6/12 flex-col gap-0.5 md:gap-1.5 flex md:pr-8 lg:pr-12 mx-auto overflow-hidden">
      <motion.div className="flex justify-end overflow-hidden h-fit">
        <motion.h3
          variants={variants}
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl font-bold leading-none tracking-wide text-center md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
        >
          MY PROJECTS
        </motion.h3>
      </motion.div>
      <motion.button
        transition={{ delay: 0.3, duration: 0.4 }}
        variants={buttonVariants}
        animate={isInView ? "visible" : "hidden"}
        className="flex text-sm font-semibold tracking-wide uppercase border-none rounded-md sm:text-base xl:text-xl w-fit btn-sm text-primary border-accent btn hover:btn-outline btn-ghost hover:text-base-100"
      >
        View all
        <FaGithub />
      </motion.button>
      <div className="overflow-hidden ">
        <motion.div
          variants={progressBarVariants}
          animate={isInView ? "visible" : "hidden"}
          className="relative w-full h-3 mt-2 overflow-hidden sm:w-96 bg-base-300 rounded-sm"
        >
          <motion.div
            style={{ width: progressBarWidth }}
            className="absolute top-0 left-0 w-full h-full bg-accent"
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
