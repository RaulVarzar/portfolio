import { useRef, useState } from "react";
import Form from "./Form";
import { AnimatePresence, motion } from "framer-motion";
import ChatIcon from "./ChatIcon";

export const FooterLinks = ({ openForm }) => {
  const [form, setForm] = useState(false);
  const formRef = useRef(null);

  function toggleForm(newState) {
    setForm(newState);
    if (newState === true) {
      setTimeout(
        () => formRef.current.scrollIntoView({ behavior: "smooth" }),
        500
      );
    }
  }

  return (
    <motion.div layout className="bg-accent border">
      <AnimatePresence mode="sync">
        {form && (
          <motion.div
            ref={formRef}
            initial={{ y: "100%", opacity: 0 }}
            animate={form ? { y: "0%", opacity: 1 } : { y: "100%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 1 }}
            className="flex  relative  flex-col  z-0"
          >
            <motion.div
              // layout
              transition={{ duration: 1 }}
              className="mx-auto relative  w- flex justify-center"
            >
              <Form closeForm={() => toggleForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout="position"
        className="sticky bottom-0 py-6 bg-primary w-full"
      >
        <motion.div
          layout
          className=" sticky  items-center justify-center gap-x-12 inset-x-0 w-fit mx-auto flex flex-row "
        >
          <motion.ul
            layout="position"
            className="flex flex-row gap-12 py-8 w-fit text-lg font-semibold  bg-primary px-4 "
          >
            <li>github</li>
            <li>behance</li>
            <li>instagram</li>
          </motion.ul>

          {!form && (
            <button
              onClick={() => toggleForm(true)}
              className={`btn btn-md rounded-md text-lg gap-4 font-normal tracking-wide uppercase btn-accent`}
            >
              Contact form
              <ChatIcon className=" lg:text-xl text-neutral-content" />
            </button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
