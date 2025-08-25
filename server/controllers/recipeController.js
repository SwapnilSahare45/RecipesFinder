import { Recipe } from "../models/Recipe.js";
import cloudinary from "../utils/cloudinaryConfig.js";

export const addRecipe = async (req, res) => {
    try {
        const { title, cuisineType, dishCategory, readyIn, ingredients, instructions } = req.body;

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized." });
        }

        if (!title || !cuisineType || !dishCategory || !readyIn || !ingredients || !instructions) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Validation to check recipe image is presnet 
        if (!req.file) {
            return res.status(400).json({ message: "Recipe image required" });
        }

        // Upload the recipe image in cloudinary
        const recipeImage = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: 'recipes' },
                (error, result) => {
                    if (error) {
                        reject(new Error("Cloudinary upload failed"));
                    } else {
                        resolve(result);
                    }
                }
            );
            stream.end(req.file.buffer);
        })

        const newRecipe = new Recipe({
            recipeBy: req.user._id,
            title,
            recipeImage: recipeImage.secure_url,
            cuisineType,
            dishCategory,
            readyIn,
            ingredients: ingredients.split(",").map((item) => item.trim()),
            instructions: instructions.split(",").map((item) => item.trim()),
        })

        //   Save the data into database
        await newRecipe.save();

        //    Send a response back to the client after save the data
        res.status(201).json({
            message: "Recipe added successfully",
            recipe: newRecipe,
        })

    } catch (error) {
        // Handle the error during inserting data
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


export const showAllRecipe = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate("recipeBy", "name");

        res.status(200).json({ recipes });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error.",
            error: error.message,
        });
    }
};

export const recipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById({ _id: req.params.id }).populate("recipeBy", "name");

        if (!recipe) {
            res.status(400).json({ message: "No recipes found" });
        }

        res.status(200).json({ recipe });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred during fetching my recipes",
            error: error.message,
        })
    }
}

export const myRecipes = async (req, res) => {
    try {
        const userId = req.user;
        const myRecipes = await Recipe.find({ recipeBy: userId });

        res.status(200).json({ myRecipes });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred during fetching my recipes",
            error: error.message,
        })
    }
}

export const searchRecipes = async (req, res) => {
    try {
        const key = req.params.key;

        const recipes = await Recipe.find({
            $or: [
                { title: { $regex: key, $options: "i" } },
                { cuisineType: { $regex: key, $options: "i" } },
                { dishCategory: { $regex: key, $options: "i" } },
            ]
        })

        res.status(200).json({ recipes });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred during search",
            error: error.message,
        });
    }
}
