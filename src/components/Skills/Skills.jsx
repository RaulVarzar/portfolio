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

  const sectionScale = useTransform(scrollYProgress, [0, 0.3], ["98%", "100%"]);
  const sectionY = useTransform(scrollYProgress, [0, 0.3], ["8%", "0%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.1, 0.85, 0.95],
    ["1.8vw", "0vw", "0vw"]
  );

  const bgRadius = useTransform(
    scrollYProgress,
    [0.1, 0.85, 0.95],
    ["1.5vw", "0vw", "0vw"]
  );
  const bgY = useTransform(
    scrollYProgress,
    [0, 0.94, 0.98],
    ["-1.4%", "-1.4%", "0%"]
  );

  const titleScale = useTransform(
    scrollYProgress,
    [0.2, 0.45],
    ["90%", "100%"]
  );
  const titleY = useTransform(scrollYProgress, [0, 0.3], ["10vh", "0vh"]);

  return (
    <motion.div>
      <motion.div
        style={{ scale: 1, borderRadius: bgRadius, y: bgY }}
        className="absolute w-full  h-screen bg-secondary top-[100vh] left-0 -z-0"
      ></motion.div>

      <motion.section
        ref={sectionRef}
        style={{ scale: 1, borderRadius, y: sectionY }}
        className="relative flex flex-col py-8 overflow-hidden min-h-[100vh] text-4xl md:py-12 bg-gradient-to-b from-base-200 to-base-100 place-content-center"
      >
        <motion.div
          className="relative mx-auto"
          style={{ scale: titleScale, y: titleY }}
        >
          <Title />
        </motion.div>

        <motion.div className="flex  flex-col px-4 sm:gap-y-12 place-content-center w-full  roboto">
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
    </motion.div>
  );
};

export default Skills;
