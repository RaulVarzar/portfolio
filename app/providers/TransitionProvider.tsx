"use client";

import { createContext, useContext, useRef } from "react";
import type Lenis from "lenis";

const TransitionContext = createContext<{
  register: (fn: () => Promise<void>) => () => void;
  start: (href: string) => Promise<void>;
  setLenis: (lenis: Lenis) => void;
} | null>(null);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const exits = useRef(new Set<() => Promise<void>>());
  const lenisRef = useRef<Lenis | null>(null);

  const register = (fn: () => Promise<void>) => {
    exits.current.add(fn);
    return () => exits.current.delete(fn);
  };

  const setLenis = (lenis: Lenis) => {
    lenisRef.current = lenis;
  };

  const start = async (href: string) => {
    // 1️⃣ Update URL immediately
    window.history.pushState({}, "", href);

    // 2️⃣ Stop Lenis cleanly
    lenisRef.current?.stop();

    // 3️⃣ Run element exit animations
    await Promise.all([...exits.current].map((fn) => fn()));

    // 4️⃣ Resume Lenis
    lenisRef.current?.start();
  };

  return (
    <TransitionContext.Provider value={{ register, start, setLenis }}>
      {children}
    </TransitionContext.Provider>
  );
}

export const useTransition = () => {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransition must be used inside provider");
  return ctx;
};
