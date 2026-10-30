"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import Divider from "@/components/Projects/Divider";
import Header from "@/components/Projects/Header";
import ProjectCard from "@/components/Projects/ProjectCard";
import Link from "next/link";
import Skills from "../Skills/Skills";
import { AnimatedBox } from "@/util/exitAnimationWrapper";

const Projects = () => {
  return (
    <AnimatedBox>
      <motion.div className="relative z-20 flex flex-col justify-center w-full pt-8 bg- md:pt-10 xl:pt-12 2xl:pt-16 gap-x-4 xl:gap-x-6 2xl:gap-x-12 lg:flex-row bg-base-100 ">
        <Header />
        {/* <Divider /> */}
        <motion.div className="relative z-30 flex flex-col items-center gap-y-12 max-w-screen-2xl md:px-8 grow h-fit ">
          {projects.map((project, i) => (
            <ProjectCard
              project={project}
              i={i}
              projectIndex={i}
              key={project.title}
            />
          ))}
          <div className="h-[30vh] w-full" />
        </motion.div>
      </motion.div>
    </AnimatedBox>
  );
};

export default Projects;
