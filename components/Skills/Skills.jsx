"use client";

import { useEffect, useRef, forwardRef } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import SkillsCard from "@/components/Skills/SkillsCard";
import { Title } from "@/components/Skills/Title";

const Skills = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const sectionScale = useTransform(scrollYProgress, [0, 0.3], ["98%", "100%"]);
  const sectionY = useTransform(scrollYProgress, [0, 0.3], ["8%", "0%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.1, 0.85, 0.95],
    ["1.8vw", "0vw", "0vw"]
  );

  const titleScale = useTransform(scrollYProgress, [0, 0.4], ["98%", "100%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], ["8vh", "0vh"]);

  const clipPathLeftRight = useTransform(scrollYProgress, [0, 0.4], [2, 0]);
  const round = useTransform(scrollYProgress, [0.4, 0.7], [2.5, 0]);
  const clipPath = useMotionTemplate`inset(0% ${clipPathLeftRight}% 0% ${clipPathLeftRight}% round ${round}rem)`;

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: 1, borderRadius, y: sectionY, clipPath }}
      className="relative flex flex-col bg-base-100 py-8 overflow-hidden min-h-[100vh] z-10 text-4xl  md:py-12 place-content-center"
    >
      <motion.div
        className="relative py-24 mx-auto"
        style={{ scale: titleScale, y: titleY }}
      >
        {/* <Title /> */}
      </motion.div>

      <motion.div className="flex flex-col w-full px-4 sm:gap-y-12 place-content-center roboto">
        <SkillsCard
          title={"Front-end frameworks"}
          text={"ReactJS"}
          icon={"react"}
        />
        <SkillsCard
          title={"React frameworks"}
          text={"NextJS"}
          icon={"next"}
          reverse={true}
        />
        <SkillsCard
          title={"CSS frameworks"}
          text={"TailwindCSS"}
          icon={"tailwind"}
        />
        <SkillsCard
          title={"Animations"}
          text={"Framer motion"}
          icon={"framer"}
          reverse={true}
        />
      </motion.div>
    </motion.section>
  );
};

export default Skills;
