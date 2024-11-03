import {
  useSpring,
  useTransform,
  useVelocity,
  motion,
  useScroll,
} from "framer-motion";
import { useRef } from "react";
import { CgFramer } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

export const IconText = ({ text, icon }) => {
  const ref = useRef(null);

  // const { scrollY } = useScroll();
  // const scrollVelocity = useVelocity(scrollY);
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 100,
  //   stiffness: 300,
  //   mass: 0.1,
  // });

  // const scale = useTransform(smoothVelocity, [-700, 0, 700], [1.4, 1, 1.4], {
  //   clamp: true,
  // });

  // const opacity = useTransform(smoothVelocity, [-500, 0, 500], [1, 0.6, 1], {
  //   clamp: true,
  // });

  return (
    <>
      <motion.span
        ref={ref}
        // style={{ scale }}
        className="text-4xl opacity-30 md:text-5xl xl:text-6xl text-primary px-4 sm:px-8 md:px-10 lg:px-12 brightness-150 "
      >
        {icon === "react" && <FaReact />}
        {icon === "next" && <RiNextjsFill />}
        {icon === "tailwind" && <RiTailwindCssFill />}
        {icon === "framer" && <CgFramer />}
      </motion.span>
      <motion.div style={{}} className="flex flex-col">
        <h3 className="text-2xl font-light whitespace-nowrap leading-none tracking-tight px-8 sm:px-16  md:px-20 xl:px-32 uppercase text-base-content md:text-3xl xl:text-7xl">
          {text}
        </h3>
      </motion.div>
    </>
  );
};
