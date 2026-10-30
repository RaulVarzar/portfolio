"use client";

import { useRouter } from "next/navigation";
import { usePageTransition } from "@/app/PageTransitionContext";

const HomeButton = () => {
  const router = useRouter();
  const { runExit } = usePageTransition();

  const handleClick = async () => {
    await runExit();
    router.push("/");
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-x-0 bottom-0 py-4 text-center bg-base-200 border-t-1 border-neutral-content border-opacity-15 z-[999999999] cursor-pointer hover:opacity-80 transition-opacity"
    >
      <span className="text-lg font-light opacity-80 text-neutral-content">
        Return
      </span>
    </div>
  );
};

export default HomeButton;
