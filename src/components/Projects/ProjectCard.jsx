import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import "./button.css";
import { useEffect, useRef, useState } from "react";
import { getRelativeCoordinates } from "../../util/getMouseCoordinates";

const ProjectCard = ({ project }) => {
  const { title, description, github, demo, photo } = project;

  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollY } = useScroll({
    target: containerRef,
  });
  const scale = useTransform(scrollYProgress, [0, 0.6], ["80%", "100%"]);

  const imgScale = useTransform(scrollYProgress, [0, 0.35], ["110%", "100%"]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.35], ["50%", "100%"]);

  const [mousePosition, setMousePosition] = useState(null);
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, cardRef.current));
  };

  // Animation for blurring out the card after reaching the sticky position
  const [maxScrollY, setMaxScrollY] = useState(Infinity);
  const [cardStyle, setCardStyle] = useState({
    scale: 1,
    blur: 0,
    brightness: 1,
  });
  const isInView = useInView(containerRef, {
    margin: `0% 0% -90% 0%`,
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView]);

  scrollY.on("change", (scrollY) => {
    let animationValue = 1;
    if (scrollY > maxScrollY) {
      animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 7000);
    }

    setCardStyle({
      scale: animationValue,
      blur: (1 - animationValue) * 30,
      brightness: animationValue * 100,
    });
  });
  //////////////////////////////////////////////////

  return (
    <motion.div
      ref={containerRef}
      className="sticky top-[20vh] h-[60vh] md:top-[10vh] md:h-[80vh] flex max-md:px-3 items-center"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={(e) => handleMouseMove(e)}
        whileHover={!isInView && { scale: 1.02, transition: { duration: 0.3 } }}
        onMouseLeave={() => setMousePosition(null)}
        style={{
          scale: cardStyle.scale,
          filter: `blur(${cardStyle.blur}px) brightness(${cardStyle.brightness}%)`,
        }}
        className="top-24 justify-between w-2xl h-fit max-w-4xl overflow-hidden border-2 border-opacity-20 group hover:border-opacity-35 shadow-md rounded-lg group border-neutral items-between bg-base-300 bg-opacity-100  backdrop-blur-2xl"
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
            transition={{ type: "spring" }}
            className="absolute w-24 h-24 rounded-full md:w-48 md:h-48 blur-3xl -top-12 -left-12 md:-top-24 md:-left-24 bg-primary brightness-150"
          />
        )}
        <div className="flex flex-col overflow-hidden gap-4 p-2 text-left md:p-4 md:gap-6 grow">
          <motion.div className="z-10 aspect-video overflow-hidden rounded-md">
            <img
              src={project.gif}
              alt={photo}
              className={
                "object-cover hidden group-hover:flex top-0 left-0 w-full z-50    h-full"
              }
            />
            <motion.img
              style={{ scale: imgScale, opacity: imgOpacity }}
              src={project.photo}
              alt={photo}
              className={"object-cover w-full "}
            />
          </motion.div>

          <div className="flex flex-col grow md:gap-0.5">
            <h3 className="z-10 flex px-4 justify-start w-full overflow-hidden text-base font-semibold tracking-wider leading-7 text-left uppercase transition-all duration-300 opacity-70 group-hover:opacity-100  text-base-content group-hover:text-slate-100 xl:text-xl ">
              {title}
            </h3>
            {/* <div className="w-full h-0.5 p-0 my-2 opacity-50 bg-base-content group-hover:bg-neutral-content transition-colors duration-300"></div> */}
            <p className="z-10 px-4 py-1 text-sm leading-tight tracking-tight transition-all duration-300 opacity-40 xl:text-base text-base-content group-hover:text-neutral-content  group-hover:opacity-70">
              {description}
            </p>
            <div className="z-50 flex py-2 flex-row items-center w-fit gap-0 transition-opacity duration-200 opacity-60 justify-evenly group-hover:opacity-100">
              {github.length > 0 && (
                <a
                  href={github}
                  target="_blank"
                  className="flex items-center justify-between gap-2 px-4  py-2 transition  duration-300 group-hover:scale-105 group-hover:opacity-100 rounded-md opacity-70   xl:py-3 text-base-content hover:text-primary"
                >
                  <i className="text-md sm:text-lg fa-brands fa-github"></i>
                  <p className="text-xs sm:text-sm ">Github</p>
                </a>
              )}
              {demo.length > 0 && (
                <a
                  href={demo}
                  target="_blank"
                  className="flex items-center justify-between gap-2 px-4  py-2 transition  duration-300 group-hover:scale-105 group-hover:opacity-100 rounded-md opacity-70   xl:py-3 text-base-content hover:text-primary"
                >
                  <i className="text-base sm:text-md fa-solid fa-arrow-up-right-from-square"></i>
                  <p className="text-xs sm:text-sm ">Demo</p>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
