"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Title from "@/components/Projects/ProjectTitle";
import Description from "@/components/Projects/ProjectDescription";
import Button from "@/components/Button";
import { IoLogoGithub } from "react-icons/io5";

import { HiOutlineExternalLink } from "react-icons/hi";

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

  // Track if there is a next sibling (for last card, no exit animation)
  const hasNext = !!containerRef.current?.nextElementSibling;
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
      style={hasNext ? { opacity } : {}}
      className="flex items-center  sticky top-[15vh] 2xl:top-[15vh] bg-base-100 w-full max-w-7xl overflow-hidden border-t border-opacity-20 border-base-content"
    >
      <motion.div
        style={hasNext ? { opacity, scale, filter } : {}}
        className="relative grid justify-between grid-cols-12 p-0 py-8 mx-auto overflow-hidden origin-top md:py-12 lg:py-16 xl:py-20 2xl:py-28 gap-x-4 h-fit group "
      >
        <span className="col-span-1 text-2xl xl:text-3xl text-neutral-content opacity-60">
          0{projectIndex + 1}
        </span>

        <div
          ref={textRef}
          className="flex flex-col items-start col-span-5 px-1 grow md:px-2 xl:px-6 "
        >
          <Title title={title} visible={isInView} />
          <Description visible={isInView} description={description} />
          <ActionButtons github={github} demo={demo} />
        </div>

        <motion.div className="z-20 col-span-6 p-1 overflow-hidden rounded-lg aspect-video ">
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

const ActionButtons = ({ github, demo }) => {
  return (
    <div className="z-50 flex flex-row items-center gap-3 py-1 mt-2 md:gap-4 xl:gap-6 w-fit group justify-evenly ">
      <Button
        label={"Github"}
        link={github}
        className="!text-sm py-1.5 md:py-2 border-1 px-4 !gap-5 font-light rounded-sm"
        color={"accent"}
        transitionAmount={3}
      >
        <IoLogoGithub />
      </Button>
      {demo.length > 0 && (
        <Button
          label={"Demo"}
          link={demo}
          className="!text-sm py-1.5 md:py-2 border-1 px-4 !gap-5 font-light rounded-sm"
          color={"accent"}
          transitionAmount={3}
        >
          <HiOutlineExternalLink />
        </Button>
      )}
    </div>
  );
};
