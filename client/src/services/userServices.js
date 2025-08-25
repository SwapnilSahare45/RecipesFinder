import { api } from "./api";

export const registerService = async (data) => {
    return await api.post("auth/register", data);
};

export const loginService = async (data) => {
    return await api.post("auth/login", data);
};

export const profileService = async () => {
    return await api.get("auth/profile");
}

export const logoutService = async () => {
    return await api.post("auth/logout");
}