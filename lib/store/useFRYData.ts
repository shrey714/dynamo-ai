import { create } from "zustand";
// import { FRY14MData } from "../data";

interface FRYDataState {
    FRYdata: [];
    setFRYData: (data: []) => void;
}

export const useFRYDataStore = create<FRYDataState>((set) => ({
    FRYdata: [], // Default value
    setFRYData: (data) => set({ FRYdata: data }),
}));
