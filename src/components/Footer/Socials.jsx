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
      className="flex flex-row justify-between font-normal w-full  max-md:text-center sm:gap-4 md:flex-row gap-y-3 text-base sm:text-lg lg:text-xl xl:text-2xl"
    >
      {SOCIALS.map((item) => (
        <motion.li
          key={item.link}
          variants={childrenVariants}
          className="group"
        >
          <motion.a
            href={item.link}
            className="md:px-8 px-2 border sm:px-4 py-2 md:py-3 transition-all duration-500 bg-opacity-5 rounded-xl border-base-content border-opacity-20 hover:bg-opacity-25 text-neutral-content bg-secondary "
          >
            {item.title}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Socials;
