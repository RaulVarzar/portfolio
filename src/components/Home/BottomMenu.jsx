import { motion } from "framer-motion";

const variants = {
  hide: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.3, when: "beforeChildren" },
  },
};

export const BottomMenu = ({ goToSection }) => {
  return (
    <motion.div
      layout="position"
      className="flex flex-col items-center justify-start py-1 mx-auto md:py-6 xl:py-12 w-fit h-fit lg:flex-row "
    >
      <motion.div
        variants={variants}
        initial="hide"
        animate="show"
        className="flex flex-row transition-all duration-300 gap-x-5"
      >
        <motion.a
          variants={variants}
          href="https://github.com/RaulVarzar"
          target="_blank"
          whileHover={{ scale: 1.05, transition: { ease: "easeInOut" } }}
          className="flex items-center p-0 h-fit"
        >
          <i className="text-4xl transition duration-300 sm:text-5xl fa-brands fa-square-github hover:text-base-content text-neutral brightness-125"></i>
        </motion.a>
        <motion.a
          variants={variants}
          href="https://behance.net/varzarr"
          target="_blank"
          whileHover={{ scale: 1.05, transition: { ease: "easeInOut" } }}
          className="flex items-center p-0 h-fit"
        >
          <i className="text-4xl transition duration-300 sm:text-5xl fa-brands fa-square-behance hover:text-base-content text-neutral brightness-125"></i>
        </motion.a>
        <motion.a
          variants={variants}
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeInOut" },
          }}
          href="https://instagram.com/raulvarzar"
          target="_blank"
          className="flex items-center h-fit"
        >
          <i className="text-4xl transition duration-300 sm:text-5xl fa-brands fa-square-instagram hover:text-base-content text-neutral brightness-125"></i>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1, transition: { duration: 0.5, delay: 1.8 } }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
        className="py-0 my-1 leading-none lg:px-4 text-neutral-content divider lg:divider-horizontal"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.7, delay: 2.4 },
        }}
        className="flex"
      >
        <motion.button
          whileHover={{
            scale: 1.07,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          onClick={() => goToSection("contact")}
          className="px-3 py-1 text-base font-light tracking-wider rounded-md sm:text-md xl:text-lg xl:px-5 xl:py-1.5 uppercasebg-transparent  border-3 text-base-content border-base-100 hover:bg-base-200 hover:border-base-200 "
        >
          Contact me
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
