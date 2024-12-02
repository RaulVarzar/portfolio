import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: "-50%",
    filter: "blur(6px)",
    transition: {
      ease: [0.45, 0.1, 0.25, 1],
      duration: 0.25,
      delay: 0.1,
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0,
      duration: 1,
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: "-15%",
    filter: "blur(5px)",
    transition: {
      ease: [0.45, 0.1, 0.25, 1],
      duration: 0.25,
      delay: 0.1,
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.4,
      duration: 0.9,
    },
  },
};

const ProjectCard = ({ project }) => {
  const { title, description, github, demo, photo } = project;

  const cardRef = useRef(null);
  const textRef = useRef(null);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center"],
  });

  const cardX = useTransform(scrollYProgress, [0, 0.8], ["8vw", "0vw"]);
  const cardY = useTransform(scrollYProgress, [0, 0.8], ["20vh", "0vh"]);
  const cardScale = useTransform(scrollYProgress, [0, 0.8], ["120%", "100%"]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  const imgScale = useTransform(scrollYProgress, [0, 0.8], ["120%", "100%"]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.35], ["50%", "100%"]);

  // TITLE ANIMATIONS
  const isInView = useInView(textRef, {
    margin: `0% 0% -10% 0%`,
  });

  /////////////
  return (
    <motion.div
      ref={containerRef}
      className=" w-full min-h-[50vh] overflow-hidden md:min-h-[55vh] border-b- border-neutral flex max-md:px-3 items-center"
    >
      <motion.div
        ref={cardRef}
        style={{
          x: cardX,
          y: cardY,
          scale: cardScale,
          opacity: cardOpacity,
        }}
        className="justify-between max-w-3xl p-8 mx-auto overflow-hidden top-24 h-fit group "
      >
        <div className="flex flex-col gap-3 text-left md:gap-4 grow">
          <motion.div
            style={{ scale: imgScale }}
            className="z-20 overflow-hidden rounded-m aspect-video"
          >
            <img
              src={project.gif}
              alt={photo}
              className={
                "object-cover hidden max-sm:hidden group-hover:flex top-0 left-0 w-full z-50    h-full"
              }
            />
            <motion.img
              style={{ opacity: imgOpacity }}
              src={project.photo}
              alt={photo}
              className={"object-cover w-full"}
            />
          </motion.div>

          <div className="flex flex-row-reverse items-start gap-y-1">
            <div
              ref={textRef}
              className=" flex-col items-center sm:items-end grow md:gap-0.5 flex  py-1"
            >
              <motion.h3
                variants={titleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="z-10 flex justify-start overflow-hidden text-2xl font-bold leading-10 xl:leading-[48px] tracking-wider text-left uppercase opacity-85 group-hover:opacity-100 text-base-content group-hover:text-slate-100 md:text-4xl xl:text-5xl "
              >
                {title}
              </motion.h3>
              {/* <div className="w-full h-0.5 p-0 my-2 opacity-50 bg-base-content group-hover:bg-neutral-content transition-colors duration-300"></div> */}
              <motion.p
                variants={descriptionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="z-10 max-w-xl py-1 text-sm font-light leading-tight tracking-wider text-center text-balance sm:text-right opacity-60 xl:text-base text-base-content group-hover:text-neutral-content group-hover:opacity-70"
              >
                {description}
              </motion.p>
              <div className="z-50 flex flex-row items-center gap-6 py-2 transition-opacity duration-200 w-fit opacity-60 justify-evenly group-hover:opacity-100">
                {github.length > 0 && (
                  <a
                    href={github}
                    target="_blank"
                    className="flex items-center justify-between gap-2 py-2 transition duration-300 rounded-md group-hover:scale-105 group-hover:opacity-100 opacity-70 xl:py-3 text-base-content hover:text-primary"
                  >
                    <i className="text-md sm:text-lg fa-brands fa-github"></i>
                    <p className="text-sm ">Github</p>
                  </a>
                )}
                {demo.length > 0 && (
                  <a
                    href={demo}
                    target="_blank"
                    className="flex items-center justify-between gap-2 py-2 transition duration-300 rounded-md group-hover:scale-105 group-hover:opacity-100 opacity-70 xl:py-3 text-base-content hover:text-primary"
                  >
                    <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i>
                    <p className="text-sm ">Demo</p>
                  </a>
                )}
              </div>
            </div>
            {/* <div className="mt-5 font-thin leading-10 tracking-tighter text-8xl opacity-10 text-secondary">
              04
            </div> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
