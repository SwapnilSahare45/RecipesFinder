import axios from 'axios';

const api = axios.create({
    baseURL: "https://recipesfinder-h79m.onrender.com/api",
});

export default api;