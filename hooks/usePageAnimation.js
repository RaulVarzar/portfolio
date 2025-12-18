"use client";

import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useTransition } from "@/app/providers/TransitionProvider";

export function usePageAnimation({ initial, enter, exit }) {
  const controls = useAnimation();
  const { register } = useTransition();

  // INITIAL → ENTER
  useEffect(() => {
    if (initial) controls.set(initial);
    if (enter) controls.start(enter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // EXIT (on navigation only)
  useEffect(() => {
    if (!exit) return;
    return register(() => controls.start(exit));
  }, [controls, exit, register]);

  return controls;
}
