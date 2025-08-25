import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    recipeBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    recipeImage: {
        type: String,
        required: true,
    },
    cuisineType: {
        type: String,
        enum: [
            'indian',
            'italian',
            'chinese',
            'mexican',
            'thai',
            'japanese',
            'american',
            'french',
            'spanish',
            'korean',
            'caribbean',
            'other',
        ],
        required: true
    },
    dishCategory: {
        type: String,
        enum: [
            'breakfast',
            'brunch',
            'lunch',
            'dinner',
            'snacks',
            'dessert',
            'appetizer',
            'drink',
            'side-dish',
            'soup',
            'salad',
            'main-course',
            'other'
        ],
        required: true,
    },
    readyIn: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: [String],
        required: true,
    },
},

    {
        timestamps: true,
    });

export const Recipe = mongoose.model("Recipe", recipeSchema);