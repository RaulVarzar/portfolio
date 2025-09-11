import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { projects } from "../../data/projects";
import Divider from "./Divider";
import { ViewAllProjectsButton } from "./Buttons";

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
      className="relative z-20 flex pt-[10vh]  flex-col justify-end w-full lg:flex-row bg-base-100"
    >
      <Header trackedRef={sectionRef} progress={totalProgress} />
      <Divider trackedRef={sectionRef} progress={totalProgress} />
      <motion.div
        ref={scrollableRef}
        className="relative flex px-1 md:px-8 z-30 flex-col w-full mb-[15vh] md:max-lg:grow lg:w-7/12 items-center h-fit mt-[10vh] lg:mt-[12vh] "
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
    <>
      <div className="lg:sticky max-lg:pt-[20vh] lg:-mt-[75vh] top-0 z-10 w-full lg:h-screen  lg:items-end justify-center   lg:w-fit flex-col gap-0.5 lg:gap-1.5 flex md:pr-2 lg:pr-8 xl:pr-12 2xl:pr-16">
        <motion.div className="flex flex-col justify-center gap-2 px-4 lg:items-end lg:justify-end h-fit sm:px-8 md:px-0">
          <motion.h3
            variants={variants}
            animate={visible ? "visible" : "hidden"}
            className="text-5xl font-semibold leading-none tracking-wide text-center opacity-50 text-base-content md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            MY PROJECTS
          </motion.h3>
          <ViewAllProjectsButton visible={visible} />
        </motion.div>
      </div>
    </>
  );
};
