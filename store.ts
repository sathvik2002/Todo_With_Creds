import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface storeState {
  budget: number;
  setBudget: (cost: number) => void;
  incrementBudget: (cost: number) => void;
}

export const store = create<storeState>()(
  persist(
    (set, get) => ({
      budget: 0,
      setBudget: (cost: number) => {
        set((state) => ({ budget: get().budget - cost }));
      },
      incrementBudget: (cost: number) => {
        set((state) => ({ budget: get().budget + cost }));
      },
    }),
    {
      name: "budget",
    }
  )
);
