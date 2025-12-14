"use client";

import { FooterProvider } from "@/components/Footer/FooterContext";
import ScrollContext from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export function RootLayoutClient({ children }) {
  return (
    <FooterProvider>
      <ScrollContext>
        <Navbar />
        {children}
        <Footer />
      </ScrollContext>
    </FooterProvider>
  );
}
