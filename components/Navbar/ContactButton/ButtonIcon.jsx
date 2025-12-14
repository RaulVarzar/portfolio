import { motion } from "framer-motion";
import { BsSendFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const ButtonIcon = ({ isOpen }) => {
  return (
    <motion.span
      layout
      className="relative z-10 pl-3.5 pr-4 py-3.5 text-xs rounded-sm backdrop-brightness-150 overflow-hidden"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={
          isOpen
            ? {
                opacity: 0,
                y: "-120%",
                transition: { duration: 0.5, ease: [0.95, 0, 0.25, 1] },
              }
            : {
                opacity: 1,
                y: "0%",
                transition: { duration: 0.5, ease: [0.75, 0, 0.25, 1] },
              }
        }
        className="absolute inset-0 flex items-center justify-center"
      >
        <BsSendFill />
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={
          !isOpen
            ? {
                opacity: 0,
                y: "120%",
                transition: { duration: 0.5, ease: [0.75, 0, 0.25, 1] },
              }
            : {
                opacity: 1,
                y: "0%",
                transition: { duration: 0.5, ease: [0.95, 0, 0.25, 1] },
              }
        }
        className="absolute inset-0 flex items-center justify-center text-base"
      >
        <AiOutlineClose />
      </motion.span>
    </motion.span>
  );
};

export default ButtonIcon;
