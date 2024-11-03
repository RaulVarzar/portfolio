import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import { AnimatePresence, LayoutGroup, motion, useInView } from "framer-motion";
import ChatIcon from "./ChatIcon";

export const FooterLinks = ({ openForm }) => {
  const [form, setForm] = useState(false);
  const formRef = useRef(null);
  const ref = useRef(null);

  function scrollToForm() {
    setTimeout(
      () => formRef.current.scrollIntoView({ behavior: "smooth" }),
      500
    );
  }

  function toggleForm(newState) {
    setForm(newState);
    scrollToForm();
  }

  const isInView = useInView(ref, {
    margin: "0px 0px 0px 0px",
  });

  useEffect(() => {
    if (!isInView) {
      setForm(false);
    }
  }, [isInView]);

  return (
    <LayoutGroup>
      <motion.div layout className="relative bg-primary">
        <motion.div layout>
          <AnimatePresence mode="sync">
            {form && (
              <motion.div
                ref={formRef}
                layout
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "100%", transition: { delay: 0 } }}
                className="relative z-0 flex flex-col mx-auto w-fit bg-primary"
              >
                <Form closeForm={() => toggleForm(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          layout="position"
          // ref={ref}
          className="sticky bottom-0 w-full bg-primary"
        >
          <motion.div
            layout
            className="sticky inset-x-0 flex pt-8 pb-10  w-full sm:w-fit  flex-col-reverse md:flex-row items-center justify-center mx-auto gap-x-12"
          >
            <motion.ul
              layout="position"
              className="flex flex-row max-md:text-center w-full sm:gap-8  justify-between md:flex-row px-6 md:px-8 gap-y-3  max-sm:pt-8 text-md sm:text-lg xl:text-xl font-medium"
            >
              <li className="transition-all cursor-pointer text-neutral-content hover:brightness-125">
                github
              </li>
              <li className="transition-all cursor-pointer text-neutral-content hover:brightness-125">
                behance
              </li>
              <li className="transition-all cursor-pointer text-neutral-content hover:brightness-125">
                instagram
              </li>
            </motion.ul>

            {!form && (
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
                onClick={() => toggleForm(true)}
                className={`btn btn-lg rounded-md text-lg gap-4 font-normal tracking-wide uppercase btn-accent`}
              >
                Contact form
                <ChatIcon className=" lg:text-xl text-neutral-content" />
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
};
