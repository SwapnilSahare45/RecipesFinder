import { useContext, useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import RecipeContext from '../context/RecipeContext'

const RecipesList = () => {

    const [key, setKey] = useState('');
    const [visibleRecipes, setVisibleRecipes] = useState(9);

    const { fetchAllRecipes, allRecipes, searchRecipe, error } = useContext(RecipeContext);

    const handleSearch = async () => {
        await searchRecipe(key);
        setKey('');
    }

    const handleLoadMore = () => {
        setVisibleRecipes((prev) => prev + 9); 
    };

    useEffect(() => {
        fetchAllRecipes();
    }, [])

    return (
        <div className='flex flex-col justify-center items-center mb-6'>

            <div className='mt-28 w-[94%] text-center space-y-2 sm:w-[70%] md:w-[60%]'>
                <h1 className='text-3xl font-semibold text-warm-tomato uppercase lg:text-4xl'>Delicious Recipes for Every Occasion</h1>
                <p className='text-warm-charcoal sm:px-10 md:px-12 lg:px-24'>Explore an ever-growing collection of recipes shared by home cooks and food enthusiasts. From quick snacks to elaborate meals, find dishes that inspire your next culinary adventure.</p>
            </div>

            <div className='mt-6 space-x-2'>
                <input className='p-2 rounded-md w-50 outline-none ring-1 ring-warm-salmon focus:ring-2 focus:ring-warm-orange text-warm-orange font-semibold sm:w-96' type="text" placeholder='Search...' value={key} onChange={(e) => setKey(e.target.value)} />

                <button className='bg-warm-orange text-white font-semibold px-6 py-2 rounded-md' onClick={handleSearch} >Search</button>
            </div>

            <div className='flex flex-wrap justify-center gap-2 my-6 sm:w-[60%] md:w-[50%] lg:w-[40%]'>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={fetchAllRecipes}>All</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md' onClick={() => searchRecipe('breakfast')}>Breakfast</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('brunch')}>Brunch</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('lunch')}>Lunch</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('dinner')}>Dinner</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('snacks')}>Snacks</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('desserts')}>Desserts</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('appetizers')}>Appetizers</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('drinks')}>Drinks</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('sideDish')}>Side Dishes</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('soups')}>Soups</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4' onClick={() => searchRecipe('salads')}>Salads</button>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 px-2 lg:grid-cols-3'>
                {allRecipes.length > 0 ? (
                    <RecipeCard recipes={allRecipes.slice(0, visibleRecipes)} />
                ) : (
                    <p className='text-warm-charcoal text-xl font-semibold'>{error}</p>
                )}
            </div>

            {visibleRecipes < allRecipes.length && (
                <div className='my-6'>
                    <button className='bg-warm-orange text-white px-4 py-2 rounded-md' onClick={handleLoadMore}>Load More</button>
                </div>
            )}
        </div>
    )
}

export default RecipesList