import { motion, useScroll, useViewportScroll } from 'framer-motion';
import { MenuItem } from './MenuItem';
import './burger.css';
import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'skills', 'projects', 'contact'];

const Sidebar = ({ goToSection, activeSection }) => {
  function handleGoToSection(section) {
    goToSection(section);
  }

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: -100, scale: 0.95 },
  };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{
        ease: [0, 0.2, 0.8, 1],
        duration: 0.6,
        type: 'spring',
        delay: 0.3,
      }}
      className="fixed z-50 mx-auto md:inset-x-0 w-fit top-8"
    >
      <motion.ul
        // variants={variants}
        // layout
        initial={{ y: -200 }}
        animate={{ y: 0, transition: { duration: 1, delay: 0.7 } }}
        className={
          'flex gap-5 px-8 py-3 text-lg font-semibold shadow-sm h-fit  gap-y-10 w-fit md:rounded-xl place-content-center xl:text-xl ' +
          (activeSection === 'home'
            ? ' bg-base-content'
            : ' bg-base-300 border-1 border-base-content border-opacity-10')
        }
      >
        {SECTIONS.map((section, i) => (
          <MenuItem
            key={section}
            activeSection={section === activeSection}
            dark={activeSection === 'home'}
            section={section}
            sectionIndex={i}
            goToSection={() => handleGoToSection(section)}
          />
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Sidebar;
