import { motion } from 'framer-motion';
import './button.css';

const ProjectCard = ({ project, i, setHover, isHovering }) => {
  const { title, description, github, demo, photo } = project;
  function changeHoverState(title) {
    setHover(title);
  }
  const isCurrentHovering = isHovering === title;

  return (
    <div
      onMouseEnter={() => changeHoverState(title)}
      onMouseLeave={() => changeHoverState(false)}
      className={
        'relative group bg-[hsl(205,30%,7%)] overflow-hidden h-full cursor-none transition-all duration-300 hover:rounded-lg hover:bg-base-200 shadow-lg hover:z-[1] hover:shadow-xl hover:scale-105 ' +
        (isHovering !== title &&
          isHovering !== false &&
          ' brightness-85 blur-xxs opacity-50 ')
      }
    >
      <motion.div
        layout="position"
        className="relative flex flex-col justify-between h-full p-2 space-y-2 md:p-4 2xl:p-8 lg:space-y-6"
      >
        <motion.div
          layout="position"
          className="flex flex-col justify-end gap-4 text-left transition-all duration-300 h-fit "
        >
          <img
            src={`./projects/${photo}`}
            alt={photo}
            className={
              'object-cover w-auto h-48 rounded-lg transition duration-300 ' +
              (isCurrentHovering && ' scale-105 shadow-2xl')
            }
          />
          <div className="flex flex-col">
            <motion.h5
              layout="position"
              className="z-10 text-base font-semibold uppercase transition-all duration-300 saturate-50 brightness-125 text-base-content w-fit group-hover:brightness-150 xl:text-xl group-hover:scale-110"
            >
              {title}
            </motion.h5>
            <p className="z-10 text-sm leading-tight tracking-tight transition-all duration-300 opacity-70 xl:text-base text-neutral-content group-hover:opacity-90">
              {description}
            </p>
          </div>
        </motion.div>
        <div className="flex flex-row gap-4 justify-evenly">
          <a
            href={github}
            target="_blank"
            className={
              'flex items-center cursor-none justify-between px-6 py-2 rounded-md text-base-content opacity-80 group-hover:opacity-100 hover:text-primary transition-all duration-100  ' +
              (isCurrentHovering &&
                ' bg-base-300 hover:shadow-md hover:bg-neutral ')
            }
          >
            <span className="flex flex-row items-center gap-2 text-base">
              <i className="text-lg transition-all duration-300 fa-brands fa-github"></i>
              <p className="text-sm ">Github</p>
            </span>
          </a>
          {/* <a
            href="https://hangman-ten-tau.vercel.app/"
            target="_blank"
            className={
              'rounded-none border-t-0 border-x-0 border-b-4 border-transparent hover:border-neutral text-sm py-0 btn btn-ghost hover:bg-transparent flex flex-row gap-1 w-fit ' +
              (isCurrentHovering ? ' opacity-100' : ' opacity-50')
            }
          >
            <p className=" text-nowrap">Live demo</p>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a> */}

          <a href={demo} target="_blank">
            <button className="my-button text-base-content ">
              <div className="font-semibold text">
                <span>Demo</span>
              </div>
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
