import api from './api';

export const addRecipeService = async (recipeData) => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.post('/recipe/addRecipe', recipeData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response.data.message };
    }
}

export const allRecipesService = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.get('/recipe/allRecipes', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response.data.message };
    }
}

export const getRecipe = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.get(`/recipe/recipeById/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response.data.message };
    }
}

export const myRecipesService = async (userId) => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.get('/recipe/myRecipes', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params:{
                userId,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response.data.message };
    }
}

export const recipeSearchService = async (key) => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.get(`/recipe/search/${key}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return { success: true, data: response.data.recipes };
    } catch (error) {
        return { success: false, error: error.response.data.message };
    }
}