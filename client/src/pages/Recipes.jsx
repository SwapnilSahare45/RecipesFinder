import Header from '../components/Header'
import fruitsOnAir from "../assets/fruits-on-air.png"
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import { useRecipeStore } from '../store/recipeStore';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const Recipes = () => {
    const { getRecipes, searchRecipes, recipes, isLoading, error } = useRecipeStore();

    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    const [query, setQuery] = useState("")
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // Debounce search
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(handler);
    }, [query]);

    useEffect(() => {
        if (debouncedQuery) {
            searchRecipes(debouncedQuery);
        } else {
            getRecipes();
        }
    }, [debouncedQuery, getRecipes, searchRecipes])

    if(isLoading) return <Loader/>

    return (
        <div className='overflow-x-hidden'>
            <Header />

            <div className='font-mono flex flex-col items-center relative'>
                <h1 className='font-asset text-sm text-center scale-y-200 mt-6'>Explore Delicious Recipes</h1>
                <p className='text-center px-4 my-6 md:w-1/2 md:my-4'>Find recipes for every mood and moment — from quick breakfasts to cozy dinners. Filter, search, and discover dishes shared by food lovers like you.</p>

                <input
                    type="text"
                    placeholder="Search recipes..."
                    className='focus:outline-none ring-1 p-2 w-11/12 md:w-1/3'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <div className='w-full flex flex-wrap justify-center gap-2 my-6 md:w-1/2'>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={getRecipes}
                    >All</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('breakfast')}
                    >Breakfast</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('brunch')}
                    >Brunch</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('lunch')}
                    >Lunch</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('dinner')}
                    >Dinner</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('snack')}
                    >Snacks</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('dessert')}
                    >Desserts</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('appetizer')}
                    >Appetizers</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('drink')}
                    >Drinks</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('side-dish')}
                    >Side Dishes</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('soup')}
                    >Soups</button>
                    <button
                        className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'
                        onClick={() => searchRecipes('salad')}
                    >Salads</button>
                </div>

                <div className='grid grid-cols-1 gap-2 px-6 mt-6 mb-4 md:grid-cols-3 md:gap-4 lg:w-3/4'>
                    {recipes && recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))
                    ) : (
                        <p className='col-span-3 text-center text-2xl'>No recipe found.</p>
                    )}

                </div>

                <img src={fruitsOnAir} alt="Fruits on air" className='-z-10 w-96 absolute top-0 -right-10 opacity-60 lg:w-1/3 lg:-top-10 lg:-right-30 lg:opacity-100' />
            </div>

            <Footer />
        </div>
    )
}

export default Recipes