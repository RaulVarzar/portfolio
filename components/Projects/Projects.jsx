"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import Divider from "@/components/Projects/Divider";
import Header from "@/components/Projects/Header";
import ProjectCard from "@/components/Projects/ProjectCard";
import Link from "next/link";
import Skills from "../Skills/Skills";

const Projects = () => {
  return (
    <motion.div className="relative z-20 flex flex-col justify-center w-full pt-12 bg- md:pt-16 xl:pt-24 2xl:pt-32 gap-x-4 xl:gap-x-6 2xl:gap-x-12 lg:flex-row bg-base-100 ">
      <Header />
      {/* <Divider /> */}
      <motion.div className="relative z-30 flex flex-col items-center px-1 gap-y-12 max-w-screen-2xl md:px-8 grow h-fit">
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
  );
};

export default Projects;
