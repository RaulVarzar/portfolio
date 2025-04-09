import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: "-50%",
    filter: "blur(6px)",
    transition: {
      ease: [0.7, 0, 0.25, 1],
      duration: 0.25,
      delay: 0.1,
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.7, 0, 0.25, 1],
      delay: 0,
      duration: 1,
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
    margin: `1000% 0% -10% 0%`,
    once: true,
  });

  /////////////
  return (
    <motion.div
      ref={containerRef}
      className=" w-full min-h-[50vh] overflow-hidden md:min-h-[55vh]  flex max-md:px-3 items-center"
    >
      <motion.div
        ref={cardRef}
        style={{
          x: cardX,
          y: cardY,
          scale: cardScale,
          opacity: cardOpacity,
        }}
        className="relative justify-between max-w-3xl p-2 mx-auto mt-24 overflow-hidden cursor-pointer md:p-4 xl:p-5 h-fit group rounded-xl"
      >
        <div className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-base-200" />
        <div className="flex flex-col gap-3 text-left md:gap-4 grow ">
          <motion.div
            // style={{ scale: imgScale }}
            className="z-20 overflow-hidden border-2 rounded-lg border-opacity-30 aspect-video border-neutral"
          >
            {project.gif.length > 0 ?? (
              <img
                src={project.gif}
                alt={photo}
                className={
                  "object-cover hidden max-sm:hidden sm:group-hover:flex top-0 left-0 w-full z-50    h-full"
                }
              />
            )}
            <motion.img
              style={{ opacity: imgOpacity }}
              src={project.photo}
              alt={photo}
              className={"object-cover w-full h-full"}
            />
          </motion.div>

          <div className="flex flex-row-reverse items-start gap-y-1">
            <div
              ref={textRef}
              className="flex flex-col items-start sm:items-end grow"
            >
              <motion.div
                variants={titleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h3 className="z-10 flex justify-start overflow-hidden text-2xl font-normal   leading-none xl:leading-[48px] tracking-wider text-left uppercase group-hover:brightness-125 transition-all duration-300 text-base-content  md:text-3xl xl:text-4xl ">
                  {title}
                </motion.h3>
              </motion.div>
              <Description visible={isInView} description={description} />
              <div className="z-50 flex flex-row items-center gap-6 py-1 transition-opacity duration-200 w-fit opacity-60 justify-evenly group-hover:opacity-100">
                {github.length > 0 && (
                  <CustomLink title="Github" link={github} />
                )}
                {demo.length > 0 && <CustomLink title="Demo" link={demo} />}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

const Description = ({ visible, description }) => {
  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: "-15%",
      filter: "blur(5px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 0.25,
        delay: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0.4,
        duration: 0.9,
      },
    },
  };

  return (
    <motion.div
      variants={descriptionVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <p className="z-10 max-w-xl py-1 text-sm leading-tight tracking-wider text-left transition-all duration-300 font-extralight text-balance sm:text-right opacity-60 xl:text-base text-base-content group-hover:text-neutral-content group-hover:opacity-90">
        {description}
      </p>
    </motion.div>
  );
};

export const CustomLink = ({ title, link }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "-20%",
      filter: "blur(4px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 0.3,
        delay: 0,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0,
        duration: 1,
      },
    },
  };

  const ref = useRef(null);
  const visible = useInView(ref, { margin: "1000% 0% -5% 0%", once: true });

  return (
    <div ref={ref}>
      <motion.a
        href={link}
        variants={variants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        target="_blank"
        className="flex items-center justify-between gap-2 py-2 rounded-md group-hover:scale-105 group-hover:opacity-100 opacity-70 xl:py-3 text-base-content hover:text-primary"
      >
        <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i>
        <p className="text-sm ">{title}</p>
      </motion.a>
    </div>
  );
};
