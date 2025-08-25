import Header from '../components/Header'
import Footer from '../components/Footer'
import fruitsOnAir from "../assets/fruits-on-air.png"
import { useRecipeStore } from '../store/recipeStore'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'

const Recipe = () => {
    const { id } = useParams();
    const { getRecipe, recipe, isLoading, error } = useRecipeStore();

    useEffect(() => {
        getRecipe(id);
    }, [id, getRecipe]);

    if (isLoading) return <Loader />

    if (error) return toast.error(error);

    return (
        <div className='overflow-x-hidden'>
            <Header />

            <div className="flex flex-col items-center my-6 font-mono md:my-8 relative">

                <h1 className='font-asset scale-y-200 uppercase tracking-wide md:text-xl'>{recipe?.title}</h1>

                <img src={recipe?.recipeImage} alt={recipe?.title} className='w-full p-4 md:w-1/2 lg:w-1/3' />

                <div className='flex justify-between w-full p-4 md:w-1/2'>
                    <p className='capitalize'>{`by ${recipe?.recipeBy?.name}`}</p>
                    <p>{`Ready In: ${recipe?.readyIn} min`}</p>
                </div>


                <div className="w-full space-x-2 p-4 md:w-1/2">
                    <span className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 uppercase tracking-widest">
                        {recipe?.cuisineType}
                    </span>

                    <span className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 uppercase tracking-widest">
                        {recipe?.dishCategory}
                    </span>
                </div>

                <div className='w-full p-4 md:w-1/2'>
                    <h5 className='uppercase tracking-widest text-2xl mb-2'>Ingredients:</h5>

                    <div className='grid grid-cols-1 gap-1 md:grid-cols-2'>
                        {recipe?.ingredients?.map((ingredient, index) => (
                            <p key={index}>{`${index + 1}) ${ingredient}.`}</p>
                        ))}

                    </div>
                </div>

                <div className='w-full p-4 md:w-1/2'>
                    <h5 className='uppercase tracking-widest text-2xl mb-2'>Instructions:</h5>

                    <div className='space-y-2'>
                        {recipe?.instructions?.map((instruction, index) => (
                            <p>{`${index + 1}) ${instruction}.`}</p>
                        ))}
                    </div>
                </div>

                <img src={fruitsOnAir} alt="Fruits on air" className='-z-10 w-96 absolute top-0 -right-10 opacity-60 lg:w-1/3 lg:-top-10 lg:-right-30 lg:opacity-100' />
            </div>

            <Footer />
        </div>
    )
}

export default Recipe