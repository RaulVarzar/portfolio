import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SkillsCard = ({ title, large, icon, subtitle }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'start center'],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    // restDelta: 0.001,
    mass: 0.2,
  });

  const cardY = useTransform(contentSpring, [0, 0.5], ['15vh', '0vh']);
  const cardScale = useTransform(contentSpring, [0, 0.8], ['95%', '100%']);
  const cardOpacity = useTransform(contentSpring, [0, 0.4], ['30%', '100%']);

  return (
    <motion.div
      ref={ref}
      style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
      className={
        'relative flex flex-col gap-2 px-10 pt-8 pb-6 overflow-hidden transition-colors duration-300 rounded-lg border-1 border-base-content border-opacity-40 hover:border-opacity-80 bg-base-300 text-base-content ' +
        (large ? ' row-span-2' : ' row-span-1')
      }
    >
      <motion.div className="flex items-start gap-3 ">
        <i
          className={
            'text-3xl opacity-30 xl:text-4xl text-neutral ' + ` ${icon}`
          }
        ></i>
        <div className="flex flex-col">
          <span className="text-sm font-semibold leading-none uppercase opacity-60 text-base-content lg:text-base">
            {title}
          </span>
          <h3 className="text-2xl font-bold leading-none tracking-wide uppercase text-accent lg:text-3xl">
            {subtitle}
          </h3>
          {large && (
            <p className="mt-3 text-sm leading-tight tracking-tight text-gray-500 lg:text-base opacity-80">
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
          <h3 className="text-center text-md">My React knowledge so far</h3>
          <ul className="flex flex-wrap items-center justify-center text-base gap-x-2 gap-y-1 xl:text-md">
            <li className="px-6 py-2.5 text-white rounded-lg bg-primary bg-opacity-70 w-fit">
              React Router
            </li>
            <li className="px-6 py-2.5 text-white rounded-lg bg-primary bg-opacity-70 w-fit">
              Redux Toolkit
            </li>
            <li className="px-6 py-2.5 text-white rounded-lg bg-primary bg-opacity-70 w-fit">
              TanStack Query
            </li>
            <li className="px-6 py-2.5 text-white rounded-lg bg-primary bg-opacity-70 w-fit">
              Next.JS
            </li>
          </ul>
        </>
      )}
    </motion.div>
  );
};

export default SkillsCard;
