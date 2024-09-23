import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

const Form = () => {
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

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col justify-center w-full mt-10"
    >
      <motion.div className="flex flex-col gap-8 w-full  md:w-[650px] lg:w-[650px] 2xl:w-[700px] ">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: [0, 1, 1, 1], y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
          className="relative z-0 group"
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="peer px-4 block w-full appearance-none opacity-60 group-hover:opacity-100 focus:border-primary transition duration-300  border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute text-sm top-0 opacity-60 group-hover:opacity-100 peer-focus:opacity-100 peer-focus:text-primary -z-10 origin-[0] -translate-y-6  transform md:text-base text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
            Name
          </label>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, type: "tween" }}
          className="relative z-0 group"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="peer px-4 block w-full appearance-none opacity-60 group-hover:opacity-100 focus:border-primary transition duration-300  border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-0 text-sm opacity-60 group-hover:opacity-100  peer-focus:text-primary peer-focus:opacity-100 -z-10 origin-[0] -translate-y-6  transform md:text-base text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
            Email address
          </label>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.4,
            type: "tween",
          }}
          className="relative z-0 group"
        >
          <textarea
            name="message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="peer px-4 block w-full appearance-none opacity-60 group-hover:opacity-100 transition duration-300  border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0 focus:border-primary"
            placeholder=" "
          ></textarea>
          <label className="absolute top-0 text-sm opacity-60 group-hover:opacity-100  peer-focus:text-primary peer-focus:opacity-100 -z-10 origin-[0] -translate-y-6  transform md:text-base text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
            Your message
          </label>
        </motion.div>
      </motion.div>
      {!loading && !error && !success && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.8 },
          }}
          type="submit"
          className="flex mx-auto mt-5 text-sm font-normal tracking-wide uppercase transition-all duration-300 rounded-md shadow-md text-base-content border-base-content hover:font-semibold hover:gap-2 group btn btn-md btn-outline hover:border-opacity-0 hover:bg-base-content hover:text-primary hover:scale-105"
        >
          Send message
          <i className="transition-transform duration-300 fa-regular fa-paper-plane group-hover:rotate-45"></i>
        </motion.button>
      )}
      {loading && (
        <div className="flex items-center justify-center mt-4 ">
          <span className=" bg-primary loading-lg loading loading-spinner"></span>
        </div>
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
            className="py-2 mx-auto mt-6 text-base border-0 w-fit alert bg-success text-base-300"
          >
            <i className="fa-solid fa-check"></i>
            <span className="text-base">{success}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default Form;
