import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

import './burger.css';
import { useState } from 'react';

const variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3, staggerChildren: 0.4 },
  },
};
const SECTIONS = ['home', 'skills', 'projects', 'contact'];

const Sidebar = ({ goToSection, activeSection }) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (!open) setOpen(true);
    if (open) setOpen(false);
  }

  function handleGoToSection(section) {
    setOpen(false);
    goToSection(section);
  }

  return (
    <div
      className={
        'fixed z-50 mx-auto md:inset-x-0 w-fit md:left-0 md:top-0 ' +
        (open ? ' top-0 left-0' : ' top-3 left-3')
      }
    >
      <motion.ul
        variants={variants}
        layout
        animate="show"
        initial="hide"
        className={
          'flex flex-col h-fit md:hidden gap-5 px-4 py-3 gap-y-10 overflow-hidden text-lg font-semibold md:flex-row w-fit border-1 bg-base-300 md:rounded-xl place-content-center xl:text-xl ' +
          (open ? ' h-screen w-screen absolute rounded-none' : ' rounded-xl')
        }
      >
        {open && (
          <div className="flex flex-col gap-3 px-2 mx-auto md:flex-row gap-y-4">
            {SECTIONS.map((section, i) => (
              <MenuItem
                key={section}
                activeSection={section === activeSection}
                section={section}
                sectionIndex={i}
                goToSection={() => handleGoToSection(section)}
              />
            ))}
          </div>
        )}
        <motion.div
          layout="position"
          className="flex items-center justify-center py-1 px-0.5 md:hidden"
        >
          <label className="burger" htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              checked={open}
              onChange={() => setOpen(!open)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </motion.div>
      </motion.ul>
    </div>
  );
};

export default Sidebar;
