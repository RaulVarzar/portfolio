import {
  AnimatePresence,
  motion,
  useInView,
  useTransform,
} from "framer-motion";

const Divider = ({ trackedRef, progress }) => {
  const variants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 0.3,
        delay: 0,
      },
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0,
        duration: 2,
      },
    },
  };

  const entered = useInView(trackedRef, {
    margin: "0% 0% -70% 0%",
  });

  const progressBarWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed bottom-0 left-0 flex items-center justify-center w-full h-2 place-self-start">
      <AnimatePresence>
        {entered && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="h-0.5 relative w-full] bg-base-300 opacity-10 fade-in-out"
          >
            <motion.div
              style={{ scaleX: progressBarWidth }}
              className="absolute top-0 left-0 rounded-full w-full h-[96%] origin-center bg-gradient-to-t from-accent via-secondary to-accent"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Divider;
