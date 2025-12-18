"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Socials } from "@/components/Home/Socials";
import useScreenSize from "@/hooks/useScreenSize";
import { useFooter } from "@/components/Footer/FooterContext";
import ProfilePhoto from "@/components/Home/ProfilePhoto";
import HTMLText from "@/components/Home/HTMLText";
import GridBackground from "@/components/Home/GridBackground";

const variants = {
  hide: { opacity: 0, x: -40 },
  show: {
    opacity: [0, 0.2, 0.25, 1],
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.8, 0, 0.2, 1],
      staggerChildren: 0.9,
    },
  },
};

const Home = () => {
  const { isOpen } = useFooter();

  const screenSize = useScreenSize();

  const [zoomInText, setZoomInText] = useState(false);

  return (
    <section className=" min-h-[100dvh]  z-10 flex flex-col relative justify-center w-full grow  place-content-start">
      <GridBackground />
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={
          isOpen
            ? {
                y: "10%",

                rotate: 0,
                scale: 0.98,
                opacity: 0.4,
                transition: { duration: 1, ease: [0.75, 0, 0.25, 1] },
              }
            : {
                y: 0,
                opacity: 1,
                scale: 1,

                rotate: 0,
                transition: {
                  duration: 0.95,

                  ease: [0.75, 0, 0.25, 1],
                },
              }
        }
        className="flex flex-col-reverse items-center justify-center h-full gap-4 px-2 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-screen-3xl xl:px-20 sm:px-4 md:px-8 grow xl:flex-row "
      >
        <Tilt
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          reset={false}
          perspective={2000}
          transitionSpeed={2}
          onEnter={() => screenSize.width > 1080 && setZoomInText(true)}
          onLeave={() => setZoomInText(false)}
        >
          <HTMLText zoomInText={zoomInText} />
        </Tilt>

        <ProfilePhoto />
      </motion.div>

      <Socials />
    </section>
  );
};
export default Home;
