import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const gallery = Object.values(
  import.meta.glob('@photos/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
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

export default function Photography({ makeActive }) {
  const ref = useRef();

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      makeActive('photography');
    }
  }, [isInView]);

  return (
    <div ref={ref} className="grid place-content-center">
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
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="object-cover w-auto rounded-md cursor-pointer h-36 lg:h-44 xl:h-52 2xl:h-56"
              />
            </PhotoView>
          ))}
        </motion.div>
      </PhotoProvider>
    </div>
  );
}
