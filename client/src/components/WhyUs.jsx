import React from 'react'

const WhyUs = () => {
    return (
        <div className='text-warm-charcoal'>

            <div className='text-center my-4 md:text-left md:mb-0 md:ml-5'>
                <h1 className='text-xl font-semibold text-warm-tomato md:text-3xl'>Why Choose Recipe Master?</h1>
            </div>

            <div className='md:flex'>
                <div className='bg-warm-cream m-3 py-4 px-6 text-center space-y-2 shadow-md'>
                    <h3 className='text-lg font-semibold md:text-xl'>Authentic Recipes by Real People</h3>
                    <p>Access a wide range of recipes created and shared by home cooks and food enthusiasts.</p>
                </div>

                <div className='bg-warm-cream m-3 py-4 px-6 text-center space-y-2 shadow-md'>
                    <h3 className='text-lg font-semibold md:text-xl'>Share Your Culinary Creations</h3>
                    <p>Easily upload your own recipes and showcase your unique cooking style to a growing community.</p>
                </div>

                <div className='bg-warm-cream m-3 py-4 px-6 text-center space-y-2 shadow-md'>
                    <h3 className='text-lg font-semibold md:text-xl'>Discover and Connect</h3>
                    <p>Explore, save, and try recipes from others while engaging with a community that loves cooking as much as you do.</p>
                </div>
            </div>

        </div>
    )
}

export default WhyUs