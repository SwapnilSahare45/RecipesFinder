import express from "express";
import { login, logout, profile, register } from "../controllers/userController.js";
import { protect } from "../middleware/protectRouteMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, profile);
router.post("/logout", protect, logout);

export default router;