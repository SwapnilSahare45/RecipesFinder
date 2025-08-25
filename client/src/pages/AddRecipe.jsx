import Header from '../components/Header'
import Footer from '../components/Footer'
import fruitsOnAir from "../assets/fruits-on-air.png"
import { useRef, useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'
import { toast } from "react-toastify"

const AddRecipe = () => {

    const [recipeData, setRecipeData] = useState({ title: '', cuisineType: '', dishCategory: '', readyIn: '', ingredients: '', instructions: '' });

    const [recipeImage, setRecipeImage] = useState(null);
    const recipeImageRef = useRef(null);

    const { addRecipe, isLoading, error } = useRecipeStore();

    const handleShare = async () => {

        if (!recipeData.title || !recipeData.cuisineType || !recipeData.dishCategory || !recipeData.readyIn || !recipeData.ingredients || !recipeData.instructions) {
            return toast.error('All fields are required.');
        }

        const data = new FormData();

        data.append('title', recipeData.title);
        data.append('recipeImage', recipeImage);
        data.append('cuisineType', recipeData.cuisineType);
        data.append('dishCategory', recipeData.dishCategory);
        data.append('readyIn', recipeData.readyIn);
        data.append('ingredients', recipeData.ingredients);
        data.append('instructions', recipeData.instructions);

        const success = await addRecipe(data);

        if (success) {
            toast.success('Recipe share successfully.');

            setRecipeData({ title: '', cuisineType: '', dishCategory: '', readyIn: '', ingredients: '', instructions: '' });

            setRecipeImage(null);

            if (recipeImageRef.current) {
                recipeImageRef.current.value = "";
            }
        } else {
            toast.error(error);
        }
    }

    return (
        <div className='overflow-x-hidden'>
            <Header />

            <div className='font-mono flex flex-col items-center justify-center my-6 md:my-8 relative'>
                <h1 className='font-asset scale-y-200 mb-2'>Cook, Click & Share!</h1>
                <p className='text-center'>Got a tasty dish? Share it and spread the flavor love.</p>

                <div className='w-full grid grid-cols-1 gap-4 p-4 mt-2 md:w-1/2 md:p-0 md:grid-cols-2'>

                    <div className='flex flex-col gap-1 md:col-span-2'>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id='title'
                            placeholder='recipe title'
                            className='focus:outline-none ring-1 p-2'
                            value={recipeData.title}
                            onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })}
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="recipe-image">Recipe Image</label>
                        <input
                            type="file"
                            id='recipe-image'
                            placeholder='recipe image'
                            className='focus:outline-none ring-1 p-2'
                            ref={recipeImageRef}
                            onChange={(e) => setRecipeImage(e.target.files[0])}
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="cuisine-type">Cuisine Type</label>
                        <select
                            id="cuisine-type"
                            className='focus:outline-none ring-1 p-[10px]'
                            value={recipeData.cuisineType}
                            onChangeCapture={(e) => setRecipeData({ ...recipeData, cuisineType: e.target.value })}
                        >
                            <option value="" selected disabled>select</option>\
                            <option value="indian">Indian</option>
                            <option value="italian">Italian</option>
                            <option value="chinese">Chinese</option>
                            <option value="mexican">Mexican</option>
                            <option value="thai">Thai</option>
                            <option value="japanese">Japanese</option>
                            <option value="american">American</option>
                            <option value="french">French</option>
                            <option value="spanish">Spanish</option>
                            <option value="korean">Korean</option>
                            <option value="caribbean">Caribbean</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="dish-category">Dish Category</label>
                        <select
                            id="dish-category"
                            className='focus:outline-none ring-1 p-[10px]'
                            value={recipeData.dishCategory}
                            onChange={(e) => setRecipeData({ ...recipeData, dishCategory: e.target.value })}
                        >
                            <option value="" selected disabled>Select</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="brunch">Brunch</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snacks">Snacks</option>
                            <option value="dessert">Dessert</option>
                            <option value="appetizer">Appetizer</option>
                            <option value="drink">Drink</option>
                            <option value="side-dish">Side Dish</option>
                            <option value="soup">Soup</option>
                            <option value="salad">Salad</option>
                            <option value="main-course">Main Course</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="ready-in">Ready In (min)</label>
                        <input
                            type="number"
                            id='ready-in'
                            placeholder='ready in (min)'
                            className='focus:outline-none ring-1 p-2 no-spinner tracking-widest'
                            value={recipeData.readyIn}
                            onChange={(e) => setRecipeData({ ...recipeData, readyIn: e.target.value })}
                        />
                    </div>

                    <div className='flex flex-col gap-1 md:col-span-2'>
                        <label htmlFor="ingredients">Ingredients</label>
                        <input
                            type="text"
                            id='ingredients'
                            placeholder='ingredients (comma seprated)'
                            className='focus:outline-none ring-1 p-2'
                            value={recipeData.ingredients}
                            onChange={(e) => setRecipeData({ ...recipeData, ingredients: e.target.value })}
                        />
                    </div>

                    <div className='flex flex-col gap-1 md:col-span-2'>
                        <label htmlFor="cooking-instructions">Cooking Instructions</label>
                        <input
                            type="text"
                            id='cooking-instructions'
                            placeholder='cooking instructions (full-stop seprated)'
                            className='focus:outline-none ring-1 p-2'
                            value={recipeData.instructions}
                            onChange={(e) => setRecipeData({ ...recipeData, instructions: e.target.value })}
                        />
                    </div>

                    <button
                        className='bg-fuchsia-500 text-white py-2 tracking-widest uppercase cursor-pointer md:col-span-2 disabled:opacity-50'
                        onClick={handleShare}
                        disabled={isLoading}
                    >
                        {isLoading ? "Sharing..." : "Share"}
                    </button>

                </div>

                <img src={fruitsOnAir} alt="Fruits on air" className='-z-10 w-96 absolute top-0 -right-10 opacity-60 lg:w-1/3 lg:-top-10 lg:-right-30 lg:opacity-100' />
            </div>

            <Footer />
        </div>
    )
}

export default AddRecipe