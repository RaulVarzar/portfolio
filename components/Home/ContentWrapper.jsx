import { motion } from "framer-motion";

const ContentWrapper = ({ children, isOpen }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={
        isOpen
          ? {
              y: "10%",

              rotate: 0,
              scale: 0.98,
              opacity: 0.4,
              transition: { duration: 1, ease: [0.75, 0, 0.25, 1] },
            }
          : {
              y: 0,
              opacity: 1,
              scale: 1,

              rotate: 0,
              transition: {
                duration: 0.95,

                ease: [0.75, 0, 0.25, 1],
              },
            }
      }
      className="flex flex-col-reverse items-center justify-center h-full gap-4 px-2 mx-auto my-24 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-screen-3xl xl:px-20 sm:px-4 md:px-8 grow xl:flex-row "
    >
      {children}
    </motion.div>
  );
};

export default ContentWrapper;
