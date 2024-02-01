import { useEffect, useRef, forwardRef } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import SkillsCard from './SkillsCard';
import TextCarousel from './TextCarousel';

const Skills = forwardRef(({ makeActive }, ref) => {
  const activeRef = useRef(null);
  const contentRef = useRef(null);

  const isInView = useInView(contentRef);
  useEffect(() => {
    if (isInView) {
      makeActive('skills');
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const { scrollYProgress: contentProgress } = useScroll({
    target: contentRef,
    offset: ['start end', 'start start'],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    // restDelta: 0.001,
    mass: 0.2,
  });

  const contentSpring = useSpring(contentProgress, {
    stiffness: 80,
    damping: 20,
    // restDelta: 0.001,
    mass: 0.2,
  });

  const circleScale = useTransform(spring, [0.1, 0.95], ['40%', '100%']);
  const circleY = useTransform(spring, [0, 0.6], ['20vh', '0vh']);
  const circleRotate = useTransform(spring, [0.2, 0.8], ['45deg', '0deg']);

  const textX = useTransform(contentSpring, [0, 1], ['-20vw', '5vw']);

  return (
    <section
      ref={ref}
      className="grid relative min-h-[100vh]  overflow-hidden text-4xl section place-content-center pt-[25vh] text-info snap-center pb-[15vh]"
    >
      <motion.div
        style={{ scale: circleScale, y: circleY, rotate: circleRotate }}
        className="absolute inset-x-0 grid overflow-hidden place-content-start pt-[15vh] bottom-[25vh] h-[80vh] max-w[100vw]  mx-auto rounded-full aspect-square bg-accent"
      >
        <TextCarousel textX={textX} />
      </motion.div>

      <motion.div
        ref={contentRef}
        className="flex flex-col gap-4  place-content-center max-w-7xl roboto mt-[50vh]"
      >
        {/* <motion.div
          style={{ y: cardY, scale: cardScale }}
          className="relative flex flex-col col-span-2 gap-2 px-10 pt-8 pb-3 overflow-hidden transition-colors duration-300 rounded-lg border-1 border-base-content bg-neutral-content text-base-content "
        >
          <motion.div className="flex items-end content-end gap-3 ">
            <i className="text-3xl fa-solid fa-laptop-code opacity-30"></i>
            <h3 className="text-xl font-semibold leading-none uppercase text-base-content lg:text-2xl">
              Front-end development
            </h3>
          </motion.div>
          <motion.div ref={activeRef} className="w-11/12 mx-auto">
            <p className="text-sm leading-tight tracking-tight text-gray-500 lg:text-base opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut unde
              quas debitis explicabo aperiam! Delectus dolores aperiam,
              blanditiis exercitationem consequatur.
            </p>
          </motion.div>

           <motion.div
            initial={{ scaleY: 0.5, y: -50, opacity: 0 }}
            animate={{ scaleY: 1, y: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 0.2, delay: 0.1 }}
            exit={{
              opacity: 0,
              scaleY: 0,
              transition: { duration: 0.1 },
            }}
            className="flex flex-row justify-center px-3 py-2 "
          >
            <DevelopmentSkills />
          </motion.div> 
        </motion.div>  */}

        <SkillsCard
          title={'Front-end frameworks'}
          subtitle={'ReactJS'}
          large={true}
          icon={'fa-brands fa-react '}
        />
        <SkillsCard
          title={'CSS frameworks'}
          subtitle={'TailwindCSS'}
          icon={'fa-brands fa-css3-alt'}
        />
        <SkillsCard
          title={'Animations'}
          subtitle={'Framer Motion'}
          icon={'fa-solid fa-wand-magic-sparkles'}
        />
      </motion.div>
    </section>
  );
});

// const Skills = ({ makeActive }) => {
//   const [expanded, setExpanded] = useState(true);
//   const ref = useRef();

//   const isInView = useInView(ref);

//   useEffect(() => {
//     if (isInView) {
//       makeActive("skills");
//     }
//   }, [isInView]);

//   return (
//     <motion.div
//       layout
//       className="grid grid-cols-2 gap-0.5 p-0.5 place-content-center bg-neutral bg-opacity-60 max-w-7xl roboto bg-opacity-60"
//     >
//       <motion.div
//         layout="position"
//         whileHover={{ scale: 1.03 }}
//         onClick={() => setExpanded((prev) => !prev)}
//         className={
//           "relative px-10 col-span-2 pt-8 overflow-hidden pb-3 flex-col flex gap-2   hover:rounded-lg bg-[#0C1318] text-base-content hover:bg-base-100 transition-colors duration-300 hover:shadow-2xl hover:z-50 " +
//           (expanded && " bg-[#0e151b]")
//         }
//       >
//         <motion.div
//           ref={ref}
//           layout="position"
//           className="flex items-end content-end gap-3 "
//         >
//           <i className="text-3xl fa-solid fa-laptop-code opacity-30"></i>
//           <h3 className="text-xl font-semibold leading-none text-gray-300 uppercase lg:text-2xl">
//             Front-end development
//           </h3>
//         </motion.div>
//         <motion.div layout="position" className="w-11/12 mx-auto">
//           <p className="text-base leading-tight tracking-tight text-gray-500 opacity-80">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut unde
//             quas debitis explicabo aperiam! Delectus dolores aperiam, blanditiis
//             exercitationem consequatur.
//           </p>
//         </motion.div>
//         <AnimatePresence mode="wait">
//           <motion.div layout className={expanded ? "h-fit" : "h-0"}>
//             {expanded && (
//               <motion.div
//                 layout
//                 initial={{ scaleY: 0.5, y: -50, opacity: 0 }}
//                 animate={{ scaleY: 1, y: 0, opacity: 1 }}
//                 transition={{ type: "tween", duration: 0.2, delay: 0.1 }}
//                 exit={{ opacity: 0, scaleY: 0, transition: { duration: 0.1 } }}
//                 key={expanded}
//                 className="flex flex-row justify-center px-3 py-2 "
//               >
//                 <DevelopmentSkills />
//               </motion.div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//         <motion.i
//           layout="position"
//           className={
//             "mx-auto opacity-50 fa-solid text-md  w-full text-center py-2 " +
//             (expanded ? " fa-minus" : " fa-plus")
//           }
//         ></motion.i>
//       </motion.div>

//       <div className="relative flex flex-col gap-6 px-10 py-8 transition-all duration-300   bg-[#0C1318] hover:rounded-lg text-base-content hover:bg-base-200 hover:scale-105 hover:shadow-2xl hover:z-50">
//         <div className="flex items-end content-end gap-3 ">
//           <i className="text-3xl fa-solid fa-camera opacity-30"></i>

//           <h3 className="text-xl font-semibold leading-none text-gray-300 uppercase lg:text-2xl">
//             Photography
//           </h3>
//         </div>
//         <p className="w-11/12 mx-auto text-base leading-tight tracking-tight text-gray-500 opacity-80">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut unde quas
//           debitis explicabo aperiam! Delectus dolores aperiam, blanditiis
//           exercitationem consequatur, distinctio necessitatibus earum
//         </p>
//       </div>

//       <div className="flex flex-col gap-6 px-10 py-8 transition-all duration-300   bg-[#0C1318] hover:rounded-lg text-base-content hover:bg-base-200 hover:scale-105 hover:shadow-2xl hover:z-50">
//         <div className="flex items-end content-end gap-3 ">
//           <i className="text-3xl text-gray-400 opacity-100 fa-solid fa-wand-magic-sparkles"></i>
//           <h3 className="text-xl font-semibold leading-none text-gray-300 uppercase lg:text-2xl">
//             Others
//           </h3>
//         </div>
//         <p className="w-11/12 mx-auto text-base leading-tight tracking-tight text-gray-500 opacity-80">
//           Delectus dolores aperiam, blanditiis exercitationem consequatur,
//           distinctio necessitatibus earum ea ullam accusantium officiis nihil et
//           esse.
//         </p>
//       </div>
//     </motion.div>
//   );
// };

export default Skills;
