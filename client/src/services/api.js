import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const api = axios.create({
    baseURL: process.env.API,
});

export default api;