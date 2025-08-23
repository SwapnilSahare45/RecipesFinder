import {api} from "./api";

export const registerService = async (data) => {
    return await api.post("auth/register", data);
};