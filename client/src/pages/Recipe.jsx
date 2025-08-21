import Header from '../components/Header'
import Footer from '../components/Footer'
import vegBasket from "../assets/veg-basket.png"

const Recipe = () => {
    return (
        <div>
            <Header />

            <div className="flex flex-col items-center my-6 font-mono md:my-8">

                <h1 className='font-asset scale-y-200 uppercase tracking-wide md:text-xl'>Title</h1>

                <img src={vegBasket} alt="title" className='w-full p-4 md:w-1/2 lg:w-1/3' />

                <div className='flex justify-between w-full p-4 md:w-1/2'>
                    <p>by Swapnil sahare</p>
                    <p>Ready in : 30 min</p>
                </div>


                <div className="w-full space-x-2 p-4 md:w-1/2">
                    <span className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 uppercase tracking-widest">
                        Indian
                    </span>

                    <span className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 uppercase tracking-widest">
                        Lunch
                    </span>
                </div>

                <div className='w-full p-4 md:w-1/2'>
                    <h5 className='uppercase tracking-widest text-2xl mb-2'>Ingredients:</h5>

                    <div className='grid grid-cols-1 gap-1 md:grid-cols-2'>
                        <p>1. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                        <p>1. Lorem ipsum dolor.</p>
                    </div>
                </div>

                <div className='w-full p-4 md:w-1/2'>
                    <h5 className='uppercase tracking-widest text-2xl mb-2'>Instructions:</h5>

                    <div className='space-y-2'>
                        <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium recusandae nulla aut quod. Mollitia explicabo, porro maxime quia autem libero recusandae nemo omnis possimus, officia quos error perspiciatis beatae?
                        </p>

                        <p>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quasi assumenda consectetur reiciendis eligendi temporibus tenetur magnam minima id esse quae porro nihil cupiditate, inventore, pariatur repellendus totam, aut necessitatibus.</p>

                        <p>3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti laborum est nemo eius magnam explicabo amet tempora eveniet quis! Hic sapiente adipisci fugit iure aut earum recusandae nisi excepturi.</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Recipe