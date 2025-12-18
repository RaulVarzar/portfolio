"use client";

import { motion } from "framer-motion";
import HtmlElement from "@/components/Home/HtmlElement";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import BubbleText from "@/components/BubbleText/BubbleText";
import { Socials } from "@/components/Home/Socials";
import useScreenSize from "@/hooks/useScreenSize";
import { useFooter } from "@/components/Footer/FooterContext";

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
    <>
      <motion.section
        // exit={{ opacity: 0 }}
        // transition={{ duration: 1 }}
        exit={{
          y: "-100vh",
          opacity: 0.9,
          transition: { duration: 0.6, ease: [0.75, 0, 0.25, 1] },
        }}
        className=" min-h-[100dvh] bg-base-100 grid-bg z-10 flex flex-col justify-center w-full grow  place-content-start"
      >
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
            // transitionEasing="cubic-bezier(.75,.1,.25,1)"
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            reset={false}
            perspective={2000}
            transitionSpeed={2}
            // trackOnWindow={true}
            onEnter={() => screenSize.width > 1080 && setZoomInText(true)}
            onLeave={() => setZoomInText(false)}
          >
            <HTMLText zoomInText={zoomInText} />
          </Tilt>

          <ProfilePhoto />
        </motion.div>
        <Socials />
      </motion.section>
    </>
  );
};
export default Home;

const HTMLText = ({ zoomInText }) => {
  return (
    <motion.div className="relative flex flex-col max-w-3xl gap-0 py-2 roboto md:max-w-4xl 2xl:max-w-6xl sm:px-4 max-sm:pl-3 md:pr-12 md:pl-10 h-fit xl:pl-12 xl:pr-16 2xl:pr-20 ">
      <HtmlElement
        tag={"header"}
        zoomInText={zoomInText}
        variants={variants}
        animate="show"
        initial="hide"
        // exit="hide"
      >
        <HtmlElement tag={"h3"} zoomInText={zoomInText} variants={variants}>
          <motion.h3>Hello, my name is</motion.h3>
        </HtmlElement>
        <HtmlElement variants={variants} tag={"h1"} zoomInText={zoomInText}>
          <motion.h3
            className={
              "text-4xl font-bold roboto md:text-5xl tracking-tight lg:text-6xl xl:text-6xl 2xl:text-7xl 2xl:text-8xl 3xl:text-9xl z-50 text-neutral-content brightness-125 transition-all duration-500  ease-[cubic-bezier(.03,.98,.52,.99)] "
            }
          >
            Raul Vărzar
          </motion.h3>
        </HtmlElement>
      </HtmlElement>
      <HtmlElement
        zoomInText={zoomInText}
        tag={"p"}
        animate="show"
        initial="hide"
        // exit="hide"
        variants={variants}
      >
        <motion.h3
          className={
            "text-sm md:text-md xl:text-xl  leading-tight font-thin 2xl:text-3xl z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
            (zoomInText ? " scale-105 font-semibold opacity-90" : " opacity-70")
          }
        >
          <BubbleText
            text={
              "I am passionate about web design and creating stuff that looks pretty"
            }
          />
        </motion.h3>
      </HtmlElement>
    </motion.div>
  );
};

export const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{
        opacity: [0, 0, 1],
        y: 0,
        scale: 1,
        transition: {
          delay: 0.5,
          duration: 1.5,
          ease: [0.25, 0, 0.33, 1],
        },
      }}
    >
      <motion.div className=" scale-100 flex flex-col border-2 border-neutral-content border-opacity-35 overflow-hidden group  elevation-4 rounded-[8px] md:rounded-[14px] p-1 md:p-1.5 transition-all duration-300 ease-in-out group hover:rotate-2 hover:scale-102">
        <div className="overflow-hidden rounded-[10px] md:rounded-[11px]">
          <img
            src="/profile-pic.jpg"
            className="z-50 object-cover h-56 transition-all duration-300 ease-in-out w-44 md:h-52 md:w-48 xl:h-96 xl:w-80 lg:scale-105 group-hover:scale-110 group-hover:-rotate-3"
            alt="profile-pic"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
