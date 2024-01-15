import { useInView, motion } from "framer-motion";
import { forwardRef, useEffect } from "react";
import Form from "./Form";
const variants = {
  hide: { opacity: 0, x: -40 },
  show: {
    opacity: [0, 0.2, 0.25, 1],
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeOut",
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
      ease: "easeOut",
      staggerChildren: 0.9,
    },
  },
};

const Contact = forwardRef(({ makeActive }, ref) => {
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      makeActive("contact");
    }
  }, [isInView]);

  function handleSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <section className="grid h-screen text-4xl section place-content-center text-info snap-center">
      <div className="flex items-center justify-start w-full min-h-screen">
        <div className="flex flex-col items-center w-full gap-8 mx-auto lg:flex-row">
          <motion.div
            variants={variants}
            initial="hide"
            whileInView="show"
            className="flex flex-col pr-8 text-right lg:border-r-2 border-neutral"
          >
            <motion.h1
              ref={ref}
              variants={variants}
              className="font-bold xl:text-5xl text-neutral"
            >
              CONTACT ME
            </motion.h1>
            <motion.div
              variants={variants}
              initial="hide"
              whileInView="show"
              className="flex flex-col items-center gap-2 md:flex-row"
            >
              <p className="mt-1 text-lg md:text-2xl text-neutral-content">
                Email me at
              </p>
              <a
                href="mailto: raul_varzar@yahoo.com"
                className="pt-0.5 pb-1 px-4 text-lg hover:scale-105 transition duration-200 rounded-md bg-opacity-40 text-neutral-content bg-neutral"
              >
                raul_varzar@yahoo.com
              </a>
            </motion.div>

            <p
              variants={variants}
              className="text-lg md:text-2xl text-neutral-content"
            >
              or message me using the form
            </p>
          </motion.div>
          <Form />
        </div>
      </div>
    </section>
  );
});

export default Contact;
