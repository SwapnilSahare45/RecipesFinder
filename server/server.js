import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { dbConnect } from "./config/dbConnection.js";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js"

dbConnect();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

app.use("/api/auth", userRoutes);

app.listen(process.env.PORT || 4500, () => {
    console.log(`Server running on port ${process.env.PORT || 4500}`);
});