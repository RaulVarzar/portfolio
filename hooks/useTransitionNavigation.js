import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTransitionStore } from "./transitionStore";

export function useTransitionNavigation() {
  const router = useRouter();
  const destination = useTransitionStore((state) => state.destination);
  const clearDestination = useTransitionStore(
    (state) => state.clearDestination
  );
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    if (destination) {
      setShouldExit(true);
    }
  }, [destination]);

  const handleExitComplete = () => {
    if (destination) {
      router.push(destination);
      clearDestination();
    }
  };

  return { shouldExit, handleExitComplete };
}
