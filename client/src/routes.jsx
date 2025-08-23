import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import AddRecipe from './pages/AddRecipe'
import Profile from './pages/Profile'
import Recipe from './pages/Recipe'



const routes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />

            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/share' element={<AddRecipe />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/recipe/:id' element={<Recipe />} />


            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default routes