import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useInView,
} from 'framer-motion';
import { forwardRef, useEffect, useRef } from 'react';
import ChatIcon from './Contact/ChatIcon';
import Form from './Contact/Form';

const Footer = forwardRef(({ makeActive }, ref) => {
  const activeRef = useRef(null);
  const isInView = useInView(activeRef);
  useEffect(() => {
    if (isInView) {
      makeActive('contact');
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: 'ref',
    offset: ['start end', 'end'],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.2,
  });

  const cardScale = useTransform(spring, [0.5, 1], ['40%', '100%']);
  const cardY = useTransform(spring, [0.2, 1], ['30vh', '0vh']);

  const y = useTransform(spring, [0.3, 1], ['150vh', '0vh']);

  return (
    <div ref={ref} className="flex items-end min-h-screen">
      <motion.div
        style={{ y: cardY, scale: cardScale }}
        className="flex items-center justify-center mx-auto overflow-hidden min-h-[85vh] md:min-h-[65vh] rounded-t-5xl w-full 3xl:max-w-8xl bg-accent py-12 md:py-16 xl:py-36 text-base-content"
      >
        <motion.div
          style={{ y }}
          className="flex flex-col px-8 max-md:w-full gap-x-12 gap-y-6 lg:flex-row md:grid-cols-2 max-w-8xl place-content-center"
        >
          <motion.div className="flex flex-row items-center pt-6 pr-2 text-right max-lg:justify-center lg:items-end gap-x-6 lg:flex-col text-neutral-content">
            <motion.h1
              ref={activeRef}
              className="text-2xl font-bold md:text-3xl xl:text-5xl w-fit text-nowrap"
            >
              CONTACT ME
            </motion.h1>
            <ChatIcon className="mt-2 text-4xl lg:text-5xl text-neutral-content" />
          </motion.div>
          <Form />
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Footer;
