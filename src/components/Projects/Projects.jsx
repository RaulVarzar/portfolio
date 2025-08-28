import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
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
  console.log(totalProgress);

  return (
    <motion.div
      ref={sectionRef}
      className="relative z-20 flex max-sm:pt-[30vh] pt-[10vh]  flex-col justify-end w-full lg:flex-row bg-base-100"
    >
      <Header trackedRef={sectionRef} progress={totalProgress} />
      <Divider trackedRef={sectionRef} progress={totalProgress} />
      <motion.div
        ref={scrollableRef}
        className="relative flex flex-col w-full mb-[15vh] md:max-lg:grow lg:w-7/12 items-center h-fit mt-[15vh] lg:mt-[25vh] "
      >
        {projects.map((project, i) => (
          <ProjectCard project={project} i={i} key={project.title} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

export const Divider = ({ trackedRef, progress }) => {
  const variants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 0.3,
        delay: 0,
      },
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0,
        duration: 2,
      },
    },
  };

  const entered = useInView(trackedRef, {
    margin: "0% 0% -70% 0%",
  });

  const progressBarWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="sticky top-0 -mt-[75vh] flex items-center justify-center h-screen place-self-start">
      <AnimatePresence>
        {entered && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-0.5 relative h-[55vh] bg-base-300 opacity-10 fade-in-out"
          >
            <motion.div
              style={{ scaleY: progressBarWidth }}
              className="absolute top-0 left-0 rounded-full w-full h-[96%] origin-center bg-gradient-to-t from-accent via-secondary to-accent"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
    margin: "0% 0% -60% 0%",
  });
  const notComplete = useInView(trackedRef, {
    margin: "-110% 0% 0% 0%",
  });

  const visible = entered & notComplete;

  const progressBarWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="sticky -mt-[75vh] top-0 z-30 w-full lg:h-screen items-start lg:items-end max-lg:pt-5  justify-center   lg:w-fit flex-col gap-0.5 lg:gap-1.5 flex md:pr-2 lg:pr-8 xl:pr-12 2xl:pr-16  overflow-hidden">
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
          className="text-3xl font-semibold leading-none tracking-wide text-center md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl"
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
        className="flex items-center gap-3 px-5 py-1 mx-1 text-sm font-light tracking-wide uppercase rounded-md border-1 sm:mx-5 md:mx-0 sm:text-base xl:text-lg w-fit text-primary border-primary "
      >
        <FaGithub />
        View all
      </motion.a>
      {/* <div className="p-1 overflow-hidden rounded-md max-md:w-full">
        <motion.div
          variants={progressBarVariants}
          animate={visible ? "visible" : "hidden"}
          className="relative w-full h-1.5 overflow-hidden rounded-xl md:w-80 bg-base-300"
        >
          <motion.div
            style={{ width: progressBarWidth }}
            className="absolute top-0 left-0 w-full h-full bg-accent"
          ></motion.div>
        </motion.div>
      </div> */}
    </div>
  );
};
