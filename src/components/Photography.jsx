import { motion, useInView } from "framer-motion";
import { forwardRef, useEffect, useRef } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const gallery = Object.values(
  import.meta.glob("@photos/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
);

const demoVariants = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, x: -50 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const Photography = forwardRef(({ makeActive }, ref) => {
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      makeActive("photography");
    }
  }, [isInView]);

  return (
    <section className="relative grid h-screen text-4xl section place-content-center text-info snap-center">
      <div className="absolute w-8 h-4 top-1/2" ref={ref} />
      <div className="grid place-content-center">
        <PhotoProvider>
          <motion.div
            variants={demoVariants}
            initial="hidden"
            whileInView="animate"
            className="flex flex-wrap justify-end items-end flex-row gap-2 xl:gap-3 max-w-[1700px] pr-10"
          >
            {gallery.map((photo, i) => (
              <PhotoView src={photo} key={photo}>
                <motion.img
                  src={photo}
                  alt="gallery"
                  variants={childrenVariants}
                  key={photo}
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="object-cover w-auto rounded-md cursor-none h-36 lg:h-44 xl:h-52 2xl:h-56"
                />
              </PhotoView>
            ))}
          </motion.div>
        </PhotoProvider>
      </div>
    </section>
  );
});

export default Photography;
