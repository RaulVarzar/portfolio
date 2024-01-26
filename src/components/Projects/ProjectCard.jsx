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
        'relative flex group bg-[hsl(205,32%,7%)] h-full w-full  transition-all duration-300 hover:rounded-xl hover:bg-base-200 shadow-lg hover:z-[1] hover:shadow-xl hover:scale-105 ' +
        (isHovering !== title &&
          isHovering !== false &&
          ' brightness-85 blur-xxs opacity-50 ')
      }
    >
      <motion.div
        layout="position"
        className="relative flex flex-col justify-between w-full h-full p-3 space-y-2 md:p-4 2xl:p-6 lg:space-y-6"
      >
        <motion.div
          layout="position"
          className="flex flex-col justify-end gap-4 text-left transition-all duration-300 h-fit "
        >
          <img
            src={
              `./projects/photos/${photo}` +
              (isCurrentHovering ? '.gif' : '.jpg')
            }
            alt={photo}
            className={
              'object-cover w-auto h-32 md:h-48 rounded-lg transition duration-300 border-neutral ' +
              (isCurrentHovering && ' shadow-2xl border-3  ')
            }
          />
          <div className="flex flex-col">
            <motion.h3
              layout="position"
              className="z-10 flex justify-start w-full overflow-hidden text-base font-semibold leading-7 text-left uppercase transition-all duration-300 group-hover:text-2xl saturate-50 brightness-125 text-base-content xl:text-xl "
            >
              {title}
            </motion.h3>
            <p className="z-10 text-sm leading-tight tracking-tight transition-all duration-300 opacity-50 xl:text-base text-neutral-content group-hover:opacity-90">
              {description}
            </p>
          </div>
        </motion.div>
        <div className="flex flex-row items-center gap-4 justify-evenly">
          <a
            href={github}
            target="_blank"
            className={
              'flex items-center justify-between px-6 py-2 xl:py-3 rounded-md text-base-content opacity-80 group-hover:opacity-100 hover:text-primary transition-all duration-100  ' +
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
            <button className="px-2 md:px-4 xl:px-6 opacity-70 hover:opacity-100 transition duration-300 pt-1 pb-1.5  my-button text-base-content">
              <div className="flex items-center gap-2 font-semibold text">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>

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
