import { motion } from "framer-motion";

const HtmlElement = ({ tag, children, blur, ...props }) => {
  return (
    <motion.div
      {...props}
      className={
        "flex flex-col text-left my-1 " +
        (tag === "h1" ? " leading-none" : " leading-tight")
      }
    >
      <span
        className={
          "text-sm lg:text-lg text-left ml-0 text-base-content w-fit opacity-20 transition-all ease-[cubic-bezier(.03,.98,.52,.99)] " +
          (blur && " blur-xs scale-90")
        }
      >
        &lt;{tag}&gt;
      </span>
      <div className="flex flex-col gap-2 ml-4 md:ml-8">{children}</div>
      <span
        className={
          "text-sm lg:text-lg text-left text-base-content opacity-20 transition-all  w-fit ease-[cubic-bezier(.03,.98,.52,.99)]" +
          (blur && " blur-xs scale-90")
        }
      >
        &lt;/{tag}&gt;
      </span>
    </motion.div>
  );
};

export default HtmlElement;
