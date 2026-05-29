import { motion, useAnimation } from "framer-motion";
import { usePageTransition } from "@/app/PageTransitionContext";
import { useEffect, useRef } from "react";

export function AnimatedBox({
  children,
  delay = 0,
  duration = 0.5,
  scale = 1,
  y = 0,
}) {
  const controls = useAnimation();
  const { registerExit } = usePageTransition();
  const registered = useRef(false);

  useEffect(() => {
    if (registered.current) return;
    registered.current = true;
    registerExit(() =>
      controls.start({
        opacity: 0,
        y,
        scale,
        transition: { duration, delay, ease: [0.75, 0, 0.25, 1] },
      }),
    );
  }, []);

  return <motion.div animate={controls}>{children}</motion.div>;
}
