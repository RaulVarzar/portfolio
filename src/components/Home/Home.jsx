import profilePhoto from "../../assets/profile-pic.jpg";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import HtmlElement from "./HtmlElement";
import { forwardRef, useEffect, useRef, useState } from "react";
import codePhoto from "../../assets/code-editor3.png";
import ChevronButton from "./ChevronButton";
import Tilt from "react-parallax-tilt";
import { BottomMenu } from "./BottomMenu";
import { HamburgerButton } from "../Hamburger/HamburgerButton";

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

  useEffect(() => {
    if (isInView) {
      makeActive("home");
    }
  }, [isInView]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(spring, [0, 1], ["0vh", "30vh"]);
  const headerY = useTransform(spring, [0, 1], ["0vh", "45vh"]);
  const imgOpacity = useTransform(spring, [0.4, 0.8], ["100%", "20%"]);
  const headerOpacity = useTransform(spring, [0.4, 0.8], ["100%", "50%"]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative grid w-full h-[95vh] rounded-b-3xl  overflow-hidden text-4xl bg-accent place-content-start justify-center text-info"
    >
      <ChevronButton goToSection={goToSection} />
      <HamburgerButton />
      <motion.div className="relative flex flex-col min-h-screen py-8 pb-8 md:pb-12 gap-x-10 justify-evenly">
        <motion.div className="flex flex-col-reverse items-center content-center justify-center gap-4 align-middle xl:flex-grow xl:flex-row">
          <motion.div style={{ y: headerY, opacity: headerOpacity }}>
            <Tilt
              tiltReverse={true}
              transitionEasing="cubic-bezier(.03,.98,.52,.99)"
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              perspective={1000}
              onEnter={() => setZoomInText(true)}
              onLeave={() => setZoomInText(false)}
            >
              <motion.div
                ref={ref}
                className="relative flex flex-col max-w-5xl gap-0 py-2 sm:px-4 md:pr-12 md:pl-10 xl:py-20 h-fit xl:pl-12 xl:pr-16 2xl:pr-20 roboto "
              >
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
                        "text-lg md:text-xl xl:text-2xl opacity-60 z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident odio sequi ut soluta.
                  </motion.h3>
                </HtmlElement>
              </motion.div>
            </Tilt>
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, x: 100, scale: 0.9 }}
            // animate={{
            //   opacity: 1,
            //   x: 0,
            //   scale: 1,
            //   transition: { delay: 1, duration: 0.5, ease: "easeOut" },
            // }}
            style={{ y, opacity: imgOpacity }}
            className="p-2"
          >
            <motion.div className=" scale-100 overflow-hidden group  border-8 delay-100 shadow-lg rounded-3xl sm:rounded-[60px] hover:rounded-3xl border-base-100 transition-all duration-500 ease-in-out hover:scale-105">
              <img
                src={profilePhoto}
                className="z-50 object-cover h-40 transition-all duration-500 ease-in-out delay-100 w-36 md:h-52 md:w-48 xl:h-80 xl:w-72 lg:scale-110 group-hover:scale-100"
                alt="profile-pic"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* <BottomMenu goToSection={goToSection} /> */}
      </motion.div>
    </motion.section>
  );
});

export default Home;
