"use client";

import { useFooter } from "@/components/Footer/FooterContext";
import ControlButton from "./ControlButton";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useTransitionStore } from "@/hooks/transitionStore";
import { BsSendFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { TiPlusOutline } from "react-icons/ti";

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

  // const { openFooter } = useFooter();

  const triggerExit = useTransitionStore((state) => state.triggerExit);

  return (
    <>
      <motion.div className="sticky z-[999]  top-0 flex items-center justify-end w-full gap-4 py-6 xl:py-8 3xl:py-10 mx-auto max-w-screen-2xl">
        <ControlButton label="My skills">
          <TiPlusOutline />
        </ControlButton>

        <ControlButton
          label="Projects"
          onClick={() => triggerExit("/projects")}
        >
          <TiPlusOutline />
        </ControlButton>
        <ControlButton
          label="Contact"
          colored
          className="rounded-sm"
          onClick={null}
        >
          <BsSendFill />
        </ControlButton>
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
