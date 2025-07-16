import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const { userRegister } = useContext(UserContext);
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", conPassword: "" });

    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false); 
    const [showConPassword, setShowConPassword] = useState(false); 

    const signUp = async () => {
        const response = await userRegister(user);
        if (response.success) {
            navigate("/login");
        } else {
            console.log(response.error);
            setError(response.error);
            setUser({ firstName: "", lastName: "", email: "", password: "", conPassword: "" });
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000); 
            return () => clearTimeout(timer); 
        }
    }, [error]);

    return (
        <div className='h-dvh w-full flex flex-col justify-around items-center gap-8 lg:flex-row'>
            {/* Section for showing errors */}
            {error && (
                <div className='absolute top-2 bg-red-500 py-2 px-6 rounded-md text-lg text-white'>
                    <p>{error}</p>
                </div>
            )}

            <div>
                <h1 className='text-4xl text-warm-tomato font-bold sm:text-5xl'>Recipe Master</h1>
            </div>

            {/* Form Container */}
            <div className='w-[92%] bg-warm-cream shadow-md px-10 py-6 rounded-md sm:w-[60%] md:w-[50%] lg:w-[40%]'>
                <div className='text-center mb-7'>
                    <h1 className='text-3xl font-semibold text-warm-tomato'>Register</h1>
                </div>

                <div className='border border-warm-salmon'></div>

                {/* Sign up Form */}
                <div className='my-4'>

                    <div className='flex flex-col justify-between lg:flex-row'>
                        <div className='flex flex-col gap-1 lg:w-[48%]'>
                            <label htmlFor="firstName" className='text-xl'>First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'
                                value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col gap-1 mt-4 lg:w-[48%] lg:mt-0'>
                            <label htmlFor="lastName" className='text-xl'>Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 my-4'>
                        <label htmlFor="email" className='text-xl'>Email:</label>
                        <input
                            type="text"
                            id="email"
                            className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>

                    {/* User password */}
                    <div className='flex flex-col gap-1 relative'>
                        <label htmlFor="password" className='text-xl'>Password:</label>
                        <input
                            type={showPassword ? "text" : "password"} 
                            id="password"
                            className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon pr-10'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
            
                        <button
                            className='absolute right-2 -bottom-1 transform -translate-y-1/2 focus:outline-none'
                            onClick={() => setShowPassword(!showPassword)} 
                        >
                            {showPassword ? (
                              
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                    />
                                </svg>
                            ) : (
                               
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className='flex flex-col gap-1 my-4 relative'>
                        <label htmlFor="conPassword" className='text-xl'>Confirm Password:</label>
                        <input
                            type={showConPassword ? "text" : "password"} 
                            id="conPassword"
                            className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon pr-10' 
                            value={user.conPassword}
                            onChange={(e) => setUser({ ...user, conPassword: e.target.value })}
                        />
                       
                        <button
                            className='absolute right-2 -bottom-1 transform -translate-y-1/2 focus:outline-none'
                            onClick={() => setShowConPassword(!showConPassword)} 
                        >
                            {showConPassword ? (
                               
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                    />
                                </svg>
                            ) : (
                                
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className='text-center my-7'>
                        <button className='text-xl bg-warm-orange text-white px-8 py-2 rounded-md' onClick={signUp}>Signup</button>
                    </div>

                    <div className='border border-warm-salmon'></div>

                    <div className='text-center mt-4'>
                        <p>I have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;