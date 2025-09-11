import { motion } from "framer-motion";
import { CgFramer } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

export const IconText = ({ text, icon }) => {
  // const ref = useRef(null);

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
      <motion.span className="px-4 text-4xl opacity-30 md:text-5xl xl:text-6xl text-primary sm:px-8 md:px-10 lg:px-12 brightness-150 ">
        {icon === "react" && <FaReact />}
        {icon === "next" && <RiNextjsFill />}
        {icon === "tailwind" && <RiTailwindCssFill />}
        {icon === "framer" && <CgFramer />}
      </motion.span>
      <div className="flex flex-col">
        <h3 className="px-6 text-4xl font-medium leading-none tracking-wide uppercase whitespace-nowrap sm:px-16 roboto md:px-20 xl:px-32 text-base-content md:text-3xl xl:text-6xl">
          {text}
        </h3>
      </div>
    </>
  );
};
