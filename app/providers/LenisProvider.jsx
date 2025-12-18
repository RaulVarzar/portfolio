"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { useTransition } from "./TransitionProvider";

export default function LenisProvider({ children }) {
  const { setLenis } = useTransition();

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    setLenis(lenis);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [setLenis]);

  return <>{children}</>;
}
