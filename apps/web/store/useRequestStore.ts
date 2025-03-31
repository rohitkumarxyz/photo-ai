"use client";

import { create } from "zustand";

interface RequestStore {
    requestIds: string[] | null;
    setRequestIds: (ids: string[] | null) => void;
    addRequestId: (id: string) => void;
    removeRequestId: (id: string) => void;
}

export const useRequestStore = create<RequestStore>((set) => ({
    requestIds: null,
    setRequestIds: (ids) => set({ requestIds: ids }),
    addRequestId: (id) => set((state) => ({
        requestIds: state.requestIds ? [...state.requestIds, id] : [id]
    })),
    removeRequestId: (id) => set((state) => ({
        requestIds: state.requestIds?.filter((requestId) => requestId !== id) || null
    })),
})); 