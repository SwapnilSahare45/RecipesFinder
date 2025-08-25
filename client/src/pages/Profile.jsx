import Footer from '../components/Footer'
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'
import fruitsOnAir from "../assets/fruits-on-air.png"
import { useUserStore } from '../store/userStore'
import { useEffect } from 'react'
import { useRecipeStore } from '../store/recipeStore'
import Loader from '../components/Loader'
import { toast } from "react-toastify"

const Profile = () => {
    const { user, logout, isProfileLoading, error: profileError } = useUserStore();
    const { myRecipes, recipes, isLoading: recipesLoading, error: recipesError } = useRecipeStore();

    useEffect(() => {
        myRecipes();
    }, [myRecipes]);

    if (isProfileLoading || recipesLoading) {
        return <Loader />;
    }

    const handleLogout = async () => {
        const success = await logout();
        if (success) {
            toast.success('Logged out successful.');
        }
    }

    if (profileError || recipesError) {
        return toast.error(profileError || recipesError);
    }

    return (
        <div className="overflow-x-hidden">
            <Header />

            <div className="flex flex-col items-center justify-center my-6 font-mono md:my-8 relative">

                <div className="flex flex-col items-center">
                    <h3 className="text-3xl tracking-widest uppercase">{user?.name}</h3>
                    <p>{user?.email}</p>
                    <button
                        className='bg-red-500 text-white text-sm px-4 py-2 tracking-widest shadow cursor-pointer mt-4'
                        onClick={handleLogout}
                    >Logout</button>
                </div>

                <div className="mt-8 flex flex-col items-center tracking-widest">
                    <h1 className="text-4xl mb-1">My Cookbook</h1>
                    <p className="text-center">A personal space for all your culinary creations.</p>

                    <div className="grid grid-cols-1 gap-8 px-6 mt-6 mb-4 md:grid-cols-3 lg:w-3/4">
                        {recipes.map((recipe) => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))}
                    </div>
                </div>

                <img
                    src={fruitsOnAir}
                    alt="Fruits on air"
                    className="-z-10 w-96 absolute top-0 -right-10 opacity-60 lg:w-1/3 lg:-top-10 lg:-right-30 lg:opacity-100"
                />
            </div>

            <Footer />
        </div>
    );
};

export default Profile;
