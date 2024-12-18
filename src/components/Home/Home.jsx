import profilePhoto from "../../assets/profile-pic.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import HtmlElement from "./HtmlElement";
import { useRef, useState } from "react";
import ChevronButton from "./ChevronButton";
import Tilt from "react-parallax-tilt";
import BubbleText from "../BubbleText/BubbleText";
import { Socials } from "./Socials";
import useScreenSize from "../../hooks/useScreenSize";

const variants = {
  hide: { opacity: 0, x: -40 },
  show: {
    opacity: [0, 0.2, 0.25, 1],
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeOut",
      staggerChildren: 0.9,
    },
  },
};

const Home = ({ goToSection }) => {
  const screenSize = useScreenSize();

  const [zoomInText, setZoomInText] = useState(false);
  const scrollProgressRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollProgressRef,
    offset: ["start end", "end start"],
  });
  // const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-25vh"]);
  const sectionScale = useTransform(scrollYProgress, [0, 1], ["100%", "83%"]);

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-15vh"]);
  const chevronOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.13],
    ["100%", "0%"]
  );

  return (
    <>
      <motion.section className="flex flex-col w-full z-10 sticky top-0 min-h-[100vh]  bg-accent place-content-start justify-center">
        <Socials />

        <motion.div
          style={{ scale: sectionScale }}
          className="flex flex-col-reverse items-center justify-center h-full gap-4 grow xl:flex-row "
        >
          <Tilt
            tiltReverse={true}
            transitionEasing="cubic-bezier(.03,.98,.52,.99)"
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            perspective={1000}
            onEnter={() => screenSize.width > 1080 && setZoomInText(true)}
            onLeave={() => setZoomInText(false)}
          >
            <motion.div className="relative flex flex-col max-w-5xl gap-0 py-2 sm:px-4 max-sm:pl-3 md:pr-12 md:pl-10 xl:py-12 h-fit xl:pl-12 xl:pr-16 2xl:pr-20 roboto ">
              <HtmlElement
                tag={"header"}
                blur={zoomInText}
                variants={variants}
                animate="show"
                initial="hide"
              >
                <HtmlElement tag={"h3"} blur={zoomInText} variants={variants}>
                  <motion.h3
                    className={
                      "text-lg md:text-xl lg:text-2xl  xl:text-3xl opacity-60 z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
                      (zoomInText
                        ? " scale-110 font-semibold opacity-100"
                        : " opacity-60")
                    }
                  >
                    Hello, my name is
                  </motion.h3>
                </HtmlElement>
                <HtmlElement variants={variants} tag={"h1"} blur={zoomInText}>
                  <motion.h3
                    className={
                      "text-4xl font-black md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl z-50 text-neutral-content brightness-125 transition-all duration-500  ease-[cubic-bezier(.03,.98,.52,.99)] " +
                      (zoomInText
                        ? " scale-115 font-bold opacity-100 brightness-125"
                        : " opacity-80")
                    }
                  >
                    Raul Vărzar
                  </motion.h3>
                </HtmlElement>
              </HtmlElement>
              <HtmlElement
                blur={zoomInText}
                tag={"p"}
                animate="show"
                initial="hide"
                variants={variants}
              >
                <motion.h3
                  className={
                    "text-sm md:text-md xl:text-xl  leading-tight font-thin 2xl:text-3xl z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
                    (zoomInText
                      ? " scale-105 font-semibold opacity-90"
                      : " opacity-70")
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
          </Tilt>
          <ProfilePhoto />
        </motion.div>

        <motion.div
          className="fixed bottom-6 sm:bottom-[8vh] inset-x-0"
          style={{ opacity: chevronOpacity }}
        >
          <ChevronButton goToSection={goToSection} />
        </motion.div>
      </motion.section>

      <div ref={scrollProgressRef} className="relative h-0"></div>
    </>
  );
};
export default Home;

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
      <motion.div className=" scale-100 flex flex-col bg-neutral-content overflow-hidden group  elevation-4 rounded-[20px] md:rounded-[30px] p-1 md:p-1.5 transition-all duration-300 ease-in-out hover:rotate-2 hover:scale-102">
        <div className="overflow-hidden rounded-[17px] md:rounded-[25px]">
          <img
            src={profilePhoto}
            className="z-50 object-cover h-56 transition-all duration-300 ease-in-out w-44 md:h-52 md:w-48 xl:h-96 xl:w-80 lg:scale-105 group-hover:scale-110 hover:-rotate-1"
            alt="profile-pic"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
