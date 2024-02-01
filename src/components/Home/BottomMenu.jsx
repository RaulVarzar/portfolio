import { motion } from 'framer-motion';

const variants = {
  hide: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.3, when: 'beforeChildren' },
  },
};

export const BottomMenu = ({ goToSection }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        layout="position"
        className="flex flex-col items-center justify-start gap-8 py-1 mx-auto md:py-2 xl:py-4 w-fit h-fit lg:flex-row "
      >
        <motion.div
          variants={variants}
          initial="hide"
          animate="show"
          className="flex flex-row transition-all duration-300 gap-x-6"
        >
          <motion.a
            variants={variants}
            href="https://github.com/RaulVarzar"
            target="_blank"
            whileHover={{
              scale: 1.1,
              y: -3,
              transition: { ease: 'easeIn', duration: 0.2 },
            }}
            className="flex items-center p-0 h-fit"
          >
            <i className="text-4xl transition duration-300 fa-brands fa-square-github text-neutral-content hover:brightness-125"></i>
          </motion.a>
          <motion.a
            variants={variants}
            href="https://behance.net/varzarr"
            target="_blank"
            whileHover={{
              scale: 1.1,
              y: -3,
              transition: { ease: 'easeIn', duration: 0.2 },
            }}
            className="flex items-center p-0 h-fit"
          >
            <i className="text-4xl transition duration-300 s fa-brands fa-square-behance text-neutral-content hover:brightness-125"></i>
          </motion.a>
          <motion.a
            variants={variants}
            whileHover={{
              scale: 1.1,
              y: -3,
              transition: { ease: 'easeIn', duration: 0.2 },
            }}
            href="https://instagram.com/raulvarzar"
            target="_blank"
            className="flex items-center h-fit"
          >
            <i className="text-4xl transition duration-300 fa-brands fa-square-instagram text-neutral-content hover:brightness-125"></i>
          </motion.a>
        </motion.div>

        {/* <motion.div
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
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            onClick={() => goToSection('contact')}
            className="px-3 py-1 text-base font-light tracking-wider rounded-md sm:text-md xl:text-lg xl:px-5 xl:py-1.5 uppercasebg-transparent  border-3 text-base-content border-base-100 hover:bg-base-200 hover:border-base-200 "
          >
            Contact me
          </motion.button>
        </motion.div> */}
      </motion.div>
    </div>
  );
};
