import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipes }) => {

    return (

        <>
            {
                recipes ? recipes.map((recipe, index) => (
                    <div className='bg-warm-cream flex flex-col items-center px-3 py-5 rounded-md shadow-md md:px-7 md:pb-7' key={recipe._id}>

                        <div className='text-center mb-3 md:mb-6'>
                            <h1 className='text-2xl font-bold text-warm-tomato uppercase'>{recipe.recipeName}</h1>
                        </div>

                        <div>
                            <img className='w-96 h-96 rounded-md object-cover' src={recipe.recipeImage} alt="Puran Poli" />
                        </div>

                        <div className='w-full text-right mt-3'>
                            <h5 className='text-lg text-warm-tomato'>By {recipe.recipeBy.userName}</h5>
                        </div>

                        <Link to={"/recipe/" + recipe._id} className='bg-warm-salmon w-full text-white mt-3 py-2 text-center text-lg font-semibold rounded'>See Recipe</Link>

                    </div>
                )) : <h1>Loading...</h1>
            }

        </>


    )
}

export default RecipeCard