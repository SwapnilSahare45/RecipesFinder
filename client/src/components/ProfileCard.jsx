import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
    const { user, logout } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <div className='mt-28 flex flex-col items-center justify-center mb-6'>

            <h1 className='text-3xl font-bold text-warm-orange mb-6'>Profile</h1>

            <div className='bg-warm-cream space-y-4 text-center w-[94%] rounded-md px-6 py-4 text-warm-charcoal shadow-md sm:w-1/2 md:w-2/5 lg:w-[30%]'>

                <div>
                    <h4 className='text-xl font-semibold'>Name:</h4>
                    <h4 className='text-xl'>{user.firstName} {user.lastName}</h4>
                </div>

                <div>
                    <h4 className='text-xl font-semibold'>Email:</h4>
                    <h4 className='text-xl'>{user.email}</h4>
                </div>

                <div>
                    <button className='text-xl font-semibold py-2 w-36 text-center bg-warm-orange text-white rounded-md cursor-pointer shadow-md' onClick={handleLogout}>Logout</button>
                </div>

            </div>

        </div>
    )
}

export default ProfileCard