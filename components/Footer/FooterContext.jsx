"use client";

import React, { createContext, useContext, useState } from "react";

const FooterContext = createContext(null);

export const FooterProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openFooter = () => setIsOpen(true);
  const closeFooter = () => setIsOpen(false);

  const toggleFooter = () => setIsOpen((prev) => !prev);

  return (
    <FooterContext.Provider
      value={{ isOpen, openFooter, closeFooter, toggleFooter }}
    >
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = () => {
  const ctx = useContext(FooterContext);
  if (!ctx) throw new Error("useFooter must be used within FooterProvider");
  return ctx;
};

export default FooterContext;
