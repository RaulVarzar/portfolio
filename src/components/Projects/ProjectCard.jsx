import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './button.css';
import { useRef, useState } from 'react';
import { getRelativeCoordinates } from '../../util/getMouseCoordinates';

const ProjectCard = ({ project }) => {
  const { title, description, github, demo, photo } = project;

  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.2,
  });

  const y = useTransform(
    spring,
    [0, 0.3, 0.75, 1],
    ['3vh', '0vh', '0vh', '-3vh']
  );
  const scale = useTransform(
    spring,
    [0, 0.25, 0.8, 1],
    ['0.9', '1', '1', '0.82']
  );

  const opacity = useTransform(
    spring,
    [0, 0.3, 0.8, 1],
    ['0', '1', '1', '0.2']
  );

  const imgScale = useTransform(spring, [0, 0.25], ['95%', '100%']);

  const [mousePosition, setMousePosition] = useState(null);
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, cardRef.current));
  };

  return (
    <motion.div style={{ y, scale, opacity }}>
      <motion.div
        ref={cardRef}
        onMouseMove={(e) => handleMouseMove(e)}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        onMouseLeave={() => setMousePosition(null)}
        className="relative justify-between w-full h-full max-w-xl overflow-hidden transition-colors duration-300 border-2 border-opacity-0 shadow-md hover:border-opacity-25 group border-neutral items-between bg-base-200 rounded-2xl"
      >
        {mousePosition && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              opacity: 0.2,
              transition: { duration: 0.2 },
            }}
            transition={{ type: 'spring' }}
            className="absolute w-24 h-24 rounded-full md:w-48 md:h-48 blur-3xl -top-12 -left-12 md:-top-24 md:-left-24 bg-primary brightness-150"
          />
        )}
        <div className="flex flex-col gap-4 p-2 text-left md:p-4 md:gap-6 grow">
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
          <div className="flex flex-col w-11/12 mx-auto md:gap-0.5">
            <h3 className="z-10 flex justify-start w-full overflow-hidden text-base font-medium leading-7 text-left uppercase transition-all duration-300 opacity-70 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:-translate-x-1 text-base-content group-hover:text-slate-100 xl:text-xl ">
              {title}
            </h3>
            {/* <div className="w-full h-0.5 p-0 my-2 opacity-50 bg-base-content group-hover:bg-neutral-content transition-colors duration-300"></div> */}
            <p className="z-10 py-2 text-sm leading-tight tracking-tight transition-all duration-300 opacity-40 xl:text-base text-base-content group-hover:text-neutral-content group-hover:translate-y-0.5 group-hover:scale-102 group-hover:opacity-90">
              {description}
            </p>
          </div>
        </div>
        <div className="z-50 flex flex-row items-center w-full gap-4 pb-4 transition-opacity duration-200 opacity-60 justify-evenly group-hover:opacity-100">
          {github.length > 0 && (
            <a
              href={github}
              target="_blank"
              className="flex items-center justify-between gap-2 px-6 py-2 transition duration-300 rounded-md group-hover:scale-105 opacity-70 group-hover:opacity-100 hover:scale-110 xl:py-3 text-base-content hover:text-primary"
            >
              <i className="text-md sm:text-lg fa-brands fa-github"></i>
              <p className="text-xs sm:text-sm ">Github</p>
            </a>
          )}
          {demo.length > 0 && (
            <a
              href={demo}
              target="_blank"
              className="flex items-center justify-between gap-2 px-6 py-2 transition duration-300 rounded-md group-hover:scale-105 opacity-70 group-hover:opacity-100 hover:scale-110 xl:py-3 text-base-content hover:text-primary"
            >
              <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i>
              <p className="text-xs sm:text-sm ">Demo</p>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
