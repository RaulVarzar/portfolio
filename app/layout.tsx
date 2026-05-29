import { Inter, Roboto_Mono } from "next/font/google";
import { RootLayoutClient } from "./layout-client";
import "./globals.css";
import { LenisProvider } from "./lib/lenis";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Raul Vărzar - Web Designer & Developer",
  description: "Portfolio showcasing web design and development projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.variable}`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
