import { motion } from "framer-motion";

const HtmlElement = ({ tag, children, blur, variants, ...props }) => {
  return (
    <motion.div
      {...props}
      className={
        "flex flex-col text-left roboto cursor-default " +
        (tag === "h1" ? " leading-none" : " leading-tight")
      }
      variants={variants}
    >
      <span
        className={
          "text-md md:text-lg xl:text-xl 2xl:text-3xl text-left ml-0 text-neutral-content w-fit opacity-25 transition-all duration-300 ease-[cubic-bezier(0.8, 0, 0.2, 1)] " +
          (blur && " blur-xs scale-95")
        }
      >
        &lt;{tag}&gt;
      </span>
      <motion.div
        variants={variants}
        className="flex flex-col gap-2 ml-4 md:ml-8"
      >
        {children}
      </motion.div>
      <span
        className={
          "text-md md:text-lg xl:text-xl 2xl:text-3xl text-left text-neutral-content opacity-25 transition-all duration-300 w-fit ease-[cubic-bezier(0.8, 0, 0.2, 1)]" +
          (blur && " blur-xs scale-95")
        }
      >
        &lt;/{tag}&gt;
      </span>
    </motion.div>
  );
};

export default HtmlElement;
