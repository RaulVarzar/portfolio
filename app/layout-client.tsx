"use client";

import { FooterProvider } from "@/components/Footer/FooterContext";
import ScrollContext from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { TransitionProvider } from "./providers/TransitionProvider";
import LenisProvider from "./providers/LenisProvider";
import HistoryInterceptor from "./providers/HistoryInterceptor";

export function RootLayoutClient({ children }) {
  return (
    <FooterProvider>
      <ScrollContext>
        <TransitionProvider>
          <LenisProvider>
            <HistoryInterceptor />
            <Navbar />
            {children}
          </LenisProvider>
        </TransitionProvider>
        <Footer />
      </ScrollContext>
    </FooterProvider>
  );
}
