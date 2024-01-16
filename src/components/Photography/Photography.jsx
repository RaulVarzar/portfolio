import { useInView } from 'framer-motion';
import { forwardRef, useEffect } from 'react';
import { Carousel } from './Carousel';

const Photography = forwardRef(({ makeActive }, ref) => {
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      makeActive('photography');
    }
  }, [isInView]);

  return (
    <section className="relative flex items-center min-h-screen text-4xl section text-info snap-center">
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
      <div className="flex" ref={ref}>
        <Carousel />
      </div>
    </section>
  );
});

export default Photography;
