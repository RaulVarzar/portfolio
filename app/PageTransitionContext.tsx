// @ts-nocheck
// PageTransitionContext.tsx
import { createContext, useContext, useRef } from "react";

const PageTransitionContext = createContext(null);

export function PageTransitionProvider({ children }) {
  const exits = useRef([]);

  const registerExit = (fn: ExitFn) => {
    exits.current.push(fn);
  };

  const runExit = async () => {
    await Promise.all(exits.current.map((fn) => fn()));
    exits.current = [];
  };

  return (
    <PageTransitionContext.Provider value={{ registerExit, runExit }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export const usePageTransition = () => {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) throw new Error("Missing PageTransitionProvider");
  return ctx;
};
