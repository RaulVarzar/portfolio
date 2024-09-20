import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  hidden: { opacity: 0, y: "-150%", scale: 0.85, transition: { delay: 0 } },
  visible: {
    opacity: [0, 0.2, 0.25, 1],
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
      mass: 0.9,
      delay: 0.1,
    },
  },
};

const variants2 = {
  hidden: { opacity: 0, y: "-150%", scale: 0.85, transition: { delay: 0.05 } },
  visible: {
    opacity: [0, 0.2, 0.25, 1],
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
      mass: 0.9,
      delay: 0.2,
    },
  },
};

const variants3 = {
  hidden: { opacity: 0, y: "-150%", scale: 0.85, transition: { delay: 0.1 } },
  visible: {
    opacity: [0, 0.2, 0.25, 1],
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
      mass: 0.9,
      delay: 0.3,
    },
  },
};

export const Socials = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(null);

  function update() {
    if (scrollY?.current < 250) {
      setHidden(false);
    } else if (scrollY?.current >= 200) {
      setHidden(true);
    }
  }
  useEffect(() => {
    return scrollY.on("change", () => update());
  });
  console.log(hovering);
  return (
    <div className="flex fixed inset-0 flex-row w-fit h-fit mx-auto font-thin text-base-content tracking-tighter text-lg py-3 md:py-5 xl:py-6">
      <motion.a
        href="https://github.com/RaulVarzar"
        target="_blank"
        variants={variants}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        onHoverStart={() => setHovering(1)}
        onHoverEnd={() => setHovering(null)}
        className="relative px-4 sm:px-8 py-2 cursor-pointer"
      >
        <h1
          className={` transition-all duration-300 ${
            hovering === 1
              ? "opacity-100 scale-110 brightness-125"
              : "opacity-75"
          } ${hovering && hovering != 1 && "brightness-50 "}`}
        >
          github
        </h1>
        {hovering === 1 && (
          <motion.span
            layoutId="socials"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 5,
              mass: 0.2,
            }}
            initial={{ y: "-200%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            className="absolute -bottom-2 inset-x-0 w-1.5 h-1.5 mx-auto bg-opacity-90 bg-primary  rounded-full "
          ></motion.span>
        )}
      </motion.a>

      <motion.a
        href="https://behance.net/varzarr"
        target="_blank"
        variants={variants2}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        onHoverStart={() => setHovering(2)}
        onHoverEnd={() => setHovering(null)}
        className="relative px-4 sm:px-8 py-2 cursor-pointer"
      >
        <h1
          className={` transition-all duration-300 ${
            hovering === 2
              ? "opacity-100 scale-110 brightness-125"
              : "opacity-75"
          } ${hovering && hovering != 2 && "brightness-50 "}`}
        >
          behance
        </h1>
        {hovering === 2 && (
          <motion.span
            layoutId="socials"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 5,
              mass: 0.2,
            }}
            initial={{ y: "-200%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            className="absolute -bottom-2 inset-x-0 mx-auto bg-opacity-90 bg-primary w-1.5 h-1.5 rounded-full "
          ></motion.span>
        )}
      </motion.a>
      <motion.a
        href="https://instagram.com/raulvarzar"
        target="_blank"
        variants={variants3}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        onHoverStart={() => setHovering(3)}
        onHoverEnd={() => setHovering(null)}
        className="relative px-4 sm:px-8 py-2 cursor-pointer"
      >
        <h1
          className={` transition-all duration-300 ${
            hovering === 3
              ? "opacity-100 scale-110 brightness-125"
              : "opacity-75"
          } ${hovering && hovering != 3 && "brightness-50 "}`}
        >
          instagram
        </h1>
        {hovering === 3 && (
          <motion.span
            layoutId="socials"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 5,
              mass: 0.2,
            }}
            initial={{ y: "-200%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            className="absolute -bottom-2 inset-x-0 mx-auto bg-opacity-90 bg-primary w-1.5 h-1.5 rounded-full "
          ></motion.span>
        )}
      </motion.a>
    </div>
  );
};
