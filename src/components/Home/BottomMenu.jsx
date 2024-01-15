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
        whileInView="show"
        className="flex flex-row px-4 transition-all duration-300 gap-x-5"
      >
        <motion.a
          variants={variants}
          whileHover={{ scale: 1.15, transition: { ease: "easeInOut" } }}
          href="https://github.com/RaulVarzar"
          target="_blank"
          className="flex items-center text-xl "
        >
          <button className="px-2.5 py-1  font-light tracking-wider rounded-md xl:px-4 xl:py-2 cursor-none bg-base-100 text-neutral-content hover:bg-base-100">
            Github <i className="fa-brands fa-github"></i>
          </button>
        </motion.a>
        <motion.a
          variants={variants}
          href="https://behance.net/varzarr"
          target="_blank"
          whileHover={{ scale: 1.15, transition: { ease: "easeInOut" } }}
          className="flex items-center p-0 h-fit"
        >
          <i className="text-4xl xl:text-5xl fa-brands fa-square-behance text-neutral-content hover:text-gray-300 "></i>
        </motion.a>
        <motion.a
          variants={variants}
          whileHover={{
            scale: 1.15,
            transition: { ease: "easeInOut" },
          }}
          href="https://instagram.com/raulvarzar"
          target="_blank"
          className="flex items-center h-fit"
        >
          <i className="text-4xl xl:text-5xl fa-brands fa-square-instagram text-neutral-content hover:text-gray-300 "></i>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
        className="py-0 my-1 text-sm text-base leading-none text-neutral-content divider lg:divider-horizontal"
      ></motion.div>

      <motion.button
        initial={{ scale: 0.8, opacity: 0, y: 10 }}
        whileInView={{
          scale: 1,
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 1 },
        }}
        whileHover={{
          scale: 1.07,
          transition: { duration: 0.2, delay: 0, ease: "easeInOut" },
        }}
        onClick={() => goToSection("contact")}
        className="px-3 py-1.5 ml-4 text-lg font-light tracking-wider rounded-md xl:px-5 xl:py-2 uppercasebg-transparent cursor-none border-3 text-base-content border-base-100 hover:bg-base-200 hover:border-base-200 "
      >
        Contact me
      </motion.button>
    </motion.div>
  );
};
