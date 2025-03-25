import { create } from "zustand";

interface ApiStoreState {
  apiEndpoint: string;
  setApiEndpoint: (newEndpoint: string) => void;
}

export const useApiStore = create<ApiStoreState>((set) => ({
  apiEndpoint: typeof window !== "undefined" ? localStorage.getItem("apiEndpoint") || "" : "", // Ensure this runs only on the client
  setApiEndpoint: (newEndpoint) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("apiEndpoint", newEndpoint); // Save to localStorage
    }
    set({ apiEndpoint: newEndpoint });
  },
}));
