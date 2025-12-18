"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "./TransitionProvider";

export default function HistoryInterceptor() {
  const router = useRouter();
  const { start } = useTransition();

  useEffect(() => {
    const onPopState = async () => {
      const href = window.location.pathname + window.location.search;

      await start(href);
      router.push(href);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [router, start]);

  return null;
}
