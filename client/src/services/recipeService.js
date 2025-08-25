import { api } from "./api";

export const addRecipeService = async (data) => {
    return await api.post("recipes/addRecipe", data);
}

export const recipesService = async () => {
    return await api.get("recipes/allRecipes");
};

export const recipeService = async (id) => {
    return await api.get(`recipes/recipeById/${id}`);
};

export const myRecipesService = async () => {
    return await api.get("recipes/myRecipes");
};

export const searchRecipesService = async (key) => {
    return await api.get(`recipes/search/${key}`);
};