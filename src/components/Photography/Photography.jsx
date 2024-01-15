import { useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";
import { Carousel } from "./Carousel";

const Photography = forwardRef(({ makeActive }, ref) => {
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      console.log("is in view");
      makeActive("photography");
    }
  }, [isInView]);

  return (
    <section
      className="relative flex items-center h-screen text-4xl section text-info snap-center"
      ref={ref}
    >
      <div className="absolute w-8 h-4 bg-red-400 top-1/2 left-1/2" />
      {/* <div className="grid place-content-center">
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
      </div> */}
      <Carousel />
    </section>
  );
});

export default Photography;
