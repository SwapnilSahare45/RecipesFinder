import Footer from '../components/Footer'
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'
import fruitsOnAir from "../assets/fruits-on-air.png"

const Profile = () => {
    return (
        <div className='overflow-x-hidden'>
            <Header />

            <div className='flex flex-col items-center justify-center my-6 font-mono md:my-8 relative'>

                <div className='flex flex-col items-center'>
                    <h3 className='text-3xl tracking-widest uppercase'>Swapnil Sahare</h3>
                    <p>swapnilsahare45@gmail.com</p>
                </div>

                <div className='mt-8 flex flex-col items-center tracking-widest'>
                    <h1 className='text-4xl mb-1'>My Cookbook</h1>
                    <p className='text-center'>A personal space for all your culinary creations.</p>

                     <div className='grid grid-cols-1 gap-8 px-6 mt-6 mb-4 md:grid-cols-3 lg:w-3/4'>
                        <RecipeCard/>
                        <RecipeCard/>
                        <RecipeCard/>
                        <RecipeCard/>
                    </div>
                </div>

<img src={fruitsOnAir} alt="Fruits on air" className='-z-10 w-96 absolute top-0 -right-10 opacity-60 lg:w-1/3 lg:-top-10 lg:-right-30 lg:opacity-100' />

            </div>

            <Footer />
        </div>
    )
}

export default Profile