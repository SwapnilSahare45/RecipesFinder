import { create } from "zustand";
import { loginService, logoutService, profileService, registerService } from "../services/userServices";

export const useUserStore = create((set) => ({
    user: null,
    isAuthenticated: null,
    isLoading: false,
    isProfileLoading: false,
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
    },

    profile: async () => {
        set({ isProfileLoading: true, error: null });
        try {
            const response = await profileService();
            set({ user: response.data, isAuthenticated: true, isProfileLoading: false, error: null });
        } catch (error) {
            set({ error: error.response?.data?.message, isAuthenticated: false, isProfileLoading: false });
        }
    },

    logout: async () => {
        await logoutService();
        set({ user: null, isAuthenticated: false, isProfileLoading: false, error: null })
        return { success: true };
    }
}))