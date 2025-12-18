"use client";

import { useFooter } from "@/components/Footer/FooterContext";
import NavButton from "./NavButton";
import ContactButton from "./ContactButton/ContactButton";
import { motion } from "framer-motion";
import { TiPlusOutline } from "react-icons/ti";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const bgVariants = {
    idle: {
      y: "-140%",
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: { y: "0%", transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] } },
  };
  const labelVariants = {
    idle: {
      opacity: 0.6,
      scale: 1,
      transition: { duration: 0.43, ease: [0.8, 0, 0.2, 1] },
    },
    hover: {
      opacity: 1,
      scale: 1.04,
      transition: { duration: 0.65, ease: [0.8, 0, 0.2, 1] },
    },
  };
  const pathname = usePathname();

  const { toggleFooter } = useFooter();

  return (
    <motion.nav className="fixed z-[99999] top-0 inset-x-0 flex items-center justify-end w-full gap-4 md:gap-6 xl:gap-8 py-6 px-2 sm:px-4 lg:px-8 xl:py-8 3xl:py-10 mx-auto max-w-screen-3xl">
      {/* <NavButton label="My skills">
        <TiPlusOutline />
      </NavButton> */}
      <NavButton
        label={pathname === "/projects" ? "Home" : "Projects"}
        link={pathname === "/projects" ? "/" : "projects"}
      >
        <TiPlusOutline />
      </NavButton>

      <ContactButton onClick={toggleFooter} />
    </motion.nav>
  );
};

export default Navbar;
