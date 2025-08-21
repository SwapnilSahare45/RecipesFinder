import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav className="flex items-center justify-between font-mono py-4 border-b bg-white relative">
      {/* Logo */}
      <h1 className="font-door text-2xl text-center text-lime-500 underline underline-offset-4 decoration-1 pl-4">
        CookBook
      </h1>

      {/* Tablet & Desktop Nav */}
      <ul className="hidden text-lg justify-center gap-12 md:flex">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/share">Share Recipe</Link></li>
      </ul>

      {/* Tablet & Desktop Auth */}
      <div className="hidden gap-4 text-sm md:hidden md:pr-4">
        <Link to="/login" className="bg-fuchsia-500 text-white py-2 px-4 hover:bg-fuchsia-600 transition">Login</Link>
        <Link to="/register" className="bg-fuchsia-500 text-white py-2 px-4 hover:bg-fuchsia-600 transition">Register</Link>
      </div>

      <Link className="hidden mr-16 md:block">
        <FaCircleUser fill="#E12AFB" className="text-[32px]" />
      </Link>

      {/* Mobile Button */}
      <button onClick={toggleNav} className="pr-4 md:hidden">
        {showMobileNav ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
      </button>

      {/* Mobile Nav */}
      <div
        className={`absolute left-0 top-16 w-full bg-white flex-col px-12 py-6 overflow-hidden transition-all duration-500 md:hidden shadow z-10 border-t uppercase ${showMobileNav ? "max-h-96 opacity-100 flex" : "max-h-0 opacity-0 flex"}`}
      >
        <Link to="/" className="py-2">Home</Link>
        <Link to="/recipes" className="py-2">Recipes</Link>
        <Link to="/share" className="py-2">Share Recipe</Link>

        <Link to="/profile" className="py-2">Profile</Link>

        <Link to="/login" className="py-2">Login</Link>
        <Link to="/register" className="py-2">Register</Link>
      </div>
    </nav>
  );
};

export default Header;