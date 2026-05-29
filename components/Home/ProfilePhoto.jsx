"use client";

import { AnimatedBox } from "@/util/exitAnimationWrapper";
import { motion } from "framer-motion";

const ProfilePhoto = () => {
  const variants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.75,
        ease: [0.75, 0, 0.3, 1],
      },
    },
  };

  return (
    <AnimatedBox delay={0.05} duration={0.5}>
      <motion.div variants={variants} initial="initial" animate="enter">
        <motion.div className="scale-100 flex flex-col border-2 border-neutral-content border-opacity-35 overflow-hidden group elevation-4 rounded-[8px] md:rounded-[14px] p-1 md:p-1.5 transition-all duration-300 ease-in-out group hover:rotate-2 hover:scale-102">
          <div className="overflow-hidden rounded-[10px] md:rounded-[11px]">
            <img
              src="/profile-pic.jpg"
              className="z-50 object-cover h-56 transition-all duration-300 ease-in-out w-44 md:h-52 md:w-48 xl:h-96 xl:w-80 lg:scale-105 group-hover:scale-110 group-hover:-rotate-3"
              alt="profile-pic"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatedBox>
  );
};

export default ProfilePhoto;
