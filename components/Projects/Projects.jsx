"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import Divider from "@/components/Projects/Divider";
import Header from "@/components/Projects/Header";
import ProjectCard from "@/components/Projects/ProjectCard";
import Link from "next/link";

const Projects = () => {
  const sectionRef = useRef(null);
  const scrollableRef = useRef(null);

  const { scrollYProgress: totalProgress } = useScroll({
    target: scrollableRef,
    offset: ["start center", "end"],
  });

  return (
    <motion.div
      ref={sectionRef}
      className="relative z-20 flex flex-col justify-center w-full pt-12 md:pt-16 xl:pt-24 2xl:pt-32 gap-x-4 xl:gap-x-6 2xl:gap-x-12 lg:flex-row bg-base-100"
    >
      <Header trackedRef={sectionRef} progress={totalProgress} />
      <Divider trackedRef={sectionRef} progress={totalProgress} />
      <motion.div
        ref={scrollableRef}
        className="relative z-30 flex flex-col items-center px-1 gap-y-12 max-w-screen-2xl md:px-8 grow h-fit"
      >
        {projects.map((project, i) => (
          <ProjectCard
            project={project}
            i={i}
            projectIndex={i}
            key={project.title}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
