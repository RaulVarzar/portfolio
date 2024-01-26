import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState, useRef, useEffect, forwardRef } from "react";
import { projects } from "../../data/projects";

const variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2, staggerChildren: 0.3 },
  },
};

const Projects = forwardRef(({ makeActive }, ref) => {
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      makeActive("projects");
    }
  }, [isInView]);

  const targetRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["20vh", "0vh", "0vh", "-20vh"]
  );
  const scale = useTransform(scrollYProgress, [0, 0.4], ["60%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], ["40%", "100%"]);

  return (
    <div className="relative flex flex-col justify-center w-full px-2 pt-16 pb-36 md:my-0 md:px-10">
      <motion.div
        ref={targetRef}
        className="sticky top-0 flex flex-col items-center justify-start min-h-[40vh] "
      >
        <motion.h3 style={{ y, scale, opacity }} className="font-bold text-8xl">
          MY PROJECTS
        </motion.h3>
      </motion.div>
      <motion.div
        ref={ref}
        className="h-fit  mx-auto px-2 gap-4 grid grid-cols-2 max-w-7xl [&>div:not(:first-child)]:mt-0"
      >
        {projects.map((project, i) => (
          <ProjectCard project={project} i={i} />
        ))}
      </motion.div>
    </div>
  );
});

export default Projects;
