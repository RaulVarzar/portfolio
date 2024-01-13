import { motion } from 'framer-motion';

const variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3, staggerChildren: 0.4 },
  },
};

const itemVariants = {
  hide: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const SECTIONS = ['home', 'skills', 'projects', 'photography', 'contact'];

const Sidebar = ({ goToSection, activeSection }) => {
  return (
    <nav className="sticky top-0 left-0 grid self-start h-screen min-w-fit place-content-center ">
      <motion.ul
        variants={variants}
        animate="show"
        initial="hide"
        className="flex flex-col w-full gap-6 px-16 text-lg font-semibold xl:pl-24 xl:text-xl "
      >
        {SECTIONS.map((section, i) => (
          <motion.li
            variants={itemVariants}
            key={section}
            className={
              'relative flex cursor-pointer group w-fit flex-row py-2 px-6 ' +
              (activeSection === section
                ? ' text-primary hover:text-primary '
                : ' text-slate-300 hover:text-slate-100')
            }
            onClick={() => goToSection(section)}
          >
            <span
              className={
                'transition-all duration-300 group-hover:scale-110 roboto  font-normal tracking-[0px] ' +
                (activeSection === section
                  ? ' scale-110 '
                  : ' opacity-50 group-hover:opacity-100')
              }
            >
              {section}
            </span>
            {activeSection === section && (
              <motion.div
                className="absolute top-0 flex w-full h-full text-sm font-thin align-text-top rounded-sm -left-1 -z-10 roboto"
                layoutId="background"
                transition={{
                  layout: {
                    duration: 0.25,
                    ease: 'easeIn',
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  },
                }}
              >
                {/* <i className="text-sm fa-solid fa-circle-dot h-fit"></i> */}
                {/* <i className="text-md fa-solid fa-bolt"></i> */}0{i + 1}
              </motion.div>
            )}
            {activeSection !== section && (
              <motion.div
                className="absolute top-0 flex w-full h-full text-sm font-thin rounded-sm opacity-30 -left-0.5 -z-10 roboto"
                layout
                transition={{
                  layout: {
                    duration: 0.25,
                    ease: 'easeIn',
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  },
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </motion.div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Sidebar;
