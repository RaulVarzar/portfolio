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
      // variants={itemVariants}
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.3 + sectionIndex * 0.35,
        damping: 10,
        duration: 0.6,
      }}
      layout
      key={section}
      className="relative flex flex-row items-center justify-center w-full px-6 py-2 cursor-pointer group "
      onClick={() => goToSection(section)}
    >
      {activeSection && (
        <motion.div
          className="absolute z-50 flex w-full h-full text-sm font-thin align-baseline top-0.5 text-accent left-2.5 tracking-none roboto"
          layoutId="background"
          transition={{
            layout: {
              duration: 0.3,
              delay: 0,
              ease: 'easeIn',
              type: 'spring',
              stiffness: 400,
              damping: 25,
            },
          }}
        >
          {sectionIndex}
        </motion.div>
      )}
      <motion.span
        layout="position"
        className={
          'transition-colors duration-300 group-hover:scale-110 roboto text-md font-normal tracking-[0px] ' +
          (activeSection
            ? ' scale-110 text-accent'
            : ' opacity-60 group-hover:opacity-100 text-base-content')
        }
      >
        {section}
      </motion.span>
    </motion.li>
  );
};
