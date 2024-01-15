import { useInView, motion } from "framer-motion";
import { forwardRef, useEffect } from "react";

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
              variants={variants}
              className="text-5xl font-bold text-neutral"
            >
              CONTACT ME
            </motion.h1>
            <motion.div
              variants={variants}
              initial="hide"
              whileInView="show"
              className="flex flex-row items-center gap-2"
            >
              <p className="mt-1 text-2xl text-neutral-content">Email me at</p>
              <span className="pt-0.5 pb-1 px-4 text-lg hover:scale-105 transition duration-200 rounded-md bg-opacity-40 text-neutral-content bg-neutral">
                raul_varzar@yahoo.com
              </span>
            </motion.div>

            <p variants={variants} className="text-2xl text-neutral-content">
              or message me using the form
            </p>
          </motion.div>
          <form onSubmit={handleSubmitForm} className="mt-10" ref={ref}>
            <motion.div
              variants={formVariants}
              initial="hide"
              whileInView="show"
              className="flex flex-col gap-8 md:w-[400px] xl:w-[600px]"
            >
              <motion.div
                variants={formVariants}
                className="relative z-0 group"
              >
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none cursor-none group-hover:border-neutral-content focus:group-hover:border-primary transition-colors duration-300 border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-0 group-hover:text-neutral-content -z-10 origin-[0] -translate-y-6  transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Name
                </label>
              </motion.div>
              <motion.div
                variants={formVariants}
                className="relative z-0 group"
              >
                <input
                  type="text"
                  name="email"
                  className="peer block w-full group-hover:border-neutral-content transition-colors duration-300 focus:group-hover:border-primary appearance-none cursor-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-0 group-hover:text-neutral-content -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Email address
                </label>
              </motion.div>
              <motion.div
                variants={formVariants}
                className="relative z-0 col-span-2 group"
              >
                <textarea
                  name="message"
                  rows="5"
                  className="peer block w-full cursor-none appearance-none group-hover:border-neutral-content focus:group-hover:border-primary transition-colors duration-300 border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-0 group-hover:text-neutral-content -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Your message
                </label>
              </motion.div>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 1.5, duration: 0.4 },
              }}
              type="submit"
              className="flex mt-5 text-sm font-normal tracking-wide text-white uppercase transition-all duration-300 rounded-md shadow-xl hover:font-semibold hover:text-base-200 hover:tracking-wider hover:gap-2 group btn btn-md place-self-end cursor-none hover:btn-primary hover:scale-105"
            >
              Send message
              <i className="transition-transform duration-300 fa-regular fa-paper-plane group-hover:rotate-45"></i>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
