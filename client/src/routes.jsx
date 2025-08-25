import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import AddRecipe from './pages/AddRecipe'
import Profile from './pages/Profile'
import Recipe from './pages/Recipe'
import ProtectedRoute from './components/ProtectedRoute'
import PageNotFound from './pages/PageNotFound'
import PublicRoute from './components/PublicRoute'



const routes = () => {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Signup />} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path='/' element={<Home />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='/share' element={<AddRecipe />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/recipe/:id' element={<Recipe />} />
            </Route>

            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default routes