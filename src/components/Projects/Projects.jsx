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

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], ["100%", "0%"]);

  const isInView = useInView(sectionRef, {
    margin: "0% 0% -60% 0%",
  });

  // TO DO : MAKE TITLE APPEAR LETTER BY LETTER

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden w-full bg-base-100 "
    >
      <div className="flex flex-row r">
        <motion.div
          style={{ opacity }}
          className="fixed inset-y-0 w-1/2 flex-col gap-1 h-fit flex place-self-center items-end justify-center px-24 mx-auto overflow-hidden"
        >
          <motion.div className="h-fit overflow-hidden">
            <motion.h3
              variants={variants}
              animate={isInView ? "visible" : "hidden"}
              className="text-2xl font-black tracking-wide leading-none  text-center sm:text-3xl md:text-4xl lg:text-6xl"
            >
              MY PROJECTS
            </motion.h3>
          </motion.div>
          <motion.button
            transition={{ delay: 0.3, duration: 0.4 }}
            variants={variants}
            animate={isInView ? "visible" : "hidden"}
            className="flex text-sm font-normal align-middle tracking-wide uppercase transition-all duration-300 btn-sm rounded-md  text-primary  border-accent border-none btn hover:btn-outline btn-ghost hover:text-base-100"
          >
            View all
            <FaGithub />
          </motion.button>
        </motion.div>

        <div className=" w-1/2"></div>
        <motion.div className="flex w-1/2 pt-[50vh] pb-[20vh] justify-start flex-col px-2  mx-auto gap-x-4 gap-y-6 md:flex-row h-fit lg:gap-x-6 ">
          <motion.div className="flex flex-col gap-y-6">
            {projects.map((project, i) => (
              <ProjectCard project={project} i={i} key={project.title} />
            ))}
          </motion.div>
          {/* <motion.div className="flex flex-col gap-y-6">
            {rightRow.map((project, i) => (
              <ProjectCard project={project} i={i} key={project.title} />
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
