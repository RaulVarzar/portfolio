// lib/transitionStore.ts
import { create } from "zustand";

type TransitionStore = {
  destination: string | null;
  triggerExit: (path: string) => void;
  clearDestination: () => void;
};

export const useTransitionStore = create<TransitionStore>((set) => ({
  destination: null,
  triggerExit: (path) => set({ destination: path }),
  clearDestination: () => set({ destination: null }),
}));
