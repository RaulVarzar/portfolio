"use client";

import { motion, useScroll } from "framer-motion";
import { GrContact } from "react-icons/gr";

import "./burger.css";
import { useEffect, useState } from "react";

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
    <div className="fixed z-50 top-3 left-2 sm:top-10 sm:left-16">
      <motion.div
        layout
        transition={{ delay: 0.2 }}
        style={{ borderRadius: "90px" }}
        className="relative flex flex-row items-center border-2 gap- bg-base-content"
      >
        <motion.div
          layout="position"
          onClick={() => setHidden(!hidden)}
          className="relative z-50 px-3 py-3 cursor-pointer sm:py-5 sm:px-6"
        >
          <GrContact className="text-xl text-base-100 sm:text-3xl" />
        </motion.div>
        {!hidden && (
          <motion.div className="flex flex-row gap-8 pl-4 pr-10 justify-evenly">
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
