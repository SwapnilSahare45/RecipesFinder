import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false); 

    const login = async () => {
        const response = await userLogin(user);
        if (response.success) {
            navigate("/");
        } else {
            setError(response.error);
            setUser({ email: "", password: "" });
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000); 
            return () => clearTimeout(timer); 
        }
    }, [error]);

    return (
        <div className='h-dvh w-full flex flex-col justify-around items-center relative md:flex-row'>
            {/* Section for showing errors */}
            {error && (
                <div className='absolute top-2 bg-red-500 py-2 px-6 rounded-md text-lg text-white'>
                    <p>{error}</p>
                </div>
            )}

            <div>
                <h1 className='text-warm-tomato text-4xl font-bold sm:text-5xl'>Recipe Master</h1>
            </div>

            {/* Form Container */}
            <div className='w-[92%] bg-warm-cream shadow-md px-10 py-6 mt-12 rounded-md sm:w-[60%] md:w-[50%] lg:w-[40%]'>
                <div className='text-center mb-7'>
                    <h1 className='text-warm-tomato text-3xl font-semibold'>Login</h1>
                </div>

                <div className='border border-warm-salmon'></div>

                {/* Login Form */}
                <div className='my-4'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-xl'>Email:</label>
                        <input
                            type="text"
                            id="email"
                            className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>

                    <div className='flex flex-col gap-1 mt-7 relative'>
                        <label htmlFor="password" className='text-xl'>Password:</label>
                        <input
                            type={showPassword ? "text" : "password"} 
                            id="password"
                            className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon pr-10' 
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />

                        {/* Eye Icon Button */}
                        <button
                            className='absolute right-2 -bottom-1 transform -translate-y-1/2 focus:outline-none'
                            onClick={() => setShowPassword(!showPassword)} 
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 text-gray-500"
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
                                    className="w-6 text-gray-500"
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

                    <div className='my-7 text-center'>
                        <button className='text-xl bg-warm-orange text-white px-8 py-2 rounded-md' onClick={login}>Login</button>
                    </div>
                </div>

                <div className='border border-warm-salmon'></div>

                <div className='text-center mt-4'>
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;