"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "@/app/providers/TransitionProvider";

export default function TransitionLink({ href, children, className }) {
  const router = useRouter();
  const { start } = useTransition();

  const onClick = async (e) => {
    e.preventDefault();

    await start(href);
    router.push(href);
  };

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
