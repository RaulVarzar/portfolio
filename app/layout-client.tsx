"use client";

import { FooterProvider } from "@/components/Footer/FooterContext";
import ScrollContext from "@/components/SmoothScroll";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <FooterProvider>
      <ScrollContext>{children}</ScrollContext>
    </FooterProvider>
  );
}
