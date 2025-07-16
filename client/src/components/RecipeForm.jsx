import React, { useState, useContext, useRef } from 'react';
import RecipeContext from '../context/RecipeContext';
import UserContext from '../context/UserContext';

const RecipeForm = () => {
    const { addRecipe } = useContext(RecipeContext);
    const { user } = useContext(UserContext);
    const fileInputRef = useRef(null); // Ref for file input

    // State for form inputs
    const [formData, setFormData] = useState({
        recipeName: '',
        ingredients: '',
        cookingInstructions: '',
        cookingTime: '',
        cuisineType: '',
        dishCategory: '',
        recipeImage: null,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (id === 'recipeImage') {
            setFormData({ ...formData, [id]: files[0] });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object for file upload
        const data = new FormData();
        data.append('recipeName', formData.recipeName);
        data.append('ingredients', formData.ingredients);
        data.append('cookingInstructions', formData.cookingInstructions);
        data.append('cookingTime', formData.cookingTime);
        data.append('cuisineType', formData.cuisineType);
        data.append('dishCategory', formData.dishCategory);
        data.append('recipeImage', formData.recipeImage);

        // Add recipeBy (userId and userName) from the user object
        data.append('recipeBy[userId]', user._id);
        data.append('recipeBy[userName]', `${user.firstName} ${user.lastName}`);

        // Call the addRecipe function from context
        const response = await addRecipe(data);

        if (response.success) {
            alert('Recipe added successfully!');
            // Reset form
            setFormData({
                recipeName: '',
                ingredients: '',
                cookingInstructions: '',
                cookingTime: '',
                cuisineType: '',
                dishCategory: '',
                recipeImage: null,
            });
            // Clear the file input value
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } else {
            alert(`Failed to add recipe: ${response.error}`);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-28 mb-6 w-[96%] text-center space-y-2 sm:w-[70%] md:w-[60%]'>
                <h1 className='text-3xl font-bold text-warm-tomato'>Bring Your Dish to Life!</h1>
                <p className='mx-3 text-warm-charcoal'>Have a recipe that everyone raves about? It's time to share it with the world! Add your secret ingredients, step-by-step magic, and personal touches. Let’s inspire food lovers everywhere—one recipe at a time!</p>
            </div>

            <form onSubmit={handleSubmit} className='bg-warm-cream w-[96%] space-y-3 px-6 py-8 mb-6 rounded-md shadow-md sm:px-16 md:px-24 md:py-12 md:space-y-5'>
                <div className='flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="recipeName">Recipe Name:</label>
                    <input
                        type="text"
                        id="recipeName"
                        placeholder='Enter recipe name...'
                        value={formData.recipeName}
                        onChange={handleChange}
                        className='text-lg p-2 rounded-md outline-none ring-1 ring-warm-salmon focus:ring-2 cursor-pointer'
                        required
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="ingredients">Ingredients:</label>
                    <input
                        type="text"
                        id='ingredients'
                        placeholder='Enter ingredients (comma-separated)...'
                        value={formData.ingredients}
                        onChange={handleChange}
                        className='text-lg p-2 rounded-md outline-none ring-1 ring-warm-salmon focus:ring-2 cursor-pointer'
                        required
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="cookingInstructions">Cooking Instructions:</label>
                    <input
                        type="text"
                        id="cookingInstructions"
                        placeholder='Enter instructions (comma-separated)...'
                        value={formData.cookingInstructions}
                        onChange={handleChange}
                        className='text-lg p-2 rounded-md outline-none ring-1 ring-warm-salmon focus:ring-2 cursor-pointer'
                        required
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="cookingTime">Cooking Time:</label>
                    <input
                        type="number"
                        id="cookingTime"
                        placeholder='Enter cook time (in minutes)...'
                        value={formData.cookingTime}
                        onChange={handleChange}
                        className='text-lg p-2 rounded-md outline-none ring-1 ring-warm-salmon focus:ring-2 cursor-pointer'
                        required
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="cuisineType">Cuisine Type:</label>
                    <select
                        id="cuisineType"
                        value={formData.cuisineType}
                        onChange={handleChange}
                        className='text-lg p-2 rounded-md outline-none ring-1 ring-warm-salmon focus:ring-2 cursor-pointer'
                        required
                    >
                        <option value="" disabled>Select...</option>
                        <option value="indian">Indian</option>
                        <option value="italian">Italian</option>
                        <option value="chinese">Chinese</option>
                        <option value="mexican">Mexican</option>
                        <option value="american">American</option>
                        <option value="japanese">Japanese</option>
                        <option value="french">French</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="dishCategory">Dish Category:</label>
                    <select
                        id="dishCategory"
                        value={formData.dishCategory}
                        onChange={handleChange}
                        className='text-lg p-2 rounded-md outline-none ring-1 ring-warm-salmon focus:ring-2 cursor-pointer'
                        required
                    >
                        <option value="" disabled>Select...</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="brunch">Brunch</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="snacks">Snacks</option>
                        <option value="desserts">Desserts</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="drinks">Drinks</option>
                        <option value="sideDish">Side Dish</option>
                        <option value="soups">Soups</option>
                        <option value="salads">Salads</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-lg' htmlFor="recipeImage">Recipe Image:</label>
                    <input
                        type="file"
                        id="recipeImage"
                        onChange={handleChange}
                        ref={fileInputRef}
                        className='bg-white text-lg border border-warm-salmon rounded-md p-2 cursor-pointer file:bg-white file:border-0  file:border-r-[1px] file:border-warm-salmon'
                        required
                    />
                </div>

                <div className='text-center'>
                    <button type="submit" className='bg-warm-orange text-white text-lg w-full py-2 rounded-md cursor-pointer'>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RecipeForm;