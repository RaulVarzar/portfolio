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
    }, 8000);
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
      className="flex flex-col justify-center mt-10"
    >
      <motion.div className="flex flex-col gap-8 md:w-[400px] xl:w-[600px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: "tween" }}
          className="relative z-0 group"
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="peer px-4 block w-full appearance-none cursor-none group-hover:border-neutral-content focus:group-hover:border-primary transition-colors duration-300 border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-200 md:text-xl focus:border-primary focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-0 group-hover:text-neutral-content -z-10 origin-[0] -translate-y-6  transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
            Name
          </label>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6, type: "tween" }}
          className="relative z-0 group"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="peer px-4 block w-full group-hover:border-neutral-content transition-colors duration-300 focus:group-hover:border-primary appearance-none cursor-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-200 md:text-xl  focus:border-primary focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-0 group-hover:text-neutral-content -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
            Email address
          </label>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.4, type: "tween" }}
          className="relative z-0 col-span-2 group"
        >
          <textarea
            name="message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="peer px-4 block w-full cursor-none appearance-none group-hover:border-neutral-content focus:group-hover:border-primary transition-colors duration-300 border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-base text-gray-200 md:text-xl focus:border-primary focus:outline-none focus:ring-0"
            placeholder=" "
          ></textarea>
          <label className="absolute top-0 group-hover:text-neutral-content -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
            Your message
          </label>
        </motion.div>
      </motion.div>
      {!loading && !error && !success && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4 },
          }}
          type="submit"
          className="flex mx-auto mt-5 text-sm font-normal tracking-wide text-white uppercase transition-all duration-300 rounded-md shadow-xl hover:font-semibold hover:text-base-200 hover:tracking-wider hover:gap-2 group btn btn-md cursor-none hover:btn-primary hover:scale-105"
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
      <AnimatePresence mode="wait">
        {success && (
          <motion.div
            key={success}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            exit={{ x: 20, opacity: 0 }}
            role="alert"
            className="py-2 mx-auto mt-6 text-base w-fit alert bg-success text-base-300"
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
