import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileCard from '../components/ProfileCard'
import MyRecipes from '../components/MyRecipes'

const Profile = () => {
    return (
        <div>
            <Header />
            <ProfileCard />
            <MyRecipes/>
            <Footer />
        </div>
    )
}

export default Profile