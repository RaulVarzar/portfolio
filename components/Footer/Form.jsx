"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronCompactDown } from "react-icons/bs";
import InputField from "@/components/Footer/InputField";

const Form = ({}) => {
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
    <motion.div className="flex flex-col justify-center w-full gap-8">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center w-full mx-auto"
      >
        <motion.div className="flex flex-col gap-8 w-full  px-10  lg:min-w-[500px] xl:min-w-[540px] ">
          <div className="flex flex-col justify-between w-full gap-2 md:gap-3 lg:gap-4 ">
            <InputField
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={0}
            />

            <InputField
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              type="email"
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={1}
            />

            <InputField
              label="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
              isTextarea
              rows={6}
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={2}
            />
          </div>

          {!error && !success && (
            <motion.div
              variants={variants}
              initial="hidden"
              custom={3}
              animate="visible"
            >
              <SubmitButton loading={loading} />
            </motion.div>
          )}
        </motion.div>

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

const SubmitButton = ({ loading }) => {
  const bgVariants = {
    idle: { y: "100%" },
    hover: { y: "0%", transition: { duration: 0.28, ease: [0, 0, 0.2, 1] } },
  };

  return (
    <motion.button
      type="submit"
      initial="idle"
      animate="idle"
      whileHover="hover"
      className="relative z-40 w-full px-6 py-3 mx-auto mt-2 overflow-hidden transition-colors duration-200 bg-transparent border rounded-sm border-base-content border-opacity-10 hover:border-opacity-5 text-neutral-content"
    >
      {!loading && (
        <div className="flex flex-row items-center justify-center gap-3 ">
          <span className="font-medium tracking-wide uppercase">
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
      <motion.div
        variants={{
          idle: { y: "100%" },
          hover: {
            y: "0%",
            transition: { duration: 0.28, ease: [0, 0, 0.2, 1] },
          },
        }}
        className="absolute bottom-0 left-0 w-full h-full bg-primary -z-10"
      />
      <motion.div
        variants={bgVariants}
        className="absolute bottom-0 left-0 w-full h-full bg-accent -z-10"
      />
    </motion.button>
  );
};
