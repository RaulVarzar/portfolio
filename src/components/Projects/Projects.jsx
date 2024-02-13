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

const leftRow = projects.filter((element, index) => index % 2 == 0);
const rightRow = projects.filter((element, index) => index % 2 !== 0);

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
    [0, 0.5, 0.8, 1],
    ['10vh', '0vh', '0vh', '-5vh']
  );

  const scale = useTransform(spring, [0, 0.4], ['85%', '100%']);
  const opacity = useTransform(
    spring,
    [0, 0.25, 0.85, 0.95],
    ['40%', '80%', '85%', '0%']
  );

  const { scrollYProgress: projectsScroll } = useScroll({
    target: projectsRef,
    offset: ['start end', 'end start'],
  });

  const spring2 = useSpring(projectsScroll, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });

  const leftRowY = useTransform(spring2, [0, 1], ['20vh', '-25vh']);
  const rightRowY = useTransform(spring2, [0, 1], ['10vh', '-15vh']);
  const cardsScale = useTransform(spring, [0, 0.1], ['92%', '100%']);

  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-center w-full px-2 pt-16 pb-36 md:my-0 md:px-10"
    >
      <motion.div
        ref={targetRef}
        className="relative top-0 items-center justify-start mx-auto mt-4 md:mt-8"
      >
        <motion.h3
          style={{ y, scale, opacity }}
          className="text-2xl font-bold text-base-content sm:text-4xl lg:text-5xl"
        >
          {/* <Reveal delay={0.3} duration={1.4}> */}
          MY PROJECTS
          {/* </Reveal> */}
        </motion.h3>
      </motion.div>
      <motion.div
        ref={projectsRef}
        style={{ scale: cardsScale }}
        className="flex flex-col px-2 pt-10 mx-auto gap-x-4 gap-y-6 md:flex-row h-fit lg:gap-x-6 border-error max-w-7xl "
      >
        <motion.div style={{ y: leftRowY }} className="flex flex-col gap-y-6">
          {leftRow.map((project, i) => (
            <ProjectCard project={project} i={i} key={project.title} />
          ))}
        </motion.div>
        <motion.div style={{ y: rightRowY }} className="flex flex-col gap-y-6">
          {rightRow.map((project, i) => (
            <ProjectCard project={project} i={i} key={project.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Projects;
