import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">

            <h1 className='font-door text-2xl text-center text-lime-500 underline underline-offset-4 decoration-1 absolute top-6 left-6'>CookBook</h1>

            <div className='w-full md:w-1/2 lg:w-1/3'>
                <div className='flex flex-col items-center justify-center gap-4 font-mono p-4'>
                    <h1 className='text-4xl uppercase'>Register</h1>

                    <input
                        type="text"
                        placeholder="name"
                        className='focus:outline-none ring-1 w-full p-2'
                    />
                    <input
                        type="email"
                        placeholder="email"
                        className='focus:outline-none ring-1 w-full p-2'
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className='focus:outline-none ring-1 w-full p-2'
                    />

                    <button
                        className='w-full bg-fuchsia-500 text-white px-4 py-2 tracking-widest'
                    >
                        Register
                    </button>

                    <p>I already have an account?{" "}
                        <Link
                            to="/login"
                            className='text-blue-500 font-semibold tracking-wider underline underline-offset-2 decoration-0'
                        >
                            Login
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

export default Signup