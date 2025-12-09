import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../data/projects";
import Divider from "./Divider";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

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
      className="relative z-20 flex flex-col justify-center w-full pt-24 md:pt-36 xl:pt-48 2xl:pt-56 gap-x-12 lg:flex-row bg-base-200"
    >
      <Header trackedRef={sectionRef} progress={totalProgress} />
      <Divider trackedRef={sectionRef} progress={totalProgress} />
      <motion.div
        ref={scrollableRef}
        className="relative flex gap-y-12 px-1 max-w-screen-2xl  md:px-8 z-30 flex-col grow mb-[15vh]  items-center h-fit mt-[10vh] lg:mt-[12vh] "
      >
        {projects.map((project, i) => (
          <ProjectCard
            project={project}
            i={i}
            projectIndex={i}
            key={project.title}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
