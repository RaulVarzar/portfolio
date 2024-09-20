import profilePhoto from "../../assets/profile-pic.jpg";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HtmlElement from "./HtmlElement";
import { forwardRef, useEffect, useRef, useState } from "react";
import ChevronButton from "./ChevronButton";
import Tilt from "react-parallax-tilt";
import BubbleText from "../BubbleText/BubbleText";
import { Socials } from "./Socials";

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

const Home = forwardRef(({ makeActive, goToSection }, ref) => {
  const [zoomInText, setZoomInText] = useState(false);
  const isInView = useInView(ref);
  const scrollProgressRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollProgressRef,
    offset: ["start end", "end start"],
  });
  const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-15vh"]);
  const sectionScale = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-15vh"]);
  const chevronOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.15],
    ["100%", "0%"]
  );

  const brightness = 55;

  return (
    <>
      <motion.section
        style={{ filter: "brightness(100%)" }}
        className="grid w-full sticky top-0  max-md:min-h-[100svh] sm:h-[95vh] bg-accent place-content-center justify-center"
      >
        <Socials />
        <motion.div style={{ y: sectionY, scale: sectionScale }}>
          <motion.div className="relative flex flex-col justify-center py-8 pb-8 md:pb-12 ">
            <motion.div className="flex flex-col-reverse items-center content-center justify-center gap-4 align-middle h-fit xl:flex-row">
              <motion.div className="px-2 roboto">
                <Tilt
                  tiltReverse={true}
                  transitionEasing="cubic-bezier(.03,.98,.52,.99)"
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={7}
                  perspective={1000}
                  onEnter={() => setZoomInText(true)}
                  onLeave={() => setZoomInText(false)}
                >
                  <motion.div
                    ref={ref}
                    className="relative flex flex-col max-w-5xl gap-0 py-2 sm:px-4 md:pr-12 md:pl-10 xl:py-12 h-fit xl:pl-12 xl:pr-16 2xl:pr-20 roboto "
                  >
                    <HtmlElement
                      tag={"header"}
                      blur={zoomInText}
                      variants={variants}
                      animate="show"
                      initial="hide"
                    >
                      <HtmlElement
                        tag={"h3"}
                        blur={zoomInText}
                        variants={variants}
                      >
                        <motion.h3
                          className={
                            "text-lg md:text-xl xl:text-2xl opacity-60 z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
                            (zoomInText
                              ? " scale-110 font-semibold opacity-100"
                              : " opacity-60")
                          }
                        >
                          Hello, my name is
                        </motion.h3>
                      </HtmlElement>
                      <HtmlElement
                        variants={variants}
                        tag={"h1"}
                        blur={zoomInText}
                      >
                        <motion.h3
                          className={
                            "text-4xl font-semibold md:text-5xl xl:6xl 2xl:text-7xl z-50 text-neutral-content brightness-150 transition-all duration-500  ease-[cubic-bezier(.03,.98,.52,.99)] " +
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
                          "text-sm md:text-md xl:text-xl font-thin 2xl:text-2xl z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{
                  opacity: [0, 0, 1],
                  x: 0,
                  scale: 1,
                  transition: { delay: 0.5, duration: 1.5, ease: "easeInOut" },
                }}
                className="p-2"
              >
                <motion.div className=" scale-100 flex flex-col bg-base-content overflow-hidden group delay-100 elevation-4 rounded-3xl  hover:rounded-3xl p-2 transition-all duration-500 ease-in-out hover:scale-105">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={profilePhoto}
                      className="z-50 object-cover h-40 transition-all duration-500 ease-in-out delay-100 w-36 md:h-52 md:w-48 xl:h-80 xl:w-64 lg:scale-110 group-hover:scale-100"
                      alt="profile-pic"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="fixed bottom-[8vh] inset-x-0"
          style={{ opacity: chevronOpacity }}
        >
          <ChevronButton goToSection={goToSection} />
        </motion.div>
      </motion.section>

      <div ref={scrollProgressRef} className="h-0 relative"></div>
    </>
  );
});

export default Home;
