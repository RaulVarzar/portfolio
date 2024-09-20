import { useEffect, useRef, forwardRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SkillsCard from "./SkillsCard";
import { Title } from "./Title";

const Skills = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const sectionScale = useTransform(scrollYProgress, [0, 0.4], ["92%", "100%"]);
  const sectionY = useTransform(scrollYProgress, [0, 0.3], ["-4%", "0%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], ["5vw", "0vw"]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: sectionScale, borderRadius, y: sectionY }}
      className="relative flex flex-col py-8 overflow-hidden min-h-[100vh] text-4xl md:py-12 bg-gradient-to-b from-base-300 to-base-100 place-content-center"
    >
      <Title />

      <motion.div className="flex flex-col px-4 sm:gap-y-12 place-content-center w-full  roboto">
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
        {/* <div className="flex flex-col justify-between md:flex-row">
          <SkillsCard
            title={"CSS frameworks"}
            subtitle={"TailwindCSS"}
            icon={"fa-brands fa-css3-alt"}
          />
          <SkillsCard
            title={"Animations"}
            subtitle={"Framer Motion"}
            icon={"fa-solid fa-wand-magic-sparkles"}
          />
        </div> */}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
