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
      <motion.div
        layout
        className="sticky bottom-0 border-4 bg-primary border-error"
      >
        {form && (
          <motion.div
            ref={formRef}
            layout
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", transition: { delay: 0 } }}
            className="relative z-0 flex flex-col mx-auto w-fit"
          >
            <Form closeForm={() => toggleForm(false)} />
          </motion.div>
        )}

        {!form && (
          <motion.div
            layout
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", transition: { delay: 0 } }}
            className="sticky bottom-0 flex flex-row items-center justify-center w-full gap-12 border "
          >
            <motion.ul
              layout="position"
              className="flex flex-row gap-12 px-4 py-12 text-lg font-semibold w-fit "
            >
              <li>github</li>
              <li>behance</li>
              <li>instagram</li>
            </motion.ul>
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
              onClick={() => toggleForm(true)}
              className={`btn btn-md rounded-md text-lg gap-4 font-normal tracking-wide uppercase btn-accent`}
            >
              Contact form
              <ChatIcon className=" lg:text-xl text-neutral-content" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </LayoutGroup>
  );
};
