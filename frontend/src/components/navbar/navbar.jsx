import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image copy.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8" />
        <h1 className="text-2xl font-bold text-blue-900">Care-Connect</h1>
      </div>
      <div className="flex items-center gap-6">
        <Link to="/" className="text-black font-semibold hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-black font-semibold hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-black font-semibold hover:text-blue-600">Contact</Link>
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 font-semibold">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
