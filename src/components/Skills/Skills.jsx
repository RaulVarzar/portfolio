import { useEffect, useRef, forwardRef } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import SkillsCard from './SkillsCard';
import BubbleText from '../BubbleText/BubbleText';

const Skills = forwardRef(({ makeActive }, ref) => {
  const contentRef = useRef(null);
  const targetRef = useRef(null);

  const isInView = useInView(contentRef);
  useEffect(() => {
    if (isInView) {
      makeActive('skills');
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });

  const y = useTransform(
    spring,
    [0, 0.5, 0.8, 1],
    ['5vh', '0vh', '0vh', '-10vh']
  );

  const titleScale = useTransform(spring, [0, 0.4], ['75%', '100%']);

  const opacity = useTransform(
    spring,
    [0, 0.25, 0.85, 0.95],
    ['40%', '80%', '85%', '0%']
  );

  const scale = useTransform(
    spring,
    [0, 0.4, 0.75, 1],
    ['82%', '100%', '100%', '90%']
  );

  return (
    <section
      ref={ref}
      className="relative grid py-8 overflow-hidden min-h-[80vh] gap-8 text-4xl  md:py-12  place-content-center"
    >
      <motion.div className="relative top-0 items-center justify-start mx-auto mt-4 md:mt-8">
        <motion.h3
          style={{ y, scale: titleScale, opacity }}
          className="text-3xl font-bold tracking-widest stroke-text text-base-100 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          MY SKILLS
        </motion.h3>
      </motion.div>

      <motion.div
        ref={contentRef}
        style={{ scale }}
        className="flex flex-col px-4 gap-y-4 sm:gap-y-12 place-content-center max-w-7xl roboto"
      >
        <SkillsCard
          title={'Front-end frameworks'}
          subtitle={'ReactJS'}
          large={true}
          icon={'fa-brands fa-react '}
        />
        <div className="flex flex-col justify-between md:flex-row">
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
        </div>
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
