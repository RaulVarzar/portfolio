import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useState, useRef, useEffect, forwardRef } from 'react';
import { projects } from '../../data/projects';

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
      makeActive('projects');
    }
  }, [isInView]);

  return (
    <section className="grid w-full min-h-screen px-2 pt-16 pb-10 my-10 overflow-y-auto md:my-0 md:px-10 section place-content-center snap-center">
      <div className="w-full h-full overflow-y-auto ">
        <motion.div
          variants={variants}
          ref={ref}
          initial="hide"
          whileInView="show"
          className="flex flex-wrap items-stretch w-full px-2 sm:px-6 md:px-8 divide-base-300"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="w-full p-1 md:w-1/2 xl:w-1/3"
            >
              <ProjectCard
                project={project}
                i={i}
                setHover={(state) => setIsHovering(state)}
                isHovering={isHovering}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Projects;
