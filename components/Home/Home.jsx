"use client";

import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Socials } from "@/components/Home/Socials";
import useScreenSize from "@/hooks/useScreenSize";
import { useFooter } from "@/components/Footer/FooterContext";
import ProfilePhoto from "@/components/Home/ProfilePhoto";
import HTMLText from "@/components/Home/HTMLText";
import GridBackground from "@/components/Home/GridBackground";
import Navbar from "../Navbar/Navbar";
import ContentWrapper from "./ContentWrapper";

const Home = () => {
  const { isOpen } = useFooter();
  const screenSize = useScreenSize();
  const [zoomInText, setZoomInText] = useState(false);

  return (
    <>
      <Navbar />
      <section className=" min-h-[100dvh]  z-10 flex flex-col relative justify-center w-full grow  place-content-start">
        <GridBackground />
        <ContentWrapper isOpen={isOpen}>
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
        </ContentWrapper>

        <Socials />
      </section>
    </>
  );
};
export default Home;
