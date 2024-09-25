import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import ChatIcon from "./ChatIcon";
import Form from "./Form";
import { FooterLinks } from "./FooterLinks";

const Footer = () => {
  const activeRef = useRef(null);

  //

  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end end"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["10vh", "0vh"]);

  const y = useTransform(scrollYProgress, [0.3, 1], ["10vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0.1, 1], ["10%", "100%"]);

  const sectionY = useTransform(scrollYProgress, [0, 0.4], ["10%", "0%"]);

  return <FooterLinks openForm={() => openForm()} />;
};
export default Footer;
