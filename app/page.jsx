"use client";
import Home from "@/components/Home/Home";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer/Footer";

import PageTransitionAnimation from "@/components/PageTransitionAnimation";

export default function RootPage() {
  return (
    <PageTransitionAnimation>
      <Home />
    </PageTransitionAnimation>
  );
}
