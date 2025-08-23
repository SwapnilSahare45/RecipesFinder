import express from "express";
import {login, register}  from "../controllers/userController.js";
import { protectRoute } from "../middleware/protectRouteMiddleware.js";

// Create a new router object
const router = express.Router();

// Router for handling different http requests
router.post("/register", register);
router.post("/login", login);
// router.get("/profile", protectRoute, userProfile);

export default router;