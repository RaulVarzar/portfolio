import { motion } from "framer-motion";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

const Socials = ({ isInView }) => {
  const variants = {
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const childrenVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      filter: "blur(7px)",
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const SOCIALS = [
    { title: "github", link: "www.github.com" },
    { title: "behance", link: "www.behance.net" },
    { title: "instagram", link: "www.instagram.com" },
  ];

  return (
    <motion.ul
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-row justify-start gap-3 mx-auto text-base font-light w-fit md:w-full md:gap-4 max-md:text-center md:flex-row md:text-lg lg:text-xl text-neutral-content"
    >
      {SOCIALS.map((item) => (
        <motion.li
          key={item.link}
          variants={childrenVariants}
          className="flex flex-row items-center gap-3 px-4 py-3 border rounded-lg md:px-5 sm:px-4 md:py-2 group border-base-content bg-opacity-5 border-opacity-20 hover:bg-opacity-25 text-neutral-content bg-secondary"
        >
          <FaSquareGithub />
          <motion.a
            href={item.link}
            className="transition-all duration-500 max-sm:hidden"
          >
            {item.title}
          </motion.a>
        </motion.li>
      ))}
      {/* <FaSquareGithub />
      <FaBehanceSquare />
      <FaSquareInstagram /> */}
    </motion.ul>
  );
};

export default Socials;
