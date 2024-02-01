import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useRef, useEffect, forwardRef } from 'react';
import { projects } from '../../data/projects';
import { Reveal } from '../../util/animations';

const variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2, staggerChildren: 0.3 },
  },
};

const Projects = forwardRef(({ makeActive }, ref) => {
  const targetRef = useRef(null);
  const projectsRef = useRef(null);

  const isInView = useInView(projectsRef);
  useEffect(() => {
    if (isInView) {
      makeActive('projects');
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });

  const y = useTransform(
    spring,
    [0, 0.3, 0.7, 1],
    ['20vh', '0vh', '10vh', '15vh']
  );

  const scale = useTransform(spring, [0, 0.4], ['85%', '100%']);
  const opacity = useTransform(
    spring,
    [0, 0.25, 0.75, 0.95],
    ['40%', '100%', '100%', '0%']
  );

  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-center w-full px-2 pt-16 pb-36 md:my-0 md:px-10"
    >
      <motion.div
        ref={targetRef}
        className="sticky top-0 flex  flex-col  items-center justify-start min-h-[20vh] mt-[10vh]"
      >
        <motion.h3
          style={{ y, scale, opacity }}
          className="text-5xl font-bold text-accent sm:text-6xl lg:text-7xl"
        >
          <Reveal repeat delay={0.3} duration={1.4}>
            MY PROJECTS
          </Reveal>
        </motion.h3>
      </motion.div>
      <motion.div
        ref={projectsRef}
        className="h-fit  mx-auto px-2 gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2 ax-w-7xl [&>div:not(:first-child)]:mt-0"
      >
        {projects.map((project, i) => (
          <ProjectCard project={project} i={i} key={project.title} />
        ))}
      </motion.div>
    </div>
  );
});

export default Projects;
