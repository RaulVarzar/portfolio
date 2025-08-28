import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

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

  return (
    <div className="inset-0 flex flex-row py-5 mx-auto tracking-tighter sm:py-4 w-fit h-fit">
      <SocialLink
        link={"https://github.com/RaulVarzar"}
        title={"github"}
        id={1}
        hovering={hovering}
        setHovering={setHovering}
        hidden={hidden}
      >
        <FaSquareGithub />
      </SocialLink>

      <SocialLink
        link={"https://behance.net/varzarr"}
        title={"behance"}
        id={2}
        hovering={hovering}
        setHovering={setHovering}
        hidden={hidden}
      >
        <FaBehanceSquare />
      </SocialLink>

      <SocialLink
        link={"https://instagram.com/raulvarzar"}
        title={"instagram"}
        id={3}
        hovering={hovering}
        setHovering={setHovering}
        hidden={hidden}
      >
        <FaSquareInstagram />
      </SocialLink>
    </div>
  );
};

const SocialLink = ({
  title,
  children,
  id,
  link,
  hovering,
  setHovering,
  hidden,
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      variants={variants}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      onHoverStart={() => setHovering(id)}
      onHoverEnd={() => setHovering(null)}
      className="relative px-4 pt-1 font-light tracking-wide cursor-pointer sm:px-6 lg:px-8 text-neutral-content"
    >
      <motion.div
        className={`flex flex-row items-center gap-2 transition-all duration-300 ${
          hovering === id &&
          "opacity-100 scale-105 brightness-125 -translate-y-0.5"
        } ${hovering && hovering != id && "brightness-75 "}`}
      >
        <span className="pt-0.5 text-3xl  sm:text-xl md:text-xl lg:text-2xl">
          {children}
        </span>
        <h1 className="py-2 max-sm:hidden text-neutral-content text-md sm:text-lg lg:text-xl md:py-3 xl:py-4">
          {title}
        </h1>
      </motion.div>
      {hovering === id && (
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
          className="absolute bottom-1 inset-x-0 size-1.5 md:size-2 mx-auto brightness-200 bg-accent  rounded-full "
        ></motion.span>
      )}
    </motion.a>
  );
};
