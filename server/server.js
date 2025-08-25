import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { dbConnect } from "./config/dbConnection.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js"
import recipeRoutes from "./routes/recipeRoutes.js";

dbConnect();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", userRoutes);
app.use("/api/recipes", recipeRoutes)

app.listen(process.env.PORT || 4500, () => {
    console.log(`Server running on port ${process.env.PORT || 4500}`);
});