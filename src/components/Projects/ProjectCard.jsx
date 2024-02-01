import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './button.css';
import { useRef } from 'react';

const ProjectCard = ({ project, i }) => {
  const { title, description, github, demo, photo } = project;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.2,
  });

  const y = useTransform(
    spring,
    [0, 0.3, 0.8, 1],
    ['15vh', '0vh', '0vh', '2vh']
  );
  const opacity = useTransform(
    spring,
    [0, 0.2, 0.9, 1],
    ['0%', '100%', '100%', '20%']
  );
  const scale = useTransform(
    spring,
    [0, 0.3, 0.8, 1],
    ['90%', '100%', '100%', '87%']
  );

  const imgScale = useTransform(spring, [0, 0.35], ['85%', '100%']);

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -8, transition: { duration: 0.3 } }}
    >
      <motion.div
        style={{ scale, opacity, y }}
        ref={sectionRef}
        className="relative justify-between w-full h-full max-w-lg transition-colors duration-300 shadow-md items-between card bg-base-300 group rounded-2xl"
      >
        <div className="flex flex-col gap-4 p-2 text-left grow ">
          <motion.div style={{ scale: imgScale }} className="z-10">
            <img
              src={project.photo}
              alt={photo}
              className={
                'object-cover w-full  rounded-xl aspect-video group-hover:hidden'
              }
            />
            <img
              src={project.gif}
              alt={photo}
              className={
                'object-cover w-full z-10 rounded-xl aspect-video hidden group-hover:flex'
              }
            />
          </motion.div>
          <div className="flex flex-col w-11/12 mx-auto">
            <h3 className="z-10 flex justify-start w-full overflow-hidden text-base font-medium leading-7 text-left uppercase transition-colors duration-300 text-base-content group-hover:text-neutral-content xl:text-xl ">
              {title}
            </h3>
            <div className="w-full h-0.5 p-0 my-2 opacity-50 bg-base-content group-hover:bg-neutral-content transition-colors duration-300"></div>
            <p className="z-10 py-2 text-sm leading-tight tracking-tight transition-colors duration-300 opacity-50 xl:text-base text-base-content group-hover:text-neutral-content group-hover:opacity-80">
              {description}
            </p>
          </div>
        </div>
        <div className="z-50 flex flex-row items-center w-full gap-4 pb-4 justify-evenly">
          {github.length > 0 && (
            <a
              href={github}
              target="_blank"
              className="flex items-center justify-between px-6 py-2 transition-all duration-200 rounded-md opacity-70 hover:opacity-100 hover:scale-110 xl:py-3 text-base-content group-hover:text-neutral-content "
            >
              <span className="flex flex-row items-center gap-2 text-base ">
                <i className="text-lg transition-all duration-100 fa-brands fa-github"></i>
                <p className="text-sm ">Github</p>
              </span>
            </a>
          )}
          {demo.length > 0 && (
            <a
              href={demo}
              target="_blank"
              className="flex items-center justify-between px-6 py-2 transition-all duration-200 rounded-md opacity-70 hover:opacity-100 hover:scale-110 xl:py-3 text-base-content group-hover:text-neutral-content "
            >
              <span className="flex flex-row items-center gap-2 text-base ">
                <i className="text-lg fa-solid fa-arrow-up-right-from-square"></i>
                <p className="text-sm ">Demo</p>
              </span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
