import express from "express";
import { addRecipe, myRecipes, recipeById, searchRecipes, showAllRecipe } from "../controllers/recipeController.js";
import multer from "multer";
import { protect } from "../middleware/protectRouteMiddleware.js";

const router = express.Router();

// Create a new instance of multer storage that stores the file in memory as a buffer object
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes for handling different http requests
router.post("/addRecipe", protect, upload.single("recipeImage"), addRecipe);
router.get("/allRecipes", protect, showAllRecipe);
router.get("/recipeById/:id", protect, recipeById);
router.get("/myRecipes", protect, myRecipes);
router.get("/search/:key", protect, searchRecipes);

export default router;