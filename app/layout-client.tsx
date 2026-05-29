"use client";

import { FooterProvider } from "@/components/Footer/FooterContext";
import ScrollContext from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { PageTransitionProvider } from "./PageTransitionContext";

export function RootLayoutClient({ children }) {
  return (
    <PageTransitionProvider>
      <FooterProvider>
        <ScrollContext>
          {children}
          <Footer />
        </ScrollContext>
      </FooterProvider>
    </PageTransitionProvider>
  );
}
