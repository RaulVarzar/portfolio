import { motion } from 'framer-motion';

const ProjectCard = ({ title, i, setHover, isHovering }) => {
  function changeHoverState(title) {
    setHover(title);
  }

  const isCurrentHovering = isHovering === title;

  const variants = {
    hidden: { y: 5, x: 15, opacity: 0.2, scale: 3 },
    visible: { y: 0, x: 0, opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      onMouseEnter={() => changeHoverState(title)}
      onMouseLeave={() => changeHoverState(false)}
      layout
      className={
        'relative group bg-[#0C1318] overflow-hidden h-full cursor-pointer transition-all duration-300 hover:rounded-lg hover:bg-base-200 shadow-lg hover:z-[1] hover:shadow-xl hover:scale-105 ' +
        (isHovering !== title &&
          isHovering !== false &&
          ' brightness-85 blur-xs opacity-40 ')
      }
    >
      <motion.div
        layout="position"
        className="relative flex flex-col justify-center h-full p-6 space-y-2 lg:p-8 lg:space-y-6"
      >
        <motion.div
          layout="position"
          className="flex flex-col justify-end gap-1 text-left transition-all duration-300 h-fit "
        >
          <motion.h3
            variants={variants}
            initial="visible"
            animate={isCurrentHovering ? 'hidden' : 'visible'}
            className="z-0 text-4xl group-hover:scale-150 w-fit "
          >
            {i + 1}
          </motion.h3>
          <motion.h5
            layout="position"
            className="z-10 font-medium uppercase transition-all duration-300 saturate-50 brightness-125 text-base-content w-fit group-hover:brightness-150 xl:text-xl group-hover:ml-2 group-hover:scale-110"
          >
            {title}
          </motion.h5>
          <p className="z-10 text-sm transition-all duration-300 opacity-70 xl:text-base text-neutral-content group-hover:opacity-90">
            Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
          </p>
        </motion.div>
        <a
          href="#"
          className={
            'flex items-center justify-between px-6 py-2 rounded-md text-base-content group-hover:opacity-100 group-hover:text-primary ' +
            (isCurrentHovering && ' bg-base-300')
          }
        >
          <span className="flex flex-row items-center gap-2 text-base">
            {!isCurrentHovering && (
              <i className="text-lg transition-all duration-300 fa-brands fa-github"></i>
            )}
            <p className="text-sm transition duration-300 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              REPOSITORY
            </p>
          </span>
          <span className="text-xl transition duration-300 -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
            <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
