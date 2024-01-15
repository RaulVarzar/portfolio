import profilePhoto from "../../assets/profile-pic.jpg";
import { motion, useInView } from "framer-motion";
import HtmlElement from "./HtmlElement";
import { forwardRef, useEffect, useState } from "react";
import codePhoto from "../../assets/code-editor3.png";
import ChevronButton from "./ChevronButton";
import Tilt from "react-parallax-tilt";
import { BottomMenu } from "./BottomMenu";

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

  return (
    <motion.section className="relative grid w-full h-screen overflow-hidden text-4xl section place-content-center text-info snap-center">
      <motion.div
        layout="position"
        className="flex flex-col min-h-screen py-8 gap-x-10 justify-evenly "
      >
        <motion.img
          src={codePhoto}
          alt="code"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
          className="absolute object-cover w-auto w-3/4 -z-1 lg:w-1/2 2xl:w-1/3 top-20 right-8 xl:right-24 brightness-50"
        />
        <motion.div
          layout
          className="flex flex-col-reverse items-center content-center justify-center gap-4 align-middle xl:flex-grow xl:flex-row"
        >
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
              layout
              ref={ref}
              className="relative flex flex-col max-w-5xl gap-0 py-2 sm:px-4 md:pr-16 md:pl-10 xl:py-20 h-fit xl:pl-12 xl:pr-20 2xl:pr-36 roboto "
            >
              <HtmlElement
                tag={"header"}
                blur={zoomInText}
                variants={variants}
                whileInView="show"
                initial="hide"
              >
                <HtmlElement tag={"h3"} blur={zoomInText} variants={variants}>
                  <motion.h3
                    variants={variants}
                    className={
                      "text-lg md:text-xl xl:text-2xl opacity-60 z-50 text-primary transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
                      (zoomInText
                        ? " scale-115 font-semibold opacity-100"
                        : " opacity-60")
                    }
                  >
                    Hello, my name is
                  </motion.h3>
                </HtmlElement>
                <HtmlElement variants={variants} tag={"h1"} blur={zoomInText}>
                  <motion.h3
                    variants={variants}
                    className={
                      "text-4xl font-semibold md:text-5xl xl:6xl 2xl:text-7xl z-50 text-neutral-content brightness-150 transition-all duration-500  ease-[cubic-bezier(.03,.98,.52,.99)] " +
                      (zoomInText
                        ? " scale-120 font-bold opacity-100 brightness-125"
                        : " opacity-75")
                    }
                  >
                    Raul Vărzar
                  </motion.h3>
                </HtmlElement>
              </HtmlElement>
              <HtmlElement
                blur={zoomInText}
                tag={"p"}
                whileInView="show"
                initial="hide"
                variants={variants}
              >
                <motion.h3
                  variants={variants}
                  className={
                    "text-lg md:text-xl font-thin xl:text-2xl z-50 text-neutral-content transition-all duration-500 ease-[cubic-bezier(.03,.98,.52,.99)]  " +
                    (zoomInText
                      ? " scale-105 font-semibold opacity-90"
                      : " opacity-60")
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident odio sequi ut soluta.
                </motion.h3>
              </HtmlElement>
            </motion.div>
          </Tilt>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { delay: 1, duration: 0.5, ease: "easeOut" },
            }}
          >
            <div className="  scale-100 overflow-hidden group  border-8 delay-100 shadow-lg rounded-3xl sm:rounded-[60px] hover:rounded-3xl border-base-100 transition-all duration-500 ease-in-out hover:scale-105">
              <img
                src={profilePhoto}
                className="z-50 object-cover h-40 transition-all duration-500 ease-in-out delay-100 w-36 md:h-52 md:w-48 xl:h-72 xl:w-64 lg:scale-110 group-hover:scale-100"
                alt="profile-pic"
              />
            </div>
          </motion.div>
        </motion.div>

        <BottomMenu goToSection={goToSection} />
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.4 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
      <ChevronButton goToSection={goToSection} />
    </motion.section>
  );
});

export default Home;
