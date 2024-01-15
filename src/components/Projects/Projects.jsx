import { motion, useInView, useScroll } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState, useRef, useEffect, forwardRef } from "react";

const PROJECTS = [
  "Timer challenge",
  "Hangman Game",
  "Food ordering app",
  "Demo project",
  "Quiz game",
  "Blog",
];

const variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2, staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hide: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Projects = forwardRef(({ makeActive }, ref) => {
  const [isHovering, setIsHovering] = useState(false);

  const isInView = useInView(ref);

  const sectionRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      makeActive("projects");
    }
  }, [isInView]);

  return (
    <section className="grid w-full h-screen px-2 py-10 overflow-y-auto md:px-10 section place-content-center snap-center">
      <motion.div
        variants={variants}
        ref={ref}
        initial="hide"
        whileInView="show"
        className="grid w-full grid-cols-2 gap-1 divide-base-300  max-w-[1600px] xl:grid-cols-3 2xl:grid-cols-4"
      >
        {PROJECTS.map((project, i) => (
          <motion.div key={project} variants={cardVariants}>
            <ProjectCard
              title={project}
              i={i}
              setHover={(state) => setIsHovering(state)}
              isHovering={isHovering}
            />
          </motion.div>
        ))}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: PROJECTS.length * 0.3 },
          }}
          className="grid col-span-2 xl:col-span-1 place-content-center"
        >
          <div
            className={
              "flex flex-row gap-4 px-8  py-4 transition duration-300 items-center hover:opacity-80 text-base-content hover:text-primary " +
              (isHovering ? " opacity-0" : " opacity-40 ")
            }
          >
            <h3 className="text-base lg:text-md">ALL PROJECTS</h3>
            <i className="text-md fa-solid fa-arrow-right-long"></i>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Projects;
