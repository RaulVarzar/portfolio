import { useRouter } from "next/navigation";
import { usePageTransition } from "../app/PageTransitionContext";

export function useAnimatedRouter() {
  const router = useRouter();
  const { runExit } = usePageTransition();

  return async (href: string) => {
    await runExit();
    router.push(href);
  };
}
