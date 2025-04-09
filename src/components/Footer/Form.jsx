import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronCompactDown } from "react-icons/bs";

const Form = ({ isInView }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [success]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_86b16ld",
        "template_zcbtlko",
        form.current,
        "taFxVEHpZaCSDSpKM"
      )
      .then(
        (result) => {
          setSuccess("Your message was sent!");
          setLoading(false);
          resetForm();
        },
        (error) => {
          setError("Failed to send email. Please try again later");
          setLoading(false);
        }
      );
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(4px)",
      transition: { duration: 0.7 },
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.65 + custom * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <motion.div className="flex flex-col justify-center gap-8 ">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center w-full mx-auto"
      >
        <motion.div className="flex flex-col gap-8 w-full   lg:min-w-[500px] ">
          <div className="flex flex-col justify-between w-full gap-2 ">
            <motion.div
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="relative py-2 border-b sm:py-4 md:py-6 border-opacity-45 border-base-content"
            >
              <label className="flex flex-row-reverse items-center w-full gap-1 px-2 py-6 text-xl bg-transparent outline-none sm:px-4 md:gap-8 md:px-8 input focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none sm:text-3xl">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`grow peer bg-transparent text-base md:text-xl xl:text-2xl focus:placeholder-transparent  ${
                    name.length > 0 ? " opacity-100" : "opacity-30"
                  }`}
                  placeholder="Ion Popescu"
                />
                <span className="text-base font-semibold transition-opacity duration-300 opacity-100 sm:text-xl lg:text-2xl text-neutral-content min-w-20 sm:min-w-28 peer-focus:opacity-60">
                  Nume
                </span>
              </label>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
              className="relative py-2 border-b sm:py-4 md:py-6 border-opacity-45 border-base-content"
            >
              <label className="flex flex-row-reverse items-center w-full gap-1 px-2 py-6 text-xl bg-transparent outline-none sm:px-4 md:gap-8 md:px-8 input focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none sm:text-3xl">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className={`grow peer bg-transparent text-base md:text-xl xl:text-2xl focus:placeholder-transparent  ${
                    email.length > 0 ? " opacity-100" : "opacity-30"
                  }`}
                  placeholder="example@email.com"
                />
                <span className="text-base font-semibold transition-opacity duration-300 opacity-100 sm:text-xl lg:text-2xl text-neutral-content min-w-20 sm:min-w-28 peer-focus:opacity-60">
                  Email
                </span>
              </label>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="relative py-2 border-b sm:py-4 md:py-6 border-opacity-45 border-base-content"
            >
              <label className="flex flex-row-reverse items-center w-full gap-1 px-2 py-6 text-xl bg-transparent outline-none sm:px-4 md:gap-8 md:px-8 input focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none sm:text-3xl">
                <input
                  name="message"
                  rows="5"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`grow peer bg-transparent text-base md:text-xl xl:text-2xl focus:placeholder-transparent  ${
                    message.length > 0 ? " opacity-100" : "opacity-30"
                  }`}
                  placeholder="Buna ziua! ...."
                />
                <span className="text-base font-semibold transition-opacity duration-300 opacity-100 sm:text-xl lg:text-2xl text-neutral-content min-w-20 sm:min-w-28 peer-focus:opacity-60">
                  Mesaj
                </span>
              </label>
            </motion.div>
          </div>
        </motion.div>
        {!error && !success && (
          <motion.button
            variants={variants}
            layout
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            type="submit"
            className="z-40 px-6 py-3 mx-auto mt-5 text-base bg-opacity-100 rounded-md md:gap-3 xl:gap-4 md:text-lg group text-accent bg-neutral-content "
          >
            {!loading && (
              <div className="flex flex-row items-center justify-center gap-3 ">
                <span className="font-normal tracking-wide uppercase">
                  Send message
                </span>
                <i className="transition-transform duration-300 fa-regular fa-paper-plane group-hover:rotate-45"></i>
              </div>
            )}
            {loading && (
              <div className="flex items-center justify-center ">
                <span className=" bg-accent loading-lg loading loading-spinner"></span>
              </div>
            )}
          </motion.button>
        )}

        <AnimatePresence mode="popLayout">
          {success && (
            <motion.div
              key={success}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring" }}
              exit={{ y: 0, opacity: 0 }}
              role="alert"
              className="py-2 mx-auto mt-6 border-0 rounded-lg text-neutral-content w-fit alert bg-emerald-800"
            >
              <i className="fa-solid fa-check"></i>
              <span className="text-base">{success}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default Form;
