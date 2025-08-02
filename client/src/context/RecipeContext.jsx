import { createContext, useReducer } from 'react';
import { actionType } from './actionType';
import { addRecipeService, allRecipesService, getRecipe, myRecipesService, recipeSearchService } from '../services/recipeServices';

const RecipeContext = createContext();

const initialState = {
    allRecipes: [],
    myRecipes: [], 
    fullRecipe: {},
    loading: false,
    error: null,
};

const recipeReducer = (state, action) => {
    switch (action.type) {
        case actionType.FETCH_ALLRECIPE_PENDING:
        case actionType.SEARCH_RECIPES_PENDING:
            return { ...state, loading: true, error: null };

        case actionType.FETCH_ALLRECIPE_SUCCESS:
        case actionType.SEARCH_RECIPES_SUCCESS:
            return { ...state, loading: false, allRecipes: action.payload };

        case actionType.FETCH_ALLRECIPE_FAILURE:
        case actionType.SEARCH_RECIPES_FAILURE:
            return { ...state, loading: false, error: action.payload, allRecipes: [] };

        case actionType.FETCH_MYRECIPE_PENDING:
            return { ...state, loading: true, error: null };

        case actionType.FETCH_MYRECIPE_SUCCESS:
            return { ...state, loading: false, myRecipes: action.payload };

        case actionType.FETCH_MYRECIPE_FAILURE:
            return { ...state, loading: false, error: action.payload, myRecipes: [] };

        case actionType.FETCH_RECIPEBYID_PENDING:
            return { ...state, loading: true, error: null };

        case actionType.FETCH_RECIPEBYID_SUCCESS:
            return { ...state, loading: false, fullRecipe: action.payload };

        case actionType.FETCH_RECIPEBYID_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}

export const RecipeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recipeReducer, initialState);

    const addRecipe = async (recipe) => {
        dispatch({ type: actionType.ADD_RECIPE_PENDING });
        try {
            const response = await addRecipeService(recipe);
            if (response.success) {
                dispatch({ type: actionType.ADD_RECIPE_SUCCESS, payload: response.data });
                return { success: true, data: response.data };
            } else {
                dispatch({ type: actionType.ADD_RECIPE_FAILURE, payload: response.error });
                return { success: false, error: response.error };
            }
        } catch (error) {
            const errMsg = "An unexpected error occurred.";
            dispatch({ type: actionType.FETCH_ALLRECIPE_FAILURE, payload: error });
            return { success: false, error: errMsg }
        }
    }

    const fetchAllRecipes = async () => {
        dispatch({ type: actionType.FETCH_ALLRECIPE_PENDING });
        try {
            const response = await allRecipesService();
            if (response.success) {
                dispatch({ type: actionType.FETCH_ALLRECIPE_SUCCESS, payload: response.data.recipes });
                return { success: true, data: response.data };
            } else {
                dispatch({ type: actionType.FETCH_ALLRECIPE_FAILURE, payload: response.error });
                return { success: false, error: response.error };
            }
        } catch (error) {
            const errMsg = "An unexpected error occurred.";
            dispatch({ type: actionType.FETCH_ALLRECIPE_FAILURE, payload: errMsg });
            return { success: false, error: errMsg }
        }
    }

    const fetchRecipeById = async (id) => {
        dispatch({ type: actionType.FETCH_RECIPEBYID_PENDING });
        try {
            const response = await getRecipe(id);
            if (response) {
                dispatch({ type: actionType.FETCH_RECIPEBYID_SUCCESS, payload: response.data });
                return { success: true, data: response.data };
            } else {
                dispatch({ type: actionType.FETCH_RECIPEBYID_FAILURE, payload: response.error });
                return { success: false, error: response.error };
            }
        } catch (error) {
            const errMsg = "An unexpected error occurred.";
            dispatch({ type: actionType.FETCH_ALLRECIPE_FAILURE, payload: errMsg });
            return { success: false, error: errMsg }
        }
    }

    const fetchMyRecipes = async (userId) => {
        dispatch({ type: actionType.FETCH_MYRECIPE_PENDING });
        try {
            const response = await myRecipesService(userId);
            if (response.success) {
                dispatch({ type: actionType.FETCH_MYRECIPE_SUCCESS, payload: response.data.myRecipes });
                return { success: true, data: response.data };
            } else {
                dispatch({ type: actionType.FETCH_MYRECIPE_FAILURE, payload: response.error });
                return { success: false, error: response.error };
            }
        } catch (error) {
            const errMsg = "An unexpected error occurred.";
            dispatch({ type: actionType.FETCH_MYRECIPE_FAILURE, payload: errMsg });
            return { success: false, error: errMsg };
        }
    }

    const searchRecipe = async (key) => {
        dispatch({ type: actionType.SEARCH_RECIPES_PENDING });
        try {
            const response = await recipeSearchService(key);
            if (response.success) {
                dispatch({ type: actionType.SEARCH_RECIPES_SUCCESS, payload: response.data });
                return { success: true, data: response.data };
            } else {
                dispatch({ type: actionType.SEARCH_RECIPES_FAILURE, payload: response.error });
                return { success: false, error: response.error };
            }
        } catch (error) {
            const errMsg = "An unexpected error occurred.";
            dispatch({ type: actionType.SEARCH_RECIPES_FAILURE, payload: errMsg });
            return { success: false, error: errMsg };
        }
    }

    return (
        <RecipeContext.Provider value={{ ...state, addRecipe, fetchAllRecipes, fetchRecipeById, fetchMyRecipes, searchRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
}

export default RecipeContext;