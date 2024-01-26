import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./button.css";
import { useRef } from "react";

const ProjectCard = ({ project, i }) => {
  const variants = { isEven: { y: -100 } };

  const { title, description, github, demo, photo } = project;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 37,
    restDelta: 0.001,
  });

  const y = useTransform(spring, [0, 1], ["10vh", "0vh"]);
  const opacity = useTransform(spring, [0.2, 0.6], ["60%", "100%"]);
  const scale = useTransform(spring, [0, 1], ["92%", "100%"]);

  return (
    <motion.div
      style={{ y, scale, opacity }}
      ref={sectionRef}
      className="relative w-full transition-colors duration-300 border-opacity-25 elevation-3 hover:elevation-9 border-1 border-base-content hover:scale-105 bg-base-300 group h-fit rounded-4xl hover:border-opacity-65"
    >
      <motion.div className="relative flex flex-col justify-between w-full h-full p-3 space-y-2 md:p-4 2xl:p-6 lg:space-y-6">
        <motion.div className="flex flex-col justify-end gap-4 text-left ">
          <img
            src={`./projects/photos/${photo}.jpg`}
            alt={photo}
            className={
              "object-cover w-full rounded-3xl border-neutral aspect-video  z-50 "
            }
          />
          <div className="flex flex-col">
            <motion.h3 className="z-10 flex justify-start w-full overflow-hidden text-base font-semibold leading-7 text-left uppercase text-base-content xl:text-xl ">
              {title}
            </motion.h3>
            <p className="z-10 text-sm leading-tight tracking-tight opacity-50 xl:text-base text-base-content group-hover:opacity-90">
              {description}
            </p>
          </div>
        </motion.div>
        <div className="flex flex-row items-center gap-4 justify-evenly">
          <a
            href={github}
            target="_blank"
            className="flex items-center justify-between px-6 py-2 transition-all duration-100 rounded-md xl:py-3 text-base-content opacity-80 group-hover:opacity-100 hover:text-primary "
          >
            <span className="flex flex-row items-center gap-2 text-base">
              <i className="text-lg transition-all duration-300 fa-brands fa-github"></i>
              <p className="text-sm ">Github</p>
            </span>
          </a>
          {/* <a
            href="https://hangman-ten-tau.vercel.app/"
            target="_blank"
            className={
              'rounded-none border-t-0 border-x-0 border-b-4 border-transparent hover:border-neutral text-sm py-0 btn btn-ghost hover:bg-transparent flex flex-row gap-1 w-fit ' +
              (isCurrentHovering ? ' opacity-100' : ' opacity-50')
            }
          >
            <p className=" text-nowrap">Live demo</p>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a> */}

          <a href={demo} target="_blank">
            <button className="px-2 md:px-4 xl:px-6 opacity-70 hover:opacity-100 transition duration-300 pt-1 pb-1.5  my-button text-base-content">
              <div className="flex items-center gap-2 font-semibold text">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>

                <span>Demo</span>
              </div>
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
