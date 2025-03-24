import { create } from "zustand";

interface ColumnsActiveState {
    columns: number[];
    addColumn: (column: number) => void;
    removeColumn: (column: number) => void;
    setColumns: (columns: number[]) => void;
}

export const useColumnsActiveStore = create<ColumnsActiveState>((set) => ({
    columns: [],

    addColumn: (column) =>
        set((state) => ({
            columns: state.columns.includes(column)
                ? state.columns
                : [...state.columns, column],
        })),

    removeColumn: (column) =>
        set((state) => ({
            columns: state.columns.filter((col) => col !== column),
        })),

    setColumns: (columns) => set({ columns }),
}));
