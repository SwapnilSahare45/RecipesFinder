import { create } from "zustand";
import { registerService } from "../services/userServices";

export const useUserStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    register: async (data) => {
        set({ isLoading: true, error: null });
        try {
            const response = await registerService(data);
            set({ user: response.data.user, isLoading: false, error: null });
            return { success: true };
        } catch (error) {
            set({ error: error.response?.data?.message, isLoading: false });
        }
    },
}))