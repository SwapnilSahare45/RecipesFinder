import React, { useContext, useEffect } from 'react';
import RecipeContext from '../context/RecipeContext';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Recipe = () => {
    const { fetchRecipeById, fullRecipe, error, loading } = useContext(RecipeContext);
    const { id } = useParams();

    useEffect(() => {
        fetchRecipeById(id);
    }, []);

    if (loading) {
        return <div className="text-center mt-24">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-24 text-red-500">{error}</div>;
    }

    if (!fullRecipe || !fullRecipe.recipeBy) {
        return <div className="text-center mt-24">Recipe not found</div>;
    }

    return (
        <div>
            <Header />
            <div className="flex items-center justify-center">
                <div className="w-[96%] mt-24 mb-3 pb-3 bg-warm-cream rounded-md flex flex-col justify-center items-center text-warm-charcoal">
                    {/* Recipe title */}
                    <div className="my-6">
                        <h1 className="text-5xl font-semibold text-warm-orange uppercase">{fullRecipe.recipeName}</h1>
                    </div>

                    {/* Recipe Image */}
                    <div className="flex justify-center my-3">
                        <img
                            src={fullRecipe.recipeImage}
                            alt={fullRecipe.recipeName}
                            className="w-[90%] rounded-md shadow-md"
                        />
                    </div>

                    <div className="w-4/6 flex flex-col gap-2 justify-between my-3 md:flex-row">
                        <h3 className="text-xl">
                            Cooking Time : <span className="text-warm-tomato font-semibold">{fullRecipe.cookingTime}</span> min
                        </h3>
                        <h3 className="text-xl">
                            By <span className="text-warm-tomato font-semibold uppercase">{fullRecipe.recipeBy?.userName}</span>
                        </h3>
                    </div>

                    <div className="w-4/6 flex flex-col gap-2 justify-between my-3 md:flex-row">
                        <h4 className="text-xl">
                            Cuisine : <span className=" uppercase font-semibold text-warm-tomato">{fullRecipe.cuisine}</span>
                        </h4>
                        <h4 className="text-xl">
                            Dish Category : <span className="text-warm-tomato font-semibold uppercase">{fullRecipe.dishCategory}</span>
                        </h4>
                    </div>

                    <div className="w-11/12 my-3">
                        <h3 className="text-xl">Ingredients :</h3>
                        <ul className="flex flex-wrap gap-2 mt-3">
                            {fullRecipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="font-semibold bg-warm-tomato text-white py-2 px-4 rounded-full uppercase"> {ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-11/12 my-3">
                        <h3 className="text-xl">Instructions :</h3>
                        <ol className="list-decimal list-inside flex flex-col gap-4 mt-3">
                            {fullRecipe.cookingInstructions.map((instruction, index) => (
                                <li key={index} className="bg-warm-tomato p-2 pl-4 rounded-full uppercase text-white font-semibold">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Recipe;