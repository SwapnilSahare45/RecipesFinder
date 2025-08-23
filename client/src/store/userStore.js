import { create } from "zustand";
import { loginService, registerService } from "../services/userServices";

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

    login: async (data) => {
        set({ isLoading: true, error: null });
        try {
            const response = await loginService(data);
            set({ user: response.data.user, isAuthenticated: true, isLoading: false, error: null });
            return { success: true };
        } catch (error) {
            set({ error: error.response?.data?.message, isLoading: false });
        }
    }
}))