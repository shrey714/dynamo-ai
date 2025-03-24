import { create } from "zustand";
import { FRY14MData } from "../data";

interface FRYDataState {
    FRYdata: unknown | null;
    setFRYData: (data: unknown) => void;
}

export const useFRYDataStore = create<FRYDataState>((set) => ({
    FRYdata: FRY14MData, // Default value
    setFRYData: (data) => set({ FRYdata: data }),
}));
