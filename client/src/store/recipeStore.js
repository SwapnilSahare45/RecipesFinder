import { create } from "zustand";
import { addRecipeService, myRecipesService, recipeService, recipesService, searchRecipesService } from "../services/recipeService";

export const useRecipeStore = create((set) => ({
    recipe: null,
    recipes: [],
    isLoading: false,
    error: null,

    addRecipe: async (data) => {
        set({ isLoading: true, error: null });
        try {
            await addRecipeService(data);
            set({ isLoading: false, error: null });
            return { success: true };
        } catch (error) {
            set({ error: error.response?.data?.message, isLoading: false });
        }
    },

    getRecipes: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await recipesService();
            set({ recipes: response.data.recipes, isLoading: false, error: null });
        } catch (error) {
            set({ error: error.response?.data?.message, isLoading: false });
        }
    },

    getRecipe: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await recipeService(id);
            set({ recipe: response.data.recipe, isLoading: false, error: null });
        } catch (error) {
            set({ error: error.response?.data?.message, isLoading: false });
        }
    },

    myRecipes: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await myRecipesService();
            set({ recipes: response.data.myRecipes, isLoading: false, error: null });
        } catch (error) {
            set({ error: error.response?.data?.message, isLoading: false });
        }
    },

    searchRecipes: async (key) => {
        set({ isLoading: true, error: null });
        try {
            const response = await searchRecipesService(key);
            set({ recipes: response.data.recipes, isLoading: false, error: null });
        } catch (error) {
            set({ error: error.response?.data?.message, isLoading: false });
        }
    }
}))