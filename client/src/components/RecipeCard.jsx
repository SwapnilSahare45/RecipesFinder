import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipe/${recipe._id}`}>
            <img src={recipe.recipeImage} alt={recipe.title} loading='lazy' className='w-full' />

            <div className='px-6 py-4 text-center'>
                <h3 className='uppercase tracking-wider text-2xl'>{recipe.title}</h3>
                <p className='capitalize'>{`By ${recipe.recipeBy.name}`}</p>
                <p className='space-x-2 my-1'>
                    <span className={`${recipe.cuisineType === 'other' ? 'hidden' : 'text-xs uppercase bg-gray-50 border rounded-full border-gray-200 px-3 py-1'}`}>{recipe.cuisineType === 'other' ? null : recipe.cuisineType}</span>
                    <span className={`${recipe.dishCategory === 'other' ? 'hidden' : 'text-xs uppercase bg-gray-50 border rounded-full border-gray-200 px-3 py-1'}`}>{recipe.dishCategory === 'other' ? null : recipe.dishCategory}</span>
                </p>
                <p>{`Ready In: ${recipe.readyIn} min`}</p>
            </div>
        </Link>
    )
}

export default RecipeCard