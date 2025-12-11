import profilePhoto from "../../assets/profile-pic.jpg";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useFooter } from "../../../components/Footer/FooterContext";
import HtmlElement from "./HtmlElement";
import { useRef, useState } from "react";
import ChevronButton from "./ChevronButton";
import Tilt from "react-parallax-tilt";
import BubbleText from "../BubbleText/BubbleText";
import { Socials } from "./Socials";
import useScreenSize from "../../src/hooks/useScreenSize";
import BottomControls from "./BottomControls";

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
  const screenSize = useScreenSize();
  const { isOpen: footerOpen } = useFooter();

  const [zoomInText, setZoomInText] = useState(false);
  const scrollProgressRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollProgressRef,
    offset: ["start end", "end start"],
  });
  // const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-25vh"]);
  // const sectionScale = useTransform(scrollYProgress, [0, 0.2], ["100%", "96%"]);
  // const sectionY = useTransform(scrollYProgress, [0.2, 0.8], ["0vh", "20vh"]);
  // const sectionBorderRadius = useTransform(
  //   scrollYProgress,
  //   [0, 0.3],
  //   ["0vw", "1vw"]
  // );

  const brightnessRaw = useTransform(scrollYProgress, [0.1, 0.7], [0, 5]);
  const filter = useMotionTemplate`blur(${brightnessRaw}px)`;

  return (
    <>
      <motion.section
        className="flex flex-col w-full z-10 sticky top-0 min-h-[100vh] bg-base-100  place-content-start justify-center"
        animate={
          footerOpen
            ? { opacity: 0.55, scale: 0.96, y: "3%", filter: "blur(4px)" }
            : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: 1.1, ease: [0.6, 0, 0.2, 1] }}
      >
        <Socials />

        <motion.div
          style={{ filter }}
          className="flex flex-col-reverse items-center justify-center h-full gap-4 px-2 border-t border-opacity-0 border-base-content sm:px-4 md:px-8 grow xl:flex-row "
        >
          <Tilt
            tiltReverse={true}
            transitionEasing="cubic-bezier(.03,.98,.52,.99)"
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            perspective={2000}
            onEnter={() => screenSize.width > 1080 && setZoomInText(true)}
            onLeave={() => setZoomInText(false)}
          >
            <HTMLText zoomInText={zoomInText} />
          </Tilt>
          <ProfilePhoto />
        </motion.div>

        <BottomControls />
      </motion.section>

      <div ref={scrollProgressRef} className="relative h-0"></div>
    </>
  );
};
export default Home;

const HTMLText = ({ zoomInText }) => {
  return (
    <motion.div className="relative flex flex-col max-w-3xl gap-0 py-2 roboto md:max-w-4xl 2xl:max-w-6xl sm:px-4 max-sm:pl-3 md:pr-12 md:pl-10 h-fit xl:pl-12 xl:pr-16 2xl:pr-20 ">
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
              "text-lg md:text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl opacity-60 z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
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
              "text-4xl font-bold roboto md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl 2xl:text-8xl 3xl:text-9xl z-50 text-neutral-content brightness-125 transition-all duration-500  ease-[cubic-bezier(.03,.98,.52,.99)] " +
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
      <motion.div className=" scale-100 flex flex-col border-2 border-neutral-content overflow-hidden group  elevation-4 rounded-[8px] md:rounded-[14px] p-1 md:p-1.5 transition-all duration-300 ease-in-out group hover:rotate-2 hover:scale-102">
        <div className="overflow-hidden rounded-[10px] md:rounded-[11px]">
          <img
            src={profilePhoto}
            className="z-50 object-cover h-56 transition-all duration-300 ease-in-out w-44 md:h-52 md:w-48 xl:h-96 xl:w-80 lg:scale-105 group-hover:scale-110 group-hover:-rotate-3"
            alt="profile-pic"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
