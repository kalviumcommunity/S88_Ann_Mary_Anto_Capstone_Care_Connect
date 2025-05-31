import React from "react";
import { Link } from "react-router-dom";
import homeBg from "../assets/image.png";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="text-center bg-black bg-opacity-40 p-10 rounded">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Schedule Nurses to Your Home
        </h1>
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
