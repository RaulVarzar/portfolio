"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import Button from "@/components/Projects/Button";
import { BiLogoInstagram } from "react-icons/bi";
import { BsBehance } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

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
    <div className="inset-0 flex flex-row gap-2 py-8 mx-auto tracking-tighter md:gap-3 2xl:gap-4 lg:py-10 w-fit h-fit">
      <SocialLink
        link={"https://github.com/RaulVarzar"}
        title={"github"}
        id={1}
        hovering={hovering}
        setHovering={setHovering}
        hidden={hidden}
      >
        <IoLogoGithub />
      </SocialLink>

      <SocialLink
        link={"https://behance.net/varzarr"}
        title={"behance"}
        id={2}
        hovering={hovering}
        setHovering={setHovering}
        hidden={hidden}
      >
        <BsBehance />
      </SocialLink>

      <SocialLink
        link={"https://instagram.com/raulvarzar"}
        title={"instagram"}
        id={3}
        hovering={hovering}
        setHovering={setHovering}
        hidden={hidden}
      >
        <BiLogoInstagram />
      </SocialLink>

      <SocialLink
        link={"mailto:raul_varzar@yahoo.com"}
        title={"email"}
        id={4}
        hovering={hovering}
        setHovering={setHovering}
        hidden={hidden}
      >
        <MdOutlineMailOutline />
      </SocialLink>
      {/* <Button label={"github"} className={"!py-0 2xl:py-0"}>
        <FaSquareGithub />
      </Button> */}
    </div>
  );
};

const SocialLink = ({ children, id, link, hovering, setHovering, hidden }) => {
  const bgVariants = {
    idle: {
      y: "101%",
      transition: { duration: 0.43, ease: [0.75, 0, 0.25, 1] },
    },
    hover: {
      y: "0%",
      transition: { duration: 0.55, ease: [0.75, 0, 0.25, 1] },
    },
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      onHoverStart={() => setHovering(id)}
      onHoverEnd={() => setHovering(null)}
      className={`relative px-3.5 py-1.5 transition-all duration-700 font-light overflow-hidden border-opacity-15 tracking-wide border rounded-sm cursor-pointer text-opacity-80 border-base-content text-neutral-content ${
        hovering === id
          ? " opacity-100 "
          : hovering === null
          ? " opacity-100 "
          : " brightness-75 "
      } `}
    >
      <motion.div
        className={`flex flex-row items-center gap-2  leading-none pb-0.5 justify-center transition-all duration-500 ease-[cubic-bezier(0.7,0,0.25,1)] ${
          hovering === id && "opacity-100 scale-105 "
        } `}
      >
        <span className="pt-0.5 text-md md:text-lg z-50">{children}</span>
      </motion.div>
      <motion.span
        variants={bgVariants}
        initial="idle"
        animate={hovering === id ? "hover" : "idle"}
        className="absolute inset-0 bg-accent -z-10"
      />
    </motion.a>
  );
};
