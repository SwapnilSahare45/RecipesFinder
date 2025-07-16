import api from "./api";

export const userRegisterService = async (user) => {
    try {
        const response = await api.post("/user/register", user);
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response.data.message };
    }
}

export const userLoginService = async (user) => {
    try {
        const response = await api.post("user/login", user);
        return { success: true, data: response.data };
    } catch (error) {
        console.log(error);
        return { success: false, error: error.response.data.message };
    }
}

export const userProfileService = async (token) => {
    try {
        const response = await api.get("/user/profile",{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response.data.message };
    }
}