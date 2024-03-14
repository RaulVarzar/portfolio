import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SkillsCard = ({ title, large, icon, subtitle }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end 0.85'],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    // restDelta: 0.001,
    mass: 0.2,
  });

  const cardY = useTransform(contentSpring, [0, 1], ['15vh', '0vh']);

  const cardScale = useTransform(contentSpring, [0, 0.8], ['85%', '100%']);
  const opacity = useTransform(contentSpring, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      ref={ref}
      style={{ y: cardY, opacity }}
      className="relative flex flex-col justify-center h-full max-w-5xl gap-2 p-2 sm:px-10 text-base-content"
    >
      <motion.div className="flex items-start gap-3 md:gap-6">
        <i
          className={
            'text-3xl opacity-30 xl:text-4xl text-neutral ' + ` ${icon}`
          }
        ></i>
        <div className="flex flex-col md:gap-1">
          <span className="text-sm font-semibold leading-none uppercase opacity-60 text-base-content lg:text-base">
            {title}
          </span>
          <h3 className="text-2xl font-bold leading-none tracking-wide uppercase text-accent md:text-3xl xl:text-4xl">
            {subtitle}
          </h3>
          {large && (
            <p className="mt-3 text-sm leading-tight tracking-tight text-base-content lg:text-base opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut unde
              quas debitis explicabo aperiam! Delectus dolores aperiam,
              blanditiis exercitationem consequatur.
            </p>
          )}
        </div>
      </motion.div>

      {large && (
        <>
          <div className="divider h-fit"></div>
          <h3 className="text-center text-md">My React knowledge</h3>
          <ul className="flex flex-wrap items-center justify-center text-xs sm:text-sm md:text-base gap-x-2 gap-y-1 xl:text-md">
            <li className="px-4 py-1.5 sm:px-6 sm:py-2.5 text-white rounded-4xl border-1 border-opacity-20 border-base-content w-fit bg-base-content bg-opacity-5">
              React Router
            </li>
            <li className="px-4 py-1.5 sm:px-6 sm:py-2.5 text-white rounded-4xl border-1 border-opacity-20 border-base-content w-fit bg-base-content bg-opacity-5">
              Redux Toolkit
            </li>
            <li className="px-4 py-1.5 sm:px-6 sm:py-2.5 text-white rounded-4xl border-1 border-opacity-20 border-base-content w-fit bg-base-content bg-opacity-5">
              TanStack Query
            </li>
            <li className="px-4 py-1.5 sm:px-6 sm:py-2.5 text-white rounded-4xl border-1 border-opacity-20 border-base-content w-fit bg-base-content bg-opacity-5">
              Next.JS
            </li>
          </ul>
        </>
      )}
    </motion.div>
  );
};

export default SkillsCard;
