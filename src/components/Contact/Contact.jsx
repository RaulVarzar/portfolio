import { useInView, motion } from 'framer-motion';
import { forwardRef, useEffect } from 'react';
import Form from './Form';

import chatIcon from '../../assets/chat-icon.svg';
import ChatIcon from './ChatIcon';

const variants = {
  hide: { opacity: 0, x: -40 },
  show: {
    opacity: [0, 0.2, 0.25, 1],
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.9,
    },
  },
};

const formVariants = {
  hide: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1.2,
      ease: 'easeOut',
      staggerChildren: 0.9,
    },
  },
};

const Contact = forwardRef(({ makeActive }, ref) => {
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      makeActive('contact');
    }
  }, [isInView]);

  function handleSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <section className="hidden h-screen text-4xl border-2  place-content-center text-info snap-center">
      <motion.div
        variants={variants}
        initial="hide"
        whileInView="show"
        className="flex flex-row items-center pt-6 pr-2 text-right lg:items-end gap-x-6 lg:flex-col text-base-content"
      >
        <motion.h1
          ref={ref}
          variants={variants}
          className="font-bold xl:text-5xl"
        >
          CONTACT ME
        </motion.h1>
        <ChatIcon variants={variants} className="mt-2 text-base-content" />
      </motion.div>
      <Form />
    </section>
  );
});

export default Contact;
