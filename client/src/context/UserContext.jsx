import { createContext, useEffect, useReducer } from "react";
import { userLoginService, userRegisterService, userProfileService } from "../services/userServices";
import { actionType } from "./actionType";

const UserContext = createContext();

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const userReducer = (state, action) => {
    switch (action.type) {
        case actionType.USER_REGISTER_PENDING:
        case actionType.USER_LOGIN_PENDING:
            return { ...state, loading: true, error: null };

        case actionType.USER_REGISTER_SUCCESS:
        case actionType.USER_LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload, isAuthenticated: true };

        case actionType.USER_REGISTER_FAILURE:
        case actionType.USER_LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case actionType.USER_LOGOUT:
            return { ...state, user: null, isAuthenticated: false, loading: false, error: null };

        default:
            return state;
    }
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const userRegister = async (user) => {
        dispatch({ type: actionType.USER_REGISTER_PENDING });
        try {
            const response = await userRegisterService(user);
            if (response.success) {
                dispatch({ type: actionType.USER_REGISTER_SUCCESS, payload: response.data });
                return { success: true, data: response.data };
            } else {
                dispatch({ type: actionType.USER_REGISTER_FAILURE, payload: response.error });
                return { success: false, error: response.error };
            }
        } catch (error) {
            const errMsg = "An unexpected error occurred.";
            dispatch({ type: actionType.USER_REGISTER_FAILURE, payload: errMsg });
            return { success: false, error: errMsg };
        }
    }

    const userLogin = async (user) => {
        dispatch({ type: actionType.USER_LOGIN_PENDING });
        try {
            const response = await userLoginService(user);
            if (response.success) {
                localStorage.setItem('token', response.data.token);
                dispatch({ type: actionType.USER_LOGIN_SUCCESS, payload: response.data });
                return { success: true, data: response.data };
            } else {
                dispatch({ type: actionType.USER_LOGIN_FAILURE, payload: response.error });
                return { success: false, error: response.error };
            }
        } catch (error) {
            const errMsg = "An unexpected error occurred.";
            dispatch({ type: actionType.USER_LOGIN_FAILURE, payload: errMsg });
            return { success: false, error: errMsg };
        }
    }

    const userProfile = async () => {
        const token = localStorage.getItem('token');
        try {
            if (token) {
                const response = await userProfileService(token);
                if (response.success) {
                    dispatch({ type: actionType.USER_LOGIN_SUCCESS, payload: response.data.user });
                    return { success: true, data: response.data };
                } else {
                    dispatch({ type: actionType.USER_LOGIN_FAILURE, payload: response.error });
                    return { success: false, error: response.error };
                }
            } else {
                return { success: false, error: response.error }
            }
        } catch (error) {
            const errMsg = "An unexpected error occurred.";
            dispatch({ type: actionType.USER_LOGIN_FAILURE, payload: errMsg });
            return { success: false, error: errMsg };
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({ type: actionType.USER_LOGOUT });
    };

    useEffect(() => {
        userProfile();
    }, []);

    return (
        <UserContext.Provider value={{ ...state, userRegister, userLogin, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;