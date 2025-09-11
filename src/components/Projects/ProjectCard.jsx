import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Title from "./ProjectTitle";
import Description from "./ProjectDescription";
import { GithubButton, DemoButton } from "./Buttons";

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
  const cardY = useTransform(scrollYProgress, [0, 0.8], ["25vh", "0vh"]);
  const cardScale = useTransform(scrollYProgress, [0, 0.8], ["90%", "100%"]);
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
      className=" w-full md:min-h-[50vh] overflow-hidden xl:min-h-[55vh]  flex max-md:px-3 items-center"
    >
      <motion.div
        ref={cardRef}
        style={{
          y: cardY,
          scale: cardScale,
        }}
        className="relative justify-between max-w-5xl p-2 mx-auto mt-24 overflow-hidden cursor-pointer md:p-4 xl:p-5 h-fit group "
      >
        {/* <div className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-30 bg-base-300" /> */}
        <div className="flex flex-col gap-0 text-left md:gap-0 grow ">
          <motion.div className="z-20 p-1 overflow-hidden bg-gradient-to- rounded-t-lg from-accent to-secondary bg-opacity-5 fade-out xl:rounded-t-[41px] aspect-video ">
            {/* {project.gif.length > 0 ?? (
              <img
                src={project.gif}
                alt={photo}
                className={
                  "object-cover hidden max-sm:hidden rounded-lg sm:group-hover:flex top-0 left-0 w-full z-50    h-full"
                }
              />
            )} */}
            <motion.img
              style={{ opacity: imgOpacity, scale: 1.01 }}
              src={project.photo}
              alt={photo}
              className={
                "object-cover w-full h-full rounded-t-2xl md:rounded-t-3xl xl:rounded-t-[40px]"
              }
            />
          </motion.div>

          <div ref={textRef} className="flex flex-col items-start grow">
            <Title title={title} visible={isInView} />
            <Description visible={isInView} description={description} />
            <div className="z-50 flex flex-row items-center gap-3 py-1 mt-2 xl:gap-4 w-fit group justify-evenly ">
              <GithubButton link={github} />
              {demo.length > 0 && <DemoButton link={demo} />}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
