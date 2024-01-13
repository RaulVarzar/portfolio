import profilePhoto from '../../assets/profile-pic.jpg';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import HtmlElement from './HtmlElement';
import { useEffect, useRef, useState } from 'react';
import ContactDetails from './ContactDetails';
import codePhoto from '../../assets/code-editor.png';
import ChevronButton from './ChevronButton';

const variants = {
  hide: { opacity: 0.5 },
  show: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.2, staggerChildren: 0.5 },
  },
};

const childrenVariants = {
  hide: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 1 },
  },
};

const Home = ({ makeActive, goToSection }) => {
  const [viewContactDetails, setViewContactDetails] = useState(false);

  const ref = useRef();

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      makeActive('home');
    }
  }, [isInView]);

  return (
    <motion.div
      layout="position"
      className="flex flex-col min-h-screen gap-10 py-8 justify-evenly "
    >
      <img
        src={codePhoto}
        alt=""
        className="absolute z-0 object-cover w-auto h-1/3 top-16 right-12 opacity-20 brightness-50"
      />
      <motion.div
        layout
        className="flex flex-col-reverse items-center flex-grow gap-4 xl:gap-16 xl:flex-row"
      >
        <motion.div
          layout
          variants={variants}
          whileInView="show"
          initial="hide"
          className="flex flex-col gap-0 py-12 pl-8 pr-16 roboto"
        >
          <HtmlElement variants={childrenVariants} tag={'header'}>
            <HtmlElement tag={'h3'}>
              <motion.h3
                className="text-lg md:text-xl xl:text-2xl opacity-60 text-primary"
                ref={ref}
              >
                Hello, my name is
              </motion.h3>
            </HtmlElement>
            <HtmlElement variants={childrenVariants} tag={'h1'}>
              <motion.h3
                ref={ref}
                className="text-2xl font-semibold md:text-5xl xl:text-7xl text-neutral-content brightness-125"
              >
                Raul Vărzar
              </motion.h3>
            </HtmlElement>
          </HtmlElement>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          src={profilePhoto}
          className="relative object-cover w-64 h-64 border-8 rounded-full shadow-lg border-base-100"
          alt="profile"
        />
      </motion.div>

      <AnimatePresence mode="sync">
        {viewContactDetails && (
          <ContactDetails
            key={viewContactDetails}
            exit={{ opacity: 0 }}
            closeDetails={() => setViewContactDetails(false)}
          />
        )}
      </AnimatePresence>
      <motion.div
        layout="position"
        className="flex flex-row items-center flex-none gap-6 py-6 mx-auto"
      >
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'anticipate' }}
          className="px-5 py-2 text-xl font-light tracking-wider transition-all duration-300 bg-transparent rounded-md text-base-content hover:bg-base-100 hover:scale-95"
        >
          Github <i className="fa-brands fa-github"></i>
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'anticipate' }}
          onClick={() => setViewContactDetails(true)}
          className="px-5 py-2 text-lg font-light tracking-wider uppercase transition-all duration-300 bg-transparent border-4 rounded-md text-base-content border-base-100 hover:bg-base-200 hover:scale-95 hover:border-base-200"
        >
          Contact me
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6, ease: 'easeIn' }}
        >
          <i className="text-5xl align-middle transition-all duration-300 fa-brands fa-square-instagram text-base-content hover:text-gray-300 hover:scale-105"></i>
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6, ease: 'easeIn' }}
        >
          <i className="text-5xl align-middle transition-all duration-300 fa-brands fa-square-behance text-base-content hover:text-gray-300 hover:scale-105"></i>
        </motion.button>
      </motion.div>
      <ChevronButton goToSection={goToSection} />
    </motion.div>
  );
};

export default Home;
