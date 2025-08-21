import Header from '../components/Header'
import fruitsOnAir from "../assets/fruits-on-air.png"
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

const Recipes = () => {
    return (
        <div className='overflow-x-hidden'>
            <Header />

            <div className='font-mono flex flex-col items-center relative'>
                <h1 className='font-asset text-sm text-center scale-y-200 mt-6'>Explore Delicious Recipes</h1>
                <p className='text-center px-4 my-6 md:w-1/2 md:my-4'>Find recipes for every mood and moment — from quick breakfasts to cozy dinners. Filter, search, and discover dishes shared by food lovers like you.</p>

                <input type="text" placeholder="Search..." className='focus:outline-none ring-1 p-2 w-11/12 md:w-1/3' />

                <div className='w-full flex flex-wrap justify-center gap-2 my-6 md:w-1/2'>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>All</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Breakfast</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Brunch</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Lunch</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Dinner</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Snacks</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Desserts</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Appetizers</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Drinks</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Side Dishes</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Soups</button>
                    <button className='bg-fuchsia-500 text-white px-4 py-2 text-sm tracking-wider'>Salads</button>
                </div>

                <div className='grid grid-cols-1 gap-8 px-6 mt-6 mb-4 md:grid-cols-3 lg:w-3/4'>
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>

                <img src={fruitsOnAir} alt="Fruits on air" className='-z-10 w-96 absolute top-0 -right-10 opacity-60 lg:w-1/3 lg:-top-10 lg:-right-30 lg:opacity-100' />
            </div>

            <Footer/>
        </div>
    )
}

export default Recipes