import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RecipesList from '../components/RecipesList'

const Recipes = () => {
    return (
        <div>
            <Header />
            <RecipesList />
            <Footer />
        </div>
    )
}

export default Recipes