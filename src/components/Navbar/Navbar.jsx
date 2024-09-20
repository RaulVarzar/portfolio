import { AnimatePresence, motion, useScroll } from "framer-motion";
import { GrContact } from "react-icons/gr";

import "./burger.css";
import { useEffect, useState } from "react";
// import { Social } from "../Home/socialLink";

const Sidebar = ({ goToSection, activeSection }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < 200) {
      setHidden(false);
    } else if (scrollY?.current >= 200) {
      setHidden(true);
    }
  }
  useEffect(() => {
    return scrollY.on("change", () => update());
  });

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    // <motion.nav
    //   layout
    //   className="fixed flex flex-row z-50 gap-10 items-center mx-auto left-16 w-fit top-10 px-8 rounded-full bg-base-content py-3"
    // >
    //   <GrContact className="text-accent text-4xl border-2 " />
    //   <AnimatePresence>
    //     {!hidden && (
    //       <motion.div
    //         variants={variants}
    //         animate={hidden ? "hidden" : "visible"}
    //         transition={{
    //           ease: [0, 0.2, 0.8, 1],
    //           duration: 0.6,
    //           type: "spring",
    //           delay: 0.3,
    //         }}
    //         key={hidden}
    //         exit={{ x: "-150%" }}
    //         layout
    //         className="flex flex-row justify-evenly  gap-8 "
    //       >
    //         <Social name="github" link="https://github.com/RaulVarza" />
    //         <Social name="instagram" link="https://instagram.com/raulvarzar" />
    //         <Social name="behance" link="https://behance.net/varzarr" />
    //       </motion.div>
    //     )}
    //   </AnimatePresence>

    // </motion.nav>
    <div className="fixed top-3 left-2 sm:top-10 sm:left-16 z-50">
      <motion.div
        layout
        transition={{ delay: 0.2 }}
        style={{ borderRadius: "90px" }}
        className="relative flex flex-row gap- items-center  border-2 bg-base-content"
      >
        <motion.div
          layout="position"
          onClick={() => setHidden(!hidden)}
          className=" relative z-50 py-3 px-3 sm:py-5 sm:px-6 cursor-pointer"
        >
          <GrContact className="text-base-100 text-xl sm:text-3xl" />
        </motion.div>
        {/* <AnimatePresence mode="sync"> */}
        {!hidden && (
          <motion.div
            // initial={{ opacity: 0, x: "-150%" }}
            // animate={{ opacity: 1, x: "0" }}
            // transition={{ duration: 0.2, ease: "easeInOut" }}
            // exit={{ x: "-150%", opacity: 0 }}
            className="flex flex-row justify-evenly gap-8 pr-10 pl-4"
          >
            <motion.div
              initial={{ opacity: 0, x: "-150%" }}
              animate={{ opacity: 1, x: "0", transition: { delay: 0.4 } }}
            >
              <Social name="github" link="https://github.com/RaulVarza" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-150%" }}
              animate={{ opacity: 1, x: "0", transition: { delay: 0.5 } }}
            >
              <Social
                name="instagram"
                link="https://instagram.com/raulvarzar"
              />{" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-150%" }}
              animate={{ opacity: 1, x: "0", transition: { delay: 0.6 } }}
            >
              <Social name="behance" link="https://behance.net/varzarr" />{" "}
            </motion.div>
          </motion.div>
        )}
        {/* </AnimatePresence> */}
      </motion.div>
    </div>
  );
};

export default Sidebar;
