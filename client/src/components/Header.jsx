import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Header = () => {
    const { isAuthenticated } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header className='h-16 bg-warm-tomato flex justify-between items-center fixed top-0 w-full z-40 md:h-20'>
            <div className='ml-4 md:ml-6'>
                <h1 className='text-2xl font-bold text-white md:text-3xl'>Recipe Master</h1>
            </div>

            {/* Mobile Menu Button */}
            <button className='w-7 mr-3 md:hidden' onClick={toggleMenu}>
                {!isMenuOpen && (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fafafa">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                )}
                {/* Close Icon (when menu is open) */}
                {isMenuOpen && (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fafafa">
                        <path d="M6 18L18 6M6 6L18 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                )}
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex'>
                <ul className='flex gap-8 text-lg text-white'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Recipe</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className='fixed top-16 left-0 w-full bg-warm-tomato z-30 md:hidden'>
                    <ul className='flex flex-col items-center gap-4 py-4 text-lg text-white'>
                        <li>
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/recipes" onClick={toggleMenu}>Recipes</Link>
                        </li>
                        <li>
                            <Link to="/add" onClick={toggleMenu}>Add Recipe</Link>
                        </li>
                        {!isAuthenticated ? (
                            <>
                                <li>
                                    <Link to='/login' onClick={toggleMenu} className='bg-warm-orange text-white px-5 py-2 rounded-md shadow-md'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/signup' onClick={toggleMenu} className='bg-warm-orange text-white px-5 py-2 rounded-md shadow-md'>Signup</Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/profile" onClick={toggleMenu}>Profile</Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}

            {/* Desktop Authentication Links */}
            {!isAuthenticated ? (
                <div className='mr-6 space-x-3 hidden md:flex'>
                    <Link to='/login' className='bg-warm-orange text-white px-5 py-2 rounded-md shadow-md'>Login</Link>
                    <Link to='/signup' className='bg-warm-orange text-white px-5 py-2 rounded-md shadow-md'>Signup</Link>
                </div>
            ) : (
                <div className='mr-8 hidden text-lg text-white md:block'>
                    <Link to="/profile">Profile</Link>
                </div>
            )}
        </header>
    );
};

export default Header;