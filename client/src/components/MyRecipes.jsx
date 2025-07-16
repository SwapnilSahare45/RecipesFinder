import React, { useContext, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import RecipeContext from '../context/RecipeContext'
import UserContext from '../context/UserContext'

const MyRecipes = () => {
    const { fetchMyRecipes, myRecipes } = useContext(RecipeContext);
    const { user } = useContext(UserContext);    
    
    useEffect(() => {
        if (user?._id) {
            fetchMyRecipes(user._id);
        }
    }, [user?._id])

    return (
        <div className='flex flex-col justify-center items-center mb-6'>

            <div className='my-6 flex'>
                <h1 className='text-3xl font-bold text-warm-orange'>My Recipes</h1>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 px-2 lg:grid-cols-3'>
                {
                    myRecipes.length > 0 ?
                        <RecipeCard recipes={myRecipes} />
                        :
                        <h1>No Recipes found...</h1>
                }
            </div>

        </div>
    )
}

export default MyRecipes