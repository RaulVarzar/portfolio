import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Title from "./ProjectTitle";
import Description from "./ProjectDescription";
import { GithubButton, DemoButton } from "./Buttons";

const ProjectCard = ({ project, projectIndex }) => {
  const { title, description, github, demo, photo } = project;

  const textRef = useRef(null);

  const containerRef = useRef(null);
  const nextRef = useRef(null);

  // track next sibling's scroll progress using framer-motion
  // nextRef will be assigned to the actual next sibling element in useEffect
  const { scrollYProgress: nextProgress } = useScroll({
    target: nextRef,
    // offsets tuned so progress grows as the next card approaches/overlaps the top sticky area
    offset: ["start end", "end start"],
  });

  // TITLE ANIMATIONS
  const isInView = useInView(textRef, {
    margin: `1000% 0% -10% 0%`,
    once: true,
  });

  // wire next sibling DOM node to nextRef (useScroll accepts a ref or element)
  useEffect(() => {
    if (!containerRef.current) return;
    nextRef.current = containerRef.current.nextElementSibling;
  }, []);

  // fade this card as the next card starts overlapping the sticky area
  // map nextProgress so the fade runs longer (until the next card is ~80% overlapped)
  // adjust the stops if you want a quicker or slower fade
  const opacity = useTransform(nextProgress, [0.25, 0.45], [1, 0]);
  const scale = useTransform(nextProgress, [0.25, 0.45], [1, 0.92]);
  const filter = useTransform(
    nextProgress,
    [0.25, 0.5],
    ["blur(0px)", "blur(4px)"]
  );
  /////////////
  return (
    <motion.div
      ref={containerRef}
      className="flex items-center sticky top-[15vh] bg-base-200 w-full max-w-6xl overflow-hidden border-t border-opacity-25 border-base-content"
    >
      <motion.div
        style={{ opacity, scale, filter }}
        className="relative flex flex-row justify-between p-0 py-8 mx-auto overflow-hidden origin-top md:py-10 xl:py-16 2xl:py-20 gap-x-4 h-fit group "
      >
        <span className="text-2xl text-neutral-content opacity-60">
          0{projectIndex}
        </span>
        <div
          ref={textRef}
          className="flex flex-col items-start px-4 grow md:px-6 xl:px-12 2xl:pl-12 2xl:pr-24"
        >
          <Title title={title} visible={isInView} />
          <Description visible={isInView} description={description} />
          {/* <div className="z-50 flex flex-row items-center gap-3 py-1 mt-2 xl:gap-4 w-fit group justify-evenly ">
            <GithubButton link={github} />
            {demo.length > 0 && <DemoButton link={demo} />}
          </div> */}
        </div>

        <motion.div className="z-20 p-1 overflow-hidden rounded-t-lg bg-gradient-to- from-accent to-secondary bg-opacity-5 fade-ou aspect-video ">
          <motion.img
            style={{ scale: 1.01 }}
            src={project.photo}
            alt={photo}
            className={"object-cover w-full h-full "}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
