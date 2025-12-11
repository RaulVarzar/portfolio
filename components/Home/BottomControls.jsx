"use client";

import { useFooter } from "@/components/Footer/FooterContext";
import ControlButton from "./ControlButton";
import { motion } from "framer-motion";
import { useState } from "react";

const BottomControls = () => {
  const bgVariants = {
    idle: {
      y: "-140%",
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: { y: "0%", transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] } },
  };
  const labelVariants = {
    idle: {
      opacity: 0.6,
      scale: 1,
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: {
      opacity: 1,
      scale: 1.04,
      transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] },
    },
  };

  const { openFooter } = useFooter();

  return (
    <>
      <motion.div className="sticky z-[999] bg-base-100 top-0 flex items-stretch justify-center w-full gap-6 pb-4 mx-auto border-t max-w-screen-2xl border-opacity-10 text-md md:text-xl border-base-content divide-x- divide-base-content divide-opacity-10">
        <ControlButton label="MY SKILLS" />
        <ControlButton label="PROJECTS" />
        <ControlButton label="CONTACT" onClick={() => openFooter()} />
      </motion.div>
    </>
  );
};

export default BottomControls;

export function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <nav style={nav}>
      <ul style={tabsContainer}>
        {tabs.map((item) => (
          <motion.li key={item.label} onClick={() => setSelectedTab(item)}>
            {`${item.icon} ${item.label}`}
            {item === selectedTab ? (
              <motion.div
                style={underline}
                layoutId="underline"
                id="underline"
              />
            ) : null}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
