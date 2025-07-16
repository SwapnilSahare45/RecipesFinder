import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { UserProvider } from './context/UserContext'
import { RecipeProvider } from './context/RecipeContext'
const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <RecipeProvider>
          <Routes />
        </RecipeProvider>
      </UserProvider>
    </BrowserRouter >
  )
}

export default App