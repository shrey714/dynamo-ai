import { create } from "zustand";

interface FRYState {
  FRYType: string;
  setFRYType: (type: string) => void;
}

export const useFRYTypeStore = create<FRYState>((set) => ({
  FRYType: "FRY14M", // Default value
  setFRYType: (type) => set({ FRYType: type }),
}));
