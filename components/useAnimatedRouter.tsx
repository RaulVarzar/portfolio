import { usePathname, useRouter } from "next/navigation";
import { usePageTransition } from "../app/PageTransitionContext";

export function useAnimatedRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const { runExit } = usePageTransition();
  return async (href: string) => {
    if (href === pathname) return; // already here, don't play an exit with nothing to enter
    await runExit();
    router.push(href);
  };
}
