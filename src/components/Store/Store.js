import { create } from "zustand";

export const useLocationData = create((set) => ({
  locationData: [],
  setLocationData: (data) => set({ locationData: data }),
}));

export const useTheme = create((set) => ({
  theme: "light",
  setTheme: (data) => set({ theme: data }),
}));

export const useInput = create((set) => ({
  input: "",
  setInput: (data) => set({ input: data }),
}));

export const useRegionFilter = create((set) => ({
  regionFilter: "",
  setRegionFilter: (data) => set({ regionFilter: data }),
}));
