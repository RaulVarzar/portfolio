import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootLayoutClient } from "./layout-client";
import ScrollContext from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raul Vărzar - Web Designer & Developer",
  description: "Portfolio showcasing web design and development projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollContext>{children}</ScrollContext>
      </body>
    </html>
  );
}
