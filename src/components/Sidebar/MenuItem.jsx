import { AnimatePresence, motion } from 'framer-motion';

const itemVariants = {
  hide: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const MenuItem = ({
  section,
  activeSection,
  sectionIndex,
  goToSection,
}) => {
  return (
    <motion.li
      variants={itemVariants}
      key={section}
      className={
        'relative flex  group w-full flex-row py-2 px-6 cursor-pointer  ' +
        (activeSection
          ? ' text-primary hover:text-primary '
          : ' text-slate-300 hover:text-slate-100')
      }
      onClick={() => goToSection(section)}
    >
      <span
        className={
          'transition-all duration-300 group-hover:scale-110 roboto xl:max-2xl:text-base text-neutral-content font-normal tracking-[0px] ' +
          (activeSection
            ? ' scale-110 text-primary'
            : ' opacity-80 group-hover:opacity-100')
        }
      >
        {section}
      </span>
      {activeSection && (
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
          0{sectionIndex + 1}
        </motion.div>
      )}
      <AnimatePresence mode="wait">
        {!activeSection && (
          <motion.div
            className="absolute top-0 flex w-fit h-fit text-sm font-thin rounded-sm opacity-30 -left-0.5 -z-10 roboto"
            layout
            key={section}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1.2 }}
            exit={{ x: -0, scaleX: 0 }}
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
      </AnimatePresence>
    </motion.li>
  );
};
