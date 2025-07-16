import axios from 'axios';

// Load environment variables from .env file
dotenv.config();

const api = axios.create({
    baseURL: import.meta.env.API,
});

export default api;