import Header from '../components/Header'
import Footer from '../components/Footer'
import fruitsOnAir from "../assets/fruits-on-air.png"


const AddRecipe = () => {
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
                            className='focus:outline-none ring-1 p-2' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="recipe-image">Recipe Image</label>
                        <input
                            type="file"
                            id='recipe-image'
                            placeholder='recipe image'
                            className='focus:outline-none ring-1 p-2' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="cuisine-type">Cuisine Type</label>
                        <select id="cuisine-type" className='focus:outline-none ring-1 p-[10px]'>
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
                        <select id="dish-category" className='focus:outline-none ring-1 p-[10px]'>
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
                            className='focus:outline-none ring-1 p-2 no-spinner tracking-widest' />
                    </div>

                    <div className='flex flex-col gap-1 md:col-span-2'>
                        <label htmlFor="ingredients">Ingredients</label>
                        <input
                            type="text"
                            id='ingredients'
                            placeholder='ingredients (comma seprated)'
                            className='focus:outline-none ring-1 p-2' />
                    </div>

                    <div className='flex flex-col gap-1 md:col-span-2'>
                        <label htmlFor="cooking-instructions">Cooking Instructions</label>
                        <input
                            type="text"
                            id='cooking-instructions'
                            placeholder='cooking instructions (full-stop seprated)'
                            className='focus:outline-none ring-1 p-2' />
                    </div>

                    <button className='bg-fuchsia-500 text-white py-2 tracking-widest uppercase cursor-pointer md:col-span-2'>Share</button>

                </div>

                <img src={fruitsOnAir} alt="Fruits on air" className='-z-10 w-96 absolute top-0 -right-10 opacity-60 lg:w-1/3 lg:-top-10 lg:-right-30 lg:opacity-100' />
            </div>

            <Footer />
        </div>
    )
}

export default AddRecipe