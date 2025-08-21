import Header from "../components/Header"
import { Link } from "react-router-dom"
import fruitsOnAir from "../assets/fruits-on-air.png"
import vegBasket from "../assets/veg-basket.png"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />

      <div className="grow flex flex-col items-center justify-center font-mono relative">
        <h1 className="font-asset text-center text-sm scale-y-200">Discover & Share Recipes Effortlessly</h1>
        <p className="text-center my-6 px-4 md:w-1/2">CookBook makes cooking simple and fun. Explore delicious recipes from around the world, share your own creations, and inspire others in the kitchen. Whether you’re a beginner or a food lover, we bring the flavors to your screen.</p>
        <Link to="/recipes" className="px-4 py-2 bg-fuchsia-500 text-white tracking-widest">Start Cooking</Link>

        <p className="absolute top-2 left-4 text-xs md:text-base md:top-10 md:left-10">Fresh ideas, one recipe at a time.</p>
        <p className="absolute bottom-2 right-4 text-xs md:text-base md:bottom-10 md:right-10">Cook, share, and taste the world.</p>
        <img src={fruitsOnAir} alt="fruits on air" loading="lazy" className="-z-10 w-96 absolute -top-5 -right-15 lg:w-1/2 lg:-right-40" />
        <img src={vegBasket} alt="basket" loading="lazy" className="-z-10 absolute w-96 -bottom-5 -left-20 lg:w-1/2 lg:-bottom-17 lg:-left-30" />
      </div>

      <Footer/>
    </div>
  )
}

export default Home