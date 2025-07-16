import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-warm-cream h-dvh'>

            <div className='h-full flex flex-col items-center justify-center space-y-5'>

                <h1 className='text-4xl font-bold text-warm-tomato animate-bounce sm:text-7xl'>Recipe Master</h1>

                <h3 className='text-lg font-semibold text-warm-salmon animate-bounce sm:text-2xl'>Where Every Recipe Tells a Story.</h3>

                <Link to="/recipes" className='bg-warm-orange text-white font-semibold px-6 py-3 rounded-md shadow-md'>Explore Recipes</Link>

            </div>

        </div>
    )
}

export default Hero