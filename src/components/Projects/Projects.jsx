import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useState, useRef, useEffect } from 'react';

const PROJECTS = [
  'Timer challenge',
  'Hangman Game',
  'Food ordering app',
  'Demo project',
  'Quiz game',
  'Blog',
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

const Projects = ({ makeActive }) => {
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef();

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      makeActive('projects');
    }
  }, [isInView]);

  return (
    <div className="container px-2 m-auto text-neutral sm:px-6 lg:px-12">
      <motion.div
        variants={variants}
        ref={ref}
        initial="hide"
        whileInView="show"
        className="grid gap-1 mt-16 divide-base-300 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
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
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: PROJECTS.length * 0.3 },
          }}
          className="grid place-content-center "
        >
          <div
            className={
              'flex flex-row gap-4 px-8 py-4 cursor-pointer transition duration-300 hover:opacity-80 text-base-content hover:text-primary ' +
              (isHovering ? ' opacity-0' : ' opacity-40 ')
            }
          >
            <h3 className="text-base">ALL PROJECTS</h3>
            <i className="text-base fa-solid fa-arrow-right"></i>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
