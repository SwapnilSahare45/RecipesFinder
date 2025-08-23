import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { toast } from 'react-toastify';

const Login = () => {
    const [cred, setCred] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const { login, isLoading, error } = useUserStore();

    const handleLogin = async () => {
        if (!cred.email || !cred.password) {
            return toast.error('All fields are required.');
        }

        try {
            const success = await login(cred);
            if (success) {
                toast.success("Login successful.");
                navigate("/");
            } else {
                toast.error(error);
            }
        } catch (error) {
            toast.error(error || 'Something went wrong!');
        }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">

            <h1 className='font-door text-2xl text-center text-lime-500 underline underline-offset-4 decoration-1 absolute top-6 left-6'>CookBook</h1>

            <div className='w-full md:w-1/2 lg:w-1/3'>
                <div className='flex flex-col items-center justify-center gap-4 font-mono p-4'>
                    <h1 className='text-4xl uppercase'>Login</h1>

                    <input
                        type="email"
                        placeholder="email"
                        className='focus:outline-none ring-1 w-full p-2'
                        value={cred.email}
                        onChange={(e) => setCred({ ...cred, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className='focus:outline-none ring-1 w-full p-2'
                        value={cred.password}
                        onChange={(e) => setCred({ ...cred, password: e.target.value })}
                    />

                    <button
                        className={`w-full bg-fuchsia-500 text-white px-4 py-2 tracking-widest disabled:opacity-50`}
                        onClick={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>

                    <p>Don't have an account?{" "}
                        <Link
                            to="/register"
                            className='text-blue-500 font-semibold tracking-wider underline underline-offset-2 decoration-0'
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>

            <span className='text-7xl absolute top-30 left-10 -z-10 md:text-9xl md:left-20'>🍆</span>
            <span className='text-7xl absolute bottom-30 right-10 -z-10 md:text-9xl md:right-40'>🥔</span>
            <span className='text-7xl absolute -top-4 -right-6 -rotate-15 -z-10 md:text-9xl md:top-10 md:right-10'>🫑</span>
            <span className='text-7xl absolute bottom-0 -left-10 -z-10 md:text-9xl md:-left-10'>🫛</span>
            <span className='text-7xl absolute rotate-160 -z-10 md:text-9xl'>🍅</span>

        </div>
    )
}

export default Login