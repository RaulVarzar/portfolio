"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.2,
  wheelMultiplier: 0.75,
  touchMultiplier: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  syncTouch: true,
  touchInertiaMultiplier: 3,
});

export function LenisProvider() {
  useEffect(() => {
    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return null;
}

export default lenis;
