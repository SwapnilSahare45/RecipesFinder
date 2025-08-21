import { Link } from 'react-router-dom'
import vegBasket from "../assets/veg-basket.png"

const RecipeCard = () => {
    return (
        <Link to="/recipe/:id">
            <img src={vegBasket} alt={vegBasket} className='w-full'/>

            <div className='px-6 py-4 text-center'>
                <h3>Title</h3>
                <p>By name</p>
                <p>Dinner</p>
                <p>Ready In : 30 min</p>
            </div>
        </Link>
    )
}

export default RecipeCard