import { motion } from "framer-motion";

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
      className="flex flex-row justify-between font-medium w-fit max-md:text-center sm:gap-4 md:flex-row gap-y-3 max-sm:pt-8 text-md sm:text-xl lg:text-2xl xl:text-3xl"
    >
      {SOCIALS.map((item) => (
        <motion.li
          key={item.link}
          variants={childrenVariants}
          className="group"
        >
          <motion.a
            href={item.link}
            className="px-8 py-4 transition-all duration-500 bg-opacity-0 rounded-sm hover:bg-opacity-15 text-neutral-content bg-secondary "
          >
            {item.title}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Socials;
